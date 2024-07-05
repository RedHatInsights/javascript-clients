[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / ExecutiveReport

# Interface: ExecutiveReport

**`Export`**

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

[api.ts:778](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L778)

___

### cves\_total

• **cves\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:772](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L772)

___

### meta

• `Optional` **meta**: [`MetaPermissions`](MetaPermissions.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:814](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L814)

___

### recent\_cves

• **recent\_cves**: [`ExecutiveReportRecentCves`](ExecutiveReportRecentCves.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:784](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L784)

___

### rules\_by\_severity

• **rules\_by\_severity**: [`ExecutiveReportRulesBySeverity`](ExecutiveReportRulesBySeverity.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L790)

___

### rules\_total

• **rules\_total**: `number`

Number of unique CVEs discovered on the managed systems.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L796)

___

### system\_count

• **system\_count**: `number`

Total number of systems managed by vulnerability application.

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:766](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L766)

___

### system\_count\_per\_type

• `Optional` **system\_count\_per\_type**: [`MetaVulnerabilitiesOutAllOfSystemCountPerType`](MetaVulnerabilitiesOutAllOfSystemCountPerType.md)

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:760](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L760)

___

### top\_cves

• `Optional` **top\_cves**: [`ExecutiveReportTopCves`](ExecutiveReportTopCves.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:802](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L802)

___

### top\_rules

• `Optional` **top\_rules**: [`ExecutiveReportTopRules`](ExecutiveReportTopRules.md)[]

**`Memberof`**

ExecutiveReport

#### Defined in

[api.ts:808](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L808)
