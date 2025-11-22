'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { GraphData } from './types';
import { loadGraphDataset } from './graphDataLoader';
import { graphData as fallbackData } from './graphData';

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

export interface KnowledgeGraphDemoProps {
  dataSource?: string;  // Optional: URL or path to JSON dataset
  useStaticData?: boolean;  // Optional: Force use of static data
}

export default function KnowledgeGraphDemo({
  dataSource,
  useStaticData = false
}: KnowledgeGraphDemoProps = {}) {
  const [isMobile, setIsMobile] = useState(false);
  const [graphDataState, setGraphDataState] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load graph data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // If static data requested or no data source provided, use fallback
        if (useStaticData || !dataSource) {
          setGraphDataState(fallbackData);
          setLoading(false);
          return;
        }

        // Load dynamic dataset
        const dataset = await loadGraphDataset(dataSource);
        setGraphDataState(dataset);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load graph data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load graph data');
        // Fallback to static data on error
        setGraphDataState(fallbackData);
        setLoading(false);
      }
    };

    loadData();
  }, [dataSource, useStaticData]);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className={styles.mobileView}>
        <Image
          src="/images/knowledge-graph-preview.png"
          alt="Lessons Learned Knowledge Graph"
          className={styles.mobileImage}
          width={800}
          height={600}
          priority
        />
        <p className={styles.mobileMessage}>
          View on desktop for interactive demo
        </p>
      </div>
    );
  }

  if (loading) {
    return <GraphSkeleton />;
  }

  if (error) {
    return (
      <div className={styles.errorView}>
        <p className={styles.errorMessage}>
          Error loading graph: {error}
        </p>
        <p className={styles.errorSubtext}>
          Showing fallback data
        </p>
      </div>
    );
  }

  if (!graphDataState) {
    return <GraphSkeleton />;
  }

  return (
    <div className={styles.container}>
      <GraphCanvas graphData={graphDataState} />
    </div>
  );
}
