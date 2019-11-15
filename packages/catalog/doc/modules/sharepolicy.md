[@redhat-cloud-services/catalog-client](../README.md) > [SharePolicy](../modules/sharepolicy.md)

# Module: SharePolicy

*__export__*: 

*__namespace__*: SharePolicy

## Index

### Enumerations

* [PermissionsEnum](../enums/sharepolicy.permissionsenum.md)

### Properties

* [groupUuids](sharepolicy.md#groupuuids)
* [permissions](sharepolicy.md#permissions)

---

## Properties

<a id="groupuuids"></a>

###  groupUuids

**● groupUuids**: *`Array`<`string`>*

*Defined in [api.ts:1087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1087)*

An array of group UUID's retrieved from the RBAC Service with whom the resource has to be shared.

*__type__*: {Array}

*__memberof__*: SharePolicy

___
<a id="permissions"></a>

###  permissions

**● permissions**: *`Array`<[PermissionsEnum](../enums/sharepolicy.permissionsenum.md)>*

*Defined in [api.ts:1081](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1081)*

The permissions to apply for this share. Each permission comprises of 3 parts catalog:portfolios:verb separated by :. The valid verbs are read, update, delete and order

*__type__*: {Array}

*__memberof__*: SharePolicy

___

