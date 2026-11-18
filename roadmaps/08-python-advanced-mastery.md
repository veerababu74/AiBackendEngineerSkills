# Python – Complete Advanced Learning Roadmap

**Goal:** Master Python from fundamentals to internals for backend and GenAI engineering — not just syntax.

For every important concept cover: what/why, syntax and methods, internal working, complexity, examples, backend/GenAI use cases, mistakes and interview questions.

## Parts overview

| Part | Focus |
|------|--------|
| A | Data types and internal working |
| B | Control flow, loops, comprehensions |
| C | Functions and functional programming |
| D | Object-oriented programming |
| E | Exception handling |
| F | Standard library |
| G | Memory management and internals |
| H | Modules, packages, imports |
| I | Advanced programming |
| J | Concurrency and performance |
| K | Often-missed advanced concepts |
| L | Testing, quality, production, GenAI |

**Related skills:** `skills/python/`

---

## Phase 1: Python fundamentals and object model
**Foundation**

Module 1 checklist.

- [ ] Python architecture and execution flow
- [ ] Source → bytecode → PVM
- [ ] CPython vs PyPy
- [ ] Interpreted vs compiled
- [ ] Dynamic typing and strong typing
- [ ] Variables and object references
- [ ] Objects, identity, type and value
- [ ] id(), type(), is, ==
- [ ] Mutable vs immutable objects
- [ ] Reference counting
- [ ] Garbage collection
- [ ] Namespaces
- [ ] LEGB scope rule
- [ ] global and nonlocal
- [ ] Shallow copy vs deep copy
- [ ] Aliasing and object sharing
- [ ] Interning and object caching
- [ ] Small integer caching
- [ ] String interning
- [ ] None, Ellipsis, NotImplemented
- [ ] Truthy and falsy values
- [ ] Data model and dunder methods
## Phase 2: Strings (str)
**High priority**

Module 2 checklist.

- [ ] Creating strings
- [ ] Quotes and raw/multiline strings
- [ ] Unicode and UTF-8
- [ ] Escape characters
- [ ] Immutability
- [ ] Indexing and slicing
- [ ] Concatenation and repetition
- [ ] Membership and comparison
- [ ] upper/lower/title/capitalize/casefold/swapcase
- [ ] find/rfind/index/rindex/count
- [ ] startswith/endswith/isalnum/isalpha/isdigit/isspace/...
- [ ] replace/strip/removeprefix/removesuffix
- [ ] split/rsplit/splitlines/partition
- [ ] join
- [ ] format/format_map
- [ ] center/ljust/rjust/zfill
- [ ] encode
- [ ] In-memory representation
- [ ] Why strings are immutable
- [ ] String interning
- [ ] Why join() beats repeated +
- [ ] Cleaning input
- [ ] Parsing API responses and logs
- [ ] RAG text preprocessing
- [ ] Normalizing search queries
## Phase 3: Lists (list)
**Core**

Module 3 checklist.

- [ ] Creating lists
- [ ] Indexing/slicing/nested lists
- [ ] List references and unpacking
- [ ] append/extend/insert
- [ ] remove/pop/clear
- [ ] index/count
- [ ] sort/reverse/copy
- [ ] Dynamic arrays and over-allocation
- [ ] Amortized O(1) append
- [ ] Why insert at front is O(n)
- [ ] List comprehension internals
- [ ] API record processing
- [ ] Batch document processing
- [ ] Agent tool result lists
## Phase 4: Tuples (tuple)
**Core**

Module 4 checklist.

- [ ] Creating tuples
- [ ] Single-element tuple
- [ ] Indexing/slicing/unpacking
- [ ] count/index
- [ ] Immutability
- [ ] Tuple vs list
- [ ] Hashing and dict keys
- [ ] namedtuple / NamedTuple
- [ ] Dataclass vs named tuple
- [ ] Fixed-size allocation
- [ ] Immutable tuple containing mutable list
- [ ] Returning multiple values
## Phase 5: Dictionaries (dict)
**Very high priority**

Module 5 checklist.

- [ ] Creating and updating dicts
- [ ] Nested dicts
- [ ] Unpacking and merging
- [ ] Dictionary views and ordering
- [ ] Hashability of keys
- [ ] get/keys/values/items
- [ ] update/pop/popitem/setdefault
- [ ] fromkeys
- [ ] Hash tables and collisions
- [ ] Open addressing
- [ ] Resizing
- [ ] Average O(1) lookup
- [ ] Why mutable keys fail
- [ ] Frequency counting
- [ ] Caching
- [ ] JSON/API transforms
- [ ] Inverted indexes for search
## Phase 6: Sets (set and frozenset)
**Core**

