# Complete Azure Cloud Roadmap for AI Engineers and Backend Engineers

**Goal:** Design, develop, deploy, secure, scale, and monitor enterprise Python and AI applications on Azure — not just service names, but features, configuration, integrations, internals, limits, security, and production scenarios.

Focus depth on **Storage Accounts**, **Microsoft Entra ID**, subscriptions/resource groups, **Azure Functions**, serverless, **App Services**, VMs, **Key Vault**, and the wider Azure ecosystem used by AI and backend engineers.

---

## Phase 1: Cloud computing fundamentals
**Critical**

How Azure differs from AWS and Google Cloud at the architecture level.

- [ ] What is cloud computing?
- [ ] On-premises vs cloud vs hybrid cloud
- [ ] IaaS, PaaS, SaaS and FaaS
- [ ] Public, private and hybrid cloud
- [ ] Serverless computing
- [ ] Consumption-based pricing
- [ ] Pay-as-you-go
- [ ] High availability and fault tolerance
- [ ] Scalability and elasticity
- [ ] Vertical vs horizontal scaling
- [ ] Regions and availability zones
- [ ] Disaster recovery and business continuity
- [ ] Shared responsibility model
- [ ] Azure Well-Architected Framework
- [ ] Azure vs AWS vs Google Cloud architecture differences

## Phase 2: Azure global infrastructure
**Critical**

Regions, zones, SLAs, and multi-region design.

- [ ] Azure global infrastructure
- [ ] Geographies
- [ ] Regions
- [ ] Region pairs
- [ ] Availability zones
- [ ] Datacenters
- [ ] Availability sets
- [ ] Fault domains
- [ ] Update domains
- [ ] Edge locations
- [ ] Azure sovereign clouds
- [ ] Resource availability by region
- [ ] Regional vs zonal services
- [ ] Data residency
- [ ] Cross-region replication
- [ ] Azure service-level agreements (SLAs)
- [ ] Deploy an application in Central India or South India
- [ ] Deploy a disaster recovery environment in another region
- [ ] Understand what happens when one availability zone fails
- [ ] Design a multi-region AI application

## Phase 3: Azure account hierarchy and resource management
**Critical**

Tenants, management groups, subscriptions, resource groups, ARM.

- [ ] Microsoft Entra tenant
- [ ] Management groups
- [ ] Azure subscriptions
- [ ] Resource groups
- [ ] Individual resources
- [ ] Azure account vs Entra tenant
- [ ] Tenant ID and subscription ID
- [ ] Multiple subscriptions
- [ ] Subscription types
- [ ] Subscription creation and cancellation
- [ ] Subscription billing
- [ ] Subscription quotas and limits
- [ ] Resource providers
- [ ] Resource registration
- [ ] Resource naming conventions
- [ ] Resource tags
- [ ] Resource locks
- [ ] Azure Resource Manager (ARM)
- [ ] ARM templates
- [ ] Bicep
- [ ] Azure Resource Graph
- [ ] Azure Policy
- [ ] Azure Blueprints concepts and current alternatives
- [ ] Azure Portal, CLI and PowerShell
- [ ] Azure Cloud Shell
- [ ] Separate development, testing and production subscriptions
- [ ] Organize resources into resource groups
- [ ] Prevent accidental deletion of production resources
- [ ] Apply mandatory tags across an organization
- [ ] Find all resources deployed in a particular region

---

## Phase 4: Microsoft Entra ID fundamentals
**Critical**

Identity directory building blocks.

- [ ] What is Microsoft Entra ID?
- [ ] Azure AD vs Microsoft Entra ID
- [ ] Tenant architecture
- [ ] Users
- [ ] Groups
- [ ] Guest users
- [ ] External identities
- [ ] Service principals
- [ ] App registrations
- [ ] Enterprise applications
- [ ] Managed identities
- [ ] Workload identities
- [ ] Directory roles
- [ ] Microsoft Entra ID licensing fundamentals

## Phase 5: Authentication and authorization
**Critical**

OAuth2/OIDC, tokens, Conditional Access, FastAPI integration.

- [ ] Authentication vs authorization
- [ ] Identity vs access
- [ ] OAuth 2.0
- [ ] OpenID Connect (OIDC)
- [ ] SAML
- [ ] JWT
- [ ] Access tokens
- [ ] ID tokens
- [ ] Refresh tokens
- [ ] Claims
- [ ] Scopes
- [ ] Consent
- [ ] Authorization code flow
- [ ] Client credentials flow
- [ ] Device code flow
- [ ] On-behalf-of flow
- [ ] Single sign-on (SSO)
- [ ] Multi-factor authentication (MFA)
- [ ] Conditional Access
- [ ] Passwordless authentication
- [ ] Token expiration and renewal
- [ ] Token validation
- [ ] Token audience and issuer
- [ ] Authenticate FastAPI applications using Entra ID
- [ ] Validate JWT access tokens
- [ ] Implement role-based API authorization
- [ ] Connect Python applications to Azure services
- [ ] Secure service-to-service communication

## Phase 6: App registrations and service principals
**Critical**

App registration vs enterprise app vs SP vs managed identity.

| Component | Purpose |
|-----------|---------|
| App registration | Defines an application's identity and configuration |
| Enterprise application | Tenant-local representation of an application/service principal |
| Service principal | Identity used by an application in a tenant |
| Managed identity | Azure-managed identity for an Azure resource |
| User-assigned identity | Reusable managed identity assigned to resources |
| System-assigned identity | Identity tied to an individual Azure resource |

- [ ] Client ID
- [ ] Tenant ID
- [ ] Client secret
- [ ] Certificates
- [ ] Redirect URIs
- [ ] API permissions
- [ ] Application permissions
- [ ] Delegated permissions
- [ ] Admin consent
- [ ] Secret expiration
- [ ] Certificate authentication
- [ ] Service principal creation
- [ ] Enterprise application configuration
- [ ] Federated credentials
- [ ] Workload identity federation

## Phase 7: Managed identities
**Critical**

Credential-free access from App Service to Blob and Key Vault.

- [ ] What is managed identity?
- [ ] System-assigned managed identity
- [ ] User-assigned managed identity
- [ ] Managed identity lifecycle
- [ ] Azure Instance Metadata Service (IMDS)
- [ ] Token acquisition
- [ ] Managed identity endpoints
- [ ] Azure Identity SDK
- [ ] DefaultAzureCredential
- [ ] ChainedTokenCredential
- [ ] Credential selection
- [ ] RBAC assignment
- [ ] Cross-resource authentication
- [ ] Managed identity vs service principal
- [ ] Managed identity troubleshooting
- [ ] Configure App Service MI for Blob Storage and Key Vault without storing credentials

