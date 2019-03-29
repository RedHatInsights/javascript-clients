[@redhat-cloud-services/host-inventory](../README.md) > [CreateHostIn](../interfaces/createhostin.md)

# Interface: CreateHostIn

Data of a single host belonging to an account. Represents the hosts without its Inventory metadata.

*__export__*: 

*__interface__*: CreateHostIn

## Hierarchy

**CreateHostIn**

## Index

### Properties

* [account](createhostin.md#account)
* [biosUuid](createhostin.md#biosuuid)
* [displayName](createhostin.md#displayname)
* [externalId](createhostin.md#externalid)
* [facts](createhostin.md#facts)
* [fqdn](createhostin.md#fqdn)
* [insightsId](createhostin.md#insightsid)
* [ipAddresses](createhostin.md#ipaddresses)
* [macAddresses](createhostin.md#macaddresses)
* [rhelMachineId](createhostin.md#rhelmachineid)
* [satelliteId](createhostin.md#satelliteid)
* [subscriptionManagerId](createhostin.md#subscriptionmanagerid)
* [systemProfile](createhostin.md#systemprofile)

---

## Properties

<a id="account"></a>

###  account

**● account**: *`string`*

*Defined in api.ts:147*

A Red Hat Account number that owns the host.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="biosuuid"></a>

### `<Optional>` biosUuid

**● biosUuid**: *`string`*

*Defined in api.ts:177*

A UUID of the host machine BIOS. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string`*

*Defined in api.ts:141*

A host’s human-readable display name, e.g. in a form of a domain name.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="externalid"></a>

### `<Optional>` externalId

**● externalId**: *`string`*

*Defined in api.ts:201*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="facts"></a>

### `<Optional>` facts

**● facts**: *`Array`<[FactSet](factset.md)>*

*Defined in api.ts:207*

A set of facts belonging to the host.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="fqdn"></a>

### `<Optional>` fqdn

**● fqdn**: *`string`*

*Defined in api.ts:189*

A host’s Fully Qualified Domain Name. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="insightsid"></a>

### `<Optional>` insightsId

**● insightsId**: *`string`*

*Defined in api.ts:153*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="ipaddresses"></a>

### `<Optional>` ipAddresses

**● ipAddresses**: *`Array`<`string`>*

*Defined in api.ts:183*

Host’s network IP addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="macaddresses"></a>

### `<Optional>` macAddresses

**● macAddresses**: *`Array`<`string`>*

*Defined in api.ts:195*

Host’s network interfaces MAC addresses. This field is considered to be a canonical fact.

*__type__*: {Array}

*__memberof__*: CreateHostIn

___
<a id="rhelmachineid"></a>

### `<Optional>` rhelMachineId

**● rhelMachineId**: *`string`*

*Defined in api.ts:159*

A Machine ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="satelliteid"></a>

### `<Optional>` satelliteId

**● satelliteId**: *`string`*

*Defined in api.ts:171*

A Red Hat Satellite ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="subscriptionmanagerid"></a>

### `<Optional>` subscriptionManagerId

**● subscriptionManagerId**: *`string`*

*Defined in api.ts:165*

A Red Hat Subcription Manager ID of a RHEL host. This field is considered to be a canonical fact.

*__type__*: {string}

*__memberof__*: CreateHostIn

___
<a id="systemprofile"></a>

### `<Optional>` systemProfile

**● systemProfile**: *[SystemProfileIn](systemprofilein.md)*

*Defined in api.ts:213*

*__type__*: {SystemProfileIn}

*__memberof__*: CreateHostIn

___

