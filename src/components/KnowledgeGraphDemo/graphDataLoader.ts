import { GraphDataset, GraphNode } from './types';

/**
 * Load a graph dataset from a URL or path
 */
export async function loadGraphDataset(source: string): Promise<GraphDataset> {
  try {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`Failed to load graph data: ${response.statusText} `);
    }

    const data = await response.json();

    if (!validateGraphDataset(data)) {
      throw new Error('Invalid graph dataset format');
    }

    // Apply initial positions to nodes
    applyInitialPositions(data);

    return data;
  } catch (error) {
    console.error('Error loading graph dataset:', error);
    throw error;
  }
}

/**
 * Validate that the loaded data matches the GraphDataset structure
 */
export function validateGraphDataset(data: unknown): data is GraphDataset {
  return (
    data !== null &&
    typeof data === 'object' &&
    'metadata' in data &&
    'nodeTypes' in data &&
    'edgeTypes' in data &&
    'nodes' in data &&
    'edges' in data &&
    Array.isArray(data.nodes) &&
    Array.isArray(data.edges) &&
    typeof data.metadata === 'object' &&
    typeof data.nodeTypes === 'object' &&
    typeof data.edgeTypes === 'object'
  );
}

/**
 * Apply initial layout positions to nodes based on their types
 * Improved with better spacing and spiral distribution
 */
function applyInitialPositions(dataset: GraphDataset): void {
  // Improved layout configuration with better spacing
  const layoutConfig: Record<string, { centerX: number; centerY: number; radius: number; spread: number }> = {
    // Core incident types - center with more space
    incident: { centerX: 0, centerY: -200, radius: 250, spread: 1.4 },
    root_cause: { centerX: 0, centerY: 0, radius: 280, spread: 1.5 },

    // Symptoms and patterns - surrounding with better spacing
    symptom: { centerX: -450, centerY: -100, radius: 180, spread: 1.3 },
    pattern: { centerX: 450, centerY: -100, radius: 180, spread: 1.3 },

    // Lessons - bottom center
    lesson: { centerX: 0, centerY: 350, radius: 250, spread: 1.4 },
    understanding: { centerX: -300, centerY: 400, radius: 140, spread: 1.2 },
    principle: { centerX: 300, centerY: 400, radius: 140, spread: 1.2 },

    // Technical elements - right side with more distance
    technology: { centerX: 500, centerY: 100, radius: 160, spread: 1.2 },
    service: { centerX: 550, centerY: -150, radius: 130, spread: 1.1 },
    deployment: { centerX: 500, centerY: 250, radius: 130, spread: 1.1 },
    environment: { centerX: 600, centerY: 0, radius: 110, spread: 1.0 },

    // Organizational elements - left side with more distance
    team: { centerX: -500, centerY: 100, radius: 160, spread: 1.2 },
    expert: { centerX: -550, centerY: -150, radius: 130, spread: 1.1 },
    project: { centerX: -500, centerY: 250, radius: 130, spread: 1.1 },

    // Security and changes - outer edges
    vulnerability: { centerX: 350, centerY: -350, radius: 110, spread: 1.0 },
    change: { centerX: -350, centerY: -350, radius: 110, spread: 1.0 },

    // Metrics and objectives - outer ring with more space
    metric: { centerX: 0, centerY: 500, radius: 140, spread: 1.2 },
    objective: { centerX: 0, centerY: -400, radius: 140, spread: 1.2 },
    methodology: { centerX: 650, centerY: 200, radius: 110, spread: 1.0 },
  };

  // Group nodes by type
  const nodesByType = dataset.nodes.reduce((acc, node) => {
    if (!acc[node.type]) acc[node.type] = [];
    acc[node.type].push(node);
    return acc;
  }, {} as Record<string, GraphNode[]>);

  // Calculate positions for each type group
  Object.entries(nodesByType).forEach(([type, typeNodes]) => {
    const config = layoutConfig[type] || { centerX: 600, centerY: 0, radius: 200, spread: 1.3 };
    const count = typeNodes.length;

    typeNodes.forEach((node, index) => {
      // Only set position if not already set
      if (node.x === undefined || node.y === undefined) {
        // Use spiral distribution for better spacing when there are many nodes
        if (count > 8) {
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
          const randomOffset = (Math.random() - 0.5) * 10;

          node.x = config.centerX + effectiveRadius * Math.cos(angle) + randomOffset;
          node.y = config.centerY + effectiveRadius * Math.sin(angle) + randomOffset;
        }
      }
    });
  });
}

/**
 * Get node colors from dataset
 */
export function getNodeColors(dataset: GraphDataset): Record<string, string> {
  const colors: Record<string, string> = {};

  Object.entries(dataset.nodeTypes).forEach(([type, config]) => {
    colors[type] = config.color;
  });

  return colors;
}

/**
 * Get edge colors from dataset
 */
export function getEdgeColors(dataset: GraphDataset): Record<string, string> {
  const colors: Record<string, string> = {};

  Object.entries(dataset.edgeTypes).forEach(([type, config]) => {
    if (config.color) {
      colors[type] = config.color;
    }
  });

  return colors;
}

/**
 * Get node icons from dataset
 */
export function getNodeIcons(dataset: GraphDataset): Record<string, string> {
  const icons: Record<string, string> = {};

  Object.entries(dataset.nodeTypes).forEach(([type, config]) => {
    icons[type] = config.icon;
  });

  return icons;
}
