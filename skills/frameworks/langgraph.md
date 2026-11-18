# LangGraph Mastery

**Stateful agent orchestration, checkpointing, multi-agent, HITL**

---

## Phase 1: LangGraph fundamentals
**Foundation**

StateGraph, nodes, edges.

- [ ] What is LangGraph?
- [ ] LangGraph architecture
- [ ] LangGraph vs LangChain
- [ ] Graph-based execution
- [ ] Nodes
- [ ] Edges
- [ ] State
- [ ] Graph
- [ ] StateGraph
- [ ] START
- [ ] END
- [ ] Compilation
- [ ] Invocation
- [ ] Graph execution
- [ ] Execution flow
- [ ] State transitions
- [ ] Graph visualization

## Phase 2: State management
**Critical**

TypedDict/Pydantic, reducers, add_messages.

- [ ] What is graph state?
- [ ] TypedDict state
- [ ] Pydantic state
- [ ] Dataclass state
- [ ] State schemas
- [ ] Input schema
- [ ] Output schema
- [ ] Private state
- [ ] State updates
- [ ] Partial state updates
- [ ] State reducers
- [ ] Annotated
- [ ] add_messages
- [ ] Message state
- [ ] Custom reducers
- [ ] State validation
- [ ] State versioning
- [ ] State size management

## Phase 3: Nodes and edges
**Core**

Conditional routing, Commands.

- [ ] Creating nodes
- [ ] Sync nodes
- [ ] Async nodes
- [ ] Node input
- [ ] Node output
- [ ] Node configuration
- [ ] Node error handling
- [ ] Normal edges
- [ ] Conditional edges
- [ ] Dynamic routing
- [ ] Multiple outgoing edges
- [ ] Entry points
- [ ] Finish points
- [ ] Routing functions
- [ ] Command-based routing
- [ ] Node composition
- [ ] Reusable nodes

## Phase 4: Control flow and graph patterns
**Critical**

Parallel, cycles, supervisor.

- [ ] Sequential workflows
- [ ] Conditional workflows
- [ ] Parallel execution
- [ ] Fan-out and fan-in
- [ ] Cyclic workflows
- [ ] Loop control
- [ ] Retry loops
- [ ] Evaluator loops
- [ ] Planner-executor pattern
- [ ] Router-worker pattern
- [ ] Supervisor-worker pattern
- [ ] Hierarchical agents
- [ ] Human approval workflow
- [ ] Multi-agent handoff
- [ ] Dynamic agent routing
- [ ] Subgraph workflows

## Phase 5: Tool-calling agents
**Core**

ToolNode, binding, limits.

- [ ] LLM nodes
- [ ] Tool nodes
- [ ] ToolNode
- [ ] Tool schemas
- [ ] Tool binding
- [ ] Tool selection
- [ ] Tool execution
- [ ] Tool result messages
- [ ] Conditional tool routing
- [ ] Multiple tools
- [ ] Parallel tools
- [ ] Async tools
- [ ] Tool error handling
- [ ] Tool validation
- [ ] Tool authorization
- [ ] Tool timeout management
- [ ] Tool execution limits

## Phase 6: Memory and persistence
**Critical**

Checkpointers, resume, time travel.

- [ ] Checkpointing
- [ ] Checkpointer
- [ ] Thread ID
- [ ] Checkpoint ID
- [ ] State persistence
- [ ] InMemorySaver
- [ ] SQLite checkpointer
- [ ] PostgreSQL checkpointer
- [ ] MongoDB persistence integration patterns
- [ ] Redis persistence integration patterns
- [ ] Resume workflow
- [ ] Restore state
- [ ] Time travel
- [ ] Checkpoint history
- [ ] State recovery
- [ ] Checkpoint retention
- [ ] Persistent conversation history

## Phase 7: Human-in-the-loop
**Production**

interrupt(), resume, approvals.

- [ ] What is human-in-the-loop?
- [ ] Interrupts
- [ ] interrupt()
- [ ] Command(resume=...)
- [ ] Approval workflows
- [ ] Rejection workflows
- [ ] Tool approval
- [ ] Financial transaction approval
- [ ] Document review
- [ ] Resume after interruption
- [ ] Human feedback
- [ ] Audit trail
- [ ] Timeout for human approval
- [ ] Expired approval handling
- [ ] Secure approval boundaries

