# LangChain Mastery

**LLM apps, LCEL, RAG, tools, agents, production**

---

## Phase 1: LangChain fundamentals
**Foundation**

Models, prompts, runnables, chains.

- [ ] What is LangChain?
- [ ] LangChain architecture
- [ ] LangChain ecosystem
- [ ] LangChain vs direct LLM API calls
- [ ] LangChain vs LangGraph
- [ ] LangChain Python packages
- [ ] Core abstractions
- [ ] Models
- [ ] Prompts
- [ ] Messages
- [ ] Output parsers
- [ ] Runnables
- [ ] Chains
- [ ] Retrievers
- [ ] Tools
- [ ] Agents
- [ ] Callbacks
- [ ] Streaming
- [ ] Async execution

## Phase 2: Model integrations
**Core**

Azure/OpenAI/Gemini/Claude/Ollama.

- [ ] Chat models
- [ ] LLMs vs chat models
- [ ] Azure OpenAI integration
- [ ] OpenAI integration
- [ ] Google Gemini integration
- [ ] Anthropic Claude integration
- [ ] AWS Bedrock integration
- [ ] Ollama integration
- [ ] Hugging Face integration
- [ ] Model configuration
- [ ] Temperature
- [ ] Top-p
- [ ] Max output tokens
- [ ] Stop sequences
- [ ] Model parameters
- [ ] Model fallback
- [ ] Model routing
- [ ] Model retries
- [ ] Token usage tracking
- [ ] Streaming model responses

## Phase 3: Prompt engineering with LangChain
**Core**

ChatPromptTemplate, few-shot.

- [ ] PromptTemplate
- [ ] ChatPromptTemplate
- [ ] SystemMessage
- [ ] HumanMessage
- [ ] AIMessage
- [ ] MessagesPlaceholder
- [ ] Few-shot prompts
- [ ] Dynamic prompt variables
- [ ] Prompt composition
- [ ] Prompt partial variables
- [ ] Prompt templates from files
- [ ] Prompt versioning
- [ ] Prompt injection awareness
- [ ] Prompt optimization
- [ ] Structured prompt design
- [ ] Prompt testing

## Phase 4: Output parsers and structured outputs
**Core**

JSON/Pydantic parsers.

- [ ] StrOutputParser
- [ ] JsonOutputParser
- [ ] PydanticOutputParser
- [ ] OutputFixingParser
- [ ] Structured output with models
- [ ] JSON schema outputs
- [ ] Enum outputs
- [ ] Nested structured responses
- [ ] Validation failures
- [ ] Retry on invalid outputs
- [ ] Structured output with tools
- [ ] Parsing streaming outputs
- [ ] Schema validation

## Phase 5: LCEL — LangChain Expression Language
**Critical**

Runnable composition.

- [ ] What is LCEL?
- [ ] Runnable interface
- [ ] Runnable sequences
- [ ] Runnable parallel
- [ ] Runnable passthrough
- [ ] Runnable lambda
- [ ] Runnable branch
- [ ] Runnable assign
- [ ] Runnable binding
- [ ] Runnable configuration
- [ ] Composition using |
- [ ] Batch execution
- [ ] Async invocation
- [ ] Streaming execution
- [ ] Error propagation
- [ ] Retry configuration
- [ ] Fallback configuration
- [ ] Concurrency limits
- [ ] Custom runnables

## Phase 6: Document loaders
**Core**

PDF, web, cloud, custom.

- [ ] What are document loaders?
- [ ] Document objects
- [ ] Document metadata
- [ ] PDF loaders
- [ ] Word loaders
- [ ] Excel loaders
- [ ] CSV loaders
- [ ] JSON loaders
- [ ] HTML loaders
- [ ] Markdown loaders
- [ ] Text loaders
- [ ] Web page loaders
- [ ] S3 and Blob Storage integrations
- [ ] Database document loaders
- [ ] Directory loaders
- [ ] Custom document loaders
- [ ] Error handling during ingestion
- [ ] Large document ingestion

## Phase 7: Text splitters and chunking
**Critical**

Recursive, semantic, parent-child.

- [ ] Why chunking is required
- [ ] Fixed-size chunking
- [ ] Character-based splitting
- [ ] Recursive character splitting
- [ ] Token-based splitting
- [ ] Sentence-based splitting
- [ ] Paragraph-based splitting
- [ ] Markdown-aware splitting
- [ ] HTML-aware splitting
- [ ] Code-aware splitting
- [ ] Semantic chunking
- [ ] Parent-child chunking
- [ ] Hierarchical chunking
- [ ] Chunk overlap
- [ ] Chunk size optimization
- [ ] Metadata preservation
- [ ] Chunking evaluation
- [ ] Custom text splitters

## Phase 8: Embeddings
**Core**

Providers, batching, versioning.

- [ ] What are embeddings?
- [ ] Embedding models
- [ ] Document embeddings
- [ ] Query embeddings
- [ ] Embedding dimensions
- [ ] Azure OpenAI embeddings
- [ ] Gemini embeddings
- [ ] Hugging Face embeddings
- [ ] Sentence Transformers
- [ ] Local embeddings
- [ ] Batch embedding generation
- [ ] Async embedding generation
- [ ] Embedding caching
- [ ] Rate limit handling
- [ ] Embedding versioning
- [ ] Embedding model migration

