# Machine Learning Mastery

**Algorithms, imbalanced data, validation, MLOps**

---

## Phase 1: Machine Learning fundamentals
**Foundation**

Supervised/unsupervised, bias-variance.

- [ ] What is Machine Learning?
- [ ] AI vs ML vs Deep Learning
- [ ] Supervised learning
- [ ] Unsupervised learning
- [ ] Semi-supervised learning
- [ ] Self-supervised learning
- [ ] Reinforcement learning fundamentals
- [ ] Batch learning
- [ ] Online learning
- [ ] Training data
- [ ] Validation data
- [ ] Test data
- [ ] Features
- [ ] Labels
- [ ] Target variables
- [ ] Model parameters
- [ ] Hyperparameters
- [ ] Inference
- [ ] Generalization
- [ ] Underfitting
- [ ] Overfitting
- [ ] Bias-variance trade-off

## Phase 2: Mathematics for ML
**Foundation**

Linear algebra, probability, calculus.

- [ ] Scalars, vectors and matrices
- [ ] Matrix operations
- [ ] Matrix multiplication
- [ ] Transpose
- [ ] Dot product
- [ ] Vector norms
- [ ] Eigenvalues and eigenvectors
- [ ] Probability fundamentals
- [ ] Conditional probability
- [ ] Bayes' theorem
- [ ] Random variables
- [ ] Probability distributions
- [ ] Mean and median
- [ ] Variance and standard deviation
- [ ] Covariance
- [ ] Correlation
- [ ] Normal distribution
- [ ] Bernoulli distribution
- [ ] Binomial distribution
- [ ] Sampling
- [ ] Hypothesis testing
- [ ] Confidence intervals
- [ ] P-values
- [ ] Derivatives
- [ ] Partial derivatives
- [ ] Chain rule
- [ ] Gradients
- [ ] Partial differentiation
- [ ] Convex and non-convex functions

## Phase 3: Data preprocessing and cleaning
**Core**

Imputation, encoding, scaling.

- [ ] Dataset loading
- [ ] Data inspection
- [ ] Missing values
- [ ] Missing value imputation
- [ ] Mean, median and mode imputation
- [ ] Forward and backward filling
- [ ] Duplicate records
- [ ] Inconsistent data
- [ ] Invalid values
- [ ] Data type conversion
- [ ] Outlier detection
- [ ] IQR method
- [ ] Z-score method
- [ ] Outlier treatment
- [ ] Categorical encoding
- [ ] Label encoding
- [ ] One-hot encoding
- [ ] Ordinal encoding
- [ ] Frequency encoding
- [ ] Target encoding and leakage risks
- [ ] Feature scaling
- [ ] Min-max normalization
- [ ] Standardization
- [ ] Robust scaling
- [ ] Log transformation
- [ ] Power transformation
- [ ] Feature selection
- [ ] Feature extraction
- [ ] Data leakage prevention

## Phase 4: Imbalanced datasets
**Very important**

SMOTE, class weights, stratified CV.

- [ ] What is an imbalanced dataset?
- [ ] Class distribution analysis
- [ ] Minority class
- [ ] Majority class
- [ ] Binary imbalance
- [ ] Multiclass imbalance
- [ ] Extreme class imbalance
- [ ] Why accuracy is misleading
- [ ] Class weights
- [ ] Cost-sensitive learning
- [ ] Random oversampling
- [ ] Random undersampling
- [ ] SMOTE
- [ ] Borderline-SMOTE
- [ ] ADASYN
- [ ] SMOTE-Tomek
- [ ] Tomek links
- [ ] NearMiss
- [ ] Threshold adjustment
- [ ] Precision-recall trade-off
- [ ] Stratified splitting
- [ ] Stratified cross-validation
- [ ] Evaluate minority-class performance
- [ ] Avoid data leakage during resampling

> **Must understand:** Apply oversampling or undersampling only to the training portion of each fold, not to the entire dataset before cross-validation.

## Phase 5: Exploratory Data Analysis (EDA)
**Core**

Distributions, correlations.

- [ ] Univariate analysis
- [ ] Bivariate analysis
- [ ] Multivariate analysis
- [ ] Numerical distribution
- [ ] Categorical distribution
- [ ] Histograms
- [ ] Box plots
- [ ] Scatter plots
- [ ] Correlation matrices
- [ ] Pearson correlation
- [ ] Spearman correlation
- [ ] Multicollinearity
- [ ] Variance inflation factor
- [ ] Class distribution
- [ ] Feature-target relationships
- [ ] Missing value visualization
- [ ] Outlier visualization
- [ ] Feature importance exploration
- [ ] EDA reporting

## Phase 6: Regression algorithms
**Core**

Linear to boosting regressors.

