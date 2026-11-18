# Redis Mastery

**Caching, sessions, locks, Pub/Sub, Streams, HA**

---

## Phase 1: Redis fundamentals
**Foundation**

In-memory DB concepts, TTL.

- [ ] What is Redis?
- [ ] In-memory database concepts
- [ ] Redis vs SQL database
- [ ] Redis vs MongoDB
- [ ] Redis vs Memcached
- [ ] Redis architecture
- [ ] Redis server
- [ ] Redis client
- [ ] Redis CLI
- [ ] Redis connection
- [ ] Redis configuration
- [ ] Redis databases
- [ ] Redis key naming
- [ ] Key expiration
- [ ] TTL
- [ ] Persistence concepts


## Phase 2: Redis data structures
**Core**

Strings, hashes, sets, streams, etc.

- [ ] Strings
- [ ] Lists
- [ ] Sets
- [ ] Sorted sets
- [ ] Hashes
- [ ] Bitmaps
- [ ] Bitfields
- [ ] HyperLogLog
- [ ] Streams
- [ ] Geospatial indexes
- [ ] JSON data types where available
- [ ] Key scanning
- [ ] Data structure selection
- [ ] Memory complexity
- [ ] Time complexity


## Phase 3: Redis commands and operations
**Core**

GET/SET, pipelines, Lua.

- [ ] GET and SET
- [ ] MGET and MSET
- [ ] INCR and DECR
- [ ] EXPIRE and TTL
- [ ] DEL and UNLINK
- [ ] HSET and HGET
- [ ] LPUSH and RPUSH
- [ ] LPOP and RPOP
- [ ] SADD and SMEMBERS
- [ ] ZADD and ZRANGE
- [ ] SCAN
- [ ] Pipeline
- [ ] Transactions
- [ ] MULTI and EXEC
- [ ] WATCH
- [ ] Lua scripting
- [ ] Atomic operations


## Phase 4: Redis caching
**Critical**

Cache-aside, stampede, eviction.

- [ ] What is caching?
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through
- [ ] Write-behind
- [ ] Cache invalidation
- [ ] TTL strategies
- [ ] Cache warming
- [ ] Cache stampede
- [ ] Cache penetration
- [ ] Cache avalanche
- [ ] Negative caching
- [ ] Stale-while-revalidate
- [ ] Local cache vs distributed cache
- [ ] Cache hit ratio
- [ ] Cache miss ratio
- [ ] Cache eviction policies


## Phase 5: Redis and Python
**Engineering**

redis-py sync/async.

- [ ] redis-py
- [ ] Redis connection
- [ ] Connection pooling
- [ ] Sync Redis client
- [ ] Async Redis client
- [ ] Redis commands in Python
- [ ] Serialization
- [ ] JSON serialization
- [ ] Error handling
- [ ] Redis pipelines
- [ ] Redis transactions
- [ ] Lua scripts
- [ ] Connection lifecycle
- [ ] Health checks


## Phase 6: FastAPI and Redis integration
**Production**

Sessions, rate limits, semantic cache.

- [ ] API response caching
- [ ] Dependency caching
- [ ] Session management
- [ ] User session storage
- [ ] JWT denylist
- [ ] Rate limiting
- [ ] Distributed rate limiting
- [ ] API request counting
- [ ] Idempotency keys
- [ ] Distributed locks
- [ ] WebSocket connection tracking
- [ ] Pub/Sub notifications
- [ ] Chat history caching
- [ ] RAG result caching
- [ ] Semantic caching
- [ ] Agent state caching


## Phase 7: Redis Pub/Sub
**Core**

Channels, limitations.

- [ ] Publish and subscribe
- [ ] Channels
- [ ] Subscribers
- [ ] Pattern subscriptions
- [ ] Message delivery
- [ ] Multiple subscribers
- [ ] Real-time notifications
- [ ] Chat applications
- [ ] WebSocket broadcasting
- [ ] Pub/Sub limitations
- [ ] Message loss considerations
- [ ] When not to use Pub/Sub


## Phase 8: Redis Streams
**Advanced**

Consumer groups, XACK.

- [ ] Stream fundamentals
- [ ] XADD
- [ ] XREAD
- [ ] XREADGROUP
- [ ] Consumer groups
- [ ] Consumer names
- [ ] Pending entries
- [ ] XACK
- [ ] XPENDING
- [ ] XCLAIM
- [ ] Message acknowledgment
- [ ] Consumer recovery
- [ ] Stream trimming
- [ ] Event processing
- [ ] Redis Streams vs Kafka


## Phase 9: Redis distributed coordination
**Critical**

Locks, rate limiters.

- [ ] Distributed locks
- [ ] Lock expiration
- [ ] Lock ownership
- [ ] Atomic lock acquisition
- [ ] Lock release safety
- [ ] Lease-based coordination
- [ ] Leader election concepts
- [ ] Idempotency storage
- [ ] Distributed counters
- [ ] Rate limiter algorithms
- [ ] Token bucket
- [ ] Sliding window
- [ ] Fixed window
- [ ] Concurrency limiting


## Phase 10: Redis persistence and recovery
**Production**

RDB/AOF, Sentinel, Cluster.

- [ ] RDB snapshots
- [ ] AOF
- [ ] RDB vs AOF
- [ ] Persistence configuration
- [ ] Recovery
- [ ] Backup
- [ ] Restore
- [ ] Replication
- [ ] Primary-replica
- [ ] Replication lag
- [ ] Failover
- [ ] Redis Sentinel
- [ ] Redis Cluster
- [ ] Hash slots
- [ ] Sharding
- [ ] High availability


## Phase 11: Redis security
**Critical**

ACL, TLS, isolation.

- [ ] Authentication
- [ ] ACL
- [ ] User permissions
- [ ] TLS
- [ ] Network isolation
- [ ] Protected mode
- [ ] Secret management
- [ ] Command restrictions
- [ ] Data encryption considerations
- [ ] Sensitive data storage
- [ ] Session privacy
- [ ] Secure connection configuration


## Phase 12: Redis performance and memory management
**Production**

Eviction, hot keys, sizing.

- [ ] Memory usage
- [ ] Memory fragmentation
- [ ] Eviction policies
- [ ] maxmemory
- [ ] Key expiration
- [ ] Large key problems
- [ ] Hot keys
- [ ] Big key detection
- [ ] Slow log
- [ ] Latency monitoring
- [ ] Connection limits
- [ ] Pipeline optimization
- [ ] Network latency
- [ ] Memory sizing
- [ ] Performance benchmarking


## Phase 13: Production Redis engineering
**Expert**

Managed Redis, AI state, capacity.

- [ ] Redis in Docker
- [ ] Redis in Kubernetes
- [ ] Managed Redis services
- [ ] Azure Managed Redis
- [ ] Google Cloud Memorystore
- [ ] Redis monitoring
- [ ] Prometheus and Grafana
- [ ] Backup automation
- [ ] Failover testing
- [ ] Disaster recovery
- [ ] Redis cost optimization
- [ ] Multi-tenant key isolation
- [ ] Production incident troubleshooting
- [ ] Redis for AI applications
- [ ] Redis for distributed agent state
- [ ] Redis vector search concepts
- [ ] Semantic cache architecture
- [ ] Production capacity planning

