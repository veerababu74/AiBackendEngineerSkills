# System Design – Complete HLD and LLD Mastery Roadmap

**Goal:** Design scalable, reliable distributed systems (HLD) and implement clean internal components (LLD) for senior Python Backend / AI Software Engineer interviews and production work.

| Track | Focus |
|-------|--------|
| **HLD** | Architecture, scale, distributed systems, databases, infrastructure, reliability |
| **LLD** | Classes, interfaces, patterns, data models, implementation |

**Related skills:** `skills/system-design/`

---

## Phase 1: System design foundations
**Foundation**

Module 1.

- [ ] What is system design?
- [ ] HLD vs LLD
- [ ] Functional requirements
- [ ] Non-functional requirements
- [ ] Constraints/assumptions/trade-offs
- [ ] Architecture/component/sequence/class/deployment/data-flow/state diagrams
- [ ] UML fundamentals
- [ ] Architecture Decision Records (ADR)
- [ ] PoC and feasibility
- [ ] Scalability
- [ ] Availability
- [ ] Reliability
- [ ] Durability
- [ ] Maintainability
- [ ] Performance
- [ ] Security
- [ ] Fault tolerance
- [ ] Observability
- [ ] Consistency
- [ ] Resilience
## Phase 2: System design interview framework
**Critical**

Module 2.

- [ ] Clarify requirements
- [ ] Identify FR/NFR
- [ ] Estimate traffic and storage
- [ ] Define APIs
- [ ] High-level architecture
- [ ] Data model
- [ ] Bottlenecks
- [ ] Scaling and reliability
- [ ] Security and observability
- [ ] Trade-offs
- [ ] RPS/QPS
- [ ] DAU/MAU
- [ ] Concurrent users
- [ ] Read/write ratio
- [ ] Storage/bandwidth estimation
- [ ] Cache hit ratio
- [ ] Latency budget
- [ ] Back-of-the-envelope calculations
## Phase 3: Architecture styles and patterns
**Master**

Module 3.

- [ ] Monolith
- [ ] Modular monolith
- [ ] Layered/N-tier
- [ ] Microservices
- [ ] SOA
- [ ] Serverless
- [ ] Event-driven
- [ ] Hexagonal/Clean/Onion
- [ ] CQRS
- [ ] Event sourcing
- [ ] API-first
- [ ] DDD
- [ ] Strangler
- [ ] Sidecar
- [ ] Ambassador
- [ ] BFF
- [ ] Service mesh
- [ ] Pros/cons/use cases/migration strategies
## Phase 4: Networking and communication
**Master**

Module 4.

- [ ] OSI/TCP-IP
- [ ] DNS
- [ ] TCP vs UDP
- [ ] TLS/HTTPS
- [ ] HTTP/1.1/2/3
- [ ] WebSockets
- [ ] SSE
- [ ] REST/GraphQL/gRPC
- [ ] Webhooks
- [ ] Reverse/forward proxy
- [ ] Load balancer
- [ ] CDN
- [ ] Network partitions
- [ ] Service discovery
## Phase 5: Load balancing and traffic management
**Master**

Module 5.

- [ ] L4 vs L7
- [ ] Round-robin/least connections/IP hash/consistent hashing
- [ ] Health checks
- [ ] Sticky sessions
- [ ] NGINX/HAProxy
- [ ] Cloud LBs
- [ ] Geo/failover routing
- [ ] Rate limiting
- [ ] Throttling
- [ ] Backpressure
- [ ] Autoscaling
## Phase 6: Caching architecture
**Very high priority**

Module 6.

- [ ] Cache hit/miss/hit ratio
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through/back/around
- [ ] LRU/LFU/FIFO/TTL
- [ ] Redis/Memcached
- [ ] Distributed caching
- [ ] Invalidation
- [ ] Stampede/penetration/avalanche
- [ ] Hot keys
- [ ] Negative caching
- [ ] AI/embedding/session caching scenarios
## Phase 7: Database architecture and design
**Master**

Module 7.

- [ ] Relational fundamentals
- [ ] Normalization/denormalization
- [ ] ACID
- [ ] Isolation levels
- [ ] Indexing/B-trees
- [ ] Query plans
- [ ] NoSQL types
- [ ] MongoDB/Cassandra/Redis/Neo4j
- [ ] Embedding vs referencing
- [ ] Read replicas
- [ ] Sharding/partitioning
- [ ] Hot partitions
- [ ] Failover
- [ ] Multi-region
## Phase 8: Distributed systems fundamentals
**Critical**

Module 8.

- [ ] Partial failures
- [ ] CAP/PACELC
- [ ] Consistency models
- [ ] Logical/vector clocks
- [ ] Leader election
- [ ] Raft/Paxos fundamentals
- [ ] Quorum
- [ ] Distributed locks
- [ ] Split-brain
- [ ] At-most/at-least/exactly-once limits
- [ ] Idempotency
- [ ] Deduplication