## Phase 8: Multi-agent systems
**Expert**

Supervisor, handoffs, consensus.

- [ ] Single-agent architecture
- [ ] Multi-agent architecture
- [ ] Supervisor agent
- [ ] Worker agents
- [ ] Router agent
- [ ] Planner agent
- [ ] Research agent
- [ ] Coding agent
- [ ] Reviewer agent
- [ ] Evaluator agent
- [ ] Agent delegation
- [ ] Agent handoffs
- [ ] Shared state
- [ ] Isolated agent state
- [ ] Agent communication
- [ ] Agent collaboration
- [ ] Agent conflict resolution
- [ ] Consensus patterns
- [ ] Multi-agent failure handling
- [ ] Multi-agent evaluation

## Phase 9: Advanced LangGraph
**Advanced**

Subgraphs, Store, Send API.

- [ ] Subgraphs
- [ ] Nested graphs
- [ ] Reusable subgraphs
- [ ] Multiple schemas
- [ ] Runtime context
- [ ] Store
- [ ] Long-term memory
- [ ] Short-term memory
- [ ] Runtime configuration
- [ ] Dynamic model selection
- [ ] Dynamic tool selection
- [ ] Send API
- [ ] Command API
- [ ] Map-reduce workflows
- [ ] Streaming graph execution
- [ ] Graph state inspection
- [ ] Graph visualization
- [ ] Durable execution

## Phase 10: Streaming and execution
**Production**

stream modes, SSE.

- [ ] stream()
- [ ] astream()
- [ ] Values stream mode
- [ ] Updates stream mode
- [ ] Messages stream mode
- [ ] Custom stream mode
- [ ] Debug stream mode
- [ ] Multiple stream modes
- [ ] Token streaming
- [ ] Node-level updates
- [ ] Event streaming
- [ ] Async execution
- [ ] Concurrent execution
- [ ] Cancellation
- [ ] Timeout management
- [ ] Streaming through FastAPI SSE

## Phase 11: Reliability and failure handling
**Critical**

Retries, loop prevention, recovery.

- [ ] Retry policies
- [ ] Node-level retry
- [ ] Timeouts
- [ ] Error handlers
- [ ] Fallback nodes
- [ ] Failure routing
- [ ] Checkpoint recovery
- [ ] Idempotent nodes
- [ ] Duplicate execution prevention
- [ ] Infinite loop prevention
- [ ] Maximum recursion limits
- [ ] Partial workflow failure
- [ ] Recovery after interruption
- [ ] External API failures
- [ ] Tool failures
- [ ] Model failures
- [ ] State corruption handling

## Phase 12: Evaluation and observability
**Production**

LangSmith/Langfuse/OTel.

- [ ] Trace graph execution
- [ ] Node-level tracing
- [ ] Agent-level tracing
- [ ] Tool call tracing
- [ ] State transition tracing
- [ ] Token usage
- [ ] Cost per graph execution
- [ ] Latency per node
- [ ] Task success rate
- [ ] Tool accuracy
- [ ] Planning quality
- [ ] Agent trajectory evaluation
- [ ] LangSmith integration
- [ ] Langfuse integration
- [ ] OpenTelemetry integration
- [ ] Production monitoring

## Phase 13: Security and governance
**Critical**

Tool auth, memory isolation.

- [ ] Agent identity
- [ ] Tool authorization
- [ ] State access control
- [ ] Tenant-specific state
- [ ] Memory isolation
- [ ] Prompt injection defense
- [ ] Tool injection defense
- [ ] Human approval for high-risk actions
- [ ] Sensitive data handling
- [ ] Audit logs
- [ ] Checkpoint data protection
- [ ] Agent autonomy limits
- [ ] Graph execution governance

## Phase 14: Enterprise deployment
**Expert**

FastAPI, Celery, K8s, multi-tenant.

- [ ] FastAPI integration
- [ ] Background agent execution
- [ ] Celery integration
- [ ] Redis integration
- [ ] PostgreSQL persistence
- [ ] MongoDB integration
- [ ] Containerization
- [ ] Kubernetes deployment
- [ ] Horizontal scaling
- [ ] Durable execution
- [ ] Worker management
- [ ] Queue management
- [ ] Rate limiting
- [ ] Cost control
- [ ] Multi-tenant execution
- [ ] Production incident response
- [ ] High availability
- [ ] Disaster recovery
