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
- [system\_count\_per\_type](ExecutiveReport.md#system_count_per_type)
- [top\_cves](ExecutiveReport.md#top_cves)
- [top\_rules](ExecutiveReport.md#top_rules)

## Properties

### cves\_by\_severity

• **cves\_by\_severity**: [`ExecutiveReportCvesBySeverity`](ExecutiveReportCvesBySeverity.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L785)

___

### cves\_total

• **cves\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L791)

___

### meta

• `Optional` **meta**: [`MetaPermissions`](MetaPermissions.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L797)

___

### recent\_cves

• **recent\_cves**: [`DashboardRecentCves`](DashboardRecentCves.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L803)

___

### rules\_by\_severity

• **rules\_by\_severity**: [`ExecutiveReportRulesBySeverity`](ExecutiveReportRulesBySeverity.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L809)

___

### rules\_total

• **rules\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L815)

___

### system\_count

• **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L821)

___

### system\_count\_per\_type

• `Optional` **system\_count\_per\_type**: [`ExecutiveReportSystemCountPerType`](ExecutiveReportSystemCountPerType.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L827)

___

### top\_cves

• `Optional` **top\_cves**: [`ExecutiveReportTopCves`](ExecutiveReportTopCves.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L833)

___

### top\_rules

• `Optional` **top\_rules**: [`ExecutiveReportTopRules`](ExecutiveReportTopRules.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L839)
