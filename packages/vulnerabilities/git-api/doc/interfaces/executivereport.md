[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [ExecutiveReport](executivereport.md)

# Interface: ExecutiveReport

**`export`** 

**`interface`** ExecutiveReport

## Hierarchy

* **ExecutiveReport**

## Index

### Properties

* [cvesBySeverity](executivereport.md#cvesbyseverity)
* [cvesTotal](executivereport.md#cvestotal)
* [recentCves](executivereport.md#recentcves)
* [systemCount](executivereport.md#systemcount)
* [topCves](executivereport.md#optional-topcves)

## Properties

###  cvesBySeverity

• **cvesBySeverity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [git-api/api.ts:451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L451)*

**`type`** {ExecutiveReportCvesBySeverity}

**`memberof`** ExecutiveReport

___

###  cvesTotal

• **cvesTotal**: *number*

*Defined in [git-api/api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L445)*

Number of unique CVEs discovered on the managed systems.

**`type`** {number}

**`memberof`** ExecutiveReport

___

###  recentCves

• **recentCves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [git-api/api.ts:457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L457)*

**`type`** {ExecutiveReportRecentCves}

**`memberof`** ExecutiveReport

___

###  systemCount

• **systemCount**: *number*

*Defined in [git-api/api.ts:439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L439)*

Total number of systems managed by vulnerability application.

**`type`** {number}

**`memberof`** ExecutiveReport

___

### `Optional` topCves

• **topCves**? : *Array‹[ExecutiveReportTopCves](executivereporttopcves.md)›*

*Defined in [git-api/api.ts:463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L463)*

**`type`** {Array<ExecutiveReportTopCves>}

**`memberof`** ExecutiveReport
