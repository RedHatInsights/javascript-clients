[@redhat-cloud-services/host-inventory-client](../README.md) > [CreateHostOut](../interfaces/createhostout.md)

# Interface: CreateHostOut

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

*__export__*: 

*__interface__*: CreateHostOut

## Hierarchy

**CreateHostOut**

## Index

### Properties

* [account](createhostout.md#account)
* [ansibleHost](createhostout.md#ansiblehost)
* [biosUuid](createhostout.md#biosuuid)
* [created](createhostout.md#created)
* [culledTimestamp](createhostout.md#culledtimestamp)
* [displayName](createhostout.md#displayname)
* [externalId](createhostout.md#externalid)
* [facts](createhostout.md#facts)
* [fqdn](createhostout.md#fqdn)
* [id](createhostout.md#id)
* [insightsId](createhostout.md#insightsid)
* [ipAddresses](createhostout.md#ipaddresses)
* [macAddresses](createhostout.md#macaddresses)
* [reporter](createhostout.md#reporter)
* [rhelMachineId](createhostout.md#rhelmachineid)
* [satelliteId](createhostout.md#satelliteid)
* [staleTimestamp](createhostout.md#staletimestamp)
* [staleWarningTimestamp](createhostout.md#stalewarningtimestamp)
* [subscriptionManagerId](createhostout.md#subscriptionmanagerid)
* [tags](createhostout.md#tags)
* [updated](createhostout.md#updated)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in [api.ts:321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L321)*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="ansiblehost"></a>

### `<Optional>` ansibleHost

**● ansibleHost**: *`string` \| `null`*

*Defined in [api.ts:315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L315)*

The ansible host name for remediations

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in [api.ts:351](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L351)*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in [api.ts:387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L387)*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="culledtimestamp"></a>

### `<Optional>` culledTimestamp

**● culledTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L423)*

Timestamp from which the host is considered deleted.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in [api.ts:309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L309)*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in [api.ts:375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L375)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in [api.ts:399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L399)*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in [api.ts:363](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L363)*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:381](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L381)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in [api.ts:327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L327)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:357](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L357)*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L369)*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="reporter"></a>

### `<Optional>` reporter

**● reporter**: *`string` \| `null`*

*Defined in [api.ts:429](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L429)*

Reporting source of the host. Used when updating the stale\_timestamp.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in [api.ts:333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L333)*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in [api.ts:345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L345)*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="staletimestamp"></a>

### `<Optional>` staleTimestamp

**● staleTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L411)*

Timestamp from which the host is considered stale.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="stalewarningtimestamp"></a>

### `<Optional>` staleWarningTimestamp

**● staleWarningTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L417)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in [api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L339)*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`Array`<[StructuredTag](structuredtag.md)>*

*Defined in [api.ts:405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L405)*

An array of the tags on the host

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in [api.ts:393](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L393)*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___

