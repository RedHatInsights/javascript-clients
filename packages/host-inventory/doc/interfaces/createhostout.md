[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateHostOut](createhostout.md)

# Interface: CreateHostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

**`export`** 

**`interface`** CreateHostOut

## Hierarchy

* **CreateHostOut**

## Index

### Properties

* [account](createhostout.md#account)
* [ansible_host](createhostout.md#optional-ansible_host)
* [bios_uuid](createhostout.md#optional-bios_uuid)
* [created](createhostout.md#optional-created)
* [culled_timestamp](createhostout.md#optional-culled_timestamp)
* [display_name](createhostout.md#optional-display_name)
* [facts](createhostout.md#optional-facts)
* [fqdn](createhostout.md#optional-fqdn)
* [id](createhostout.md#optional-id)
* [insights_id](createhostout.md#optional-insights_id)
* [ip_addresses](createhostout.md#optional-ip_addresses)
* [mac_addresses](createhostout.md#optional-mac_addresses)
* [per_reporter_staleness](createhostout.md#optional-per_reporter_staleness)
* [provider_id](createhostout.md#optional-provider_id)
* [provider_type](createhostout.md#optional-provider_type)
* [reporter](createhostout.md#optional-reporter)
* [satellite_id](createhostout.md#optional-satellite_id)
* [stale_timestamp](createhostout.md#optional-stale_timestamp)
* [stale_warning_timestamp](createhostout.md#optional-stale_warning_timestamp)
* [subscription_manager_id](createhostout.md#optional-subscription_manager_id)
* [updated](createhostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:431](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L431)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [packages/host-inventory/api.ts:425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L425)*

The ansible host name for remediations

**`memberof`** CreateHostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [packages/host-inventory/api.ts:383](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L383)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` created

• **created**? : *string*

*Defined in [packages/host-inventory/api.ts:443](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L443)*

A timestamp when the entry was created.

**`memberof`** CreateHostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:473](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L473)*

Timestamp from which the host is considered deleted.

**`memberof`** CreateHostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [packages/host-inventory/api.ts:419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L419)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:455](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L455)*

A set of facts belonging to the host.

**`memberof`** CreateHostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:395](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L395)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/host-inventory/api.ts:437](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L437)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** CreateHostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:365](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L365)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:389](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L389)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L401)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` per_reporter_staleness

• **per_reporter_staleness**? : *object*

*Defined in [packages/host-inventory/api.ts:485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L485)*

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`memberof`** CreateHostOut

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L407)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** CreateHostOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [packages/host-inventory/api.ts:413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L413)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** CreateHostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [packages/host-inventory/api.ts:479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L479)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L377)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:461](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L461)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L467)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** CreateHostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L371)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` updated

• **updated**? : *string*

*Defined in [packages/host-inventory/api.ts:449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L449)*

A timestamp when the entry was last updated.

**`memberof`** CreateHostOut
