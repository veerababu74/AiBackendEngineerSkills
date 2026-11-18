# Context Engineering, Loop Engineering, Harness Engineering & Agent Harness Roadmap

**Goal:** Design AI systems that maintain the right context, execute multi-step loops, use tools safely, recover from failures, and complete tasks reliably — beyond prompt engineering and basic LangChain/LangGraph usage.

These four areas connect as follows:

| Area | Focus |
|------|--------|
| **Context Engineering** | Give the model the right information at the right time |
| **Loop Engineering** | Control how the agent thinks, acts, observes, and repeats |
| **Harness Engineering** | Build infrastructure that controls execution, tools, state, and safety |
| **Agent Harness** | Runtime that connects model, tools, context, control loop, and evaluation |

**29 modules** + end-to-end projects. Recommended path: Context → Loop → Harness → build a Python Agent Harness from scratch.

---

## Phase 1: Context engineering fundamentals
**Critical**

Broader than prompt engineering: design, collect, filter, organize, and manage all information an LLM needs.

- [ ] What is context engineering?
- [ ] Context engineering vs prompt engineering
- [ ] Context window and context length
- [ ] Input tokens, output tokens and total tokens
- [ ] Context utilization and context limits
- [ ] Context quality vs context quantity
- [ ] Context relevance and information density
- [ ] Context noise and irrelevant information
- [ ] Context prioritization
- [ ] Context assembly pipeline
- [ ] Static context vs dynamic context
- [ ] Trusted context vs untrusted context
- [ ] Context injection and context contamination

> **Internal working:** Understand how the application constructs the final model request from system instructions, developer instructions, conversation history, retrieved documents, memory, and tool results.

## Phase 2: Context components
**Critical**

All sources of context and how to prioritize conflicting information.

- [ ] System instructions
- [ ] Developer instructions
- [ ] User instructions
- [ ] Conversation history
- [ ] Short-term memory
- [ ] Long-term memory
- [ ] User profile and preferences
- [ ] Retrieved RAG documents
- [ ] Tool descriptions and tool outputs
- [ ] External API responses
- [ ] Agent state
- [ ] Working memory
- [ ] Environment information
- [ ] Files, code and execution results
- [ ] Previous agent observations
- [ ] Prioritize conflicting information
- [ ] Distinguish instructions from data

## Phase 3: Context assembly and management
**Critical**

Selection, compression, budgeting, and isolation under token limits.

- [ ] Context construction pipeline
- [ ] Context selection and filtering
- [ ] Context ranking
- [ ] Context compression
- [ ] Context summarization
- [ ] Context deduplication
- [ ] Context window budgeting
- [ ] Dynamic context loading
- [ ] Context truncation
- [ ] Sliding window strategies
- [ ] Recent-message prioritization
- [ ] Token-aware context management
- [ ] Context caching
- [ ] Context versioning
- [ ] Context invalidation
- [ ] Context isolation across users and tenants

> **Practical scenario:** An agent has 100 previous messages, 20 retrieved documents and 15 tool outputs, but the model can only accept a limited number of tokens. Design a context selection system that keeps the most useful information.

## Phase 4: Memory engineering
**Critical**

Working, episodic, semantic, procedural, and multi-agent memory systems.

- [ ] Working memory
- [ ] Short-term conversational memory
- [ ] Long-term memory
- [ ] Episodic memory
- [ ] Semantic memory
- [ ] Procedural memory
- [ ] User profile memory
- [ ] Entity memory
- [ ] Task memory
- [ ] Shared multi-agent memory
- [ ] Persistent memory
- [ ] Vector-based memory
- [ ] Structured memory using SQL/MongoDB
- [ ] Memory extraction
- [ ] Memory consolidation
- [ ] Memory retrieval
- [ ] Memory update and deletion
- [ ] Memory expiration and TTL
- [ ] Memory conflict resolution
- [ ] Memory relevance scoring
- [ ] Memory poisoning and privacy

## Phase 5: RAG context engineering
**Critical**

Retrieval, reranking, grounding, and citation for agent context.

- [ ] Query understanding
- [ ] Query rewriting
- [ ] Query decomposition
- [ ] Multi-query retrieval
- [ ] Hybrid search
- [ ] Metadata filtering
- [ ] Permission-aware retrieval
- [ ] Reranking
- [ ] Contextual compression
- [ ] Parent-child retrieval
- [ ] Document summarization
- [ ] Context deduplication
- [ ] Citation preservation
- [ ] Evidence selection
- [ ] Context ordering
- [ ] Lost-in-the-middle problem
- [ ] Retrieval confidence
- [ ] Context grounding
- [ ] Citation and claim verification

## Phase 6: Advanced context strategies
**Advanced**

Just-in-time loading, graphs, multi-agent sharing, and access control.