Module 6 checklist.

- [ ] Creating sets
- [ ] Empty set vs empty dict
- [ ] Unique elements
- [ ] add/update/remove/discard/pop
- [ ] union/intersection/difference/symmetric_difference
- [ ] issubset/issuperset/isdisjoint
- [ ] Frozenset
- [ ] Hash-table implementation
- [ ] Average O(1) membership
- [ ] Duplicate detection
- [ ] Permission set comparison
## Phase 7: Numeric types
**Core**

Module 7 checklist.

- [ ] int/float/complex/bool
- [ ] Arbitrary-precision ints
- [ ] IEEE 754 and float errors
- [ ] Decimal and Fraction
- [ ] Bitwise operators
- [ ] bin/oct/hex
- [ ] math/decimal/fractions modules
- [ ] Financial precision
## Phase 8: Conditionals and loops
**Core**

Module 8 checklist.

- [ ] if/elif/else
- [ ] Logical/comparison/identity/membership operators
- [ ] Ternary expressions
- [ ] match-case
- [ ] for/while
- [ ] break/continue/pass
- [ ] Loop else
- [ ] range/enumerate/zip/reversed
- [ ] Iterator protocol
- [ ] iter/next/StopIteration
- [ ] Lazy vs eager iteration
- [ ] Paginated API processing
- [ ] Retry loops
## Phase 9: Comprehensions and generator expressions
**Core**

Module 9 checklist.

- [ ] List comprehension
- [ ] Conditional and nested comprehensions
- [ ] Dict comprehension
- [ ] Set comprehension
- [ ] Generator expressions
- [ ] Lazy evaluation
- [ ] Memory efficiency
- [ ] API response transforms
- [ ] Large dataset cleaning
## Phase 10: Python functions
**Critical**

Module 10 checklist.

- [ ] Defining/calling functions
- [ ] Default/positional/keyword args
- [ ] Positional-only / keyword-only
- [ ] Annotations
- [ ] Docstrings
- [ ] Scope and lifetime
- [ ] Recursion and recursion depth
- [ ] First-class functions
- [ ] Closures
- [ ] Late binding
- [ ] Mutable default argument problem
- [ ] Correct None default pattern
## Phase 11: *args and **kwargs
**Critical**

Module 11 checklist.

