[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / CreateHostOutAllOf

# Interface: CreateHostOutAllOf

**`Export`**

**`Interface`**

CreateHostOutAllOf

## Table of contents

### Properties

- [account](CreateHostOutAllOf.md#account)
- [ansible\_host](CreateHostOutAllOf.md#ansible_host)
- [created](CreateHostOutAllOf.md#created)
- [culled\_timestamp](CreateHostOutAllOf.md#culled_timestamp)
- [display\_name](CreateHostOutAllOf.md#display_name)
- [facts](CreateHostOutAllOf.md#facts)
- [id](CreateHostOutAllOf.md#id)
- [org\_id](CreateHostOutAllOf.md#org_id)
- [per\_reporter\_staleness](CreateHostOutAllOf.md#per_reporter_staleness)
- [reporter](CreateHostOutAllOf.md#reporter)
- [stale\_timestamp](CreateHostOutAllOf.md#stale_timestamp)
- [stale\_warning\_timestamp](CreateHostOutAllOf.md#stale_warning_timestamp)
- [updated](CreateHostOutAllOf.md#updated)

## Properties

### account

• `Optional` **account**: `string`

A Red Hat Account number that owns the host.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:462](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L462)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:456](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L456)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:480](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L480)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:510](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L510)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:450](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L450)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:492](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L492)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:474](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L474)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:468](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L468)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

CreateHostOutAllOf

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L522)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L516)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L498)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:504](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L504)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:486](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L486)
