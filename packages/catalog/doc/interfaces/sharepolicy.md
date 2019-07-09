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

*Defined in [api.ts:966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L966)*

An array of group UUID's retrieved from the RBAC Service with whom the resource has to be shared.

*__type__*: {Array}

*__memberof__*: SharePolicy

___
<a id="permissions"></a>

###  permissions

**● permissions**: *`Array`<`string`>*

*Defined in [api.ts:960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L960)*

The permissions to apply for this share. Each permission comprises of 3 parts catalog:portfolios:verb separated by :. The valid verbs are read, write and order

*__type__*: {Array}

*__memberof__*: SharePolicy

___

