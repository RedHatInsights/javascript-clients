[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [DashboardCvesBySeverity4to79](dashboardcvesbyseverity4to79.md)

# Interface: DashboardCvesBySeverity4to79

**`export`** 

**`interface`** DashboardCvesBySeverity4to79

## Hierarchy

* **DashboardCvesBySeverity4to79**

## Index

### Properties

* [count](dashboardcvesbyseverity4to79.md#count)
* [known_exploits](dashboardcvesbyseverity4to79.md#optional-known_exploits)
* [percentage](dashboardcvesbyseverity4to79.md#percentage)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L565)*

Number of CVEs with CVSS score higher or equal to 4 and lower then 8.

**`memberof`** DashboardCvesBySeverity4to79

___

### `Optional` known_exploits

• **known_exploits**? : *number*

*Defined in [api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L571)*

Number of CVEs in given bracket with a known exploit.

**`memberof`** DashboardCvesBySeverity4to79

___

###  percentage

• **percentage**: *number*

*Defined in [api.ts:577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L577)*

Percentage of CVEs with CVSS score higher or equal to 4 and lower then 8.

**`memberof`** DashboardCvesBySeverity4to79
