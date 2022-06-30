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

*Defined in [api.ts:1429](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L1429)*

The catalog-worker version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` controller_version

• **controller_version**? : *string*

*Defined in [api.ts:1417](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L1417)*

The ansible-tower or automation-controller version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` hub_version

• **hub_version**? : *string*

*Defined in [api.ts:1423](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L1423)*

The automation-hub version on the host

**`memberof`** SystemProfileAnsible

___

### `Optional` sso_version

• **sso_version**? : *string*

*Defined in [api.ts:1435](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L1435)*

The SSO version on the host

**`memberof`** SystemProfileAnsible
