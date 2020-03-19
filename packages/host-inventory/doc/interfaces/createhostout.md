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
* [ansibleHost](createhostout.md#optional-ansiblehost)
* [biosUuid](createhostout.md#optional-biosuuid)
* [created](createhostout.md#optional-created)
* [culledTimestamp](createhostout.md#optional-culledtimestamp)
* [displayName](createhostout.md#optional-displayname)
* [externalId](createhostout.md#optional-externalid)
* [facts](createhostout.md#optional-facts)
* [fqdn](createhostout.md#optional-fqdn)
* [id](createhostout.md#optional-id)
* [insightsId](createhostout.md#optional-insightsid)
* [ipAddresses](createhostout.md#optional-ipaddresses)
* [macAddresses](createhostout.md#optional-macaddresses)
* [reporter](createhostout.md#optional-reporter)
* [rhelMachineId](createhostout.md#optional-rhelmachineid)
* [satelliteId](createhostout.md#optional-satelliteid)
* [staleTimestamp](createhostout.md#optional-staletimestamp)
* [staleWarningTimestamp](createhostout.md#optional-stalewarningtimestamp)
* [subscriptionManagerId](createhostout.md#optional-subscriptionmanagerid)
* [tags](createhostout.md#optional-tags)
* [updated](createhostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [api.ts:321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L321)*

A Red Hat Account number that owns the host.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` ansibleHost

• **ansibleHost**? : *string | null*

*Defined in [api.ts:315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L315)*

The ansible host name for remediations

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` biosUuid

• **biosUuid**? : *string | null*

*Defined in [api.ts:351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L351)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` created

• **created**? : *Date*

*Defined in [api.ts:387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L387)*

A timestamp when the entry was created.

**`type`** {Date}

**`memberof`** CreateHostOut

___

### `Optional` culledTimestamp

• **culledTimestamp**? : *Date | null*

*Defined in [api.ts:423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L423)*

Timestamp from which the host is considered deleted.

**`type`** {Date}

**`memberof`** CreateHostOut

___

### `Optional` displayName

• **displayName**? : *string | null*

*Defined in [api.ts:309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L309)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` externalId

• **externalId**? : *string | null*

*Defined in [api.ts:375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L375)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [api.ts:399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L399)*

A set of facts belonging to the host.

**`type`** {Array<FactSet>}

**`memberof`** CreateHostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [api.ts:363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L363)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L381)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` insightsId

• **insightsId**? : *string | null*

*Defined in [api.ts:327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L327)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` ipAddresses

• **ipAddresses**? : *Array‹string› | null*

*Defined in [api.ts:357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L357)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** CreateHostOut

___

### `Optional` macAddresses

• **macAddresses**? : *Array‹string› | null*

*Defined in [api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L369)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** CreateHostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [api.ts:429](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L429)*

Reporting source of the host. Used when updating the stale_timestamp.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` rhelMachineId

• **rhelMachineId**? : *string | null*

*Defined in [api.ts:333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L333)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` satelliteId

• **satelliteId**? : *string | null*

*Defined in [api.ts:345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L345)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` staleTimestamp

• **staleTimestamp**? : *Date | null*

*Defined in [api.ts:411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L411)*

Timestamp from which the host is considered stale.

**`type`** {Date}

**`memberof`** CreateHostOut

___

### `Optional` staleWarningTimestamp

• **staleWarningTimestamp**? : *Date | null*

*Defined in [api.ts:417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L417)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`type`** {Date}

**`memberof`** CreateHostOut

___

### `Optional` subscriptionManagerId

• **subscriptionManagerId**? : *string | null*

*Defined in [api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L339)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostOut

___

### `Optional` tags

• **tags**? : *Array‹[StructuredTag](structuredtag.md)›*

*Defined in [api.ts:405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L405)*

An array of the tags on the host

**`type`** {Array<StructuredTag>}

**`memberof`** CreateHostOut

___

### `Optional` updated

• **updated**? : *Date*

*Defined in [api.ts:393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L393)*

A timestamp when the entry was last updated.

**`type`** {Date}

**`memberof`** CreateHostOut
