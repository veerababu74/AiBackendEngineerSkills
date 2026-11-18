# Pandas Mastery

**Data ingestion, cleaning, transformation, validation, RAG datasets**

---

## Phase 1: Pandas fundamentals
**Foundation**

Series, DataFrame, indexing.

- [ ] What is Pandas?
- [ ] Pandas vs NumPy
- [ ] Series
- [ ] DataFrame
- [ ] Index
- [ ] Columns
- [ ] Rows
- [ ] Data types
- [ ] Installing Pandas
- [ ] Importing Pandas
- [ ] Creating Series
- [ ] Creating DataFrames
- [ ] DataFrame from dictionaries
- [ ] DataFrame from lists
- [ ] DataFrame from NumPy arrays
- [ ] DataFrame attributes
- [ ] Shape and dimensions
- [ ] Indexing fundamentals

## Phase 2: Data ingestion
**Core**

CSV, Excel, JSON, Parquet, SQL, MongoDB, APIs.

- [ ] Read CSV
- [ ] Read Excel
- [ ] Read JSON
- [ ] Read JSON Lines
- [ ] Read Parquet
- [ ] Read SQL tables
- [ ] Read from MongoDB
- [ ] Read from APIs
- [ ] Read compressed files
- [ ] Chunked CSV reading
- [ ] Encoding handling
- [ ] Delimiter handling
- [ ] Header handling
- [ ] Schema inference
- [ ] Loading large datasets

## Phase 3: Data inspection and exploration
**Core**

EDA basics.

- [ ] head()
- [ ] tail()
- [ ] info()
- [ ] describe()
- [ ] shape
- [ ] columns
- [ ] dtypes
- [ ] value_counts()
- [ ] unique()
- [ ] nunique()
- [ ] sample()
- [ ] memory_usage()
- [ ] Data distribution
- [ ] Statistical summaries
- [ ] Exploratory data analysis

## Phase 4: Data selection and manipulation
**Core**

loc/iloc, filtering, columns.

- [ ] Column selection
- [ ] Row selection
- [ ] loc
- [ ] iloc
- [ ] Boolean indexing
- [ ] Conditional filtering
- [ ] Multiple conditions
- [ ] query()
- [ ] isin()
- [ ] between()
- [ ] where()
- [ ] mask()
- [ ] Adding columns
- [ ] Updating columns
- [ ] Removing columns
- [ ] Renaming columns
- [ ] Resetting indexes
- [ ] Setting indexes

## Phase 5: Missing data handling
**Critical**

NaN strategies.

- [ ] What are missing values?
- [ ] NaN
- [ ] None
- [ ] NaT
- [ ] isna()
- [ ] notna()
- [ ] isnull()
- [ ] notnull()
- [ ] dropna()
- [ ] fillna()
- [ ] Mean imputation
- [ ] Median imputation
- [ ] Mode imputation
- [ ] Forward fill
- [ ] Backward fill
- [ ] Interpolation
- [ ] Missing value indicators
- [ ] Missing data analysis
- [ ] Missing value handling by group
- [ ] Missing value handling for time series

## Phase 6: Duplicate and inconsistent data
**Core**

Quality rules.

- [ ] Identify duplicates
- [ ] duplicated()
- [ ] drop_duplicates()
- [ ] Duplicate detection by selected columns
- [ ] Keep first vs last
- [ ] Duplicate business records
- [ ] Case normalization
- [ ] Whitespace removal
- [ ] Standardizing categories
- [ ] Invalid values
- [ ] Inconsistent data types
- [ ] Data cleaning rules
- [ ] Data quality checks

## Phase 7: Data transformation
**Core**

apply, vectorization, encoding prep.

- [ ] apply()
- [ ] map()
- [ ] applymap() legacy API awareness
- [ ] Vectorized operations
- [ ] Lambda functions
- [ ] Custom functions
- [ ] replace()
- [ ] astype()
- [ ] to_numeric()
- [ ] to_datetime()
- [ ] String transformations
- [ ] Date transformations
- [ ] Conditional transformations
- [ ] Binning
- [ ] Discretization
- [ ] Normalization
- [ ] Standardization
- [ ] Feature engineering

## Phase 8: Sorting and ranking
**Core**

sort, rank, Top-N.

- [ ] sort_values()
- [ ] sort_index()
- [ ] Ascending and descending
- [ ] Multi-column sorting
- [ ] rank()
- [ ] nlargest()
- [ ] nsmallest()
- [ ] Top-N records
- [ ] Group-based ranking
- [ ] Tie handling

## Phase 9: Grouping and aggregation
**Core**

groupby, agg, transform.

- [ ] groupby()
- [ ] Group keys
- [ ] Single-column grouping
- [ ] Multi-column grouping
- [ ] agg()
- [ ] transform()
- [ ] filter()
- [ ] apply()
- [ ] Built-in aggregations
- [ ] Custom aggregation
- [ ] Named aggregation
- [ ] Group-wise missing value treatment
- [ ] Group-wise feature engineering
- [ ] Grouped statistics

## Phase 10: Merging and combining datasets
**Core**

