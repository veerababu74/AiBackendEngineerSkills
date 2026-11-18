# Complete Azure AI Foundry & Google Cloud Gemini Enterprise Agent Platform Mastery Roadmap

**Role path:** Enterprise AI Developer → AI Platform Engineer

Design, develop, deploy, secure and manage enterprise AI platforms across two ecosystems:

| Ecosystem | Focus |
|-----------|--------|
| **Microsoft Foundry** (formerly Azure AI Foundry) | Models, agents, RAG, Agent Service, Azure integrations, security, evaluations, production |
| **Google Cloud Gemini Enterprise Agent Platform** | Gemini models, ADK, Agent Engine, Agent Studio, RAG, orchestration, security, governance |

> **Naming note:** Azure AI Foundry is now Microsoft Foundry in newer docs. Google Vertex AI capabilities evolve under Gemini Enterprise Agent Platform. You will see both old and new names.

## Overall structure

| Track | Modules |
|-------|---------|
| Microsoft Foundry | 25 |
| Google Gemini Enterprise Agent Platform | 25 |
| Cross-cloud projects | 5 |

**Target capability:** Design and operate production-grade AI applications and agent platforms across Azure and Google Cloud.

---

# Part A — Microsoft Foundry / Azure AI Foundry

## Phase 1: Azure cloud and AI Foundry fundamentals
**Foundation**

Portal, projects, models, SDKs, quotas.

- [ ] What is Azure AI Foundry / Microsoft Foundry?
- [ ] Azure AI services ecosystem
- [ ] Microsoft Foundry vs Azure OpenAI Service
- [ ] Microsoft Foundry vs Azure Machine Learning
- [ ] Microsoft Foundry vs Azure AI Services
- [ ] Foundry portal navigation
- [ ] Foundry resource
- [ ] Foundry projects
- [ ] Project configuration
- [ ] Resource providers
- [ ] Azure subscriptions
- [ ] Resource groups
- [ ] Regions and availability
- [ ] Model catalog
- [ ] Model deployments
- [ ] Model endpoints
- [ ] Playground
- [ ] API keys and endpoints
- [ ] SDK vs REST API
- [ ] Azure CLI
- [ ] Azure Python SDK
- [ ] Project lifecycle
- [ ] Quotas and rate limits
- [ ] Pricing and consumption
- [ ] Preview vs generally available capabilities
## Phase 2: Azure foundation models and model deployment
**Core**

Catalog, deployment types, inference.

- [ ] Azure OpenAI models
- [ ] GPT model families
- [ ] Reasoning models
- [ ] Embedding models
- [ ] Multimodal models
- [ ] Image generation models
- [ ] Audio models
- [ ] Open-source models
- [ ] Meta Llama models
- [ ] Mistral models
- [ ] DeepSeek models
- [ ] Anthropic models where available
- [ ] Model capability comparison
- [ ] Model license and usage restrictions
- [ ] Standard deployment
- [ ] Global deployment
- [ ] Data Zone deployment
- [ ] Regional deployment
- [ ] Provisioned throughput
- [ ] Managed compute where supported
- [ ] Deployment configuration
- [ ] Model version selection
- [ ] Model upgrade
- [ ] Model retirement
- [ ] Token limits
- [ ] TPM and RPM
- [ ] Quota management
- [ ] Deployment availability
- [ ] Model failover
- [ ] Chat completions
- [ ] Responses API where supported
- [ ] Streaming responses
- [ ] Structured outputs
- [ ] Function calling
- [ ] Tool calling
- [ ] JSON schema
- [ ] Multimodal input
- [ ] Embedding generation
- [ ] Batch inference
- [ ] Async inference
- [ ] Model routing
- [ ] Model fallback
## Phase 3: Foundry SDK and Python development
**Engineering**

azure-ai-projects, identity, FastAPI.

- [ ] azure-ai-projects
- [ ] azure-ai-inference where applicable
- [ ] azure-identity
- [ ] openai Python SDK
- [ ] Microsoft Foundry project client
- [ ] Entra ID authentication
- [ ] DefaultAzureCredential
- [ ] Managed identity
- [ ] API key authentication
- [ ] REST API integration
- [ ] Async Python integration
- [ ] Pydantic models
- [ ] FastAPI integration
- [ ] Environment configuration
- [ ] Exception handling
- [ ] Retry handling
- [ ] Logging
- [ ] Streaming
- [ ] Token tracking
- [ ] Cost tracking
## Phase 4: Azure RAG and enterprise knowledge
**Critical**

Blob, Document Intelligence, AI Search, advanced RAG.

- [ ] Azure Blob Storage
- [ ] Azure Data Lake Storage
- [ ] Document Intelligence
- [ ] OCR
- [ ] Document extraction
- [ ] Text normalization
- [ ] Chunking
- [ ] Metadata extraction
- [ ] Embedding generation
- [ ] Incremental indexing
- [ ] Batch indexing
- [ ] Document update
- [ ] Document deletion
- [ ] Azure AI Search
- [ ] Vector search
- [ ] Hybrid search
- [ ] Semantic ranking
- [ ] Semantic reranking
- [ ] Metadata filters
- [ ] Keyword search
- [ ] Index configuration
- [ ] Indexer
- [ ] Data sources
- [ ] Skillsets
- [ ] Integrated vectorization
- [ ] Query rewriting
- [ ] Query expansion
- [ ] Retrieval optimization
- [ ] Citation generation
- [ ] Foundry knowledge integration
- [ ] Azure AI Search integration
- [ ] Foundry File Search where supported
- [ ] RAG with Azure Cosmos DB
- [ ] RAG with PostgreSQL
- [ ] RAG with external vector databases
- [ ] Multimodal RAG
- [ ] Agentic retrieval
- [ ] Access-controlled RAG
- [ ] Enterprise RAG evaluation
## Phase 5: Microsoft Foundry Agent Service
**Must master**

