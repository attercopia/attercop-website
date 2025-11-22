# Knowledge Graph Demo Component Specification
## Implementation Reference for Claude Code
## Project: Attercop Website - Interactive Lessons Learned Database

---

## OVERVIEW

Build an interactive knowledge graph visualization component for the Attercop website homepage. This component demonstrates knowledge engineering capabilities through a "Lessons Learned Database" that connects project data, issues, lessons, teams, technologies and experts to help engineering teams avoid repeating past mistakes.

**Location**: Homepage interactive demo section
**Framework**: Next.js 14 with TypeScript
**Primary Library**: react-force-graph-2d
**Dimensions**: 100% width, 600px height (desktop), static image (mobile)

---

## COMPONENT STRUCTURE

```
components/
  └── KnowledgeGraphDemo/
      ├── index.tsx              // Main component with responsive wrapper
      ├── GraphCanvas.tsx        // Force graph renderer
      ├── GraphControls.tsx      // Search, filter, zoom controls  
      ├── NodeDetails.tsx        // Detail panel for selected nodes
      ├── GraphLegend.tsx        // Node type legend
      ├── graphData.ts           // Static graph data
      ├── graphHelpers.ts        // Utility functions
      ├── types.ts               // TypeScript interfaces
      └── styles.module.css      // Component styles
```

---

## DATA STRUCTURE

### TypeScript Interfaces (types.ts)

```typescript
export interface GraphNode {
  id: string;
  label: string;
  type: 'project' | 'lesson' | 'issue' | 'team' | 'technology' | 'expert';
  size: number;
  x?: number;
  y?: number;
  metadata?: {
    // Project metadata
    status?: 'completed' | 'in-progress' | 'failed';
    outcome?: 'success' | 'partial' | 'failure';
    team_size?: number;
    duration_days?: number;
    cost_impact?: string;
    completion_date?: string;
    industry?: string;
    
    // Lesson metadata  
    category?: 'performance' | 'strategy' | 'deployment' | 'process' | 'quality' | 'security' | 'finance' | 'stability';
    severity?: 'low' | 'medium' | 'high' | 'critical';
    times_referenced?: number;
    prevention_value?: string;
    discovered_date?: string;
    
    // Issue metadata
    impact?: 'low' | 'medium' | 'high' | 'critical';
    resolution_time_hours?: number;
    root_cause?: string;
    
    // Team metadata
    expertise?: string[];
    
    // Technology metadata
    risk_level?: 'low' | 'medium' | 'high';
    expertise_required?: 'low' | 'medium' | 'high';
    
    // Expert metadata
    specialisation?: string;
    lessons_contributed?: number;
    consultations?: number;
  };
}

export interface GraphEdge {
  source: string;
  target: string;
  type: 'generated' | 'encountered' | 'led_to' | 'delivered' | 'used_in' | 'documented' | 'relates_to';
  weight: number;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}
```

### Static Graph Data (graphData.ts)

