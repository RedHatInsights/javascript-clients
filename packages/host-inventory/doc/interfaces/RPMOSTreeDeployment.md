[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / RPMOSTreeDeployment

# Interface: RPMOSTreeDeployment

Limited deployment information from systems managed by rpm-ostree as reported by rpm-ostree status --json

**`Export`**

**`Interface`**

RPMOSTreeDeployment

## Table of contents

### Properties

- [booted](RPMOSTreeDeployment.md#booted)
- [checksum](RPMOSTreeDeployment.md#checksum)
- [id](RPMOSTreeDeployment.md#id)
- [origin](RPMOSTreeDeployment.md#origin)
- [osname](RPMOSTreeDeployment.md#osname)
- [pinned](RPMOSTreeDeployment.md#pinned)
- [version](RPMOSTreeDeployment.md#version)

## Properties

### booted

• **booted**: `boolean`

Whether the deployment is currently booted

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1010](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1010)

___

### checksum

• **checksum**: `string`

The checksum / commit of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L986)

___

### id

• **id**: `string`

ID of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:980](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L980)

___

### origin

• **origin**: `string`

The origin repo from which the commit was installed

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:992](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L992)

___

### osname

• **osname**: `string`

The operating system name

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L998)

___

### pinned

• **pinned**: `boolean`

Whether the deployment is currently pinned

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1016](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1016)

___

### version

• `Optional` **version**: `string`

The version of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1004](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1004)
