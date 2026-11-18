# Azure Application Insights Mastery

**APM, KQL, Application Map, alerts, production troubleshooting**

---

## Phase 1: Application Insights fundamentals
**Foundation**

Workspace-based App Insights.

- [ ] What is Azure Application Insights?
- [ ] Azure Monitor architecture
- [ ] Application Insights resource
- [ ] Workspace-based Application Insights
- [ ] Connection strings
- [ ] Instrumentation concepts
- [ ] Application telemetry
- [ ] Requests
- [ ] Dependencies
- [ ] Exceptions
- [ ] Traces
- [ ] Metrics
- [ ] Availability tests
- [ ] Live Metrics
- [ ] Application Map
- [ ] Transaction Search

## Phase 2: Python integration
**Engineering**

Azure Monitor OpenTelemetry Distro.

- [ ] Azure Monitor OpenTelemetry
- [ ] Python SDK options
- [ ] FastAPI integration
- [ ] Flask integration
- [ ] HTTPX integration
- [ ] Requests integration
- [ ] SQLAlchemy dependency tracking
- [ ] MongoDB dependency tracking options
- [ ] Redis instrumentation
- [ ] Custom telemetry
- [ ] Environment configuration
- [ ] Connection string configuration
- [ ] Resource attributes
- [ ] Cloud role name
- [ ] Cloud role instance
- [ ] Local development vs production configuration

## Phase 3: Request and dependency tracking
**Core**

End-to-end transactions.

- [ ] Incoming request tracking
- [ ] Outgoing HTTP tracking
- [ ] Database dependency tracking
- [ ] External service calls
- [ ] Dependency duration
- [ ] Request duration
- [ ] Failed requests
- [ ] Dependency failures
- [ ] Distributed trace IDs
- [ ] Operation IDs
- [ ] Parent-child operations
- [ ] End-to-end transaction tracking
- [ ] Application Map
- [ ] Cross-service dependencies

## Phase 4: Logs and exceptions
**Core**

Correlation, custom dimensions.

- [ ] Python logging
- [ ] Structured logs
- [ ] Trace correlation
- [ ] Exception tracking
- [ ] Stack traces
- [ ] Custom events
- [ ] Custom dimensions
- [ ] Custom measurements
- [ ] Log levels
- [ ] Exception grouping
- [ ] Failed request investigation
- [ ] Sensitive information filtering
- [ ] Log Analytics integration

## Phase 5: Kusto Query Language (KQL)
**Very important**

Production debugging language.

- [ ] KQL fundamentals
- [ ] where
- [ ] project
- [ ] extend
- [ ] summarize
- [ ] count
- [ ] sort by
- [ ] order by
- [ ] take
- [ ] top
- [ ] distinct
- [ ] bin
- [ ] join
- [ ] union
- [ ] parse
- [ ] extract
- [ ] ago()
- [ ] datetime()
- [ ] make-series
- [ ] percentile()
- [ ] percentiles()
- [ ] Time-series queries
- [ ] Request failure queries
- [ ] Dependency failure queries
- [ ] Latency analysis
- [ ] Trace correlation
- [ ] Custom event queries

## Phase 6: Monitoring dashboards and alerts
**Production**

Workbooks, action groups.

- [ ] Application dashboards
- [ ] Application Map
- [ ] Live Metrics
- [ ] Availability dashboards
- [ ] Performance dashboards
- [ ] Failure dashboards
- [ ] Custom workbooks
- [ ] Azure Monitor alerts
- [ ] Metric alerts
- [ ] Log alerts
- [ ] Dynamic thresholds
- [ ] Action groups
- [ ] Email notifications
- [ ] Webhook integrations
- [ ] Incident notifications

## Phase 7: Performance and troubleshooting
**Production**

Slow APIs, 429/5xx, missing telemetry.

- [ ] Slow API requests
- [ ] High latency
- [ ] High CPU
- [ ] High memory
- [ ] Dependency failures
- [ ] Database bottlenecks
- [ ] External API failures
- [ ] Timeout investigation
- [ ] 429 and 5xx errors
- [ ] Connection exhaustion
- [ ] Request volume spikes
- [ ] Sampling issues
- [ ] Missing telemetry
- [ ] Application Map diagnosis
- [ ] End-to-end root cause analysis

## Phase 8: Production configuration
**Production**

Sampling, retention, PII.

- [ ] Production instrumentation
- [ ] Telemetry sampling
- [ ] Adaptive sampling concepts
- [ ] Connection string security
- [ ] Managed identity where supported
- [ ] Private networking considerations
- [ ] Diagnostic settings
- [ ] Log Analytics workspace
- [ ] Data retention
- [ ] Data export
- [ ] Cost management
- [ ] Telemetry filtering
- [ ] PII masking
- [ ] Access control
- [ ] Resource governance

## Phase 9: Enterprise Application Insights
**Expert**

Microservices, K8s, SLO budgets.

- [ ] Multi-service monitoring
- [ ] Microservices application map
- [ ] Kubernetes integration
- [ ] Azure Container Apps monitoring
- [ ] Azure App Service monitoring
- [ ] Azure Functions monitoring
- [ ] Multi-region monitoring
- [ ] SLI and SLO dashboards
- [ ] Error budget tracking
- [ ] Alert noise reduction
- [ ] Incident response
- [ ] Production capacity planning
