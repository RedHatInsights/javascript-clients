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

[api.ts:1135](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1135)

___

### checksum

• **checksum**: `string`

The checksum / commit of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1111)

___

### id

• **id**: `string`

ID of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1105](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1105)

___

### origin

• **origin**: `string`

The origin repo from which the commit was installed

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1117](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1117)

___

### osname

• **osname**: `string`

The operating system name

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1123](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1123)

___

### pinned

• **pinned**: `boolean`

Whether the deployment is currently pinned

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1141](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1141)

___

### version

• `Optional` **version**: `string`

The version of the deployment

**`Memberof`**

RPMOSTreeDeployment

#### Defined in

[api.ts:1129](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1129)
