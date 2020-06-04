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
* [bios_release_date](systemprofilein.md#optional-bios_release_date)
* [bios_vendor](systemprofilein.md#optional-bios_vendor)
* [bios_version](systemprofilein.md#optional-bios_version)
* [captured_date](systemprofilein.md#optional-captured_date)
* [cloud_provider](systemprofilein.md#optional-cloud_provider)
* [cores_per_socket](systemprofilein.md#optional-cores_per_socket)
* [cpu_flags](systemprofilein.md#optional-cpu_flags)
* [disk_devices](systemprofilein.md#optional-disk_devices)
* [dnf_modules](systemprofilein.md#optional-dnf_modules)
* [enabled_services](systemprofilein.md#optional-enabled_services)
* [infrastructure_type](systemprofilein.md#optional-infrastructure_type)
* [infrastructure_vendor](systemprofilein.md#optional-infrastructure_vendor)
* [insights_client_version](systemprofilein.md#optional-insights_client_version)
* [insights_egg_version](systemprofilein.md#optional-insights_egg_version)
* [installed_packages](systemprofilein.md#optional-installed_packages)
* [installed_products](systemprofilein.md#optional-installed_products)
* [installed_services](systemprofilein.md#optional-installed_services)
* [katello_agent_running](systemprofilein.md#optional-katello_agent_running)
* [kernel_modules](systemprofilein.md#optional-kernel_modules)
* [last_boot_time](systemprofilein.md#optional-last_boot_time)
* [network_interfaces](systemprofilein.md#optional-network_interfaces)
* [number_of_cpus](systemprofilein.md#optional-number_of_cpus)
* [number_of_sockets](systemprofilein.md#optional-number_of_sockets)
* [os_kernel_version](systemprofilein.md#optional-os_kernel_version)
* [os_release](systemprofilein.md#optional-os_release)
* [running_processes](systemprofilein.md#optional-running_processes)
* [satellite_managed](systemprofilein.md#optional-satellite_managed)
* [subscription_auto_attach](systemprofilein.md#optional-subscription_auto_attach)
* [subscription_status](systemprofilein.md#optional-subscription_status)
* [system_memory_bytes](systemprofilein.md#optional-system_memory_bytes)
* [yum_repos](systemprofilein.md#optional-yum_repos)

## Properties

### `Optional` arch

• **arch**? : *string*

*Defined in [packages/host-inventory/api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L790)*

**`memberof`** SystemProfileIn

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [packages/host-inventory/api.ts:766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L766)*

**`memberof`** SystemProfileIn

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L754)*

**`memberof`** SystemProfileIn

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [packages/host-inventory/api.ts:760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L760)*

**`memberof`** SystemProfileIn

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [packages/host-inventory/api.ts:874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L874)*

**`memberof`** SystemProfileIn

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [packages/host-inventory/api.ts:838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L838)*

**`memberof`** SystemProfileIn

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [packages/host-inventory/api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L718)*

**`memberof`** SystemProfileIn

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:772](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L772)*

**`memberof`** SystemProfileIn

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [packages/host-inventory/api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L748)*

**`memberof`** SystemProfileIn

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [packages/host-inventory/api.ts:850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L850)*

**`memberof`** SystemProfileIn

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L892)*

**`memberof`** SystemProfileIn

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [packages/host-inventory/api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L730)*

**`memberof`** SystemProfileIn

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L736)*

**`memberof`** SystemProfileIn

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [packages/host-inventory/api.ts:862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L862)*

**`memberof`** SystemProfileIn

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [packages/host-inventory/api.ts:868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L868)*

**`memberof`** SystemProfileIn

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L880)*

**`memberof`** SystemProfileIn

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [packages/host-inventory/api.ts:856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L856)*

**`memberof`** SystemProfileIn

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L886)*

**`memberof`** SystemProfileIn

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [packages/host-inventory/api.ts:826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L826)*

**`memberof`** SystemProfileIn

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L796)*

**`memberof`** SystemProfileIn

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [packages/host-inventory/api.ts:802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L802)*

**`memberof`** SystemProfileIn

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [packages/host-inventory/api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L742)*

**`memberof`** SystemProfileIn

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [packages/host-inventory/api.ts:706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L706)*

**`memberof`** SystemProfileIn

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [packages/host-inventory/api.ts:712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L712)*

**`memberof`** SystemProfileIn

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [packages/host-inventory/api.ts:784](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L784)*

**`memberof`** SystemProfileIn

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [packages/host-inventory/api.ts:778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L778)*

**`memberof`** SystemProfileIn

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L808)*

**`memberof`** SystemProfileIn

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [packages/host-inventory/api.ts:832](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L832)*

**`memberof`** SystemProfileIn

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [packages/host-inventory/api.ts:820](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L820)*

**`memberof`** SystemProfileIn

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [packages/host-inventory/api.ts:814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L814)*

**`memberof`** SystemProfileIn

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [packages/host-inventory/api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L724)*

**`memberof`** SystemProfileIn

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [packages/host-inventory/api.ts:844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L844)*

**`memberof`** SystemProfileIn
