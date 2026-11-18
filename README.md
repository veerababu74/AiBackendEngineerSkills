# AiBackendEngineerSkills

Interactive **AI / Backend Engineering mastery** curriculum with a browser learning tracker.

Study complete roadmaps and focused skill files for agents, Azure, security, Python backends, RAG, system design, and production AI harnesses — then check off progress as you go.

**Live app:** [https://ai-engineering-mastery.apps.grok.bot](https://ai-engineering-mastery.apps.grok.bot)

---

## What this project is

| Layer | Contents |
|-------|----------|
| **Roadmaps** | 11 end-to-end mastery tracks (modules, scenarios, projects, learning order) |
| **Skills** | 66 separate topic `.md` files you can study independently |
| **Web tracker** | Vite + React app with search, filters, checklists, and `localStorage` progress |

Progress is stored only in your browser. No account or backend is required.

---

## Quick start

```bash
npm install --prefix web
npm run sync-content   # copy roadmaps/skills into the web app
npm run dev            # start the tracker
```

Open the local URL printed by Vite. Use **Open learning tracker**, search/filter the sidebar, and toggle checklist items in any document.

### Useful scripts

| Command | Purpose |
|---------|---------|
| `npm run sync-content` | Sync `roadmaps/` + `skills/` + catalog into `web/public/content/` |
| `npm run dev` | Run the learning tracker (Vite) |
| `npm run build` | Production build of the web app |
| `npm run preview` | Preview the production build |

---

## Repository layout

```
├── roadmaps/                 # Full mastery roadmaps (01–11)
├── skills/                   # Focused skill files by domain
│   ├── agents/
│   ├── agent-harness/
│   ├── azure/
│   ├── backend/
│   ├── cloud/
│   ├── data/
│   ├── frameworks/
│   ├── python/
│   ├── rest-api/
│   ├── security/
│   └── system-design/
├── public/content/           # Catalog + mirrored content
├── web/                      # React + Vite learning tracker
│   ├── public/content/       # Served catalog & markdown
│   └── src/App.tsx           # Tracker UI & progress logic
└── package.json              # Root sync / dev scripts
```

---

## Major roadmaps

| # | Roadmap | File |
|---|---------|------|
| 1 | AI Agents, Agentic AI & Multi-Agent Systems | [`roadmaps/01-ai-agents-agentic-ai-multi-agent.md`](roadmaps/01-ai-agents-agentic-ai-multi-agent.md) |
| 2 | Enterprise AI Security, Governance & Responsible AI | [`roadmaps/02-ai-security-governance-responsible-ai.md`](roadmaps/02-ai-security-governance-responsible-ai.md) |
| 3 | Azure AI Foundry & Google Gemini Agent Platform | [`roadmaps/03-azure-foundry-google-gemini-agent-platform.md`](roadmaps/03-azure-foundry-google-gemini-agent-platform.md) |
| 4 | Python Backend & Distributed Systems | [`roadmaps/04-python-backend-distributed-systems.md`](roadmaps/04-python-backend-distributed-systems.md) |
| 5 | Data Engineering, Vector DBs & Observability | [`roadmaps/05-data-engineering-vector-observability.md`](roadmaps/05-data-engineering-vector-observability.md) |
| 6 | Pydantic, ML, LangChain, LangGraph, ADK, PydanticAI | [`roadmaps/06-pydantic-ml-langchain-langgraph-adk-pydanticai.md`](roadmaps/06-pydantic-ml-langchain-langgraph-adk-pydanticai.md) |
| 7 | REST API Mastery | [`roadmaps/07-rest-api-mastery.md`](roadmaps/07-rest-api-mastery.md) |
| 8 | Python Advanced Mastery | [`roadmaps/08-python-advanced-mastery.md`](roadmaps/08-python-advanced-mastery.md) |
| 9 | System Design HLD & LLD | [`roadmaps/09-system-design-hld-lld.md`](roadmaps/09-system-design-hld-lld.md) |
| 10 | Context, Loop, Harness & Agent Harness | [`roadmaps/10-context-loop-harness-agent-harness.md`](roadmaps/10-context-loop-harness-agent-harness.md) |
| 11 | Azure Cloud for AI & Backend Engineers | [`roadmaps/11-azure-cloud-ai-backend.md`](roadmaps/11-azure-cloud-ai-backend.md) |

---

## Skill domains

### Agents (`skills/agents/`)

- `agent-fundamentals.md` · `reasoning-planning.md` · `design-patterns.md`
- `tools-memory-state.md` · `multi-agent-orchestration.md`

### Agent harness (`skills/agent-harness/`)

- `context-engineering.md` · `loop-engineering.md` · `harness-engineering.md`
- `agent-harness.md` · `end-to-end-projects.md`

### Azure (`skills/azure/`)

- `azure-fundamentals.md` · `entra-id-and-rbac.md` · `storage-account-deep-dive.md`
- `compute-and-hosting.md` · `security-and-key-vault.md` · `networking.md`
- `databases-and-redis.md` · `messaging-and-integration.md` · `api-and-delivery.md`
- `ai-and-ml-services.md` · `monitor-and-ops.md` · `devops-and-iac.md`
- `architecture-and-projects.md`

### Security (`skills/security/`)

- `info-security-privacy.md` · `genai-rag-agent-security.md`
- `governance-responsible-ai.md` · `production-reliability.md`

### Cloud (`skills/cloud/`)

- `microsoft-foundry.md` · `google-gemini-agent-platform.md` · `cross-cloud-ai.md`

### Backend (`skills/backend/`)

- `fastapi.md` · `sqlalchemy.md` · `celery.md` · `redis.md`
- `rabbitmq.md` · `kafka.md` · `azure-service-bus.md` · `distributed-systems.md`

### Data & observability (`skills/data/`)

- `pandas.md` · `mongodb.md` · `azure-ai-search.md`
- `pinecone.md` · `qdrant.md` · `chromadb.md`
- `langsmith.md` · `langfuse.md` · `opentelemetry.md` · `application-insights.md`

### Frameworks (`skills/frameworks/`)

- `pydantic.md` · `machine-learning.md` · `langchain.md`
- `langgraph.md` · `google-adk.md` · `pydanticai.md`

### REST API (`skills/rest-api/`)

- `http-and-rest-fundamentals.md` · `api-design-and-fastapi.md`
- `auth-security-reliability.md` · `scale-observability-genai.md`

### Python (`skills/python/`)

- `object-model-and-data-types.md` · `functions-generators-decorators.md`
- `oop-exceptions-stdlib.md` · `memory-concurrency-genai.md`

### System design (`skills/system-design/`)

- `hld-fundamentals.md` · `distributed-systems.md`
- `lld-patterns.md` · `genai-and-practice.md`

---

## Suggested learning path

1. **Python Advanced** → **REST API** → FastAPI / SQLAlchemy / Redis  
2. **System Design** HLD / LLD fundamentals  
3. **LangChain** → **LangGraph** → agents & orchestration  
4. **Context / Loop / Harness** engineering → build an agent harness  
5. **Vector DBs** + observability (LangSmith, Langfuse, OpenTelemetry)  
6. **Azure** (Storage, Entra ID, Key Vault, App Service, Functions, AI Search, OpenAI)  
7. **Security / governance** and production reliability  

Follow the recommended order inside each roadmap rather than studying every module at once.

---

## Tech stack (tracker)

- React 19 + TypeScript + Vite  
- `react-markdown` + `remark-gfm` for checklist-aware rendering  
- Progress persisted in `localStorage` (`ai-mastery-progress-v1`)  
- Responsive layout with mobile navigation drawer  

---

## Contributing content

1. Add or edit Markdown under `roadmaps/` or `skills/<group>/`.  
2. Register new documents in `public/content/catalog.json`.  
3. Run `npm run sync-content`.  
4. Verify in the tracker with `npm run dev`.  

Checklist items must use GitHub-flavored task syntax:

```md
- [ ] Topic to learn
```

---

## License

Add a license of your choice for this repository. Until one is added, all rights remain with the repository owner.
