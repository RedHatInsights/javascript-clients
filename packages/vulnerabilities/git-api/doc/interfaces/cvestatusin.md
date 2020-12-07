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

*Defined in [packages/vulnerabilities/git-api/api.ts:355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L355)*

**`memberof`** CveStatusIn

___

### `Optional` status_id

• **status_id**? : *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L361)*

Status ID to be set, obtained by GET method.

**`memberof`** CveStatusIn

___

### `Optional` status_text

• **status_text**? : *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L367)*

Complementary text to the status.

**`memberof`** CveStatusIn