- [ ] *args/**kwargs
- [ ] Argument unpacking
- [ ] Combining parameters
- [ ] inspect.signature()
- [ ] Forwarding through wrappers
- [ ] API client wrappers
- [ ] Logging decorators
- [ ] Flexible configuration functions
## Phase 12: Lambda functions
**Core**

Module 12 checklist.

- [ ] Lambda syntax
- [ ] map/filter/sorted/reduce
- [ ] Callbacks
- [ ] When lambda hurts readability
- [ ] Sorting with key=
## Phase 13: Important built-in functions
**Interview critical**

Module 13 checklist.

- [ ] len/range/enumerate/zip/map/filter/iter/next
- [ ] sorted vs sort
- [ ] key/reverse/stable Timsort
- [ ] Type conversion functions
- [ ] isinstance/issubclass/callable/hash
- [ ] abs/round/pow/divmod
- [ ] property/staticmethod/classmethod/super
- [ ] eval/exec dangers with untrusted input

> **Must understand:** Never use eval()/exec() as a substitute for safe input parsing.
## Phase 14: Iterators and generators
**Very high priority**

Module 14 checklist.

- [ ] Iterable vs iterator
- [ ] __iter__/__next__
- [ ] Custom iterators
- [ ] yield vs return
- [ ] Generator expressions
- [ ] yield from / send / throw / close
- [ ] Suspended frames
- [ ] List vs generator memory
- [ ] Streaming 10GB files
- [ ] Chunk pipelines
- [ ] Streaming agent results
## Phase 15: Decorators
**Very high priority**

Module 15 checklist.

- [ ] Decorator fundamentals
- [ ] functools.wraps
- [ ] Parameterized/stacked/async decorators
- [ ] @staticmethod/@classmethod/@property
- [ ] @cache/@lru_cache
- [ ] Logging/timing/auth/retry/rate-limit decorators
- [ ] How FastAPI uses route decorators
## Phase 16: OOP fundamentals
**Critical**

Module 16 checklist.

- [ ] Classes/objects/__init__/__new__
- [ ] Encapsulation
- [ ] Inheritance and MRO
- [ ] Polymorphism and duck typing
- [ ] Abstraction with abc/Protocol
- [ ] Magic methods (__str__/__eq__/__len__/__enter__/...)
## Phase 17: Inheritance vs composition
**Interview design**

Module 17 checklist.

- [ ] IS-A vs HAS-A
- [ ] Tight vs loose coupling
- [ ] Dependency injection
- [ ] Favor composition over inheritance
- [ ] Notification service inheritance then composition redesign
## Phase 18: Advanced OOP
**Advanced**

Module 18 checklist.

- [ ] classmethod/staticmethod
- [ ] Descriptors
- [ ] Metaclasses
- [ ] __slots__
- [ ] Dataclasses
- [ ] Enums
- [ ] Protocols
- [ ] Factory/Strategy/Observer/Adapter/Repository patterns
## Phase 19: Python exceptions
**Critical**

Module 19 checklist.

- [ ] try/except/else/finally
- [ ] raise / raise from
- [ ] Exception hierarchy
- [ ] TypeError/ValueError/KeyError/...
- [ ] Custom exceptions
- [ ] Retryable vs permanent failures
- [ ] FastAPI exception mapping
- [ ] Never leak secrets/stack traces
## Phase 20: functools
**Important**

Module 20 checklist.

- [ ] reduce/partial/wraps
- [ ] lru_cache/cache/cached_property
- [ ] singledispatch
- [ ] total_ordering
- [ ] Memoization
- [ ] cache_info/cache_clear
- [ ] Pure vs impure functions
## Phase 21: Important standard library modules
**Core**

Module 21 checklist.

- [ ] itertools
- [ ] collections
- [ ] operator
- [ ] copy
- [ ] math/statistics/decimal
- [ ] secrets/uuid
- [ ] enum/dataclasses/typing
- [ ] logging/json/re/datetime/pathlib
- [ ] threading/multiprocessing/asyncio/concurrent.futures
## Phase 22: File handling
**Production**

Module 22 checklist.

- [ ] open modes
- [ ] read/write/seek/tell
- [ ] Encoding
- [ ] Chunked reading
- [ ] CSV/JSON
- [ ] pathlib
- [ ] Atomic writes
- [ ] 10GB log processing
- [ ] Safe uploads
## Phase 23: Context managers
**Important**

Module 23 checklist.

- [ ] with / __enter__/__exit__
- [ ] contextlib.contextmanager
- [ ] asynccontextmanager
- [ ] ExitStack
- [ ] DB sessions/transactions
- [ ] Locks
- [ ] Resource cleanup
## Phase 24: Python memory management
**Extremely important**

Module 24 checklist.

- [ ] Stack vs heap
- [ ] Reference counting
- [ ] GC and cycles
- [ ] pymalloc arenas/pools/blocks
- [ ] sys.getsizeof/getrefcount
- [ ] tracemalloc
- [ ] Generators vs lists
- [ ] __slots__
- [ ] Memory leaks in FastAPI

> **Must understand:** Senior interviews often probe GC, circular refs, generators vs lists, and FastAPI memory leaks.
## Phase 25: Python execution and internals
**Senior**

Module 25 checklist.

- [ ] Bytecode and dis
- [ ] Frame objects
- [ ] GIL
- [ ] Import system
- [ ] Descriptor protocol
- [ ] Adaptive interpreter
- [ ] Free-threaded Python / optional GIL
- [ ] CPython vs PyPy
## Phase 26: Imports and packaging
**Core**

Module 26 checklist.

- [ ] Modules/packages
- [ ] absolute/relative imports
- [ ] sys.path/sys.modules
- [ ] Circular imports
- [ ] venv/pip
- [ ] pyproject.toml
- [ ] Poetry/uv
- [ ] Reproducible environments
## Phase 27: Type hints
**Production**

Module 27 checklist.

- [ ] Optional/Union/Literal/Any
- [ ] TypedDict/Protocol/Generic
- [ ] Annotated/Self
- [ ] Mypy/Pyright
- [ ] Type hints in FastAPI and Pydantic
## Phase 28: Copying and serialization
**Critical**

Module 28 checklist.

- [ ] Shallow vs deep copy
- [ ] pickle/json
- [ ] __eq__/__hash__
- [ ] Never unpickle untrusted data

> **Must understand:** Never unpickle data from an untrusted source.
## Phase 29: Regular expressions
**Core**

Module 29 checklist.

- [ ] Character classes/quantifiers/groups
- [ ] lookahead/lookbehind
- [ ] re.match/search/findall/sub
- [ ] Catastrophic backtracking
- [ ] Extracting IDs/emails/log fields
## Phase 30: Advanced data structures
**Core**

Module 30 checklist.

- [ ] Stack/queue/deque/heap
- [ ] Trie/LRU
- [ ] collections.deque/heapq/bisect
- [ ] Choosing structures by complexity
## Phase 31: Algorithms
**Interview**

Module 31 checklist.

- [ ] Big O
- [ ] Binary search
- [ ] Sorting algorithms
- [ ] Two pointers/sliding window
- [ ] BFS/DFS
- [ ] DP fundamentals
## Phase 32: Multithreading
**Advanced**

Module 32 checklist.

- [ ] GIL
- [ ] Race conditions
- [ ] Locks/RLocks/semaphores
- [ ] ThreadPoolExecutor
- [ ] Deadlocks
## Phase 33: Multiprocessing
**Advanced**

Module 33 checklist.

- [ ] Process pools
- [ ] IPC queues/pipes
- [ ] CPU-bound workloads
- [ ] Pickling overhead
## Phase 34: Asynchronous Python
**Critical**

Module 34 checklist.

- [ ] async/await
- [ ] Tasks/gather/TaskGroup
- [ ] Async generators/locks/queues
- [ ] Cancellation/timeouts
- [ ] asyncio.to_thread / run_in_executor
- [ ] When to use async vs threads vs processes
## Phase 35: Performance and profiling
**Production**

Module 35 checklist.

- [ ] timeit/cProfile/tracemalloc
- [ ] Caching
- [ ] Vectorization
- [ ] Avoiding unnecessary copies
- [ ] Regression testing
## Phase 36: Often-missed advanced concepts
**Advanced**

Module 36 checklist.

- [ ] Walrus operator
- [ ] match-case
- [ ] contextvars
- [ ] eval/exec security
- [ ] SOLID
- [ ] Design patterns
## Phase 37: Testing and code quality
**Production**

Module 37 checklist.

- [ ] pytest fixtures/parametrize
- [ ] Mocking
- [ ] Async testing
- [ ] Coverage
- [ ] Ruff/Black/Mypy
- [ ] Pre-commit
## Phase 38: Python production engineering
**Production**

Module 38 checklist.

- [ ] Clean architecture
- [ ] DI
- [ ] Structured logging
- [ ] Retries/timeouts/circuit breakers
- [ ] Graceful shutdown
- [ ] Docker/CI/CD/monitoring
## Phase 39: Python for AI and GenAI engineering
**Critical**

Module 39 checklist.

- [ ] Reusable LLM clients
- [ ] Async concurrent LLM calls
- [ ] Retry/fallback decorators
- [ ] Streaming generators
- [ ] Chunking/embedding pipelines
- [ ] Agent tools
- [ ] Rate limiting
- [ ] Secure API key handling
- [ ] Testing AI integrations

## Final practical projects

1. **Large File Processing Engine** — generators, memory, multiprocessing
2. **Reusable Database Framework** — OOP, composition, context managers, DI
3. **Concurrent API Processing Engine** — asyncio/threads/processes, retries
4. **Python Caching and Task Framework** — functools, decorators, patterns
5. **Production GenAI Backend** — FastAPI, streaming, RAG, failure recovery

## Recommended learning stages

| Stage | Modules | Focus |
|-------|---------|-------|
| 1 | 1–7 | Fundamentals and data structures |
| 2 | 8–9 | Loops and comprehensions |
| 3 | 10–15 | Functions, generators, decorators |
| 4 | 16–18 | OOP and design |
| 5 | 19–23 | Exceptions, stdlib, files, context managers |
| 6 | 24–26 | Memory, internals, imports |
| 7 | 27–31 | Typing, regex, algorithms |
| 8 | 32–35 | Concurrency and performance |
| 9 | 36–38 | Advanced concepts, testing, production |
| 10 | 39 | Python for AI/GenAI |

**Recommendation:** Treat Python as the foundation of AI engineering. Master these before advanced FastAPI, distributed systems, and production agents.