Agents, tools, SDK, hosted runtime.

- [ ] What is Foundry Agent Service?
- [ ] Agent lifecycle
- [ ] Prompt agents
- [ ] Hosted agents
- [ ] Agent configuration
- [ ] Instructions
- [ ] Model selection
- [ ] Agent versions
- [ ] Agent execution
- [ ] Agent sessions and conversations
- [ ] Agent publishing
- [ ] Managed runtime
- [ ] Built-in tools
- [ ] File Search
- [ ] Code Interpreter
- [ ] Web Search
- [ ] Function calling
- [ ] Custom functions
- [ ] OpenAPI tools
- [ ] MCP tools
- [ ] Toolboxes
- [ ] Tool authentication
- [ ] Tool authorization
- [ ] Tool execution
- [ ] Tool error handling
- [ ] Create agents using the portal
- [ ] Create agents using Python SDK
- [ ] Create agents using REST APIs
- [ ] Agent conversation management
- [ ] Streaming agent responses
- [ ] Agent state management
- [ ] Structured output
- [ ] Agent persistence
- [ ] Hosted custom agents
- [ ] Agent deployment
- [ ] Agent sharing
## Phase 6: Multi-agent orchestration in the Azure ecosystem
**Critical**

Microsoft Agent Framework, patterns, recovery.

- [ ] Microsoft Agent Framework
- [ ] Semantic Kernel
- [ ] LangGraph integration
- [ ] Agent-to-agent communication
- [ ] Sequential orchestration
- [ ] Parallel orchestration
- [ ] Concurrent execution
- [ ] Supervisor-worker architecture
- [ ] Handoff
- [ ] Agent delegation
- [ ] Group chat
- [ ] Planner-executor
- [ ] Human-in-the-loop
- [ ] Multi-agent state
- [ ] Workflow persistence
- [ ] Long-running agent tasks
- [ ] Agent failure recovery
- [ ] Agent tracing
- [ ] Distributed agent architecture

> **Must understand:** Learn Microsoft Agent Framework for new Microsoft-oriented agent development. Legacy Foundry workflow capability is scheduled for retirement on December 1, 2026.
## Phase 7: Microsoft Foundry evaluation and testing
**Production**

Groundedness, agent trajectory, gates.

- [ ] Foundry evaluation SDK
- [ ] Evaluation datasets
- [ ] Evaluation configuration
- [ ] Groundedness evaluation
- [ ] Relevance evaluation
- [ ] Coherence evaluation
- [ ] Fluency evaluation
- [ ] Similarity evaluation
- [ ] Retrieval evaluation
- [ ] Tool-call accuracy
- [ ] Task adherence
- [ ] Agent task completion
- [ ] Agent trajectory evaluation
- [ ] Custom evaluators
- [ ] LLM-as-a-judge
- [ ] Human evaluation
- [ ] Safety evaluation
- [ ] Regression evaluation
- [ ] Offline evaluation
- [ ] Online evaluation
- [ ] Continuous evaluation
- [ ] Evaluation thresholds
- [ ] Evaluation-driven deployment gates
## Phase 8: Microsoft Foundry observability and monitoring
**Production**

Tracing, App Insights, cost.

- [ ] Foundry tracing
- [ ] Agent execution traces
- [ ] Model inference traces
- [ ] Tool execution traces
- [ ] Agent handoff tracing
- [ ] OpenTelemetry integration
- [ ] Trace IDs and span IDs
- [ ] Token consumption
- [ ] Latency monitoring
- [ ] Agent success rate
- [ ] Agent failure rate
- [ ] Tool failure monitoring
- [ ] Evaluation metrics
- [ ] Application Insights
- [ ] Azure Monitor
- [ ] Log Analytics
- [ ] Alerts
- [ ] Dashboards
- [ ] Production traffic analysis
- [ ] Cost monitoring
- [ ] Performance troubleshooting
## Phase 9: Microsoft Foundry security and identity
**Critical**

Entra, RBAC, private networking, Key Vault.

- [ ] Microsoft Entra ID
- [ ] Managed identities
- [ ] Service principals
- [ ] Azure RBAC
- [ ] Foundry project permissions
- [ ] Agent identity
- [ ] Agent access policies
- [ ] User authentication
- [ ] Workload identity
- [ ] OAuth authentication
- [ ] Key Vault
- [ ] Secrets management
- [ ] Private endpoints
- [ ] Virtual networks
- [ ] Network isolation
- [ ] Private DNS
- [ ] Firewall rules
- [ ] Content filters
- [ ] Prompt injection protection
- [ ] Data leakage prevention
- [ ] Secure model endpoints
- [ ] Tool permission management
- [ ] Secure MCP integration
- [ ] Agent access control
- [ ] Azure Policy
## Phase 10: Azure AI governance and responsible AI
**Enterprise**

RAI principles, Purview, Defender.

- [ ] Microsoft Responsible AI principles
- [ ] Responsible AI dashboard and assessment concepts
- [ ] Fairness
- [ ] Reliability and safety
- [ ] Privacy and security
- [ ] Inclusiveness
- [ ] Transparency
- [ ] Accountability
- [ ] AI risk assessment
- [ ] AI system inventory
- [ ] Model governance
- [ ] Agent governance
- [ ] AI asset management
- [ ] Foundry governance / control plane
- [ ] Policy enforcement
- [ ] Cost governance
- [ ] Agent identity governance
- [ ] Safety governance
- [ ] Microsoft Purview integration
- [ ] Microsoft Defender integration
- [ ] Audit trails
- [ ] Compliance evidence
## Phase 11: Azure AI content safety and guardrails
**Critical**

Content Safety, Prompt Shields.

