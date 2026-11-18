# Enterprise AI Security, AI Governance, Responsible AI & Production Reliability Mastery Roadmap

**Goal:** Build enterprise-grade Generative AI, RAG, AI Agents, Agentic AI, and Multi-Agent Systems that are secure, private, compliant, and reliable.

Building an AI application that works is only one part of the job. You must also ensure that it:

- Protects sensitive and confidential information
- Prevents unauthorized data access
- Resists prompt injection and malicious inputs
- Does not expose one customer's data to another
- Handles failures safely
- Produces reliable and explainable results
- Follows privacy, security and compliance requirements
- Uses AI responsibly and fairly
- Has monitoring, auditing and governance throughout its lifecycle

**25 major learning modules** — security fundamentals → enterprise AI governance and production operations.

---
## Phase 1: Information security fundamentals
**Foundation**

Before securing AI applications, understand traditional information security.

- [ ] What is information security?
- [ ] Information security vs cybersecurity
- [ ] Confidentiality, Integrity and Availability (CIA Triad)
- [ ] Authentication vs authorization
- [ ] Identification vs authentication
- [ ] Least privilege principle
- [ ] Need-to-know principle
- [ ] Zero Trust security architecture
- [ ] Defense in depth
- [ ] Security by design
- [ ] Secure by default
- [ ] Data classification
- [ ] Data ownership
- [ ] Data handling policies
- [ ] Data access policies
- [ ] Security boundaries
- [ ] Attack surface
- [ ] Threat modeling
- [ ] Risk assessment
- [ ] Vulnerability assessment
- [ ] Penetration testing
- [ ] Security incident management
- [ ] Security audit
- [ ] Security controls

> **Must understand:** Every AI application processes inputs, prompts, documents, model outputs, tool calls and logs. Each is a potential security boundary.
## Phase 2: Data privacy and protection
**Critical – Must master**

A. Privacy fundamentals · B. PII detection · C. Protection mechanisms

- [ ] What is data privacy?
- [ ] Data privacy vs data security
- [ ] Personally Identifiable Information (PII)
- [ ] Sensitive Personal Data
- [ ] Personal data vs non-personal data
- [ ] Confidential business information
- [ ] Financial data
- [ ] Healthcare data
- [ ] Employee information
- [ ] Customer information
- [ ] Biometric information
- [ ] Special-category data under applicable laws
- [ ] Data subject rights
- [ ] Data ownership and consent
- [ ] Purpose limitation
- [ ] Data minimization
- [ ] Storage limitation
- [ ] Data retention
- [ ] Data deletion
- [ ] Data portability
- [ ] PII identification
- [ ] PII classification
- [ ] PII detection using NLP
- [ ] Regex-based PII detection
- [ ] Named Entity Recognition (NER)
- [ ] PII masking
- [ ] PII redaction
- [ ] PII anonymization
- [ ] Pseudonymization
- [ ] Tokenization
- [ ] Data masking
- [ ] Sensitive data filtering
- [ ] Re-identification risks
- [ ] Reversible vs irreversible masking
- [ ] PII detection in prompts
- [ ] PII detection in documents
- [ ] PII detection in model outputs
- [ ] PII detection in logs and traces
- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] Application-level encryption
- [ ] Field-level encryption
- [ ] Database encryption
- [ ] Key management
- [ ] Key rotation
- [ ] Secrets management
- [ ] Data loss prevention (DLP)
- [ ] Secure backups
- [ ] Secure deletion
- [ ] Data residency
- [ ] Cross-border data transfer controls

> **Production scenario:** A user submits a prompt containing Aadhaar, PAN, bank account and phone number. How do you detect, protect, process and prevent leakage into LLM logs or third-party providers?
## Phase 3: AI threat modeling and security architecture
**Foundation**

STRIDE, ATLAS, OWASP LLM/Agentic, NIST AI RMF.

- [ ] What is AI threat modeling?
- [ ] Traditional threat modeling vs AI threat modeling
- [ ] STRIDE methodology
- [ ] Attack trees
- [ ] Attack surface mapping
- [ ] Trust boundaries
- [ ] Data flow diagrams
- [ ] Threat identification
- [ ] Threat prioritization
- [ ] Risk scoring
- [ ] Likelihood vs impact
- [ ] Security control mapping
- [ ] AI-specific attack surfaces
- [ ] Model attack surfaces
- [ ] Prompt attack surfaces
- [ ] Tool attack surfaces
- [ ] Retrieval attack surfaces
- [ ] Agent communication attack surfaces
- [ ] Supply chain risks
- [ ] Third-party model risks
- [ ] Third-party API risks
- [ ] Threat modeling for multi-tenant AI
- [ ] Threat modeling for autonomous agents
- [ ] STRIDE
- [ ] MITRE ATLAS
- [ ] OWASP Top 10 for LLM Applications
- [ ] OWASP Top 10 for Agentic Applications
- [ ] NIST AI Risk Management Framework
## Phase 4: LLM and Generative AI security
**Critical**

Prompt, model, and output attacks plus protection techniques.

