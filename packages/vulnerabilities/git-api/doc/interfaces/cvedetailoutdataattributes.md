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
* [cweList](cvedetailoutdataattributes.md#cwelist)
* [description](cvedetailoutdataattributes.md#description)
* [errataList](cvedetailoutdataattributes.md#erratalist)
* [impact](cvedetailoutdataattributes.md#impact)
* [modifiedDate](cvedetailoutdataattributes.md#modifieddate)
* [packageList](cvedetailoutdataattributes.md#packagelist)
* [publicDate](cvedetailoutdataattributes.md#publicdate)
* [redhatUrl](cvedetailoutdataattributes.md#redhaturl)
* [secondaryUrl](cvedetailoutdataattributes.md#secondaryurl)
* [synopsis](cvedetailoutdataattributes.md#synopsis)

---

## Properties

<a id="businessrisk"></a>

###  businessRisk

**● businessRisk**: *`string`*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L217)*

Business risk of the vulnerability.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="businessriskid"></a>

###  businessRiskId

**● businessRiskId**: *`number`*

*Defined in [api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L223)*

Internal ID of the vulnerability business risk.

*__type__*: {number}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="businessrisktext"></a>

###  businessRiskText

**● businessRiskText**: *`string` \| `null`*

*Defined in [api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L229)*

Complementary text to the business risk.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss2metrics"></a>

###  cvss2Metrics

**● cvss2Metrics**: *`string`*

*Defined in [api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L235)*

cvss2 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss2score"></a>

###  cvss2Score

**● cvss2Score**: *`string`*

*Defined in [api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L241)*

String representation of cvss2 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3metrics"></a>

###  cvss3Metrics

**● cvss3Metrics**: *`string`*

*Defined in [api.ts:247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L247)*

cvss3 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3score"></a>

###  cvss3Score

**● cvss3Score**: *`string`*

*Defined in [api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L253)*

String representation of cvss3 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cwelist"></a>

###  cweList

**● cweList**: *`Array`<`string`>*

*Defined in [api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L259)*

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L265)*

Description of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="erratalist"></a>

###  errataList

**● errataList**: *`Array`<`string`>*

*Defined in [api.ts:271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L271)*

List of Red Hat erratas fixing the CVE.

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="impact"></a>

###  impact

**● impact**: *`string`*

*Defined in [api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L283)*

Red Hat security impact of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="modifieddate"></a>

###  modifiedDate

**● modifiedDate**: *`string`*

*Defined in [api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L277)*

String representation of ISO-8601 formatted date of last modification of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="packagelist"></a>

###  packageList

**● packageList**: *`Array`<`string`>*

*Defined in [api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L289)*

List of packages where the fix for the CVE appeared.

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="publicdate"></a>

###  publicDate

**● publicDate**: *`string`*

*Defined in [api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L295)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="redhaturl"></a>

###  redhatUrl

**● redhatUrl**: *`string`*

*Defined in [api.ts:301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L301)*

Additional resource about the CVE, provided by Red Hat.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="secondaryurl"></a>

###  secondaryUrl

**● secondaryUrl**: *`string`*

*Defined in [api.ts:307](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L307)*

Additional resources about the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="synopsis"></a>

###  synopsis

**● synopsis**: *`string`*

*Defined in [api.ts:313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L313)*

Synopsis of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___

