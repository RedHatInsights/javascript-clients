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

*Defined in [git-api/api.ts:373](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L373)*

Business risk ID to be set, obtained by GET method.

**`memberof`** CveRiskIn

___

### `Optional` business_risk_text

• **business_risk_text**? : *string | null*

*Defined in [git-api/api.ts:379](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L379)*

Complementary text to the business risk.

**`memberof`** CveRiskIn

___

###  cve

• **cve**: *[CveOrList](../globals.md#cveorlist)*

*Defined in [git-api/api.ts:385](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/git-api/api.ts#L385)*

**`memberof`** CveRiskIn