```typescript
export const graphData: GraphData = {
  nodes: [
    // Projects (6 nodes)
    { id: "proj_001", label: "API Gateway Migration", type: "project", size: 40, 
      metadata: { status: "completed", outcome: "success", team_size: 8, duration_days: 120, cost_impact: "+£2.3M revenue", completion_date: "2024-03", industry: "FinTech" }},
    { id: "proj_002", label: "Data Pipeline Refactor", type: "project", size: 35,
      metadata: { status: "completed", outcome: "success", team_size: 6, duration_days: 90, cost_impact: "+£1.8M efficiency", completion_date: "2024-02", industry: "FinTech" }},
    { id: "proj_003", label: "Mobile App Replatform", type: "project", size: 30,
      metadata: { status: "completed", outcome: "partial", team_size: 10, duration_days: 150, cost_impact: "+£0.5M", completion_date: "2023-12", industry: "Retail" }},
    { id: "proj_004", label: "Cloud Cost Optimisation", type: "project", size: 45,
      metadata: { status: "completed", outcome: "success", team_size: 4, duration_days: 60, cost_impact: "-£800K costs", completion_date: "2024-01", industry: "SaaS" }},
    { id: "proj_005", label: "Security Audit Response", type: "project", size: 25,
      metadata: { status: "completed", outcome: "failure", team_size: 5, duration_days: 45, cost_impact: "-£200K", completion_date: "2023-11", industry: "Healthcare" }},
    { id: "proj_006", label: "ML Platform Build", type: "project", size: 50,
      metadata: { status: "completed", outcome: "success", team_size: 12, duration_days: 180, cost_impact: "+£5M opportunity", completion_date: "2024-04", industry: "FinTech" }},
    
    // Lessons (8 nodes)
    { id: "lesson_001", label: "Early load testing critical", type: "lesson", size: 35,
      metadata: { category: "performance", severity: "critical", times_referenced: 14, prevention_value: "£450K saved", discovered_date: "2023-11" }},
    { id: "lesson_002", label: "Incremental migration reduces risk", type: "lesson", size: 40,
      metadata: { category: "strategy", severity: "high", times_referenced: 8, prevention_value: "£300K saved", discovered_date: "2023-10" }},
    { id: "lesson_003", label: "Feature flags enable safe rollout", type: "lesson", size: 30,
      metadata: { category: "deployment", severity: "high", times_referenced: 12, prevention_value: "£200K saved", discovered_date: "2023-09" }},
    { id: "lesson_004", label: "Document decisions immediately", type: "lesson", size: 25,
      metadata: { category: "process", severity: "medium", times_referenced: 20, prevention_value: "£150K saved", discovered_date: "2023-08" }},
    { id: "lesson_005", label: "Cross-team reviews catch issues", type: "lesson", size: 35,
      metadata: { category: "quality", severity: "high", times_referenced: 10, prevention_value: "£500K saved", discovered_date: "2023-12" }},
    { id: "lesson_006", label: "Automate security scanning", type: "lesson", size: 45,
      metadata: { category: "security", severity: "critical", times_referenced: 6, prevention_value: "£1M risk avoided", discovered_date: "2023-11" }},
    { id: "lesson_007", label: "Monitor cost metrics daily", type: "lesson", size: 30,
      metadata: { category: "finance", severity: "medium", times_referenced: 15, prevention_value: "£600K saved", discovered_date: "2024-01" }},
    { id: "lesson_008", label: "Version lock dependencies", type: "lesson", size: 35,
      metadata: { category: "stability", severity: "high", times_referenced: 9, prevention_value: "£250K saved", discovered_date: "2023-10" }},
    
    // Issues (6 nodes)
    { id: "issue_001", label: "Memory leak in webhooks", type: "issue", size: 20,
      metadata: { impact: "high", resolution_time_hours: 72, cost_impact: "£120K", root_cause: "Improper connection pooling" }},
    { id: "issue_002", label: "Race condition in payments", type: "issue", size: 25,
      metadata: { impact: "critical", resolution_time_hours: 24, cost_impact: "£300K", root_cause: "Missing transaction locks" }},
    { id: "issue_003", label: "Slow query performance", type: "issue", size: 15,
      metadata: { impact: "medium", resolution_time_hours: 48, cost_impact: "£50K", root_cause: "Missing database indexes" }},
    { id: "issue_004", label: "Third-party API failures", type: "issue", size: 20,
      metadata: { impact: "high", resolution_time_hours: 96, cost_impact: "£200K", root_cause: "No fallback mechanism" }},
    { id: "issue_005", label: "Config drift across envs", type: "issue", size: 18,
      metadata: { impact: "medium", resolution_time_hours: 36, cost_impact: "£80K", root_cause: "Manual configuration management" }},
    { id: "issue_006", label: "Inadequate error handling", type: "issue", size: 22,
      metadata: { impact: "high", resolution_time_hours: 60, cost_impact: "£150K", root_cause: "Missing error boundaries" }},
    
    // Teams (4 nodes)
    { id: "team_001", label: "Platform Engineering", type: "team", size: 25,
      metadata: { expertise: ["microservices", "cloud", "DevOps"], size: 12 }},
    { id: "team_002", label: "Data Engineering", type: "team", size: 20,
      metadata: { expertise: ["ETL", "data pipelines", "analytics"], size: 8 }},
    { id: "team_003", label: "Mobile Development", type: "team", size: 18,
      metadata: { expertise: ["iOS", "Android", "React Native"], size: 6 }},
    { id: "team_004", label: "DevOps", type: "team", size: 22,
      metadata: { expertise: ["CI/CD", "monitoring", "infrastructure"], size: 5 }},
    
    // Technologies (4 nodes)
    { id: "tech_001", label: "Kubernetes", type: "technology", size: 15,
      metadata: { category: "infrastructure", risk_level: "medium", expertise_required: "high" }},
    { id: "tech_002", label: "PostgreSQL", type: "technology", size: 15,
      metadata: { category: "database", risk_level: "low", expertise_required: "medium" }},
    { id: "tech_003", label: "React Native", type: "technology", size: 12,
      metadata: { category: "mobile", risk_level: "medium", expertise_required: "medium" }},
    { id: "tech_004", label: "Apache Kafka", type: "technology", size: 18,
      metadata: { category: "messaging", risk_level: "high", expertise_required: "high" }},
    
    // Experts (2 nodes)
    { id: "expert_001", label: "Sarah Chen", type: "expert", size: 20,
      metadata: { specialisation: "Distributed Systems", lessons_contributed: 8, consultations: 23 }},
    { id: "expert_002", label: "Marcus Johnson", type: "expert", size: 18,
      metadata: { specialisation: "Data Architecture", lessons_contributed: 6, consultations: 18 }}
  ],
  
  edges: [
    // Project -> Lesson connections
    { source: "proj_001", target: "lesson_001", type: "generated", weight: 3 },
    { source: "proj_001", target: "lesson_003", type: "generated", weight: 2 },
    { source: "proj_002", target: "lesson_002", type: "generated", weight: 3 },
    { source: "proj_002", target: "lesson_008", type: "generated", weight: 2 },
    { source: "proj_003", target: "lesson_003", type: "generated", weight: 2 },
    { source: "proj_004", target: "lesson_007", type: "generated", weight: 3 },
    { source: "proj_005", target: "lesson_006", type: "generated", weight: 3 },
    { source: "proj_006", target: "lesson_004", type: "generated", weight: 2 },
    
    // Project -> Issue connections
    { source: "proj_001", target: "issue_001", type: "encountered", weight: 2 },
    { source: "proj_002", target: "issue_003", type: "encountered", weight: 1 },
    { source: "proj_003", target: "issue_004", type: "encountered", weight: 2 },
    { source: "proj_005", target: "issue_006", type: "encountered", weight: 3 },
    { source: "proj_006", target: "issue_002", type: "encountered", weight: 2 },
    
    // Issue -> Lesson connections
    { source: "issue_001", target: "lesson_001", type: "led_to", weight: 2 },
    { source: "issue_002", target: "lesson_008", type: "led_to", weight: 3 },
    { source: "issue_003", target: "lesson_005", type: "led_to", weight: 1 },
    { source: "issue_004", target: "lesson_003", type: "led_to", weight: 2 },
    
    // Team -> Project connections
    { source: "team_001", target: "proj_001", type: "delivered", weight: 2 },
    { source: "team_002", target: "proj_002", type: "delivered", weight: 2 },
    { source: "team_003", target: "proj_003", type: "delivered", weight: 2 },
    { source: "team_004", target: "proj_004", type: "delivered", weight: 2 },
    
    // Technology -> Project connections
    { source: "tech_001", target: "proj_001", type: "used_in", weight: 1 },
    { source: "tech_002", target: "proj_002", type: "used_in", weight: 1 },
    { source: "tech_003", target: "proj_003", type: "used_in", weight: 1 },
    { source: "tech_004", target: "proj_006", type: "used_in", weight: 1 },
    
    // Expert -> Lesson connections
    { source: "expert_001", target: "lesson_001", type: "documented", weight: 2 },
    { source: "expert_001", target: "lesson_005", type: "documented", weight: 1 },
    { source: "expert_002", target: "lesson_002", type: "documented", weight: 2 },
    { source: "expert_002", target: "lesson_007", type: "documented", weight: 1 },
    
    // Cross-lesson relationships
    { source: "lesson_001", target: "lesson_005", type: "relates_to", weight: 1 },
    { source: "lesson_003", target: "lesson_006", type: "relates_to", weight: 1 },
    { source: "lesson_002", target: "lesson_004", type: "relates_to", weight: 1 }
  ]
};
```