## Phase 8: Azure RBAC and access management
**Critical**

Directory roles ≠ Azure RBAC — they are not interchangeable.

- [ ] Azure RBAC
- [ ] Built-in roles
- [ ] Custom roles
- [ ] Owner
- [ ] Contributor
- [ ] Reader
- [ ] User Access Administrator
- [ ] Role assignment
- [ ] Role definition
- [ ] Security principal
- [ ] Scope
- [ ] Management group scope
- [ ] Subscription scope
- [ ] Resource group scope
- [ ] Resource scope
- [ ] Inherited permissions
- [ ] Least privilege
- [ ] Deny assignments
- [ ] Azure resource locks
- [ ] PIM (Privileged Identity Management)
- [ ] Access reviews
- [ ] Just-in-time access
- [ ] RBAC troubleshooting
- [ ] Entra directory roles vs Azure RBAC distinction

---

## Phase 9: Storage account fundamentals
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

## Phase 10: Blob Storage — complete coverage
**Critical**

Object storage for PDFs, images, logs, and AI datasets.

### Core architecture
- [ ] Containers
- [ ] Blobs
- [ ] Blob names
- [ ] Virtual directories
- [ ] Blob metadata
- [ ] Blob index tags
- [ ] Blob properties
- [ ] Blob URI
- [ ] Blob endpoints

### Blob types
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

### Access tiers
- [ ] Hot
- [ ] Cool
- [ ] Cold
- [ ] Archive
- [ ] Rehydration
- [ ] Early deletion charges
- [ ] Access-tier selection
- [ ] Lifecycle policies
- [ ] Automatic tier movement

### Upload and download
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

### Security
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

### Advanced features
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

### Python SDK (`azure-storage-blob`)
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

## Phase 11: Azure Data Lake Storage Gen2
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

## Phase 12: Azure Files
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

## Phase 13: Queue Storage and Table Storage
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

## Phase 14: Storage redundancy and disaster recovery
**Critical**

| Option | Meaning |
|--------|---------|
| LRS | Locally redundant storage |
| ZRS | Zone-redundant storage |
| GRS | Geo-redundant storage |
| GZRS | Geo-zone-redundant storage |
| RA-GRS | Read-access geo-redundant storage |
| RA-GZRS | Read-access geo-zone-redundant storage |

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

---

## Phase 15: Azure App Service
**Critical**

Primary PaaS host for Python backends and AI APIs.

### Fundamentals
- [ ] App Service
- [ ] Web Apps
- [ ] API Apps
- [ ] App Service Plan
- [ ] App Service Environment
- [ ] Linux vs Windows hosting
- [ ] Python runtime
- [ ] Node.js runtime
- [ ] .NET runtime
- [ ] Custom runtimes
- [ ] Built-in runtime vs custom Docker container

### App Service Plan
- [ ] Free, Shared, Basic, Standard, Premium and Isolated tiers
- [ ] Plan vs Web App
- [ ] CPU and memory allocation
- [ ] Instance count
- [ ] Scaling up
- [ ] Scaling out
- [ ] Autoscale
- [ ] Zone redundancy
- [ ] Plan sharing and cost implications
- [ ] Regional capacity

### Application configuration
- [ ] Application settings
- [ ] Connection strings
- [ ] Environment variables
- [ ] Startup commands
- [ ] Python version
- [ ] Deployment configuration
- [ ] Runtime stack
- [ ] Managed identity
- [ ] Key Vault references
- [ ] Health check
- [ ] Always On
- [ ] HTTPS-only
- [ ] Custom domains
- [ ] TLS certificates

### Deployment
- [ ] ZIP deployment
- [ ] Run From Package
- [ ] GitHub Actions
- [ ] Azure DevOps
- [ ] Local Git
- [ ] FTP deployment and security considerations
- [ ] Container deployment
- [ ] Deployment slots
- [ ] Slot swapping
- [ ] Staging vs production
- [ ] Rollback
- [ ] Continuous deployment
- [ ] Oryx build system
- [ ] Startup and dependency troubleshooting

### Networking
- [ ] Inbound access
- [ ] Access restrictions
- [ ] VNet integration
- [ ] Private endpoints
- [ ] Private DNS
- [ ] Outbound connectivity
- [ ] NAT Gateway integration
- [ ] Hybrid connections
- [ ] Regional VNet integration
- [ ] App Service Environment networking

### Performance and monitoring
- [ ] Application Insights
- [ ] Log stream
- [ ] App Service logs
- [ ] Container logs
- [ ] Metrics
- [ ] CPU and memory monitoring
- [ ] HTTP 5xx errors
- [ ] Request latency
- [ ] Worker process restarts
- [ ] Health probes
- [ ] Auto-heal
- [ ] Autoscale rules
- [ ] Availability tests
- [ ] Kudu / SCM
- [ ] Advanced troubleshooting

### Production scenarios
- [ ] Deploy FastAPI using Gunicorn and Uvicorn workers
- [ ] Run multiple application instances
- [ ] Connect to MongoDB, PostgreSQL and Azure SQL
- [ ] Connect to Azure OpenAI
- [ ] Use Key Vault references
- [ ] Configure private access
- [ ] Configure CI/CD
- [ ] Implement blue-green deployments
- [ ] Troubleshoot memory, startup, networking and timeout failures

## Phase 16: Azure Functions
**Critical**

Event-driven serverless compute for AI pipelines.

### Fundamentals
- [ ] Function App
- [ ] Functions
- [ ] Triggers
- [ ] Bindings
- [ ] Input bindings
- [ ] Output bindings
- [ ] Function execution lifecycle
- [ ] Host runtime
- [ ] host.json
- [ ] function.json where applicable
- [ ] Local development
- [ ] Deployment

### Triggers
- [ ] HTTP trigger
- [ ] Timer trigger
- [ ] Blob trigger
- [ ] Queue Storage trigger
- [ ] Service Bus trigger
- [ ] Event Grid trigger
- [ ] Event Hubs trigger
- [ ] Cosmos DB trigger
- [ ] Durable Functions triggers and orchestration patterns

### Bindings
- [ ] Blob input/output bindings
- [ ] Queue input/output bindings
- [ ] Service Bus bindings
- [ ] Event Hub bindings
- [ ] Cosmos DB bindings
- [ ] HTTP bindings
- [ ] Binding expressions
- [ ] Connection configuration
- [ ] SDK-based integration vs bindings

