[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateHostOutAllOf](createhostoutallof.md)

# Interface: CreateHostOutAllOf

**`export`** 

**`interface`** CreateHostOutAllOf

## Hierarchy

* **CreateHostOutAllOf**

## Index

### Properties

* [account](createhostoutallof.md#account)
* [ansible_host](createhostoutallof.md#optional-ansible_host)
* [created](createhostoutallof.md#optional-created)
* [culled_timestamp](createhostoutallof.md#optional-culled_timestamp)
* [display_name](createhostoutallof.md#optional-display_name)
* [facts](createhostoutallof.md#optional-facts)
* [id](createhostoutallof.md#optional-id)
* [per_reporter_staleness](createhostoutallof.md#optional-per_reporter_staleness)
* [reporter](createhostoutallof.md#optional-reporter)
* [stale_timestamp](createhostoutallof.md#optional-stale_timestamp)
* [stale_warning_timestamp](createhostoutallof.md#optional-stale_warning_timestamp)
* [updated](createhostoutallof.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:510](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L510)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostOutAllOf

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [packages/host-inventory/api.ts:504](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L504)*

The ansible host name for remediations

**`memberof`** CreateHostOutAllOf

___

### `Optional` created

• **created**? : *string*

*Defined in [packages/host-inventory/api.ts:522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L522)*

A timestamp when the entry was created.

**`memberof`** CreateHostOutAllOf

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L552)*

Timestamp from which the host is considered deleted.

**`memberof`** CreateHostOutAllOf

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [packages/host-inventory/api.ts:498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L498)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostOutAllOf

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:534](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L534)*

A set of facts belonging to the host.

**`memberof`** CreateHostOutAllOf

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/host-inventory/api.ts:516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L516)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** CreateHostOutAllOf

___

### `Optional` per_reporter_staleness

• **per_reporter_staleness**? : *object*

*Defined in [packages/host-inventory/api.ts:564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L564)*

Reporting source of the last checkin status, stale_timestamp, and last_check_in.

**`memberof`** CreateHostOutAllOf

#### Type declaration:

* \[ **key**: *string*\]: object

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [packages/host-inventory/api.ts:558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L558)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostOutAllOf

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:540](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L540)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostOutAllOf

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:546](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L546)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** CreateHostOutAllOf

___

### `Optional` updated

• **updated**? : *string*

*Defined in [packages/host-inventory/api.ts:528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L528)*

A timestamp when the entry was last updated.

**`memberof`** CreateHostOutAllOf
