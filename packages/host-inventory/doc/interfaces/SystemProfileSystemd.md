[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileSystemd

# Interface: SystemProfileSystemd

Object for whole system systemd state, as reported by systemctl status --all

**`Export`**

**`Interface`**

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

[api.ts:2564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2564)

___

### failed\_services

• `Optional` **failed\_services**: `string`[]

List of all failed jobs.

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2570)

___

### jobs\_queued

• **jobs\_queued**: `number`

The number of jobs jobs_queued

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2558)

___

### state

• **state**: [`SystemProfileSystemdStateEnum`](../enums/SystemProfileSystemdStateEnum.md)

The state of the systemd subsystem

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2552)
