import { useMemo } from 'react';
import styles from './styles.module.css';
import { GraphData, isGraphDataset } from './types';

interface GraphLegendProps {
  graphData: GraphData;
  nodeColors: Record<string, string>;
}

export default function GraphLegend({ graphData, nodeColors }: GraphLegendProps) {
  // Generate legend items from data
  const legendItems = useMemo(() => {
    if (isGraphDataset(graphData)) {
      return Object.entries(graphData.nodeTypes).map(([type, config]) => ({
        type,
        label: config.label,
        color: nodeColors[type] || '#6B7280'
      }));
    }

    // Legacy format - extract unique types
    const uniqueTypes = new Set(graphData.nodes.map(n => n.type));
    return Array.from(uniqueTypes).map(type => ({
      type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
      color: nodeColors[type] || '#6B7280'
    }));
  }, [graphData, nodeColors]);

  return (
    <div className={styles.legend}>
      {legendItems.map(({ type, label, color }) => (
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
