[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [DashboardCvesBySeverityNa](dashboardcvesbyseverityna.md)

# Interface: DashboardCvesBySeverityNa

**`export`** 

**`interface`** DashboardCvesBySeverityNa

## Hierarchy

* **DashboardCvesBySeverityNa**

## Index

### Properties

* [count](dashboardcvesbyseverityna.md#count)
* [known_exploits](dashboardcvesbyseverityna.md#optional-known_exploits)
* [percentage](dashboardcvesbyseverityna.md#percentage)

## Properties

###  count

• **count**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L559)*

Number of CVEs with N/A CVSS score.

**`memberof`** DashboardCvesBySeverityNa

___

### `Optional` known_exploits

• **known_exploits**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L565)*

Number of CVEs in given bracket with a known exploit.

**`memberof`** DashboardCvesBySeverityNa

___

###  percentage

• **percentage**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L571)*

Percentage of CVEs with N/A CVSS score.

**`memberof`** DashboardCvesBySeverityNa
