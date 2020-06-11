[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveStatusIn](cvestatusin.md)

# Interface: CveStatusIn

**`export`** 

**`interface`** CveStatusIn

## Hierarchy

* **CveStatusIn**

## Index

### Properties

* [cve](cvestatusin.md#cve)
* [status_id](cvestatusin.md#optional-status_id)
* [status_text](cvestatusin.md#optional-status_text)

## Properties

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [packages/vulnerabilities/api.ts:344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L344)*

**`memberof`** CveStatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/api.ts:350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L350)*

Status ID to be set, obtained by GET method.

**`memberof`** CveStatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/api.ts:356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L356)*

Complementary text to the status.

**`memberof`** CveStatusIn
