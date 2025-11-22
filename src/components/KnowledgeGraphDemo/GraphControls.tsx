import { useMemo } from 'react';
import styles from './styles.module.css';
import { GraphData, isGraphDataset } from './types';
import { getNodeIcons } from './graphDataLoader';

interface GraphControlsProps {
  onSearch: (term: string) => void;
  onFilter: (type: string) => void;
  onReset: () => void;
  searchTerm: string;
  activeFilters: string[];
  graphData: GraphData;
}

// Legacy fallback for icon mapping
const LEGACY_NODE_ICONS: Record<string, string> = {
  project: '📊',
  lesson: '💡',
  issue: '⚠️',
  team: '👥',
  technology: '⚙️',
  expert: '🎓'
};

export default function GraphControls({
  onSearch,
  onFilter,
  onReset,
  searchTerm,
  activeFilters,
  graphData
}: GraphControlsProps) {
  // Generate node types from data
  const nodeTypes = useMemo(() => {
    if (isGraphDataset(graphData)) {
      const icons = getNodeIcons(graphData);
      return Object.entries(graphData.nodeTypes).map(([type, config]) => ({
        type,
        label: config.label,
        icon: icons[type] || '⬤'
      }));
    }

    // Legacy format - extract unique types
    const uniqueTypes = new Set(graphData.nodes.map(n => n.type));
    return Array.from(uniqueTypes).map(type => ({
      type,
      label: type.charAt(0).toUpperCase() + type.slice(1) + 's',
      icon: LEGACY_NODE_ICONS[type] || '⬤'
    }));
  }, [graphData]);
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
        {nodeTypes.map(({ type, label, icon }) => (
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
