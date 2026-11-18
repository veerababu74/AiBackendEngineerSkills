# Distributed Systems & Messaging Architecture

**Combine FastAPI, brokers, and patterns for reliable backends**

---

## Phase 1: Messaging fundamentals
**Foundation**

Sync vs async, queues vs topics.

- [ ] Synchronous vs asynchronous communication
- [ ] Request-response pattern
- [ ] Message-based communication
- [ ] Event-driven architecture
- [ ] Message broker
- [ ] Event streaming
- [ ] Queue vs topic
- [ ] Pub/Sub
- [ ] Producer-consumer pattern
- [ ] Point-to-point messaging
- [ ] Fanout messaging
- [ ] Message routing
- [ ] Message ordering
- [ ] Message acknowledgment
- [ ] Delivery guarantees


## Phase 2: Distributed systems fundamentals
**Foundation**

CAP, consistency, backpressure.

- [ ] Distributed systems architecture
- [ ] CAP theorem
- [ ] Consistency models
- [ ] Eventual consistency
- [ ] Strong consistency
- [ ] Distributed transactions
- [ ] Network partitions
- [ ] Partial failures
- [ ] Fault tolerance
- [ ] High availability
- [ ] Scalability
- [ ] Horizontal scaling
- [ ] Vertical scaling
- [ ] Backpressure
- [ ] Load shedding
- [ ] Retry storms
- [ ] Graceful degradation


## Phase 3: Important distributed patterns
**Critical**

Saga, outbox, CQRS, bulkhead.

- [ ] Saga pattern
- [ ] Choreography pattern
- [ ] Orchestration pattern
- [ ] Transactional outbox
- [ ] Transactional inbox
- [ ] CQRS
- [ ] Event sourcing
- [ ] Idempotent consumer
- [ ] Deduplication
- [ ] Dead-letter queue
- [ ] Retry queue
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Distributed locks
- [ ] Leader election
- [ ] Competing consumers
- [ ] Scatter-gather
- [ ] Claim check pattern
- [ ] Event notification
- [ ] Event-carried state transfer


## Phase 4: Technology selection
**Decision guide**

When to use Redis/Rabbit/Kafka/Service Bus/Celery.

- [ ] Cache API responses with Redis
- [ ] Session state with Redis
- [ ] Background Python jobs with Celery
- [ ] Reliable work queues with RabbitMQ
- [ ] High-volume event streaming with Kafka
- [ ] Azure-native enterprise queues with Service Bus
- [ ] Real-time notifications with Redis Pub/Sub or WebSockets
- [ ] Event replay and analytics with Kafka
- [ ] Scheduled jobs with Celery Beat
- [ ] Azure event ingestion with Event Hubs
- [ ] Long-running document processing with FastAPI + Celery + broker


## Phase 5: Production GenAI backend composition
**Expert**

End-to-end platform design.

- [ ] FastAPI chat APIs
- [ ] SQLAlchemy conversation storage
- [ ] Redis session and semantic cache
- [ ] Celery background RAG indexing
- [ ] RabbitMQ task messaging
- [ ] Kafka event analytics
- [ ] Azure Service Bus enterprise integration
- [ ] Agent execution and progress tracking
- [ ] Distributed tracing
- [ ] Explain architecture decisions in senior interviews
- [ ] Handle 10,000 concurrent users
- [ ] Handle worker crashes and growing queues
- [ ] Handle 20-minute document processing tasks