- [ ] Just-in-time context retrieval
- [ ] Progressive context loading
- [ ] Hierarchical context
- [ ] Context partitioning
- [ ] Context routing
- [ ] Context graphs
- [ ] Knowledge graph context
- [ ] Tool-result summarization
- [ ] State-based context construction
- [ ] Structured context using Pydantic
- [ ] Context metadata and provenance
- [ ] Context relevance scoring
- [ ] Context decay and expiration
- [ ] Context refresh strategies
- [ ] Multi-agent context sharing
- [ ] Context isolation and access control

## Phase 7: Context evaluation and optimization
**Critical**

Measure precision, faithfulness, contamination, and token efficiency.

- [ ] Context precision
- [ ] Context recall
- [ ] Context relevance
- [ ] Context completeness
- [ ] Context faithfulness
- [ ] Context utilization
- [ ] Token efficiency
- [ ] Context-to-answer relevance
- [ ] Context retrieval accuracy
- [ ] Context compression quality
- [ ] Memory retrieval accuracy
- [ ] Context contamination tests
- [ ] Context ablation experiments
- [ ] Context window overflow monitoring

### Context engineering projects

- [ ] Project: Intelligent context builder
- [ ] Project: Token-aware conversation memory
- [ ] Project: Context compression engine
- [ ] Project: Permission-aware RAG context manager
- [ ] Project: Multi-agent shared memory system

---

## Phase 8: Agent loop fundamentals
**Critical**

An LLM call alone is not an agent loop.

- [ ] What is an agent loop?
- [ ] Model call vs agent execution
- [ ] Observe → Decide → Act → Evaluate
- [ ] ReAct loop
- [ ] Thought-action-observation cycle
- [ ] Tool execution cycle
- [ ] Agent state transitions
- [ ] Loop termination
- [ ] Continuation conditions
- [ ] Stop conditions
- [ ] Maximum iterations
- [ ] Infinite loop prevention
- [ ] Agent execution lifecycle

### Basic agent loop

```
Receive task
→ Observe current context
→ Ask LLM to decide next action
→ Execute tool or action
→ Evaluate result
→ Complete? Yes → Return answer / No → Repeat
```

## Phase 9: Different agent loop architectures
**Critical**

Study each architecture and when to use it.

- [ ] Basic LLM loop
- [ ] ReAct loop
- [ ] Plan-and-execute loop
- [ ] Planner-executor loop
- [ ] Reflection loop
- [ ] Self-correction loop
- [ ] Evaluator-optimizer loop
- [ ] Critic-reviewer loop
- [ ] Tool-calling loop
- [ ] Human-in-the-loop loop
- [ ] Multi-agent coordination loop
- [ ] Hierarchical agent loop
- [ ] Parallel execution loop
- [ ] Map-reduce agent loop
- [ ] Workflow-driven loop
- [ ] Event-driven loop
- [ ] Graph-based loop
- [ ] Nested agent loops

## Phase 10: Planning and execution
**Critical**

Decompose goals, plan, replan, and verify completion.

- [ ] Task decomposition
- [ ] Goal identification
- [ ] Subtask generation
- [ ] Dependency identification
- [ ] Execution planning
- [ ] Dynamic planning
- [ ] Replanning
- [ ] Plan validation
- [ ] Plan prioritization
- [ ] Sequential execution
- [ ] Parallel execution
- [ ] Conditional execution
- [ ] Dependency-aware execution
- [ ] Task scheduling
- [ ] Task completion verification

## Phase 11: Loop state management
**Critical**

Schemas, checkpoints, reducers, and durable persistence.

- [ ] Agent state
- [ ] State schema
- [ ] State transitions
- [ ] Shared state
- [ ] Local state
- [ ] Persistent state
- [ ] State checkpoints
- [ ] State restoration
- [ ] State mutation
- [ ] State reducers
- [ ] State synchronization
- [ ] State versioning
- [ ] State validation
- [ ] State conflict resolution
- [ ] State persistence using Redis, SQL and MongoDB

## Phase 12: Loop control and reliability
**Critical**

Budgets, stagnation detection, retries, and graceful termination.

- [ ] Maximum iteration limits
- [ ] Maximum execution time
- [ ] Token budgets
- [ ] Tool-call budgets
- [ ] Cost budgets
- [ ] Deadline management
- [ ] Loop detection
- [ ] Repeated action detection
- [ ] Duplicate tool-call prevention
- [ ] Stagnation detection
- [ ] Progress tracking
- [ ] Retry policies
- [ ] Backoff and jitter
- [ ] Circuit breakers
- [ ] Fallback actions
- [ ] Timeout handling
- [ ] Cancellation
- [ ] Graceful termination
- [ ] Checkpoint and resume

