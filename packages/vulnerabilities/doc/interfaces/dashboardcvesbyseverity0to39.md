[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [DashboardCvesBySeverity0to39](dashboardcvesbyseverity0to39.md)

# Interface: DashboardCvesBySeverity0to39

**`export`** 

**`interface`** DashboardCvesBySeverity0to39

## Hierarchy

* **DashboardCvesBySeverity0to39**

## Index

### Properties

* [count](dashboardcvesbyseverity0to39.md#count)
* [known_exploits](dashboardcvesbyseverity0to39.md#optional-known_exploits)
* [percentage](dashboardcvesbyseverity0to39.md#percentage)

## Properties

###  count

• **count**: *number*

*Defined in [api.ts:534](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L534)*

Number of CVEs with CVSS score lower than 4.

**`memberof`** DashboardCvesBySeverity0to39

___

### `Optional` known_exploits

• **known_exploits**? : *number*

*Defined in [api.ts:540](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L540)*

Number of CVEs in given bracket with a known exploit.

**`memberof`** DashboardCvesBySeverity0to39

___

###  percentage

• **percentage**: *number*

*Defined in [api.ts:546](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L546)*

Percentage of CVEs with CVSS score lower than 4.

**`memberof`** DashboardCvesBySeverity0to39