- [ ] Prompt injection
- [ ] Direct prompt injection
- [ ] Indirect prompt injection
- [ ] Jailbreaking
- [ ] System prompt extraction
- [ ] Prompt leakage
- [ ] Instruction hierarchy attacks
- [ ] Role manipulation
- [ ] Context manipulation
- [ ] Delimiter attacks
- [ ] Multilingual prompt injection
- [ ] Obfuscated prompt injection
- [ ] Multi-turn prompt attacks
- [ ] Persistent prompt injection
- [ ] Model extraction
- [ ] Model inversion
- [ ] Membership inference
- [ ] Training data extraction
- [ ] Data poisoning
- [ ] Backdoor attacks
- [ ] Adversarial inputs
- [ ] Model denial of service
- [ ] Excessive resource consumption
- [ ] Model supply chain attacks
- [ ] Sensitive data leakage
- [ ] Hallucinated information
- [ ] Unsafe content generation
- [ ] Malicious code generation
- [ ] SQL injection through generated queries
- [ ] XSS through generated HTML
- [ ] Command injection
- [ ] Insecure output handling
- [ ] Insecure deserialization
- [ ] Improper JSON validation
- [ ] Unsafe markdown rendering
- [ ] Untrusted generated code execution
- [ ] Input validation
- [ ] Input sanitization
- [ ] Prompt boundary separation
- [ ] Instruction hierarchy enforcement
- [ ] Output validation
- [ ] Structured output validation
- [ ] Content moderation
- [ ] Safety classifiers
- [ ] Prompt injection detection
- [ ] Sensitive data filtering
- [ ] LLM output encoding
- [ ] Tool execution sandboxing
- [ ] Human approval for sensitive actions
- [ ] Defense-in-depth architecture

> **Must understand:** A system prompt saying "never reveal confidential data" is not a security boundary. Enforce access control, data filtering and tool permissions in application code.
## Phase 5: RAG security
**Critical for enterprise RAG**

Document, vector DB, retrieval, and privacy controls.

- [ ] Secure document ingestion
- [ ] Document ownership
- [ ] Document classification
- [ ] Document access permissions
- [ ] Document-level authorization
- [ ] Document-level RBAC
- [ ] Document-level ABAC
- [ ] Document security metadata
- [ ] Secure document storage
- [ ] Malicious document detection
- [ ] Document poisoning detection
- [ ] Malicious PDF handling
- [ ] Untrusted document instructions
- [ ] Secure OCR processing
- [ ] Document version control
- [ ] Document deletion propagation
- [ ] Vector database authentication
- [ ] Vector database authorization
- [ ] Tenant-level isolation
- [ ] Collection-level isolation
- [ ] Namespace isolation
- [ ] Metadata-based access filtering
- [ ] Row-level security
- [ ] Vector data encryption
- [ ] Secure index backups
- [ ] Secure vector database APIs
- [ ] Index access control
- [ ] Index deletion
- [ ] Secure vector search
- [ ] Preventing cross-tenant retrieval
- [ ] Preventing embedding leakage
- [ ] Unauthorized document retrieval
- [ ] Retrieval-based data leakage
- [ ] Indirect prompt injection through retrieved documents
- [ ] Malicious retrieval results
- [ ] Retrieval poisoning
- [ ] Context injection
- [ ] Sensitive context detection
- [ ] Metadata filtering enforcement
- [ ] Permission checks before context assembly
- [ ] Permission checks after retrieval
- [ ] Citation access validation
- [ ] Secure context construction
- [ ] PII detection before embedding
- [ ] PII masking before indexing
- [ ] Sensitive embedding protection
- [ ] Secure query embedding
- [ ] Embedding storage protection
- [ ] Query history protection
- [ ] Retrieval log redaction
- [ ] Secure document retention
- [ ] User-specific document access
- [ ] Data deletion across indexes and caches

> **Must understand:** Vector similarity is not authorization. Even if a document is highly relevant, it must not be returned unless the user has permission.
## Phase 6: AI Agent and Agentic AI security
**Critical – Advanced**

Agent abuse, tool security, memory isolation, multi-agent trust.

- [ ] Autonomous agent abuse
- [ ] Unauthorized tool invocation
- [ ] Excessive agent autonomy
- [ ] Agent privilege escalation
- [ ] Agent impersonation
- [ ] Agent identity spoofing
- [ ] Agent memory poisoning
- [ ] Agent context manipulation
- [ ] Agent instruction injection
- [ ] Malicious agent delegation
- [ ] Unauthorized agent handoffs
- [ ] Agent-to-agent data leakage
- [ ] Agent communication poisoning
- [ ] Infinite agent loops
- [ ] Uncontrolled recursive execution
- [ ] Unauthorized task execution
- [ ] Tool authentication
- [ ] Tool authorization
- [ ] Per-tool permissions
- [ ] Least-privilege tool access
- [ ] Tool input validation
- [ ] Tool output validation
- [ ] Tool allowlisting
- [ ] Tool denylisting
- [ ] Tool schema validation
- [ ] Tool execution sandbox
- [ ] Shell execution restrictions
- [ ] Python execution restrictions
- [ ] Database query restrictions
- [ ] API request restrictions
- [ ] Network egress restrictions
- [ ] Tool timeout controls
- [ ] Tool rate limiting
- [ ] Tool audit logging
- [ ] Tool approval policies
- [ ] User-specific memory isolation
- [ ] Memory access control
- [ ] Memory poisoning
- [ ] Memory manipulation
- [ ] Memory leakage
- [ ] Memory encryption
- [ ] Memory retention policies
- [ ] Memory deletion
- [ ] Secure memory retrieval
- [ ] Memory provenance
- [ ] Memory integrity validation
- [ ] Agent identity management
- [ ] Agent authentication
- [ ] Agent authorization
- [ ] Inter-agent trust
- [ ] Secure agent communication
- [ ] Agent capability restrictions
- [ ] Agent delegation policies
- [ ] Cross-agent data protection
- [ ] Shared memory permissions
- [ ] Agent output validation
- [ ] Agent trust boundaries
- [ ] Rogue agent detection
- [ ] Agent isolation
- [ ] Agent audit trails
- [ ] Human oversight

