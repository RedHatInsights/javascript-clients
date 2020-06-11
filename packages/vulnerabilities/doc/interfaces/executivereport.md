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
* [system_count](executivereport.md#system_count)
* [top_cves](executivereport.md#optional-top_cves)

## Properties

###  cves_by_severity

• **cves_by_severity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [packages/vulnerabilities/api.ts:413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L413)*

**`memberof`** ExecutiveReport

___

###  cves_total

• **cves_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L407)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  recent_cves

• **recent_cves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [packages/vulnerabilities/api.ts:419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L419)*

**`memberof`** ExecutiveReport

___

###  system_count

• **system_count**: *number*

*Defined in [packages/vulnerabilities/api.ts:401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L401)*

Total number of systems managed by vulnerability application.

**`memberof`** ExecutiveReport

___

### `Optional` top_cves

• **top_cves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [packages/vulnerabilities/api.ts:425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L425)*

**`memberof`** ExecutiveReport
