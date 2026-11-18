# Azure AI Search Mastery

**Enterprise search, vector/hybrid, semantic ranking, secure RAG**

---

## Phase 1: Azure AI Search fundamentals
**Foundation**

Service, index, indexer, skillset.

- [ ] What is Azure AI Search?
- [ ] Search engine vs vector database
- [ ] Azure AI Search architecture
- [ ] Search service
- [ ] Search units
- [ ] Partitions
- [ ] Replicas
- [ ] Index
- [ ] Document
- [ ] Field
- [ ] Search client
- [ ] Search index client
- [ ] Indexer
- [ ] Data source
- [ ] Skillset
- [ ] Knowledge source concepts
- [ ] Search service tiers
- [ ] Service limits and quotas

## Phase 2: Index creation and schema design
**Core**

Field attributes, analyzers, aliases.

- [ ] Creating search indexes
- [ ] Field definitions
- [ ] Field types
- [ ] Key field
- [ ] Searchable fields
- [ ] Filterable fields
- [ ] Sortable fields
- [ ] Facetable fields
- [ ] Retrievable fields
- [ ] Analyzer configuration
- [ ] Normalizers
- [ ] Scoring profiles
- [ ] Field attributes
- [ ] Complex fields
- [ ] Collection fields
- [ ] Nested documents
- [ ] Index versioning
- [ ] Index aliasing
- [ ] Schema evolution

## Phase 3: Data ingestion and indexers
**Core**

Push/pull, incremental, Blob/SQL/Cosmos.

- [ ] Manual indexing
- [ ] Push API
- [ ] Pull-based indexing
- [ ] Indexer fundamentals
- [ ] Azure Blob Storage integration
- [ ] Azure SQL integration
- [ ] Cosmos DB integration
- [ ] Data source configuration
- [ ] Incremental indexing
- [ ] Change detection
- [ ] Deletion detection
- [ ] Scheduled indexing
- [ ] Indexer execution history
- [ ] Indexer errors
- [ ] Indexer reset
- [ ] Indexer troubleshooting
- [ ] Custom ingestion pipeline
- [ ] Large-scale ingestion

## Phase 4: Search fundamentals
**Core**

Lucene, filters, facets.

- [ ] Full-text search
- [ ] Simple query syntax
- [ ] Full Lucene query syntax
- [ ] Search fields
- [ ] Search modes
- [ ] Exact matching
- [ ] Prefix matching
- [ ] Wildcard queries
- [ ] Fuzzy search
- [ ] Phrase search
- [ ] Boolean operators
- [ ] Field-specific search
- [ ] Scoring
- [ ] Search result projection
- [ ] Highlighting
- [ ] Pagination
- [ ] Sorting
- [ ] Facets
- [ ] Filters
- [ ] Count

## Phase 5: Vector search
**Critical**

HNSW, metrics, quantization.

- [ ] Embeddings fundamentals
- [ ] Embedding dimensions
- [ ] Vector fields
- [ ] Vector profiles
- [ ] Vector algorithms
- [ ] HNSW
- [ ] Exhaustive KNN
- [ ] ANN vs exact search
- [ ] Similarity metrics
- [ ] Cosine similarity
- [ ] Dot product
- [ ] Euclidean distance
- [ ] Vector queries
- [ ] Top-K retrieval
- [ ] Vector filters
- [ ] Multiple vector fields
- [ ] Multivector concepts
- [ ] Vector compression
- [ ] Quantization
- [ ] Vector index capacity

## Phase 6: Hybrid search and semantic ranking
**Critical**

RRF, semantic ranker.

- [ ] Keyword search + vector search
- [ ] Hybrid search
- [ ] Reciprocal Rank Fusion
- [ ] RRF ranking
- [ ] Vector weighting
- [ ] Semantic ranker
- [ ] Semantic configuration
- [ ] Semantic fields
- [ ] Semantic captions
- [ ] Semantic answers
- [ ] Reranking
- [ ] Query rewriting
- [ ] Search relevance
- [ ] Ranking evaluation
- [ ] Hybrid search tuning

## Phase 7: Advanced filtering and security
**Critical**

OData filters, security trimming.

