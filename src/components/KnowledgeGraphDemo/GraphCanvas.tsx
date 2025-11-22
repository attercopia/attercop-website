'use client';

import ForceGraph2D from 'react-force-graph-2d';
import { useCallback, useRef, useState, useMemo } from 'react';
import GraphControls from './GraphControls';
import NodeDetails from './NodeDetails';
import GraphLegend from './GraphLegend';
import { GraphNode, GraphData, isGraphDataset } from './types';
import { findConnectedNodes, searchNodes } from './graphHelpers';
import { getNodeColors } from './graphDataLoader';
import styles from './styles.module.css';

// Legacy colour mapping for node types (fallback)
const LEGACY_NODE_COLOURS = {
  project: '#1B4D5C',      // Deep Teal
  lesson: '#6DBAA1',       // Sea Green
  issue: '#E97B7A',        // Coral
  team: '#4A90A4',         // Ocean
  technology: '#F4B942',   // Amber
  expert: '#87A96B'        // Sage
};

export interface GraphCanvasProps {
  graphData: GraphData;
}

export default function GraphCanvas({ graphData }: GraphCanvasProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [filteredData, setFilteredData] = useState(graphData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Track which nodes have been manually positioned
  const fixedNodesRef = useRef<Set<string>>(new Set());

  // Get color mappings from dataset or use legacy fallback
  const nodeColors = useMemo(() => {
    if (isGraphDataset(graphData)) {
      return getNodeColors(graphData);
    }
    return LEGACY_NODE_COLOURS;
  }, [graphData]);



  // Convert edges to links for ForceGraph2D
  const graphDataForRendering = useMemo(() => {
    if (isGraphDataset(filteredData)) {
      return {
        nodes: filteredData.nodes,
        links: filteredData.edges
      };
    }
    return filteredData;
  }, [filteredData]);

  // Handle node click
  const handleNodeClick = useCallback((node: GraphNode) => {
    setSelectedNode(node);

    // Highlight connected nodes
    const { nodes: connectedNodes, links: connectedLinks } =
      findConnectedNodes(node.id, graphData);

    setHighlightNodes(new Set(connectedNodes));
    setHighlightLinks(new Set(connectedLinks));

    // Center camera on node
    if (graphRef.current) {
      graphRef.current.centerAt(node.x, node.y, 1000);
      graphRef.current.zoom(2, 1000);
    }
  }, [graphData]);

  // Handle node hover
  const handleNodeHover = useCallback((node: GraphNode | null) => {
    if (!selectedNode && node) {
      const { nodes: connectedNodes, links: connectedLinks } =
        findConnectedNodes(node.id, graphData);
      setHighlightNodes(new Set(connectedNodes));
      setHighlightLinks(new Set(connectedLinks));
    } else if (!selectedNode) {
      setHighlightNodes(new Set());
      setHighlightLinks(new Set());
    }
  }, [selectedNode, graphData]);

  // Handle node drag - fix position when dragged
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNodeDrag = useCallback((node: any) => {
    // Fix the node position (prevent forces from moving it)
    node.fx = node.x;
    node.fy = node.y;
    fixedNodesRef.current.add(node.id);
  }, []);

  // Handle node drag end - keep position fixed
  const handleNodeDragEnd = useCallback(() => {
    // Keep the node fixed at its dragged position
    // Don't release fx/fy so the node stays put
  }, []);

  // Custom node rendering
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const drawNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.label;
    const fontSize = 12 / globalScale;
    const nodeRadius = node.size / 4;
    const isHighlighted = highlightNodes.has(node.id);
    const isSelected = selectedNode?.id === node.id;

    // Node circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = (nodeColors as Record<string, string>)[node.type as string] || '#6B7280';  // Default gray if type not found
    ctx.fill();

    // Highlight ring
    if (isHighlighted || isSelected) {
      ctx.strokeStyle = isSelected ? '#FFD700' : '#6DBAA1';
      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.stroke();
    }

    // Label
    ctx.font = `${fontSize}px Inter`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#0A1628';

    // Word wrap for long labels
    const words = label.split(' ');
    const lineHeight = fontSize * 1.2;
    let line = '';
    let y = node.y + nodeRadius + fontSize;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > nodeRadius * 3 && n > 0) {
        ctx.fillText(line, node.x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, node.x, y);
  }, [highlightNodes, selectedNode, nodeColors]);

  // Custom link rendering with labels
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const drawLink = useCallback((link: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const isHighlighted = highlightLinks.has(link);
    const fontSize = 10 / globalScale;

    // Draw the link line
    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.strokeStyle = isHighlighted ? '#6DBAA1' : '#D1D5DB';
    ctx.lineWidth = (isHighlighted ? 3 : 1) / globalScale;
    ctx.stroke();

    // Draw edge label if not too zoomed out
    if (globalScale > 0.8 && link.type) {
      const midX = (link.source.x + link.target.x) / 2;
      const midY = (link.source.y + link.target.y) / 2;

      // Background for better readability
      ctx.font = `${fontSize}px Inter`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const label = link.type.replace(/_/g, ' ');
      const metrics = ctx.measureText(label);
      const padding = 4 / globalScale;

      // Draw background rectangle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(
        midX - metrics.width / 2 - padding,
        midY - fontSize / 2 - padding,
        metrics.width + padding * 2,
        fontSize + padding * 2
      );

      // Draw text
      ctx.fillStyle = isHighlighted ? '#1B4D5C' : '#6B7280';
      ctx.fillText(label, midX, midY);
    }
  }, [highlightLinks]);

  // Handle search
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term) {
      const matchingNodes = searchNodes(term, graphData.nodes);
      const matchingIds = new Set(matchingNodes.map(n => n.id));

      const edges = isGraphDataset(graphData) ? graphData.edges : graphData.links;
      const filteredEdges = edges.filter(e =>
        matchingIds.has(e.source as string) || matchingIds.has(e.target as string)
      );

      if (isGraphDataset(graphData)) {
        setFilteredData({
          ...graphData,
          nodes: graphData.nodes.filter(n => matchingIds.has(n.id)),
          edges: filteredEdges
        });
      } else {
        setFilteredData({
          nodes: graphData.nodes.filter(n => matchingIds.has(n.id)),
          links: filteredEdges
        });
      }
    } else {
      setFilteredData(graphData);
    }
  }, [graphData]);

  // Handle filter
  const handleFilter = useCallback((type: string) => {
    const newFilters = activeFilters.includes(type)
      ? activeFilters.filter(f => f !== type)
      : [...activeFilters, type];

    setActiveFilters(newFilters);

    if (newFilters.length > 0) {
      const filteredNodes = graphData.nodes.filter(n =>
        newFilters.includes(n.type)
      );
      const nodeIds = new Set(filteredNodes.map(n => n.id));

      const edges = isGraphDataset(graphData) ? graphData.edges : graphData.links;
      const filteredEdges = edges.filter(e =>
        nodeIds.has(e.source as string) && nodeIds.has(e.target as string)
      );

      if (isGraphDataset(graphData)) {
        setFilteredData({
          ...graphData,
          nodes: filteredNodes,
          edges: filteredEdges
        });
      } else {
        setFilteredData({
          nodes: filteredNodes,
          links: filteredEdges
        });
      }
    } else {
      setFilteredData(graphData);
    }
  }, [activeFilters, graphData]);

  // Reset view
  const handleReset = useCallback(() => {
    setSelectedNode(null);
    setHighlightNodes(new Set());
    setHighlightLinks(new Set());
    setSearchTerm('');
    setActiveFilters([]);
    setFilteredData(graphData);

    if (graphRef.current) {
      graphRef.current.centerAt(0, 0, 1000);
      graphRef.current.zoom(1, 1000);
    }
  }, [graphData]);

  return (
    <div className={styles.graphContainer}>
      <GraphControls
        onSearch={handleSearch}
        onFilter={handleFilter}
        onReset={handleReset}
        searchTerm={searchTerm}
        activeFilters={activeFilters}
        graphData={graphData}
      />

      {selectedNode && (
        <NodeDetails
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          graphData={graphData}
        />
      )}

      <GraphLegend graphData={graphData} nodeColors={nodeColors} />

      <ForceGraph2D
        ref={graphRef}
        graphData={graphDataForRendering}
        nodeLabel=""
        nodeColor={node => (nodeColors as Record<string, string>)[node.type as string] || '#6B7280'}
        nodeCanvasObject={drawNode}
        nodeCanvasObjectMode={() => 'replace'}
        linkCanvasObject={drawLink}
        linkCanvasObjectMode={() => 'replace'}
        linkColor={() => '#D1D5DB'}
        linkWidth={link => highlightLinks.has(link) ? 3 : 1}
        linkCurvature={0}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onNodeDrag={handleNodeDrag}
        onNodeDragEnd={handleNodeDragEnd}
        onBackgroundClick={() => {
          setSelectedNode(null);
          setHighlightNodes(new Set());
          setHighlightLinks(new Set());
        }}
        enablePanInteraction={true}
        enableZoomInteraction={true}
        enableNodeDrag={true}
        minZoom={0.5}
        maxZoom={5}
        // Improved force simulation for better readability
        d3AlphaDecay={0.02}         // Faster cooldown to settle quickly
        d3VelocityDecay={0.4}       // Higher damping for less movement
        warmupTicks={100}           // More initial positioning ticks
        cooldownTicks={Infinity}    // Keep simulation running but nodes stay fixed after drag
        cooldownTime={5000}         // 5 seconds to reach stable state
      />
    </div>
  );
}
