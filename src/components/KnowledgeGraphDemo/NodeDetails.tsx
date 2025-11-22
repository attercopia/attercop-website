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
    // Support both metadata (legacy) and properties (new format)
    const data = node.metadata || node.properties;
    if (!data) return [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formatters: Record<string, (value: any) => string> = {
      duration_days: (v) => `${v} days`,
      resolution_time_hours: (v) => `${v} hours`,
      team_size: (v) => `${v} people`,
      times_referenced: (v) => `${v} times`,
      lessons_contributed: (v) => `${v} lessons`,
      consultations: (v) => `${v} consultations`
    };

    return Object.entries(data)
      .filter(([key]) => key !== 'expertise' && key !== 'size')
      .map(([key, value]) => {
        // Handle arrays (like expertise, tags, etc.)
        if (Array.isArray(value)) {
          return {
            label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            value: value.join(', ')
          };
        }
        return {
          label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          value: formatters[key] ? formatters[key](value) : String(value)
        };
      });
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
