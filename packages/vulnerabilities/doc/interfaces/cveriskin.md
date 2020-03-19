[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveRiskIn](cveriskin.md)

# Interface: CveRiskIn

**`export`** 

**`interface`** CveRiskIn

## Hierarchy

* **CveRiskIn**

## Index

### Properties

* [businessRiskId](cveriskin.md#optional-businessriskid)
* [businessRiskText](cveriskin.md#optional-businessrisktext)
* [cve](cveriskin.md#cve)

## Properties

### `Optional` businessRiskId

• **businessRiskId**? : *number*

*Defined in [api.ts:353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L353)*

Business risk ID to be set, obtained by GET method.

**`type`** {number}

**`memberof`** CveRiskIn

___

### `Optional` businessRiskText

• **businessRiskText**? : *string | null*

*Defined in [api.ts:359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L359)*

Complementary text to the business risk.

**`type`** {string}

**`memberof`** CveRiskIn

___

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L347)*

**`type`** {CveOrList}

**`memberof`** CveRiskIn