### Hosting plans
- [ ] Flex Consumption
- [ ] Consumption
- [ ] Premium
- [ ] Dedicated (App Service Plan)
- [ ] Container Apps hosting
- [ ] Scaling behavior
- [ ] Cold starts
- [ ] Always-ready instances
- [ ] Instance limits
- [ ] Execution timeouts
- [ ] Networking support
- [ ] Billing

### Durable Functions
- [ ] Orchestrator functions
- [ ] Activity functions
- [ ] Entity functions
- [ ] Durable timers
- [ ] Fan-out/fan-in
- [ ] Human approval workflows
- [ ] Long-running processes
- [ ] Checkpointing
- [ ] Replay behavior
- [ ] Durable state
- [ ] Retry and compensation patterns

### Advanced and AI use cases
- [ ] Function concurrency
- [ ] Parallel execution
- [ ] Dependency injection
- [ ] Async programming
- [ ] Idempotency
- [ ] Retry policies
- [ ] Poison messages
- [ ] Dead-letter handling
- [ ] Managed identity
- [ ] VNet integration
- [ ] Monitoring
- [ ] Deployment slots where supported
- [ ] CI/CD
- [ ] PDF upload triggers document ingestion
- [ ] Blob event triggers embedding generation
- [ ] Queue-triggered AI processing
- [ ] Scheduled evaluation of RAG answers
- [ ] Event-driven agent workflows
- [ ] Document processing pipelines

## Phase 17: Serverless architecture on Azure
**High**

The full serverless ecosystem beyond Functions.

- [ ] What serverless actually means
- [ ] Event-driven architecture
- [ ] Function-as-a-Service
- [ ] Serverless containers
- [ ] Serverless databases
- [ ] Consumption-based billing
- [ ] Scale to zero
- [ ] Cold starts
- [ ] Warm instances
- [ ] Stateless execution
- [ ] Durable workflows
- [ ] Event-driven communication
- [ ] Retry and dead-letter handling
- [ ] Serverless observability
- [ ] Serverless security
- [ ] Serverless cost optimization
- [ ] Compare Azure Functions
- [ ] Compare Azure Logic Apps
- [ ] Compare Azure Container Apps
- [ ] Compare Azure Durable Functions
- [ ] Compare Azure Event Grid
- [ ] Compare Azure Service Bus
- [ ] Compare Azure API Management

## Phase 18: Azure Virtual Machines
**High**

IaaS for custom runtimes, GPUs, and workers.

- [ ] VM architecture
- [ ] VM sizes and families
- [ ] vCPU and RAM
- [ ] CPU-optimized VMs
- [ ] Memory-optimized VMs
- [ ] GPU VMs
- [ ] General-purpose VMs
- [ ] Windows and Linux VMs
- [ ] Images and custom images
- [ ] Azure Compute Gallery
- [ ] OS disks
- [ ] Data disks
- [ ] Temporary disks
- [ ] Managed disks
- [ ] Disk performance tiers
- [ ] Disk encryption
- [ ] VM networking
- [ ] Public and private IPs
- [ ] Network Security Groups
- [ ] SSH and RDP
- [ ] Azure Bastion
- [ ] Boot diagnostics
- [ ] VM extensions
- [ ] Custom Script Extension
- [ ] VM backup
- [ ] Azure Site Recovery
- [ ] Availability sets
- [ ] Availability zones
- [ ] Virtual Machine Scale Sets
- [ ] VM autoscaling
- [ ] Spot VMs
- [ ] Reserved instances
- [ ] Azure Hybrid Benefit
- [ ] Patch management
- [ ] Update Manager
- [ ] Monitoring
- [ ] Cost optimization
- [ ] Host a custom Python backend
- [ ] Deploy a local open-source LLM
- [ ] Run a GPU-based inference service
- [ ] Install custom system packages
- [ ] Run background workers
- [ ] Deploy Docker applications

## Phase 19: Azure Container Apps
**High**

Serverless containers without managing Kubernetes.

- [ ] Container Apps environment
- [ ] Container Apps
- [ ] Container revisions
- [ ] Revision modes
- [ ] Ingress
- [ ] Internal vs external ingress
- [ ] Dapr integration
- [ ] KEDA-based scaling
- [ ] HTTP scaling
- [ ] Queue-based scaling
- [ ] Scale to zero
- [ ] Jobs
- [ ] Scheduled jobs
- [ ] Event-driven jobs
- [ ] Secrets
- [ ] Managed identities
- [ ] VNet integration
- [ ] Workload profiles
- [ ] Environment variables
- [ ] Custom domains
- [ ] Observability
- [ ] Container Registry integration
- [ ] Deployment and rollback
- [ ] Host FastAPI API, worker containers, and agent services without managing Kubernetes

## Phase 20: Azure Kubernetes Service (AKS)
**Advanced**

Control plane, node pools, GitOps, and multi-cluster DR.

- [ ] Kubernetes fundamentals
- [ ] AKS architecture
- [ ] Control plane and node pools
- [ ] System and user node pools
- [ ] Pods
- [ ] Deployments
- [ ] Services
- [ ] Ingress
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Persistent volumes
- [ ] Horizontal Pod Autoscaler
- [ ] Cluster Autoscaler
- [ ] KEDA
- [ ] Azure Container Registry
- [ ] Workload identity
- [ ] Managed identity
- [ ] Azure CNI
- [ ] Network policies
- [ ] Application Gateway for Containers / ingress options
- [ ] Helm
- [ ] GitOps
- [ ] Azure Monitor
- [ ] Container Insights
- [ ] Logging and tracing
- [ ] Upgrade strategies
- [ ] Availability zones
- [ ] Multi-cluster architecture
- [ ] Disaster recovery
- [ ] Cost optimization

## Phase 21: Azure Container Registry
**High**

Private images, scanning, and geo-replication.

- [ ] Registry
- [ ] Repositories
- [ ] Images
- [ ] Tags
- [ ] Image layers
- [ ] Docker image push/pull
- [ ] Private registry
- [ ] Admin user and why not to rely on it
- [ ] Managed identity authentication
- [ ] RBAC
- [ ] Webhooks
- [ ] Tasks
- [ ] Geo-replication
- [ ] Image scanning
- [ ] Image signing and supply-chain security
- [ ] Retention and cleanup
- [ ] AKS and App Service integration

---

## Phase 22: Azure Key Vault — complete coverage
**Critical**

