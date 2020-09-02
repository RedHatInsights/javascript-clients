[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [SharePolicy](sharepolicy.md)

# Interface: SharePolicy

**`export`** 

**`interface`** SharePolicy

## Hierarchy

* **SharePolicy**

## Index

### Properties

* [group_uuids](sharepolicy.md#group_uuids)
* [permissions](sharepolicy.md#permissions)

## Properties

###  group_uuids

• **group_uuids**: *Array‹string›*

*Defined in [packages/catalog/api.ts:1170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1170)*

An array of group UUID\'s retrieved from the RBAC Service with whom the resource has to be shared.

**`memberof`** SharePolicy

___

###  permissions

• **permissions**: *Array‹[SharePolicyPermissionsEnum](../enums/sharepolicypermissionsenum.md)›*

*Defined in [packages/catalog/api.ts:1164](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1164)*

The permissions to apply for this share. The valid values are read, update, delete and order

**`memberof`** SharePolicy
