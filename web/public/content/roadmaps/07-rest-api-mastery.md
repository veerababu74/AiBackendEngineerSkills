# REST API Mastery Roadmap

**Learning path:** Beginner → Enterprise production · **18 modules** · Python + FastAPI

Design, secure, scale, test, deploy, and monitor enterprise REST APIs for real-world backend and GenAI applications.

## Learning progression

1. REST API fundamentals
2. HTTP protocol and methods
3. API design principles and standards
4. FastAPI architecture and implementation
5. Request and response validation
6. Authentication and authorization
7. Database integration and transactions
8. Advanced API patterns
9. Error handling and exception management
10. API security
11. Performance and scalability
12. Async APIs and concurrency
13. API testing and automation
14. API documentation and versioning
15. Microservices and API gateways
16. Observability and monitoring
17. Deployment and DevOps
18. Enterprise production scenarios and GenAI projects

**Related skills:** `skills/rest-api/`

---

## Phase 1: REST API fundamentals
**Foundation**

Core REST concepts, HTTP structure, methods, and status codes.

- [ ] What is an API?
- [ ] What is a REST API?
- [ ] REST vs SOAP vs GraphQL vs gRPC
- [ ] REST architectural principles
- [ ] Client-server architecture
- [ ] Stateless communication
- [ ] Resource-based architecture
- [ ] Uniform interface
- [ ] Cacheability
- [ ] Layered system
- [ ] Code-on-demand (optional REST constraint)
- [ ] Request-response lifecycle
- [ ] API consumers and providers
- [ ] API contracts
- [ ] JSON and XML
- [ ] REST API vs WebSocket
- [ ] HTTP and HTTPS
- [ ] HTTP request structure
- [ ] HTTP response structure
- [ ] Request headers
- [ ] Response headers
- [ ] Request body
- [ ] Query parameters
- [ ] Path parameters
- [ ] URL structure
- [ ] Content-Type
- [ ] Accept
- [ ] Authorization
- [ ] User-Agent
- [ ] Host
- [ ] Cache-Control
- [ ] ETag
- [ ] CORS headers
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] HEAD
- [ ] OPTIONS
- [ ] Safe vs unsafe methods
- [ ] Idempotent vs non-idempotent methods
- [ ] PUT vs PATCH
- [ ] POST vs PUT
- [ ] GET request body limitations
- [ ] DELETE behavior
- [ ] Method selection in real projects
- [ ] 2xx: 200, 201, 202, 204
- [ ] 3xx: 301, 302, 304
- [ ] 4xx: 400, 401, 403, 404, 405, 409, 413, 415, 422, 429
- [ ] 5xx: 500, 501, 502, 503, 504
- [ ] When to use each status code exactly

> **Must understand:** Master HTTP methods, status codes, idempotency, request/response lifecycle and REST principles before FastAPI implementation.
### HTTP methods quick reference

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data | Get employee |
| POST | Create resource | Create employee |
| PUT | Replace resource | Replace employee |
| PATCH | Partially update | Update employee email |
| DELETE | Delete resource | Delete employee |
| HEAD | Retrieve headers | Check resource |
| OPTIONS | Discover supported methods | CORS preflight |

## Phase 2: REST API design principles
**Critical**

Resource naming, pagination, filtering, and consistent contracts.

- [ ] Resource naming conventions
- [ ] Nouns vs verbs in endpoints
- [ ] Singular vs plural resources
- [ ] Nested resources
- [ ] URI design
- [ ] Query parameter design
- [ ] Filtering
- [ ] Sorting
- [ ] Searching
- [ ] Pagination
- [ ] Offset pagination
- [ ] Cursor-based pagination
- [ ] Limit and offset
- [ ] Field selection
- [ ] Sparse fieldsets
- [ ] Bulk operations
- [ ] Batch APIs
- [ ] Relationship management
- [ ] Consistent JSON responses
- [ ] API request/response contracts
- [ ] API naming conventions
- [ ] API design standards
### Example resource design

```
GET    /api/v1/employees
GET    /api/v1/employees/101
POST   /api/v1/employees
PUT    /api/v1/employees/101
PATCH  /api/v1/employees/101
DELETE /api/v1/employees/101
```

## Phase 3: FastAPI complete implementation
**Critical**

Architecture, routers, DI, middleware, project structure.

