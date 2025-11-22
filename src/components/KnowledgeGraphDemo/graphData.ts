import { LegacyGraphData } from './types';
import { calculateInitialPositions } from './graphHelpers';

// This file now serves as a backwards-compatible wrapper
// The actual graph data can be loaded dynamically or used statically

const rawGraphData: LegacyGraphData = {
  nodes: [
    // Projects (6 nodes)
    {
      id: "proj_001", label: "API Gateway Migration", type: "project", size: 40,
      metadata: { status: "completed", outcome: "success", team_size: 8, duration_days: 120, cost_impact: "+£2.3M revenue", completion_date: "2024-03", industry: "FinTech" }
    },
    {
      id: "proj_002", label: "Data Pipeline Refactor", type: "project", size: 35,
      metadata: { status: "completed", outcome: "success", team_size: 6, duration_days: 90, cost_impact: "+£1.8M efficiency", completion_date: "2024-02", industry: "FinTech" }
    },
    {
      id: "proj_003", label: "Mobile App Replatform", type: "project", size: 30,
      metadata: { status: "completed", outcome: "partial", team_size: 10, duration_days: 150, cost_impact: "+£0.5M", completion_date: "2023-12", industry: "Retail" }
    },
    {
      id: "proj_004", label: "Cloud Cost Optimisation", type: "project", size: 45,
      metadata: { status: "completed", outcome: "success", team_size: 4, duration_days: 60, cost_impact: "-£800K costs", completion_date: "2024-01", industry: "SaaS" }
    },
    {
      id: "proj_005", label: "Security Audit Response", type: "project", size: 25,
      metadata: { status: "completed", outcome: "failure", team_size: 5, duration_days: 45, cost_impact: "-£200K", completion_date: "2023-11", industry: "Healthcare" }
    },
    {
      id: "proj_006", label: "ML Platform Build", type: "project", size: 50,
      metadata: { status: "completed", outcome: "success", team_size: 12, duration_days: 180, cost_impact: "+£5M opportunity", completion_date: "2024-04", industry: "FinTech" }
    },

    // Lessons (8 nodes)
    {
      id: "lesson_001", label: "Early load testing critical", type: "lesson", size: 35,
      metadata: { category: "performance", severity: "critical", times_referenced: 14, prevention_value: "£450K saved", discovered_date: "2023-11" }
    },
    {
      id: "lesson_002", label: "Incremental migration reduces risk", type: "lesson", size: 40,
      metadata: { category: "strategy", severity: "high", times_referenced: 8, prevention_value: "£300K saved", discovered_date: "2023-10" }
    },
    {
      id: "lesson_003", label: "Feature flags enable safe rollout", type: "lesson", size: 30,
      metadata: { category: "deployment", severity: "high", times_referenced: 12, prevention_value: "£200K saved", discovered_date: "2023-09" }
    },
    {
      id: "lesson_004", label: "Document decisions immediately", type: "lesson", size: 25,
      metadata: { category: "process", severity: "medium", times_referenced: 20, prevention_value: "£150K saved", discovered_date: "2023-08" }
    },
    {
      id: "lesson_005", label: "Cross-team reviews catch issues", type: "lesson", size: 35,
      metadata: { category: "quality", severity: "high", times_referenced: 10, prevention_value: "£500K saved", discovered_date: "2023-12" }
    },
    {
      id: "lesson_006", label: "Automate security scanning", type: "lesson", size: 45,
      metadata: { category: "security", severity: "critical", times_referenced: 6, prevention_value: "£1M risk avoided", discovered_date: "2023-11" }
    },
    {
      id: "lesson_007", label: "Monitor cost metrics daily", type: "lesson", size: 30,
      metadata: { category: "finance", severity: "medium", times_referenced: 15, prevention_value: "£600K saved", discovered_date: "2024-01" }
    },
    {
      id: "lesson_008", label: "Version lock dependencies", type: "lesson", size: 35,
      metadata: { category: "stability", severity: "high", times_referenced: 9, prevention_value: "£250K saved", discovered_date: "2023-10" }
    },

    // Issues (6 nodes)
    {
      id: "issue_001", label: "Memory leak in webhooks", type: "issue", size: 20,
      metadata: { impact: "high", resolution_time_hours: 72, cost_impact: "£120K", root_cause: "Improper connection pooling" }
    },
    {
      id: "issue_002", label: "Race condition in payments", type: "issue", size: 25,
      metadata: { impact: "critical", resolution_time_hours: 24, cost_impact: "£300K", root_cause: "Missing transaction locks" }
    },
    {
      id: "issue_003", label: "Slow query performance", type: "issue", size: 15,
      metadata: { impact: "medium", resolution_time_hours: 48, cost_impact: "£50K", root_cause: "Missing database indexes" }
    },
    {
      id: "issue_004", label: "Third-party API failures", type: "issue", size: 20,
      metadata: { impact: "high", resolution_time_hours: 96, cost_impact: "£200K", root_cause: "No fallback mechanism" }
    },
    {
      id: "issue_005", label: "Config drift across envs", type: "issue", size: 18,
      metadata: { impact: "medium", resolution_time_hours: 36, cost_impact: "£80K", root_cause: "Manual configuration management" }
    },
    {
      id: "issue_006", label: "Inadequate error handling", type: "issue", size: 22,
      metadata: { impact: "high", resolution_time_hours: 60, cost_impact: "£150K", root_cause: "Missing error boundaries" }
    },

    // Teams (4 nodes)
    {
      id: "team_001", label: "Platform Engineering", type: "team", size: 25,
      metadata: { expertise: ["microservices", "cloud", "DevOps"], team_size: 12 }
    },
    {
      id: "team_002", label: "Data Engineering", type: "team", size: 20,
      metadata: { expertise: ["ETL", "data pipelines", "analytics"], team_size: 8 }
    },
    {
      id: "team_003", label: "Mobile Development", type: "team", size: 18,
      metadata: { expertise: ["iOS", "Android", "React Native"], team_size: 6 }
    },
    {
      id: "team_004", label: "DevOps", type: "team", size: 22,
      metadata: { expertise: ["CI/CD", "monitoring", "infrastructure"], team_size: 5 }
    },

    // Technologies (4 nodes)
    {
      id: "tech_001", label: "Kubernetes", type: "technology", size: 15,
      metadata: { risk_level: "medium", expertise_required: "high" }
    },
    {
      id: "tech_002", label: "PostgreSQL", type: "technology", size: 15,
      metadata: { risk_level: "low", expertise_required: "medium" }
    },
    {
      id: "tech_003", label: "React Native", type: "technology", size: 12,
      metadata: { risk_level: "medium", expertise_required: "medium" }
    },
    {
      id: "tech_004", label: "Apache Kafka", type: "technology", size: 18,
      metadata: { risk_level: "high", expertise_required: "high" }
    },

    // Experts (2 nodes)
    {
      id: "expert_001", label: "Sarah Chen", type: "expert", size: 20,
      metadata: { specialisation: "Distributed Systems", lessons_contributed: 8, consultations: 23 }
    },
    {
      id: "expert_002", label: "Marcus Johnson", type: "expert", size: 18,
      metadata: { specialisation: "Data Architecture", lessons_contributed: 6, consultations: 18 }
    }
  ],

  links: [
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

// Apply calculated initial positions to all nodes using the helper function
calculateInitialPositions(rawGraphData.nodes);

// Export the legacy graph data with positions (backwards compatible)
export const graphData: LegacyGraphData = rawGraphData;
