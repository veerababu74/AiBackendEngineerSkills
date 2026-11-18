# Apache Kafka Mastery

**Event streaming, partitions, consumers, EOS, Connect, enterprise**

---

## Phase 1: Kafka fundamentals
**Foundation**

Topics, partitions, consumer groups.

- [ ] What is Apache Kafka?
- [ ] Event streaming
- [ ] Message broker vs event streaming platform
- [ ] Kafka architecture
- [ ] Kafka cluster
- [ ] Broker
- [ ] Topic
- [ ] Partition
- [ ] Offset
- [ ] Producer
- [ ] Consumer
- [ ] Consumer group
- [ ] Replication
- [ ] Leader and follower
- [ ] Event lifecycle
- [ ] Kafka vs RabbitMQ
- [ ] Kafka vs Redis Streams
- [ ] Kafka use cases


## Phase 2: Kafka architecture internals
**Core**

ISR, log segments, KRaft.

- [ ] Kafka broker architecture
- [ ] Topic creation
- [ ] Partition assignment
- [ ] Partition leadership
- [ ] Replication factor
- [ ] ISR (in-sync replicas)
- [ ] High watermark
- [ ] Log segments
- [ ] Append-only log
- [ ] Retention policies
- [ ] Compaction
- [ ] Kafka metadata
- [ ] KRaft architecture
- [ ] ZooKeeper legacy architecture
- [ ] Controller
- [ ] Cluster metadata
- [ ] Leader election
- [ ] Broker failure recovery


## Phase 3: Kafka producers
**Core**

Acks, idempotent producer, batching.

- [ ] Producer architecture
- [ ] Producer API
- [ ] Bootstrap servers
- [ ] Serialization
- [ ] JSON serializer
- [ ] Avro
- [ ] Protobuf
- [ ] Message keys
- [ ] Partitioning
- [ ] Custom partitioners
- [ ] Batching
- [ ] Compression
- [ ] Buffer memory
- [ ] Acknowledgment levels
- [ ] acks=0
- [ ] acks=1
- [ ] acks=all
- [ ] Idempotent producer
- [ ] Producer retries
- [ ] Delivery timeout
- [ ] Ordering guarantees


## Phase 4: Kafka consumers
**Core**

Offsets, rebalancing, lag.

- [ ] Consumer architecture
- [ ] Consumer API
- [ ] Consumer groups
- [ ] Group ID
- [ ] Partition assignment
- [ ] Consumer offsets
- [ ] Automatic offset commits
- [ ] Manual offset commits
- [ ] Synchronous commits
- [ ] Asynchronous commits
- [ ] Consumer polling
- [ ] Consumer lag
- [ ] Rebalancing
- [ ] Static membership
- [ ] Cooperative rebalancing
- [ ] Heartbeats
- [ ] Session timeout
- [ ] Max poll interval
- [ ] Consumer failure recovery


## Phase 5: Message delivery semantics
**Critical**

At-least-once, EOS, DLQ.

- [ ] At-most-once delivery
- [ ] At-least-once delivery
- [ ] Exactly-once semantics
- [ ] Idempotent producer
- [ ] Transactions
- [ ] Transactional producer
- [ ] Transactional consumer
- [ ] Offset management
- [ ] Duplicate event handling
- [ ] Idempotent processing
- [ ] Ordering guarantees
- [ ] Retry strategies
- [ ] Dead-letter topics
- [ ] Poison messages
- [ ] Replay processing


## Phase 6: Kafka with Python
**Engineering**

confluent-kafka, FastAPI.

- [ ] confluent-kafka
- [ ] kafka-python
- [ ] Async Kafka client options
- [ ] Producer implementation
- [ ] Consumer implementation
- [ ] Batch consumption
- [ ] JSON serialization
- [ ] Avro serialization
- [ ] Schema Registry
- [ ] Protobuf serialization
- [ ] Error handling
- [ ] Producer callbacks
- [ ] Consumer callbacks
- [ ] Offset commits
- [ ] Reconnection
- [ ] FastAPI integration
- [ ] Background consumer architecture


## Phase 7: Kafka topic and partition management
**Production**

Hot partitions, multi-tenant topics.

- [ ] Topic configuration
- [ ] Partition count
- [ ] Partition strategy
- [ ] Partition keys
- [ ] Hot partitions
- [ ] Partition skew
- [ ] Partition reassignment
- [ ] Replication configuration
- [ ] Retention configuration
- [ ] Log compaction
- [ ] Topic deletion
- [ ] Topic expansion
- [ ] Topic naming standards
- [ ] Multi-tenant topic design
- [ ] Event schema evolution


## Phase 8: Kafka Schema Registry and data contracts
**Production**

Avro/Protobuf compatibility.

- [ ] Schema fundamentals
- [ ] Schema Registry
- [ ] Avro
- [ ] Protobuf
- [ ] JSON Schema
- [ ] Schema compatibility
- [ ] Backward compatibility
- [ ] Forward compatibility
- [ ] Full compatibility
- [ ] Schema evolution
- [ ] Version management
- [ ] Data contracts
- [ ] Event validation
- [ ] Producer-consumer compatibility
- [ ] Breaking changes


