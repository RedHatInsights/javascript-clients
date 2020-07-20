[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfile](systemprofile.md)

# Interface: SystemProfile

Representation of the system profile fields

**`export`** 

**`interface`** SystemProfile

## Hierarchy

* **SystemProfile**

## Index

### Properties

* [arch](systemprofile.md#optional-arch)
* [bios_release_date](systemprofile.md#optional-bios_release_date)
* [bios_vendor](systemprofile.md#optional-bios_vendor)
* [bios_version](systemprofile.md#optional-bios_version)
* [captured_date](systemprofile.md#optional-captured_date)
* [cloud_provider](systemprofile.md#optional-cloud_provider)
* [cores_per_socket](systemprofile.md#optional-cores_per_socket)
* [cpu_flags](systemprofile.md#optional-cpu_flags)
* [disk_devices](systemprofile.md#optional-disk_devices)
* [dnf_modules](systemprofile.md#optional-dnf_modules)
* [enabled_services](systemprofile.md#optional-enabled_services)
* [infrastructure_type](systemprofile.md#optional-infrastructure_type)
* [infrastructure_vendor](systemprofile.md#optional-infrastructure_vendor)
* [insights_client_version](systemprofile.md#optional-insights_client_version)
* [insights_egg_version](systemprofile.md#optional-insights_egg_version)
* [installed_packages](systemprofile.md#optional-installed_packages)
* [installed_products](systemprofile.md#optional-installed_products)
* [installed_services](systemprofile.md#optional-installed_services)
* [katello_agent_running](systemprofile.md#optional-katello_agent_running)
* [kernel_modules](systemprofile.md#optional-kernel_modules)
* [last_boot_time](systemprofile.md#optional-last_boot_time)
* [network_interfaces](systemprofile.md#optional-network_interfaces)
* [number_of_cpus](systemprofile.md#optional-number_of_cpus)
* [number_of_sockets](systemprofile.md#optional-number_of_sockets)
* [os_kernel_version](systemprofile.md#optional-os_kernel_version)
* [os_release](systemprofile.md#optional-os_release)
* [running_processes](systemprofile.md#optional-running_processes)
* [satellite_managed](systemprofile.md#optional-satellite_managed)
* [subscription_auto_attach](systemprofile.md#optional-subscription_auto_attach)
* [subscription_status](systemprofile.md#optional-subscription_status)
* [system_memory_bytes](systemprofile.md#optional-system_memory_bytes)
* [yum_repos](systemprofile.md#optional-yum_repos)

## Properties

### `Optional` arch

• **arch**? : *string*

*Defined in [packages/host-inventory/api.ts:753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L753)*

**`memberof`** SystemProfile

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [packages/host-inventory/api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L729)*

**`memberof`** SystemProfile

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L717)*

**`memberof`** SystemProfile

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [packages/host-inventory/api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L723)*

**`memberof`** SystemProfile

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [packages/host-inventory/api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L837)*

**`memberof`** SystemProfile

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [packages/host-inventory/api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L801)*

**`memberof`** SystemProfile

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [packages/host-inventory/api.ts:681](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L681)*

**`memberof`** SystemProfile

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L735)*

**`memberof`** SystemProfile

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [packages/host-inventory/api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L711)*

**`memberof`** SystemProfile

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [packages/host-inventory/api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L813)*

**`memberof`** SystemProfile

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L855)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [packages/host-inventory/api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L693)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L699)*

**`memberof`** SystemProfile

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [packages/host-inventory/api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L825)*

**`memberof`** SystemProfile

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [packages/host-inventory/api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L831)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L843)*

**`memberof`** SystemProfile

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [packages/host-inventory/api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L819)*

**`memberof`** SystemProfile

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L849)*

**`memberof`** SystemProfile

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [packages/host-inventory/api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L789)*

**`memberof`** SystemProfile

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L759)*

**`memberof`** SystemProfile

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [packages/host-inventory/api.ts:765](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L765)*

**`memberof`** SystemProfile

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [packages/host-inventory/api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L705)*

**`memberof`** SystemProfile

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [packages/host-inventory/api.ts:669](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L669)*

**`memberof`** SystemProfile

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [packages/host-inventory/api.ts:675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L675)*

**`memberof`** SystemProfile

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [packages/host-inventory/api.ts:747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L747)*

**`memberof`** SystemProfile

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [packages/host-inventory/api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L741)*

**`memberof`** SystemProfile

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L771)*

**`memberof`** SystemProfile

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [packages/host-inventory/api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L795)*

**`memberof`** SystemProfile

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [packages/host-inventory/api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L783)*

**`memberof`** SystemProfile

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [packages/host-inventory/api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L777)*

**`memberof`** SystemProfile

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [packages/host-inventory/api.ts:687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L687)*

**`memberof`** SystemProfile

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [packages/host-inventory/api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L807)*

**`memberof`** SystemProfile
