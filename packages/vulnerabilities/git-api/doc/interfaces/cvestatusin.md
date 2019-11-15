[@redhat-cloud-services/vulnerabilities-client](../README.md) > [CveStatusIn](../interfaces/cvestatusin.md)

# Interface: CveStatusIn

*__export__*: 

*__interface__*: CveStatusIn

## Hierarchy

**CveStatusIn**

## Index

### Properties

* [cve](cvestatusin.md#cve)
* [statusId](cvestatusin.md#statusid)
* [statusText](cvestatusin.md#statustext)

---

## Properties

<a id="cve"></a>

###  cve

**● cve**: *[CveOrList](cveorlist.md)*

*Defined in [git-api/api.ts:373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L373)*

*__type__*: {CveOrList}

*__memberof__*: CveStatusIn

___
<a id="statusid"></a>

### `<Optional>` statusId

**● statusId**: *`number`*

*Defined in [git-api/api.ts:379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L379)*

Status ID to be set, obtained by GET method.

*__type__*: {number}

*__memberof__*: CveStatusIn

___
<a id="statustext"></a>

### `<Optional>` statusText

**● statusText**: *`string` \| `null`*

*Defined in [git-api/api.ts:385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L385)*

Complementary text to the status.

*__type__*: {string}

*__memberof__*: CveStatusIn

___