- [ ] FastAPI architecture
- [ ] ASGI and WSGI
- [ ] Uvicorn and Gunicorn
- [ ] Application initialization
- [ ] Routers
- [ ] Route handlers
- [ ] Path operations
- [ ] Path parameters
- [ ] Query parameters
- [ ] Request body
- [ ] Response models
- [ ] Status codes
- [ ] Response classes
- [ ] Dependency injection
- [ ] Middleware
- [ ] Background tasks
- [ ] Lifespan events
- [ ] Monolithic vs modular architecture
- [ ] Controller/service/repository pattern
- [ ] Router separation
- [ ] Business logic separation
- [ ] Database layer
- [ ] Configuration management
- [ ] Environment variables
- [ ] Settings management
- [ ] Dependency management
- [ ] Reusable utilities
- [ ] Application factory pattern
### Suggested project structure

```
app/
├── main.py
├── api/v1/routes/ + router.py
├── core/ (config, security, exceptions)
├── schemas/
├── models/
├── services/
├── repositories/
├── database/
├── middleware/
├── dependencies/
└── tests/
```

## Phase 4: Request and response validation
**Critical**

Pydantic models, validators, serialization.

- [ ] Pydantic request models
- [ ] Response models
- [ ] Field validation
- [ ] Model validation
- [ ] Optional fields
- [ ] Required fields
- [ ] Default values
- [ ] Nested request models
- [ ] Enum validation
- [ ] Custom validators
- [ ] Strict validation
- [ ] Type conversion
- [ ] Serialization
- [ ] Deserialization
- [ ] Custom JSON encoders
- [ ] Generic response schemas
- [ ] Reusable schemas
- [ ] Partial update schemas
- [ ] Request size validation
- [ ] File upload validation
## Phase 5: Authentication and authorization
**Critical**

JWT, OAuth2, RBAC/ABAC, Entra ID.

- [ ] Authentication vs authorization
- [ ] Basic authentication
- [ ] API key authentication
- [ ] JWT authentication
- [ ] OAuth 2.0
- [ ] OpenID Connect
- [ ] Access tokens
- [ ] Refresh tokens
- [ ] Token expiry
- [ ] Token revocation
- [ ] Password hashing
- [ ] Password reset
- [ ] Multi-factor authentication
- [ ] Role-based access control (RBAC)
- [ ] Attribute-based access control (ABAC)
- [ ] Permission-based access
- [ ] Resource-level authorization
- [ ] Scope-based authorization
- [ ] Tenant-level authorization
- [ ] Admin vs user access
- [ ] Object-level access control
- [ ] Service-to-service authentication
- [ ] JWT signature verification
- [ ] Token rotation
- [ ] Secure cookies
- [ ] CSRF protection
- [ ] Session management
- [ ] Managed identities
- [ ] Azure Entra ID integration
## Phase 6: Database integration
**Critical**

SQLAlchemy, MongoDB, transactions, Alembic.

- [ ] SQLAlchemy ORM
- [ ] SQLAlchemy Core
- [ ] Sync vs async database access
- [ ] PostgreSQL
- [ ] MySQL
- [ ] MongoDB
- [ ] Motor / PyMongo Async API
- [ ] Connection pooling
- [ ] Session management
- [ ] Repository pattern
- [ ] Unit of Work pattern
- [ ] CRUD operations
- [ ] Transactions
- [ ] Commit and rollback
- [ ] Isolation levels
- [ ] Database migrations with Alembic
- [ ] Indexing
- [ ] Query optimization
- [ ] N+1 query problem
- [ ] Optimistic and pessimistic locking
- [ ] Database connection failures
- [ ] Database retry mechanisms
## Phase 7: Advanced API patterns
**High**

Idempotency, webhooks, streaming, BFF.

- [ ] Idempotency keys
- [ ] Request deduplication
- [ ] Bulk insert/update/delete
- [ ] Long-running API operations
- [ ] Asynchronous job processing
- [ ] Polling APIs
- [ ] Webhook implementation
- [ ] Webhook signature verification
- [ ] Callback APIs
- [ ] Streaming responses
- [ ] Server-Sent Events (SSE)
- [ ] WebSockets vs REST
- [ ] File upload/download
- [ ] Chunked uploads
- [ ] Resumable uploads
- [ ] Large file processing
- [ ] Multipart requests
- [ ] Presigned URLs
- [ ] API composition
- [ ] BFF (Backend for Frontend)
- [ ] External API integration
- [ ] Third-party API clients
## Phase 8: Error handling and reliability
**Critical**

Centralized exceptions, retries, circuit breakers.

- [ ] Centralized exception handling
- [ ] Custom exception classes
- [ ] HTTPException
- [ ] Global exception handlers
- [ ] Validation error handling
- [ ] Consistent error response format
- [ ] Error codes
- [ ] Safe error messages
- [ ] Structured logging
- [ ] Retry mechanisms
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Circuit breaker
- [ ] Timeout handling
- [ ] Fallback mechanisms
- [ ] Rate-limit errors
- [ ] Graceful degradation
- [ ] Idempotent retries
- [ ] Dead-letter queues
- [ ] Distributed failure handling
- [ ] Dependency failures
## Phase 9: REST API security
**Critical**

