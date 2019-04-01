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
* [biosUuid](hostout.md#biosuuid)
* [created](hostout.md#created)
* [displayName](hostout.md#displayname)
* [externalId](hostout.md#externalid)
* [facts](hostout.md#facts)
* [fqdn](hostout.md#fqdn)
* [id](hostout.md#id)
* [insightsId](hostout.md#insightsid)
* [ipAddresses](hostout.md#ipaddresses)
* [macAddresses](hostout.md#macaddresses)
* [rhelMachineId](hostout.md#rhelmachineid)
* [satelliteId](hostout.md#satelliteid)
* [subscriptionManagerId](hostout.md#subscriptionmanagerid)
* [updated](hostout.md#updated)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in api.ts:409*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in api.ts:439*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in api.ts:475*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: HostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in api.ts:403*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in api.ts:463*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in api.ts:487*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in api.ts:451*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in api.ts:469*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in api.ts:415*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in api.ts:445*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in api.ts:457*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: HostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in api.ts:421*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in api.ts:433*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in api.ts:427*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: HostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in api.ts:481*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: HostOut

___

