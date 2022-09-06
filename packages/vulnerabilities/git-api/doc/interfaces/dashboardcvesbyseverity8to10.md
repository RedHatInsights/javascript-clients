[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [DashboardCvesBySeverity8to10](dashboardcvesbyseverity8to10.md)

# Interface: DashboardCvesBySeverity8to10

**`export`** 

**`interface`** DashboardCvesBySeverity8to10

## Hierarchy

* **DashboardCvesBySeverity8to10**

## Index

### Properties

* [count](dashboardcvesbyseverity8to10.md#count)
* [known_exploits](dashboardcvesbyseverity8to10.md#optional-known_exploits)
* [percentage](dashboardcvesbyseverity8to10.md#percentage)

## Properties

###  count

• **count**: *number*

*Defined in [git-api/api.ts:590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L590)*

Number of CVEs with CVSS score higher or equal to 8.

**`memberof`** DashboardCvesBySeverity8to10

___

### `Optional` known_exploits

• **known_exploits**? : *number*

*Defined in [git-api/api.ts:596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L596)*

Number of CVEs in given bracket with a known exploit.

**`memberof`** DashboardCvesBySeverity8to10

___

###  percentage

• **percentage**: *number*

*Defined in [git-api/api.ts:602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L602)*

Percentage of CVEs with CVSS score higher or equal to 8.

**`memberof`** DashboardCvesBySeverity8to10
