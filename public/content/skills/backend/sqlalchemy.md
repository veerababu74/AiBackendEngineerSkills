# SQLAlchemy Mastery

**ORM, async sessions, transactions, migrations, performance**

---

## Phase 1: SQL and relational database fundamentals
**Foundation**

SQL, joins, ACID, normalization.

- [ ] Relational database concepts
- [ ] Tables, rows and columns
- [ ] Primary keys
- [ ] Foreign keys
- [ ] Constraints
- [ ] Data types
- [ ] SQL SELECT
- [ ] INSERT
- [ ] UPDATE
- [ ] DELETE
- [ ] WHERE
- [ ] ORDER BY
- [ ] GROUP BY
- [ ] HAVING
- [ ] JOINs
- [ ] Subqueries
- [ ] CTEs
- [ ] Window functions
- [ ] Indexes
- [ ] Transactions
- [ ] ACID properties
- [ ] Normalization
- [ ] Denormalization

## Phase 2: SQLAlchemy fundamentals
**Foundation**

Engine, Session, declarative models.

- [ ] What is SQLAlchemy?
- [ ] ORM vs Core
- [ ] SQLAlchemy architecture
- [ ] Engine
- [ ] Connection
- [ ] Session
- [ ] Declarative Base
- [ ] Declarative models
- [ ] Metadata
- [ ] Table creation
- [ ] Column definitions
- [ ] Primary key
- [ ] Foreign key
- [ ] Unique constraints
- [ ] Check constraints
- [ ] Index definitions
- [ ] Database URL
- [ ] Engine configuration
- [ ] Session factory
- [ ] Session lifecycle

## Phase 3: ORM operations
**Core**

CRUD, select(), scalars().

- [ ] Create records
- [ ] Read records
- [ ] Update records
- [ ] Delete records
- [ ] Bulk insert
- [ ] Bulk update
- [ ] Bulk delete
- [ ] Filtering
- [ ] Sorting
- [ ] Pagination
- [ ] Aggregations
- [ ] Grouping
- [ ] Distinct
- [ ] Joins
- [ ] Subqueries
- [ ] Raw SQL
- [ ] ORM query expressions
- [ ] SQLAlchemy 2.x select()
- [ ] scalars()
- [ ] execute()

## Phase 4: Relationships
**Core**

1:1, 1:N, M:N, cascades.

- [ ] One-to-one
- [ ] One-to-many
- [ ] Many-to-one
- [ ] Many-to-many
- [ ] relationship()
- [ ] ForeignKey
- [ ] back_populates
- [ ] Association tables
- [ ] Association objects
- [ ] Cascades
- [ ] Delete cascade
- [ ] Orphan handling
- [ ] Self-referential relationships
- [ ] Polymorphic relationships
- [ ] Relationship loading strategies

## Phase 5: Advanced ORM loading
**Performance**

Eager/lazy, N+1.

- [ ] Lazy loading
- [ ] Eager loading
- [ ] joinedload()
- [ ] selectinload()
- [ ] subqueryload()
- [ ] contains_eager()
- [ ] N+1 query problem
- [ ] Query count optimization
- [ ] Deferred columns
- [ ] Load only selected fields
- [ ] Relationship performance
- [ ] Avoiding over-fetching

## Phase 6: Transactions and concurrency
**Critical**

Isolation, locks, retries.

- [ ] Session transaction
- [ ] commit()
- [ ] rollback()
- [ ] flush()
- [ ] Savepoints
- [ ] Nested transactions
- [ ] Isolation levels
- [ ] Dirty reads
- [ ] Non-repeatable reads
- [ ] Phantom reads
- [ ] Optimistic locking
- [ ] Pessimistic locking
- [ ] Row-level locks
- [ ] Deadlocks
- [ ] Transaction retry
- [ ] Idempotency
- [ ] Concurrent database updates

## Phase 7: Async SQLAlchemy
**Critical**

AsyncEngine, AsyncSession.

- [ ] AsyncEngine
- [ ] AsyncSession
- [ ] create_async_engine()
- [ ] async_sessionmaker
- [ ] async with
- [ ] Async database connection
- [ ] Async query execution
- [ ] Async CRUD
- [ ] Async relationships
- [ ] Async eager loading
- [ ] Async transaction
- [ ] Async connection pooling
- [ ] Session-per-request
- [ ] Avoiding concurrent use of one AsyncSession
- [ ] Async PostgreSQL drivers
- [ ] Async MySQL drivers
- [ ] Async error handling

## Phase 8: Connection pooling and performance
**Production**

Pool sizing, indexes, replicas.

- [ ] Connection pooling fundamentals
- [ ] Pool size
- [ ] Max overflow
- [ ] Pool timeout
- [ ] Pool recycle
- [ ] Pool pre-ping
- [ ] Connection exhaustion
- [ ] Database connection leaks
- [ ] Slow query analysis
- [ ] Query execution plans
- [ ] Index optimization
- [ ] Composite indexes
- [ ] Covering indexes
- [ ] Bulk operations
- [ ] Batch processing
- [ ] Database profiling
- [ ] Read replicas
- [ ] Database scaling

## Phase 9: Alembic and database migrations
**Production**

Autogenerate, zero-downtime.

- [ ] What is Alembic?
- [ ] Migration configuration
- [ ] Initial migration
- [ ] Autogenerate
- [ ] Upgrade
- [ ] Downgrade
- [ ] Migration history
- [ ] Schema changes
- [ ] Data migrations
- [ ] Index migrations
- [ ] Foreign key migrations
- [ ] Zero-downtime migrations
- [ ] Backward-compatible migrations
- [ ] Migration rollback
- [ ] Production migration strategy

## Phase 10: Advanced SQLAlchemy
**Expert**

Multi-tenant, outbox, sharding concepts.

- [ ] Repository pattern
- [ ] Unit of Work
- [ ] Service layer integration
- [ ] Multi-tenant database architecture
- [ ] Row-level security
- [ ] Database auditing
- [ ] Soft deletion
- [ ] SQLAlchemy events
- [ ] ORM hooks
- [ ] Custom types
- [ ] Hybrid properties
- [ ] Association proxies
- [ ] Polymorphic inheritance
- [ ] PostgreSQL JSONB
- [ ] PostgreSQL arrays
- [ ] Full-text search
- [ ] Database partitioning
- [ ] Database sharding concepts
- [ ] CQRS integration
- [ ] Transactional outbox
- [ ] Database testing
- [ ] Production debugging
- [ ] Backup and recovery
- [ ] Database observability
- [ ] High-availability database design
