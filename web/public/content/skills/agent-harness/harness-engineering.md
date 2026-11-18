# Harness Engineering

**Operating environment for agents — models, tools, sandbox, policy, observability**

---

## Phase 1: Fundamentals
**Critical**

Model vs agent vs harness.

- [ ] What is a harness?
- [ ] Why do agents need a harness?
- [ ] Model vs agent vs harness
- [ ] Agent framework vs agent runtime
- [ ] Harness architecture
- [ ] Harness components
- [ ] Model abstraction
- [ ] Execution abstraction
- [ ] Tool abstraction
- [ ] Context abstraction
- [ ] State abstraction
- [ ] Policy abstraction
- [ ] Evaluation abstraction
- [ ] Runtime lifecycle

## Phase 2: Model and inference harness
**Critical**

Providers, routing, cost.

- [ ] LLM provider abstraction
- [ ] Model registry
- [ ] Model routing
- [ ] Model selection
- [ ] Model configuration
- [ ] Temperature and sampling
- [ ] Structured output
- [ ] Tool calling
- [ ] Streaming responses
- [ ] Token counting
- [ ] Context window management
- [ ] Timeout management
- [ ] Retry handling
- [ ] Model fallback
- [ ] Provider failover
- [ ] Rate-limit management
- [ ] Cost tracking
- [ ] Request batching
- [ ] Response caching

## Phase 3: Tool execution harness
**Critical**

Registry through audit.

- [ ] Tool registry
- [ ] Tool discovery
- [ ] Tool schemas
- [ ] Tool descriptions
- [ ] Tool validation
- [ ] Tool selection
- [ ] Tool invocation
- [ ] Tool execution environment
- [ ] Tool output parsing
- [ ] Tool output validation
- [ ] Tool permissions
- [ ] Tool authentication
- [ ] Tool timeouts
- [ ] Tool retries
- [ ] Tool idempotency
- [ ] Tool isolation
- [ ] Tool sandboxing
- [ ] Tool result caching
- [ ] Tool auditing
- [ ] Tool failure recovery

## Phase 4: Sandboxing
**Critical**

Isolation and resource limits.

- [ ] Local execution vs remote execution
- [ ] Python execution sandbox
- [ ] Shell execution sandbox
- [ ] Browser execution
- [ ] Filesystem isolation
- [ ] Network restrictions
- [ ] Process isolation
- [ ] Container isolation
- [ ] Docker sandbox
- [ ] Kubernetes job execution
- [ ] CPU and memory limits
- [ ] Execution time limits
- [ ] File upload and download policies
- [ ] Secret isolation
- [ ] Environment variables
- [ ] Restricted system commands
- [ ] Malware and unsafe file handling
- [ ] Resource quotas

## Phase 5: State and persistence
**Critical**

Sessions and recovery.

- [ ] State store
- [ ] Session manager
- [ ] Conversation manager
- [ ] Checkpoint manager
- [ ] Task persistence
- [ ] Execution history
- [ ] Workflow persistence
- [ ] Durable state
- [ ] Recovery after process restart
- [ ] Resume after failure
- [ ] Redis state management
- [ ] MongoDB persistence
- [ ] PostgreSQL persistence
- [ ] State cleanup
- [ ] TTL and retention
- [ ] Multi-tenant isolation

## Phase 6: Security and policy
**Critical**

AuthZ and injection defense.

- [ ] Authentication
- [ ] Authorization
- [ ] RBAC and ABAC
- [ ] Tool-level permissions
- [ ] User-level permissions
- [ ] Least privilege
- [ ] Secret management
- [ ] Prompt injection defense
- [ ] Tool injection defense
- [ ] Untrusted context handling
- [ ] Output validation
- [ ] Input validation
- [ ] Data access restrictions
- [ ] PII masking
- [ ] Tenant isolation
- [ ] Human approval
- [ ] Audit logging
- [ ] Policy enforcement
- [ ] Safe execution
- [ ] Security testing

## Phase 7: Observability
**Critical**

Traces, costs, replay.

- [ ] Centralized logging
- [ ] Structured logging
- [ ] Trace IDs
- [ ] Span IDs
- [ ] Distributed tracing
- [ ] Model-call tracing
- [ ] Tool-call tracing
- [ ] Agent state tracing
- [ ] Context tracing
- [ ] Token tracking
- [ ] Latency tracking
- [ ] Cost tracking
- [ ] Error tracking
- [ ] Loop iteration tracking
- [ ] Execution replay
- [ ] Failure analysis
- [ ] LangSmith
- [ ] Langfuse
- [ ] OpenTelemetry
- [ ] Prometheus and Grafana
- [ ] Azure Application Insights

## Phase 8: Evaluation and testing
**Critical**

Trajectory tests and CI gates.

- [ ] Unit testing
- [ ] Integration testing
- [ ] End-to-end testing
- [ ] Model behavior testing
- [ ] Agent trajectory testing
- [ ] Tool-call correctness
- [ ] Context relevance evaluation
- [ ] Task completion evaluation
- [ ] Output quality evaluation
- [ ] Hallucination evaluation
- [ ] Safety evaluation
- [ ] Regression testing
- [ ] Golden datasets
- [ ] Benchmark datasets
- [ ] LLM-as-a-judge
- [ ] Human evaluation
- [ ] Adversarial testing
- [ ] Continuous evaluation
- [ ] CI/CD evaluation gates

## Phase 9: Performance and scaling
**Advanced**

Queues and capacity.

- [ ] Async tool execution
- [ ] Parallel execution
- [ ] Worker pools
- [ ] Queue-based execution
- [ ] Backpressure
- [ ] Rate limiting
- [ ] Concurrency control
- [ ] Connection pooling
- [ ] Model response caching
- [ ] Context caching
- [ ] Distributed task execution
- [ ] Horizontal scaling
- [ ] Stateless workers
- [ ] Shared state stores
- [ ] Queue recovery
- [ ] Autoscaling
- [ ] Cost optimization
- [ ] Capacity planning

## Phase 10: Production harness
**Advanced**

Deploy and operate.

- [ ] Configuration management
- [ ] Environment separation
- [ ] Dependency injection
- [ ] Provider adapters
- [ ] Tool adapters
- [ ] Middleware
- [ ] Lifecycle management
- [ ] Graceful shutdown
- [ ] Health checks
- [ ] Readiness and liveness probes
- [ ] Deployment strategies
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Version management
- [ ] Rollback
- [ ] Disaster recovery
- [ ] Incident management
- [ ] Production runbooks

## Projects
**Critical**

Reusable production harness pieces.

- [ ] Reusable LLM execution harness
- [ ] Secure tool execution harness
- [ ] Python code execution sandbox
- [ ] Observable agent runtime
- [ ] Multi-provider production agent harness
