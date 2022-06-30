[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [HostOut](hostout.md)

# Interface: HostOut

A database entry representing a single host with its Inventory metadata.

**`export`** 

**`interface`** HostOut

## Hierarchy

* **HostOut**

## Index

### Properties

* [account](hostout.md#account)
* [ansible_host](hostout.md#optional-ansible_host)
* [bios_uuid](hostout.md#optional-bios_uuid)
* [created](hostout.md#optional-created)
* [culled_timestamp](hostout.md#optional-culled_timestamp)
* [display_name](hostout.md#optional-display_name)
* [facts](hostout.md#optional-facts)
* [fqdn](hostout.md#optional-fqdn)
* [id](hostout.md#optional-id)
* [insights_id](hostout.md#optional-insights_id)
* [ip_addresses](hostout.md#optional-ip_addresses)
* [mac_addresses](hostout.md#optional-mac_addresses)
* [org_id](hostout.md#optional-org_id)
* [per_reporter_staleness](hostout.md#optional-per_reporter_staleness)
* [provider_id](hostout.md#optional-provider_id)
* [provider_type](hostout.md#optional-provider_type)
* [reporter](hostout.md#optional-reporter)
* [satellite_id](hostout.md#optional-satellite_id)
* [stale_timestamp](hostout.md#optional-stale_timestamp)
* [stale_warning_timestamp](hostout.md#optional-stale_warning_timestamp)
* [subscription_manager_id](hostout.md#optional-subscription_manager_id)
* [updated](hostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [api.ts:676](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L676)*

A Red Hat Account number that owns the host.

**`memberof`** HostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [api.ts:670](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L670)*

The ansible host name for remediations

**`memberof`** HostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [api.ts:628](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L628)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` created

• **created**? : *string*

*Defined in [api.ts:694](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L694)*

A timestamp when the entry was created.

**`memberof`** HostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [api.ts:724](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L724)*

Timestamp from which the host is considered deleted.

**`memberof`** HostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [api.ts:664](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L664)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** HostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [api.ts:706](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L706)*

A set of facts belonging to the host.

**`memberof`** HostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [api.ts:640](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L640)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:688](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L688)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** HostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [api.ts:610](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L610)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** HostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [api.ts:634](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L634)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [api.ts:646](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L646)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` org_id

• **org_id**? : *string*

*Defined in [api.ts:682](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L682)*

The Org ID of the tenant that owns the host.

**`memberof`** HostOut

___

### `Optional` per_reporter_staleness

• **per_reporter_staleness**? : *object*

*Defined in [api.ts:736](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L736)*

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`memberof`** HostOut

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [api.ts:652](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L652)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** HostOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [api.ts:658](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L658)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** HostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [api.ts:730](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L730)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** HostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [api.ts:622](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L622)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [api.ts:712](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L712)*

Timestamp from which the host is considered stale.

**`memberof`** HostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [api.ts:718](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L718)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** HostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [api.ts:616](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L616)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` updated

• **updated**? : *string*

*Defined in [api.ts:700](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L700)*

A timestamp when the entry was last updated.

**`memberof`** HostOut