> **Production scenario:** A research agent receives a malicious instruction from an external web page and asks a database agent for confidential employee records. Enforce authorization at the database tool — do not rely on the supervisor prompt.
## Phase 7: MCP and A2A security
**Modern AI infrastructure**

Secure Model Context Protocol and Agent2Agent.

- [ ] MCP security architecture
- [ ] MCP client authentication
- [ ] MCP server authentication
- [ ] MCP authorization
- [ ] OAuth 2.0
- [ ] Token validation
- [ ] Token expiration
- [ ] Token audience validation
- [ ] Secure MCP tool discovery
- [ ] Malicious MCP server detection
- [ ] Tool poisoning
- [ ] Malicious tool descriptions
- [ ] Prompt injection through MCP resources
- [ ] MCP server trust management
- [ ] MCP permission boundaries
- [ ] MCP server isolation
- [ ] Secure STDIO transport
- [ ] Secure Streamable HTTP transport
- [ ] MCP audit logging
- [ ] MCP rate limiting
- [ ] MCP server monitoring
- [ ] Agent identity verification
- [ ] Agent authentication
- [ ] Agent authorization
- [ ] Agent card validation
- [ ] Agent capability verification
- [ ] Secure task delegation
- [ ] Secure artifact exchange
- [ ] Message integrity
- [ ] Message authentication
- [ ] Replay attack prevention
- [ ] Task-level permissions
- [ ] Remote agent trust
- [ ] Agent communication encryption
- [ ] Cross-organization agent security
- [ ] Agent revocation
- [ ] A2A audit logging

> **Production scenario:** You connect your internal AI agent to an external MCP server. How do you prevent that server from accessing unauthorized internal databases or executing dangerous tools?
## Phase 8: API, backend and infrastructure security
**Backend engineering**

API, FastAPI/Python, and infra security.

- [ ] API authentication
- [ ] JWT authentication
- [ ] OAuth 2.0
- [ ] OpenID Connect
- [ ] API authorization
- [ ] RBAC
- [ ] ABAC
- [ ] API key management
- [ ] API key rotation
- [ ] Rate limiting
- [ ] Request throttling
- [ ] Request validation
- [ ] Response validation
- [ ] Input sanitization
- [ ] CORS configuration
- [ ] CSRF protection
- [ ] SSRF prevention
- [ ] SQL injection prevention
- [ ] NoSQL injection prevention
- [ ] XSS prevention
- [ ] Path traversal prevention
- [ ] Secure file uploads
- [ ] API versioning
- [ ] API gateway security
- [ ] Pydantic validation
- [ ] Secure dependency injection
- [ ] Authentication middleware
- [ ] Authorization dependencies
- [ ] Secure exception handling
- [ ] Request size limits
- [ ] File upload restrictions
- [ ] Secure temporary files
- [ ] Async task isolation
- [ ] Database connection security
- [ ] Environment variable protection
- [ ] Secrets management
- [ ] Secure logging
- [ ] Dependency vulnerability scanning
- [ ] Python package supply chain security
- [ ] Docker image security
- [ ] Container isolation
- [ ] Non-root containers
- [ ] Container image scanning
- [ ] Kubernetes RBAC
- [ ] Kubernetes network policies
- [ ] Kubernetes secrets
- [ ] Pod security
- [ ] Network segmentation
- [ ] Private endpoints
- [ ] Firewall rules
- [ ] VNet integration
- [ ] TLS certificates
- [ ] Network egress restrictions
- [ ] Cloud IAM
- [ ] Managed identities
- [ ] Azure Key Vault
- [ ] Infrastructure as Code security
- [ ] Terraform security scanning
- [ ] CI/CD pipeline security
## Phase 9: Multi-tenant security and enterprise data isolation
**Very important**

Tenant isolation for SaaS RAG and agent platforms.

- [ ] What is multi-tenancy?
- [ ] Tenant isolation
- [ ] Tenant identification
- [ ] Tenant authentication
- [ ] Tenant authorization
- [ ] Tenant-specific databases
- [ ] Shared database architecture
- [ ] Database-per-tenant architecture
- [ ] Schema-per-tenant architecture
- [ ] Collection-per-tenant architecture
- [ ] Namespace-based isolation
- [ ] Tenant-specific vector indexes
- [ ] Tenant-specific memory
- [ ] Tenant-specific caches
- [ ] Tenant-specific logs
- [ ] Tenant-specific encryption keys
- [ ] Tenant-specific tool permissions
- [ ] Tenant-specific agent configurations
- [ ] Tenant-specific knowledge bases
- [ ] Cross-tenant access prevention
- [ ] Cross-tenant query isolation
- [ ] Cross-tenant data leakage testing
- [ ] Tenant deletion workflows
- [ ] Tenant-level audit logging

> **Production scenario:** Company A and Company B use the same RAG app and vector database. How do you ensure Company A can never retrieve Company B documents, even through malicious prompts?
## Phase 10: AI Governance fundamentals
**Enterprise governance**

Policies, accountability, lifecycle governance.