Secrets, keys, certificates, and Python integration.

### Fundamentals
- [ ] What is Azure Key Vault?
- [ ] Vault architecture
- [ ] Vault URI
- [ ] Vault name
- [ ] Soft delete
- [ ] Purge protection
- [ ] Recovery
- [ ] Access control
- [ ] Key Vault resource types
- [ ] Standard and Premium tiers
- [ ] Regional availability

### Secrets
- [ ] API keys
- [ ] Database passwords
- [ ] Connection strings
- [ ] Client secrets
- [ ] Secret creation
- [ ] Secret retrieval
- [ ] Secret versioning
- [ ] Secret expiration
- [ ] Secret activation and deactivation
- [ ] Secret rotation
- [ ] Secret backup and restore
- [ ] Secret deletion and recovery
- [ ] Key Vault references in App Service

### Cryptographic keys
- [ ] RSA keys
- [ ] Elliptic curve keys
- [ ] Symmetric and asymmetric cryptography concepts
- [ ] Key generation
- [ ] Key import
- [ ] Key rotation
- [ ] Key versioning
- [ ] Key expiration
- [ ] Sign and verify
- [ ] Encrypt and decrypt
- [ ] Wrap and unwrap
- [ ] HSM-backed keys
- [ ] Customer-managed encryption keys

### Certificates
- [ ] Certificate creation
- [ ] Certificate import
- [ ] Certificate authorities
- [ ] Certificate policies
- [ ] Certificate renewal
- [ ] Certificate expiration
- [ ] Certificate rotation
- [ ] Exportable vs non-exportable keys
- [ ] TLS certificate management

### Access and security
- [ ] Azure RBAC authorization
- [ ] Key Vault access policies and legacy access model
- [ ] Managed identity
- [ ] Service principal
- [ ] Entra authentication
- [ ] Least privilege
- [ ] Network ACLs
- [ ] Public access restrictions
- [ ] Private endpoints
- [ ] Private DNS
- [ ] Firewall rules
- [ ] Logging and auditing
- [ ] Diagnostic settings

### Python integration
- [ ] azure-keyvault-secrets
- [ ] azure-keyvault-keys
- [ ] azure-keyvault-certificates
- [ ] azure-identity with SecretClient
- [ ] Avoid printing secret values
- [ ] Prefer managed identity
- [ ] Restrict access by role
- [ ] Rotate credentials
- [ ] Use private connectivity where required
- [ ] Monitor access and unusual activity

## Phase 23: Azure security services
**Critical**

Defender, Sentinel, WAF, and posture management.

- [ ] Microsoft Defender for Cloud
- [ ] Microsoft Defender for Storage
- [ ] Microsoft Defender for Servers
- [ ] Microsoft Defender for Containers
- [ ] Microsoft Defender for SQL
- [ ] Microsoft Sentinel
- [ ] Azure Firewall
- [ ] Azure Web Application Firewall (WAF)
- [ ] Azure DDoS Protection
- [ ] Network Security Groups
- [ ] Application Security Groups
- [ ] Azure Bastion
- [ ] Microsoft Entra Conditional Access
- [ ] Microsoft Entra PIM
- [ ] Azure Policy
- [ ] Microsoft Purview
- [ ] Microsoft Security benchmark
- [ ] Vulnerability management
- [ ] Security posture management
- [ ] Security alerts and incident response

## Phase 24: Azure Policy and governance
**Critical**

Policy effects, initiatives, and enforcement.

- [ ] Policy definitions
- [ ] Policy assignments
- [ ] Policy parameters
- [ ] Policy effects
- [ ] Audit
- [ ] Deny
- [ ] Append
- [ ] Modify
- [ ] DeployIfNotExists
- [ ] AuditIfNotExists
- [ ] Initiative definitions
- [ ] Compliance reporting
- [ ] Remediation tasks
- [ ] Exemptions
- [ ] Management group governance
- [ ] Resource locks
- [ ] Mandatory tagging
- [ ] Region restrictions
- [ ] SKU restrictions
- [ ] Encryption enforcement
- [ ] Private networking enforcement

---

## Phase 25: Azure Virtual Network (VNet)
**Critical**

Address spaces, peering, private endpoints, DNS.

- [ ] What is a VNet?
- [ ] Address spaces
- [ ] CIDR notation
- [ ] Private IP addressing
- [ ] Public IP addressing
- [ ] Subnets
- [ ] Subnet delegation
- [ ] Subnet address planning
- [ ] Route tables
- [ ] User-defined routes
- [ ] Network interfaces
- [ ] VNet peering
- [ ] Global VNet peering
- [ ] VNet service endpoints
- [ ] Private endpoints
- [ ] Private Link
- [ ] DNS resolution
- [ ] Private DNS zones
- [ ] Network isolation
- [ ] Network segmentation

## Phase 26: Network security and connectivity
**Critical**

NSG, Firewall, Front Door, Load Balancer.

- [ ] Network Security Groups
- [ ] Inbound rules
- [ ] Outbound rules
- [ ] Priority
- [ ] Allow and deny rules
- [ ] Stateful filtering
- [ ] Application Security Groups
- [ ] Azure Firewall
- [ ] NAT Gateway
- [ ] DDoS Protection
- [ ] Web Application Firewall
- [ ] Application Gateway
- [ ] Azure Front Door
- [ ] Load Balancer
- [ ] Traffic Manager
- [ ] Private Link Service
- [ ] Service endpoints vs private endpoints
- [ ] VNet integration vs private endpoint
- [ ] Hub-and-spoke networking
- [ ] Network virtual appliances

## Phase 27: Hybrid and private networking
**Critical**

VPN, ExpressRoute, Bastion, private AI backends.

- [ ] Site-to-site VPN
- [ ] Point-to-site VPN
- [ ] VNet-to-VNet VPN
- [ ] ExpressRoute
- [ ] VPN Gateway
- [ ] Azure Bastion
- [ ] DNS forwarding
- [ ] Private DNS resolution
- [ ] Hybrid identity
- [ ] On-premises to Azure connectivity
- [ ] Private service access
- [ ] Egress filtering
- [ ] Firewall routing
- [ ] Network troubleshooting
- [ ] Configure App Service + Storage + Key Vault + Cosmos DB + AI Search with private endpoints, DNS and RBAC

---

## Phase 28: Azure SQL Database
**Critical**

Tiers, HA, Entra auth, SQLAlchemy.

