[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [UnsharePolicy](unsharepolicy.md)

# Module: UnsharePolicy

**`export`** 

**`namespace`** UnsharePolicy

## Index

### Enumerations

* [PermissionsEnum](../enums/unsharepolicy.permissionsenum.md)

### Properties

* [groupUuids](unsharepolicy.md#optional-groupuuids)
* [permissions](unsharepolicy.md#permissions)

## Properties

### `Optional` groupUuids

• **groupUuids**? : *Array‹string›*

*Defined in [api.ts:1210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1210)*

An array of group UUID's retrieved from the RBAC Service from which the permissions have to be removed. If group uuids are not specified we will unshare it from all groups.

**`type`** {Array<string>}

**`memberof`** UnsharePolicy

___

###  permissions

• **permissions**: *Array‹[PermissionsEnum](../enums/unsharepolicy.permissionsenum.md)›*

*Defined in [api.ts:1204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1204)*

The permissions to remove for this resource.

**`type`** {Array<string>}

**`memberof`** UnsharePolicy
