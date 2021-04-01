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

*Defined in [packages/vulnerabilities/api.ts:540](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L540)*

**`memberof`** ExecutiveReport

___

###  cves_total

• **cves_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:534](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L534)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  recent_cves

• **recent_cves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [packages/vulnerabilities/api.ts:546](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L546)*

**`memberof`** ExecutiveReport

___

###  rules_by_severity

• **rules_by_severity**: *[ExecutiveReportRulesBySeverity](executivereportrulesbyseverity.md)*

*Defined in [packages/vulnerabilities/api.ts:552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L552)*

**`memberof`** ExecutiveReport

___

###  rules_total

• **rules_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L558)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  system_count

• **system_count**: *number*

*Defined in [packages/vulnerabilities/api.ts:528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L528)*

Total number of systems managed by vulnerability application.

**`memberof`** ExecutiveReport

___

### `Optional` top_cves

• **top_cves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [packages/vulnerabilities/api.ts:564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L564)*

**`memberof`** ExecutiveReport

___

### `Optional` top_rules

• **top_rules**? : *Array‹[ExecutiveReportTopRules](executivereporttoprules.md)›*

*Defined in [packages/vulnerabilities/api.ts:570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L570)*

**`memberof`** ExecutiveReport
