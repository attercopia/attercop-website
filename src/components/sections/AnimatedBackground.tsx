"use client"

import { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  type: 'core' | 'cluster' | 'leaf';
  pulse: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize knowledge graph nodes with clustered topology
    const initializeNodes = () => {
      const nodes: Node[] = [];

      // Vertical spread - use more of the available height (60% instead of 40%)
      const verticalMin = 0.2;
      const verticalMax = 0.8;

      // Define cluster centers (hub positions)
      const clusterCount = 6;
      const clusterCenters: Array<{ x: number; y: number; radius: number }> = [];

      for (let i = 0; i < clusterCount; i++) {
        clusterCenters.push({
          x: canvas.width * (0.15 + (i / (clusterCount - 1)) * 0.7),
          y: canvas.height * (verticalMin + Math.random() * (verticalMax - verticalMin)),
          radius: canvas.width * 0.12 // Cluster radius
        });
      }

      let nodeId = 0;

      // Create clusters with hub-and-spoke topology
      clusterCenters.forEach((center) => {
        // Create hub node (core) at cluster center
        const hubId = nodeId++;
        nodes.push({
          id: hubId,
          x: center.x,
          y: center.y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          connections: [],
          type: 'core',
          pulse: Math.random() * Math.PI * 2
        });

        // Create cluster nodes (spokes) around the hub
        const spokesPerCluster = 8 + Math.floor(Math.random() * 4);
        for (let i = 0; i < spokesPerCluster; i++) {
          const angle = (i / spokesPerCluster) * Math.PI * 2;
          const distance = center.radius * (0.4 + Math.random() * 0.6);

          nodes.push({
            id: nodeId++,
            x: center.x + Math.cos(angle) * distance,
            y: center.y + Math.sin(angle) * distance,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            connections: [hubId], // Connect to hub
            type: 'cluster',
            pulse: Math.random() * Math.PI * 2
          });
        }

        // Create leaf nodes around spokes
        const leavesPerCluster = 12 + Math.floor(Math.random() * 6);
        for (let i = 0; i < leavesPerCluster; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = center.radius * (0.6 + Math.random() * 0.5);

          nodes.push({
            id: nodeId++,
            x: center.x + Math.cos(angle) * distance,
            y: center.y + Math.sin(angle) * distance,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            connections: [],
            type: 'leaf',
            pulse: Math.random() * Math.PI * 2
          });
        }
      });

      // Create hub-to-hub connections (sparse inter-cluster connections)
      const hubs = nodes.filter(n => n.type === 'core');
      hubs.forEach((hub, i) => {
        // Connect to 2-3 other hubs
        const connectionCount = 2 + Math.floor(Math.random() * 2);
        const otherHubs = hubs
          .map((h, idx) => ({ node: h, distance: Math.hypot(h.x - hub.x, h.y - hub.y), idx }))
          .filter(h => h.idx !== i)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, connectionCount);

        hub.connections = otherHubs.map(h => h.node.id);
      });

      // Connect spokes to hub and nearby spokes within cluster
      nodes.forEach((node, i) => {
        if (node.type === 'cluster') {
          // Find nearby cluster nodes in same cluster
          const nearbySpokes = nodes
            .map((other, j) => ({
              index: j,
              distance: Math.hypot(node.x - other.x, node.y - other.y)
            }))
            .filter(d => d.index !== i && nodes[d.index].type === 'cluster' && d.distance < canvas.width * 0.08)
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 2);

          node.connections.push(...nearbySpokes.map(s => s.index));
        }
      });

      // Connect leaf nodes to nearest spoke
      nodes.forEach((node) => {
        if (node.type === 'leaf') {
          const nearestSpoke = nodes
            .map((other, j) => ({
              index: j,
              distance: Math.hypot(node.x - other.x, node.y - other.y)
            }))
            .filter(d => nodes[d.index].type === 'cluster')
            .sort((a, b) => a.distance - b.distance)[0];

          if (nearestSpoke) {
            node.connections = [nearestSpoke.index];
          }
        }
      });

      return nodes;
    };

    nodesRef.current = initializeNodes();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let time = 0;
    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update node positions
      nodes.forEach(node => {
        // Update pulse
        node.pulse += 0.02;

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Mouse attraction for core nodes
        if (mouse.active && node.type === 'core') {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            node.vx += (dx / distance) * force * 0.02;
            node.vy += (dy / distance) * force * 0.02;
          }
        }

        // Boundary checking with wrapping
        if (node.x < -50) node.x = canvas.width + 50;
        if (node.x > canvas.width + 50) node.x = -50;
        if (node.y < -50) node.y = canvas.height + 50;
        if (node.y > canvas.height + 50) node.y = -50;

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;
      });

      // Draw connections (knowledge graph edges)
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes[targetId];
          if (!target) return;

          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const distance = Math.hypot(dx, dy);

          // Only draw if within reasonable distance
          if (distance < 350) {
            const opacity = Math.max(0, (350 - distance) / 350) * 0.15;

            // Data flow animation
            const flowOffset = (time * 50) % distance;

            ctx.save();

            // Draw base connection line
            ctx.strokeStyle = `rgba(109, 186, 161, ${opacity})`;
            ctx.lineWidth = node.type === 'core' ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();

            // Draw data flow particle
            const flowX = node.x + (dx / distance) * flowOffset;
            const flowY = node.y + (dy / distance) * flowOffset;

            ctx.fillStyle = `rgba(109, 186, 161, ${opacity * 2})`;
            ctx.beginPath();
            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
          }
        });
      });

      // Draw nodes (knowledge graph vertices)
      nodes.forEach(node => {
        const pulseSize = Math.sin(node.pulse) * 0.2 + 1;

        // Size based on node type - reduced sizes
        const baseSize = node.type === 'core' ? 5 : node.type === 'cluster' ? 3 : 2;
        const size = baseSize * pulseSize;

        // Color based on node type with brand colors - more subtle
        let color: string;
        let glowColor: string;
        let nodeOpacity: number;

        if (node.type === 'core') {
          color = '#1B4D5C'; // deep-teal
          glowColor = '#6DBAA1'; // sea-green
          nodeOpacity = 0.5;
        } else if (node.type === 'cluster') {
          color = '#4A90A4'; // ocean
          glowColor = '#6DBAA1'; // sea-green
          nodeOpacity = 0.4;
        } else {
          color = '#6DBAA1'; // sea-green
          glowColor = '#6DBAA1'; // sea-green
          nodeOpacity = 0.3;
        }

        ctx.save();
        ctx.globalAlpha = nodeOpacity;

        // Outer glow - more subtle
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = size * 2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Inner highlight - more subtle
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(248, 250, 251, 0.6)'; // pearl
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Connection count indicator for core nodes - more subtle
        if (node.type === 'core') {
          ctx.strokeStyle = `rgba(109, 186, 161, ${0.15 + Math.sin(node.pulse) * 0.1})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-midnight via-deep-teal/20 to-midnight">
      {/* Ambient gradient orbs for depth */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sea-green rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean rounded-full blur-3xl animate-float-medium" />
      </div>

      {/* Canvas for knowledge graph animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 186, 161, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 186, 161, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