- [ ] What is AI governance?
- [ ] AI governance vs AI security
- [ ] AI governance vs information security
- [ ] AI governance vs data governance
- [ ] AI governance lifecycle
- [ ] AI governance framework
- [ ] AI governance policies
- [ ] AI accountability
- [ ] AI transparency
- [ ] AI explainability
- [ ] AI traceability
- [ ] AI auditability
- [ ] AI risk management
- [ ] AI system classification
- [ ] AI use-case approval
- [ ] AI system ownership
- [ ] Model ownership
- [ ] Data ownership
- [ ] AI development standards
- [ ] AI deployment approval
- [ ] AI change management
- [ ] AI operational governance
- [ ] AI incident governance
- [ ] AI retirement and decommissioning
## Phase 11: Responsible AI principles
**Must master**

Fairness, reliability, privacy, transparency, accountability.

- [ ] What is AI fairness?
- [ ] Bias in training data
- [ ] Bias in embeddings
- [ ] Bias in retrieval
- [ ] Bias in generated responses
- [ ] Demographic bias
- [ ] Representation bias
- [ ] Historical bias
- [ ] Measurement bias
- [ ] Fairness evaluation
- [ ] Bias mitigation
- [ ] Fairness across user groups
- [ ] AI reliability
- [ ] Robustness
- [ ] Accuracy
- [ ] Hallucination prevention
- [ ] Grounded generation
- [ ] Unsafe output prevention
- [ ] Adversarial robustness
- [ ] Reliability testing
- [ ] Failure containment
- [ ] Safe fallback mechanisms
- [ ] Privacy by design
- [ ] Data minimization
- [ ] Consent management
- [ ] Confidentiality
- [ ] Secure data processing
- [ ] Privacy risk assessment
- [ ] Privacy-preserving AI
- [ ] Differential privacy fundamentals
- [ ] Federated learning fundamentals
- [ ] AI transparency
- [ ] Explainable AI (XAI)
- [ ] Model explainability
- [ ] Decision explainability
- [ ] Source attribution
- [ ] RAG citation traceability
- [ ] Agent decision traceability
- [ ] Model limitations disclosure
- [ ] AI-generated content disclosure
- [ ] User notification
- [ ] Human accountability
- [ ] Human oversight
- [ ] Human intervention
- [ ] Decision ownership
- [ ] Audit trails
- [ ] Incident accountability
- [ ] Responsibility assignment
- [ ] AI impact assessment
## Phase 12: AI risk management
**Critical for enterprise AI**

Identify, score, mitigate, and monitor AI risk.

- [ ] What is AI risk?
- [ ] AI risk identification
- [ ] AI risk assessment
- [ ] AI risk classification
- [ ] Risk likelihood
- [ ] Risk impact
- [ ] Risk scoring
- [ ] Risk prioritization
- [ ] Inherent vs residual risk
- [ ] Risk mitigation
- [ ] Risk acceptance
- [ ] Risk monitoring
- [ ] Risk ownership
- [ ] Risk register
- [ ] AI impact assessment
- [ ] Algorithmic impact assessment
- [ ] Data protection impact assessment (DPIA)
- [ ] Threat and risk assessment
- [ ] High-risk AI identification
- [ ] Third-party AI risk
- [ ] Model risk
- [ ] Operational risk
- [ ] Reputational risk
- [ ] Legal and regulatory risk
- [ ] AI risk reporting

> **Must understand:** Risk management assesses likelihood and impact of harm to users, organizations and society, then selects appropriate controls.
## Phase 13: AI governance frameworks and standards
**Enterprise**

NIST, ISO, SOC 2, OWASP, EU AI Act.

- [ ] NIST AI RMF
- [ ] NIST Generative AI Profile
- [ ] ISO/IEC 42001
- [ ] ISO/IEC 23894
- [ ] ISO/IEC 27001
- [ ] ISO/IEC 27701
- [ ] ISO/IEC 27017
- [ ] ISO/IEC 27018
- [ ] SOC 2
- [ ] OWASP LLM Top 10
- [ ] OWASP Agentic AI Top 10
- [ ] MITRE ATLAS
- [ ] EU AI Act
- [ ] Understand purpose of each framework
- [ ] Understand scope and applicability
- [ ] Map AI risks to security controls
- [ ] Map controls to technical implementation
- [ ] Maintain compliance evidence
- [ ] Prepare audit documentation
- [ ] Conduct periodic assessments
- [ ] Track remediation actions

> **Must understand:** ISO certification, SOC 2 reports and regulatory compliance are not interchangeable. Understand what each demonstrates.
## Phase 14: Legal and regulatory requirements
**Important for enterprise deployments**

India DPDP, GDPR/EU AI Act, US and international.

- [ ] Digital Personal Data Protection Act, 2023 (DPDP Act)
- [ ] DPDP Rules, 2025 and commencement provisions
- [ ] Data fiduciary responsibilities
- [ ] Data processor responsibilities
- [ ] Notice and consent requirements
- [ ] Purpose limitation
- [ ] Data principal rights
- [ ] Personal data breach obligations
- [ ] Data retention and deletion
- [ ] Children's personal data requirements
- [ ] Significant Data Fiduciary obligations
- [ ] CERT-In directions
- [ ] Applicable IT Act requirements
- [ ] GDPR
- [ ] Data controller vs data processor
- [ ] Lawful basis for processing
- [ ] Data subject rights
- [ ] DPIA
- [ ] Cross-border data transfers
- [ ] EU AI Act
- [ ] Risk-based AI classification
- [ ] High-risk AI requirements
- [ ] Transparency obligations
- [ ] Human oversight
- [ ] AI literacy obligations
- [ ] CCPA / CPRA
- [ ] HIPAA (where applicable)
- [ ] GLBA (where applicable)
- [ ] SOC 2
- [ ] NIST Privacy Framework
- [ ] International data transfer requirements
- [ ] Sector-specific AI regulations