- [ ] SQL Database architecture
- [ ] Single database
- [ ] Elastic pools
- [ ] DTU vs vCore
- [ ] Compute tiers
- [ ] Serverless compute
- [ ] Auto-pause where supported
- [ ] Hyperscale
- [ ] General Purpose
- [ ] Business Critical
- [ ] High availability
- [ ] Geo-replication
- [ ] Failover groups
- [ ] Automated backups
- [ ] Point-in-time restore
- [ ] Long-term retention
- [ ] Private endpoints
- [ ] Entra authentication
- [ ] Managed identity
- [ ] Firewall
- [ ] Auditing
- [ ] Threat detection
- [ ] Query performance
- [ ] Index tuning
- [ ] Connection pooling
- [ ] SQLAlchemy integration

## Phase 29: Azure Database for PostgreSQL
**Critical**

Flexible Server, pgvector, async drivers.

- [ ] Flexible Server
- [ ] PostgreSQL architecture
- [ ] Compute and storage
- [ ] High availability
- [ ] Zone-redundant deployment options
- [ ] Read replicas
- [ ] Backup and restore
- [ ] Point-in-time recovery
- [ ] Private networking
- [ ] Entra authentication
- [ ] Connection pooling
- [ ] PostgreSQL extensions
- [ ] pgvector
- [ ] SQLAlchemy
- [ ] Async PostgreSQL drivers
- [ ] Query optimization
- [ ] Database migrations

## Phase 30: Azure Cosmos DB
**Critical**

Partitions, RU/s, consistency, change feed, vectors.

- [ ] Cosmos DB architecture
- [ ] Accounts
- [ ] Databases
- [ ] Containers
- [ ] Items
- [ ] Partition keys
- [ ] Logical partitions
- [ ] Physical partitions
- [ ] Request Units (RU/s)
- [ ] Provisioned throughput
- [ ] Autoscale throughput
- [ ] Serverless capacity
- [ ] Indexing policies
- [ ] Consistency levels
- [ ] Session consistency
- [ ] Strong consistency
- [ ] Eventual consistency
- [ ] Consistent prefix
- [ ] Bounded staleness
- [ ] Multi-region writes
- [ ] Global distribution
- [ ] Change Feed
- [ ] TTL
- [ ] Transactions
- [ ] Stored procedures
- [ ] Integrated cache
- [ ] Backup and restore
- [ ] Vector search capabilities
- [ ] MongoDB compatibility options and API differences
- [ ] Python SDK integration

## Phase 31: Azure Cache for Redis
**High**

Caching, locks, rate limits, FastAPI integration.

- [ ] Redis architecture
- [ ] Cache instances and tiers
- [ ] Cache-aside pattern
- [ ] Read-through and write-through concepts
- [ ] TTL
- [ ] Eviction policies
- [ ] LRU and LFU
- [ ] Distributed caching
- [ ] Session storage
- [ ] Rate limiting
- [ ] Distributed locks
- [ ] Pub/Sub
- [ ] Streams
- [ ] Cache invalidation
- [ ] Cache stampede
- [ ] Hot keys
- [ ] Persistence and high availability options
- [ ] Private networking
- [ ] Authentication and TLS
- [ ] FastAPI integration
- [ ] Async Redis client
- [ ] Evolving Azure Redis portfolio and SKU selection

---

## Phase 32: Azure Service Bus
**Critical**

Enterprise messaging for backends and agents.

- [ ] Namespaces
- [ ] Queues
- [ ] Topics
- [ ] Subscriptions
- [ ] Filters
- [ ] Rules
- [ ] Message properties
- [ ] Message sessions
- [ ] Ordering
- [ ] Message locks
- [ ] Peek-lock
- [ ] Receive-and-delete
- [ ] Lock renewal
- [ ] Complete
- [ ] Abandon
- [ ] Defer
- [ ] Dead-letter queues
- [ ] Duplicate detection
- [ ] Scheduled messages
- [ ] Message TTL
- [ ] Retry
- [ ] Delivery count
- [ ] Transactions
- [ ] Premium vs Standard
- [ ] Geo-disaster recovery
- [ ] Managed identity
- [ ] Python SDK integration

## Phase 33: Azure Event Grid
**Critical**

Event routing for Blob and Functions pipelines.

- [ ] Event-driven architecture
- [ ] Events
- [ ] Event publishers
- [ ] Event subscribers
- [ ] System topics
- [ ] Custom topics
- [ ] Event subscriptions
- [ ] Event handlers
- [ ] Event filtering
- [ ] Webhook subscriptions
- [ ] Event delivery
- [ ] Retry
- [ ] Dead-lettering
- [ ] Event schema
- [ ] CloudEvents
- [ ] Blob Storage integration
- [ ] Functions integration

## Phase 34: Azure Event Hubs
**High**

High-volume telemetry and Kafka compatibility.

- [ ] Event Hubs namespaces
- [ ] Event hubs
- [ ] Partitions
- [ ] Partition keys
- [ ] Consumer groups
- [ ] Event producers
- [ ] Event consumers
- [ ] Offsets
- [ ] Checkpoints
- [ ] Capture
- [ ] Throughput units and processing units
- [ ] Kafka compatibility
- [ ] Event ordering
- [ ] Retention
- [ ] Schema management
- [ ] Stream processing
- [ ] Azure Functions integration
- [ ] Python producer and consumer

## Phase 35: Azure Logic Apps
**High**

Workflow automation and connectors.

| Service | Best suited for |
|---------|-----------------|
| Storage Queue | Simple asynchronous queueing |
| Service Bus | Enterprise messaging and business workflows |
| Event Grid | Event routing and notifications |
| Event Hubs | High-volume event and telemetry streaming |
| Logic Apps | Workflow automation and integration |

- [ ] Workflows
- [ ] Triggers
- [ ] Actions
- [ ] Connectors
- [ ] Standard vs Consumption
- [ ] Managed connectors
- [ ] Custom connectors
- [ ] Conditions
- [ ] Loops
- [ ] Variables
- [ ] Expressions
- [ ] Error handling
- [ ] Retry policies
- [ ] Secure inputs and outputs
- [ ] Integration with Functions, Service Bus and APIs
- [ ] Approval workflows
- [ ] Choose correctly among Storage Queue, Service Bus, Event Grid, Event Hubs, Logic Apps

---

## Phase 36: Azure API Management (APIM)
**High**

Gateway policies for multi-model AI APIs.

