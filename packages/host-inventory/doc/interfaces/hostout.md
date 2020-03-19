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
* [ansibleHost](hostout.md#optional-ansiblehost)
* [biosUuid](hostout.md#optional-biosuuid)
* [created](hostout.md#optional-created)
* [culledTimestamp](hostout.md#optional-culledtimestamp)
* [displayName](hostout.md#optional-displayname)
* [externalId](hostout.md#optional-externalid)
* [facts](hostout.md#optional-facts)
* [fqdn](hostout.md#optional-fqdn)
* [id](hostout.md#optional-id)
* [insightsId](hostout.md#optional-insightsid)
* [ipAddresses](hostout.md#optional-ipaddresses)
* [macAddresses](hostout.md#optional-macaddresses)
* [reporter](hostout.md#optional-reporter)
* [rhelMachineId](hostout.md#optional-rhelmachineid)
* [satelliteId](hostout.md#optional-satelliteid)
* [staleTimestamp](hostout.md#optional-staletimestamp)
* [staleWarningTimestamp](hostout.md#optional-stalewarningtimestamp)
* [subscriptionManagerId](hostout.md#optional-subscriptionmanagerid)
* [tags](hostout.md#optional-tags)
* [updated](hostout.md#optional-updated)

## Properties

###  account

• **account**: *string*

*Defined in [api.ts:553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L553)*

A Red Hat Account number that owns the host.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` ansibleHost

• **ansibleHost**? : *string | null*

*Defined in [api.ts:547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L547)*

The ansible host name for remediations

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` biosUuid

• **biosUuid**? : *string | null*

*Defined in [api.ts:583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L583)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` created

• **created**? : *Date*

*Defined in [api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L619)*

A timestamp when the entry was created.

**`type`** {Date}

**`memberof`** HostOut

___

### `Optional` culledTimestamp

• **culledTimestamp**? : *Date | null*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L655)*

Timestamp from which the host is considered deleted.

**`type`** {Date}

**`memberof`** HostOut

___

### `Optional` displayName

• **displayName**? : *string | null*

*Defined in [api.ts:541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L541)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` externalId

• **externalId**? : *string | null*

*Defined in [api.ts:607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L607)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [api.ts:631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L631)*

A set of facts belonging to the host.

**`type`** {Array<FactSet>}

**`memberof`** HostOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [api.ts:595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L595)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L613)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` insightsId

• **insightsId**? : *string | null*

*Defined in [api.ts:559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L559)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` ipAddresses

• **ipAddresses**? : *Array‹string› | null*

*Defined in [api.ts:589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L589)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** HostOut

___

### `Optional` macAddresses

• **macAddresses**? : *Array‹string› | null*

*Defined in [api.ts:601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L601)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** HostOut

___

### `Optional` reporter

• **reporter**? : *string | null*

*Defined in [api.ts:661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L661)*

Reporting source of the host. Used when updating the stale_timestamp.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` rhelMachineId

• **rhelMachineId**? : *string | null*

*Defined in [api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L565)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` satelliteId

• **satelliteId**? : *string | null*

*Defined in [api.ts:577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L577)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` staleTimestamp

• **staleTimestamp**? : *Date | null*

*Defined in [api.ts:643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L643)*

Timestamp from which the host is considered stale.

**`type`** {Date}

**`memberof`** HostOut

___

### `Optional` staleWarningTimestamp

• **staleWarningTimestamp**? : *Date | null*

*Defined in [api.ts:649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L649)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

**`type`** {Date}

**`memberof`** HostOut

___

### `Optional` subscriptionManagerId

• **subscriptionManagerId**? : *string | null*

*Defined in [api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L571)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** HostOut

___

### `Optional` tags

• **tags**? : *Array‹[StructuredTag](structuredtag.md)›*

*Defined in [api.ts:637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L637)*

An array of the tags on the host

**`type`** {Array<StructuredTag>}

**`memberof`** HostOut

___

### `Optional` updated

• **updated**? : *Date*

*Defined in [api.ts:625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L625)*

A timestamp when the entry was last updated.

**`type`** {Date}

**`memberof`** HostOut
