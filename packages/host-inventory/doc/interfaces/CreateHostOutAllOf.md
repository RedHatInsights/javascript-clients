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

[api.ts:488](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L488)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L482)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L506)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L536)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:476](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L476)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L518)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L500)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L494)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

CreateHostOutAllOf

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:548](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L548)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L542)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:524](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L524)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L530)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

CreateHostOutAllOf

#### Defined in

[api.ts:512](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L512)
