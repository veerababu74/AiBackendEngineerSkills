# Context Engineering

**Right information at the right time — assembly, memory, RAG, evaluation**

---

## Phase 1: Fundamentals
**Critical**

Broader than prompt engineering.

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
- [ ] Construct final model request from instructions, history, RAG, memory and tools

## Phase 2: Context components
**Critical**

Sources of context and conflict resolution.

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

## Phase 3: Assembly and management
**Critical**

Budget tokens under real constraints.

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
- [ ] Design selection for 100 messages + 20 docs + 15 tool outputs under a token cap

## Phase 4: Memory engineering
**Critical**

Working through multi-agent memory.

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

Retrieval quality for agents.

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

## Phase 6: Advanced strategies
**Advanced**

JIT loading, graphs, sharing.

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

## Phase 7: Evaluation and optimization
**Critical**

Measure and harden context systems.

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

## Projects
**Critical**

Ship working context systems.

- [ ] Intelligent context builder
- [ ] Token-aware conversation memory
- [ ] Context compression engine
- [ ] Permission-aware RAG context manager
- [ ] Multi-agent shared memory system
