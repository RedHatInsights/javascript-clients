[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostOutAllOf

# Interface: HostOutAllOf

**`Export`**

**`Interface`**

HostOutAllOf

## Table of contents

### Properties

- [account](HostOutAllOf.md#account)
- [ansible\_host](HostOutAllOf.md#ansible_host)
- [created](HostOutAllOf.md#created)
- [culled\_timestamp](HostOutAllOf.md#culled_timestamp)
- [display\_name](HostOutAllOf.md#display_name)
- [facts](HostOutAllOf.md#facts)
- [groups](HostOutAllOf.md#groups)
- [id](HostOutAllOf.md#id)
- [org\_id](HostOutAllOf.md#org_id)
- [per\_reporter\_staleness](HostOutAllOf.md#per_reporter_staleness)
- [reporter](HostOutAllOf.md#reporter)
- [stale\_timestamp](HostOutAllOf.md#stale_timestamp)
- [stale\_warning\_timestamp](HostOutAllOf.md#stale_warning_timestamp)
- [updated](HostOutAllOf.md#updated)

## Properties

### account

• `Optional` **account**: `string`

A Red Hat Account number that owns the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L878)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L872)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:896](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L896)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L926)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L866)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:908](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L908)

___

### groups

• `Optional` **groups**: [`GroupOut`](GroupOut.md)[]

The groups that the host belongs to, if any.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:944](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L944)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:890](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L890)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L884)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

HostOutAllOf

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L938)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:932](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L932)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L914)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:920](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L920)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:902](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L902)
