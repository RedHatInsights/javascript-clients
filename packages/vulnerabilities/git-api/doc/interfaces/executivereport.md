[@redhat-cloud-services/vulnerabilities-client](../README.md) > [ExecutiveReport](../interfaces/executivereport.md)

# Interface: ExecutiveReport

*__export__*: 

*__interface__*: ExecutiveReport

## Hierarchy

**ExecutiveReport**

## Index

### Properties

* [cvesBySeverity](executivereport.md#cvesbyseverity)
* [cvesTotal](executivereport.md#cvestotal)
* [recentCves](executivereport.md#recentcves)
* [systemCount](executivereport.md#systemcount)
* [topCves](executivereport.md#topcves)

---

## Properties

<a id="cvesbyseverity"></a>

###  cvesBySeverity

**● cvesBySeverity**: *[ExecutiveReportCvesBySeverity](executivereportcvesbyseverity.md)*

*Defined in [git-api/api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L445)*

*__type__*: {ExecutiveReportCvesBySeverity}

*__memberof__*: ExecutiveReport

___
<a id="cvestotal"></a>

###  cvesTotal

**● cvesTotal**: *`number`*

*Defined in [git-api/api.ts:439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L439)*

Number of unique CVEs discovered on the managed systems.

*__type__*: {number}

*__memberof__*: ExecutiveReport

___
<a id="recentcves"></a>

###  recentCves

**● recentCves**: *[ExecutiveReportRecentCves](executivereportrecentcves.md)*

*Defined in [git-api/api.ts:451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L451)*

*__type__*: {ExecutiveReportRecentCves}

*__memberof__*: ExecutiveReport

___
<a id="systemcount"></a>

###  systemCount

**● systemCount**: *`number`*

*Defined in [git-api/api.ts:433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L433)*

Total number of systems managed by vulnerability application.

*__type__*: {number}

*__memberof__*: ExecutiveReport

___
<a id="topcves"></a>

### `<Optional>` topCves

**● topCves**: *`Array`<[ExecutiveReportTopCves](executivereporttopcves.md)>*

*Defined in [git-api/api.ts:457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L457)*

*__type__*: {Array}

*__memberof__*: ExecutiveReport

___

