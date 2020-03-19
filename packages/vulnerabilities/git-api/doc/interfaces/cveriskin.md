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

*Defined in [git-api/api.ts:359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L359)*

Business risk ID to be set, obtained by GET method.

**`type`** {number}

**`memberof`** CveRiskIn

___

### `Optional` businessRiskText

• **businessRiskText**? : *string | null*

*Defined in [git-api/api.ts:365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L365)*

Complementary text to the business risk.

**`type`** {string}

**`memberof`** CveRiskIn

___

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [git-api/api.ts:353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L353)*

**`type`** {CveOrList}

**`memberof`** CveRiskIn