OWASP API Security Top 10 and hardening.

- [ ] OWASP API Security Top 10
- [ ] Broken Object Level Authorization (BOLA)
- [ ] Broken Authentication
- [ ] Broken Object Property Level Authorization
- [ ] Unrestricted resource consumption
- [ ] Broken Function Level Authorization
- [ ] SSRF
- [ ] Security misconfiguration
- [ ] Improper inventory management
- [ ] Unsafe consumption of APIs
- [ ] SQL injection
- [ ] NoSQL injection
- [ ] XSS
- [ ] CSRF
- [ ] CORS misconfiguration
- [ ] Request validation
- [ ] Input sanitization
- [ ] Output encoding
- [ ] File upload security
- [ ] Secrets management
- [ ] TLS/HTTPS
- [ ] Rate limiting
- [ ] IP allowlisting/blocklisting
- [ ] Audit logging
- [ ] API abuse detection
## Phase 10: Performance and scalability
**High**

Caching, pooling, load testing, capacity.

- [ ] Response time optimization
- [ ] Throughput
- [ ] Requests per second
- [ ] Concurrent users
- [ ] Connection pooling
- [ ] Database query optimization
- [ ] Redis caching
- [ ] HTTP caching
- [ ] CDN caching
- [ ] Cache invalidation
- [ ] Compression
- [ ] Pagination
- [ ] Async processing
- [ ] Background jobs
- [ ] Horizontal scaling
- [ ] Vertical scaling
- [ ] Load balancing
- [ ] Worker processes
- [ ] Connection limits
- [ ] Backpressure
- [ ] Rate limiting
- [ ] Throttling
- [ ] Request batching
- [ ] Performance profiling
- [ ] Load testing
- [ ] Stress testing
- [ ] Spike testing
- [ ] Capacity planning
## Phase 11: Async APIs and concurrency
**Critical**

Event loop, HTTPX, gather, backpressure.

- [ ] Synchronous vs asynchronous programming
- [ ] ASGI event loop
- [ ] async def vs def
- [ ] await
- [ ] Async HTTP clients
- [ ] HTTPX
- [ ] Async database operations
- [ ] Concurrent API calls
- [ ] asyncio.gather
- [ ] Task groups
- [ ] Semaphores
- [ ] Thread pools
- [ ] Process pools
- [ ] CPU-bound vs I/O-bound workloads
- [ ] Blocking operations inside async routes
- [ ] Cancellation
- [ ] Timeouts
- [ ] Concurrency limits
- [ ] Race conditions
- [ ] Deadlocks
- [ ] Backpressure
## Phase 12: API testing
**Critical**

Pytest, TestClient, Locust, ZAP.

- [ ] Unit testing
- [ ] Integration testing
- [ ] End-to-end testing
- [ ] Contract testing
- [ ] API functional testing
- [ ] Authentication testing
- [ ] Authorization testing
- [ ] Negative testing
- [ ] Boundary testing
- [ ] Validation testing
- [ ] Mocking external services
- [ ] Database test isolation
- [ ] Test fixtures
- [ ] Pytest
- [ ] FastAPI TestClient
- [ ] HTTPX AsyncClient
- [ ] Postman
- [ ] Newman
- [ ] OpenAPI-based testing
- [ ] Locust
- [ ] k6
- [ ] OWASP ZAP
- [ ] Regression testing
- [ ] Load and stress testing
## Phase 13: Documentation and versioning
**High**

OpenAPI, Swagger, deprecation.

- [ ] OpenAPI specification
- [ ] Swagger UI
- [ ] ReDoc
- [ ] API documentation
- [ ] Request examples
- [ ] Response examples
- [ ] Error documentation
- [ ] Authentication documentation
- [ ] API versioning
- [ ] URI versioning
- [ ] Header versioning
- [ ] Breaking vs non-breaking changes
- [ ] Backward compatibility
- [ ] Deprecation policies
- [ ] Sunset headers
- [ ] Consumer-driven contracts
- [ ] OpenAPI schema generation
## Phase 14: API gateway and microservices
**High**

Gateways, discovery, saga, service mesh.

