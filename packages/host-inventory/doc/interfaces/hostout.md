[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [HostOut](hostout.md)

# Interface: HostOut

A database entry representing a single host with its Inventory metadata.

**`export`** 

**`interface`** HostOut

## Hierarchy

* [CreateHostOut](createhostout.md)

  ↳ **HostOut**

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

*Inherited from [CreateHostOut](createhostout.md).[account](createhostout.md#account)*

*Defined in [packages/host-inventory/api.ts:260](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L260)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[ansible_host](createhostout.md#optional-ansible_host)*

*Defined in [packages/host-inventory/api.ts:254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L254)*

The ansible host name for remediations

**`memberof`** CreateHostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[bios_uuid](createhostout.md#optional-bios_uuid)*

*Defined in [packages/host-inventory/api.ts:290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L290)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` created

• **created**? : *string*

*Inherited from [CreateHostOut](createhostout.md).[created](createhostout.md#optional-created)*

*Defined in [packages/host-inventory/api.ts:326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L326)*

A timestamp when the entry was created.

**`memberof`** CreateHostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[culled_timestamp](createhostout.md#optional-culled_timestamp)*

*Defined in [packages/host-inventory/api.ts:356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L356)*

Timestamp from which the host is considered deleted.

**`memberof`** CreateHostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[display_name](createhostout.md#optional-display_name)*

*Defined in [packages/host-inventory/api.ts:248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L248)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostOut

___

### `Optional` external_id

• **external_id**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[external_id](createhostout.md#optional-external_id)*

*Defined in [packages/host-inventory/api.ts:314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L314)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Overrides [CreateHostOut](createhostout.md).[facts](createhostout.md#optional-facts)*

*Defined in [packages/host-inventory/api.ts:469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L469)*

A set of facts belonging to the host.

**`memberof`** HostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[fqdn](createhostout.md#optional-fqdn)*

*Defined in [packages/host-inventory/api.ts:302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L302)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` id

• **id**? : *string*

*Inherited from [CreateHostOut](createhostout.md).[id](createhostout.md#optional-id)*

*Defined in [packages/host-inventory/api.ts:320](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L320)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** CreateHostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[insights_id](createhostout.md#optional-insights_id)*

*Defined in [packages/host-inventory/api.ts:266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L266)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Inherited from [CreateHostOut](createhostout.md).[ip_addresses](createhostout.md#optional-ip_addresses)*

*Defined in [packages/host-inventory/api.ts:296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L296)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Inherited from [CreateHostOut](createhostout.md).[mac_addresses](createhostout.md#optional-mac_addresses)*

*Defined in [packages/host-inventory/api.ts:308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L308)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[reporter](createhostout.md#optional-reporter)*

*Defined in [packages/host-inventory/api.ts:362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L362)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostOut

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[rhel_machine_id](createhostout.md#optional-rhel_machine_id)*

*Defined in [packages/host-inventory/api.ts:272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L272)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[satellite_id](createhostout.md#optional-satellite_id)*

*Defined in [packages/host-inventory/api.ts:284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L284)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[stale_timestamp](createhostout.md#optional-stale_timestamp)*

*Defined in [packages/host-inventory/api.ts:344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L344)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[stale_warning_timestamp](createhostout.md#optional-stale_warning_timestamp)*

*Defined in [packages/host-inventory/api.ts:350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L350)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** CreateHostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Inherited from [CreateHostOut](createhostout.md).[subscription_manager_id](createhostout.md#optional-subscription_manager_id)*

*Defined in [packages/host-inventory/api.ts:278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L278)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` updated

• **updated**? : *string*

*Inherited from [CreateHostOut](createhostout.md).[updated](createhostout.md#optional-updated)*

*Defined in [packages/host-inventory/api.ts:332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L332)*

A timestamp when the entry was last updated.

**`memberof`** CreateHostOut
