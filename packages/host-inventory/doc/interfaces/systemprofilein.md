[@redhat-cloud-services/host-inventory-client](../README.md) > [SystemProfileIn](../interfaces/systemprofilein.md)

# Interface: SystemProfileIn

Representation of the system profile fields

*__export__*: 

*__interface__*: SystemProfileIn

## Hierarchy

**SystemProfileIn**

## Index

### Properties

* [arch](systemprofilein.md#arch)
* [biosReleaseDate](systemprofilein.md#biosreleasedate)
* [biosVendor](systemprofilein.md#biosvendor)
* [biosVersion](systemprofilein.md#biosversion)
* [coresPerSocket](systemprofilein.md#corespersocket)
* [cpuFlags](systemprofilein.md#cpuflags)
* [diskDevices](systemprofilein.md#diskdevices)
* [enabledServices](systemprofilein.md#enabledservices)
* [infrastructureType](systemprofilein.md#infrastructuretype)
* [infrastructureVendor](systemprofilein.md#infrastructurevendor)
* [insightsClientVersion](systemprofilein.md#insightsclientversion)
* [insightsEggVersion](systemprofilein.md#insightseggversion)
* [installedPackages](systemprofilein.md#installedpackages)
* [installedProducts](systemprofilein.md#installedproducts)
* [installedServices](systemprofilein.md#installedservices)
* [katelloAgentRunning](systemprofilein.md#katelloagentrunning)
* [kernelModules](systemprofilein.md#kernelmodules)
* [lastBootTime](systemprofilein.md#lastboottime)
* [networkInterfaces](systemprofilein.md#networkinterfaces)
* [numberOfCpus](systemprofilein.md#numberofcpus)
* [numberOfSockets](systemprofilein.md#numberofsockets)
* [osKernelVersion](systemprofilein.md#oskernelversion)
* [osRelease](systemprofilein.md#osrelease)
* [runningProcesses](systemprofilein.md#runningprocesses)
* [satelliteManaged](systemprofilein.md#satellitemanaged)
* [subscriptionAutoAttach](systemprofilein.md#subscriptionautoattach)
* [subscriptionStatus](systemprofilein.md#subscriptionstatus)
* [systemMemoryBytes](systemprofilein.md#systemmemorybytes)
* [yumRepos](systemprofilein.md#yumrepos)

---

## Properties

<a id="arch"></a>

### `<Optional>` arch

**● arch**: *`string`*

*Defined in api.ts:757*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosreleasedate"></a>

### `<Optional>` biosReleaseDate

**● biosReleaseDate**: *`string`*

*Defined in api.ts:733*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosvendor"></a>

### `<Optional>` biosVendor

**● biosVendor**: *`string`*

*Defined in api.ts:721*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosversion"></a>

### `<Optional>` biosVersion

**● biosVersion**: *`string`*

*Defined in api.ts:727*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="corespersocket"></a>

### `<Optional>` coresPerSocket

**● coresPerSocket**: *`number`*

*Defined in api.ts:685*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="cpuflags"></a>

### `<Optional>` cpuFlags

**● cpuFlags**: *`Array`<`string`>*

*Defined in api.ts:739*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="diskdevices"></a>

### `<Optional>` diskDevices

**● diskDevices**: *`Array`<[DiskDevice](diskdevice.md)>*

*Defined in api.ts:715*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="enabledservices"></a>

### `<Optional>` enabledServices

**● enabledServices**: *`Array`<`string`>*

*Defined in api.ts:841*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="infrastructuretype"></a>

### `<Optional>` infrastructureType

**● infrastructureType**: *`string`*

*Defined in api.ts:697*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="infrastructurevendor"></a>

### `<Optional>` infrastructureVendor

**● infrastructureVendor**: *`string`*

*Defined in api.ts:703*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightsclientversion"></a>

### `<Optional>` insightsClientVersion

**● insightsClientVersion**: *`string`*

*Defined in api.ts:817*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightseggversion"></a>

### `<Optional>` insightsEggVersion

**● insightsEggVersion**: *`string`*

*Defined in api.ts:823*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="installedpackages"></a>

### `<Optional>` installedPackages

**● installedPackages**: *`Array`<`string`>*

*Defined in api.ts:829*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedproducts"></a>

### `<Optional>` installedProducts

**● installedProducts**: *`Array`<[InstalledProduct](installedproduct.md)>*

*Defined in api.ts:811*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedservices"></a>

### `<Optional>` installedServices

**● installedServices**: *`Array`<`string`>*

*Defined in api.ts:835*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="katelloagentrunning"></a>

### `<Optional>` katelloAgentRunning

**● katelloAgentRunning**: *`boolean`*

*Defined in api.ts:793*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="kernelmodules"></a>

### `<Optional>` kernelModules

**● kernelModules**: *`Array`<`string`>*

*Defined in api.ts:763*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="lastboottime"></a>

### `<Optional>` lastBootTime

**● lastBootTime**: *`Date`*

*Defined in api.ts:769*

*__type__*: {Date}

*__memberof__*: SystemProfileIn

___
<a id="networkinterfaces"></a>

### `<Optional>` networkInterfaces

**● networkInterfaces**: *`Array`<[NetworkInterface](networkinterface.md)>*

*Defined in api.ts:709*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="numberofcpus"></a>

### `<Optional>` numberOfCpus

**● numberOfCpus**: *`number`*

*Defined in api.ts:673*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="numberofsockets"></a>

### `<Optional>` numberOfSockets

**● numberOfSockets**: *`number`*

*Defined in api.ts:679*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="oskernelversion"></a>

### `<Optional>` osKernelVersion

**● osKernelVersion**: *`string`*

*Defined in api.ts:751*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="osrelease"></a>

### `<Optional>` osRelease

**● osRelease**: *`string`*

*Defined in api.ts:745*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="runningprocesses"></a>

### `<Optional>` runningProcesses

**● runningProcesses**: *`Array`<`string`>*

*Defined in api.ts:775*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="satellitemanaged"></a>

### `<Optional>` satelliteManaged

**● satelliteManaged**: *`boolean`*

*Defined in api.ts:799*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionautoattach"></a>

### `<Optional>` subscriptionAutoAttach

**● subscriptionAutoAttach**: *`string`*

*Defined in api.ts:787*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionstatus"></a>

### `<Optional>` subscriptionStatus

**● subscriptionStatus**: *`string`*

*Defined in api.ts:781*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="systemmemorybytes"></a>

### `<Optional>` systemMemoryBytes

**● systemMemoryBytes**: *`number`*

*Defined in api.ts:691*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="yumrepos"></a>

### `<Optional>` yumRepos

**● yumRepos**: *`Array`<[YumRepo](yumrepo.md)>*

*Defined in api.ts:805*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___

