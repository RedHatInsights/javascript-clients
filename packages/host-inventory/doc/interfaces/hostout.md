[@redhat-cloud-services/host-inventory-client](../README.md) > [HostOut](../interfaces/hostout.md)

# Interface: HostOut

A database entry representing a single host with its Inventory metadata.

*__export__*: 

*__interface__*: HostOut

## Hierarchy

**HostOut**

## Index

### Properties

* [account](hostout.md#account)
* [ansibleHost](hostout.md#ansiblehost)
* [biosUuid](hostout.md#biosuuid)
* [created](hostout.md#created)
* [culledTimestamp](hostout.md#culledtimestamp)
* [displayName](hostout.md#displayname)
* [externalId](hostout.md#externalid)
* [facts](hostout.md#facts)
* [fqdn](hostout.md#fqdn)
* [id](hostout.md#id)
* [insightsId](hostout.md#insightsid)
* [ipAddresses](hostout.md#ipaddresses)
* [macAddresses](hostout.md#macaddresses)
* [reporter](hostout.md#reporter)
* [rhelMachineId](hostout.md#rhelmachineid)
* [satelliteId](hostout.md#satelliteid)
* [staleTimestamp](hostout.md#staletimestamp)
* [staleWarningTimestamp](hostout.md#stalewarningtimestamp)
* [subscriptionManagerId](hostout.md#subscriptionmanagerid)
* [tags](hostout.md#tags)
* [updated](hostout.md#updated)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in [api.ts:495](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L495)*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="ansiblehost"></a>

### `<Optional>` ansibleHost

**● ansibleHost**: *`string` \| `null`*

*Defined in [api.ts:489](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L489)*

The ansible host name for remediations

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in [api.ts:525](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L525)*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in [api.ts:561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L561)*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="culledtimestamp"></a>

### `<Optional>` culledTimestamp

**● culledTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L597)*

Timestamp from which the host is considered deleted.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in [api.ts:483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L483)*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in [api.ts:549](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L549)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in [api.ts:573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L573)*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in [api.ts:537](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L537)*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:555](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L555)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in [api.ts:501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L501)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L531)*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L543)*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="reporter"></a>

### `<Optional>` reporter

**● reporter**: *`string` \| `null`*

*Defined in [api.ts:603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L603)*

Reporting source of the host. Used when updating the stale\_timestamp.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in [api.ts:507](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L507)*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in [api.ts:519](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L519)*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="staletimestamp"></a>

### `<Optional>` staleTimestamp

**● staleTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:585](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L585)*

Timestamp from which the host is considered stale.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="stalewarningtimestamp"></a>

### `<Optional>` staleWarningTimestamp

**● staleWarningTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:591](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L591)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in [api.ts:513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L513)*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`Array`<[StructuredTag](structuredtag.md)>*

*Defined in [api.ts:579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L579)*

An array of the tags on the host

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in [api.ts:567](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L567)*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: HostOut

___

