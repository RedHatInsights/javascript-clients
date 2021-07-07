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

*Defined in [packages/host-inventory/api.ts:1018](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1018)*

Whether the deployment is currently booted

**`memberof`** RPMOSTreeDeployment

___

###  checksum

• **checksum**: *string*

*Defined in [packages/host-inventory/api.ts:994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L994)*

The checksum / commit of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  id

• **id**: *string*

*Defined in [packages/host-inventory/api.ts:988](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L988)*

ID of the deployment

**`memberof`** RPMOSTreeDeployment

___

###  origin

• **origin**: *string*

*Defined in [packages/host-inventory/api.ts:1000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1000)*

The origin repo from which the commit was installed

**`memberof`** RPMOSTreeDeployment

___

###  osname

• **osname**: *string*

*Defined in [packages/host-inventory/api.ts:1006](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1006)*

The operating system name

**`memberof`** RPMOSTreeDeployment

___

###  pinned

• **pinned**: *boolean*

*Defined in [packages/host-inventory/api.ts:1024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1024)*

Whether the deployment is currently pinned

**`memberof`** RPMOSTreeDeployment

___

### `Optional` version

• **version**? : *string*

*Defined in [packages/host-inventory/api.ts:1012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1012)*

The version of the deployment

**`memberof`** RPMOSTreeDeployment
