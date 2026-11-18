# GenAI, RAG & Agent Security

**Injection, RAG authZ, tool permissions, MCP/A2A**

---

## Phase 1: AI threat modeling
**Foundation**

STRIDE, ATLAS, OWASP.

- [ ] AI threat modeling
- [ ] STRIDE
- [ ] Attack trees
- [ ] Trust boundaries
- [ ] Data flow diagrams
- [ ] AI-specific attack surfaces
- [ ] MITRE ATLAS
- [ ] OWASP Top 10 for LLM Applications
- [ ] OWASP Top 10 for Agentic Applications
- [ ] NIST AI RMF

## Phase 2: LLM and Generative AI security
**Critical**

Prompt/model/output attacks.

- [ ] Direct and indirect prompt injection
- [ ] Jailbreaking
- [ ] System prompt extraction
- [ ] Prompt leakage
- [ ] Instruction hierarchy attacks
- [ ] Model extraction/inversion
- [ ] Membership inference
- [ ] Data poisoning
- [ ] Adversarial inputs
- [ ] Sensitive data leakage
- [ ] Unsafe code generation
- [ ] Insecure output handling
- [ ] Input/output validation
- [ ] Content moderation
- [ ] Prompt injection detection
- [ ] Sandboxing
- [ ] Defense in depth

> **Must understand:** A system prompt is not a security boundary. Enforce controls in application code.

## Phase 3: RAG security
**Critical**

Document and vector isolation.

- [ ] Secure document ingestion
- [ ] Document-level RBAC/ABAC
- [ ] Malicious document/poisoning detection
- [ ] Vector DB authN/authZ
- [ ] Tenant/collection/namespace isolation
- [ ] Metadata-based access filtering
- [ ] Permission checks before/after retrieval
- [ ] Citation access validation
- [ ] PII before embedding
- [ ] Cross-tenant retrieval prevention

> **Must understand:** Vector similarity is not authorization.

## Phase 4: Agent and MCP/A2A security
**Advanced**

Tools, memory, protocols.

- [ ] Unauthorized tool invocation
- [ ] Agent privilege escalation
- [ ] Memory poisoning
- [ ] Malicious delegation
- [ ] Tool allowlisting and sandboxing
- [ ] Network egress restrictions
- [ ] Agent identity and trust boundaries
- [ ] MCP auth and tool poisoning defenses
- [ ] A2A identity verification and replay prevention
- [ ] Human oversight