## Phase 9: Vector stores
**Core**

FAISS, Chroma, Pinecone, Qdrant, Azure.

- [ ] Vector store abstraction
- [ ] FAISS
- [ ] ChromaDB
- [ ] Pinecone
- [ ] Qdrant
- [ ] Azure AI Search
- [ ] MongoDB Atlas Vector Search
- [ ] Add documents
- [ ] Update documents
- [ ] Delete documents
- [ ] Similarity search
- [ ] Similarity search with scores
- [ ] Metadata filtering
- [ ] MMR retrieval
- [ ] Vector store persistence
- [ ] Vector store selection

## Phase 10: Retrievers and advanced retrieval
**Critical**

Multi-query, HyDE, ensemble.

- [ ] Retriever fundamentals
- [ ] Vector store retriever
- [ ] Similarity retriever
- [ ] MMR retriever
- [ ] Self-query retriever
- [ ] Multi-query retriever
- [ ] Contextual compression retriever
- [ ] Parent document retriever
- [ ] Ensemble retriever
- [ ] BM25 retriever
- [ ] Hybrid retrieval
- [ ] Query expansion
- [ ] Query rewriting
- [ ] HyDE
- [ ] Reranking
- [ ] Cross-encoder reranking
- [ ] Metadata-aware retrieval
- [ ] Custom retrievers
- [ ] Retrieval evaluation

## Phase 11: RAG application development
**Must master**

Basic to agentic RAG.

- [ ] Basic RAG
- [ ] Retrieval and generation chains
- [ ] Document ingestion pipeline
- [ ] Query pipeline
- [ ] Context assembly
- [ ] Citation generation
- [ ] Source document tracking
- [ ] Conversational RAG
- [ ] History-aware retrieval
- [ ] Multi-query RAG
- [ ] Hybrid RAG
- [ ] Corrective RAG
- [ ] Self-RAG concepts
- [ ] Adaptive RAG
- [ ] Graph RAG concepts
- [ ] Multimodal RAG
- [ ] Agentic RAG
- [ ] RAG with permissions
- [ ] RAG failure handling

## Phase 12: Memory and conversation management
**Core**

History, sessions, privacy.

- [ ] Conversation history
- [ ] Message history
- [ ] Chat message persistence
- [ ] Session management
- [ ] User-level memory
- [ ] Long-term memory
- [ ] Short-term memory
- [ ] Summarization memory concepts
- [ ] Window-based history
- [ ] Token-aware history
- [ ] MongoDB message history
- [ ] Redis-backed message history
- [ ] Memory retrieval
- [ ] Memory privacy
- [ ] Memory deletion
- [ ] Memory evaluation

> **Must understand:** Learn LangChain message-history integrations, but use LangGraph persistence for new stateful agent applications rather than older legacy memory abstractions.

## Phase 13: Tools and function calling
**Critical**

@tool, schemas, permissions.

- [ ] What are tools?
- [ ] @tool
- [ ] Custom tools
- [ ] Tool descriptions
- [ ] Tool schemas
- [ ] Pydantic tool arguments
- [ ] Tool calling
- [ ] Function calling
- [ ] Tool result handling
- [ ] Tool errors
- [ ] Tool retries
- [ ] Tool timeouts
- [ ] Async tools
- [ ] Parallel tool execution
- [ ] Tool permissions
- [ ] Tool validation
- [ ] Tool selection
- [ ] Tool execution tracing

## Phase 14: Agents
**Core**

Tool-calling agents, limits.

- [ ] What is an agent?
- [ ] Agent vs chain
- [ ] Agent executor concepts
- [ ] Tool-calling agents
- [ ] ReAct pattern
- [ ] Zero-shot tool use
- [ ] Structured chat agents
- [ ] Planning agents
- [ ] Tool selection
- [ ] Agent reasoning traces
- [ ] Agent stopping conditions
- [ ] Maximum iteration limits
- [ ] Agent error handling
- [ ] Agent evaluation
- [ ] Agent security
- [ ] Why complex agents need explicit state and orchestration

## Phase 15: Streaming and asynchronous execution
**Production**

ainvoke, astream_events.

- [ ] invoke()
- [ ] ainvoke()
- [ ] batch()
- [ ] abatch()
- [ ] stream()
- [ ] astream()
- [ ] astream_events()
- [ ] Token streaming
- [ ] Event streaming
- [ ] Async generators
- [ ] Concurrent model calls
- [ ] Parallel retrieval
- [ ] Backpressure
- [ ] Cancellation
- [ ] Timeouts
- [ ] Rate limits
- [ ] Streaming error handling

## Phase 16: Production engineering
**Expert**

FastAPI, caches, tracing, testing.

- [ ] LangChain with FastAPI
- [ ] Dependency injection
- [ ] Background ingestion
- [ ] Celery integration
- [ ] Redis caching
- [ ] MongoDB persistence
- [ ] API authentication
- [ ] Tenant isolation
- [ ] Structured error handling
- [ ] Retry and fallback
- [ ] Circuit breakers
- [ ] Model routing
- [ ] Token cost optimization
- [ ] Caching
- [ ] Prompt versioning
- [ ] LangSmith tracing
- [ ] Langfuse tracing
- [ ] OpenTelemetry integration
- [ ] Unit and integration testing
- [ ] Deployment and scaling
