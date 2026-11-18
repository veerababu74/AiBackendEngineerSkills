# API Design and FastAPI Implementation

**Design standards + FastAPI architecture**

---

## Phase 1: API design principles
**Critical**

- [ ] Resource naming conventions
- [ ] Nouns vs verbs
- [ ] Singular vs plural
- [ ] Nested resources
- [ ] URI design
- [ ] Filtering
- [ ] Sorting
- [ ] Searching
- [ ] Offset pagination
- [ ] Cursor-based pagination
- [ ] Sparse fieldsets
- [ ] Bulk/batch APIs
- [ ] Consistent JSON responses
- [ ] API contracts

### Example
```
GET/POST /api/v1/employees
GET/PUT/PATCH/DELETE /api/v1/employees/{id}
```

## Phase 2: FastAPI fundamentals
**Critical**

- [ ] FastAPI architecture
- [ ] ASGI vs WSGI
- [ ] Uvicorn and Gunicorn
- [ ] Routers
- [ ] Path operations
- [ ] Path/query/body params
- [ ] Response models
- [ ] Dependency injection
- [ ] Middleware
- [ ] Background tasks
- [ ] Lifespan events

## Phase 3: Project architecture
**Production**

- [ ] Controller/service/repository
- [ ] Router separation
- [ ] Business logic separation
- [ ] Config/settings
- [ ] Environment variables
- [ ] Application factory
- [ ] app/ package structure

## Phase 4: Request/response validation
**Critical**

- [ ] Pydantic request/response models
- [ ] Field and model validators
- [ ] Nested models
- [ ] Enums
- [ ] Partial update schemas
- [ ] Serialization
- [ ] Request size validation
- [ ] File upload validation
