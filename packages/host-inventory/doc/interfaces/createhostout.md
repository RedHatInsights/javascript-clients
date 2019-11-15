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
* [tags](createhostout.md#tags)
* [updated](createhostout.md#updated)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in [api.ts:245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L245)*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="ansiblehost"></a>

### `<Optional>` ansibleHost

**● ansibleHost**: *`string` \| `null`*

*Defined in [api.ts:239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L239)*

The ansible host name for remediations

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string` \| `null`*

*Defined in [api.ts:275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L275)*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="created"></a>

### `<Optional>` created

**● created**: *`Date`*

*Defined in [api.ts:311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L311)*

A timestamp when the entry was created.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

*Defined in [api.ts:233](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L233)*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string` \| `null`*

*Defined in [api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L299)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in [api.ts:323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L323)*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string` \| `null`*

*Defined in [api.ts:287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L287)*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`string`*

*Defined in [api.ts:305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L305)*

A durable and reliable platform-wide host identifier. Applications should use this identifier to reference hosts.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string` \| `null`*

*Defined in [api.ts:251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L251)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:281](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L281)*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`> \| `null`*

*Defined in [api.ts:293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L293)*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string` \| `null`*

*Defined in [api.ts:257](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L257)*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string` \| `null`*

*Defined in [api.ts:269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L269)*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string` \| `null`*

*Defined in [api.ts:263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L263)*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostOut

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`Array`<[StructuredTag](structuredtag.md)>*

*Defined in [api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L329)*

*__type__*: {Array}

*__memberof__*: CreateHostOut

___
<a id="updated"></a>

### `<Optional>` updated

**● updated**: *`Date`*

*Defined in [api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L317)*

A timestamp when the entry was last updated.

*__type__*: {Date}

*__memberof__*: CreateHostOut

___