- [ ] Azure AI Content Safety
- [ ] Hate and unfairness detection
- [ ] Sexual content detection
- [ ] Violence detection
- [ ] Self-harm detection
- [ ] Prompt Shields
- [ ] Direct prompt injection detection
- [ ] Indirect prompt injection detection
- [ ] Groundedness detection
- [ ] Protected material detection
- [ ] Content filtering
- [ ] Blocklists
- [ ] Custom safety policies
- [ ] Input guardrails
- [ ] Output guardrails
- [ ] Agent tool guardrails
- [ ] Human approval
- [ ] Safety fallback responses
- [ ] Safety monitoring
## Phase 12: Azure AI Search and knowledge infrastructure
**Core**

Indexes, HNSW, hybrid, scaling.

- [ ] Azure AI Search architecture
- [ ] Search services
- [ ] Search indexes
- [ ] Indexers
- [ ] Data sources
- [ ] Skillsets
- [ ] Vector fields
- [ ] HNSW
- [ ] Exhaustive KNN
- [ ] Hybrid search
- [ ] Semantic ranker
- [ ] Scoring profiles
- [ ] Metadata filtering
- [ ] Security trimming
- [ ] Index partitioning
- [ ] Replicas
- [ ] Search scaling
- [ ] Index updates
- [ ] Index backups and recovery strategy
- [ ] Search performance optimization
- [ ] Search monitoring
- [ ] Search access control
## Phase 13: Azure AI data and document processing
**Engineering**

Blob, Doc Intelligence, event-driven pipelines.

- [ ] Azure Blob Storage
- [ ] Azure Data Lake Storage
- [ ] Azure AI Document Intelligence
- [ ] Azure Functions
- [ ] Azure Event Grid
- [ ] Azure Service Bus
- [ ] Azure Storage Queues
- [ ] Azure Cosmos DB
- [ ] Azure Database for PostgreSQL
- [ ] Event-driven ingestion
- [ ] Batch ingestion
- [ ] Large document processing
- [ ] Resumable uploads
- [ ] Document processing pipelines
- [ ] Data lineage
- [ ] Data classification
- [ ] Data retention
- [ ] Data deletion
- [ ] PII protection
## Phase 14: Azure AI model customization and fine-tuning
**Advanced**

SFT, governance, vs RAG.

- [ ] Fine-tuning fundamentals
- [ ] Supervised fine-tuning
- [ ] Dataset preparation
- [ ] Dataset validation
- [ ] Training data governance
- [ ] Model selection
- [ ] Fine-tuning configuration
- [ ] Hyperparameters
- [ ] Training jobs
- [ ] Model evaluation
- [ ] Model registration
- [ ] Model deployment
- [ ] Model versioning
- [ ] Model monitoring
- [ ] Fine-tuning vs RAG
- [ ] Fine-tuning vs prompt engineering
- [ ] Model distillation concepts
## Phase 15: Azure multimodal AI
**Advanced**

Vision, speech, voice agents.

- [ ] Text models
- [ ] Image understanding
- [ ] Image generation
- [ ] Audio input
- [ ] Audio generation
- [ ] Speech-to-text
- [ ] Text-to-speech
- [ ] Real-time voice interaction
- [ ] Video understanding where supported
- [ ] Multimodal embeddings
- [ ] Multimodal RAG
- [ ] Document and image reasoning
- [ ] Voice agents
- [ ] Streaming audio
- [ ] Multimodal safety
## Phase 16: Azure AI application development and integration
**Engineering**

FastAPI, React, Teams, APIM.

- [ ] FastAPI + Foundry
- [ ] Flask + Foundry
- [ ] React + Foundry backend
- [ ] REST APIs
- [ ] Async Python
- [ ] WebSockets
- [ ] SSE
- [ ] Authentication middleware
- [ ] Authorization middleware
- [ ] Background processing
- [ ] Redis caching
- [ ] PostgreSQL integration
- [ ] MongoDB integration
- [ ] API Gateway / Azure API Management
- [ ] Enterprise application integration
- [ ] Microsoft Teams integration
- [ ] Microsoft 365 integration where appropriate
## Phase 17: Azure AI deployment and hosting
**Production**

App Service, Container Apps, AKS.

- [ ] Foundry managed agent runtime
- [ ] Hosted agents
- [ ] Azure App Service
- [ ] Azure Container Apps
- [ ] Azure Kubernetes Service
- [ ] Azure Functions
- [ ] Azure Container Registry
- [ ] Docker
- [ ] Kubernetes
- [ ] Horizontal scaling
- [ ] Autoscaling
- [ ] Managed identity
- [ ] Private networking
- [ ] Environment configuration
- [ ] Deployment slots
- [ ] Health checks
- [ ] Load balancing
- [ ] Blue-green deployments
- [ ] Canary deployments
## Phase 18: Azure AI DevOps and MLOps / LLMOps
**Production**

Pipelines, IaC, gates.

- [ ] Azure DevOps pipelines
- [ ] GitHub Actions
- [ ] CI/CD
- [ ] Terraform
- [ ] Bicep
- [ ] Infrastructure as Code
- [ ] Environment promotion
- [ ] Model version control
- [ ] Prompt version control
- [ ] Agent version control
- [ ] Dataset versioning
- [ ] Automated evaluation pipelines
- [ ] Automated security testing
- [ ] Deployment approval gates
- [ ] Rollback
- [ ] Release monitoring
- [ ] Continuous evaluation
## Phase 19: Azure AI error handling and production troubleshooting
**Production**

401/429/5xx, identity, network, agents.

- [ ] 401 and 403 errors
- [ ] 404 deployment errors
- [ ] 429 rate limits
- [ ] 5xx provider errors
- [ ] Quota exhaustion
- [ ] Regional availability issues
- [ ] Model deployment failures
- [ ] SDK compatibility issues
- [ ] Entra authentication failures
- [ ] Managed identity failures
- [ ] DNS failures
- [ ] Private endpoint failures
- [ ] Network connectivity issues
- [ ] Token limit errors
- [ ] Context window errors
- [ ] RAG index synchronization failures
- [ ] Agent runtime failures
- [ ] Tool invocation errors
- [ ] Streaming interruptions
- [ ] Timeout handling
- [ ] Exponential backoff
- [ ] Circuit breaker
- [ ] Fallback model
- [ ] Provider failover
- [ ] Incident response
## Phase 20: Azure AI performance and cost optimization
**Production**

