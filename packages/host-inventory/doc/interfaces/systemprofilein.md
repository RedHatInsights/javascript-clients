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
* [cloudProvider](systemprofilein.md#cloudprovider)
* [coresPerSocket](systemprofilein.md#corespersocket)
* [cpuFlags](systemprofilein.md#cpuflags)
* [diskDevices](systemprofilein.md#diskdevices)
* [dnfModules](systemprofilein.md#dnfmodules)
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

*Defined in [api.ts:919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L919)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosreleasedate"></a>

### `<Optional>` biosReleaseDate

**● biosReleaseDate**: *`string`*

*Defined in [api.ts:895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L895)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosvendor"></a>

### `<Optional>` biosVendor

**● biosVendor**: *`string`*

*Defined in [api.ts:883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L883)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosversion"></a>

### `<Optional>` biosVersion

**● biosVersion**: *`string`*

*Defined in [api.ts:889](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L889)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="cloudprovider"></a>

### `<Optional>` cloudProvider

**● cloudProvider**: *`string`*

*Defined in [api.ts:967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L967)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="corespersocket"></a>

### `<Optional>` coresPerSocket

**● coresPerSocket**: *`number`*

*Defined in [api.ts:847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L847)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="cpuflags"></a>

### `<Optional>` cpuFlags

**● cpuFlags**: *`Array`<`string`>*

*Defined in [api.ts:901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L901)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="diskdevices"></a>

### `<Optional>` diskDevices

**● diskDevices**: *`Array`<[DiskDevice](diskdevice.md)>*

*Defined in [api.ts:877](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L877)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="dnfmodules"></a>

### `<Optional>` dnfModules

**● dnfModules**: *`Array`<[DnfModule](dnfmodule.md)>*

*Defined in [api.ts:979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L979)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="enabledservices"></a>

### `<Optional>` enabledServices

**● enabledServices**: *`Array`<`string`>*

*Defined in [api.ts:1015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1015)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="infrastructuretype"></a>

### `<Optional>` infrastructureType

**● infrastructureType**: *`string`*

*Defined in [api.ts:859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L859)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="infrastructurevendor"></a>

### `<Optional>` infrastructureVendor

**● infrastructureVendor**: *`string`*

*Defined in [api.ts:865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L865)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightsclientversion"></a>

### `<Optional>` insightsClientVersion

**● insightsClientVersion**: *`string`*

*Defined in [api.ts:991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L991)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightseggversion"></a>

### `<Optional>` insightsEggVersion

**● insightsEggVersion**: *`string`*

*Defined in [api.ts:997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L997)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="installedpackages"></a>

### `<Optional>` installedPackages

**● installedPackages**: *`Array`<`string`>*

*Defined in [api.ts:1003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1003)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedproducts"></a>

### `<Optional>` installedProducts

**● installedProducts**: *`Array`<[InstalledProduct](installedproduct.md)>*

*Defined in [api.ts:985](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L985)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedservices"></a>

### `<Optional>` installedServices

**● installedServices**: *`Array`<`string`>*

*Defined in [api.ts:1009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1009)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="katelloagentrunning"></a>

### `<Optional>` katelloAgentRunning

**● katelloAgentRunning**: *`boolean`*

*Defined in [api.ts:955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L955)*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="kernelmodules"></a>

### `<Optional>` kernelModules

**● kernelModules**: *`Array`<`string`>*

*Defined in [api.ts:925](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L925)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="lastboottime"></a>

### `<Optional>` lastBootTime

**● lastBootTime**: *`Date`*

*Defined in [api.ts:931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L931)*

*__type__*: {Date}

*__memberof__*: SystemProfileIn

___
<a id="networkinterfaces"></a>

### `<Optional>` networkInterfaces

**● networkInterfaces**: *`Array`<[NetworkInterface](networkinterface.md)>*

*Defined in [api.ts:871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L871)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="numberofcpus"></a>

### `<Optional>` numberOfCpus

**● numberOfCpus**: *`number`*

*Defined in [api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L835)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="numberofsockets"></a>

### `<Optional>` numberOfSockets

**● numberOfSockets**: *`number`*

*Defined in [api.ts:841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L841)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="oskernelversion"></a>

### `<Optional>` osKernelVersion

**● osKernelVersion**: *`string`*

*Defined in [api.ts:913](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L913)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="osrelease"></a>

### `<Optional>` osRelease

**● osRelease**: *`string`*

*Defined in [api.ts:907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L907)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="runningprocesses"></a>

### `<Optional>` runningProcesses

**● runningProcesses**: *`Array`<`string`>*

*Defined in [api.ts:937](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L937)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="satellitemanaged"></a>

### `<Optional>` satelliteManaged

**● satelliteManaged**: *`boolean`*

*Defined in [api.ts:961](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L961)*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionautoattach"></a>

### `<Optional>` subscriptionAutoAttach

**● subscriptionAutoAttach**: *`string`*

*Defined in [api.ts:949](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L949)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionstatus"></a>

### `<Optional>` subscriptionStatus

**● subscriptionStatus**: *`string`*

*Defined in [api.ts:943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L943)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="systemmemorybytes"></a>

### `<Optional>` systemMemoryBytes

**● systemMemoryBytes**: *`number`*

*Defined in [api.ts:853](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L853)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="yumrepos"></a>

### `<Optional>` yumRepos

**● yumRepos**: *`Array`<[YumRepo](yumrepo.md)>*

*Defined in [api.ts:973](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L973)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___

