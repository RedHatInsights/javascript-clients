[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateHostIn](createhostin.md)

# Interface: CreateHostIn

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

**`export`** 

**`interface`** CreateHostIn

## Hierarchy

* **CreateHostIn**

## Index

### Properties

* [account](createhostin.md#account)
* [ansible_host](createhostin.md#optional-ansible_host)
* [bios_uuid](createhostin.md#optional-bios_uuid)
* [display_name](createhostin.md#optional-display_name)
* [external_id](createhostin.md#optional-external_id)
* [facts](createhostin.md#optional-facts)
* [fqdn](createhostin.md#optional-fqdn)
* [insights_id](createhostin.md#optional-insights_id)
* [ip_addresses](createhostin.md#optional-ip_addresses)
* [mac_addresses](createhostin.md#optional-mac_addresses)
* [reporter](createhostin.md#reporter)
* [rhel_machine_id](createhostin.md#optional-rhel_machine_id)
* [satellite_id](createhostin.md#optional-satellite_id)
* [stale_timestamp](createhostin.md#stale_timestamp)
* [subscription_manager_id](createhostin.md#optional-subscription_manager_id)
* [system_profile](createhostin.md#optional-system_profile)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:176](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L176)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostIn

___

### `Optional` ansible_host

• **ansible_host**? : *string*

*Defined in [packages/host-inventory/api.ts:170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L170)*

The ansible host name for remediations

**`memberof`** CreateHostIn

___

### `Optional` bios_uuid

• **bios_uuid**? : *string*

*Defined in [packages/host-inventory/api.ts:206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L206)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` display_name

• **display_name**? : *string*

*Defined in [packages/host-inventory/api.ts:164](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L164)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostIn

___

### `Optional` external_id

• **external_id**? : *string*

*Defined in [packages/host-inventory/api.ts:230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L230)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L236)*

A set of facts belonging to the host.

**`memberof`** CreateHostIn

___

### `Optional` fqdn

• **fqdn**? : *string*

*Defined in [packages/host-inventory/api.ts:218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L218)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` insights_id

• **insights_id**? : *string*

*Defined in [packages/host-inventory/api.ts:182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L182)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L212)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L224)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

###  reporter

• **reporter**: *string*

*Defined in [packages/host-inventory/api.ts:254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L254)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostIn

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string*

*Defined in [packages/host-inventory/api.ts:188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L188)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` satellite_id

• **satellite_id**? : *string*

*Defined in [packages/host-inventory/api.ts:200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L200)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

###  stale_timestamp

• **stale_timestamp**: *string*

*Defined in [packages/host-inventory/api.ts:248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L248)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostIn

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string*

*Defined in [packages/host-inventory/api.ts:194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L194)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` system_profile

• **system_profile**? : *[SystemProfile](systemprofile.md)*

*Defined in [packages/host-inventory/api.ts:242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L242)*

**`memberof`** CreateHostIn