Tokens, caching, Cost Management.

- [ ] Token optimization
- [ ] Prompt optimization
- [ ] Model selection
- [ ] Model routing
- [ ] Provisioned throughput
- [ ] Caching
- [ ] Semantic caching
- [ ] Batch processing
- [ ] Parallel execution
- [ ] Async processing
- [ ] Rate limiting
- [ ] Concurrency management
- [ ] Search performance
- [ ] Vector indexing optimization
- [ ] Agent execution optimization
- [ ] Cost per request
- [ ] Cost per agent task
- [ ] Budget management
- [ ] Azure Cost Management
- [ ] Cost alerts
## Phase 21: Azure AI enterprise architecture
**Architect**

Landing zones, multi-tenant, HA.

- [ ] Hub-and-spoke networking
- [ ] Enterprise landing zones
- [ ] Multi-subscription architecture
- [ ] Multi-region architecture
- [ ] Multi-tenant architecture
- [ ] Centralized model gateway
- [ ] Centralized agent registry
- [ ] Shared toolboxes
- [ ] Shared knowledge services
- [ ] Centralized identity
- [ ] Centralized monitoring
- [ ] Enterprise AI governance
- [ ] Disaster recovery
- [ ] Business continuity
- [ ] High availability
- [ ] SLA and SLO design
## Phase 22: Azure AI advanced agent patterns
**Expert**

ReAct, supervisor, MCP, A2A.

- [ ] ReAct agents
- [ ] Planner-executor
- [ ] Supervisor-worker
- [ ] Hierarchical agents
- [ ] Parallel agents
- [ ] Sequential agents
- [ ] Group chat
- [ ] Agent handoffs
- [ ] Dynamic routing
- [ ] Tool selection
- [ ] Agent memory
- [ ] Persistent agents
- [ ] Long-running agents
- [ ] Human-in-the-loop
- [ ] MCP agents
- [ ] A2A agents
- [ ] Autonomous workflows
## Phase 23: Azure AI compliance and information protection
**Enterprise**

DPDP, GDPR, Purview, CMK.

- [ ] Data privacy
- [ ] PII detection
- [ ] PII masking
- [ ] Data Loss Prevention
- [ ] Microsoft Purview
- [ ] Information Protection
- [ ] Data classification
- [ ] Data retention
- [ ] Data residency
- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] Customer-managed keys
- [ ] Key rotation
- [ ] Audit logs
- [ ] Regulatory compliance assessment
- [ ] DPDP Act considerations
- [ ] GDPR considerations
- [ ] ISO 27001
- [ ] ISO 42001
- [ ] SOC 2 requirements
## Phase 24: Azure AI advanced integrations
**Advanced**

Copilot Studio, Fabric, Databricks.

- [ ] Microsoft Copilot Studio
- [ ] Microsoft 365 Copilot extensibility
- [ ] Microsoft Teams
- [ ] Microsoft Graph
- [ ] Power Platform
- [ ] Azure API Management
- [ ] Microsoft Fabric
- [ ] Azure Databricks
- [ ] Azure Machine Learning
- [ ] Microsoft Agent Framework
- [ ] MCP ecosystem
- [ ] External enterprise APIs
- [ ] Hybrid cloud integrations
## Phase 25: Azure AI capstone and architecture design
**Capstone**

Design reviews, runbooks, playbooks.

- [ ] Design enterprise RAG on Azure
- [ ] Design enterprise multi-agent systems
- [ ] Design secure agent platform
- [ ] Design centralized model gateway
- [ ] Design enterprise knowledge platform
- [ ] Design multi-tenant AI SaaS
- [ ] Design 10,000-user AI application
- [ ] Design enterprise AI governance architecture
- [ ] Design AI disaster recovery
- [ ] Design cross-region agent platform
- [ ] Perform architecture reviews
- [ ] Create technical design documents
- [ ] Create deployment runbooks
- [ ] Create production incident playbooks

---

# Part B — Google Cloud Gemini Enterprise Agent Platform

Platform pillars: **Build · Scale · Govern · Optimize**

## Phase 1: Google Cloud fundamentals
**Foundation**

Org hierarchy, IAM, CLI, billing.

- [ ] What is Google Cloud Platform (GCP)?
- [ ] Google Cloud vs Azure
- [ ] Gemini Enterprise Agent Platform overview
- [ ] Vertex AI vs Gemini Enterprise Agent Platform
- [ ] Google Cloud Console
- [ ] Organizations
- [ ] Folders
- [ ] Projects
- [ ] Billing accounts
- [ ] Resource hierarchy
- [ ] Regions and zones
- [ ] APIs and services
- [ ] API enablement
- [ ] Quotas
- [ ] IAM fundamentals
- [ ] Service accounts
- [ ] Application Default Credentials
- [ ] Google Cloud CLI
- [ ] Python SDK
- [ ] REST API
- [ ] Cloud Shell
- [ ] Cloud Logging
- [ ] Cloud Monitoring
- [ ] Cloud billing
## Phase 2: Gemini models and Model Garden
**Core**

Gemini families, Model Garden, endpoints.

- [ ] Gemini model families
- [ ] Text models
- [ ] Reasoning capabilities
- [ ] Multimodal models
- [ ] Image understanding
- [ ] Audio understanding
- [ ] Video understanding
- [ ] Image generation
- [ ] Embedding models
- [ ] Context window
- [ ] Structured outputs
- [ ] Function calling
- [ ] Tool calling
- [ ] Streaming
- [ ] Batch inference
- [ ] Model Garden architecture
- [ ] Google models
- [ ] Open-source models
- [ ] Partner models
- [ ] Model discovery
- [ ] Model deployment
- [ ] Model endpoints
- [ ] Model versions
- [ ] Model evaluation
- [ ] Model tuning
- [ ] Model monitoring
- [ ] Model access controls
- [ ] Model licensing
- [ ] Model selection
- [ ] Model cost comparison
## Phase 3: Google Cloud SDK and Python development
**Engineering**

