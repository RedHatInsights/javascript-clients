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

*Defined in [api.ts:469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L469)*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="ansiblehost"></a>

### `<Optional>` ansibleHost

**● ansibleHost**: *`string` \| `null`*

*Defined in [api.ts:463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L463)*

The ansible host name for remediations

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in [api.ts:499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L499)*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in [api.ts:535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L535)*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="culledtimestamp"></a>

### `<Optional>` culledTimestamp

**● culledTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L571)*

Timestamp from which the host is considered deleted.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in [api.ts:457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L457)*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in [api.ts:523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L523)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in [api.ts:547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L547)*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in [api.ts:511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L511)*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L529)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in [api.ts:475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L475)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:505](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L505)*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L517)*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="reporter"></a>

### `<Optional>` reporter

**● reporter**: *`string` \| `null`*

*Defined in [api.ts:577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L577)*

Reporting source of the host. Used when updating the stale\_timestamp.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in [api.ts:481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L481)*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in [api.ts:493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L493)*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="staletimestamp"></a>

### `<Optional>` staleTimestamp

**● staleTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L559)*

Timestamp from which the host is considered stale.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="stalewarningtimestamp"></a>

### `<Optional>` staleWarningTimestamp

**● staleWarningTimestamp**: *`Date` \| `null`*

*Defined in [api.ts:565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L565)*

Timestamp from which the host is considered too stale to be listed without an explicit toggle.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in [api.ts:487](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L487)*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`Array`<[StructuredTag](structuredtag.md)>*

*Defined in [api.ts:553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L553)*

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in [api.ts:541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L541)*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: HostOut

___

