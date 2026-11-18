# MongoDB Mastery

**Document modeling, aggregation, async Python, Atlas Vector Search**

---

## Phase 1: MongoDB fundamentals
**Foundation**

DB, collection, document, BSON.

- [ ] What is MongoDB?
- [ ] SQL vs NoSQL
- [ ] Relational vs document databases
- [ ] MongoDB architecture
- [ ] Database
- [ ] Collection
- [ ] Document
- [ ] BSON
- [ ] JSON vs BSON
- [ ] _id and ObjectId
- [ ] MongoDB server
- [ ] MongoDB Shell
- [ ] MongoDB Compass
- [ ] MongoDB Atlas
- [ ] Local MongoDB installation
- [ ] MongoDB connection URI
- [ ] MongoDB database creation
- [ ] Collection creation
- [ ] Document creation
- [ ] MongoDB CRUD fundamentals

## Phase 2: CRUD operations
**Core**

insert/find/update/delete.

- [ ] insertOne()
- [ ] insertMany()
- [ ] find()
- [ ] findOne()
- [ ] updateOne()
- [ ] updateMany()
- [ ] replaceOne()
- [ ] deleteOne()
- [ ] deleteMany()
- [ ] findOneAndUpdate()
- [ ] findOneAndDelete()
- [ ] upsert
- [ ] Projection
- [ ] Filtering
- [ ] Sorting
- [ ] Pagination
- [ ] Limit and skip
- [ ] Bulk write operations
- [ ] Return document before/after update
- [ ] CRUD error handling

## Phase 3: MongoDB query operators
**Core**

Comparison, logical, array, update.

- [ ] Comparison operators: $eq, $ne, $gt, $gte, $lt, $lte
- [ ] Logical operators: $and, $or, $not, $nor
- [ ] Element operators: $exists, $type
- [ ] Evaluation operators: $regex, $expr, $mod
- [ ] Array operators: $in, $nin, $all, $elemMatch, $size
- [ ] Update operators: $set, $unset, $inc, $mul
- [ ] Array updates: $push, $pull, $addToSet, $pop
- [ ] $rename
- [ ] $currentDate
- [ ] Positional update operators
- [ ] Nested document filtering
- [ ] Array of embedded documents
- [ ] Complex filter construction

## Phase 4: MongoDB data modeling
**Critical**

Embed vs reference, multi-tenant.

- [ ] Document schema design
- [ ] Embedded documents
- [ ] Referenced documents
- [ ] Embedding vs referencing
- [ ] One-to-one modeling
- [ ] One-to-many modeling
- [ ] Many-to-many modeling
- [ ] Parent-child relationships
- [ ] Denormalization
- [ ] Data duplication trade-offs
- [ ] Schema flexibility
- [ ] Schema versioning
- [ ] Polymorphic document models
- [ ] Multi-tenant document design
- [ ] Designing for query patterns

## Phase 5: Aggregation framework
**Core**

Pipeline stages.

- [ ] Aggregation fundamentals
- [ ] Aggregation pipeline
- [ ] $match
- [ ] $project
- [ ] $group
- [ ] $sort
- [ ] $limit
- [ ] $skip
- [ ] $unwind
- [ ] $lookup
- [ ] $addFields
- [ ] $set
- [ ] $unset
- [ ] $count
- [ ] $facet
- [ ] $bucket
- [ ] $bucketAuto
- [ ] $replaceRoot
- [ ] $merge
- [ ] $out
- [ ] Pipeline optimization
- [ ] Aggregation with nested documents
- [ ] Aggregation with arrays

## Phase 6: Indexing and query optimization
**Production**

ESR, explain, covered queries.

- [ ] What is an index?
- [ ] Single-field index
- [ ] Compound index
- [ ] Multikey index
- [ ] Unique index
- [ ] Sparse index
- [ ] Partial index
- [ ] TTL index
- [ ] Text index
- [ ] Geospatial index
- [ ] Wildcard index
- [ ] Index ordering
- [ ] Compound index prefixes
- [ ] ESR rule
- [ ] Index selectivity
- [ ] Covered queries
- [ ] Explain plans
- [ ] executionStats
- [ ] Slow query analysis
- [ ] Index maintenance
- [ ] Index size and memory

## Phase 7: Transactions and consistency
**Critical**

Multi-doc txns, write concern.

- [ ] Atomic operations
- [ ] Single-document atomicity
- [ ] Multi-document transactions
- [ ] Sessions
- [ ] Transaction lifecycle
- [ ] Commit
- [ ] Abort
- [ ] Read concern
- [ ] Write concern
- [ ] Read preference
- [ ] Snapshot isolation concepts
- [ ] Retryable writes
- [ ] Transaction retry
- [ ] Optimistic concurrency
- [ ] Idempotency
- [ ] Consistency considerations

## Phase 8: Python integration with PyMongo
**Engineering**

CRUD, pooling.

- [ ] PyMongo installation
- [ ] MongoClient
- [ ] Connection URI
- [ ] Database access
- [ ] Collection access
- [ ] CRUD with Python
- [ ] BSON and ObjectId
- [ ] Python serialization
- [ ] Bulk operations
- [ ] Aggregation using Python
- [ ] Index creation
- [ ] Transactions
- [ ] Connection pooling
- [ ] Error handling
- [ ] Client lifecycle
- [ ] Environment-based configuration

