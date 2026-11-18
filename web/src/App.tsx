import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type LiHTMLAttributes,
  type ReactNode,
} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

type CatalogItem = {
  id: string
  kind: 'roadmap' | 'skill'
  group?: string
  title: string
  path: string
}

const STORAGE_KEY = 'ai-mastery-progress-v1'
const TOTALS_KEY = 'ai-mastery-checklist-totals-v1'

function loadProgress(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveProgress(progress: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function loadCachedItems(): Record<string, string[]> {
  try {
    return JSON.parse(localStorage.getItem(TOTALS_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveCachedItems(items: Record<string, string[]>) {
  localStorage.setItem(TOTALS_KEY, JSON.stringify(items))
}

function itemKey(docId: string, text: string) {
  return `${docId}::${text}`
}

function extractChecklistItems(markdown: string): string[] {
  const matches = markdown.match(/^- \[[ xX]\] .+$/gm) ?? []
  return matches.map((line) => line.replace(/^- \[[ xX]\] /, '').trim())
}

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(flattenText).join('')
  if (typeof node === 'object' && node !== null && 'props' in node) {
    const el = node as { props?: { children?: ReactNode } }
    return flattenText(el.props?.children)
  }
  return ''
}

export default function App() {
  const [catalog, setCatalog] = useState<CatalogItem[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress)
  const [docItems, setDocItems] = useState<Record<string, string[]>>(loadCachedItems)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'roadmap' | 'skill'>('all')
  const [started, setStarted] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    fetch('/content/catalog.json')
      .then((r) => {
        if (!r.ok) throw new Error('Could not load catalog')
        return r.json()
      })
      .then((data: CatalogItem[]) => {
        setCatalog(data)
        const firstRoadmap = data.find((d) => d.kind === 'roadmap')
        if (firstRoadmap) setSelectedId(firstRoadmap.id)
      })
      .catch((e: Error) => setError(e.message))
  }, [])

  // Prefetch checklist items for accurate overall progress.
  useEffect(() => {
    if (catalog.length === 0) return
    let cancelled = false

    ;(async () => {
      const next: Record<string, string[]> = { ...loadCachedItems() }
      const missing = catalog.filter((item) => !next[item.id]?.length)
      await Promise.all(
        missing.map(async (item) => {
          try {
            const r = await fetch(`/content/${item.path}`)
            if (!r.ok) return
            const text = await r.text()
            next[item.id] = extractChecklistItems(text)
          } catch {
            // Ignore individual fetch failures; totals update as docs open.
          }
        }),
      )
      if (!cancelled) {
        setDocItems(next)
        saveCachedItems(next)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [catalog])

  const selected = useMemo(
    () => catalog.find((c) => c.id === selectedId) ?? null,
    [catalog, selectedId],
  )

  useEffect(() => {
    if (!selected) return
    setLoading(true)
    setError(null)
    fetch(`/content/${selected.path}`)
      .then((r) => {
        if (!r.ok) throw new Error('Could not load document')
        return r.text()
      })
      .then((text) => {
        setMarkdown(text)
        const items = extractChecklistItems(text)
        setDocItems((prev) => {
          const next = { ...prev, [selected.id]: items }
          saveCachedItems(next)
          return next
        })
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [selected])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return catalog.filter((item) => {
      if (filter !== 'all' && item.kind !== filter) return false
      if (!q) return true
      return (
        item.title.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        (item.group ?? '').toLowerCase().includes(q) ||
        item.path.toLowerCase().includes(q)
      )
    })
  }, [catalog, filter, query])

  const checklistItems = useMemo(
    () => (selected ? docItems[selected.id] ?? extractChecklistItems(markdown) : []),
    [docItems, markdown, selected],
  )

  const docProgress = useMemo(() => {
    if (!selected || checklistItems.length === 0) {
      return { done: 0, total: 0, pct: 0 }
    }
    const done = checklistItems.filter((t) => progress[itemKey(selected.id, t)]).length
    return {
      done,
      total: checklistItems.length,
      pct: Math.round((done / checklistItems.length) * 100),
    }
  }, [checklistItems, progress, selected])

  const overall = useMemo(() => {
    let total = 0
    let done = 0
    for (const [docId, items] of Object.entries(docItems)) {
      total += items.length
      done += items.filter((text) => progress[itemKey(docId, text)]).length
    }
    if (total === 0) return { done: 0, total: 0, pct: 0 }
    return {
      done,
      total,
      pct: Math.round((done / total) * 100),
    }
  }, [docItems, progress])

  function toggleItem(text: string) {
    if (!selected) return
    const key = itemKey(selected.id, text)
    setProgress((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      saveProgress(next)
      return next
    })
  }

  function resetDoc() {
    if (!selected) return
    setProgress((prev) => {
      const next = { ...prev }
      for (const text of checklistItems) {
        delete next[itemKey(selected.id, text)]
      }
      saveProgress(next)
      return next
    })
  }

  if (!started) {
    return (
      <div className="landing">
        <div className="landing-bg" aria-hidden="true" />
        <header className="landing-header">
          <p className="brand">AI Engineering Mastery</p>
          <h1>Roadmaps and skills for enterprise AI systems.</h1>
          <p className="lede">
            Eleven mastery tracks and separate skill files for agents, Azure cloud,
            context & loop engineering, harness design, security, REST APIs,
            advanced Python, system design, and AI frameworks — with a checklist
            tracker you can resume anytime.
          </p>
          <div className="cta-row">
            <button type="button" className="btn primary" onClick={() => setStarted(true)}>
              Open learning tracker
            </button>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className={`app-shell${navOpen ? ' nav-open' : ''}`}>
      <header className="mobile-topbar">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={navOpen}
          aria-controls="sidebar-nav"
          onClick={() => setNavOpen((v) => !v)}
        >
          {navOpen ? 'Close' : 'Menu'}
        </button>
        <div className="mobile-brand">
          <strong>AI Engineering Mastery</strong>
          <small>{overall.pct}% checked</small>
        </div>
      </header>

      {navOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close navigation"
          onClick={() => setNavOpen(false)}
        />
      ) : null}

      <aside className="sidebar" id="sidebar-nav">
        <div className="sidebar-brand">
          <span className="mark" aria-hidden="true" />
          <div>
            <strong>AI Engineering Mastery</strong>
            <small>Learning tracker</small>
          </div>
        </div>

        <div className="overall">
          <div className="overall-row">
            <span>Overall checked items</span>
            <strong>{overall.pct}%</strong>
          </div>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${overall.pct}%` } as CSSProperties} />
          </div>
          <small>
            {overall.done} / {overall.total || '—'} checklist items
          </small>
        </div>

        <div className="filters">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            placeholder="Search roadmaps & skills"
            aria-label="Search roadmaps and skills"
            autoComplete="off"
            spellCheck={false}
          />
          <div className="chips" role="group" aria-label="Filter by type">
            {(['all', 'roadmap', 'skill'] as const).map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? 'chip active' : 'chip'}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <nav className="nav-list" aria-label="Documents">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              className={selectedId === item.id ? 'nav-item active' : 'nav-item'}
              onClick={() => {
                setSelectedId(item.id)
                setNavOpen(false)
              }}
            >
              <span className="kind">{item.kind}</span>
              <span className="title">{item.title}</span>
              {item.group ? <span className="group">{item.group}</span> : null}
            </button>
          ))}
          {filtered.length === 0 ? <p className="empty">No matches.</p> : null}
        </nav>
      </aside>

      <main className="main">
        {error ? <div className="banner error">{error}</div> : null}
        {loading ? <div className="banner">Loading…</div> : null}

        {selected && !loading ? (
          <>
            <div className="doc-head">
              <div>
                <p className="eyebrow">
                  {selected.kind}
                  {selected.group ? ` · ${selected.group}` : ''}
                </p>
                <h1>{selected.title}</h1>
              </div>
              <div className="doc-actions">
                <div className="doc-progress">
                  <strong>{docProgress.pct}%</strong>
                  <span>
                    {docProgress.done}/{docProgress.total} items
                  </span>
                </div>
                <button type="button" className="btn ghost compact" onClick={resetDoc}>
                  Reset this doc
                </button>
              </div>
            </div>

            <article className="markdown">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  li: ({ children, className, ...props }: LiHTMLAttributes<HTMLLIElement>) => {
                    const text = flattenText(children)
                      .replace(/^\[[ xX]\]\s*/, '')
                      .trim()
                    const isTask =
                      (className ?? '').includes('task-list-item') ||
                      checklistItems.includes(text)

                    if (!selected || !isTask || !checklistItems.includes(text)) {
                      return (
                        <li className={className} {...props}>
                          {children}
                        </li>
                      )
                    }

                    const checked = !!progress[itemKey(selected.id, text)]
                    return (
                      <li className={`${className ?? ''} check${checked ? ' done' : ''}`.trim()}>
                        <label>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleItem(text)}
                          />
                          <span>{text}</span>
                        </label>
                      </li>
                    )
                  },
                  input: () => null,
                }}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          </>
        ) : null}
      </main>
    </div>
  )
}