> **Must understand:** Exactly-once across distributed services is not free — design idempotency explicitly.
## Phase 9: Message queues and event-driven systems
**Master**

Module 9.

- [ ] Sync vs async
- [ ] RabbitMQ/Kafka/Service Bus
- [ ] Pub/Sub
- [ ] Consumer groups/partitions/offsets
- [ ] Acks
- [ ] Retry/DLQ
- [ ] Poison messages
- [ ] Replay
- [ ] Transactional outbox/inbox
- [ ] CDC
- [ ] Schema registry
- [ ] Consumer lag
- [ ] Backpressure
## Phase 10: Distributed transactions and consistency
**Master**

Module 10.

- [ ] ACID vs BASE
- [ ] 2PC
- [ ] Saga choreography vs orchestration
- [ ] Compensating transactions
- [ ] Outbox/inbox
- [ ] Optimistic/pessimistic locking
- [ ] Distributed locks
- [ ] Reconciliation
## Phase 11: Scalability and high availability
**Master**

Module 11.

- [ ] Vertical/horizontal scaling
- [ ] Stateless services
- [ ] Autoscaling
- [ ] CDN
- [ ] Active-active/passive
- [ ] Multi-region/zone
- [ ] Failover
- [ ] RTO/RPO
- [ ] Graceful degradation
- [ ] Bulkheads
- [ ] Circuit breakers
## Phase 12: Reliability and resilience patterns
**Master**

Module 12.

- [ ] Retry
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Timeout
- [ ] Fallback
- [ ] Rate limiter
- [ ] Load shedding
- [ ] Fail-fast
- [ ] Hedged requests
- [ ] Chaos engineering
- [ ] Fault isolation
## Phase 13: Security architecture
**Master**

Module 13.

- [ ] AuthN/AuthZ
- [ ] OAuth2/OIDC/JWT
- [ ] RBAC/ABAC
- [ ] Zero Trust
- [ ] TLS
- [ ] Encryption at rest/in transit
- [ ] Secrets management
- [ ] WAF/DDoS
- [ ] Multi-tenant isolation
- [ ] Threat modeling
- [ ] OWASP API Top 10
## Phase 14: Observability and production operations
**Master**

Module 14.

- [ ] Logs/metrics/traces
- [ ] OpenTelemetry
- [ ] Prometheus/Grafana
- [ ] App Insights
- [ ] RED/USE
- [ ] SLI/SLO/SLA
- [ ] Error budgets
- [ ] Alerting
- [ ] Incident management
- [ ] RCA
- [ ] Postmortems
- [ ] Capacity planning
## Phase 15: Object-oriented design principles
**LLD foundation**

Module 15.

- [ ] Encapsulation/abstraction/inheritance/polymorphism
- [ ] Interfaces/ABCs
- [ ] Composition/aggregation
- [ ] Dependency injection
- [ ] Loose coupling
- [ ] High cohesion
- [ ] SOLID (SRP/OCP/LSP/ISP/DIP)
- [ ] Code smells and refactoring
- [ ] When SOLID adds unnecessary complexity

> **Must understand:** SOLID is a tool, not a religion — avoid unnecessary complexity.
## Phase 16: UML and object relationships
**LLD**

Module 16.

- [ ] Class/sequence/activity/use-case/state/component diagrams
- [ ] Association/aggregation/composition
- [ ] Multiplicity
- [ ] From requirements to UML to Python classes
## Phase 17: Design patterns
**Very high priority**

Module 17.

- [ ] Singleton/Factory/Abstract Factory/Builder/Prototype
- [ ] Adapter/Bridge/Composite/Decorator/Facade/Flyweight/Proxy
- [ ] Strategy/Observer/Command/Chain/State/Template/Iterator/Mediator/Memento/Visitor
- [ ] Repository/UoW/DI/Service Layer/DTO/CQRS/Outbox/Saga/Circuit Breaker/BFF
- [ ] Problem solved
- [ ] Components
- [ ] When to avoid
- [ ] Python implementation
## Phase 18: LLD implementation with Python
**Master**

Module 18.

- [ ] Class/interface design with Protocol/ABC
- [ ] Constructor injection
- [ ] Domain models/DTOs
- [ ] Repository/service/factory/strategy classes
- [ ] Custom exceptions
- [ ] Type hints/dataclasses
- [ ] Unit tests and mocks
- [ ] Concurrency-safe design
## Phase 19: Database LLD and data modeling
**Master**

Module 19.

- [ ] Entity relationships
- [ ] 1:1/1:N/M:N
- [ ] Index design
- [ ] ORM mapping
- [ ] MongoDB embed vs reference
- [ ] Migrations
- [ ] Optimistic concurrency
- [ ] Soft deletes
- [ ] Schema versioning
## Phase 20: API and service LLD
**Master**

Module 20.