- [ ] What is regression?
- [ ] Independent and dependent variables
- [ ] Simple linear regression
- [ ] Multiple linear regression
- [ ] Polynomial regression
- [ ] Ridge regression
- [ ] Lasso regression
- [ ] Elastic Net regression
- [ ] Decision Tree Regressor
- [ ] Random Forest Regressor
- [ ] Gradient Boosting Regressor
- [ ] XGBoost
- [ ] LightGBM
- [ ] CatBoost
- [ ] Support Vector Regression
- [ ] KNN regression
- [ ] Huber regression
- [ ] Quantile regression
- [ ] Regularization
- [ ] Residual analysis
- [ ] Regression assumptions
- [ ] Multicollinearity
- [ ] Heteroscedasticity
- [ ] Autocorrelation of residuals

## Phase 7: Regression evaluation metrics
**Core**

MAE, RMSE, R².

- [ ] MAE
- [ ] MSE
- [ ] RMSE
- [ ] R-squared
- [ ] Adjusted R-squared
- [ ] MAPE
- [ ] SMAPE
- [ ] Explained variance
- [ ] Residual plots
- [ ] Actual vs predicted plots
- [ ] Cross-validation scores
- [ ] Model error distribution
- [ ] Business-specific error metrics

## Phase 8: Classification algorithms
**Core**

Logistic to boosting classifiers.

- [ ] What is classification?
- [ ] Binary classification
- [ ] Multiclass classification
- [ ] Multilabel classification
- [ ] Logistic regression
- [ ] K-Nearest Neighbors
- [ ] Decision Tree
- [ ] Random Forest
- [ ] Support Vector Machine
- [ ] Naive Bayes
- [ ] Gradient Boosting
- [ ] XGBoost classifier
- [ ] LightGBM classifier
- [ ] CatBoost classifier
- [ ] Neural network classifiers
- [ ] One-vs-Rest
- [ ] One-vs-One
- [ ] Decision boundaries
- [ ] Probability prediction
- [ ] Classification thresholds
- [ ] Probability calibration

## Phase 9: Classification evaluation
**Critical**

Confusion matrix, ROC, PR.

- [ ] Confusion matrix
- [ ] True positive
- [ ] True negative
- [ ] False positive
- [ ] False negative
- [ ] Accuracy
- [ ] Precision
- [ ] Recall
- [ ] Specificity
- [ ] F1-score
- [ ] Macro average
- [ ] Micro average
- [ ] Weighted average
- [ ] ROC curve
- [ ] AUC-ROC
- [ ] Precision-recall curve
- [ ] Average precision
- [ ] Log loss
- [ ] Balanced accuracy
- [ ] Cohen's Kappa
- [ ] Matthews Correlation Coefficient
- [ ] Threshold optimization
- [ ] Cost-sensitive evaluation

## Phase 10: Unsupervised learning
**Core**

Clustering, DR, anomaly detection.

- [ ] What is unsupervised learning?
- [ ] Clustering
- [ ] Dimensionality reduction
- [ ] Association rule learning
- [ ] Anomaly detection
- [ ] K-Means clustering
- [ ] Hierarchical clustering
- [ ] Agglomerative clustering
- [ ] DBSCAN
- [ ] HDBSCAN
- [ ] Gaussian Mixture Models
- [ ] Mean Shift
- [ ] Spectral clustering
- [ ] PCA
- [ ] t-SNE
- [ ] UMAP
- [ ] Apriori algorithm
- [ ] FP-Growth
- [ ] Isolation Forest
- [ ] Local Outlier Factor
- [ ] One-Class SVM

## Phase 11: Unsupervised evaluation
**Core**

Silhouette, ARI, NMI.

- [ ] Elbow method
- [ ] Silhouette score
- [ ] Davies-Bouldin index
- [ ] Calinski-Harabasz index
- [ ] Adjusted Rand Index
- [ ] Normalized Mutual Information
- [ ] Cluster stability
- [ ] Cluster interpretation
- [ ] Dimensionality reduction evaluation
- [ ] Anomaly detection evaluation
- [ ] Reconstruction error
- [ ] Human evaluation of clusters

## Phase 12: Gradient descent and optimization
**Core**

SGD, Adam, clipping.

- [ ] What is optimization?
- [ ] Loss function
- [ ] Cost function
- [ ] Gradient
- [ ] Gradient descent
- [ ] Learning rate
- [ ] Epoch
- [ ] Batch size
- [ ] Iteration
- [ ] Parameter updates
- [ ] Batch gradient descent
- [ ] Stochastic gradient descent
- [ ] Mini-batch gradient descent
- [ ] Momentum
- [ ] Nesterov momentum
- [ ] AdaGrad
- [ ] RMSProp
- [ ] Adam
- [ ] AdamW
- [ ] Learning-rate scheduling
- [ ] Learning-rate warmup
- [ ] Gradient clipping
- [ ] Vanishing gradients
- [ ] Exploding gradients
- [ ] Local minima
- [ ] Saddle points
- [ ] Convergence
- [ ] Early stopping

## Phase 13: Model validation and cross-validation
**Essential**

K-fold, nested CV, leakage prevention.