## Phase 13: Reflection and verification loops
**Critical**

Self-critique, independent reviewers, and abstention.

- [ ] Self-reflection
- [ ] Self-critique
- [ ] Self-correction
- [ ] Plan verification
- [ ] Result verification
- [ ] Code execution verification
- [ ] Fact verification
- [ ] Claim-level verification
- [ ] Evaluator-based verification
- [ ] Independent reviewer agents
- [ ] Confidence thresholds
- [ ] Abstention
- [ ] Stop-on-failure
- [ ] Verification before external actions

## Phase 14: Advanced loop engineering
**Advanced**

Adaptive iteration, durable workflows, and distributed loops.

- [ ] Adaptive iteration
- [ ] Dynamic tool selection
- [ ] Dynamic model selection
- [ ] Parallel tool execution
- [ ] Speculative execution
- [ ] Loop scheduling
- [ ] Loop prioritization
- [ ] Nested loops
- [ ] Loop interruption and resumption
- [ ] Human approval checkpoints
- [ ] Event-triggered continuation
- [ ] Distributed agent loops
- [ ] Long-running workflows
- [ ] Durable execution
- [ ] Compensation and recovery

### Loop engineering projects

- [ ] Project: ReAct research agent
- [ ] Project: Self-correcting coding agent
- [ ] Project: Planner-executor workflow
- [ ] Project: Multi-agent research loop
- [ ] Project: Long-running task execution engine

---

## Phase 15: Harness engineering fundamentals
**Critical**

The operating environment for an AI agent.

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

## Phase 16: Model and inference harness
**Critical**

Provider abstraction, routing, fallback, and cost control.

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

## Phase 17: Tool execution harness
**Critical**

Registry, validation, permissions, sandboxing, and audit.

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

## Phase 18: Execution environment and sandboxing
**Critical**

Local/remote execution, containers, quotas, and secret isolation.

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

## Phase 19: Agent state and persistence harness
**Critical**

Sessions, checkpoints, recovery, and multi-tenant isolation.

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

## Phase 20: Security and policy harness
**Critical**

AuthZ, injection defense, PII, and policy enforcement.

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

## Phase 21: Observability and debugging harness
**Critical**

Traces, costs, replay, and production telemetry stacks.

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

## Phase 22: Evaluation and testing harness
**Critical**

Trajectory tests, judges, golden sets, and CI gates.

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

## Phase 23: Harness performance and scaling
**Advanced**

Queues, backpressure, caching, and capacity planning.

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

## Phase 24: Harness engineering in production
**Advanced**

Config, probes, canaries, rollback, and runbooks.

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

### Harness engineering projects

- [ ] Project: Reusable LLM execution harness
- [ ] Project: Secure tool execution harness
- [ ] Project: Python code execution sandbox
- [ ] Project: Observable agent runtime
- [ ] Project: Multi-provider production agent harness

---

## Phase 25: Agent harness architecture
**Critical**

Concrete runtime that wraps an LLM as a controlled agent.

| Component | Responsibility |
|-----------|----------------|
| Model client | Communicates with LLM |
| Prompt manager | Manages instructions |
| Context manager | Builds model context |
| Memory manager | Stores and retrieves memory |
| Planner | Breaks tasks into steps |
| Tool registry | Maintains available tools |
| Tool executor | Executes tools |
| Loop controller | Controls iterations |
| State manager | Tracks agent state |
| Policy engine | Enforces permissions |
| Checkpoint manager | Saves progress |
| Evaluator | Checks task quality |
| Observability | Tracks execution |
| Session manager | Manages user sessions |

- [ ] Model client responsibilities
- [ ] Prompt manager responsibilities
- [ ] Context manager responsibilities
- [ ] Memory manager responsibilities
- [ ] Planner responsibilities
- [ ] Tool registry responsibilities
- [ ] Tool executor responsibilities
- [ ] Loop controller responsibilities
- [ ] State manager responsibilities
- [ ] Policy engine responsibilities
- [ ] Checkpoint manager responsibilities
- [ ] Evaluator responsibilities
- [ ] Observability responsibilities
- [ ] Session manager responsibilities

## Phase 26: Build an agent harness from scratch using Python
**Critical**

Implement components in sequence.

- [ ] LLM provider interface
- [ ] Azure OpenAI / Gemini model clients
- [ ] Prompt template manager
- [ ] Context builder
- [ ] Token counter
- [ ] Conversation manager
- [ ] Memory manager
- [ ] Pydantic agent state
- [ ] Tool registry
- [ ] Tool schema generator
- [ ] Tool executor
- [ ] Tool result parser
- [ ] Agent loop controller
- [ ] Planner
- [ ] Evaluator
- [ ] Retry manager
- [ ] Timeout manager
- [ ] Checkpoint manager
- [ ] Policy engine
- [ ] Structured logger
- [ ] Trace manager
- [ ] Cost tracker
- [ ] Session manager
- [ ] Agent runtime

