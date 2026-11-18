# RabbitMQ Mastery

**AMQP brokers, exchanges, reliability, DLQ, clustering**

---

## Phase 1: RabbitMQ fundamentals
**Foundation**

Producer, queue, exchange, AMQP.

- [ ] What is RabbitMQ?
- [ ] Message broker fundamentals
- [ ] Producer
- [ ] Consumer
- [ ] Broker
- [ ] Queue
- [ ] Exchange
- [ ] Binding
- [ ] Routing key
- [ ] Virtual host
- [ ] Message lifecycle
- [ ] AMQP fundamentals
- [ ] RabbitMQ vs Redis
- [ ] RabbitMQ vs Kafka
- [ ] RabbitMQ use cases


## Phase 2: Exchanges and routing
**Core**

Direct, fanout, topic, headers.

- [ ] Direct exchange
- [ ] Fanout exchange
- [ ] Topic exchange
- [ ] Headers exchange
- [ ] Default exchange
- [ ] Routing keys
- [ ] Binding keys
- [ ] Wildcards
- [ ] Multiple queues
- [ ] Message routing
- [ ] Dynamic routing
- [ ] Exchange-to-exchange bindings


## Phase 3: Queue management
**Core**

Durable, quorum, DLX.

- [ ] Queue creation
- [ ] Durable queues
- [ ] Exclusive queues
- [ ] Auto-delete queues
- [ ] Temporary queues
- [ ] Queue arguments
- [ ] Queue length limits
- [ ] Message TTL
- [ ] Queue priorities
- [ ] Quorum queues
- [ ] Classic queues
- [ ] Stream queues
- [ ] Dead-letter exchanges
- [ ] Queue inspection


## Phase 4: Python integration
**Engineering**

Pika and aio-pika.

- [ ] Pika
- [ ] aio-pika
- [ ] Producer implementation
- [ ] Consumer implementation
- [ ] Async producer
- [ ] Async consumer
- [ ] Connection handling
- [ ] Channel handling
- [ ] Queue declaration
- [ ] Exchange declaration
- [ ] Message publishing
- [ ] Message consumption
- [ ] Serialization
- [ ] JSON messages
- [ ] Error handling
- [ ] Reconnection


## Phase 5: Message delivery and reliability
**Critical**

Acks, confirms, delivery guarantees.

- [ ] Acknowledgments
- [ ] Automatic acknowledgment
- [ ] Manual acknowledgment
- [ ] Basic ACK
- [ ] Basic NACK
- [ ] Basic reject
- [ ] Publisher confirms
- [ ] Consumer acknowledgments
- [ ] Message persistence
- [ ] Durable queues
- [ ] Persistent messages
- [ ] Requeue
- [ ] Redelivery
- [ ] Duplicate messages
- [ ] Idempotent consumers
- [ ] At-most-once delivery
- [ ] At-least-once delivery
- [ ] Exactly-once limitations


## Phase 6: Advanced RabbitMQ
**Advanced**

Prefetch, RPC, retries.

- [ ] Prefetch count
- [ ] Consumer concurrency
- [ ] Competing consumers
- [ ] Work queues
- [ ] Fanout messaging
- [ ] Request-response messaging
- [ ] RPC pattern
- [ ] Priority messaging
- [ ] Delayed messages
- [ ] Retry queues
- [ ] Dead-letter queues
- [ ] Poison messages
- [ ] Message expiration
- [ ] Backpressure
- [ ] Consumer failure recovery


## Phase 7: FastAPI and RabbitMQ
**Production**

Doc/RAG/agent queues.

- [ ] FastAPI producer
- [ ] Background consumer
- [ ] Document processing queue
- [ ] RAG indexing queue
- [ ] Email processing
- [ ] Notification service
- [ ] Report generation
- [ ] Agent execution queue
- [ ] Job status persistence
- [ ] Progress notifications
- [ ] WebSocket integration
- [ ] Service-to-service communication


## Phase 8: RabbitMQ clustering and scaling
**Production**

HA, quorum, partitions.

- [ ] RabbitMQ clustering
- [ ] Cluster nodes
- [ ] Node discovery
- [ ] Quorum queues
- [ ] Replication
- [ ] High availability
- [ ] Consumer scaling
- [ ] Queue scaling
- [ ] Load balancing
- [ ] Connection management
- [ ] Network partition handling
- [ ] Cluster recovery


## Phase 9: Security
**Critical**

Users, vhosts, TLS.

- [ ] User management
- [ ] Virtual host permissions
- [ ] Configure, read and write permissions
- [ ] Authentication
- [ ] TLS
- [ ] Certificate management
- [ ] Network security
- [ ] Secret management
- [ ] Least privilege
- [ ] Secure message payloads
- [ ] Audit logging


## Phase 10: Production RabbitMQ
**Expert**

Monitoring, alarms, DR.

- [ ] RabbitMQ management UI
- [ ] Monitoring
- [ ] Prometheus integration
- [ ] Grafana dashboards
- [ ] Queue depth monitoring
- [ ] Consumer lag / processing delay
- [ ] Unacknowledged messages
- [ ] Connection monitoring
- [ ] Disk alarms
- [ ] Memory alarms
- [ ] Docker deployment
- [ ] Kubernetes deployment
- [ ] Backup and recovery
- [ ] Disaster recovery
- [ ] Performance tuning
- [ ] Production troubleshooting