## Phase 9: Kafka Streams and event processing
**Advanced**

KStream/KTable, windows.

- [ ] Stream processing fundamentals
- [ ] Kafka Streams
- [ ] KStream
- [ ] KTable
- [ ] GlobalKTable
- [ ] Stream joins
- [ ] Windowing
- [ ] Tumbling windows
- [ ] Hopping windows
- [ ] Session windows
- [ ] Aggregation
- [ ] Stateful processing
- [ ] Stateless processing
- [ ] Event time
- [ ] Processing time
- [ ] Watermarks
- [ ] Late-arriving events


## Phase 10: Kafka Connect and integrations
**Advanced**

CDC, Debezium.

- [ ] Kafka Connect
- [ ] Source connectors
- [ ] Sink connectors
- [ ] Connector workers
- [ ] Standalone mode
- [ ] Distributed mode
- [ ] Connector configuration
- [ ] Database connectors
- [ ] PostgreSQL integration
- [ ] MongoDB integration
- [ ] Elasticsearch integration
- [ ] Cloud Storage integrations
- [ ] Change Data Capture
- [ ] Debezium
- [ ] CDC event processing


## Phase 11: Kafka security
**Critical**

SASL, TLS, ACLs.

- [ ] Authentication
- [ ] SASL
- [ ] SASL/PLAIN
- [ ] SASL/SCRAM
- [ ] SASL/OAUTHBEARER
- [ ] TLS
- [ ] SSL certificates
- [ ] Authorization
- [ ] ACLs
- [ ] Broker permissions
- [ ] Topic permissions
- [ ] Consumer group permissions
- [ ] Secret management
- [ ] Data encryption
- [ ] Audit logging
- [ ] Multi-tenant isolation


## Phase 12: Kafka performance optimization
**Production**

Throughput vs latency.

- [ ] Throughput optimization
- [ ] Latency optimization
- [ ] Batch size tuning
- [ ] Compression tuning
- [ ] Producer buffer tuning
- [ ] Consumer fetch tuning
- [ ] Partition optimization
- [ ] Consumer concurrency
- [ ] Disk throughput
- [ ] Network throughput
- [ ] Replication performance
- [ ] Consumer lag reduction
- [ ] Backpressure
- [ ] Load testing
- [ ] Capacity planning


## Phase 13: Kafka monitoring and observability
**Production**

Lag, under-replicated partitions.

- [ ] Broker metrics
- [ ] Producer metrics
- [ ] Consumer metrics
- [ ] Consumer lag
- [ ] Partition health
- [ ] Replication health
- [ ] Under-replicated partitions
- [ ] Offline partitions
- [ ] Request latency
- [ ] Throughput
- [ ] Disk utilization
- [ ] Network utilization
- [ ] JMX metrics
- [ ] Prometheus
- [ ] Grafana
- [ ] OpenTelemetry
- [ ] Alerting
- [ ] Distributed tracing


## Phase 14: Kafka reliability and disaster recovery
**Expert**

Multi-cluster, RPO/RTO.

- [ ] Broker failure
- [ ] Consumer failure
- [ ] Producer failure
- [ ] Leader election
- [ ] Replication recovery
- [ ] Consumer rebalancing
- [ ] Offset recovery
- [ ] Data loss scenarios
- [ ] Duplicate event scenarios
- [ ] Cluster recovery
- [ ] Multi-cluster architecture
- [ ] Cluster linking / replication options
- [ ] Backup strategy
- [ ] Disaster recovery
- [ ] Recovery point objective
- [ ] Recovery time objective


## Phase 15: Kafka and distributed architecture patterns
**Expert**

Outbox, saga, event sourcing.

- [ ] Event-driven architecture
- [ ] Event notification pattern
- [ ] Event-carried state transfer
- [ ] Event sourcing
- [ ] CQRS
- [ ] Transactional outbox
- [ ] Saga pattern
- [ ] Choreography
- [ ] Orchestration
- [ ] CDC architecture
- [ ] Microservice communication
- [ ] Event replay
- [ ] Event versioning
- [ ] Exactly-once processing limitations
- [ ] Idempotent event consumers


## Phase 16: Enterprise Kafka engineering
**Expert**

Managed Kafka, Flink, governance.

- [ ] Kafka with Docker
- [ ] Kafka with Kubernetes
- [ ] Managed Kafka services
- [ ] Azure Event Hubs with Kafka compatibility
- [ ] Google Cloud Managed Service for Apache Kafka
- [ ] Kafka multi-region architecture
- [ ] Kafka cluster sizing
- [ ] Large-scale ingestion
- [ ] Data pipeline architecture
- [ ] Real-time analytics
- [ ] Kafka with Spark
- [ ] Kafka with Flink
- [ ] Kafka with databases
- [ ] Production incident response
- [ ] Kafka upgrade strategy
- [ ] Rolling deployments
- [ ] Enterprise data governance
- [ ] Compliance and audit
- [ ] Cost optimization
- [ ] Production architecture design

