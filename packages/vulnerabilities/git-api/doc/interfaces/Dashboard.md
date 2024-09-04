[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / Dashboard

# Interface: Dashboard

**`Export`**

Dashboard

## Table of contents

### Properties

- [cves\_by\_severity](Dashboard.md#cves_by_severity)
- [cves\_total](Dashboard.md#cves_total)
- [exploited\_cves\_count](Dashboard.md#exploited_cves_count)
- [recent\_cves](Dashboard.md#recent_cves)
- [recent\_rules](Dashboard.md#recent_rules)
- [rules\_cves\_total](Dashboard.md#rules_cves_total)
- [system\_count](Dashboard.md#system_count)

## Properties

### cves\_by\_severity

• **cves\_by\_severity**: [`DashboardCvesBySeverity`](DashboardCvesBySeverity.md)

**`Memberof`**

Dashboard

#### Defined in

[api.ts:530](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L530)

___

### cves\_total

• **cves\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:524](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L524)

___

### exploited\_cves\_count

• **exploited\_cves\_count**: `number`

unique number of CVEs having known exploit affecting at least one system

**`Memberof`**

Dashboard

#### Defined in

[api.ts:560](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L560)

___

### recent\_cves

• **recent\_cves**: [`ExecutiveReportRecentCves`](ExecutiveReportRecentCves.md)

**`Memberof`**

Dashboard

#### Defined in

[api.ts:536](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L536)

___

### recent\_rules

• **recent\_rules**: [`DashboardRecentRules`](DashboardRecentRules.md)[]

List of recently (14 days) released security rules.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:542](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L542)

___

### rules\_cves\_total

• **rules\_cves\_total**: `number`

Total number of CVEs with associated security rules affecting given account.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:548](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L548)

___

### system\_count

• **system\_count**: `number`

Total systems registered to Vulnerability service (with applied filtering).

**`Memberof`**

Dashboard

#### Defined in

[api.ts:554](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L554)
