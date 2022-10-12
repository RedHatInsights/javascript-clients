[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / Dashboard

# Interface: Dashboard

**`Export`**

**`Interface`**

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

[api.ts:460](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L460)

___

### cves\_total

• **cves\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L466)

___

### exploited\_cves\_count

• **exploited\_cves\_count**: `number`

unique number of CVEs having known exploit affecting at least one system

**`Memberof`**

Dashboard

#### Defined in

[api.ts:472](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L472)

___

### recent\_cves

• **recent\_cves**: [`DashboardRecentCves`](DashboardRecentCves.md)

**`Memberof`**

Dashboard

#### Defined in

[api.ts:478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L478)

___

### recent\_rules

• **recent\_rules**: [`DashboardRecentRules`](DashboardRecentRules.md)[]

List of recently (14 days) released security rules.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:484](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L484)

___

### rules\_cves\_total

• **rules\_cves\_total**: `number`

Total number of CVEs with associated security rules affecting given account.

**`Memberof`**

Dashboard

#### Defined in

[api.ts:490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L490)

___

### system\_count

• **system\_count**: `number`

Total systems registered to Vulnerability service (with applied filtering).

**`Memberof`**

Dashboard

#### Defined in

[api.ts:496](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L496)
