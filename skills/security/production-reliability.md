# AI Production Reliability

**Errors, incidents, monitoring, red team, BCP**

---

## Phase 1: Error handling
**Production-critical**

Classify and respond correctly.

- [ ] LLM 429/quota/timeouts
- [ ] Invalid structured output
- [ ] RAG empty/irrelevant retrieval
- [ ] Agent loops and handoff failures
- [ ] Infra connection failures
- [ ] Retry with backoff and jitter
- [ ] Circuit breaker
- [ ] Fallback model/provider
- [ ] Graceful degradation
- [ ] Dead-letter queues
- [ ] Idempotent processing
- [ ] Safe error messages

> **Must understand:** Never retry every error blindly.

## Phase 2: Incidents and observability
**Senior**

RCA, audit, secure logging.

- [ ] RAG/agent/GenAI incident playbooks
- [ ] Severity classification
- [ ] Containment and remediation
- [ ] RCA / Five Whys / CAPA
- [ ] Postmortems
- [ ] AI-specific monitoring
- [ ] Security monitoring
- [ ] Audit logging
- [ ] PII redaction in logs

## Phase 3: Testing, supply chain, ops
**Must master**

Red team, DR, LLMOps gates.

- [ ] SAST/DAST/SCA
- [ ] Prompt injection and cross-tenant tests
- [ ] AI red teaming (PyRIT, Garak, Promptfoo)
- [ ] Third-party and MCP trust assessment
- [ ] SBOM and supply chain security
- [ ] Deployment approval gates
- [ ] RTO/RPO and provider failover
- [ ] Governance metrics and evidence
