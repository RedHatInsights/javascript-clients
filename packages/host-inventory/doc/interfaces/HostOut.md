[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostOut

# Interface: HostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

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
- [groups](HostOut.md#groups)
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

[api.ts:924](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L924)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

HostOut

#### Defined in

[api.ts:918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L918)

___

### bios\_uuid

• `Optional` **bios\_uuid**: `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L876)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

HostOut

#### Defined in

[api.ts:942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L942)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

HostOut

#### Defined in

[api.ts:972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L972)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

HostOut

#### Defined in

[api.ts:912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L912)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L954)

___

### fqdn

• `Optional` **fqdn**: `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:888](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L888)

___

### groups

• `Optional` **groups**: [`GroupOut`](GroupOut.md)[]

The groups that the host belongs to, if any.

**`Memberof`**

HostOut

#### Defined in

[api.ts:990](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L990)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

HostOut

#### Defined in

[api.ts:936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L936)

___

### insights\_id

• `Optional` **insights\_id**: `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:858](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L858)

___

### ip\_addresses

• `Optional` **ip\_addresses**: `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L882)

___

### mac\_addresses

• `Optional` **mac\_addresses**: `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L894)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:930](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L930)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

HostOut

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L984)

___

### provider\_id

• `Optional` **provider\_id**: `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

HostOut

#### Defined in

[api.ts:900](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L900)

___

### provider\_type

• `Optional` **provider\_type**: `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

HostOut

#### Defined in

[api.ts:906](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L906)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

HostOut

#### Defined in

[api.ts:978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L978)

___

### satellite\_id

• `Optional` **satellite\_id**: `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L870)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

HostOut

#### Defined in

[api.ts:960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L960)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

HostOut

#### Defined in

[api.ts:966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L966)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L864)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

HostOut

#### Defined in

[api.ts:948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L948)
