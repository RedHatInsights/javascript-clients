[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / ExecutiveReport

# Interface: ExecutiveReport

**`Export`**

**`Interface`**

ExecutiveReport

## Table of contents

### Properties

- [cves\_by\_severity](ExecutiveReport.md#cves_by_severity)
- [cves\_total](ExecutiveReport.md#cves_total)
- [meta](ExecutiveReport.md#meta)
- [recent\_cves](ExecutiveReport.md#recent_cves)
- [rules\_by\_severity](ExecutiveReport.md#rules_by_severity)
- [rules\_total](ExecutiveReport.md#rules_total)
- [system\_count](ExecutiveReport.md#system_count)
- [top\_cves](ExecutiveReport.md#top_cves)
- [top\_rules](ExecutiveReport.md#top_rules)

## Properties

### cves\_by\_severity

• **cves\_by\_severity**: [`ExecutiveReportCvesBySeverity`](ExecutiveReportCvesBySeverity.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L810)

___

### cves\_total

• **cves\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L816)

___

### meta

• `Optional` **meta**: [`MetaPermissions`](MetaPermissions.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L822)

___

### recent\_cves

• **recent\_cves**: [`DashboardRecentCves`](DashboardRecentCves.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L828)

___

### rules\_by\_severity

• **rules\_by\_severity**: [`ExecutiveReportRulesBySeverity`](ExecutiveReportRulesBySeverity.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L834)

___

### rules\_total

• **rules\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L840)

___

### system\_count

• **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L846)

___

### top\_cves

• `Optional` **top\_cves**: [`ExecutiveReportTopCves`](ExecutiveReportTopCves.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:852](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L852)

___

### top\_rules

• `Optional` **top\_rules**: [`ExecutiveReportTopRules`](ExecutiveReportTopRules.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:858](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L858)
