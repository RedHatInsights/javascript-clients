[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [UnsharePolicy](unsharepolicy.md)

# Interface: UnsharePolicy

**`export`** 

**`interface`** UnsharePolicy

## Hierarchy

* **UnsharePolicy**

## Index

### Properties

* [group_uuids](unsharepolicy.md#optional-group_uuids)
* [permissions](unsharepolicy.md#permissions)

## Properties

### `Optional` group_uuids

• **group_uuids**? : *Array‹string›*

*Defined in [packages/catalog/api.ts:1394](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L1394)*

An array of group UUID\'s retrieved from the RBAC Service from which the permissions have to be removed. If group uuids are not specified we will unshare it from all groups.

**`memberof`** UnsharePolicy

___

###  permissions

• **permissions**: *Array‹[UnsharePolicyPermissionsEnum](../enums/unsharepolicypermissionsenum.md)›*

*Defined in [packages/catalog/api.ts:1388](https://github.com/fhlavac/javascript-clients/blob/master/packages/catalog/api.ts#L1388)*

The permissions to remove for this resource.

**`memberof`** UnsharePolicy
