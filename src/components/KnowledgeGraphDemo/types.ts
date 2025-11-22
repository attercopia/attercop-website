// New dynamic graph dataset format
export interface GraphDataset {
  metadata: {
    id: string;
    name: string;
    description: string;
    version: string;
    created: string;
    domain: string;
    statistics?: {
      totalNodes: number;
      totalEdges: number;
      density: number;
    };
  };

  nodeTypes: {
    [key: string]: {
      label: string;
      color: string;
      icon: string;
      defaultSize?: number;
    };
  };

  edgeTypes: {
    [key: string]: {
      label: string;
      color?: string;
      style?: 'solid' | 'dashed' | 'dotted';
      arrow?: boolean;
    };
  };

  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Node definition
export interface GraphNode {
  id: string;
  label: string;
  type: string;  // Changed from union type to allow any string
  properties?: Record<string, unknown>;  // New format
  metadata?: Record<string, unknown>;    // Legacy format (backwards compatibility)
  position?: { x?: number; y?: number };
  size?: number;
  // Keep x/y at top level for backwards compatibility
  x?: number;
  y?: number;
}

// Edge definition
export interface GraphEdge {
  source: string;
  target: string;
  type: string;  // Changed from union type to allow any string
  weight?: number;
  properties?: Record<string, unknown>;
}

// Legacy format support (for backwards compatibility)
export interface LegacyGraphData {
  nodes: GraphNode[];
  links: GraphEdge[];
}

// Union type that works with both formats
export type GraphData = GraphDataset | LegacyGraphData;

// Type guards
export function isGraphDataset(data: GraphData): data is GraphDataset {
  return 'metadata' in data && 'nodeTypes' in data && 'edgeTypes' in data;
}

export function isLegacyGraphData(data: GraphData): data is LegacyGraphData {
  return !isGraphDataset(data);
}
