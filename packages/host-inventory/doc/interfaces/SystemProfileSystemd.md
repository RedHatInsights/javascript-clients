[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileSystemd

# Interface: SystemProfileSystemd

Object for whole system systemd state, as reported by systemctl status --all

**`Export`**

SystemProfileSystemd

## Table of contents

### Properties

- [failed](SystemProfileSystemd.md#failed)
- [failed\_services](SystemProfileSystemd.md#failed_services)
- [jobs\_queued](SystemProfileSystemd.md#jobs_queued)
- [state](SystemProfileSystemd.md#state)

## Properties

### failed

• **failed**: `number`

The number of jobs failed

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2621](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2621)

___

### failed\_services

• `Optional` **failed\_services**: `string`[]

List of all failed jobs.

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2627](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2627)

___

### jobs\_queued

• **jobs\_queued**: `number`

The number of jobs jobs_queued

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2615](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2615)

___

### state

• **state**: [`SystemProfileSystemdStateEnum`](../enums/SystemProfileSystemdStateEnum.md)

The state of the systemd subsystem

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2609](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2609)