---

## MAIN COMPONENT IMPLEMENTATION

### index.tsx - Main Wrapper

```typescript
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Dynamic import to prevent SSR issues
const GraphCanvas = dynamic(() => import('./GraphCanvas'), { 
  ssr: false,
  loading: () => <GraphSkeleton />
});

const GraphSkeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonPulse} />
  </div>
);

export default function KnowledgeGraphDemo() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (isMobile) {
    return (
      <div className={styles.mobileView}>
        <img 
          src="/images/knowledge-graph-preview.png" 
          alt="Lessons Learned Knowledge Graph"
          className={styles.mobileImage}
        />
        <p className={styles.mobileMessage}>
          View on desktop for interactive demo
        </p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <GraphCanvas />
    </div>
  );
}
```

### GraphCanvas.tsx - Main Graph Component

```typescript
import ForceGraph2D from 'react-force-graph-2d';
import { useCallback, useRef, useState, useMemo } from 'react';
import { graphData } from './graphData';
import GraphControls from './GraphControls';
import NodeDetails from './NodeDetails';
import GraphLegend from './GraphLegend';
import { GraphNode, GraphEdge } from './types';
import { findConnectedNodes, searchNodes } from './graphHelpers';
import styles from './styles.module.css';

// Colour mapping for node types
const NODE_COLOURS = {
  project: '#1B4D5C',      // Deep Teal
  lesson: '#6DBAA1',       // Sea Green
  issue: '#E97B7A',        // Coral
  team: '#4A90A4',         // Ocean
  technology: '#F4B942',   // Amber
  expert: '#87A96B'        // Sage
};

export default function GraphCanvas() {
  const graphRef = useRef<any>();
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [filteredData, setFilteredData] = useState(graphData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
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
  }, []);
  
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
  }, [selectedNode]);
  
  // Custom node rendering
  const drawNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.label;
    const fontSize = 12 / globalScale;
    const nodeRadius = node.size / 4;
    const isHighlighted = highlightNodes.has(node.id);
    const isSelected = selectedNode?.id === node.id;
    
    // Node circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = NODE_COLOURS[node.type as keyof typeof NODE_COLOURS];
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
  }, [highlightNodes, selectedNode]);
  
  // Handle search
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term) {
      const matchingNodes = searchNodes(term, graphData.nodes);
      const matchingIds = new Set(matchingNodes.map(n => n.id));
      
      setFilteredData({
        nodes: graphData.nodes.filter(n => matchingIds.has(n.id)),
        edges: graphData.edges.filter(e => 
          matchingIds.has(e.source) || matchingIds.has(e.target)
        )
      });
    } else {
      setFilteredData(graphData);
    }
  }, []);
  
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
      
      setFilteredData({
        nodes: filteredNodes,
        edges: graphData.edges.filter(e => 
          nodeIds.has(e.source) && nodeIds.has(e.target)
        )
      });
    } else {
      setFilteredData(graphData);
    }
  }, [activeFilters]);
  
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
  }, []);
  
  return (
    <div className={styles.graphContainer}>
      <GraphControls
        onSearch={handleSearch}
        onFilter={handleFilter}
        onReset={handleReset}
        searchTerm={searchTerm}
        activeFilters={activeFilters}
      />
      
      {selectedNode && (
        <NodeDetails 
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          graphData={graphData}
        />
      )}
      
      <GraphLegend />
      
      <ForceGraph2D
        ref={graphRef}
        graphData={filteredData}
        nodeLabel=""
        nodeColor={node => NODE_COLOURS[node.type as keyof typeof NODE_COLOURS]}
        nodeCanvasObject={drawNode}
        nodeCanvasObjectMode={() => 'replace'}
        linkColor={() => '#D1D5DB'}
        linkWidth={link => highlightLinks.has(link) ? 3 : 1}
        linkCurvature={0.2}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
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
        warmupTicks={100}
        cooldownTicks={0}
      />
    </div>
  );
}
```

