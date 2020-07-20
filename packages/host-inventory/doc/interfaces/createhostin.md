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

*Defined in [packages/host-inventory/api.ts:157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L157)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostIn

___

### `Optional` ansible_host

• **ansible_host**? : *string*

*Defined in [packages/host-inventory/api.ts:151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L151)*

The ansible host name for remediations

**`memberof`** CreateHostIn

___

### `Optional` bios_uuid

• **bios_uuid**? : *string*

*Defined in [packages/host-inventory/api.ts:187](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L187)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` display_name

• **display_name**? : *string*

*Defined in [packages/host-inventory/api.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L145)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostIn

___

### `Optional` external_id

• **external_id**? : *string*

*Defined in [packages/host-inventory/api.ts:211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L211)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L217)*

A set of facts belonging to the host.

**`memberof`** CreateHostIn

___

### `Optional` fqdn

• **fqdn**? : *string*

*Defined in [packages/host-inventory/api.ts:199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L199)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` insights_id

• **insights_id**? : *string*

*Defined in [packages/host-inventory/api.ts:163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L163)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:193](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L193)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L205)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

###  reporter

• **reporter**: *string*

*Defined in [packages/host-inventory/api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L235)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostIn

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string*

*Defined in [packages/host-inventory/api.ts:169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L169)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` satellite_id

• **satellite_id**? : *string*

*Defined in [packages/host-inventory/api.ts:181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L181)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

###  stale_timestamp

• **stale_timestamp**: *string*

*Defined in [packages/host-inventory/api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L229)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostIn

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string*

*Defined in [packages/host-inventory/api.ts:175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L175)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateHostIn

___

### `Optional` system_profile

• **system_profile**? : *[SystemProfile](systemprofile.md)*

*Defined in [packages/host-inventory/api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L223)*

**`memberof`** CreateHostIn
