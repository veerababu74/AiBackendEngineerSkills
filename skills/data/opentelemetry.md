# OpenTelemetry Mastery

**Vendor-neutral traces, metrics, logs across FastAPI and AI stacks**

---

## Phase 1: Observability fundamentals
**Foundation**

Logs, metrics, traces, SLOs.

- [ ] What is observability?
- [ ] Monitoring vs observability
- [ ] Logs
- [ ] Metrics
- [ ] Traces
- [ ] Distributed tracing
- [ ] Events
- [ ] Telemetry
- [ ] Instrumentation
- [ ] Correlation IDs
- [ ] Request IDs
- [ ] Trace IDs
- [ ] Span IDs
- [ ] Context propagation
- [ ] Service maps
- [ ] SLI, SLO and SLA

## Phase 2: OpenTelemetry fundamentals
**Foundation**

API, SDK, Collector.

- [ ] What is OpenTelemetry?
- [ ] OpenTelemetry architecture
- [ ] OpenTelemetry API
- [ ] OpenTelemetry SDK
- [ ] OpenTelemetry Collector
- [ ] Receivers
- [ ] Processors
- [ ] Exporters
- [ ] Instrumentation libraries
- [ ] Semantic conventions
- [ ] Resource attributes
- [ ] Attributes
- [ ] Events
- [ ] Status codes
- [ ] Sampling
- [ ] Context propagation

## Phase 3: Distributed tracing
**Critical**

W3C Trace Context, sampling.

- [ ] Trace fundamentals
- [ ] Span fundamentals
- [ ] Parent spans
- [ ] Child spans
- [ ] Root spans
- [ ] Nested spans
- [ ] Span attributes
- [ ] Span events
- [ ] Span status
- [ ] Trace context
- [ ] W3C Trace Context
- [ ] traceparent
- [ ] tracestate
- [ ] Baggage
- [ ] Cross-service tracing
- [ ] Trace sampling
- [ ] Head-based sampling
- [ ] Tail-based sampling
- [ ] Trace propagation across async tasks

## Phase 4: Python instrumentation
**Engineering**

TracerProvider, meters.

- [ ] OpenTelemetry Python API
- [ ] OpenTelemetry SDK
- [ ] TracerProvider
- [ ] MeterProvider
- [ ] LoggerProvider
- [ ] Tracer
- [ ] Meter
- [ ] Span
- [ ] Counter
- [ ] Histogram
- [ ] UpDownCounter
- [ ] Observable instruments
- [ ] Manual instrumentation
- [ ] Automatic instrumentation
- [ ] Resource configuration
- [ ] Environment-based configuration
- [ ] BatchSpanProcessor
- [ ] SimpleSpanProcessor
- [ ] Exporter configuration

## Phase 5: FastAPI and backend instrumentation
**Production**

HTTPX, SQLAlchemy, Celery, Kafka.

- [ ] FastAPI automatic instrumentation
- [ ] HTTPX instrumentation
- [ ] Requests instrumentation
- [ ] SQLAlchemy instrumentation
- [ ] PostgreSQL instrumentation
- [ ] MongoDB instrumentation
- [ ] Redis instrumentation
- [ ] Celery instrumentation
- [ ] Kafka instrumentation
- [ ] RabbitMQ instrumentation options
- [ ] Database span attributes
- [ ] HTTP status tracking
- [ ] Request duration
- [ ] Exception tracking
- [ ] Custom middleware
- [ ] Custom business spans

## Phase 6: Metrics
**Core**

RED/USE signals.

- [ ] Counter
- [ ] Histogram
- [ ] Gauge concepts
- [ ] UpDownCounter
- [ ] Request count
- [ ] Request duration
- [ ] Error rate
- [ ] Throughput
- [ ] Database latency
- [ ] Queue depth
- [ ] Queue processing time
- [ ] Worker utilization
- [ ] CPU metrics
- [ ] Memory metrics
- [ ] Custom business metrics
- [ ] Metric aggregation
- [ ] Metric temporality
- [ ] Cardinality control

## Phase 7: Logs
**Core**

Structured logs + trace correlation.

- [ ] Python logging integration
- [ ] Structured logging
- [ ] JSON logging
- [ ] Trace ID in logs
- [ ] Span ID in logs
- [ ] Log correlation
- [ ] Log levels
- [ ] Exception logging
- [ ] Contextual logging
- [ ] Sensitive data redaction
- [ ] Log export
- [ ] Log sampling
- [ ] Log retention
- [ ] Centralized log collection

## Phase 8: OpenTelemetry Collector
**Production**

Pipelines, processors, exporters.

- [ ] Collector architecture
- [ ] Agent vs gateway deployment
- [ ] OTLP receiver
- [ ] OTLP gRPC
- [ ] OTLP HTTP
- [ ] Prometheus receiver
- [ ] Filelog receiver
- [ ] Batch processor
- [ ] Memory limiter
- [ ] Attributes processor
- [ ] Filter processor
- [ ] Resource processor
- [ ] Tail sampling processor
- [ ] Routing processor
- [ ] OTLP exporter
- [ ] Prometheus exporter
- [ ] Multiple exporters
- [ ] Collector pipelines
- [ ] Collector health monitoring

## Phase 9: Exporters and integrations
**Production**

Jaeger, Tempo, Azure Monitor, Langfuse.

- [ ] Console exporter
- [ ] OTLP exporter
- [ ] Jaeger integration
- [ ] Zipkin integration
- [ ] Prometheus integration
- [ ] Grafana Tempo
- [ ] Grafana Loki
- [ ] Azure Monitor integration
- [ ] Application Insights integration
- [ ] Langfuse integration
- [ ] LangSmith integration concepts
- [ ] Cloud-native observability integrations

## Phase 10: Production distributed tracing
**Expert**

Async/message propagation, cost.

- [ ] Cross-service tracing
- [ ] Async task tracing
- [ ] Message correlation
- [ ] Kafka trace propagation
- [ ] Celery trace propagation
- [ ] HTTP trace propagation
- [ ] Database trace correlation
- [ ] Trace sampling strategy
- [ ] High-volume telemetry
- [ ] Collector scaling
- [ ] Trace storage
- [ ] Trace retention
- [ ] Trace security
- [ ] PII redaction
- [ ] Telemetry cost optimization

## Phase 11: Observability and reliability engineering
**Expert**

Golden signals, error budgets.

- [ ] Golden signals
- [ ] Latency
- [ ] Traffic
- [ ] Errors
- [ ] Saturation
- [ ] RED method
- [ ] USE method
- [ ] Error budgets
- [ ] SLO monitoring
- [ ] Alert thresholds
- [ ] Anomaly detection
- [ ] Incident correlation
- [ ] Root cause analysis
- [ ] Dependency mapping
- [ ] Production dashboards

## Phase 12: Advanced OpenTelemetry
**Expert**

K8s, multi-tenant, eBPF concepts.

- [ ] Custom semantic conventions
- [ ] Custom instrumentation libraries
- [ ] Multi-cloud telemetry
- [ ] Kubernetes instrumentation
- [ ] Service mesh telemetry
- [ ] OpenTelemetry Operator
- [ ] eBPF-based observability concepts
- [ ] Tail-based sampling optimization
- [ ] High-cardinality control
- [ ] Telemetry pipeline security
- [ ] Multi-tenant observability
- [ ] Disaster recovery for telemetry
- [ ] Observability platform architecture
- [ ] Production troubleshooting
- [ ] Enterprise observability design
