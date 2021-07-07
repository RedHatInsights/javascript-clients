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
* [reporter](createhostoutallof.md#optional-reporter)
* [stale_timestamp](createhostoutallof.md#optional-stale_timestamp)
* [stale_warning_timestamp](createhostoutallof.md#optional-stale_warning_timestamp)
* [updated](createhostoutallof.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [packages/host-inventory/api.ts:551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L551)*

A Red Hat Account number that owns the host.

**`memberof`** CreateHostOutAllOf

___

### `Optional` ansible_host

• **ansible_host**? : *string | null*

*Defined in [packages/host-inventory/api.ts:545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L545)*

The ansible host name for remediations

**`memberof`** CreateHostOutAllOf

___

### `Optional` created

• **created**? : *string*

*Defined in [packages/host-inventory/api.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L563)*

A timestamp when the entry was created.

**`memberof`** CreateHostOutAllOf

___

### `Optional` culled_timestamp

• **culled_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:593](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L593)*

Timestamp from which the host is considered deleted.

**`memberof`** CreateHostOutAllOf

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [packages/host-inventory/api.ts:539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L539)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** CreateHostOutAllOf

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [packages/host-inventory/api.ts:575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L575)*

A set of facts belonging to the host.

**`memberof`** CreateHostOutAllOf

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/host-inventory/api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L557)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`memberof`** CreateHostOutAllOf

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [packages/host-inventory/api.ts:599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L599)*

Reporting source of the host. Used when updating the stale_timestamp.

**`memberof`** CreateHostOutAllOf

___

### `Optional` stale_timestamp

• **stale_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L581)*

Timestamp from which the host is considered stale.

**`memberof`** CreateHostOutAllOf

___

### `Optional` stale_warning_timestamp

• **stale_warning_timestamp**? : *string | null*

*Defined in [packages/host-inventory/api.ts:587](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L587)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`memberof`** CreateHostOutAllOf

___

### `Optional` updated

• **updated**? : *string*

*Defined in [packages/host-inventory/api.ts:569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L569)*

A timestamp when the entry was last updated.

**`memberof`** CreateHostOutAllOf
