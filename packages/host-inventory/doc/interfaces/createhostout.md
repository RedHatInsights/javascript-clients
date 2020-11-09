[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateHostOut](createhostout.md)

# Interface: CreateHostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

**`export`** 

**`interface`** CreateHostOut

## Hierarchy

* **CreateHostOut**

  ↳ [HostOut](hostout.md)

## Index

### Properties

* [account](createhostout.md#account)
* [ansible_host](createhostout.md#optional-ansible_host)
* [bios_uuid](createhostout.md#optional-bios_uuid)
* [created](createhostout.md#optional-created)
* [culled_timestamp](createhostout.md#optional-culled_timestamp)
* [display_name](createhostout.md#optional-display_name)
* [external_id](createhostout.md#optional-external_id)
* [facts](createhostout.md#optional-facts)
* [fqdn](createhostout.md#optional-fqdn)
* [id](createhostout.md#optional-id)
* [insights_id](createhostout.md#optional-insights_id)
* [ip_addresses](createhostout.md#optional-ip_addresses)
* [mac_addresses](createhostout.md#optional-mac_addresses)
* [reporter](createhostout.md#optional-reporter)
* [rhel_machine_id](createhostout.md#optional-rhel_machine_id)
* [satellite_id](createhostout.md#optional-satellite_id)
* [stale_timestamp](createhostout.md#optional-stale_timestamp)
* [stale_warning_timestamp](createhostout.md#optional-stale_warning_timestamp)
* [subscription_manager_id](createhostout.md#optional-subscription_manager_id)
* [updated](createhostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L168)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostOut

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [packages/host-inventory/api.ts:162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L162)*

The ansible host name for remediations

**`memberof`** CreateHostOut

___

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [packages/host-inventory/api.ts:198](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L198)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` created

• **created**? : *string*

*Defined in [packages/host-inventory/api.ts:234](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L234)*

A timestamp when the entry was created.

**`memberof`** CreateHostOut

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L264)*

Timestamp from which the host is considered deleted.

**`memberof`** CreateHostOut

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [packages/host-inventory/api.ts:156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L156)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostOut

___

### `Optional` external_id

• **external_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L222)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L246)*

A set of facts belonging to the host.

**`memberof`** CreateHostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L210)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/host-inventory/api.ts:228](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L228)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** CreateHostOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L174)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L204)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L216)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [packages/host-inventory/api.ts:270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L270)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostOut

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L180)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L192)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L252)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostOut

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L258)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** CreateHostOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:186](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L186)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostOut

___

### `Optional` updated

• **updated**? : *string*

*Defined in [packages/host-inventory/api.ts:240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L240)*

A timestamp when the entry was last updated.

**`memberof`** CreateHostOut
