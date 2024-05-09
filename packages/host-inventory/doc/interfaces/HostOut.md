[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostOut

# Interface: HostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

**`Export`**

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

• `Optional` **account**: ``null`` \| `string`

A Red Hat Account number that owns the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:787](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L787)

___

### ansible\_host

• `Optional` **ansible\_host**: ``null`` \| `string`

The ansible host name for remediations

**`Memberof`**

HostOut

#### Defined in

[api.ts:781](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L781)

___

### bios\_uuid

• `Optional` **bios\_uuid**: ``null`` \| `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:739](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L739)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

HostOut

#### Defined in

[api.ts:805](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L805)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

HostOut

#### Defined in

[api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L835)

___

### display\_name

• `Optional` **display\_name**: ``null`` \| `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

HostOut

#### Defined in

[api.ts:775](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L775)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:817](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L817)

___

### fqdn

• `Optional` **fqdn**: ``null`` \| `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:751](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L751)

___

### groups

• `Optional` **groups**: [`GroupOut`](GroupOut.md)[]

The groups that the host belongs to, if any.

**`Memberof`**

HostOut

#### Defined in

[api.ts:853](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L853)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

HostOut

#### Defined in

[api.ts:799](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L799)

___

### insights\_id

• `Optional` **insights\_id**: ``null`` \| `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:721](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L721)

___

### ip\_addresses

• `Optional` **ip\_addresses**: ``null`` \| `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:745](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L745)

___

### mac\_addresses

• `Optional` **mac\_addresses**: ``null`` \| `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:757](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L757)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

HostOut

#### Defined in

[api.ts:793](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L793)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

HostOut

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:847](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L847)

___

### provider\_id

• `Optional` **provider\_id**: ``null`` \| `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

HostOut

#### Defined in

[api.ts:763](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L763)

___

### provider\_type

• `Optional` **provider\_type**: ``null`` \| `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

HostOut

#### Defined in

[api.ts:769](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L769)

___

### reporter

• `Optional` **reporter**: ``null`` \| `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

HostOut

#### Defined in

[api.ts:841](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L841)

___

### satellite\_id

• `Optional` **satellite\_id**: ``null`` \| `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:733](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L733)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered stale.

**`Memberof`**

HostOut

#### Defined in

[api.ts:823](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L823)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: ``null`` \| `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

HostOut

#### Defined in

[api.ts:829](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L829)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: ``null`` \| `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

HostOut

#### Defined in

[api.ts:727](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L727)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

HostOut

#### Defined in

[api.ts:811](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L811)
