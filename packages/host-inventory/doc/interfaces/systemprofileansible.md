[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileAnsible](systemprofileansible.md)

# Interface: SystemProfileAnsible

Object containing data specific to Ansible Automation Platform

**`export`** 

**`interface`** SystemProfileAnsible

## Hierarchy

* **SystemProfileAnsible**

## Index

### Properties

* [catalog_worker_version](systemprofileansible.md#optional-catalog_worker_version)
* [controller_version](systemprofileansible.md#optional-controller_version)
* [hub_version](systemprofileansible.md#optional-hub_version)
* [sso_version](systemprofileansible.md#optional-sso_version)

## Properties

### `Optional` catalog_worker_version

• **catalog_worker_version**? : *string*

*Defined in [api.ts:1607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1607)*

The catalog-worker version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` controller_version

• **controller_version**? : *string*

*Defined in [api.ts:1595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1595)*

The ansible-tower or automation-controller version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` hub_version

• **hub_version**? : *string*

*Defined in [api.ts:1601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1601)*

The automation-hub version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` sso_version

• **sso_version**? : *string*

*Defined in [api.ts:1613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1613)*

The SSO version on the host

**`memberof`** SystemProfileAnsible
