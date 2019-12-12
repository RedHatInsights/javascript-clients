[@redhat-cloud-services/vulnerabilities-client](../README.md) > [CveRiskIn](../interfaces/cveriskin.md)

# Interface: CveRiskIn

*__export__*: 

*__interface__*: CveRiskIn

## Hierarchy

**CveRiskIn**

## Index

### Properties

* [businessRiskId](cveriskin.md#businessriskid)
* [businessRiskText](cveriskin.md#businessrisktext)
* [cve](cveriskin.md#cve)

---

## Properties

<a id="businessriskid"></a>

### `<Optional>` businessRiskId

**● businessRiskId**: *`number`*

*Defined in [api.ts:353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L353)*

Business risk ID to be set, obtained by GET method.

*__type__*: {number}

*__memberof__*: CveRiskIn

___
<a id="businessrisktext"></a>

### `<Optional>` businessRiskText

**● businessRiskText**: *`string` \| `null`*

*Defined in [api.ts:359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L359)*

Complementary text to the business risk.

*__type__*: {string}

*__memberof__*: CveRiskIn

___
<a id="cve"></a>

###  cve

**● cve**: *[CveOrList](cveorlist.md)*

*Defined in [api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L347)*

*__type__*: {CveOrList}

*__memberof__*: CveRiskIn

___

