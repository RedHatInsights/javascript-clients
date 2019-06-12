[@redhat-cloud-services/catalog-client](../README.md) > [SharePolicy](../interfaces/sharepolicy.md)

# Interface: SharePolicy

*__export__*: 

*__interface__*: SharePolicy

## Hierarchy

**SharePolicy**

## Index

### Properties

* [groupUuids](sharepolicy.md#groupuuids)
* [permissions](sharepolicy.md#permissions)

---

## Properties

<a id="groupuuids"></a>

###  groupUuids

**● groupUuids**: *`Array`<`string`>*

*Defined in [api.ts:904](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L904)*

An array of group UUID's retrieved from the RBAC Service with whom the resource has to be shared.

*__type__*: {Array}

*__memberof__*: SharePolicy

___
<a id="permissions"></a>

###  permissions

**● permissions**: *`Array`<`string`>*

*Defined in [api.ts:898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L898)*

The permissions to apply for this share.

*__type__*: {Array}

*__memberof__*: SharePolicy

___

