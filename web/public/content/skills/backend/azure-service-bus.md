# Azure Service Bus Mastery

**Enterprise messaging queues, topics, sessions, Entra auth**

---

## Phase 1: Azure Service Bus fundamentals
**Foundation**

Namespace, queue, topic, tiers.

- [ ] What is Azure Service Bus?
- [ ] Message broker fundamentals
- [ ] Azure Service Bus architecture
- [ ] Namespace
- [ ] Queue
- [ ] Topic
- [ ] Subscription
- [ ] Message
- [ ] Sender
- [ ] Receiver
- [ ] Processor
- [ ] Message lifecycle
- [ ] Standard vs Premium tiers
- [ ] Service Bus vs Storage Queue
- [ ] Service Bus vs Event Grid
- [ ] Service Bus vs Event Hubs
- [ ] Service Bus vs Kafka
- [ ] Use cases


## Phase 2: Queues
**Core**

Peek-lock, DLQ, duplicate detection.

- [ ] Queue creation
- [ ] Queue configuration
- [ ] Message sending
- [ ] Message receiving
- [ ] Peek
- [ ] Receive and delete
- [ ] Peek lock
- [ ] Complete message
- [ ] Abandon message
- [ ] Defer message
- [ ] Dead-letter message
- [ ] Message TTL
- [ ] Queue expiration
- [ ] Queue size limits
- [ ] Duplicate detection
- [ ] Sessions
- [ ] Scheduled messages


## Phase 3: Topics and subscriptions
**Core**

Filters, fanout.

- [ ] Topic creation
- [ ] Subscription creation
- [ ] Multiple subscriptions
- [ ] Message publishing
- [ ] Message routing
- [ ] Subscription filters
- [ ] SQL filters
- [ ] Correlation filters
- [ ] Rules and actions
- [ ] Subscription management
- [ ] Fanout pattern
- [ ] Multiple consumers
- [ ] Message expiration
- [ ] Dead-letter subscriptions


## Phase 4: Python SDK integration
**Engineering**

azure-servicebus, managed identity.

- [ ] azure-servicebus
- [ ] Namespace connection
- [ ] Connection string
- [ ] Azure Entra ID authentication
- [ ] DefaultAzureCredential
- [ ] Managed identity
- [ ] Service Bus client
- [ ] Queue sender
- [ ] Queue receiver
- [ ] Topic sender
- [ ] Subscription receiver
- [ ] Async client
- [ ] Async sender
- [ ] Async receiver
- [ ] Batch sending
- [ ] Message properties
- [ ] Custom application properties
- [ ] Session ID
- [ ] Correlation ID
- [ ] Error handling


## Phase 5: Message reliability
**Critical**

Max delivery, poison, idempotency.

- [ ] Peek-lock mode
- [ ] Receive-and-delete mode
- [ ] Message completion
- [ ] Message abandonment
- [ ] Message deferral
- [ ] Dead-letter queues
- [ ] Max delivery count
- [ ] Duplicate detection
- [ ] Message TTL
- [ ] Scheduled delivery
- [ ] Retry handling
- [ ] Poison messages
- [ ] Idempotent consumers
- [ ] At-least-once delivery
- [ ] Message recovery


## Phase 6: Advanced messaging
**Advanced**

Sessions, transactions, forwarding.

- [ ] Message sessions
- [ ] Session locks
- [ ] Session state
- [ ] Session-based ordering
- [ ] Transactions
- [ ] Cross-entity transactions
- [ ] Batch messaging
- [ ] Message forwarding
- [ ] Auto-forwarding
- [ ] Correlation
- [ ] Request-response
- [ ] RPC patterns
- [ ] Message routing
- [ ] FIFO processing considerations
- [ ] Large message patterns


## Phase 7: FastAPI and Azure Service Bus
**Production**

Doc processing, agents, workers.

- [ ] FastAPI message producer
- [ ] Background message consumer
- [ ] Async Service Bus integration
- [ ] Document processing
- [ ] RAG ingestion
- [ ] Agent execution
- [ ] Notification processing
- [ ] Email processing
- [ ] Job tracking
- [ ] Message status persistence
- [ ] WebSocket progress notifications
- [ ] Multiple worker instances
- [ ] Queue-specific processing


## Phase 8: Security and governance
**Critical**

RBAC roles, private endpoints.

- [ ] Azure RBAC
- [ ] Azure Service Bus Data Sender role
- [ ] Azure Service Bus Data Receiver role
- [ ] Azure Service Bus Data Owner role
- [ ] Managed identity
- [ ] Microsoft Entra authentication
- [ ] Shared Access Signatures
- [ ] SAS policy
- [ ] Connection string security
- [ ] TLS
- [ ] Private endpoints
- [ ] Virtual networks
- [ ] Firewall rules
- [ ] Key Vault
- [ ] Audit logs
- [ ] Least privilege


## Phase 9: Monitoring and observability
**Production**

Queue depth, DLQ, App Insights.

- [ ] Azure Monitor
- [ ] Service Bus metrics
- [ ] Queue depth
- [ ] Active messages
- [ ] Dead-letter messages
- [ ] Incoming messages
- [ ] Outgoing messages
- [ ] Throttled requests
- [ ] Server errors
- [ ] Request latency
- [ ] Message processing latency
- [ ] Diagnostic settings
- [ ] Log Analytics
- [ ] Alerts
- [ ] Dashboards
- [ ] Correlation IDs
- [ ] Distributed tracing


## Phase 10: Enterprise Azure Service Bus
**Expert**

Premium MU, geo-DR, Functions/ACA/AKS.

- [ ] Standard vs Premium performance
- [ ] Messaging unit capacity
- [ ] Namespace design
- [ ] Multiple queues
- [ ] Multiple topics
- [ ] Partitioning
- [ ] High availability
- [ ] Geo-disaster recovery
- [ ] Geo-replication considerations
- [ ] Availability zones
- [ ] Message size optimization
- [ ] Throughput optimization
- [ ] Quota management
- [ ] Throttling
- [ ] Retry and backoff
- [ ] Disaster recovery
- [ ] Azure Functions integration
- [ ] Azure Container Apps integration
- [ ] AKS integration
- [ ] Event-driven microservices
- [ ] Production incident handling