google-genai, ADK, auth, FastAPI.

- [ ] Google Cloud Python SDK
- [ ] google-genai
- [ ] google-cloud-aiplatform where applicable
- [ ] google-adk
- [ ] google-auth
- [ ] google-cloud-storage
- [ ] google-cloud-logging
- [ ] google-cloud-monitoring
- [ ] Application Default Credentials
- [ ] Service account authentication
- [ ] Workload Identity Federation
- [ ] IAM authentication
- [ ] API key authentication
- [ ] REST API integration
- [ ] Async Python
- [ ] Pydantic
- [ ] FastAPI integration
- [ ] Environment configuration
- [ ] Logging
- [ ] Error handling
- [ ] Streaming
- [ ] Token usage tracking
- [ ] Cost management
## Phase 4: Gemini model inference and development
**Core**

Generation config, tools, multimodal.

- [ ] Gemini API
- [ ] Model configuration
- [ ] Generation configuration
- [ ] Temperature
- [ ] Top-P
- [ ] Top-K where supported
- [ ] Max output tokens
- [ ] System instructions
- [ ] Safety settings
- [ ] Structured outputs
- [ ] Function calling
- [ ] Tool execution
- [ ] Multimodal prompts
- [ ] Image inputs
- [ ] Audio inputs
- [ ] Video inputs
- [ ] Streaming responses
- [ ] Async generation
- [ ] Batch prediction
- [ ] Model fallback
- [ ] Model routing
## Phase 5: Google Cloud RAG and enterprise search
**Critical**

GCS, Document AI, Vector Search, RAG Engine.

- [ ] Google Cloud Storage
- [ ] BigQuery
- [ ] Document AI
- [ ] OCR processing
- [ ] Document extraction
- [ ] Text preprocessing
- [ ] Chunking
- [ ] Metadata extraction
- [ ] Embedding generation
- [ ] Batch ingestion
- [ ] Incremental ingestion
- [ ] Document updates
- [ ] Document deletion
- [ ] Data pipelines
- [ ] Vertex AI Vector Search
- [ ] Vector indexing
- [ ] Dense embeddings
- [ ] Sparse embeddings
- [ ] Hybrid search
- [ ] Metadata filters
- [ ] Filtering and ranking
- [ ] Semantic retrieval
- [ ] Query expansion
- [ ] Reranking
- [ ] Search optimization
- [ ] Retrieval evaluation
- [ ] Context construction
- [ ] Citation generation
- [ ] Vertex AI RAG Engine
- [ ] Enterprise search
- [ ] Grounding with Google Search
- [ ] Grounding with enterprise data
- [ ] Multimodal RAG
- [ ] Agentic RAG
- [ ] RAG with BigQuery
- [ ] RAG with Cloud Storage
- [ ] RAG with external vector databases
- [ ] Secure RAG
- [ ] Multi-tenant RAG
- [ ] RAG evaluation
## Phase 6: Agent Development Kit (ADK)
**Must master**

Code-first agents, tools, callbacks.

- [ ] What is Agent Development Kit?
- [ ] ADK architecture
- [ ] Agent lifecycle
- [ ] LLM agents
- [ ] Agent instructions
- [ ] Agent configuration
- [ ] Model configuration
- [ ] Agent execution
- [ ] Agent runner
- [ ] Invocation context
- [ ] Session management
- [ ] State management
- [ ] Events
- [ ] Callbacks
- [ ] Plugins
- [ ] LlmAgent
- [ ] SequentialAgent
- [ ] ParallelAgent
- [ ] LoopAgent
- [ ] Custom agents
- [ ] Workflow agents
- [ ] Agent composition
- [ ] Nested agents
- [ ] Parent-child agents
- [ ] Function tools
- [ ] Built-in tools
- [ ] Google Search tool
- [ ] Code execution
- [ ] OpenAPI tools
- [ ] MCP tools
- [ ] Custom tools
- [ ] Tool context
- [ ] Tool confirmation
- [ ] Tool authentication
- [ ] Tool authorization
- [ ] Tool error handling
- [ ] Agent callbacks
- [ ] Before-agent callbacks
- [ ] After-agent callbacks
- [ ] Before-model callbacks
- [ ] After-model callbacks
- [ ] Before-tool callbacks
- [ ] After-tool callbacks
- [ ] Long-running functions
- [ ] Streaming
- [ ] Artifact management
- [ ] Memory integration
- [ ] Evaluation
- [ ] Agent testing
## Phase 7: Gemini Enterprise Agent Platform Agent Engine and runtime
**Must master**

Runtime, Sessions, Memory Bank.

- [ ] Agent Runtime architecture
- [ ] Agent deployment
- [ ] Agent hosting
- [ ] Managed runtime
- [ ] Runtime configuration
- [ ] Autoscaling
- [ ] Agent execution
- [ ] Agent endpoints
- [ ] Agent versioning
- [ ] Runtime logging
- [ ] Runtime monitoring
- [ ] Runtime debugging
- [ ] Runtime security
- [ ] Session fundamentals
- [ ] Session lifecycle
- [ ] Session creation
- [ ] Session retrieval
- [ ] Session state
- [ ] Session persistence
- [ ] Conversation history
- [ ] User session isolation
- [ ] Session cleanup
- [ ] Memory Bank architecture
- [ ] Short-term memory vs long-term memory
- [ ] Memory extraction
- [ ] Memory storage
- [ ] Memory retrieval
- [ ] User-specific memory
- [ ] Memory personalization
- [ ] Memory lifecycle
- [ ] Memory privacy
- [ ] Memory deletion
- [ ] Memory evaluation

