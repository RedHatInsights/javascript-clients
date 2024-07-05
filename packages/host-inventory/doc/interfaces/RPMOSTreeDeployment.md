[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / RPMOSTreeDeployment

# Interface: RPMOSTreeDeployment

Limited deployment information from systems managed by rpm-ostree as reported by rpm-ostree status --json

**`Export`**

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

[api.ts:1279](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1279)

___

### checksum

• **checksum**: `string`

The checksum / commit of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1255](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1255)

___

### id

• **id**: `string`

ID of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1249](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1249)

___

### origin

• **origin**: `string`

The origin repo from which the commit was installed

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1261](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1261)

___

### osname

• **osname**: `string`

The operating system name

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1267](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1267)

___

### pinned

• **pinned**: `boolean`

Whether the deployment is currently pinned

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1285](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1285)

___

### version

• `Optional` **version**: `string`

The version of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1273](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1273)
