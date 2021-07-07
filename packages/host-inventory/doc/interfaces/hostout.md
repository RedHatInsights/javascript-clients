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
* [external_id](hostout.md#optional-external_id)
* [facts](hostout.md#optional-facts)
* [fqdn](hostout.md#optional-fqdn)
* [id](hostout.md#optional-id)
* [insights_id](hostout.md#optional-insights_id)
* [ip_addresses](hostout.md#optional-ip_addresses)
* [mac_addresses](hostout.md#optional-mac_addresses)
* [provider_id](hostout.md#optional-provider_id)
* [provider_type](hostout.md#optional-provider_type)
* [reporter](hostout.md#optional-reporter)
* [rhel_machine_id](hostout.md#optional-rhel_machine_id)
* [satellite_id](hostout.md#optional-satellite_id)
* [stale_timestamp](hostout.md#optional-stale_timestamp)
* [stale_warning_timestamp](hostout.md#optional-stale_warning_timestamp)
* [subscription_manager_id](hostout.md#optional-subscription_manager_id)
* [updated](hostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L765)*

A Red Hat Account number that owns the host.

**`memberof`** HostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [packages/host-inventory/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L759)*

The ansible host name for remediations

**`memberof`** HostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [packages/host-inventory/api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L711)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` created

• **created**? : *string*

*Defined in [packages/host-inventory/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L777)*

A timestamp when the entry was created.

**`memberof`** HostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L807)*

Timestamp from which the host is considered deleted.

**`memberof`** HostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [packages/host-inventory/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L753)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** HostOut

___

### `Optional` external_id

• **external_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L735)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L789)*

A set of facts belonging to the host.

**`memberof`** HostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L723)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/host-inventory/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L771)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** HostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L687)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** HostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L717)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L729)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L741)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** HostOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [packages/host-inventory/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L747)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** HostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [packages/host-inventory/api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L813)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** HostOut

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L693)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L705)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L795)*

Timestamp from which the host is considered stale.

**`memberof`** HostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L801)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** HostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L699)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** HostOut

___

### `Optional` updated

• **updated**? : *string*

*Defined in [packages/host-inventory/api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L783)*

A timestamp when the entry was last updated.

**`memberof`** HostOut
