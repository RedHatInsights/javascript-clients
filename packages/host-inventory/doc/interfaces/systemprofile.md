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
* [sap_instance_number](systemprofile.md#optional-sap_instance_number)
* [sap_sids](systemprofile.md#optional-sap_sids)
* [sap_system](systemprofile.md#optional-sap_system)
* [sap_version](systemprofile.md#optional-sap_version)
* [satellite_managed](systemprofile.md#optional-satellite_managed)
* [selinux_config_file](systemprofile.md#optional-selinux_config_file)
* [selinux_current_mode](systemprofile.md#optional-selinux_current_mode)
* [subscription_auto_attach](systemprofile.md#optional-subscription_auto_attach)
* [subscription_status](systemprofile.md#optional-subscription_status)
* [system_memory_bytes](systemprofile.md#optional-system_memory_bytes)
* [tuned_profile](systemprofile.md#optional-tuned_profile)
* [yum_repos](systemprofile.md#optional-yum_repos)

## Properties

### `Optional` arch

• **arch**? : *string*

*Defined in [packages/host-inventory/api.ts:642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L642)*

**`memberof`** SystemProfile

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [packages/host-inventory/api.ts:618](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L618)*

**`memberof`** SystemProfile

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:606](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L606)*

**`memberof`** SystemProfile

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [packages/host-inventory/api.ts:612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L612)*

**`memberof`** SystemProfile

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [packages/host-inventory/api.ts:726](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L726)*

**`memberof`** SystemProfile

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [packages/host-inventory/api.ts:690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L690)*

**`memberof`** SystemProfile

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [packages/host-inventory/api.ts:570](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L570)*

**`memberof`** SystemProfile

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:624](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L624)*

**`memberof`** SystemProfile

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [packages/host-inventory/api.ts:600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L600)*

**`memberof`** SystemProfile

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [packages/host-inventory/api.ts:702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L702)*

**`memberof`** SystemProfile

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:744](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L744)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [packages/host-inventory/api.ts:582](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L582)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L588)*

**`memberof`** SystemProfile

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [packages/host-inventory/api.ts:714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L714)*

**`memberof`** SystemProfile

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [packages/host-inventory/api.ts:720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L720)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L732)*

**`memberof`** SystemProfile

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [packages/host-inventory/api.ts:708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L708)*

**`memberof`** SystemProfile

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L738)*

**`memberof`** SystemProfile

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [packages/host-inventory/api.ts:678](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L678)*

**`memberof`** SystemProfile

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L648)*

**`memberof`** SystemProfile

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [packages/host-inventory/api.ts:654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L654)*

**`memberof`** SystemProfile

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [packages/host-inventory/api.ts:594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L594)*

**`memberof`** SystemProfile

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [packages/host-inventory/api.ts:558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L558)*

**`memberof`** SystemProfile

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [packages/host-inventory/api.ts:564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L564)*

**`memberof`** SystemProfile

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [packages/host-inventory/api.ts:636](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L636)*

**`memberof`** SystemProfile

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [packages/host-inventory/api.ts:630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L630)*

**`memberof`** SystemProfile

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:660](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L660)*

**`memberof`** SystemProfile

___

### `Optional` sap_instance_number

• **sap_instance_number**? : *string*

*Defined in [packages/host-inventory/api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L762)*

The instance number of the SAP HANA system

**`memberof`** SystemProfile

___

### `Optional` sap_sids

• **sap_sids**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L756)*

List of SAP SIDs

**`memberof`** SystemProfile

___

### `Optional` sap_system

• **sap_system**? : *boolean*

*Defined in [packages/host-inventory/api.ts:750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L750)*

Indicates if SAP is installed on the system

**`memberof`** SystemProfile

___

### `Optional` sap_version

• **sap_version**? : *string*

*Defined in [packages/host-inventory/api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L768)*

The version of the SAP HANA lifecycle management program

**`memberof`** SystemProfile

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [packages/host-inventory/api.ts:684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L684)*

**`memberof`** SystemProfile

___

### `Optional` selinux_config_file

• **selinux_config_file**? : *[SystemProfileSelinuxConfigFileEnum](../enums/systemprofileselinuxconfigfileenum.md)*

*Defined in [packages/host-inventory/api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L786)*

The SELinux mode provided in the config file

**`memberof`** SystemProfile

___

### `Optional` selinux_current_mode

• **selinux_current_mode**? : *[SystemProfileSelinuxCurrentModeEnum](../enums/systemprofileselinuxcurrentmodeenum.md)*

*Defined in [packages/host-inventory/api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L780)*

The current SELinux mode, either enforcing, permissive, or disabled

**`memberof`** SystemProfile

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [packages/host-inventory/api.ts:672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L672)*

**`memberof`** SystemProfile

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [packages/host-inventory/api.ts:666](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L666)*

**`memberof`** SystemProfile

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [packages/host-inventory/api.ts:576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L576)*

**`memberof`** SystemProfile

___

### `Optional` tuned_profile

• **tuned_profile**? : *string*

*Defined in [packages/host-inventory/api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L774)*

Current profile resulting from command tuned-adm active

**`memberof`** SystemProfile

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [packages/host-inventory/api.ts:696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L696)*

**`memberof`** SystemProfile
