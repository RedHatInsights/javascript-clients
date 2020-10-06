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
* [sap_sids](systemprofile.md#optional-sap_sids)
* [sap_system](systemprofile.md#optional-sap_system)
* [satellite_managed](systemprofile.md#optional-satellite_managed)
* [subscription_auto_attach](systemprofile.md#optional-subscription_auto_attach)
* [subscription_status](systemprofile.md#optional-subscription_status)
* [system_memory_bytes](systemprofile.md#optional-system_memory_bytes)
* [yum_repos](systemprofile.md#optional-yum_repos)

## Properties

### `Optional` arch

• **arch**? : *string*

*Defined in [packages/host-inventory/api.ts:734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L734)*

**`memberof`** SystemProfile

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [packages/host-inventory/api.ts:710](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L710)*

**`memberof`** SystemProfile

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L698)*

**`memberof`** SystemProfile

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [packages/host-inventory/api.ts:704](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L704)*

**`memberof`** SystemProfile

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [packages/host-inventory/api.ts:818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L818)*

**`memberof`** SystemProfile

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [packages/host-inventory/api.ts:782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L782)*

**`memberof`** SystemProfile

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [packages/host-inventory/api.ts:662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L662)*

**`memberof`** SystemProfile

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:716](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L716)*

**`memberof`** SystemProfile

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [packages/host-inventory/api.ts:692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L692)*

**`memberof`** SystemProfile

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [packages/host-inventory/api.ts:794](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L794)*

**`memberof`** SystemProfile

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:836](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L836)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [packages/host-inventory/api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L674)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L680)*

**`memberof`** SystemProfile

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [packages/host-inventory/api.ts:806](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L806)*

**`memberof`** SystemProfile

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [packages/host-inventory/api.ts:812](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L812)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:824](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L824)*

**`memberof`** SystemProfile

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [packages/host-inventory/api.ts:800](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L800)*

**`memberof`** SystemProfile

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L830)*

**`memberof`** SystemProfile

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [packages/host-inventory/api.ts:770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L770)*

**`memberof`** SystemProfile

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:740](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L740)*

**`memberof`** SystemProfile

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [packages/host-inventory/api.ts:746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L746)*

**`memberof`** SystemProfile

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [packages/host-inventory/api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L686)*

**`memberof`** SystemProfile

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [packages/host-inventory/api.ts:650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L650)*

**`memberof`** SystemProfile

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [packages/host-inventory/api.ts:656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L656)*

**`memberof`** SystemProfile

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [packages/host-inventory/api.ts:728](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L728)*

**`memberof`** SystemProfile

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [packages/host-inventory/api.ts:722](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L722)*

**`memberof`** SystemProfile

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L752)*

**`memberof`** SystemProfile

___

### `Optional` sap_sids

• **sap_sids**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:848](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L848)*

list of SAP SIDs

**`memberof`** SystemProfile

___

### `Optional` sap_system

• **sap_system**? : *boolean*

*Defined in [packages/host-inventory/api.ts:842](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L842)*

Indicates if SAP is installed on the system

**`memberof`** SystemProfile

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [packages/host-inventory/api.ts:776](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L776)*

**`memberof`** SystemProfile

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [packages/host-inventory/api.ts:764](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L764)*

**`memberof`** SystemProfile

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [packages/host-inventory/api.ts:758](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L758)*

**`memberof`** SystemProfile

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [packages/host-inventory/api.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L668)*

**`memberof`** SystemProfile

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [packages/host-inventory/api.ts:788](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L788)*

**`memberof`** SystemProfile
