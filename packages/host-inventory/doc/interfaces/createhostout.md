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
* [biosUuid](createhostout.md#biosuuid)
* [created](createhostout.md#created)
* [displayName](createhostout.md#displayname)
* [externalId](createhostout.md#externalid)
* [facts](createhostout.md#facts)
* [fqdn](createhostout.md#fqdn)
* [id](createhostout.md#id)
* [insightsId](createhostout.md#insightsid)
* [ipAddresses](createhostout.md#ipaddresses)
* [macAddresses](createhostout.md#macaddresses)
* [rhelMachineId](createhostout.md#rhelmachineid)
* [satelliteId](createhostout.md#satelliteid)
* [subscriptionManagerId](createhostout.md#subscriptionmanagerid)
* [updated](createhostout.md#updated)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in api.ts:233*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in api.ts:263*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in api.ts:299*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in api.ts:227*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in api.ts:287*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in api.ts:311*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in api.ts:275*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in api.ts:293*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in api.ts:239*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in api.ts:269*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in api.ts:281*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in api.ts:245*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in api.ts:257*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in api.ts:251*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in api.ts:305*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___