> **Must understand:** Learn actual obligations, applicability, exemptions, effective dates and timelines. Do not assume every requirement applies to every AI application.
### Governance roles

AI system owner · Business owner · Data owner · Model owner · AI risk manager · Security engineer · Privacy officer / DPO · Compliance officer · Human overseer

## Phase 15: AI data governance and data lifecycle management
**Enterprise data engineering**

Ownership, quality, retention, RAG deletion workflows.

- [ ] What is data governance?
- [ ] Data governance vs data management
- [ ] Data ownership
- [ ] Data stewardship
- [ ] Data classification
- [ ] Data catalog
- [ ] Data lineage
- [ ] Data provenance
- [ ] Data quality
- [ ] Data validation
- [ ] Data accuracy
- [ ] Data completeness
- [ ] Data consistency
- [ ] Data freshness
- [ ] Data deduplication
- [ ] Data versioning
- [ ] Data retention
- [ ] Data archival
- [ ] Data deletion
- [ ] Data lifecycle management
- [ ] Data access governance
- [ ] Data usage tracking
- [ ] Data consent management
- [ ] Dataset approval workflows
- [ ] Training data governance
- [ ] Fine-tuning dataset governance
- [ ] RAG knowledge base governance
- [ ] Synthetic data governance

> **Production scenario:** A customer requests deletion of personal information. Identify and delete it from source documents, extracted text, chunks, embeddings, indexes, caches, backups — and retain evidence the workflow completed.
## Phase 16: Model governance and lifecycle management
**Enterprise**

Inventory, approval, drift, decommissioning.

- [ ] Model inventory
- [ ] Model registry
- [ ] Model ownership
- [ ] Model approval
- [ ] Model versioning
- [ ] Model lineage
- [ ] Model documentation
- [ ] Model cards
- [ ] Model selection governance
- [ ] Model risk assessment
- [ ] Model validation
- [ ] Model evaluation
- [ ] Model deployment approval
- [ ] Model monitoring
- [ ] Model drift
- [ ] Model rollback
- [ ] Model decommissioning
- [ ] Third-party model governance
- [ ] Open-source model governance
- [ ] Foundation model governance
- [ ] Fine-tuned model governance
- [ ] Model provider risk assessment
- [ ] Model license management
- [ ] Model update management
## Phase 17: AI error handling and exception management
**Production-critical engineering**

LLM, RAG, agent, and infrastructure errors + strategies.

- [ ] Authentication errors
- [ ] Authorization errors
- [ ] Invalid API requests
- [ ] Invalid model deployment
- [ ] Rate-limit errors (429)
- [ ] Quota exhaustion
- [ ] Context window exceeded
- [ ] Token limit exceeded
- [ ] Model timeout
- [ ] Provider unavailable
- [ ] Empty response
- [ ] Malformed response
- [ ] Invalid structured output
- [ ] JSON parsing failure
- [ ] Content filtering rejection
- [ ] Streaming interruption
- [ ] Document parsing failure
- [ ] OCR failure
- [ ] Embedding generation failure
- [ ] Embedding dimension mismatch
- [ ] Vector database unavailable
- [ ] Index corruption
- [ ] Index synchronization failure
- [ ] Empty retrieval results
- [ ] Irrelevant retrieval results
- [ ] Reranker failure
- [ ] Context overflow
- [ ] Missing citations
- [ ] Stale documents
- [ ] Duplicate documents
- [ ] Retrieval timeout
- [ ] Tool invocation failure
- [ ] Invalid tool arguments
- [ ] Tool authentication failure
- [ ] Tool authorization failure
- [ ] Tool timeout
- [ ] Tool rate limit
- [ ] Agent planning failure
- [ ] Invalid task decomposition
- [ ] Agent handoff failure
- [ ] Agent communication failure
- [ ] State persistence failure
- [ ] Checkpoint restoration failure
- [ ] Infinite loop
- [ ] Recursive delegation
- [ ] Partial agent completion
- [ ] Agent execution timeout
- [ ] Agent crashes
- [ ] Database connection failure
- [ ] Redis connection failure
- [ ] Message queue failure
- [ ] Network timeout
- [ ] DNS resolution failure
- [ ] Storage failure
- [ ] Memory exhaustion
- [ ] CPU exhaustion
- [ ] Disk exhaustion
- [ ] Container crash
- [ ] Kubernetes pod failure
- [ ] Deployment failure
- [ ] Configuration errors
- [ ] Secrets retrieval failure
- [ ] Centralized exception handling
- [ ] Custom exception classes
- [ ] Structured error responses
- [ ] Error classification
- [ ] Retry policies
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Circuit breaker
- [ ] Timeout management
- [ ] Fallback model
- [ ] Fallback provider
- [ ] Graceful degradation
- [ ] Dead-letter queues
- [ ] Idempotent processing
- [ ] Failure recovery
- [ ] Checkpoint and resume
- [ ] Compensating transactions
- [ ] Error correlation IDs
- [ ] Safe error messages
- [ ] Error audit trails