### GraphControls.tsx - Search and Filter Controls

```typescript
import { useState } from 'react';
import styles from './styles.module.css';

interface GraphControlsProps {
  onSearch: (term: string) => void;
  onFilter: (type: string) => void;
  onReset: () => void;
  searchTerm: string;
  activeFilters: string[];
}

const NODE_TYPES = [
  { type: 'project', label: 'Projects', icon: '📊' },
  { type: 'lesson', label: 'Lessons', icon: '💡' },
  { type: 'issue', label: 'Issues', icon: '⚠️' },
  { type: 'team', label: 'Teams', icon: '👥' },
  { type: 'technology', label: 'Tech', icon: '⚙️' },
  { type: 'expert', label: 'Experts', icon: '🎓' }
];

export default function GraphControls({ 
  onSearch, 
  onFilter, 
  onReset, 
  searchTerm,
  activeFilters 
}: GraphControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search lessons, projects, issues..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20">
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
      </div>
      
      <div className={styles.filters}>
        {NODE_TYPES.map(({ type, label, icon }) => (
          <button
            key={type}
            className={`${styles.filterBtn} ${activeFilters.includes(type) ? styles.active : ''}`}
            onClick={() => onFilter(type)}
            title={`Filter ${label}`}
          >
            <span className={styles.filterIcon}>{icon}</span>
            <span className={styles.filterLabel}>{label}</span>
          </button>
        ))}
      </div>
      
      <button onClick={onReset} className={styles.resetBtn}>
        Reset View
      </button>
    </div>
  );
}
```