- [ ] OData filter syntax
- [ ] Filter expressions
- [ ] Collection filters
- [ ] Metadata filtering
- [ ] Pre-filtering
- [ ] Post-filtering
- [ ] Strict post-filtering options where supported
- [ ] Tenant filtering
- [ ] User-level permissions
- [ ] Document-level permissions
- [ ] RBAC
- [ ] ACL metadata
- [ ] Security trimming
- [ ] Private endpoints
- [ ] Managed identity
- [ ] Key-based authentication
- [ ] Data isolation
- [ ] Secure index access

> **Must understand:** Vector similarity is not authorization. Enforce permission checks before returning documents.

## Phase 8: RAG with Azure AI Search
**Must master**

Chunking, hybrid, citations, access control.

- [ ] Document ingestion
- [ ] Text extraction
- [ ] Chunking
- [ ] Chunk metadata
- [ ] Embedding generation
- [ ] Vector indexing
- [ ] Hybrid retrieval
- [ ] Semantic reranking
- [ ] Context assembly
- [ ] Citation generation
- [ ] Source attribution
- [ ] Document-level access control
- [ ] Retrieval evaluation
- [ ] Grounded generation
- [ ] Query enhancement
- [ ] Multi-query retrieval
- [ ] HyDE integration
- [ ] Parent-child retrieval
- [ ] Context compression
- [ ] RAG failure handling

## Phase 9: Advanced RAG retrieval
**Advanced**

HyDE, ensemble, agentic retrieval.

- [ ] Dense retrieval
- [ ] Sparse retrieval
- [ ] Hybrid retrieval
- [ ] Metadata-aware retrieval
- [ ] Filtered retrieval
- [ ] Query decomposition
- [ ] Query expansion
- [ ] Multi-query retrieval
- [ ] HyDE
- [ ] Step-back prompting
- [ ] Self-query retrieval
- [ ] Reranking
- [ ] Cross-encoder reranking
- [ ] Reciprocal Rank Fusion
- [ ] Contextual compression
- [ ] Parent-document retrieval
- [ ] Hierarchical retrieval
- [ ] Multi-vector retrieval
- [ ] Iterative retrieval
- [ ] Agentic retrieval

## Phase 10: Azure AI Search Python SDK
**Engineering**

azure-search-documents.

- [ ] azure-search-documents
- [ ] SearchClient
- [ ] SearchIndexClient
- [ ] SearchIndexerClient
- [ ] Index creation using Python
- [ ] Document upload
- [ ] Document merge
- [ ] Document merge-or-upload
- [ ] Document deletion
- [ ] Vector query using Python
- [ ] Hybrid query using Python
- [ ] Semantic query using Python
- [ ] OData filters
- [ ] Async SDK usage
- [ ] Pagination
- [ ] Batch indexing
- [ ] Error handling
- [ ] Retry policies
- [ ] Connection and authentication management

## Phase 11: Evaluation and optimization
**Production**

Recall@K, latency, cost.

- [ ] Recall@K
- [ ] Precision@K
- [ ] MRR
- [ ] NDCG
- [ ] Hit rate
- [ ] Retrieval relevance
- [ ] Semantic ranking quality
- [ ] Recall vs latency trade-off
- [ ] Indexing throughput
- [ ] Query latency
- [ ] Search unit capacity
- [ ] Partition optimization
- [ ] Replica optimization
- [ ] Query performance
- [ ] Cost optimization
- [ ] Load testing

## Phase 12: Production operations
**Production**

429/503, blue-green indexes.

- [ ] Monitoring
- [ ] Diagnostic logs
- [ ] Query metrics
- [ ] Indexer metrics
- [ ] Throttling
- [ ] 429 errors
- [ ] 503 errors
- [ ] Timeout handling
- [ ] Retry and backoff
- [ ] Index backup strategies
- [ ] Index recreation
- [ ] Blue-green index migration
- [ ] Index alias switching
- [ ] Disaster recovery
- [ ] Capacity planning

## Phase 13: Enterprise search engineering
**Expert**

Multi-tenant, IaC, secure RAG.

- [ ] Multi-tenant search architecture
- [ ] Large vector datasets
- [ ] High-throughput indexing
- [ ] Document lifecycle management
- [ ] Change data capture integration
- [ ] Advanced semantic relevance tuning
- [ ] Search-as-a-service architecture
- [ ] Search API gateway
- [ ] Secure RAG architecture
- [ ] Data residency
- [ ] Search governance
- [ ] Observability
- [ ] Automated index deployment
- [ ] Infrastructure as Code
- [ ] CI/CD
- [ ] Production incident response
- [ ] Search cost optimization
- [ ] Enterprise RAG architecture
