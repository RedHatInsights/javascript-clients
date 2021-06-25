[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveRiskIn](cveriskin.md)

# Interface: CveRiskIn

**`export`** 

**`interface`** CveRiskIn

## Hierarchy

* **CveRiskIn**

## Index

### Properties

* [business_risk_id](cveriskin.md#optional-business_risk_id)
* [business_risk_text](cveriskin.md#optional-business_risk_text)
* [cve](cveriskin.md#cve)

## Properties

### `Optional` business_risk_id

• **business_risk_id**? : *number*

*Defined in [packages/vulnerabilities/api.ts:348](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L348)*

Business risk ID to be set, obtained by GET method.

**`memberof`** CveRiskIn

___

### `Optional` business_risk_text

• **business_risk_text**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:354](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L354)*

Complementary text to the business risk.

**`memberof`** CveRiskIn

___

###  cve

• **cve**: *[CveOrList](../globals.md#cveorlist)*

*Defined in [packages/vulnerabilities/api.ts:342](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L342)*

**`memberof`** CveRiskIn
