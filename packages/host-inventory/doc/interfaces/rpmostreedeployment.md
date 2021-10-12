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

*Defined in [packages/host-inventory/api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1046)*

Whether the deployment is currently booted

**`memberof`** RPMOSTreeDeployment

___

###  checksum

• **checksum**: *string*

*Defined in [packages/host-inventory/api.ts:1022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1022)*

The checksum / commit of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  id

• **id**: *string*

*Defined in [packages/host-inventory/api.ts:1016](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1016)*

ID of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  origin

• **origin**: *string*

*Defined in [packages/host-inventory/api.ts:1028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1028)*

The origin repo from which the commit was installed

**`memberof`** RPMOSTreeDeployment

___

###  osname

• **osname**: *string*

*Defined in [packages/host-inventory/api.ts:1034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1034)*

The operating system name

**`memberof`** RPMOSTreeDeployment

___

###  pinned

• **pinned**: *boolean*

*Defined in [packages/host-inventory/api.ts:1052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1052)*

Whether the deployment is currently pinned

**`memberof`** RPMOSTreeDeployment

___

### `Optional` version

• **version**? : *string*

*Defined in [packages/host-inventory/api.ts:1040](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1040)*

The version of the deployment

**`memberof`** RPMOSTreeDeployment
