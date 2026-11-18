# Azure Compute and Hosting

**App Service, Functions, serverless, VMs, Container Apps, AKS, ACR**

---

## Phase: Azure App Service
**Critical**

Primary PaaS host for Python backends and AI APIs.

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
- [ ] Deploy FastAPI using Gunicorn and Uvicorn workers
- [ ] Run multiple application instances
- [ ] Connect to MongoDB, PostgreSQL and Azure SQL
- [ ] Connect to Azure OpenAI
- [ ] Use Key Vault references
- [ ] Configure private access
- [ ] Configure CI/CD
- [ ] Implement blue-green deployments
- [ ] Troubleshoot memory, startup, networking and timeout failures

## Phase: Azure Functions
**Critical**

Event-driven serverless compute for AI pipelines.

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
- [ ] HTTP trigger
- [ ] Timer trigger
- [ ] Blob trigger
- [ ] Queue Storage trigger
- [ ] Service Bus trigger
- [ ] Event Grid trigger
- [ ] Event Hubs trigger
- [ ] Cosmos DB trigger
- [ ] Durable Functions triggers and orchestration patterns
- [ ] Blob input/output bindings
- [ ] Queue input/output bindings
- [ ] Service Bus bindings
- [ ] Event Hub bindings
- [ ] Cosmos DB bindings
- [ ] HTTP bindings
- [ ] Binding expressions
- [ ] Connection configuration
- [ ] SDK-based integration vs bindings
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

## Phase: Serverless architecture on Azure
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

## Phase: Azure Virtual Machines
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

## Phase: Azure Container Apps
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

## Phase: Azure Kubernetes Service (AKS)
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

## Phase: Azure Container Registry
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