## Phase 9: Async MongoDB with Python
**Critical**

PyMongo Async API (prefer over Motor for new apps).

- [ ] Async MongoDB fundamentals
- [ ] Async client architecture
- [ ] PyMongo Async API
- [ ] AsyncMongoClient
- [ ] Async database access
- [ ] Async collection access
- [ ] Async CRUD
- [ ] Async cursors
- [ ] Async aggregation
- [ ] Async bulk operations
- [ ] Async transactions
- [ ] Async connection pooling
- [ ] Async context management
- [ ] Timeouts
- [ ] Connection lifecycle
- [ ] FastAPI integration
- [ ] Avoiding blocking database calls
- [ ] Async error handling

> **Must understand:** For new Python applications, learn the current PyMongo Async API rather than starting with legacy Motor. Understand Motor because you may encounter it in existing systems.

## Phase 10: MongoDB advanced features
**Advanced**

Change streams, Atlas Search/Vector.

- [ ] Change streams
- [ ] Watch collections
- [ ] Watch databases
- [ ] Resume tokens
- [ ] Change stream filtering
- [ ] GridFS
- [ ] Time-series collections
- [ ] Capped collections
- [ ] Schema validation
- [ ] JSON Schema validation
- [ ] Views
- [ ] Materialized-view patterns
- [ ] Search indexes
- [ ] Atlas Search
- [ ] Atlas Vector Search
- [ ] Search and vector retrieval

## Phase 11: Replication and high availability
**Production**

Replica sets, failover.

- [ ] Replica sets
- [ ] Primary node
- [ ] Secondary nodes
- [ ] Arbiter concepts
- [ ] Replication process
- [ ] Oplog
- [ ] Election
- [ ] Failover
- [ ] Replication lag
- [ ] Read preference
- [ ] Write concern
- [ ] Majority acknowledgment
- [ ] Heartbeats
- [ ] Recovery after node failure
- [ ] Replica set monitoring

## Phase 12: Sharding and scaling
**Advanced**

Shard keys, balancer.

- [ ] Sharding fundamentals
- [ ] Shard
- [ ] Config servers
- [ ] Mongos router
- [ ] Shard key
- [ ] Hashed sharding
- [ ] Ranged sharding
- [ ] Compound shard keys
- [ ] Chunk distribution
- [ ] Balancer
- [ ] Hot shards
- [ ] Shard key selection
- [ ] Horizontal scaling
- [ ] Query targeting
- [ ] Cross-shard queries
- [ ] Sharding limitations

## Phase 13: MongoDB security
**Critical**

RBAC, encryption, isolation.

- [ ] Authentication
- [ ] Authorization
- [ ] Role-based access control
- [ ] Custom roles
- [ ] Database users
- [ ] Collection-level permissions
- [ ] TLS
- [ ] Network access control
- [ ] IP allowlists
- [ ] Private networking
- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] Client-side field-level encryption
- [ ] Secret management
- [ ] Audit logs
- [ ] PII protection
- [ ] Multi-tenant isolation

## Phase 14: Backup and recovery
**Production**

mongodump, Atlas PITR.

- [ ] Logical backup
- [ ] Physical backup concepts
- [ ] mongodump
- [ ] mongorestore
- [ ] Atlas backups
- [ ] Point-in-time recovery
- [ ] Backup scheduling
- [ ] Restore testing
- [ ] Recovery verification
- [ ] Data migration
- [ ] Database export
- [ ] Database import
- [ ] Disaster recovery

## Phase 15: MongoDB production performance
**Production**

Profiling, 16MB limit, capacity.

- [ ] Query profiling
- [ ] Index optimization
- [ ] Connection pool tuning
- [ ] Connection exhaustion
- [ ] Slow queries
- [ ] Large document problems
- [ ] 16 MB document limit
- [ ] Pagination optimization
- [ ] Cursor management
- [ ] Batch writes
- [ ] Aggregation optimization
- [ ] Memory usage
- [ ] Working set
- [ ] Read/write scaling
- [ ] Capacity planning

## Phase 16: MongoDB for AI applications
**AI**

Chat, agent state, Atlas Vector.

- [ ] Store chat conversations
- [ ] Store conversation history
- [ ] Store user sessions
- [ ] Store document metadata
- [ ] Store RAG source references
- [ ] Store ingestion status
- [ ] Store agent memory
- [ ] Store agent execution state
- [ ] Store tool execution logs
- [ ] Store evaluation datasets
- [ ] Store feedback
- [ ] Store model metadata
- [ ] Store prompt versions
- [ ] Atlas Vector Search
- [ ] Semantic retrieval
- [ ] Hybrid retrieval
- [ ] Vector metadata filtering

## Phase 17: Enterprise MongoDB engineering
**Expert**

K8s, multi-region, governance.

- [ ] MongoDB in Docker
- [ ] MongoDB in Kubernetes
- [ ] MongoDB Atlas architecture
- [ ] Atlas monitoring
- [ ] Prometheus integration
- [ ] OpenTelemetry instrumentation
- [ ] Database migration strategies
- [ ] Schema evolution
- [ ] Multi-region deployment
- [ ] High availability
- [ ] Multi-tenant architecture
- [ ] Data retention and deletion
- [ ] Data governance
- [ ] Production incident response
- [ ] Cost optimization
