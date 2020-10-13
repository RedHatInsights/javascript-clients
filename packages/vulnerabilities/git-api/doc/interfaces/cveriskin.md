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

*Defined in [packages/vulnerabilities/git-api/api.ts:337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L337)*

Business risk ID to be set, obtained by GET method.

**`memberof`** CveRiskIn

___

### `Optional` business_risk_text

• **business_risk_text**? : *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L343)*

Complementary text to the business risk.

**`memberof`** CveRiskIn

___

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [packages/vulnerabilities/git-api/api.ts:331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L331)*

**`memberof`** CveRiskIn