- [ ] Router/service/repository layers
- [ ] Schema design
- [ ] Middleware
- [ ] Auth components
- [ ] Error handling
- [ ] Pagination/filtering
- [ ] Idempotency
- [ ] External clients
- [ ] Transaction boundaries
## Phase 21: Concurrency and thread-safe LLD
**Advanced**

Module 21.

- [ ] Race conditions
- [ ] Locks/semaphores
- [ ] Producer-consumer
- [ ] Async locks
- [ ] Idempotent service methods
## Phase 22: Code quality and maintainable design
**Production**

Module 22.

- [ ] Clean code
- [ ] DRY/KISS/YAGNI
- [ ] Defensive programming
- [ ] Technical debt
- [ ] Testability
- [ ] Design trade-offs
## Phase 23: Core HLD problems
**Practice**

Module 23.

- [ ] URL Shortener
- [ ] Rate Limiter
- [ ] Notification System
- [ ] Chat Application
- [ ] File Storage
- [ ] Video Streaming
- [ ] Search Engine
- [ ] News Feed
- [ ] E-commerce
- [ ] Ride Sharing
- [ ] Payment System
- [ ] Booking System
- [ ] Logging/Metrics platforms
- [ ] API Gateway
- [ ] Job Scheduler
- [ ] Recommendation Engine
## Phase 24: Advanced distributed designs
**Expert**

Module 24.

- [ ] Distributed rate limiter/scheduler/lock/cache
- [ ] ID generator
- [ ] Real-time analytics
- [ ] Multi-tenant SaaS
- [ ] Multi-region apps
- [ ] Stream processing
- [ ] Workflow orchestration
- [ ] Observability platform
## Phase 25: GenAI HLD
**Critical**

Module 25.

- [ ] LLM gateway
- [ ] Multi-model routing
- [ ] Prompt management
- [ ] RAG architecture
- [ ] Ingestion/embedding/vector DB
- [ ] Hybrid search/reranking
- [ ] Conversation/memory
- [ ] Agent execution and multi-agent orchestration
- [ ] MCP/A2A
- [ ] HITL
- [ ] Streaming/async inference
- [ ] Cost tracking
## Phase 26: AI production architecture
**Critical**

Module 26.

- [ ] Inference scalability/batching
- [ ] Queues
- [ ] Token budgeting
- [ ] Prompt/semantic/RAG caching
- [ ] Multi-tenant AI
- [ ] ACL on documents
- [ ] Eval pipelines
- [ ] Guardrails
- [ ] Prompt injection defense
- [ ] AI observability
- [ ] Cost monitoring
- [ ] Governance
## Phase 27: GenAI LLD problems
**Practice**

Module 27.

- [ ] LLM provider abstraction
- [ ] Prompt template manager
- [ ] Model router
- [ ] Token counter
- [ ] Response cache
- [ ] Retriever/embedder/chunker interfaces
- [ ] Tool registry
- [ ] Agent executor/state/memory
- [ ] Approval workflow
- [ ] Eval framework
- [ ] Multi-tenant conversation manager
## Phase 28: Design and documentation tools
**Support**

Module 28.

- [ ] diagrams.net
- [ ] Excalidraw
- [ ] Mermaid
- [ ] PlantUML
- [ ] C4 model
- [ ] OpenAPI
- [ ] ADRs
- [ ] Threat modeling diagrams
## Phase 29: Cloud and infrastructure design
**Master**

Module 29.

- [ ] Docker/K8s
- [ ] HPA
- [ ] Ingress
- [ ] Terraform
- [ ] Azure App Service/Container Apps/AKS/APIM/Front Door
- [ ] Redis/Service Bus/SQL/Cosmos
- [ ] Multi-region DR
- [ ] Cost optimization
## Phase 30: Practical system design projects
**Build**

Module 30.

- [ ] URL Shortener
- [ ] Distributed Rate Limiter
- [ ] Notification Platform
- [ ] E-commerce Platform
- [ ] Enterprise RAG Platform
- [ ] Multi-Agent Platform

## Classic LLD interview problems

Parking Lot · Elevator · Shopping Cart · Food Delivery · ATM · Movie Booking · Library · Ride Booking · Payment Gateway · Notification System

For each: entities → interfaces → class diagram → Python code → extensibility.

## HLD vs LLD example (payment system)

| HLD | LLD |
|-----|-----|
| Services, DBs, queues, LBs, integrations, deployment | Classes, interfaces, methods, patterns, object interactions |

## Recommended learning sequence

Fundamentals → networking → architecture styles → interview method → LB/caching → DBs → distributed systems → queues → consistency → scale/reliability → security/observability → OOP/SOLID → UML → patterns → Python LLD → practice problems → GenAI design → cloud → end-to-end projects.

**Interview practice checklist**

**HLD:** clarify → estimate → APIs → diagram → scale → failures → security/observability → trade-offs

**LLD:** entities → responsibilities → UML → SOLID → patterns → clean Python → errors/concurrency → tests