- [ ] API Management architecture
- [ ] API gateway
- [ ] APIs
- [ ] Operations
- [ ] Products
- [ ] Subscriptions
- [ ] Subscription keys
- [ ] Developer portal
- [ ] API revisions
- [ ] API versions
- [ ] Backends
- [ ] Named values
- [ ] Policies
- [ ] Inbound policies
- [ ] Backend policies
- [ ] Outbound policies
- [ ] Error handling policies
- [ ] Rate limiting
- [ ] Quotas
- [ ] Caching
- [ ] JWT validation
- [ ] OAuth integration
- [ ] IP filtering
- [ ] Request/response transformation
- [ ] Mock responses
- [ ] Logging
- [ ] Analytics
- [ ] Self-hosted gateway
- [ ] Private networking
- [ ] Developer onboarding
- [ ] Expose one API for multiple LLM providers
- [ ] Enforce rate limits by tenant
- [ ] Authenticate users via APIM
- [ ] Track token consumption
- [ ] Route requests to backend models
- [ ] Apply request and response policies
- [ ] Centralize API security

## Phase 37: Application Gateway and Azure Front Door
**High**

L7 load balancing, WAF, global edge.

- [ ] Layer 7 load balancing
- [ ] Reverse proxy
- [ ] Listeners
- [ ] Backend pools
- [ ] Routing rules
- [ ] Path-based routing
- [ ] TLS termination
- [ ] WAF on Application Gateway
- [ ] Health probes
- [ ] Private and public frontend configurations
- [ ] Autoscaling and zone redundancy
- [ ] Global entry point with Front Door
- [ ] Edge routing
- [ ] CDN capabilities
- [ ] Global load balancing
- [ ] Origin groups
- [ ] Front Door health probes
- [ ] Front Door WAF
- [ ] Caching
- [ ] TLS on Front Door
- [ ] Rules engine
- [ ] Regional failover
- [ ] Azure Load Balancer when appropriate
- [ ] Traffic Manager when appropriate

---

## Phase 38: Microsoft Foundry and Azure OpenAI
**Critical**

Core Azure AI for engineers.

### Microsoft Foundry
- [ ] Microsoft Foundry architecture
- [ ] Foundry resources
- [ ] Projects
- [ ] Project connections
- [ ] Model catalog
- [ ] Model deployments
- [ ] Model inference
- [ ] Agent Service
- [ ] Agent tools
- [ ] Agent evaluations
- [ ] Prompt management
- [ ] Tracing
- [ ] Content safety
- [ ] Networking
- [ ] RBAC
- [ ] Managed identity
- [ ] Private connectivity
- [ ] Deployment monitoring
- [ ] Model lifecycle management

### Azure OpenAI
- [ ] Azure OpenAI resource
- [ ] Model deployments
- [ ] Model families
- [ ] Deployment types
- [ ] Model versions
- [ ] Quotas
- [ ] TPM and RPM
- [ ] Rate limits
- [ ] Provisioned throughput concepts
- [ ] Regional availability
- [ ] Global and regional deployment options
- [ ] API authentication
- [ ] Entra authentication
- [ ] API keys
- [ ] Chat completions
- [ ] Responses APIs
- [ ] Streaming
- [ ] Tool calling
- [ ] Structured output
- [ ] Embeddings
- [ ] Image generation
- [ ] Audio capabilities
- [ ] Content filtering
- [ ] Responsible AI controls
- [ ] Retry and fallback

### Production engineering
- [ ] Model routing
- [ ] Multiple model providers
- [ ] Azure OpenAI and Gemini integration
- [ ] Token counting
- [ ] Cost management
- [ ] Rate-limit handling
- [ ] Model fallback
- [ ] Prompt versioning
- [ ] Model evaluations
- [ ] Semantic caching
- [ ] Request tracing
- [ ] Usage analytics

## Phase 39: Azure AI Search
**Critical**

Hybrid retrieval and permission-aware RAG.

- [ ] Search service
- [ ] Search units and replicas
- [ ] Indexes
- [ ] Documents
- [ ] Fields
- [ ] Indexers
- [ ] Data sources
- [ ] Skillsets
- [ ] Index projections
- [ ] Schedulers
- [ ] Push API
- [ ] Pull-based indexing
- [ ] Keyword search
- [ ] Full-text search
- [ ] Vector search
- [ ] Semantic ranking
- [ ] Hybrid search
- [ ] Filters
- [ ] Facets
- [ ] Scoring profiles
- [ ] Custom analyzers
- [ ] Synonyms
- [ ] Vector profiles
- [ ] HNSW
- [ ] Exhaustive KNN
- [ ] Embedding dimensions
- [ ] Integrated vectorization
- [ ] Semantic captions
- [ ] Semantic answers
- [ ] Reranking
- [ ] Index aliases
- [ ] Document-level security
- [ ] Permission-aware retrieval
- [ ] Private endpoints
- [ ] Managed identity
- [ ] Monitoring and scaling
- [ ] Project: Enterprise PDF RAG
- [ ] Project: Multi-tenant RAG
- [ ] Project: Hybrid search engine
- [ ] Project: Permission-aware knowledge assistant

## Phase 40: Azure AI Document Intelligence
**High**

OCR and extraction for ingestion pipelines.

- [ ] Prebuilt models
- [ ] Custom extraction models
- [ ] Layout extraction
- [ ] OCR
- [ ] Tables
- [ ] Key-value pairs
- [ ] Invoices
- [ ] Receipts
- [ ] Identity documents
- [ ] Document classification
- [ ] Custom model training
- [ ] Model composition
- [ ] Confidence scores
- [ ] Page-level extraction
- [ ] PDF processing
- [ ] Scanned document processing
- [ ] Integration with Blob Storage
- [ ] RAG ingestion pipelines

## Phase 41: Other Azure AI services
**High**

Speech, Language, Vision, Content Safety.

- [ ] Azure AI Speech
- [ ] Speech-to-text
- [ ] Text-to-speech
- [ ] Speech translation
- [ ] Azure AI Language
- [ ] Entity recognition
- [ ] Sentiment analysis
- [ ] PII detection
- [ ] Language detection
- [ ] Azure AI Vision
- [ ] Image analysis
- [ ] OCR
- [ ] Azure AI Content Safety
- [ ] Prompt Shields
- [ ] Harmful content detection
- [ ] Azure Machine Learning overview
- [ ] Azure AI services for multimodal workloads

## Phase 42: Azure Machine Learning
**High**

Workspaces, endpoints, MLOps, drift.

