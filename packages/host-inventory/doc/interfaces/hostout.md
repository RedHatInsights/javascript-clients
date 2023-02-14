[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [HostOut](hostout.md)

# Interface: HostOut

A database entry representing a single host with its Inventory metadata.

**`export`** 

**`interface`** HostOut

## Hierarchy

* **HostOut**

## Index

### Properties

* [account](hostout.md#optional-account)
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
* [org_id](hostout.md#org_id)
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

### `Optional` account

• **account**? : *string | null*

*Defined in [api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L821)*

A Red Hat Account number that owns the host.

**`memberof`** HostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L815)*

The ansible host name for remediations

**`memberof`** HostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [api.ts:773](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L773)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` created

• **created**? : *string*

*Defined in [api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L839)*

A timestamp when the entry was created.

**`memberof`** HostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [api.ts:869](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L869)*

Timestamp from which the host is considered deleted.

**`memberof`** HostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L809)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** HostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [api.ts:851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L851)*

A set of facts belonging to the host.

**`memberof`** HostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [api.ts:785](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L785)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L833)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** HostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [api.ts:755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L755)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** HostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [api.ts:779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L779)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [api.ts:791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L791)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

###  org_id

• **org_id**: *string*

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L827)*

The Org ID of the tenant that owns the host.

**`memberof`** HostOut

___

### `Optional` per_reporter_staleness

• **per_reporter_staleness**? : *object*

*Defined in [api.ts:881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L881)*

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`memberof`** HostOut

#### Type declaration:

* \[ **key**: *string*\]: [PerReporterStaleness](perreporterstaleness.md)

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [api.ts:797](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L797)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** HostOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L803)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** HostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [api.ts:875](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L875)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** HostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [api.ts:767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L767)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [api.ts:857](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L857)*

Timestamp from which the host is considered stale.

**`memberof`** HostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [api.ts:863](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L863)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** HostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [api.ts:761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L761)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` updated

• **updated**? : *string*

*Defined in [api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L845)*

A timestamp when the entry was last updated.

**`memberof`** HostOut
