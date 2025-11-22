import { GraphNode, GraphEdge, GraphData, isGraphDataset } from './types';

// Improved layout configuration for better readability and spacing
// Larger spacing and strategic positioning for clearer visual hierarchy
export const LAYOUT_CONFIG = {
  project: { centerX: 0, centerY: -200, radius: 280, spread: 1.5 },      // Top center - core projects (more space)
  lesson: { centerX: 0, centerY: 300, radius: 250, spread: 1.4 },        // Bottom - lessons learned (more space)
  issue: { centerX: -450, centerY: 0, radius: 180, spread: 1.3 },        // Left - issues (further out)
  team: { centerX: 450, centerY: -150, radius: 160, spread: 1.2 },       // Right top - teams (further out)
  technology: { centerX: 450, centerY: 150, radius: 160, spread: 1.2 },  // Right bottom - tech (further out)
  expert: { centerX: -450, centerY: 250, radius: 140, spread: 1.1 }      // Left bottom - experts (further out)
};

/**
 * Calculate initial positions for nodes based on their type and index
 * Creates a clustered radial layout with nodes distributed in circles
 * Improved with better spacing and spiral distribution for many nodes
 */
export function calculateInitialPositions(nodes: GraphNode[]): GraphNode[] {
  // Group nodes by type
  const nodesByType = nodes.reduce((acc, node) => {
    if (!acc[node.type]) acc[node.type] = [];
    acc[node.type].push(node);
    return acc;
  }, {} as Record<string, GraphNode[]>);

  // Calculate positions for each type group
  Object.entries(nodesByType).forEach(([type, typeNodes]) => {
    const config = LAYOUT_CONFIG[type as keyof typeof LAYOUT_CONFIG];
    if (!config) {
      // For unknown types, place in a default location
      typeNodes.forEach((node, index) => {
        const angle = (index / typeNodes.length) * 2 * Math.PI;
        node.x = 600 * Math.cos(angle);
        node.y = 600 * Math.sin(angle);
      });
      return;
    }

    const count = typeNodes.length;

    typeNodes.forEach((node, index) => {
      // Use spiral distribution for better spacing when there are many nodes
      if (count > 8) {
        // Spiral layout: gradually increasing radius
        const spiralTurns = 2;
        const maxRadius = config.radius * config.spread;
        const radiusIncrement = maxRadius / count;
        const angleIncrement = (spiralTurns * 2 * Math.PI) / count;

        const radius = config.radius + (index * radiusIncrement);
        const angle = index * angleIncrement;

        node.x = config.centerX + radius * Math.cos(angle);
        node.y = config.centerY + radius * Math.sin(angle);
      } else {
        // Circle distribution for small groups
        const angle = (index / count) * 2 * Math.PI;
        const effectiveRadius = config.radius * config.spread;

        // Smaller random offset for more predictable layout
        const randomOffset = (Math.random() - 0.5) * 10;
        node.x = config.centerX + effectiveRadius * Math.cos(angle) + randomOffset;
        node.y = config.centerY + effectiveRadius * Math.sin(angle) + randomOffset;
      }
    });
  });

  return nodes;
}

export function findConnectedNodes(
  nodeId: string,
  graphData: GraphData
): { nodes: string[], links: GraphEdge[] } {
  const connectedNodes = new Set<string>();
  const connectedLinks: GraphEdge[] = [];

  // Support both new (edges) and legacy (links) formats
  const edges = isGraphDataset(graphData) ? graphData.edges : graphData.links;

  edges.forEach(edge => {
    if (edge.source === nodeId || edge.target === nodeId) {
      connectedNodes.add(edge.source);
      connectedNodes.add(edge.target);
      connectedLinks.push(edge);
    }
  });

  return {
    nodes: Array.from(connectedNodes),
    links: connectedLinks
  };
}

export function searchNodes(
  term: string,
  nodes: GraphNode[]
): GraphNode[] {
  const searchLower = term.toLowerCase();
  return nodes.filter(node => {
    // Search in label
    if (node.label.toLowerCase().includes(searchLower)) return true;

    // Search in metadata (legacy format) or properties (new format)
    const searchData = node.metadata || node.properties;
    if (searchData) {
      return Object.values(searchData).some(value =>
        String(value).toLowerCase().includes(searchLower)
      );
    }

    return false;
  });
}

export function filterNodesByType(
  types: string[],
  nodes: GraphNode[]
): GraphNode[] {
  if (types.length === 0) return nodes;
  return nodes.filter(node => types.includes(node.type));
}

export function getNodeStatistics(graphData: GraphData) {
  // Support both new (edges) and legacy (links) formats
  const edges = isGraphDataset(graphData) ? graphData.edges : graphData.links;

  const stats = {
    totalNodes: graphData.nodes.length,
    totalEdges: edges.length,
    nodesByType: {} as Record<string, number>,
    avgConnections: 0
  };

  graphData.nodes.forEach(node => {
    stats.nodesByType[node.type] = (stats.nodesByType[node.type] || 0) + 1;
  });

  const connectionCounts = graphData.nodes.map(node =>
    findConnectedNodes(node.id, graphData).nodes.length - 1
  );

  stats.avgConnections = connectionCounts.reduce((a, b) => a + b, 0) / graphData.nodes.length;

  return stats;
}
