[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / CreateHostOut

# Interface: CreateHostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

**`Export`**

**`Interface`**

CreateHostOut

## Table of contents

### Properties

- [account](CreateHostOut.md#account)
- [ansible\_host](CreateHostOut.md#ansible_host)
- [bios\_uuid](CreateHostOut.md#bios_uuid)
- [created](CreateHostOut.md#created)
- [culled\_timestamp](CreateHostOut.md#culled_timestamp)
- [display\_name](CreateHostOut.md#display_name)
- [facts](CreateHostOut.md#facts)
- [fqdn](CreateHostOut.md#fqdn)
- [id](CreateHostOut.md#id)
- [insights\_id](CreateHostOut.md#insights_id)
- [ip\_addresses](CreateHostOut.md#ip_addresses)
- [mac\_addresses](CreateHostOut.md#mac_addresses)
- [org\_id](CreateHostOut.md#org_id)
- [per\_reporter\_staleness](CreateHostOut.md#per_reporter_staleness)
- [provider\_id](CreateHostOut.md#provider_id)
- [provider\_type](CreateHostOut.md#provider_type)
- [reporter](CreateHostOut.md#reporter)
- [satellite\_id](CreateHostOut.md#satellite_id)
- [stale\_timestamp](CreateHostOut.md#stale_timestamp)
- [stale\_warning\_timestamp](CreateHostOut.md#stale_warning_timestamp)
- [subscription\_manager\_id](CreateHostOut.md#subscription_manager_id)
- [updated](CreateHostOut.md#updated)

## Properties

### account

• `Optional` **account**: `string`

A Red Hat Account number that owns the host.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L377)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L371)

___

### bios\_uuid

• `Optional` **bios\_uuid**: `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L329)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:395](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L395)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L425)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L365)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L407)

___

### fqdn

• `Optional` **fqdn**: `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L341)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L389)

___

### insights\_id

• `Optional` **insights\_id**: `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L311)

___

### ip\_addresses

• `Optional` **ip\_addresses**: `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L335)

___

### mac\_addresses

• `Optional` **mac\_addresses**: `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L347)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:383](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L383)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

CreateHostOut

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L437)

___

### provider\_id

• `Optional` **provider\_id**: `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L353)

___

### provider\_type

• `Optional` **provider\_type**: `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L359)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L431)

___

### satellite\_id

• `Optional` **satellite\_id**: `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L323)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L413)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L419)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L317)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L401)
