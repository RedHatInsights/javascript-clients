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

[api.ts:1336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1336)

___

### checksum

• **checksum**: `string`

The checksum / commit of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1312)

___

### id

• **id**: `string`

ID of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1306)

___

### origin

• **origin**: `string`

The origin repo from which the commit was installed

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1318)

___

### osname

• **osname**: `string`

The operating system name

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1324)

___

### pinned

• **pinned**: `boolean`

Whether the deployment is currently pinned

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1342)

___

### version

• `Optional` **version**: `string`

The version of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1330)
