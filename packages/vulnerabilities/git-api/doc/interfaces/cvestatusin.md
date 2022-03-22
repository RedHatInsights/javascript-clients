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

• **cve**: *[CveOrList](../globals.md#cveorlist)*

*Defined in [git-api/api.ts:398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L398)*

**`memberof`** CveStatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [git-api/api.ts:404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L404)*

Status ID to be set, obtained by GET method.

**`memberof`** CveStatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [git-api/api.ts:410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L410)*

Complementary text to the status.

**`memberof`** CveStatusIn
