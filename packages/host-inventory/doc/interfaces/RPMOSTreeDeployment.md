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

[api.ts:1179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1179)

___

### checksum

• **checksum**: `string`

The checksum / commit of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1155)

___

### id

• **id**: `string`

ID of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1149)

___

### origin

• **origin**: `string`

The origin repo from which the commit was installed

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1161](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1161)

___

### osname

• **osname**: `string`

The operating system name

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1167)

___

### pinned

• **pinned**: `boolean`

Whether the deployment is currently pinned

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1185)

___

### version

• `Optional` **version**: `string`

The version of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1173](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1173)
