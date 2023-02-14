[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [RPMOSTreeDeployment](rpmostreedeployment.md)

# Interface: RPMOSTreeDeployment

Limited deployment information from systems managed by rpm-ostree as reported by rpm-ostree status --json

**`export`** 

**`interface`** RPMOSTreeDeployment

## Hierarchy

* **RPMOSTreeDeployment**

## Index

### Properties

* [booted](rpmostreedeployment.md#booted)
* [checksum](rpmostreedeployment.md#checksum)
* [id](rpmostreedeployment.md#id)
* [origin](rpmostreedeployment.md#origin)
* [osname](rpmostreedeployment.md#osname)
* [pinned](rpmostreedeployment.md#pinned)
* [version](rpmostreedeployment.md#optional-version)

## Properties

###  booted

• **booted**: *boolean*

*Defined in [api.ts:1155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1155)*

Whether the deployment is currently booted

**`memberof`** RPMOSTreeDeployment

___

###  checksum

• **checksum**: *string*

*Defined in [api.ts:1131](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1131)*

The checksum / commit of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  id

• **id**: *string*

*Defined in [api.ts:1125](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1125)*

ID of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  origin

• **origin**: *string*

*Defined in [api.ts:1137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1137)*

The origin repo from which the commit was installed

**`memberof`** RPMOSTreeDeployment

___

###  osname

• **osname**: *string*

*Defined in [api.ts:1143](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1143)*

The operating system name

**`memberof`** RPMOSTreeDeployment

___

###  pinned

• **pinned**: *boolean*

*Defined in [api.ts:1161](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1161)*

Whether the deployment is currently pinned

**`memberof`** RPMOSTreeDeployment

___

### `Optional` version

• **version**? : *string*

*Defined in [api.ts:1149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1149)*

The version of the deployment

**`memberof`** RPMOSTreeDeployment