- [ ] Monolith vs microservices
- [ ] API gateway architecture
- [ ] Reverse proxy
- [ ] Service discovery
- [ ] Service-to-service communication
- [ ] REST between microservices
- [ ] Synchronous vs asynchronous communication
- [ ] API aggregation
- [ ] Request routing
- [ ] Authentication at gateway
- [ ] Rate limiting at gateway
- [ ] Load balancing
- [ ] Circuit breaker
- [ ] Distributed tracing
- [ ] Correlation IDs
- [ ] Distributed transactions
- [ ] Saga pattern
- [ ] Event-driven architecture
- [ ] Service mesh
- [ ] Azure API Management
- [ ] NGINX
- [ ] Kong
- [ ] Traefik
## Phase 15: Observability and monitoring
**High**

Logs, metrics, traces, SLOs.

- [ ] Application logs
- [ ] Structured JSON logging
- [ ] Request/response logging
- [ ] Correlation IDs
- [ ] Trace IDs
- [ ] Distributed tracing
- [ ] Metrics
- [ ] Latency
- [ ] Throughput
- [ ] Error rates
- [ ] Availability
- [ ] RED method
- [ ] USE method
- [ ] OpenTelemetry
- [ ] Prometheus
- [ ] Grafana
- [ ] Azure Application Insights
- [ ] Azure Monitor
- [ ] Alerting
- [ ] Dashboards
- [ ] Health checks
- [ ] Readiness probes
- [ ] Liveness probes
- [ ] SLA, SLO, SLI
- [ ] Incident response
- [ ] Root cause analysis
## Phase 16: Deployment and DevOps
**High**

Docker, K8s, CI/CD, blue-green.

- [ ] Dockerizing FastAPI
- [ ] Docker Compose
- [ ] Multi-stage Docker builds
- [ ] Environment configuration
- [ ] Secrets management
- [ ] Gunicorn/Uvicorn workers
- [ ] Azure App Service
- [ ] Azure Container Apps
- [ ] Azure Kubernetes Service
- [ ] Kubernetes deployments
- [ ] Horizontal Pod Autoscaler
- [ ] Ingress
- [ ] CI/CD pipelines
- [ ] Azure DevOps
- [ ] GitHub Actions
- [ ] Terraform
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Rolling deployment
- [ ] Health checks
- [ ] Rollback
- [ ] High availability
- [ ] Disaster recovery
## Phase 17: REST APIs for GenAI applications
**Critical**

LLM, RAG, agents, streaming, MCP/A2A.

- [ ] LLM inference APIs
- [ ] Azure OpenAI integration
- [ ] Gemini API integration
- [ ] AI model gateway
- [ ] Multi-model routing
- [ ] Streaming LLM responses
- [ ] SSE token streaming
- [ ] RAG query endpoints
- [ ] Document ingestion APIs
- [ ] Embedding generation APIs
- [ ] Vector search APIs
- [ ] Agent execution APIs
- [ ] Multi-agent orchestration endpoints
- [ ] MCP tool integration
- [ ] A2A service integration
- [ ] Conversation history APIs
- [ ] Session management
- [ ] Human-in-the-loop approval APIs
- [ ] Token and cost tracking
- [ ] Model fallback
- [ ] LLM rate limiting
- [ ] AI request validation
- [ ] Prompt injection protection
- [ ] AI response evaluation endpoints
- [ ] Async document processing
- [ ] Tenant isolation
## Phase 18: Real-world enterprise projects
**Practice**

Five production-oriented REST API projects.

- [ ] Employee Management REST API (FastAPI, Pydantic, PostgreSQL, SQLAlchemy, JWT, RBAC)
- [ ] Enterprise API Gateway (FastAPI, Redis, JWT, Docker, PostgreSQL)
- [ ] Production RAG REST API (FastAPI, Azure OpenAI, Azure AI Search, MongoDB)
- [ ] Multi-Agent REST API Platform (FastAPI, LangGraph, Redis, MongoDB)
- [ ] API Monitoring Platform (FastAPI, OpenTelemetry, Prometheus, Grafana, App Insights)

## Recommended learning order

| Order | What to master | Priority |
|-------|----------------|----------|
| 1 | REST and HTTP fundamentals | Critical |
| 2 | API design and status codes | Critical |
| 3 | FastAPI implementation | Critical |
| 4 | Pydantic validation | Critical |
| 5 | Authentication and authorization | Critical |
| 6 | SQL and MongoDB integration | Critical |
| 7 | Error handling and reliability | Critical |
| 8 | API security | Critical |
| 9 | Async and concurrency | Critical |
| 10 | Testing | Critical |
| 11 | Performance and scaling | High |
| 12 | API gateway and microservices | High |
| 13 | Monitoring and observability | High |
| 14 | Deployment and DevOps | High |
| 15 | GenAI REST API architecture | Critical |

**Recommendation:** Start with Module 1 — master HTTP methods, status codes, idempotency, and REST principles before FastAPI implementation.