> **Must understand:** Never retry every error blindly. A 429 or transient network error may be retryable; an authorization failure or invalid request generally requires a different response.
## Phase 18: AI production incidents and troubleshooting
**Senior-level production skills**

RAG, agent, GenAI incidents and RCA.

- [ ] Retrieval accuracy suddenly decreases
- [ ] Answers contain outdated information
- [ ] RAG returns documents from the wrong tenant
- [ ] Vector database becomes unavailable
- [ ] Embedding model changes unexpectedly
- [ ] Indexing pipeline stops midway
- [ ] Duplicate chunks appear
- [ ] Document deletion does not propagate
- [ ] Search latency increases
- [ ] Relevant documents are not retrieved
- [ ] Citations point to incorrect documents
- [ ] RAG produces hallucinated answers
- [ ] Context window exceeds model limits
- [ ] Document ingestion backlog increases
- [ ] Agent gets stuck in an infinite loop
- [ ] Agent repeatedly calls the same tool
- [ ] Supervisor delegates tasks incorrectly
- [ ] Multiple agents execute duplicate tasks
- [ ] Agent returns incomplete results
- [ ] Agent makes unauthorized tool calls
- [ ] Agent loses execution state
- [ ] Agent crashes during long-running tasks
- [ ] Agent exceeds its token budget
- [ ] Agent communication becomes unreliable
- [ ] One agent produces incorrect output consumed by others
- [ ] Human approval workflow gets stuck
- [ ] Hallucination rate increases
- [ ] Response quality suddenly decreases
- [ ] LLM provider changes model behavior
- [ ] Model starts refusing valid requests
- [ ] Prompt injection bypasses existing controls
- [ ] Sensitive data appears in responses
- [ ] LLM provider rate limits requests
- [ ] Token consumption suddenly increases
- [ ] API response latency increases
- [ ] Model deployment becomes unavailable
- [ ] Incident identification
- [ ] Incident severity classification
- [ ] Incident prioritization
- [ ] Alerting and escalation
- [ ] Incident ownership
- [ ] Containment
- [ ] Root Cause Analysis (RCA)
- [ ] Five Whys analysis
- [ ] Fishbone analysis
- [ ] Incident timeline
- [ ] Impact assessment
- [ ] Remediation
- [ ] Rollback
- [ ] Recovery verification
- [ ] Post-incident review
- [ ] Corrective and preventive actions (CAPA)
- [ ] Postmortem documentation
- [ ] Lessons learned
### Example RCA format

| Field | Example |
|-------|---------|
| Incident | RAG exposed unauthorized documents |
| Root cause | Missing tenant filter |
| Impact | Cross-tenant data exposure |
| Immediate action | Disable affected retrieval endpoint |
| Remediation | Enforce tenant authorization at retrieval |
| Prevention | Add security tests and authorization checks |
| Verification | Run cross-tenant penetration tests |

## Phase 19: AI monitoring, observability and audit logging
**Production operations**

App, AI, security monitoring and audit logs.

- [ ] Request count
- [ ] Error rate
- [ ] API latency
- [ ] Request throughput
- [ ] Concurrent users
- [ ] Service availability
- [ ] CPU and memory usage
- [ ] Database health
- [ ] Queue depth
- [ ] Storage utilization
- [ ] Prompt monitoring
- [ ] Response monitoring
- [ ] Token usage
- [ ] Model latency
- [ ] Model availability
- [ ] Hallucination rate
- [ ] Refusal rate
- [ ] Content moderation violations
- [ ] Prompt injection detection
- [ ] Sensitive data leakage detection
- [ ] Tool invocation monitoring
- [ ] Agent task success
- [ ] RAG retrieval quality
- [ ] Agent execution cost
- [ ] Unauthorized access attempts
- [ ] Authentication failures
- [ ] Authorization failures
- [ ] Suspicious API requests
- [ ] Unusual data access
- [ ] Unusual token consumption
- [ ] Abnormal tool execution
- [ ] Data exfiltration attempts
- [ ] Cross-tenant access attempts
- [ ] Prompt injection attempts
- [ ] Sensitive information exposure
- [ ] Privilege escalation attempts
- [ ] User identity
- [ ] Tenant identity
- [ ] Request ID
- [ ] Agent ID
- [ ] Model ID and version
- [ ] Prompt template version
- [ ] Tool execution details
- [ ] Document IDs accessed
- [ ] Authorization decisions
- [ ] Human approval records
- [ ] Data access events
- [ ] Administrative actions
- [ ] Configuration changes
- [ ] Security events
- [ ] Model deployment changes
- [ ] Azure Application Insights
- [ ] Azure Monitor
- [ ] Microsoft Sentinel
- [ ] Prometheus
- [ ] Grafana
- [ ] OpenTelemetry
- [ ] Langfuse
- [ ] LangSmith
- [ ] Arize Phoenix
- [ ] ELK Stack

> **Must understand:** Do not blindly log raw prompts, retrieved documents, credentials, personal data or model responses. Apply redaction, access restrictions, retention controls and secure logging policies.
## Phase 20: AI testing, security testing and red teaming
**Must master before production**

SAST/DAST, AI-specific tests, red teaming.