### NodeDetails.tsx - Node Details Panel

```typescript
import { useMemo } from 'react';
import { GraphNode, GraphData } from './types';
import { findConnectedNodes } from './graphHelpers';
import styles from './styles.module.css';

interface NodeDetailsProps {
  node: GraphNode;
  onClose: () => void;
  graphData: GraphData;
}

export default function NodeDetails({ node, onClose, graphData }: NodeDetailsProps) {
  const getNodeIcon = (type: string) => {
    const icons: Record<string, string> = {
      project: '📊',
      lesson: '💡',
      issue: '⚠️',
      team: '👥',
      technology: '⚙️',
      expert: '🎓'
    };
    return icons[type] || '📌';
  };
  
  const getTypeColor = (type: string) => {
    const colours: Record<string, string> = {
      project: '#1B4D5C',
      lesson: '#6DBAA1',
      issue: '#E97B7A',
      team: '#4A90A4',
      technology: '#F4B942',
      expert: '#87A96B'
    };
    return colours[type] || '#666';
  };
  
  const metadata = useMemo(() => {
    if (!node.metadata) return [];
    
    const formatters: Record<string, (value: any) => string> = {
      duration_days: (v) => `${v} days`,
      resolution_time_hours: (v) => `${v} hours`,
      team_size: (v) => `${v} people`,
      times_referenced: (v) => `${v} times`,
      lessons_contributed: (v) => `${v} lessons`,
      consultations: (v) => `${v} consultations`
    };
    
    return Object.entries(node.metadata)
      .filter(([key]) => key !== 'expertise' && key !== 'size')
      .map(([key, value]) => ({
        label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        value: formatters[key] ? formatters[key](value) : String(value)
      }));
  }, [node]);
  
  const connections = useMemo(() => {
    const { nodes: connectedIds } = findConnectedNodes(node.id, graphData);
    return graphData.nodes
      .filter(n => connectedIds.includes(n.id) && n.id !== node.id)
      .reduce((acc, n) => {
        if (!acc[n.type]) acc[n.type] = [];
        acc[n.type].push(n);
        return acc;
      }, {} as Record<string, GraphNode[]>);
  }, [node, graphData]);
  
  return (
    <div className={styles.detailsPanel}>
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      
      <div className={styles.detailsHeader}>
        <span className={styles.nodeIcon}>{getNodeIcon(node.type)}</span>
        <div>
          <h3 className={styles.nodeTitle}>{node.label}</h3>
          <span 
            className={styles.nodeType} 
            style={{ backgroundColor: getTypeColor(node.type) + '20', color: getTypeColor(node.type) }}
          >
            {node.type}
          </span>
        </div>
      </div>
      
      {metadata.length > 0 && (
        <div className={styles.detailsBody}>
          {metadata.map(({ label, value }) => (
            <div key={label} className={styles.detailRow}>
              <span className={styles.detailKey}>{label}:</span>
              <span className={styles.detailValue}>{value}</span>
            </div>
          ))}
        </div>
      )}
      
      {Object.keys(connections).length > 0 && (
        <div className={styles.connections}>
          <h4>Connections</h4>
          {Object.entries(connections).map(([type, nodes]) => (
            <div key={type} className={styles.connectionGroup}>
              <h5>{type.charAt(0).toUpperCase() + type.slice(1)}s</h5>
              <ul>
                {nodes.map(n => (
                  <li key={n.id}>
                    {getNodeIcon(n.type)} {n.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### GraphLegend.tsx - Legend Component

```typescript
import styles from './styles.module.css';

