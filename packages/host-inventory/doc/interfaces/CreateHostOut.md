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

[api.ts:403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L403)

___

### ansible\_host

• `Optional` **ansible\_host**: `string`

The ansible host name for remediations

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L397)

___

### bios\_uuid

• `Optional` **bios\_uuid**: `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L355)

___

### created

• `Optional` **created**: `string`

A timestamp when the entry was created.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L421)

___

### culled\_timestamp

• `Optional` **culled\_timestamp**: `string`

Timestamp from which the host is considered deleted.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L451)

___

### display\_name

• `Optional` **display\_name**: `string`

A host’s human-readable display name, e.g. in a form of a domain name.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L391)

___

### facts

• `Optional` **facts**: [`FactSet`](FactSet.md)[]

A set of facts belonging to the host.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L433)

___

### fqdn

• `Optional` **fqdn**: `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L367)

___

### id

• `Optional` **id**: `string`

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L415)

___

### insights\_id

• `Optional` **insights\_id**: `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:337](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L337)

___

### ip\_addresses

• `Optional` **ip\_addresses**: `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L361)

___

### mac\_addresses

• `Optional` **mac\_addresses**: `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L373)

___

### org\_id

• **org\_id**: `string`

The Org ID of the tenant that owns the host.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L409)

___

### per\_reporter\_staleness

• `Optional` **per\_reporter\_staleness**: `Object`

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`Memberof`**

CreateHostOut

#### Index signature

▪ [key: `string`]: [`PerReporterStaleness`](PerReporterStaleness.md)

#### Defined in

[api.ts:463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L463)

___

### provider\_id

• `Optional` **provider\_id**: `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L379)

___

### provider\_type

• `Optional` **provider\_type**: `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L385)

___

### reporter

• `Optional` **reporter**: `string`

Reporting source of the host. Used when updating the stale_timestamp.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L457)

___

### satellite\_id

• `Optional` **satellite\_id**: `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L349)

___

### stale\_timestamp

• `Optional` **stale\_timestamp**: `string`

Timestamp from which the host is considered stale.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L439)

___

### stale\_warning\_timestamp

• `Optional` **stale\_warning\_timestamp**: `string`

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L445)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L343)

___

### updated

• `Optional` **updated**: `string`

A timestamp when the entry was last updated.

**`Memberof`**

CreateHostOut

#### Defined in

[api.ts:427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L427)