- [ ] Static Application Security Testing (SAST)
- [ ] Dynamic Application Security Testing (DAST)
- [ ] Software Composition Analysis (SCA)
- [ ] Dependency vulnerability scanning
- [ ] Container vulnerability scanning
- [ ] API security testing
- [ ] Penetration testing
- [ ] Infrastructure security testing
- [ ] Secrets scanning
- [ ] Configuration security testing
- [ ] Prompt injection testing
- [ ] Jailbreak testing
- [ ] Sensitive data leakage testing
- [ ] System prompt extraction testing
- [ ] Data poisoning testing
- [ ] Retrieval poisoning testing
- [ ] Agent tool abuse testing
- [ ] Unauthorized tool invocation testing
- [ ] Cross-tenant leakage testing
- [ ] Malicious document testing
- [ ] Malicious MCP server testing
- [ ] Agent impersonation testing
- [ ] Output injection testing
- [ ] Unsafe code execution testing
- [ ] What is AI red teaming?
- [ ] AI red team vs traditional penetration testing
- [ ] Threat scenario development
- [ ] Adversarial prompt generation
- [ ] Attack simulation
- [ ] Multi-turn attack simulation
- [ ] Multi-agent attack simulation
- [ ] Tool abuse simulation
- [ ] Data extraction simulation
- [ ] Safety bypass testing
- [ ] Human review of attack results
- [ ] Risk scoring
- [ ] Remediation verification
- [ ] PyRIT
- [ ] Garak
- [ ] Giskard
- [ ] Promptfoo
- [ ] OWASP AI testing guidance
- [ ] MITRE ATLAS
- [ ] Custom Python security test suites
## Phase 21: Third-party AI and supply chain governance
**Enterprise governance**

Vendor risk, DPAs, SBOM, MCP trust.

- [ ] Third-party risk assessment
- [ ] Vendor security assessment
- [ ] Vendor privacy assessment
- [ ] Vendor compliance assessment
- [ ] Model provider assessment
- [ ] Model hosting assessment
- [ ] Data processing agreements (DPA)
- [ ] Subprocessor management
- [ ] Data residency verification
- [ ] Model training data usage policies
- [ ] Provider retention policies
- [ ] Provider deletion policies
- [ ] Model licensing
- [ ] Open-source model licensing
- [ ] Dependency management
- [ ] Software Bill of Materials (SBOM)
- [ ] Software supply chain security
- [ ] Model provenance
- [ ] Model artifact integrity
- [ ] Model registry security
- [ ] MCP server trust assessment
- [ ] External agent trust assessment
- [ ] Vendor incident notification
- [ ] Vendor exit strategy
- [ ] Provider portability
- [ ] Fallback provider planning

> **Production scenario:** Your app uses a third-party LLM provider. Can that provider retain prompts or use them for training? Document contractual assurances and technical verification — not assumptions.
## Phase 22: AI privacy-preserving technologies
**Advanced level**

DP, federated learning, TEEs, synthetic data.

- [ ] Differential privacy
- [ ] Federated learning
- [ ] Secure multiparty computation
- [ ] Homomorphic encryption fundamentals
- [ ] Confidential computing
- [ ] Trusted Execution Environments (TEE)
- [ ] Data anonymization
- [ ] Pseudonymization
- [ ] Synthetic data generation
- [ ] Privacy-preserving analytics
- [ ] Privacy-preserving model evaluation
- [ ] Private information retrieval fundamentals
- [ ] Data minimization
- [ ] Privacy-preserving embeddings
- [ ] Privacy-aware RAG
- [ ] Privacy-aware agent memory
- [ ] Data masking before inference

> **Must understand:** Encryption does not automatically protect information while a model is processing it. Anonymization does not always prevent re-identification. Differential privacy requires an explicit privacy budget.
## Phase 23: AI deployment governance and MLOps / LLMOps
**Enterprise ops**

Approval gates, versioning, canary, rollback.

- [ ] AI development lifecycle
- [ ] AI testing lifecycle
- [ ] AI deployment lifecycle
- [ ] Model approval workflow
- [ ] Prompt approval workflow
- [ ] Agent approval workflow
- [ ] Tool approval workflow
- [ ] Version control
- [ ] Git-based configuration management
- [ ] Prompt versioning
- [ ] Model versioning
- [ ] Dataset versioning
- [ ] Evaluation dataset versioning
- [ ] CI/CD for AI applications
- [ ] Security gates in CI/CD
- [ ] Automated evaluation gates
- [ ] Model deployment approval
- [ ] Canary deployment
- [ ] Blue-green deployment
- [ ] Shadow deployment
- [ ] Rollback strategy
- [ ] Model retirement
- [ ] Agent configuration rollback
- [ ] Continuous compliance monitoring
## Phase 24: Business continuity and disaster recovery
**Enterprise**

RTO/RPO, failover, chaos, drills.

- [ ] Business continuity planning
- [ ] Disaster recovery planning
- [ ] Recovery Time Objective (RTO)
- [ ] Recovery Point Objective (RPO)
- [ ] Database backups
- [ ] Vector index backups
- [ ] Agent state backups
- [ ] Checkpoint persistence
- [ ] Configuration backups
- [ ] Encryption key recovery
- [ ] Model provider failover
- [ ] Multi-region architecture
- [ ] Data replication
- [ ] Disaster recovery testing
- [ ] Chaos engineering
- [ ] Service degradation strategies
- [ ] Provider outage handling
- [ ] Data restoration verification
- [ ] Recovery drills
- [ ] Business continuity documentation

> **Production scenario:** Primary LLM provider unavailable for two hours. Vector DB still works. How do you switch to a fallback provider without exposing user data or losing ongoing agent tasks?
## Phase 25: Enterprise AI governance operations and documentation
**Expert / Enterprise architect**