> **Must understand:** Google Agent Platform separates session history (Sessions) from longer-term memory (Memory Bank). Learn both independently.
## Phase 8: Google Agent Studio and low-code development
**Product**

Visual agents vs ADK.

- [ ] Agent Studio architecture
- [ ] Visual agent development
- [ ] Agent configuration
- [ ] Prompt engineering
- [ ] Model selection
- [ ] Tool configuration
- [ ] Agent reasoning loops
- [ ] Multi-agent workflows
- [ ] Agent testing
- [ ] Agent debugging
- [ ] Agent deployment
- [ ] Agent version management
- [ ] Agent collaboration
- [ ] Agent Garden
- [ ] Prebuilt agent templates
- [ ] Low-code vs code-first development
- [ ] When to use Agent Studio vs ADK
## Phase 9: Google multi-agent orchestration
**Must master**

Sequential/Parallel/Loop, supervisors, HITL.

- [ ] Multi-agent architecture
- [ ] Parent agent and sub-agent
- [ ] SequentialAgent
- [ ] ParallelAgent
- [ ] LoopAgent
- [ ] Supervisor agents
- [ ] Coordinator agents
- [ ] Planner-executor architecture
- [ ] Agent delegation
- [ ] Agent handoffs
- [ ] Dynamic routing
- [ ] Conditional routing
- [ ] Agent collaboration
- [ ] Group-based reasoning
- [ ] Shared state
- [ ] Session state
- [ ] Agent communication
- [ ] Agent callbacks
- [ ] Agent event management
- [ ] Workflow termination
- [ ] Multi-agent error handling
- [ ] Agent recovery
- [ ] Human-in-the-loop
- [ ] Long-running agent workflows
## Phase 10: Google agent tools and integrations
**Engineering**

Search, BigQuery, MCP, A2A.

- [ ] Function tools
- [ ] Google Search
- [ ] Google Maps tools where supported
- [ ] Code execution
- [ ] BigQuery tools
- [ ] Cloud Storage tools
- [ ] Document AI tools
- [ ] OpenAPI tools
- [ ] REST API integration
- [ ] Custom Python tools
- [ ] MCP integration
- [ ] A2A integration
- [ ] Tool discovery
- [ ] Tool authentication
- [ ] Tool authorization
- [ ] Tool confirmation
- [ ] Tool validation
- [ ] Tool execution monitoring
- [ ] Tool error handling
- [ ] External enterprise API integration
## Phase 11: Google Agent Platform evaluation
**Production critical**

Gen AI evaluation, AutoRaters.

- [ ] Gen AI evaluation service
- [ ] Agent evaluation
- [ ] Model evaluation
- [ ] Evaluation datasets
- [ ] Evaluation criteria
- [ ] Response quality
- [ ] Groundedness
- [ ] Answer relevance
- [ ] Tool-use accuracy
- [ ] Agent task completion
- [ ] Trajectory evaluation
- [ ] Multi-turn evaluation
- [ ] Multi-turn AutoRaters
- [ ] Auto SxS evaluation
- [ ] Custom evaluation metrics
- [ ] Human evaluation
- [ ] Offline evaluation
- [ ] Online evaluation
- [ ] Simulated evaluation
- [ ] Synthetic test generation
- [ ] User persona simulation
- [ ] Regression evaluation
- [ ] Evaluation thresholds
- [ ] Continuous evaluation
## Phase 12: Google Agent Platform observability
**Production**

Unified Trace Viewer, Cloud Trace.

- [ ] Agent Observability
- [ ] Unified Trace Viewer
- [ ] Agent execution traces
- [ ] Model inference traces
- [ ] Tool invocation traces
- [ ] Agent handoff traces
- [ ] Multi-agent execution traces
- [ ] Agent topology
- [ ] Agent dependency graphs
- [ ] Cloud Logging
- [ ] Cloud Monitoring
- [ ] Cloud Trace
- [ ] OpenTelemetry
- [ ] Trace propagation
- [ ] Latency monitoring
- [ ] Token consumption
- [ ] Agent execution cost
- [ ] Agent success rate
- [ ] Agent failure rate
- [ ] Runtime resource utilization
- [ ] Tool errors
- [ ] Alerts and dashboards
- [ ] Production troubleshooting
## Phase 13: Google Agent Identity and IAM security
**Critical**

SPIFFE, Workload Identity, least privilege.

- [ ] Google Cloud IAM
- [ ] User authentication
- [ ] Service accounts
- [ ] Agent Identity
- [ ] SPIFFE identities
- [ ] Workload Identity Federation
- [ ] Agent Identity Auth Manager
- [ ] OAuth 2.0
- [ ] User-delegated authentication
- [ ] Agent-specific permissions
- [ ] IAM roles
- [ ] IAM policies
- [ ] Least privilege
- [ ] Identity verification
- [ ] Identity lifecycle
- [ ] Credential management
- [ ] Token management
- [ ] Secure agent-to-agent communication
- [ ] Audit logging
- [ ] Cross-project IAM
## Phase 14: Google Agent Gateway and enterprise governance
**Must master**

Ingress/egress, registry, mTLS, RBAC.

- [ ] Agent Gateway architecture
- [ ] Client-to-Agent ingress
- [ ] Agent-to-Anywhere egress
- [ ] Agent Gateway deployment
- [ ] Agent Registry
- [ ] Agent discovery
- [ ] Agent registration
- [ ] Agent capabilities
- [ ] Tool registration
- [ ] MCP server registration
- [ ] Agent access policies
- [ ] Tool-level RBAC
- [ ] Centralized policy enforcement
- [ ] mTLS
- [ ] OAuth authentication
- [ ] VPC connectivity
- [ ] Private network connectivity
- [ ] Network egress control
- [ ] Agent traffic inspection
- [ ] Agent Gateway observability
- [ ] Cross-project governance
- [ ] Cross-cloud governance