merge, join, concat.

- [ ] merge()
- [ ] Inner join
- [ ] Left join
- [ ] Right join
- [ ] Outer join
- [ ] Cross join
- [ ] Join keys
- [ ] Multiple join keys
- [ ] join()
- [ ] concat()
- [ ] Append-style concatenation
- [ ] Index-based joins
- [ ] Duplicate join keys
- [ ] Join validation
- [ ] Data reconciliation

## Phase 11: String and text processing
**RAG-relevant**

Cleaning for NLP/embeddings.

- [ ] String methods
- [ ] .str accessor
- [ ] Lowercase and uppercase
- [ ] Strip whitespace
- [ ] Split and join
- [ ] Replace text
- [ ] Extract patterns
- [ ] Regular expressions
- [ ] Email cleaning
- [ ] Phone number normalization
- [ ] Text standardization
- [ ] Unicode normalization
- [ ] HTML cleanup
- [ ] Text preparation for NLP
- [ ] Text preparation for embeddings

## Phase 12: Date and time processing
**Core**

Time zones, resampling.

- [ ] Datetime fundamentals
- [ ] Timestamp conversion
- [ ] Time zones
- [ ] Time zone localization
- [ ] Time zone conversion
- [ ] Date extraction
- [ ] Time extraction
- [ ] Date arithmetic
- [ ] Time differences
- [ ] Date ranges
- [ ] Resampling
- [ ] Rolling windows
- [ ] Time-based grouping
- [ ] Missing time intervals
- [ ] Time-series cleaning

## Phase 13: Advanced data operations
**Advanced**

Pivot, melt, MultiIndex.

- [ ] Pivot tables
- [ ] pivot()
- [ ] pivot_table()
- [ ] melt()
- [ ] stack()
- [ ] unstack()
- [ ] explode()
- [ ] crosstab()
- [ ] Window operations
- [ ] Rolling calculations
- [ ] Expanding calculations
- [ ] EWM calculations
- [ ] Cumulative operations
- [ ] MultiIndex
- [ ] Hierarchical indexing

## Phase 14: Data validation and quality engineering
**Production**

Pandera, Great Expectations.

- [ ] Schema validation
- [ ] Column validation
- [ ] Data type validation
- [ ] Range validation
- [ ] Null validation
- [ ] Uniqueness validation
- [ ] Referential integrity
- [ ] Business rule validation
- [ ] Outlier detection
- [ ] Statistical anomalies
- [ ] Distribution drift
- [ ] Data freshness
- [ ] Data completeness
- [ ] Data consistency
- [ ] Great Expectations
- [ ] Pandera
- [ ] Pydantic integration
- [ ] Data quality reports

## Phase 15: Pandas performance optimization
**Production**

Vectorization, Arrow, Polars comparison.

- [ ] Vectorization
- [ ] Avoiding Python loops
- [ ] Avoiding unnecessary apply()
- [ ] Efficient data types
- [ ] Category dtype
- [ ] Memory optimization
- [ ] Chunk processing
- [ ] Efficient joins
- [ ] Query optimization
- [ ] Profiling
- [ ] Copy vs view
- [ ] SettingWithCopy considerations
- [ ] Arrow integration
- [ ] Parquet optimization
- [ ] Polars comparison

## Phase 16: Large-scale data processing
**Production**

Chunks, Dask, cloud storage.

- [ ] Large CSV processing
- [ ] Chunk-based ingestion
- [ ] Incremental processing
- [ ] Batch processing
- [ ] Streaming ingestion patterns
- [ ] Out-of-memory problems
- [ ] Data partitioning
- [ ] Parallel processing options
- [ ] Dask fundamentals
- [ ] PyArrow
- [ ] Parquet datasets
- [ ] Cloud object storage
- [ ] Azure Blob Storage integration
- [ ] Google Cloud Storage integration

## Phase 17: Pandas for ML and RAG
**AI**

Eval datasets, metadata prep.

- [ ] Dataset preparation
- [ ] Feature engineering
- [ ] Label encoding
- [ ] One-hot encoding
- [ ] Missing feature handling
- [ ] Imbalanced dataset analysis
- [ ] Outlier treatment
- [ ] Correlation analysis
- [ ] Train/test splitting
- [ ] Data leakage prevention
- [ ] Text dataset preparation
- [ ] Document metadata preparation
- [ ] CSV-to-document transformation
- [ ] Metadata normalization
- [ ] RAG evaluation dataset preparation
- [ ] LLM evaluation dataset analysis

## Phase 18: Production data pipelines
**Expert**

ETL/ELT, lineage, alerts.

- [ ] ETL architecture
- [ ] ELT architecture
- [ ] Data ingestion pipeline
- [ ] Data transformation pipeline
- [ ] Data validation pipeline
- [ ] Incremental loads
- [ ] Idempotent processing
- [ ] Error handling
- [ ] Data lineage
- [ ] Data versioning
- [ ] Pipeline monitoring
- [ ] Data quality alerts
- [ ] Audit records
- [ ] Retry and recovery
- [ ] Production pipeline testing