## Phase 27: Build a production agent harness
**Critical**

MCP, A2A, durable checkpoints, policies, and multi-tenant support.

- [ ] Multiple LLM providers
- [ ] Model routing and fallback
- [ ] Multiple tools
- [ ] Dynamic tool discovery
- [ ] MCP integration
- [ ] A2A communication
- [ ] Multi-agent execution
- [ ] Persistent memory
- [ ] RAG integration
- [ ] Long-running task execution
- [ ] Streaming responses
- [ ] Human approval
- [ ] Async tool calls
- [ ] Parallel execution
- [ ] Durable checkpoints
- [ ] Resume after failure
- [ ] Execution replay
- [ ] Tool sandboxing
- [ ] Policy enforcement
- [ ] Continuous evaluations
- [ ] Multi-tenant support

## Phase 28: Agent harness frameworks and ecosystems
**Critical**

How existing frameworks implement these concepts.

| Framework / technology | What to learn |
|------------------------|---------------|
| LangGraph | Stateful graph execution, checkpoints, interrupts |
| OpenAI Agents SDK | Agent execution, handoffs, tools, tracing |
| Google ADK | Agent runtime, workflow agents, sessions |
| PydanticAI | Type-safe agents, dependencies, structured output |
| Semantic Kernel | Plugins, orchestration, enterprise integration |
| AutoGen | Multi-agent communication and orchestration |
| CrewAI | Role-based agents and task orchestration |
| MCP | Standardized tool and context integration |
| Temporal | Durable workflow execution and recovery |
| Redis | Fast state, caching and coordination |

- [ ] LangGraph stateful graphs and checkpoints
- [ ] OpenAI Agents SDK handoffs and tracing
- [ ] Google ADK runtime and sessions
- [ ] PydanticAI type-safe agents
- [ ] Semantic Kernel plugins and orchestration
- [ ] AutoGen multi-agent communication
- [ ] CrewAI role-based orchestration
- [ ] MCP tool and context integration
- [ ] Temporal durable workflows
- [ ] Redis for state and coordination

## Phase 29: Advanced agent harness concepts
**Advanced**

Durable execution, governance, versioning, and reproducible runs.

- [ ] Agent runtime vs workflow runtime
- [ ] Durable agent execution
- [ ] Event-sourced agent state
- [ ] Agent lifecycle hooks
- [ ] Middleware-based execution
- [ ] Agent supervision
- [ ] Agent isolation
- [ ] Multi-agent scheduling
- [ ] Agent identity
- [ ] Delegation boundaries
- [ ] Tool capability security
- [ ] Human-in-the-loop controls
- [ ] Agent trajectory replay
- [ ] Deterministic testing
- [ ] Reproducible execution
- [ ] Fault-tolerant execution
- [ ] Agent observability
- [ ] Agent governance
- [ ] Agent versioning
- [ ] Runtime upgrades

---

## Phase 30: Practical end-to-end projects
**Critical**

Combine all four engineering areas.

- [ ] Project: Intelligent research agent — web research + RAG, search/observe/refine/verify, browser tools, full runtime
- [ ] Project: Autonomous coding agent — repo/files/history context, plan/code/test/debug loop, terminal sandbox
- [ ] Project: Enterprise multi-agent platform — permission-aware docs, supervisor/worker/reviewer, queues and persistence
- [ ] Project: Production agent operations platform — task history, adaptive recovery, tracing/security/eval, scalable monitoring

---

## Recommended learning sequence

Do not learn all four subjects independently — they are closely connected.

| Order | Subject | Priority |
|-------|---------|----------|
| 1 | Context engineering fundamentals | Critical |
| 2 | Context assembly and token management | Critical |
| 3 | Memory engineering | Critical |
| 4 | RAG context engineering | Critical |
| 5 | Agent loop fundamentals | Critical |
| 6 | Planning and execution | Critical |
| 7 | State management and checkpoints | Critical |
| 8 | Loop control and reliability | Critical |
| 9 | Harness architecture | Critical |
| 10 | Model and tool execution harness | Critical |
| 11 | Security and sandboxing | Critical |
| 12 | Persistence and observability | Critical |
| 13 | Evaluation and testing harness | Critical |
| 14 | Build an agent harness from scratch | Critical |
| 15 | Multi-agent and distributed execution | Advanced |
| 16 | Production deployment and optimization | Advanced |

> **Recommendation:** Start with Context Engineering, then Loop Engineering. Once you understand how context and execution work, build your own Python Agent Harness from scratch using FastAPI, Pydantic, Azure OpenAI, Redis, LangGraph, MCP, and OpenTelemetry.