- [ ] Workspaces
- [ ] Compute instances
- [ ] Compute clusters
- [ ] Managed online endpoints
- [ ] Batch endpoints
- [ ] Environments
- [ ] Data assets
- [ ] Datastores
- [ ] Jobs
- [ ] Pipelines
- [ ] Components
- [ ] AutoML
- [ ] MLflow
- [ ] Model registry
- [ ] Experiment tracking
- [ ] Model deployment
- [ ] Model monitoring
- [ ] Data drift
- [ ] Model drift
- [ ] Responsible AI dashboard
- [ ] Feature engineering
- [ ] Distributed training
- [ ] GPU compute
- [ ] CI/CD for ML
- [ ] MLOps

## Phase 43: Azure AI data architecture
**High**

Lakehouse, Fabric, embedding pipelines.

- [ ] Azure Data Lake Storage
- [ ] Azure Databricks
- [ ] Microsoft Fabric
- [ ] Azure Data Factory
- [ ] Azure Synapse Analytics
- [ ] Azure Event Hubs
- [ ] Azure Stream Analytics
- [ ] Azure Cosmos DB vector search
- [ ] PostgreSQL with pgvector
- [ ] Azure AI Search as a knowledge retrieval layer
- [ ] Data ingestion and transformation
- [ ] Data quality and validation
- [ ] Data lineage
- [ ] Data governance
- [ ] Embedding pipelines
- [ ] Vector index management

---

## Phase 44: Azure Monitor
**Critical**

Metrics, logs, alerts, KQL, cost.

- [ ] Azure Monitor architecture
- [ ] Metrics
- [ ] Logs
- [ ] Alerts
- [ ] Activity Log
- [ ] Resource logs
- [ ] Diagnostic settings
- [ ] Log Analytics workspaces
- [ ] KQL (Kusto Query Language)
- [ ] Workbooks
- [ ] Dashboards
- [ ] Action groups
- [ ] Alert rules
- [ ] Metric alerts
- [ ] Log alerts
- [ ] Service Health
- [ ] Resource Health
- [ ] Change analysis
- [ ] Monitoring agents
- [ ] Data collection rules
- [ ] Retention and cost

## Phase 45: Application Insights
**Critical**

Distributed tracing for FastAPI and AI calls.

- [ ] Application Insights
- [ ] Application map
- [ ] Request tracking
- [ ] Dependency tracking
- [ ] Exceptions
- [ ] Traces
- [ ] Custom events
- [ ] Custom metrics
- [ ] Availability tests
- [ ] Live metrics
- [ ] Distributed tracing
- [ ] Correlation IDs
- [ ] OpenTelemetry
- [ ] Sampling
- [ ] Performance analysis
- [ ] Failure analysis
- [ ] KQL queries
- [ ] FastAPI integration
- [ ] AI model and tool-call tracing

## Phase 46: Azure operations and incident management
**Critical**

Advisor, Backup, ASR, runbooks.

- [ ] Azure Service Health
- [ ] Resource Health
- [ ] Azure Advisor
- [ ] Azure Backup
- [ ] Azure Site Recovery
- [ ] Disaster recovery
- [ ] RTO and RPO
- [ ] Backup policies
- [ ] Recovery testing
- [ ] Incident response
- [ ] Root cause analysis
- [ ] Capacity planning
- [ ] Maintenance windows
- [ ] Service quotas
- [ ] Support plans
- [ ] Production runbooks

---

## Phase 47: Azure DevOps
**Critical**

Repos, pipelines, environments, gates.

- [ ] Organizations
- [ ] Projects
- [ ] Repositories
- [ ] Branches
- [ ] Pull requests
- [ ] Branch policies
- [ ] Pipelines
- [ ] YAML pipelines
- [ ] Classic pipelines
- [ ] Build pipelines
- [ ] Release pipelines
- [ ] Pipeline stages
- [ ] Jobs
- [ ] Steps
- [ ] Agents
- [ ] Hosted agents
- [ ] Self-hosted agents
- [ ] Variable groups
- [ ] Secure files
- [ ] Service connections
- [ ] Environments
- [ ] Approvals
- [ ] Deployment gates
- [ ] Artifacts
- [ ] Test plans
- [ ] CI/CD security

## Phase 48: GitHub Actions and Azure deployment
**Critical**

OIDC login and deploy FastAPI/Functions/ACA/AKS.

- [ ] GitHub repositories
- [ ] Workflows
- [ ] Jobs and steps
- [ ] Runners
- [ ] Secrets
- [ ] Variables
- [ ] OIDC federation
- [ ] Azure login
- [ ] Service principal authentication
- [ ] Managed identity where supported
- [ ] Build and push Docker images
- [ ] Deploy FastAPI
- [ ] Deploy Functions
- [ ] Deploy Container Apps
- [ ] Deploy AKS
- [ ] Environment approvals
- [ ] Deployment rollback

## Phase 49: Terraform, Bicep and ARM
**High**

IaC plan/apply, state, modules.

- [ ] Infrastructure as Code
- [ ] Declarative vs imperative provisioning
- [ ] Terraform providers
- [ ] Resources
- [ ] Variables
- [ ] Outputs
- [ ] Modules
- [ ] State files
- [ ] Remote state
- [ ] State locking
- [ ] Workspaces
- [ ] Import
- [ ] Plan and apply
- [ ] Drift detection
- [ ] Dependency graph
- [ ] Terraform security
- [ ] Bicep modules
- [ ] Parameters
- [ ] ARM templates
- [ ] Resource deployment
- [ ] CI/CD for infrastructure

---

## Phase 50: Additional Azure services every senior engineer should know
**High**

| Service | Important concepts |
|---------|-------------------|
| Azure DNS | Public/private DNS, records, zones |
| Azure CDN | Caching, content delivery, edge performance |
| Azure Backup | Backup vaults, policies, restore |
| Azure Site Recovery | Replication, failover, disaster recovery |
| Azure Data Factory | Pipelines, activities, triggers, data movement |
| Azure Databricks | Spark, Delta Lake, MLflow |
| Microsoft Fabric | OneLake, lakehouse, pipelines, analytics |
| Azure Synapse | SQL pools, Spark, analytics |
| Azure Batch | Large-scale parallel compute |
| Azure Automation | Runbooks, schedules, automation |
| Azure Event Hubs | Telemetry and streaming |
| Azure Stream Analytics | Real-time stream processing |
| Azure Communication Services | Email, SMS, voice, chat |
| Azure Notification Hubs | Push notifications |
| Azure AI Content Safety | AI safety and moderation |
| Microsoft Purview | Data governance, catalog, lineage |
| Azure Resource Graph | Query resources across subscriptions |
| Azure Advisor | Reliability, security, performance and cost recommendations |
| Microsoft Sentinel | SIEM and security analytics |
| Azure Arc | Hybrid and multi-cloud resource management |