- [ ] Train, validation and test split
- [ ] Random splitting
- [ ] Stratified splitting
- [ ] K-fold cross-validation
- [ ] Stratified K-fold
- [ ] Repeated K-fold
- [ ] Leave-One-Out
- [ ] Group K-fold
- [ ] Stratified Group K-fold
- [ ] Time-series split
- [ ] Nested cross-validation
- [ ] Cross-validation scoring
- [ ] Leakage prevention
- [ ] Preprocessing inside folds
- [ ] Resampling inside folds
- [ ] Model selection
- [ ] Generalization assessment
- [ ] Final holdout test set
- [ ] Confidence intervals for evaluation

## Phase 14: Hyperparameter tuning
**Core**

Grid/Random/Bayesian, Optuna.

- [ ] Parameters vs hyperparameters
- [ ] Manual tuning
- [ ] Grid Search
- [ ] Random Search
- [ ] Bayesian Optimization
- [ ] Optuna
- [ ] Hyperopt
- [ ] Scikit-learn GridSearchCV
- [ ] Scikit-learn RandomizedSearchCV
- [ ] Optuna pruning
- [ ] Search spaces
- [ ] Conditional hyperparameters
- [ ] Multi-objective optimization
- [ ] Early stopping
- [ ] Tuning with cross-validation
- [ ] Tuning for imbalanced data
- [ ] Overfitting to validation data
- [ ] Experiment tracking

## Phase 15: Scikit-learn pipelines
**Engineering**

Pipeline, ColumnTransformer.

- [ ] Scikit-learn fundamentals
- [ ] Estimators
- [ ] Transformers
- [ ] Predictors
- [ ] fit()
- [ ] transform()
- [ ] fit_transform()
- [ ] predict()
- [ ] predict_proba()
- [ ] Pipeline
- [ ] ColumnTransformer
- [ ] FeatureUnion
- [ ] Custom transformers
- [ ] Preprocessing pipelines
- [ ] Classification pipelines
- [ ] Regression pipelines
- [ ] Imbalanced-learn pipelines
- [ ] Pipeline with cross-validation
- [ ] Pipeline with hyperparameter tuning
- [ ] Pipeline serialization
- [ ] Reproducible training

## Phase 16: Feature engineering and selection
**Core**

SHAP, RFE, SelectKBest.

- [ ] Feature creation
- [ ] Feature transformation
- [ ] Polynomial features
- [ ] Interaction features
- [ ] Date/time features
- [ ] Aggregated features
- [ ] Categorical feature encoding
- [ ] Text feature extraction
- [ ] TF-IDF
- [ ] Feature importance
- [ ] Permutation importance
- [ ] SHAP
- [ ] Recursive Feature Elimination
- [ ] SelectKBest
- [ ] Variance threshold
- [ ] PCA-based feature reduction
- [ ] Feature selection without leakage

## Phase 17: Model interpretation and explainability
**Advanced**

LIME, PDP, bias analysis.

- [ ] Global vs local explanations
- [ ] Feature importance
- [ ] Permutation importance
- [ ] SHAP values
- [ ] LIME
- [ ] Partial Dependence Plots
- [ ] Individual Conditional Expectation
- [ ] Model decision explanations
- [ ] Prediction confidence
- [ ] Probability calibration
- [ ] Explainability limitations
- [ ] Bias analysis

## Phase 18: ML production and MLOps
**Production**

Serving, drift, MLflow.

- [ ] Model serialization
- [ ] Pickle limitations
- [ ] Joblib
- [ ] ONNX
- [ ] Model registry
- [ ] Model versioning
- [ ] Training pipeline
- [ ] Inference pipeline
- [ ] FastAPI model serving
- [ ] Batch inference
- [ ] Real-time inference
- [ ] Model monitoring
- [ ] Data drift
- [ ] Concept drift
- [ ] Prediction drift
- [ ] Model performance monitoring
- [ ] Retraining pipelines
- [ ] A/B testing
- [ ] Shadow deployment
- [ ] Canary deployment
- [ ] Rollback
- [ ] Model governance
- [ ] Reproducibility
- [ ] MLflow
- [ ] Evidently AI
- [ ] Production incident handling

## Phase 19: Advanced ML engineering
**Expert**

Time series, ranking, ensembles.

- [ ] Time-series forecasting
- [ ] ARIMA
- [ ] SARIMA
- [ ] Prophet
- [ ] Gradient boosting for forecasting
- [ ] Anomaly detection
- [ ] Recommendation systems
- [ ] Collaborative filtering
- [ ] Content-based recommendation
- [ ] Matrix factorization
- [ ] Ranking models
- [ ] Learning to rank
- [ ] Semi-supervised learning
- [ ] Active learning
- [ ] Ensemble learning
- [ ] Bagging
- [ ] Boosting
- [ ] Stacking
- [ ] Voting classifiers
- [ ] AutoML
- [ ] Distributed ML
- [ ] Large-scale feature engineering
