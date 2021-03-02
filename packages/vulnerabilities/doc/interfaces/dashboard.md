[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [Dashboard](dashboard.md)

# Interface: Dashboard

**`export`** 

**`interface`** Dashboard

## Hierarchy

* **Dashboard**

## Index

### Properties

* [cves_by_severity](dashboard.md#cves_by_severity)
* [cves_total](dashboard.md#cves_total)
* [recent_cves](dashboard.md#recent_cves)
* [recent_rules](dashboard.md#recent_rules)
* [rules_total](dashboard.md#rules_total)
* [system_count](dashboard.md#system_count)

## Properties

###  cves_by_severity

• **cves_by_severity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [packages/vulnerabilities/api.ts:386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L386)*

**`memberof`** Dashboard

___

###  cves_total

• **cves_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L380)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** Dashboard

___

###  recent_cves

• **recent_cves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [packages/vulnerabilities/api.ts:392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L392)*

**`memberof`** Dashboard

___

###  recent_rules

• **recent_rules**: *Array‹[DashboardRecentRules](dashboardrecentrules.md)›*

*Defined in [packages/vulnerabilities/api.ts:398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L398)*

List of recently (14 days) released security rules.

**`memberof`** Dashboard

___

###  rules_total

• **rules_total**: *number*

*Defined in [packages/vulnerabilities/api.ts:404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L404)*

Total number of rules affecting given account.

**`memberof`** Dashboard

___

###  system_count

• **system_count**: *number*

*Defined in [packages/vulnerabilities/api.ts:410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L410)*

Total systems registered to Vulnerability service (with applied filtering).

**`memberof`** Dashboard