> **Must understand:** Agent Gateway can govern client-to-agent and agent-to-tool traffic including MCP, A2A, REST and gRPC. Verify preview status of cross-cloud Kubernetes support before production dependencies.
## Phase 15: Google Model Armor and AI guardrails
**Critical**

Injection, jailbreak, DLP, tool scanning.

- [ ] Model Armor architecture
- [ ] Prompt security
- [ ] Prompt injection detection
- [ ] Jailbreak detection
- [ ] Sensitive data detection
- [ ] Data leakage prevention
- [ ] Harmful content detection
- [ ] Malicious tool payload detection
- [ ] Input scanning
- [ ] Output scanning
- [ ] Tool response scanning
- [ ] Model Armor templates
- [ ] Security policy configuration
- [ ] Content sanitization
- [ ] Safety controls
- [ ] Guardrail testing
- [ ] Security monitoring
- [ ] Semantic governance
- [ ] Context-aware tool restrictions
- [ ] Custom authorization engines
## Phase 16: Google AI data governance and privacy
**Enterprise**

DLP, KMS, VPC-SC, residency.

- [ ] Data governance fundamentals
- [ ] Cloud Storage access control
- [ ] BigQuery access control
- [ ] Dataplex
- [ ] Data Catalog concepts
- [ ] Sensitive Data Protection
- [ ] Cloud DLP
- [ ] PII detection
- [ ] PII redaction
- [ ] Data masking
- [ ] Data anonymization
- [ ] Data encryption
- [ ] Cloud KMS
- [ ] Customer-managed encryption keys
- [ ] Secret Manager
- [ ] VPC Service Controls
- [ ] Data residency
- [ ] Data retention
- [ ] Data deletion
- [ ] Cross-project data isolation
- [ ] Multi-tenant data security
- [ ] Privacy-aware RAG
- [ ] Privacy-aware agent memory
## Phase 17: Google AI governance and responsible AI
**Enterprise**

Fairness, registry, audits.

- [ ] Responsible AI principles
- [ ] Fairness
- [ ] Safety
- [ ] Privacy
- [ ] Transparency
- [ ] Accountability
- [ ] Explainability
- [ ] AI risk assessment
- [ ] AI system inventory
- [ ] Model governance
- [ ] Agent governance
- [ ] Agent Registry governance
- [ ] Agent identity governance
- [ ] Policy management
- [ ] Semantic governance
- [ ] Human oversight
- [ ] Audit trails
- [ ] AI system documentation
- [ ] Model documentation
- [ ] Governance evidence
- [ ] Compliance reporting
- [ ] AI incident management
## Phase 18: Google Agent Platform error handling and production troubleshooting
**Production**

API errors, runtime, RAG, RCA.

- [ ] Gemini API errors
- [ ] Authentication failures
- [ ] IAM permission errors
- [ ] 400 invalid requests
- [ ] 401 authentication errors
- [ ] 403 permission errors
- [ ] 404 resource errors
- [ ] 429 quota errors
- [ ] 5xx server errors
- [ ] Model availability errors
- [ ] Agent Runtime failures
- [ ] Agent deployment failures
- [ ] ADK execution failures
- [ ] Tool invocation errors
- [ ] MCP connection errors
- [ ] Session persistence errors
- [ ] Memory Bank errors
- [ ] RAG Engine failures
- [ ] Vector Search errors
- [ ] Cloud Storage failures
- [ ] BigQuery errors
- [ ] Streaming interruption
- [ ] Network failures
- [ ] Retry and backoff
- [ ] Circuit breaker
- [ ] Fallback model
- [ ] Agent recovery
- [ ] Incident response
- [ ] Root cause analysis
## Phase 19: Google AI deployment and infrastructure
**Production**

Cloud Run, GKE, Cloud Build/Deploy.

- [ ] Agent Runtime deployment
- [ ] ADK deployment
- [ ] Python SDK deployment
- [ ] Source-based deployment
- [ ] Container-based deployment
- [ ] Cloud Run
- [ ] Google Kubernetes Engine (GKE)
- [ ] Artifact Registry
- [ ] Cloud Build
- [ ] Cloud Deploy
- [ ] Docker
- [ ] Kubernetes
- [ ] Autoscaling
- [ ] Horizontal scaling
- [ ] Load balancing
- [ ] Cloud networking
- [ ] VPC
- [ ] Private Service Connect
- [ ] Health checks
- [ ] Environment configuration
- [ ] Secrets management
- [ ] Deployment rollback
## Phase 20: Google AI application development
**Engineering**

FastAPI + ADK, streaming, data stores.

- [ ] FastAPI + Gemini
- [ ] FastAPI + ADK
- [ ] Flask + Gemini
- [ ] React + FastAPI + Gemini
- [ ] REST API
- [ ] Async Python
- [ ] SSE
- [ ] WebSockets
- [ ] Streaming
- [ ] Authentication middleware
- [ ] Authorization middleware
- [ ] PostgreSQL integration
- [ ] MongoDB integration
- [ ] Redis integration
- [ ] Cloud SQL
- [ ] Firestore
- [ ] BigQuery
- [ ] Cloud Storage
- [ ] API Gateway
- [ ] Enterprise application integration
## Phase 21: Google AI optimization and cost management
**Production**

Routing, caching, budgets.

- [ ] Gemini model selection
- [ ] Model routing
- [ ] Token optimization
- [ ] Prompt optimization
- [ ] Context optimization
- [ ] Caching
- [ ] Batch inference
- [ ] Parallel execution
- [ ] Async execution
- [ ] Concurrency limits
- [ ] Quota management
- [ ] Rate limiting
- [ ] Agent Runtime optimization
- [ ] Vector Search optimization
- [ ] Agent memory optimization
- [ ] Cost per request
- [ ] Cost per agent task
- [ ] Cloud Billing
- [ ] Budget alerts
- [ ] Cost attribution
- [ ] Resource optimization
## Phase 22: Google AI multimodal capabilities
**Advanced**

