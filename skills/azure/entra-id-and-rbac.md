# Microsoft Entra ID and RBAC

**Identity, OAuth, app registrations, managed identity, RBAC**

---

## Phase: Microsoft Entra ID fundamentals
**Critical**

Identity directory building blocks.

- [ ] What is Microsoft Entra ID?
- [ ] Azure AD vs Microsoft Entra ID
- [ ] Tenant architecture
- [ ] Users
- [ ] Groups
- [ ] Guest users
- [ ] External identities
- [ ] Service principals
- [ ] App registrations
- [ ] Enterprise applications
- [ ] Managed identities
- [ ] Workload identities
- [ ] Directory roles
- [ ] Microsoft Entra ID licensing fundamentals

## Phase: Authentication and authorization
**Critical**

OAuth2/OIDC, tokens, Conditional Access, FastAPI integration.

- [ ] Authentication vs authorization
- [ ] Identity vs access
- [ ] OAuth 2.0
- [ ] OpenID Connect (OIDC)
- [ ] SAML
- [ ] JWT
- [ ] Access tokens
- [ ] ID tokens
- [ ] Refresh tokens
- [ ] Claims
- [ ] Scopes
- [ ] Consent
- [ ] Authorization code flow
- [ ] Client credentials flow
- [ ] Device code flow
- [ ] On-behalf-of flow
- [ ] Single sign-on (SSO)
- [ ] Multi-factor authentication (MFA)
- [ ] Conditional Access
- [ ] Passwordless authentication
- [ ] Token expiration and renewal
- [ ] Token validation
- [ ] Token audience and issuer
- [ ] Authenticate FastAPI applications using Entra ID
- [ ] Validate JWT access tokens
- [ ] Implement role-based API authorization
- [ ] Connect Python applications to Azure services
- [ ] Secure service-to-service communication

## Phase: App registrations and service principals
**Critical**

App registration vs enterprise app vs SP vs managed identity.

- [ ] Client ID
- [ ] Tenant ID
- [ ] Client secret
- [ ] Certificates
- [ ] Redirect URIs
- [ ] API permissions
- [ ] Application permissions
- [ ] Delegated permissions
- [ ] Admin consent
- [ ] Secret expiration
- [ ] Certificate authentication
- [ ] Service principal creation
- [ ] Enterprise application configuration
- [ ] Federated credentials
- [ ] Workload identity federation

## Phase: Managed identities
**Critical**

Credential-free access from App Service to Blob and Key Vault.

- [ ] What is managed identity?
- [ ] System-assigned managed identity
- [ ] User-assigned managed identity
- [ ] Managed identity lifecycle
- [ ] Azure Instance Metadata Service (IMDS)
- [ ] Token acquisition
- [ ] Managed identity endpoints
- [ ] Azure Identity SDK
- [ ] DefaultAzureCredential
- [ ] ChainedTokenCredential
- [ ] Credential selection
- [ ] RBAC assignment
- [ ] Cross-resource authentication
- [ ] Managed identity vs service principal
- [ ] Managed identity troubleshooting
- [ ] Configure App Service MI for Blob Storage and Key Vault without storing credentials

## Phase: Azure RBAC and access management
**Critical**

Directory roles ≠ Azure RBAC — they are not interchangeable.

- [ ] Azure RBAC
- [ ] Built-in roles
- [ ] Custom roles
- [ ] Owner
- [ ] Contributor
- [ ] Reader
- [ ] User Access Administrator
- [ ] Role assignment
- [ ] Role definition
- [ ] Security principal
- [ ] Scope
- [ ] Management group scope
- [ ] Subscription scope
- [ ] Resource group scope
- [ ] Resource scope
- [ ] Inherited permissions
- [ ] Least privilege
- [ ] Deny assignments
- [ ] Azure resource locks
- [ ] PIM (Privileged Identity Management)
- [ ] Access reviews
- [ ] Just-in-time access
- [ ] RBAC troubleshooting
- [ ] Entra directory roles vs Azure RBAC distinction
