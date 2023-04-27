[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostOut

# Interface: HostOut

A database entry representing a single host with its Inventory metadata.

**`Export`**

**`Interface`**

HostOut

## Table of contents

### Properties

- [account](HostOut.md#account)
- [ansible\_host](HostOut.md#ansible_host)
- [bios\_uuid](HostOut.md#bios_uuid)
- [created](HostOut.md#created)
- [culled\_timestamp](HostOut.md#culled_timestamp)
- [display\_name](HostOut.md#display_name)
- [facts](HostOut.md#facts)
- [fqdn](HostOut.md#fqdn)
- [id](HostOut.md#id)
- [insights\_id](HostOut.md#insights_id)
- [ip\_addresses](HostOut.md#ip_addresses)
- [mac\_addresses](HostOut.md#mac_addresses)
- [org\_id](HostOut.md#org_id)
- [per\_reporter\_staleness](HostOut.md#per_reporter_staleness)
- [provider\_id](HostOut.md#provider_id)
- [provider\_type](HostOut.md#provider_type)
- [reporter](HostOut.md#reporter)
- [satellite\_id](HostOut.md#satellite_id)
- [stale\_timestamp](HostOut.md#stale_timestamp)
- [stale\_warning\_timestamp](HostOut.md#stale_warning_timestamp)
- [subscription\_manager\_id](HostOut.md#subscription_manager_id)
- [updated](HostOut.md#updated)

## Properties

### account

• `Optional` **account**: `string`

A Red Hat Account number that owns the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L801)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

HostOut

#### Defined in

[api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L795)

___

### bios\_uuid

• `Optional` **bios\_uuid**: `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L753)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

HostOut

#### Defined in

[api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L819)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

HostOut

#### Defined in

[api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L849)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

HostOut

#### Defined in

[api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L789)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L831)

___

### fqdn

• `Optional` **fqdn**: `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L765)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

HostOut

#### Defined in

[api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L813)

___

### insights\_id

• `Optional` **insights\_id**: `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L735)

___

### ip\_addresses

• `Optional` **ip\_addresses**: `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L759)

___

### mac\_addresses

• `Optional` **mac\_addresses**: `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L771)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L807)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

HostOut

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:861](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L861)

___

### provider\_id

• `Optional` **provider\_id**: `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

HostOut

#### Defined in

[api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L777)

___

### provider\_type

• `Optional` **provider\_type**: `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

HostOut

#### Defined in

[api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L783)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

HostOut

#### Defined in

[api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L855)

___

### satellite\_id

• `Optional` **satellite\_id**: `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L747)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

HostOut

#### Defined in

[api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L837)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

HostOut

#### Defined in

[api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L843)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L741)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

HostOut

#### Defined in

[api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L825)
