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

[api.ts:2440](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2440)

___

### failed\_services

• `Optional` **failed\_services**: `string`[]

List of all failed jobs.

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2446)

___

### jobs\_queued

• **jobs\_queued**: `number`

The number of jobs jobs_queued

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2434)

___

### state

• **state**: [`SystemProfileSystemdStateEnum`](../enums/SystemProfileSystemdStateEnum.md)

The state of the systemd subsystem

**`Memberof`**

SystemProfileSystemd

#### Defined in

[api.ts:2428](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L2428)
