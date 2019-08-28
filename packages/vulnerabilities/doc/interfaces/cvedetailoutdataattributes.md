[@redhat-cloud-services/vulnerabilities-client](../README.md) > [CveDetailOutDataAttributes](../interfaces/cvedetailoutdataattributes.md)

# Interface: CveDetailOutDataAttributes

*__export__*: 

*__interface__*: CveDetailOutDataAttributes

## Hierarchy

**CveDetailOutDataAttributes**

## Index

### Properties

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

<a id="cvss2metrics"></a>

###  cvss2Metrics

**● cvss2Metrics**: *`string`*

*Defined in [api.ts:163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L163)*

cvss2 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss2score"></a>

###  cvss2Score

**● cvss2Score**: *`string`*

*Defined in [api.ts:169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L169)*

String representation of cvss2 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3metrics"></a>

###  cvss3Metrics

**● cvss3Metrics**: *`string`*

*Defined in [api.ts:175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L175)*

cvss3 metrics of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cvss3score"></a>

###  cvss3Score

**● cvss3Score**: *`string`*

*Defined in [api.ts:181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L181)*

String representation of cvss3 score of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="cwelist"></a>

###  cweList

**● cweList**: *`Array`<`string`>*

*Defined in [api.ts:187](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L187)*

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [api.ts:193](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L193)*

Description of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="erratalist"></a>

###  errataList

**● errataList**: *`Array`<`string`>*

*Defined in [api.ts:199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L199)*

List of Red Hat erratas fixing the CVE.

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="impact"></a>

###  impact

**● impact**: *`string`*

*Defined in [api.ts:211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L211)*

Red Hat security impact of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="modifieddate"></a>

###  modifiedDate

**● modifiedDate**: *`string`*

*Defined in [api.ts:205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L205)*

String representation of ISO-8601 formatted date of last modification of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="packagelist"></a>

###  packageList

**● packageList**: *`Array`<`string`>*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L217)*

List of packages where the fix for the CVE appeared.

*__type__*: {Array}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="publicdate"></a>

###  publicDate

**● publicDate**: *`string`*

*Defined in [api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L223)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="redhaturl"></a>

###  redhatUrl

**● redhatUrl**: *`string`*

*Defined in [api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L229)*

Additional resource about the CVE, provided by Red Hat.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="secondaryurl"></a>

###  secondaryUrl

**● secondaryUrl**: *`string`*

*Defined in [api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L235)*

Additional resources about the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___
<a id="synopsis"></a>

###  synopsis

**● synopsis**: *`string`*

*Defined in [api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L241)*

Synopsis of the CVE.

*__type__*: {string}

*__memberof__*: CveDetailOutDataAttributes

___

