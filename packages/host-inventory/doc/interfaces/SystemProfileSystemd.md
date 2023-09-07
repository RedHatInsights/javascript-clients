[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileSystemd

# Interface: SystemProfileSystemd

Object for whole system systemd state, as reported by systemctl status --all

**`Export`**

**`Interface`**

SystemProfileSystemd

## Table of contents

### Properties

- [failed](SystemProfileSystemd.md#failed)
- [jobs\_queued](SystemProfileSystemd.md#jobs_queued)
- [state](SystemProfileSystemd.md#state)

## Properties

### failed

• **failed**: `number`

The number of jobs failed

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2433)

___

### jobs\_queued

• **jobs\_queued**: `number`

The number of jobs jobs_queued

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2427)

___

### state

• **state**: [`SystemProfileSystemdStateEnum`](../enums/SystemProfileSystemdStateEnum.md)

The state of the systemd subsystem

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2421)
