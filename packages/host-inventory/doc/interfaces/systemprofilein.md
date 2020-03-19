[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileIn](systemprofilein.md)

# Interface: SystemProfileIn

Representation of the system profile fields

**`export`** 

**`interface`** SystemProfileIn

## Hierarchy

* **SystemProfileIn**

## Index

### Properties

* [arch](systemprofilein.md#optional-arch)
* [biosReleaseDate](systemprofilein.md#optional-biosreleasedate)
* [biosVendor](systemprofilein.md#optional-biosvendor)
* [biosVersion](systemprofilein.md#optional-biosversion)
* [capturedDate](systemprofilein.md#optional-captureddate)
* [cloudProvider](systemprofilein.md#optional-cloudprovider)
* [coresPerSocket](systemprofilein.md#optional-corespersocket)
* [cpuFlags](systemprofilein.md#optional-cpuflags)
* [diskDevices](systemprofilein.md#optional-diskdevices)
* [dnfModules](systemprofilein.md#optional-dnfmodules)
* [enabledServices](systemprofilein.md#optional-enabledservices)
* [infrastructureType](systemprofilein.md#optional-infrastructuretype)
* [infrastructureVendor](systemprofilein.md#optional-infrastructurevendor)
* [insightsClientVersion](systemprofilein.md#optional-insightsclientversion)
* [insightsEggVersion](systemprofilein.md#optional-insightseggversion)
* [installedPackages](systemprofilein.md#optional-installedpackages)
* [installedProducts](systemprofilein.md#optional-installedproducts)
* [installedServices](systemprofilein.md#optional-installedservices)
* [katelloAgentRunning](systemprofilein.md#optional-katelloagentrunning)
* [kernelModules](systemprofilein.md#optional-kernelmodules)
* [lastBootTime](systemprofilein.md#optional-lastboottime)
* [networkInterfaces](systemprofilein.md#optional-networkinterfaces)
* [numberOfCpus](systemprofilein.md#optional-numberofcpus)
* [numberOfSockets](systemprofilein.md#optional-numberofsockets)
* [osKernelVersion](systemprofilein.md#optional-oskernelversion)
* [osRelease](systemprofilein.md#optional-osrelease)
* [runningProcesses](systemprofilein.md#optional-runningprocesses)
* [satelliteManaged](systemprofilein.md#optional-satellitemanaged)
* [subscriptionAutoAttach](systemprofilein.md#optional-subscriptionautoattach)
* [subscriptionStatus](systemprofilein.md#optional-subscriptionstatus)
* [systemMemoryBytes](systemprofilein.md#optional-systemmemorybytes)
* [yumRepos](systemprofilein.md#optional-yumrepos)

## Properties

### `Optional` arch

• **arch**? : *string*

*Defined in [api.ts:977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L977)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` biosReleaseDate

• **biosReleaseDate**? : *string*

*Defined in [api.ts:953](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L953)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` biosVendor

• **biosVendor**? : *string*

*Defined in [api.ts:941](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L941)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` biosVersion

• **biosVersion**? : *string*

*Defined in [api.ts:947](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L947)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` capturedDate

• **capturedDate**? : *string*

*Defined in [api.ts:1061](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1061)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` cloudProvider

• **cloudProvider**? : *string*

*Defined in [api.ts:1025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1025)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` coresPerSocket

• **coresPerSocket**? : *number*

*Defined in [api.ts:905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L905)*

**`type`** {number}

**`memberof`** SystemProfileIn

___

### `Optional` cpuFlags

• **cpuFlags**? : *Array‹string›*

*Defined in [api.ts:959](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L959)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` diskDevices

• **diskDevices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [api.ts:935](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L935)*

**`type`** {Array<DiskDevice>}

**`memberof`** SystemProfileIn

___

### `Optional` dnfModules

• **dnfModules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [api.ts:1037](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1037)*

**`type`** {Array<DnfModule>}

**`memberof`** SystemProfileIn

___

### `Optional` enabledServices

• **enabledServices**? : *Array‹string›*

*Defined in [api.ts:1079](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1079)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` infrastructureType

• **infrastructureType**? : *string*

*Defined in [api.ts:917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L917)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` infrastructureVendor

• **infrastructureVendor**? : *string*

*Defined in [api.ts:923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L923)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` insightsClientVersion

• **insightsClientVersion**? : *string*

*Defined in [api.ts:1049](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1049)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` insightsEggVersion

• **insightsEggVersion**? : *string*

*Defined in [api.ts:1055](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1055)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` installedPackages

• **installedPackages**? : *Array‹string›*

*Defined in [api.ts:1067](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1067)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` installedProducts

• **installedProducts**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [api.ts:1043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1043)*

**`type`** {Array<InstalledProduct>}

**`memberof`** SystemProfileIn

___

### `Optional` installedServices

• **installedServices**? : *Array‹string›*

*Defined in [api.ts:1073](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1073)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` katelloAgentRunning

• **katelloAgentRunning**? : *boolean*

*Defined in [api.ts:1013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1013)*

**`type`** {boolean}

**`memberof`** SystemProfileIn

___

### `Optional` kernelModules

• **kernelModules**? : *Array‹string›*

*Defined in [api.ts:983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L983)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` lastBootTime

• **lastBootTime**? : *Date*

*Defined in [api.ts:989](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L989)*

**`type`** {Date}

**`memberof`** SystemProfileIn

___

### `Optional` networkInterfaces

• **networkInterfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [api.ts:929](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L929)*

**`type`** {Array<NetworkInterface>}

**`memberof`** SystemProfileIn

___

### `Optional` numberOfCpus

• **numberOfCpus**? : *number*

*Defined in [api.ts:893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L893)*

**`type`** {number}

**`memberof`** SystemProfileIn

___

### `Optional` numberOfSockets

• **numberOfSockets**? : *number*

*Defined in [api.ts:899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L899)*

**`type`** {number}

**`memberof`** SystemProfileIn

___

### `Optional` osKernelVersion

• **osKernelVersion**? : *string*

*Defined in [api.ts:971](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L971)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` osRelease

• **osRelease**? : *string*

*Defined in [api.ts:965](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L965)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` runningProcesses

• **runningProcesses**? : *Array‹string›*

*Defined in [api.ts:995](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L995)*

**`type`** {Array<string>}

**`memberof`** SystemProfileIn

___

### `Optional` satelliteManaged

• **satelliteManaged**? : *boolean*

*Defined in [api.ts:1019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1019)*

**`type`** {boolean}

**`memberof`** SystemProfileIn

___

### `Optional` subscriptionAutoAttach

• **subscriptionAutoAttach**? : *string*

*Defined in [api.ts:1007](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1007)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` subscriptionStatus

• **subscriptionStatus**? : *string*

*Defined in [api.ts:1001](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1001)*

**`type`** {string}

**`memberof`** SystemProfileIn

___

### `Optional` systemMemoryBytes

• **systemMemoryBytes**? : *number*

*Defined in [api.ts:911](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L911)*

**`type`** {number}

**`memberof`** SystemProfileIn

___

### `Optional` yumRepos

• **yumRepos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [api.ts:1031](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1031)*

**`type`** {Array<YumRepo>}

**`memberof`** SystemProfileIn
