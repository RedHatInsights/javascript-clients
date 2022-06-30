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
* [meta](executivereport.md#optional-meta)
* [recent_cves](executivereport.md#recent_cves)
* [rules_by_severity](executivereport.md#rules_by_severity)
* [rules_total](executivereport.md#rules_total)
* [system_count](executivereport.md#system_count)
* [top_cves](executivereport.md#optional-top_cves)
* [top_rules](executivereport.md#optional-top_rules)

## Properties

###  cves_by_severity

• **cves_by_severity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [api.ts:746](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L746)*

**`memberof`** ExecutiveReport

___

###  cves_total

• **cves_total**: *number*

*Defined in [api.ts:752](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L752)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

### `Optional` meta

• **meta**? : *[MetaPermissions](metapermissions.md)*

*Defined in [api.ts:758](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L758)*

**`memberof`** ExecutiveReport

___

###  recent_cves

• **recent_cves**: *[DashboardRecentCves](dashboardrecentcves.md)*

*Defined in [api.ts:764](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L764)*

**`memberof`** ExecutiveReport

___

###  rules_by_severity

• **rules_by_severity**: *[ExecutiveReportRulesBySeverity](executivereportrulesbyseverity.md)*

*Defined in [api.ts:770](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L770)*

**`memberof`** ExecutiveReport

___

###  rules_total

• **rules_total**: *number*

*Defined in [api.ts:776](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L776)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** ExecutiveReport

___

###  system_count

• **system_count**: *number*

*Defined in [api.ts:782](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L782)*

Total number of systems managed by vulnerability application.

**`memberof`** ExecutiveReport

___

### `Optional` top_cves

• **top_cves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [api.ts:788](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L788)*

**`memberof`** ExecutiveReport

___

### `Optional` top_rules

• **top_rules**? : *Array‹[ExecutiveReportTopRules](executivereporttoprules.md)›*

*Defined in [api.ts:794](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L794)*

**`memberof`** ExecutiveReport
