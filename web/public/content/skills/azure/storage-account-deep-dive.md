# Azure Storage Account Deep Dive

**Storage accounts, Blob, ADLS Gen2, Files, Queue/Table, redundancy**

---

## Phase: Storage account fundamentals
**Critical**

Namespace and configuration boundary for Azure storage services.

- [ ] What is a Storage Account?
- [ ] Storage account name and endpoint
- [ ] Storage account creation
- [ ] Resource group and region association
- [ ] Storage account types
- [ ] General-purpose v2 (GPv2)
- [ ] Premium storage accounts
- [ ] Storage account performance tiers
- [ ] Standard vs Premium
- [ ] Storage account access tiers
- [ ] Storage account limits and quotas
- [ ] Storage account redundancy
- [ ] Storage account keys
- [ ] Connection strings
- [ ] Shared Key authorization
- [ ] Microsoft Entra authorization
- [ ] Storage account firewall
- [ ] Public network access
- [ ] Private endpoints
- [ ] Shared access signatures (SAS)
- [ ] Account-level SAS
- [ ] Service-level SAS
- [ ] User delegation SAS
- [ ] SAS expiration policies
- [ ] Storage encryption
- [ ] Customer-managed keys
- [ ] Infrastructure encryption
- [ ] Secure transfer required
- [ ] Minimum TLS version
- [ ] Soft delete
- [ ] Versioning
- [ ] Change feed
- [ ] Immutability policies
- [ ] Lifecycle management
- [ ] Diagnostic settings
- [ ] Storage metrics
- [ ] Storage logging

## Phase: Blob Storage — complete coverage
**Critical**

Object storage for PDFs, images, logs, and AI datasets.

- [ ] Containers
- [ ] Blobs
- [ ] Blob names
- [ ] Virtual directories
- [ ] Blob metadata
- [ ] Blob index tags
- [ ] Blob properties
- [ ] Blob URI
- [ ] Blob endpoints
- [ ] Block blobs
- [ ] Append blobs
- [ ] Page blobs
- [ ] Block IDs
- [ ] Blocks and block lists
- [ ] Blob snapshots
- [ ] Blob versions
- [ ] Blob leases
- [ ] Blob copy operations
- [ ] Blob metadata vs index tags
- [ ] Hot
- [ ] Cool
- [ ] Cold
- [ ] Archive
- [ ] Rehydration
- [ ] Early deletion charges
- [ ] Access-tier selection
- [ ] Lifecycle policies
- [ ] Automatic tier movement
- [ ] Single upload
- [ ] Block upload
- [ ] Multipart upload concepts
- [ ] Chunked uploads
- [ ] Resumable uploads
- [ ] Parallel uploads
- [ ] Download streaming
- [ ] Range downloads
- [ ] Upload progress
- [ ] Retry and recovery
- [ ] Large file handling
- [ ] Browser-based direct upload using SAS
- [ ] Azure Storage SDK
- [ ] Container public access
- [ ] Private containers
- [ ] Entra authentication
- [ ] Managed identity for Blob
- [ ] RBAC for Blob
- [ ] SAS tokens
- [ ] Stored access policies
- [ ] Encryption
- [ ] Private endpoints for Blob
- [ ] Firewall rules
- [ ] Defender for Storage
- [ ] Malware scanning integrations
- [ ] Blob versioning
- [ ] Soft delete for blobs
- [ ] Point-in-time recovery
- [ ] Snapshots
- [ ] Change feed
- [ ] Event Grid integration
- [ ] Immutable storage
- [ ] Legal holds
- [ ] Time-based retention
- [ ] Object replication
- [ ] Lifecycle management
- [ ] Static website hosting
- [ ] CORS
- [ ] SFTP support
- [ ] Hierarchical namespace integration
- [ ] Create/delete containers
- [ ] Upload/download blobs
- [ ] Stream large files
- [ ] Generate SAS URLs
- [ ] List blobs
- [ ] Search by prefix
- [ ] Read and update metadata
- [ ] Copy blobs
- [ ] Delete blobs
- [ ] Restore previous versions
- [ ] Set access tiers
- [ ] Manage snapshots
- [ ] Implement resumable upload workflows
- [ ] Use DefaultAzureCredential with BlobServiceClient

## Phase: Azure Data Lake Storage Gen2
**Critical**

Especially important for AI, ML, and big data engineering.

- [ ] Data Lake vs Blob Storage
- [ ] Hierarchical namespace
- [ ] Filesystem
- [ ] Directories
- [ ] Files
- [ ] Directory-level permissions
- [ ] POSIX-style ACLs
- [ ] RBAC vs ACL
- [ ] Recursive permissions
- [ ] Default ACLs
- [ ] ACL inheritance
- [ ] Rename and move operations
- [ ] Big data analytics
- [ ] Spark integration
- [ ] Databricks integration
- [ ] Synapse integration
- [ ] Data ingestion
- [ ] Partitioned datasets
- [ ] Delta Lake integration
- [ ] Data lake zones: raw, bronze, silver, gold
- [ ] Large-scale AI training data storage

## Phase: Azure Files
**High**

SMB/NFS shares and File Sync.

- [ ] File shares
- [ ] Directories and files
- [ ] SMB protocol
- [ ] NFS support and supported configurations
- [ ] Azure Files vs Blob Storage
- [ ] File share quotas
- [ ] Provisioned vs pay-as-you-go models
- [ ] Snapshots
- [ ] Soft delete
- [ ] Backup
- [ ] Identity-based authentication
- [ ] Active Directory integration
- [ ] Private endpoints
- [ ] File synchronization
- [ ] Azure File Sync
- [ ] Mounting on Windows and Linux
- [ ] Shared application files

## Phase: Queue Storage and Table Storage
**High**

Simple queues and NoSQL table patterns.

- [ ] Queues and messages
- [ ] Message encoding
- [ ] Message visibility timeout
- [ ] Dequeue count
- [ ] Message TTL
- [ ] Poison message handling
- [ ] Polling
- [ ] At-least-once processing implications
- [ ] Duplicate handling
- [ ] Queue-based background processing
- [ ] Tables and entities
- [ ] Partition keys
- [ ] Row keys
- [ ] Properties
- [ ] Entity group transactions
- [ ] Query filters
- [ ] Upsert
- [ ] Batch operations
- [ ] Partition design
- [ ] Hot partitions
- [ ] Table Storage vs Cosmos DB Table API

## Phase: Storage redundancy and disaster recovery
**Critical**

- [ ] Primary and secondary regions
- [ ] Synchronous vs asynchronous replication
- [ ] Regional outages
- [ ] Account failover
- [ ] Customer-managed failover
- [ ] Read access to secondary replicas
- [ ] RPO and RTO
- [ ] Backup vs replication
- [ ] Recovery planning
- [ ] Cost and availability trade-offs
- [ ] Build document ingestion for 5 GB PDFs with chunked resume, Blob, events, and Azure AI Search