Image, audio, video, voice agents.

- [ ] Gemini text understanding
- [ ] Image understanding
- [ ] Image generation
- [ ] Audio understanding
- [ ] Speech generation
- [ ] Video understanding
- [ ] Multimodal embeddings
- [ ] Multimodal RAG
- [ ] Document understanding
- [ ] Audio transcription
- [ ] Real-time interactions
- [ ] Multimodal agents
- [ ] Voice-based agents
- [ ] Multimodal evaluation
- [ ] Multimodal safety
## Phase 23: Google AI advanced services and integrations
**Advanced**

Grounding, Workspace, Apigee, MCP/A2A.

- [ ] Google Search grounding
- [ ] Google Maps integration
- [ ] BigQuery integration
- [ ] Document AI integration
- [ ] Cloud Storage integration
- [ ] Firebase integration
- [ ] Apigee integration
- [ ] Google Workspace integration
- [ ] Gmail integration
- [ ] Google Drive integration
- [ ] Google Calendar integration
- [ ] Cloud Run integration
- [ ] GKE integration
- [ ] MCP ecosystem
- [ ] A2A ecosystem
- [ ] External enterprise systems
## Phase 24: Google AI MLOps and LLMOps
**Production**

Versioning, gates, continuous eval.

- [ ] Vertex AI / Agent Platform lifecycle concepts
- [ ] Cloud Build pipelines
- [ ] Cloud Deploy
- [ ] Terraform
- [ ] Infrastructure as Code
- [ ] Model versioning
- [ ] Prompt versioning
- [ ] Agent versioning
- [ ] Dataset versioning
- [ ] Evaluation pipelines
- [ ] Automated testing
- [ ] Security gates
- [ ] Canary deployment
- [ ] Blue-green deployment
- [ ] Model rollback
- [ ] Agent rollback
- [ ] Continuous evaluation
- [ ] Production monitoring
- [ ] Governance automation
## Phase 25: Google Cloud enterprise architecture
**Architect**

Landing zones, gateway, multi-tenant, DR.

- [ ] Organization architecture
- [ ] Folder and project hierarchy
- [ ] Enterprise landing zones
- [ ] Multi-project architecture
- [ ] Shared VPC
- [ ] Multi-region architecture
- [ ] Multi-tenant architecture
- [ ] Centralized agent registry
- [ ] Centralized agent gateway
- [ ] Centralized identity
- [ ] Centralized logging
- [ ] Centralized observability
- [ ] Enterprise RAG architecture
- [ ] Enterprise multi-agent architecture
- [ ] Secure AI platform
- [ ] High availability
- [ ] Disaster recovery
- [ ] Business continuity
- [ ] 10,000-user agent platform design
- [ ] Cross-cloud architecture
- [ ] Architecture documentation
- [ ] Production runbooks

---

# Part C — Azure vs Google Cloud comparison

| Capability | Microsoft ecosystem | Google ecosystem |
|------------|---------------------|------------------|
| AI platform | Microsoft Foundry | Gemini Enterprise Agent Platform |
| Model catalog | Foundry Models | Model Garden |
| Primary agent SDK | Microsoft Agent Framework / Semantic Kernel | Google ADK |
| Low-code agents | Foundry portal | Agent Studio |
| Agent hosting | Foundry Agent Service | Agent Runtime |
| Agent sessions | Agent conversation/session capabilities | Agent Platform Sessions |
| Long-term memory | Framework-specific memory integrations | Agent Platform Memory Bank |
| RAG | Azure AI Search + Foundry knowledge tools | RAG Engine + Vector Search |
| Object storage | Azure Blob Storage | Cloud Storage |
| Enterprise data | Fabric, Azure SQL, Cosmos DB | BigQuery, Cloud SQL, Firestore |
| Document extraction | Azure AI Document Intelligence | Document AI |
| Agent registry | Foundry governance / registries | Agent Registry |
| Agent security | Entra ID, RBAC, Foundry governance | Agent Identity, IAM, Agent Gateway |
| AI guardrails | Azure AI Content Safety, Prompt Shields | Model Armor, semantic governance |
| Observability | Foundry tracing, Azure Monitor, App Insights | Cloud Trace, Logging, Monitoring |
| Evaluation | Foundry evaluations | Gen AI evaluation |
| Secrets | Azure Key Vault | Secret Manager |
| Container platform | AKS | GKE |
| Serverless | Azure Functions, Container Apps | Cloud Run, Cloud Functions |
| IaC | Terraform, Bicep | Terraform |
| DevOps | Azure DevOps, GitHub Actions | Cloud Build, Cloud Deploy, GitHub Actions |

> Functional mappings are not identical features. Check availability, region support and preview status before architecture decisions.

# Part D — Five cross-cloud projects

1. **Enterprise RAG Platform** — Azure: Foundry + AI Search · Google: Agent Platform + RAG Engine / Vector Search
2. **Multi-Agent Enterprise Assistant** — Azure: Microsoft Agent Framework + Foundry · Google: ADK + Agent Runtime
3. **Enterprise AI Security Gateway** — Azure: Entra + Content Safety · Google: Agent Identity + Agent Gateway + Model Armor
4. **AI Evaluation and Observability Platform** — Azure: Foundry Evaluations + App Insights · Google: Gen AI Evaluation + Cloud Observability
5. **Cross-Cloud Enterprise AI Platform** — Azure↔Google agents via MCP/A2A with shared auth, tracing, failover

# Part E — Recommended learning sequence

1. Azure AI Foundry fundamentals
2. Azure production agent development
3. Google Gemini Enterprise Agent Platform fundamentals
4. Google production agent development
5. Cross-cloud architecture

**Related skills:** see `skills/cloud/`
