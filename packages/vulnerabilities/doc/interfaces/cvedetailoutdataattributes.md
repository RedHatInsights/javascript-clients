[@redhat-cloud-services/vulnerabilities-client](../README.md) > [CveDetailOutDataAttributes](../interfaces/cvedetailoutdataattributes.md)

# Interface: CveDetailOutDataAttributes

*__export__*: 

*__interface__*: CveDetailOutDataAttributes

## Hierarchy

**CveDetailOutDataAttributes**

## Index

### Properties

* [businessRisk](cvedetailoutdataattributes.md#businessrisk)
* [businessRiskId](cvedetailoutdataattributes.md#businessriskid)
* [businessRiskText](cvedetailoutdataattributes.md#businessrisktext)
* [cvss2Metrics](cvedetailoutdataattributes.md#cvss2metrics)
* [cvss2Score](cvedetailoutdataattributes.md#cvss2score)
* [cvss3Metrics](cvedetailoutdataattributes.md#cvss3metrics)
* [cvss3Score](cvedetailoutdataattributes.md#cvss3score)
* [description](cvedetailoutdataattributes.md#description)
* [impact](cvedetailoutdataattributes.md#impact)
* [modifiedDate](cvedetailoutdataattributes.md#modifieddate)
* [publicDate](cvedetailoutdataattributes.md#publicdate)
* [redhatUrl](cvedetailoutdataattributes.md#redhaturl)
* [secondaryUrl](cvedetailoutdataattributes.md#secondaryurl)
* [status](cvedetailoutdataattributes.md#status)
* [statusId](cvedetailoutdataattributes.md#statusid)
* [statusText](cvedetailoutdataattributes.md#statustext)
* [synopsis](cvedetailoutdataattributes.md#synopsis)
* [systemsStatusDetail](cvedetailoutdataattributes.md#systemsstatusdetail)
* [systemsStatusDivergent](cvedetailoutdataattributes.md#systemsstatusdivergent)

---

## Properties

<a id="businessrisk"></a>

###  businessRisk

**● businessRisk**: *`string`*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L217)*

Business risk of the vulnerability.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="businessriskid"></a>

###  businessRiskId

**● businessRiskId**: *`number`*

*Defined in [api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L223)*

Internal ID of the vulnerability business risk.

*__type__*: {number}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="businessrisktext"></a>

###  businessRiskText

**● businessRiskText**: *`string` \| `null`*

*Defined in [api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L229)*

Complementary text to the business risk.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss2metrics"></a>

###  cvss2Metrics

**● cvss2Metrics**: *`string` \| `null`*

*Defined in [api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L235)*

cvss2 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss2score"></a>

###  cvss2Score

**● cvss2Score**: *`string` \| `null`*

*Defined in [api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L241)*

String representation of cvss2 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3metrics"></a>

###  cvss3Metrics

**● cvss3Metrics**: *`string` \| `null`*

*Defined in [api.ts:247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L247)*

cvss3 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3score"></a>

###  cvss3Score

**● cvss3Score**: *`string` \| `null`*

*Defined in [api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L253)*

String representation of cvss3 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L259)*

Description of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="impact"></a>

###  impact

**● impact**: *`string`*

*Defined in [api.ts:271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L271)*

Red Hat security impact of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="modifieddate"></a>

###  modifiedDate

**● modifiedDate**: *`string` \| `null`*

*Defined in [api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L265)*

String representation of ISO-8601 formatted date of last modification of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="publicdate"></a>

###  publicDate

**● publicDate**: *`string` \| `null`*

*Defined in [api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L277)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="redhaturl"></a>

###  redhatUrl

**● redhatUrl**: *`string` \| `null`*

*Defined in [api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L283)*

Additional resource about the CVE, provided by Red Hat.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="secondaryurl"></a>

###  secondaryUrl

**● secondaryUrl**: *`string` \| `null`*

*Defined in [api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L289)*

Additional resources about the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="status"></a>

###  status

**● status**: *`string`*

*Defined in [api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L295)*

Status of the vulnerability.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="statusid"></a>

###  statusId

**● statusId**: *`number`*

*Defined in [api.ts:301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L301)*

Internal ID of the vulnerability status.

*__type__*: {number}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="statustext"></a>

###  statusText

**● statusText**: *`string` \| `null`*

*Defined in [api.ts:307](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L307)*

Complementary text to the status.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="synopsis"></a>

###  synopsis

**● synopsis**: *`string`*

*Defined in [api.ts:313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L313)*

Synopsis of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="systemsstatusdetail"></a>

###  systemsStatusDetail

**● systemsStatusDetail**: *`any`*

*Defined in [api.ts:319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L319)*

Counts of systems with given status type.

*__type__*: {any}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="systemsstatusdivergent"></a>

###  systemsStatusDivergent

**● systemsStatusDivergent**: *`number`*

*Defined in [api.ts:325](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L325)*

How many systems-CVE pairs have different status than CVE-level.

*__type__*: {number}

*__memberof__*: CveDetailOutDataAttributes

___