const LEGEND_ITEMS = [
  { type: 'project', label: 'Project', color: '#1B4D5C' },
  { type: 'lesson', label: 'Lesson', color: '#6DBAA1' },
  { type: 'issue', label: 'Issue', color: '#E97B7A' },
  { type: 'team', label: 'Team', color: '#4A90A4' },
  { type: 'technology', label: 'Tech', color: '#F4B942' },
  { type: 'expert', label: 'Expert', color: '#87A96B' }
];

export default function GraphLegend() {
  return (
    <div className={styles.legend}>
      {LEGEND_ITEMS.map(({ type, label, color }) => (
        <div key={type} className={styles.legendItem}>
          <span 
            className={styles.legendDot} 
            style={{ backgroundColor: color }}
          />
          <span className={styles.legendLabel}>{label}</span>
        </div>
      ))}
    </div>
  );
}
```

### graphHelpers.ts - Utility Functions

```typescript
import { GraphNode, GraphEdge, GraphData } from './types';

export function findConnectedNodes(
  nodeId: string, 
  graphData: GraphData
): { nodes: string[], links: GraphEdge[] } {
  const connectedNodes = new Set<string>();
  const connectedLinks: GraphEdge[] = [];
  
  graphData.edges.forEach(edge => {
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
    
    // Search in metadata
    if (node.metadata) {
      return Object.values(node.metadata).some(value => 
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
  const stats = {
    totalNodes: graphData.nodes.length,
    totalEdges: graphData.edges.length,
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
```

---

## STYLES (styles.module.css)

```css
.container {
  width: 100%;
  height: 600px;
  position: relative;
  background: linear-gradient(135deg, #F8FAFB 0%, #E5E7EB 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.graphContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

/* Controls */
.controls {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 320px;
}

.searchBox {
  position: relative;
  margin-bottom: 12px;
}

.searchInput {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}

.searchInput:focus {
  outline: none;
  border-color: #6DBAA1;
  box-shadow: 0 0 0 3px rgba(109, 186, 161, 0.1);
}

.searchIcon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  fill: #9CA3AF;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.filterBtn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid #E5E7EB;
  background: white;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.filterBtn:hover {
  border-color: #6DBAA1;
  background: #F0FDFB;
}

.filterBtn.active {
  background: #6DBAA1;
  color: white;
  border-color: #6DBAA1;
}

.filterIcon {
  font-size: 14px;
}

.filterLabel {
  font-weight: 500;
}

.resetBtn {
  padding: 8px 16px;
  background: #1B4D5C;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.resetBtn:hover {
  background: #164049;
}

/* Details Panel */
.detailsPanel {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 320px;
  max-height: 520px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow-y: auto;
}

.closeBtn {
  position: absolute;
  right: 12px;
  top: 12px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: #6B7280;
  transition: color 0.2s;
}

.closeBtn:hover {
  color: #1F2937;
}

.detailsHeader {
  padding: 20px;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: start;
  gap: 12px;
}

.nodeIcon {
  font-size: 32px;
}

.nodeTitle {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
}

.nodeType {
  display: inline-block;
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.detailsBody {
  padding: 20px;
  border-bottom: 1px solid #E5E7EB;
}

.detailRow {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 14px;
}

.detailKey {
  color: #6B7280;
  font-weight: 500;
}

.detailValue {
  color: #1F2937;
  font-weight: 600;
}

.connections {
  padding: 20px;
}

.connections h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1F2937;
}

.connectionGroup {
  margin-bottom: 16px;
}

.connectionGroup h5 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}

.connectionGroup ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.connectionGroup li {
  padding: 4px 0;
  font-size: 13px;
  color: #4B5563;
}

/* Legend */
.legend {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 16px;
  z-index: 10;
}

.legendItem {
  display: flex;
  align-items: center;
  gap: 6px;
}

.legendDot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legendLabel {
  font-size: 12px;
  font-weight: 500;
  color: #4B5563;
}

/* Mobile View */
.mobileView {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F8FAFB 0%, #E5E7EB 100%);
  border-radius: 12px;
  padding: 32px;
}

.mobileImage {
  width: 100%;
  max-width: 320px;
  height: auto;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.mobileMessage {
  font-size: 16px;
  color: #4B5563;
  text-align: center;
  margin: 0;
}

/* Loading Skeleton */
.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #F8FAFB 0%, #E5E7EB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.skeletonPulse {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(90deg, #E5E7EB 0%, #F3F4F6 50%, #E5E7EB 100%);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .controls {
    max-width: 280px;
  }
  
  .detailsPanel {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .container {
    height: 400px;
  }
  
  .legend {
    flex-wrap: wrap;
    max-width: 200px;
  }
}
```

---

## INSTALLATION & SETUP

### Required Dependencies

```json
{
  "dependencies": {
    "react-force-graph-2d": "^1.23.0",
    "force-graph": "^1.43.0",
    "d3-force": "^3.0.0"
  }
}
```

### Installation Commands

```bash
npm install react-force-graph-2d force-graph d3-force
```

### Next.js Configuration

No special configuration needed, but ensure dynamic imports are used to prevent SSR issues.

---

## INTEGRATION WITH HOMEPAGE

### Homepage Section Implementation

```tsx
// In your homepage component
import dynamic from 'next/dynamic';

const KnowledgeGraphDemo = dynamic(
  () => import('@/components/KnowledgeGraphDemo'),
  { 
    ssr: false,
    loading: () => <div>Loading knowledge graph...</div>
  }
);

// In the render method
<section className="demo-section">
  <div className="container">
    <div className="demo-header">
      <h2>Experience Our Knowledge Graph</h2>
      <p>
        Interact with a live demonstration of our knowledge graph technology. 
        Drag nodes, explore connections, and see how disparate data becomes 
        connected intelligence.
      </p>
    </div>
    <KnowledgeGraphDemo />
  </div>
</section>
```

---

## PERFORMANCE CONSIDERATIONS

1. **Lazy Load**: Component uses dynamic import to load only when needed
2. **WebGL Rendering**: Force-graph uses WebGL for >50 nodes
3. **Viewport Culling**: Only render visible nodes
4. **Throttled Interactions**: Mouse events throttled to 50ms
5. **Memoized Computations**: Heavy calculations cached with useMemo

---

## TESTING REQUIREMENTS

### Unit Tests
- Node rendering
- Search functionality  
- Filter functionality
- Connection highlighting
- Metadata display

### Integration Tests
- Graph loads within 2 seconds
- Interactions work smoothly
- Mobile fallback displays correctly
- All node types render correctly

### Browser Testing
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## ACCESSIBILITY

- Keyboard navigation support
- ARIA labels for controls
- Colour contrast compliance (WCAG AA)
- Screen reader announcements for interactions
- Focus indicators for all interactive elements

---

## NOTES FOR IMPLEMENTATION

1. Start with basic graph rendering, then add features incrementally
2. Test performance with full dataset before adding animations
3. Ensure mobile detection works reliably
4. Implement error boundaries for graph component
5. Add analytics tracking for user interactions
6. Consider adding a "tour" mode for first-time users
7. Implement data export feature if needed
8. Add ability to save/share specific graph views

---

END OF SPECIFICATION