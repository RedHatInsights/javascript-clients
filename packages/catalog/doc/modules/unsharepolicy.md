[@redhat-cloud-services/catalog-client](../README.md) > [UnsharePolicy](../modules/unsharepolicy.md)

# Module: UnsharePolicy

*__export__*: 

*__namespace__*: UnsharePolicy

## Index

### Enumerations

* [PermissionsEnum](../enums/unsharepolicy.permissionsenum.md)

### Properties

* [groupUuids](unsharepolicy.md#groupuuids)
* [permissions](unsharepolicy.md#permissions)

---

## Properties

<a id="groupuuids"></a>

### `<Optional>` groupUuids

**● groupUuids**: *`Array`<`string`>*

*Defined in [api.ts:1262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1262)*

An array of group UUID's retrieved from the RBAC Service from which the permissions have to be removed. If group uuids are not specified we will unshare it from all groups.

*__type__*: {Array}

*__memberof__*: UnsharePolicy

___
<a id="permissions"></a>

###  permissions

**● permissions**: *`Array`<[PermissionsEnum](../enums/unsharepolicy.permissionsenum.md)>*

*Defined in [api.ts:1256](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1256)*

The permissions to remove for this resource.

*__type__*: {Array}

*__memberof__*: UnsharePolicy

___

