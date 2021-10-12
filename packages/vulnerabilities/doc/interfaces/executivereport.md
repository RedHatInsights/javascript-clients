[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReport](executivereport.md)

# Interface: ExecutiveReport

**`export`** 

**`interface`** ExecutiveReport

## Hierarchy

* **ExecutiveReport**

## Index

### Properties

* [cves_by_severity](executivereport.md#cves_by_severity)
* [cves_total](executivereport.md#cves_total)
* [recent_cves](executivereport.md#recent_cves)
* [rules_by_severity](executivereport.md#rules_by_severity)
* [rules_total](executivereport.md#rules_total)
* [system_count](executivereport.md#system_count)
* [top_cves](executivereport.md#optional-top_cves)
* [top_rules](executivereport.md#optional-top_rules)

## Properties

###  cves_by_severity

• **cves_by_severity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [packages/vulnerabilities/api.ts:684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L684)*

**`memberof`** ExecutiveReport

___

###  cves_total

• **cves_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L690)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  recent_cves

• **recent_cves**: *[DashboardRecentCves](dashboardrecentcves.md)*

*Defined in [packages/vulnerabilities/api.ts:696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L696)*

**`memberof`** ExecutiveReport

___

###  rules_by_severity

• **rules_by_severity**: *[ExecutiveReportRulesBySeverity](executivereportrulesbyseverity.md)*

*Defined in [packages/vulnerabilities/api.ts:702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L702)*

**`memberof`** ExecutiveReport

___

###  rules_total

• **rules_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L708)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  system_count

• **system_count**: *number*

*Defined in [packages/vulnerabilities/api.ts:714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L714)*

Total number of systems managed by vulnerability application.

**`memberof`** ExecutiveReport

___

### `Optional` top_cves

• **top_cves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [packages/vulnerabilities/api.ts:720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L720)*

**`memberof`** ExecutiveReport

___

### `Optional` top_rules

• **top_rules**? : *Array‹[ExecutiveReportTopRules](executivereporttoprules.md)›*

*Defined in [packages/vulnerabilities/api.ts:726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L726)*

**`memberof`** ExecutiveReport