- [ ] Azure DNS
- [ ] Azure CDN
- [ ] Azure Backup
- [ ] Azure Site Recovery
- [ ] Azure Data Factory
- [ ] Azure Databricks
- [ ] Microsoft Fabric
- [ ] Azure Synapse
- [ ] Azure Batch
- [ ] Azure Automation
- [ ] Azure Stream Analytics
- [ ] Azure Communication Services
- [ ] Azure Notification Hubs
- [ ] Azure AI Content Safety
- [ ] Microsoft Purview
- [ ] Azure Resource Graph
- [ ] Azure Advisor
- [ ] Microsoft Sentinel
- [ ] Azure Arc

---

## Phase 51: Important Azure architecture scenarios
**Advanced**

Design independently, justify service choices.

### Scenario 1 — Production FastAPI backend
- [ ] User → API Management
- [ ] API Management → App Service
- [ ] App Service → Azure SQL / MongoDB
- [ ] App Service → Key Vault
- [ ] App Service → Blob Storage
- [ ] App Service → Application Insights
- [ ] Entra ID → application authentication

### Scenario 2 — Enterprise RAG application
- [ ] User uploads documents
- [ ] Blob Storage stores original files
- [ ] Event Grid detects uploaded documents
- [ ] Azure Functions starts ingestion
- [ ] Document Intelligence extracts content
- [ ] Python processing service chunks documents
- [ ] Embedding model generates vectors
- [ ] Azure AI Search indexes content
- [ ] FastAPI retrieves relevant context
- [ ] Azure OpenAI generates the response
- [ ] Application Insights monitors requests

### Scenario 3 — Event-driven AI document processing
- [ ] Blob Storage → document upload
- [ ] Event Grid → event notification
- [ ] Service Bus → durable work queue
- [ ] Azure Functions → background processing
- [ ] Container Apps → intensive document processing
- [ ] Azure AI Search → searchable index
- [ ] Cosmos DB → processing status
- [ ] Application Insights → monitoring

### Scenario 4 — Production multi-agent AI platform
- [ ] API Management → gateway
- [ ] App Service → FastAPI backend
- [ ] Microsoft Entra ID → identity
- [ ] Azure OpenAI / Microsoft Foundry → LLMs and agents
- [ ] Azure AI Search → retrieval
- [ ] Cosmos DB → agent state and conversation history
- [ ] Redis → cache and coordination
- [ ] Service Bus → asynchronous jobs
- [ ] Key Vault → secrets
- [ ] Blob Storage → files
- [ ] Application Insights → observability
- [ ] Private Link → secure service connectivity

### Scenario 5 — Large-scale production AI platform
- [ ] Multiple tenants
- [ ] Thousands of concurrent users
- [ ] Multiple model providers
- [ ] Model routing and fallback
- [ ] RAG over millions of documents
- [ ] Document-level permissions
- [ ] Asynchronous ingestion
- [ ] Agent orchestration
- [ ] Rate limiting
- [ ] Cost tracking
- [ ] Distributed caching
- [ ] Multi-region disaster recovery
- [ ] Monitoring and security
- [ ] CI/CD and automated evaluations

---

## Recommended learning sequence

Do not attempt all services at once.

| Order | Area | Importance |
|-------|------|------------|
| 1 | Cloud fundamentals and Azure hierarchy | Critical |
| 2 | Entra ID, OAuth, RBAC and managed identity | Critical |
| 3 | Storage Account and Blob Storage | Critical |
| 4 | Key Vault | Critical |
| 5 | App Service | Critical |
| 6 | Azure Functions and serverless | Critical |
| 7 | Virtual Machines and containers | High |
| 8 | Networking, VNet and private endpoints | Critical |
| 9 | SQL, PostgreSQL, Cosmos DB | Critical |
| 10 | Redis | High |
| 11 | Service Bus, Event Grid, Event Hubs | Critical |
| 12 | API Management | High |
| 13 | Azure OpenAI and Microsoft Foundry | Critical |
| 14 | Azure AI Search | Critical |
| 15 | Document Intelligence and AI services | High |
| 16 | Azure Machine Learning | High |
| 17 | Azure Monitor and Application Insights | Critical |
| 18 | Azure DevOps and GitHub Actions | Critical |
| 19 | Terraform and Bicep | High |
| 20 | AKS and advanced cloud architecture | Advanced |
| 21 | Cost management, governance and DR | Critical |
| 22 | Enterprise AI architecture projects | Advanced |

## Hands-on projects

| Project | Azure services |
|---------|----------------|
| Python REST API deployment | App Service, Entra ID, Key Vault |
| File upload application | Storage Account, Blob Storage, SAS |
| Background processing system | Functions, Service Bus |
| Secure backend platform | VNet, Private Endpoint, Key Vault, RBAC |
| Serverless document processing | Blob, Event Grid, Functions |
| Enterprise RAG | Blob, Document Intelligence, AI Search, OpenAI |
| AI agent platform | Foundry, App Service, Cosmos DB, Redis |
| Production API gateway | API Management, App Service |
| Containerized AI application | ACR, Container Apps, Managed Identity |
| Enterprise AI platform | AKS, APIM, Foundry, AI Search, Monitor |

- [ ] Project: Python REST API deployment
- [ ] Project: File upload application
- [ ] Project: Background processing system
- [ ] Project: Secure backend platform
- [ ] Project: Serverless document processing
- [ ] Project: Enterprise RAG
- [ ] Project: AI agent platform
- [ ] Project: Production API gateway
- [ ] Project: Containerized AI application
- [ ] Project: Enterprise AI platform

## Official Microsoft learning resources

- [ ] Azure documentation — all Azure services
- [ ] Azure Storage documentation
- [ ] Microsoft Entra documentation
- [ ] Azure App Service documentation
- [ ] Azure Functions documentation
- [ ] Azure Key Vault documentation
- [ ] Azure Architecture Center
- [ ] Microsoft Foundry documentation

> **Recommendation:** Give special attention to Storage Accounts, Entra ID, Managed Identity, Key Vault, App Service, Functions, Networking, Service Bus, Azure AI Search and Azure OpenAI. Start with Azure Storage Account from scratch — every configuration, security setting, redundancy option, Python SDK operation, pricing consideration and production scenario — before moving to the next service.
