[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostOutAllOf

# Interface: HostOutAllOf

**`Export`**

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

• `Optional` **account**: ``null`` \| `string`

A Red Hat Account number that owns the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:871](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L871)

___

### ansible\_host

• `Optional` **ansible\_host**: ``null`` \| `string`

The ansible host name for remediations

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:865](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L865)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:889](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L889)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:919](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L919)

___

### display\_name

• `Optional` **display\_name**: ``null`` \| `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:859](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L859)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:901](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L901)

___

### groups

• `Optional` **groups**: [`GroupOut`](GroupOut.md)[]

The groups that the host belongs to, if any.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:937](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L937)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:883](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L883)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:877](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L877)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

HostOutAllOf

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:931](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L931)

___

### reporter

• `Optional` **reporter**: ``null`` \| `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L925)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered stale.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:907](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L907)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L913)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

HostOutAllOf

#### Defined in

[api.ts:895](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L895)
