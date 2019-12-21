[@redhat-cloud-services/host-inventory-client](../README.md) > [CreateHostIn](../interfaces/createhostin.md)

# Interface: CreateHostIn

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

*__export__*: 

*__interface__*: CreateHostIn

## Hierarchy

**CreateHostIn**

## Index

### Properties

* [account](createhostin.md#account)
* [ansibleHost](createhostin.md#ansiblehost)
* [biosUuid](createhostin.md#biosuuid)
* [displayName](createhostin.md#displayname)
* [externalId](createhostin.md#externalid)
* [facts](createhostin.md#facts)
* [fqdn](createhostin.md#fqdn)
* [insightsId](createhostin.md#insightsid)
* [ipAddresses](createhostin.md#ipaddresses)
* [macAddresses](createhostin.md#macaddresses)
* [reporter](createhostin.md#reporter)
* [rhelMachineId](createhostin.md#rhelmachineid)
* [satelliteId](createhostin.md#satelliteid)
* [staleTimestamp](createhostin.md#staletimestamp)
* [subscriptionManagerId](createhostin.md#subscriptionmanagerid)
* [systemProfile](createhostin.md#systemprofile)
* [tags](createhostin.md#tags)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in [api.ts:211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L211)*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="ansiblehost"></a>

### `<Optional>` ansibleHost

**● ansibleHost**: *`string`*

*Defined in [api.ts:205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L205)*

The ansible host name for remediations

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string`*

*Defined in [api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L241)*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string`*

*Defined in [api.ts:199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L199)*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string`*

*Defined in [api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L265)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in [api.ts:271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L271)*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string`*

*Defined in [api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L253)*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string`*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L217)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`>*

*Defined in [api.ts:247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L247)*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`>*

*Defined in [api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L259)*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="reporter"></a>

### `<Optional>` reporter

**● reporter**: *`string`*

*Defined in [api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L295)*

Reporting source of the host. Used when updating the stale\_timestamp.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string`*

*Defined in [api.ts:223](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L223)*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string`*

*Defined in [api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L235)*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="staletimestamp"></a>

### `<Optional>` staleTimestamp

**● staleTimestamp**: *`Date`*

*Defined in [api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L289)*

Timestamp from which the host is considered stale.

*__type__*: {Date}

*__memberof__*: CreateHostIn

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string`*

*Defined in [api.ts:229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L229)*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="systemprofile"></a>

### `<Optional>` systemProfile

**● systemProfile**: *[SystemProfileIn](systemprofilein.md)*

*Defined in [api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L283)*

*__type__*: {SystemProfileIn}

*__memberof__*: CreateHostIn

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`Array`<[StructuredTag](structuredtag.md)>*

*Defined in [api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L277)*

The tags on a host

*__type__*: {Array}

*__memberof__*: CreateHostIn

___

