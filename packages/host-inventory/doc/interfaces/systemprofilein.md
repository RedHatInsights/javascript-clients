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

*Defined in [api.ts:977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L977)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosreleasedate"></a>

### `<Optional>` biosReleaseDate

**● biosReleaseDate**: *`string`*

*Defined in [api.ts:953](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L953)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosvendor"></a>

### `<Optional>` biosVendor

**● biosVendor**: *`string`*

*Defined in [api.ts:941](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L941)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="biosversion"></a>

### `<Optional>` biosVersion

**● biosVersion**: *`string`*

*Defined in [api.ts:947](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L947)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="cloudprovider"></a>

### `<Optional>` cloudProvider

**● cloudProvider**: *`string`*

*Defined in [api.ts:1025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1025)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="corespersocket"></a>

### `<Optional>` coresPerSocket

**● coresPerSocket**: *`number`*

*Defined in [api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L905)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="cpuflags"></a>

### `<Optional>` cpuFlags

**● cpuFlags**: *`Array`<`string`>*

*Defined in [api.ts:959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L959)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="diskdevices"></a>

### `<Optional>` diskDevices

**● diskDevices**: *`Array`<[DiskDevice](diskdevice.md)>*

*Defined in [api.ts:935](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L935)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="dnfmodules"></a>

### `<Optional>` dnfModules

**● dnfModules**: *`Array`<[DnfModule](dnfmodule.md)>*

*Defined in [api.ts:1037](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1037)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="enabledservices"></a>

### `<Optional>` enabledServices

**● enabledServices**: *`Array`<`string`>*

*Defined in [api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1073)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="infrastructuretype"></a>

### `<Optional>` infrastructureType

**● infrastructureType**: *`string`*

*Defined in [api.ts:917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L917)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="infrastructurevendor"></a>

### `<Optional>` infrastructureVendor

**● infrastructureVendor**: *`string`*

*Defined in [api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L923)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightsclientversion"></a>

### `<Optional>` insightsClientVersion

**● insightsClientVersion**: *`string`*

*Defined in [api.ts:1049](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1049)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="insightseggversion"></a>

### `<Optional>` insightsEggVersion

**● insightsEggVersion**: *`string`*

*Defined in [api.ts:1055](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1055)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="installedpackages"></a>

### `<Optional>` installedPackages

**● installedPackages**: *`Array`<`string`>*

*Defined in [api.ts:1061](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1061)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedproducts"></a>

### `<Optional>` installedProducts

**● installedProducts**: *`Array`<[InstalledProduct](installedproduct.md)>*

*Defined in [api.ts:1043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1043)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="installedservices"></a>

### `<Optional>` installedServices

**● installedServices**: *`Array`<`string`>*

*Defined in [api.ts:1067](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1067)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="katelloagentrunning"></a>

### `<Optional>` katelloAgentRunning

**● katelloAgentRunning**: *`boolean`*

*Defined in [api.ts:1013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1013)*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="kernelmodules"></a>

### `<Optional>` kernelModules

**● kernelModules**: *`Array`<`string`>*

*Defined in [api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L983)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="lastboottime"></a>

### `<Optional>` lastBootTime

**● lastBootTime**: *`Date`*

*Defined in [api.ts:989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L989)*

*__type__*: {Date}

*__memberof__*: SystemProfileIn

___
<a id="networkinterfaces"></a>

### `<Optional>` networkInterfaces

**● networkInterfaces**: *`Array`<[NetworkInterface](networkinterface.md)>*

*Defined in [api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L929)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="numberofcpus"></a>

### `<Optional>` numberOfCpus

**● numberOfCpus**: *`number`*

*Defined in [api.ts:893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L893)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="numberofsockets"></a>

### `<Optional>` numberOfSockets

**● numberOfSockets**: *`number`*

*Defined in [api.ts:899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L899)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="oskernelversion"></a>

### `<Optional>` osKernelVersion

**● osKernelVersion**: *`string`*

*Defined in [api.ts:971](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L971)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="osrelease"></a>

### `<Optional>` osRelease

**● osRelease**: *`string`*

*Defined in [api.ts:965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L965)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="runningprocesses"></a>

### `<Optional>` runningProcesses

**● runningProcesses**: *`Array`<`string`>*

*Defined in [api.ts:995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L995)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___
<a id="satellitemanaged"></a>

### `<Optional>` satelliteManaged

**● satelliteManaged**: *`boolean`*

*Defined in [api.ts:1019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1019)*

*__type__*: {boolean}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionautoattach"></a>

### `<Optional>` subscriptionAutoAttach

**● subscriptionAutoAttach**: *`string`*

*Defined in [api.ts:1007](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1007)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="subscriptionstatus"></a>

### `<Optional>` subscriptionStatus

**● subscriptionStatus**: *`string`*

*Defined in [api.ts:1001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1001)*

*__type__*: {string}

*__memberof__*: SystemProfileIn

___
<a id="systemmemorybytes"></a>

### `<Optional>` systemMemoryBytes

**● systemMemoryBytes**: *`number`*

*Defined in [api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L911)*

*__type__*: {number}

*__memberof__*: SystemProfileIn

___
<a id="yumrepos"></a>

### `<Optional>` yumRepos

**● yumRepos**: *`Array`<[YumRepo](yumrepo.md)>*

*Defined in [api.ts:1031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1031)*

*__type__*: {Array}

*__memberof__*: SystemProfileIn

___

