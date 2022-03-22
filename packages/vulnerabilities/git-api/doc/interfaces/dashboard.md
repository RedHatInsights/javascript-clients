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
* [exploited_cves_count](dashboard.md#exploited_cves_count)
* [recent_cves](dashboard.md#recent_cves)
* [recent_rules](dashboard.md#recent_rules)
* [rules_cves_total](dashboard.md#rules_cves_total)
* [system_count](dashboard.md#system_count)

## Properties

###  cves_by_severity

• **cves_by_severity**: *[DashboardCvesBySeverity](dashboardcvesbyseverity.md)*

*Defined in [git-api/api.ts:454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L454)*

**`memberof`** Dashboard

___

###  cves_total

• **cves_total**: *number*

*Defined in [git-api/api.ts:460](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L460)*

Number of unique CVEs discovered on the managed systems.

**`memberof`** Dashboard

___

###  exploited_cves_count

• **exploited_cves_count**: *number*

*Defined in [git-api/api.ts:466](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L466)*

unique number of CVEs having known exploit affecting at least one system

**`memberof`** Dashboard

___

###  recent_cves

• **recent_cves**: *[DashboardRecentCves](dashboardrecentcves.md)*

*Defined in [git-api/api.ts:472](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L472)*

**`memberof`** Dashboard

___

###  recent_rules

• **recent_rules**: *Array‹[DashboardRecentRules](dashboardrecentrules.md)›*

*Defined in [git-api/api.ts:478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L478)*

List of recently (14 days) released security rules.

**`memberof`** Dashboard

___

###  rules_cves_total

• **rules_cves_total**: *number*

*Defined in [git-api/api.ts:484](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L484)*

Total number of CVEs with associated security rules affecting given account.

**`memberof`** Dashboard

___

###  system_count

• **system_count**: *number*

*Defined in [git-api/api.ts:490](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L490)*

Total systems registered to Vulnerability service (with applied filtering).

**`memberof`** Dashboard
