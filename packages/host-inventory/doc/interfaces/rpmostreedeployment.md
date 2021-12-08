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

*Defined in [packages/host-inventory/api.ts:992](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L992)*

Whether the deployment is currently booted

**`memberof`** RPMOSTreeDeployment

___

###  checksum

• **checksum**: *string*

*Defined in [packages/host-inventory/api.ts:968](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L968)*

The checksum / commit of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  id

• **id**: *string*

*Defined in [packages/host-inventory/api.ts:962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L962)*

ID of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  origin

• **origin**: *string*

*Defined in [packages/host-inventory/api.ts:974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L974)*

The origin repo from which the commit was installed

**`memberof`** RPMOSTreeDeployment

___

###  osname

• **osname**: *string*

*Defined in [packages/host-inventory/api.ts:980](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L980)*

The operating system name

**`memberof`** RPMOSTreeDeployment

___

###  pinned

• **pinned**: *boolean*

*Defined in [packages/host-inventory/api.ts:998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L998)*

Whether the deployment is currently pinned

**`memberof`** RPMOSTreeDeployment

___

### `Optional` version

• **version**? : *string*

*Defined in [packages/host-inventory/api.ts:986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L986)*

The version of the deployment

**`memberof`** RPMOSTreeDeployment
