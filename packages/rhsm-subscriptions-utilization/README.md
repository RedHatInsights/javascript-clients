# Javascript client for the RHSM Subscriptions utilization API

TypeScript client for Subscription Watch utilization endpoints (for example org-level notification preferences).

Canonical OpenAPI in rhsm-subscriptions: [swatch-utilization `META-INF/openapi.yaml`](https://github.com/RedHatInsights/rhsm-subscriptions/blob/main/swatch-utilization/src/main/resources/META-INF/openapi.yaml).

This package keeps a self-contained copy in `openapi.yaml` (error responses inlined) because the upstream spec references `spec/error-responses.yaml`, which breaks remote OpenAPI validation and client generation.

## Install

```bash
npm install --save @redhat-cloud-services/rhsm-subscriptions-utilization-client
```

## Usage

Generated endpoints:

- `getOrgPreferences` — `GET /api/rhsm-subscriptions/v1/utilization/org-preferences`
- `updateOrgPreferences` — `POST /api/rhsm-subscriptions/v1/utilization/org-preferences`

### Pre-configured client

```typescript
import RhsmSubscriptionsUtilizationClient from '@redhat-cloud-services/rhsm-subscriptions-utilization-client/api';

const utilizationApi = RhsmSubscriptionsUtilizationClient('https://console.redhat.com');

const preferences = await utilizationApi.getOrgPreferences({ xRhIdentity: identityHeader });
```

On Hybrid Cloud Console, use an empty base path when requests go through the platform proxy:

```typescript
const utilizationApi = RhsmSubscriptionsUtilizationClient('');
```

### Tree-shakeable imports

```typescript
import getOrgPreferences from '@redhat-cloud-services/rhsm-subscriptions-utilization-client/GetOrgPreferences';
import updateOrgPreferences from '@redhat-cloud-services/rhsm-subscriptions-utilization-client/UpdateOrgPreferences';
import type { OrgPreferencesRequest } from '@redhat-cloud-services/rhsm-subscriptions-utilization-client/types';
```

## Generating

```bash
npm run build:generator
nx run @redhat-cloud-services/rhsm-subscriptions-utilization-client:generate
```

## Building

```bash
nx run @redhat-cloud-services/rhsm-subscriptions-utilization-client:build
```
