[@redhat-cloud-services/vulnerabilities-client](../README.md) > [ExecutiveReportCvesBySeverity](../interfaces/executivereportcvesbyseverity.md)

# Interface: ExecutiveReportCvesBySeverity

Number of CVEs discovered on the managed systems, divided into buckets based on their CVSSv3 score (CVSSv2 is used when CVSSv3 is not available).

*__export__*: 

*__interface__*: ExecutiveReportCvesBySeverity

## Hierarchy

**ExecutiveReportCvesBySeverity**

## Index

### Properties

* [_0to39](executivereportcvesbyseverity.md#_0to39)
* [_4to79](executivereportcvesbyseverity.md#_4to79)
* [_8to10](executivereportcvesbyseverity.md#_8to10)

---

## Properties

<a id="_0to39"></a>

###  _0to39

**● _0to39**: *`number`*

*Defined in [git-api/api.ts:471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L471)*

Number of CVEs with CVSS score lower than 4.

*__type__*: {number}

*__memberof__*: ExecutiveReportCvesBySeverity

___
<a id="_4to79"></a>

###  _4to79

**● _4to79**: *`number`*

*Defined in [git-api/api.ts:477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L477)*

Number of CVEs with CVSS score higher or equal to 4 and lower then 8.

*__type__*: {number}

*__memberof__*: ExecutiveReportCvesBySeverity

___
<a id="_8to10"></a>

###  _8to10

**● _8to10**: *`number`*

*Defined in [git-api/api.ts:483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L483)*

Number of CVEs with CVSS score higher or equal to 8.

*__type__*: {number}

*__memberof__*: ExecutiveReportCvesBySeverity

___

