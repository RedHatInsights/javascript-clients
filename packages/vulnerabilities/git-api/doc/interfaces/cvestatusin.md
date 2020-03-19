[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveStatusIn](cvestatusin.md)

# Interface: CveStatusIn

**`export`** 

**`interface`** CveStatusIn

## Hierarchy

* **CveStatusIn**

## Index

### Properties

* [cve](cvestatusin.md#cve)
* [statusId](cvestatusin.md#optional-statusid)
* [statusText](cvestatusin.md#optional-statustext)

## Properties

###  cve

• **cve**: *[CveOrList](cveorlist.md)*

*Defined in [git-api/api.ts:379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L379)*

**`type`** {CveOrList}

**`memberof`** CveStatusIn

___

### `Optional` statusId

• **statusId**? : *number*

*Defined in [git-api/api.ts:385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L385)*

Status ID to be set, obtained by GET method.

**`type`** {number}

**`memberof`** CveStatusIn

___

### `Optional` statusText

• **statusText**? : *string | null*

*Defined in [git-api/api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L391)*

Complementary text to the status.

**`type`** {string}

**`memberof`** CveStatusIn