Make governance operational, not just policy.

- [ ] AI system inventory
- [ ] AI system documentation
- [ ] AI use-case register
- [ ] AI risk register
- [ ] AI impact assessment
- [ ] Data Protection Impact Assessment
- [ ] Data Processing Agreement
- [ ] Data classification policy
- [ ] Data retention policy
- [ ] AI acceptable use policy
- [ ] AI security policy
- [ ] AI privacy policy
- [ ] Responsible AI policy
- [ ] Human oversight policy
- [ ] Model cards
- [ ] Dataset documentation
- [ ] System architecture documentation
- [ ] Threat model documentation
- [ ] Security control documentation
- [ ] Incident response playbooks
- [ ] Audit evidence
- [ ] Change management records
- [ ] Vendor assessment documents
- [ ] AI use-case registration
- [ ] Risk-based classification
- [ ] Approval before development
- [ ] Approval before production
- [ ] Periodic risk review
- [ ] Periodic security review
- [ ] Periodic privacy review
- [ ] Continuous compliance monitoring
- [ ] Human oversight assignment
- [ ] Incident reporting
- [ ] Corrective actions
- [ ] Internal audit
- [ ] External audit preparation
- [ ] AI system retirement approval
- [ ] Number of AI systems registered
- [ ] Percentage of systems risk assessed
- [ ] Percentage of systems security tested
- [ ] Percentage of systems with privacy assessments
- [ ] Number of open AI security issues
- [ ] Number of privacy incidents
- [ ] Number of prompt injection incidents
- [ ] Number of unauthorized tool executions
- [ ] Percentage of models with documented lineage
- [ ] Percentage of AI systems with human oversight
- [ ] Time to remediate critical findings
- [ ] Governance control effectiveness
### Deployment gate checklist

- [ ] Unit and integration tests pass
- [ ] No critical security vulnerabilities remain
- [ ] Retrieval and answer quality meet thresholds
- [ ] Sensitive data leakage tests pass
- [ ] Agent tool permissions verified
- [ ] Governance and deployment approval completed

---

## Important security concepts to distinguish

| Concepts | Difference |
|----------|------------|
| Data privacy vs data security | Protecting personal information vs protecting systems from threats |
| AI governance vs AI security | Accountability and risk vs protecting AI systems |
| AI governance vs data governance | AI lifecycle vs organizational data |
| Authentication vs authorization | Verifying identity vs deciding access |
| RBAC vs ABAC | Roles vs attributes/policies |
| Anonymization vs pseudonymization | Removing links vs replaceable identifiers |
| Encryption vs masking | Cryptographic protection vs hiding values |
| Prompt injection vs jailbreak | Manipulating instructions vs bypassing safety |
| Direct vs indirect prompt injection | User instructions vs embedded external content |
| Model poisoning vs RAG poisoning | Training/fine-tune corruption vs retrieval corruption |
| PII vs confidential information | Individual identifiers vs broader sensitive org data |
| Monitoring vs auditing | Observing behavior vs examining evidence |
| Incident response vs disaster recovery | Handling incidents vs restoring after disruption |
| AI evaluation vs AI governance | Measuring quality vs responsible controlled operation |
| Human-in-the-loop vs human-on-the-loop | Approval in execution vs supervision of automation |

## Production security architecture layers

| Layer | Responsibility |
|-------|----------------|
| API Gateway | Authentication, throttling, request validation |
| Identity Provider | User identity, OAuth, JWT |
| Policy Engine | RBAC, ABAC, authorization decisions |
| Input Security | PII detection, prompt injection detection |
| RAG Security | Document permissions, tenant isolation |
| Agent Security | Tool permissions, delegation restrictions |
| Model Gateway | Model routing, provider policies, usage limits |
| Output Security | PII filtering, content moderation, validation |
| Audit Layer | Immutable or tamper-evident security records |
| Observability | Metrics, logs, traces, alerts |
| Governance Layer | Risk registers, approval, compliance evidence |

> **Principle:** Security must be enforced at every boundary. Do not depend exclusively on the LLM, system prompts, or an agent supervisor.

## Five enterprise projects

1. **Secure Generative AI Gateway** — FastAPI, JWT, PII, prompt injection, routing, output validation, rate limiting, audit
2. **Secure Enterprise RAG** — Multi-tenant, document RBAC, PII masking, vector DB security, citations, deletion workflow
3. **Secure Multi-Agent Platform** — LangGraph, agent identity, tool permissions, MCP/A2A, HITL, memory isolation, audit
4. **AI Governance and Risk Platform** — Inventory, risk classification, impact assessments, model cards, approvals, evidence
5. **AI Security Monitoring and Red Teaming** — Injection tests, leakage detection, agent abuse, OTel, Prometheus/Grafana, incidents

## Recommended learning order

**Level 1 – Security foundations:** InfoSec → Privacy → Threat modeling → GenAI security → RAG security → Agent security → MCP/A2A

**Level 2 – Enterprise application security:** API/infra → Multi-tenant → Governance → Responsible AI → Risk → Frameworks → Legal

**Level 3 – Production reliability:** Data governance → Model governance → Errors → Incidents → Monitoring → Red teaming

**Level 4 – Enterprise AI operations:** Supply chain → Privacy tech → LLMOps → BCP/DR → Governance operations

**Related skills:** see `skills/security/`
