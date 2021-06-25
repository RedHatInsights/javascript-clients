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

*Defined in [packages/vulnerabilities/git-api/api.ts:671](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L671)*

**`memberof`** ExecutiveReport

___

###  cves_total

• **cves_total**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:665](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L665)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  recent_cves

• **recent_cves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [packages/vulnerabilities/git-api/api.ts:677](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L677)*

**`memberof`** ExecutiveReport

___

###  rules_by_severity

• **rules_by_severity**: *[ExecutiveReportRulesBySeverity](executivereportrulesbyseverity.md)*

*Defined in [packages/vulnerabilities/git-api/api.ts:683](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L683)*

**`memberof`** ExecutiveReport

___

###  rules_total

• **rules_total**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:689](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L689)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  system_count

• **system_count**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:659](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L659)*

Total number of systems managed by vulnerability application.

**`memberof`** ExecutiveReport

___

### `Optional` top_cves

• **top_cves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [packages/vulnerabilities/git-api/api.ts:695](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L695)*

**`memberof`** ExecutiveReport

___

### `Optional` top_rules

• **top_rules**? : *Array‹[ExecutiveReportTopRules](executivereporttoprules.md)›*

*Defined in [packages/vulnerabilities/git-api/api.ts:701](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L701)*

**`memberof`** ExecutiveReport
