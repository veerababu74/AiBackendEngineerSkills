# Complete Data Engineering, Vector Databases & AI Observability Mastery Roadmap

**Role path:** Python GenAI Developer → Senior AI / RAG Platform Engineer

## Technologies

| Technology | Modules | Skill file |
|------------|---------|------------|
| Pandas | 18 | `skills/data/pandas.md` |
| MongoDB | 20 | `skills/data/mongodb.md` |
| Azure AI Search | 20 | `skills/data/azure-ai-search.md` |
| Pinecone | 15 | `skills/data/pinecone.md` |
| Qdrant | 15 | `skills/data/qdrant.md` |
| ChromaDB | 12 | `skills/data/chromadb.md` |
| LangSmith | 12 | `skills/data/langsmith.md` |
| Langfuse | 12 | `skills/data/langfuse.md` |
| OpenTelemetry | 15 | `skills/data/opentelemetry.md` |
| Azure Application Insights | 12 | `skills/data/application-insights.md` |

## How they fit together

```
CLIENT → FASTAPI → MongoDB (history) / Redis (cache) / Auth
              ↓
       DOCUMENT INGESTION → PANDAS (clean/validate) → CHUNK → EMBED
              ↓
       VECTOR DB (choose one primary): Azure AI Search | Pinecone | Qdrant | Chroma
              ↓
       RETRIEVAL → RERANK → LLM → ANSWER
              ↓
       OBSERVABILITY: LangSmith / Langfuse + OpenTelemetry + Application Insights
```

## Vector database comparison

| Feature | Azure AI Search | Pinecone | Qdrant | ChromaDB |
|---------|-----------------|----------|--------|----------|
| Deployment | Managed Azure | Managed | Cloud or self-hosted | Local or server |
| Keyword search | Strong | Via hybrid | Sparse/hybrid | Usually external |
| Vector search | Yes | Yes | Yes | Yes |
| Hybrid search | Yes | Yes | Yes | Extra integration |
| Metadata filtering | Yes | Yes | Yes | Yes |
| Azure enterprise fit | Excellent | External | External | External |
| Main strength | Enterprise search/RAG | Managed scale | Filtering flexibility | Rapid local RAG |

## Observability comparison

| Feature | LangSmith | Langfuse | OpenTelemetry | App Insights |
|---------|-----------|----------|---------------|--------------|
| LLM tracing | Yes | Yes | Via instrumentation | Via integrations |
| Agent tracing | Yes | Yes | Generic distributed | Service-level |
| RAG evaluation | Yes | Yes | Not an eval platform | No |
| Prompt management | Yes | Yes | No | No |
| Token/cost | Yes | Yes | Custom | Custom |
| Distributed tracing | Yes | Yes | Core | Yes |
| Infra monitoring | Limited | Limited | Via integrations | Azure Monitor |
| Vendor-neutral | No | No | Yes | No |

> LangSmith/Langfuse = LLM app observability. OpenTelemetry = telemetry standard. Application Insights = Azure APM. They complement each other.

## Five enterprise projects

1. Enterprise Data Processing Platform — Pandas, MongoDB, FastAPI
2. Multi-Vector RAG Benchmarking — Azure AI Search, Pinecone, Qdrant, ChromaDB
3. LLM Observability & Evaluation — LangSmith, Langfuse, OpenTelemetry
4. Enterprise Backend Observability — FastAPI, MongoDB, Redis, OTel, App Insights
5. Complete Production AI Knowledge Platform — all nine technology groups

## Learning sequence

1. Pandas → 2. MongoDB → 3. Azure AI Search (primary enterprise RAG) → 4. ChromaDB → 5. Qdrant → 6. Pinecone → 7. LangSmith → 8. Langfuse → 9. OpenTelemetry → 10. Application Insights → 11. Full integration

**Goal:** Trace a user request from FastAPI through MongoDB and vector retrieval into the LLM and back — identify failures, latency, tokens, retrieval relevance, and cost.

**Related skills:** `skills/data/`
