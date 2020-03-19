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
* [ansibleHost](createhostin.md#optional-ansiblehost)
* [biosUuid](createhostin.md#optional-biosuuid)
* [displayName](createhostin.md#optional-displayname)
* [externalId](createhostin.md#optional-externalid)
* [facts](createhostin.md#optional-facts)
* [fqdn](createhostin.md#optional-fqdn)
* [insightsId](createhostin.md#optional-insightsid)
* [ipAddresses](createhostin.md#optional-ipaddresses)
* [macAddresses](createhostin.md#optional-macaddresses)
* [reporter](createhostin.md#reporter)
* [rhelMachineId](createhostin.md#optional-rhelmachineid)
* [satelliteId](createhostin.md#optional-satelliteid)
* [staleTimestamp](createhostin.md#staletimestamp)
* [subscriptionManagerId](createhostin.md#optional-subscriptionmanagerid)
* [systemProfile](createhostin.md#optional-systemprofile)
* [tags](createhostin.md#optional-tags)

## Properties

###  account

• **account**: *string*

*Defined in [api.ts:211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L211)*

A Red Hat Account number that owns the host.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` ansibleHost

• **ansibleHost**? : *string*

*Defined in [api.ts:205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L205)*

The ansible host name for remediations

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` biosUuid

• **biosUuid**? : *string*

*Defined in [api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L241)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` displayName

• **displayName**? : *string*

*Defined in [api.ts:199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L199)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` externalId

• **externalId**? : *string*

*Defined in [api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L265)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` facts

• **facts**? : *Array‹[FactSet](factset.md)›*

*Defined in [api.ts:271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L271)*

A set of facts belonging to the host.

**`type`** {Array<FactSet>}

**`memberof`** CreateHostIn

___

### `Optional` fqdn

• **fqdn**? : *string*

*Defined in [api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L253)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` insightsId

• **insightsId**? : *string*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L217)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` ipAddresses

• **ipAddresses**? : *Array‹string›*

*Defined in [api.ts:247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L247)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** CreateHostIn

___

### `Optional` macAddresses

• **macAddresses**? : *Array‹string›*

*Defined in [api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L259)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`type`** {Array<string>}

**`memberof`** CreateHostIn

___

###  reporter

• **reporter**: *string*

*Defined in [api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L295)*

Reporting source of the host. Used when updating the stale_timestamp.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` rhelMachineId

• **rhelMachineId**? : *string*

*Defined in [api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L223)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` satelliteId

• **satelliteId**? : *string*

*Defined in [api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L235)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

###  staleTimestamp

• **staleTimestamp**: *Date*

*Defined in [api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L289)*

Timestamp from which the host is considered stale.

**`type`** {Date}

**`memberof`** CreateHostIn

___

### `Optional` subscriptionManagerId

• **subscriptionManagerId**? : *string*

*Defined in [api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L229)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`type`** {string}

**`memberof`** CreateHostIn

___

### `Optional` systemProfile

• **systemProfile**? : *[SystemProfileIn](systemprofilein.md)*

*Defined in [api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L283)*

**`type`** {SystemProfileIn}

**`memberof`** CreateHostIn

___

### `Optional` tags

• **tags**? : *Array‹[StructuredTag](structuredtag.md)›*

*Defined in [api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L277)*

The tags on a host

**`type`** {Array<StructuredTag>}

**`memberof`** CreateHostIn
