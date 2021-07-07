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
* [cpu_model](systemprofile.md#optional-cpu_model)
* [disk_devices](systemprofile.md#optional-disk_devices)
* [dnf_modules](systemprofile.md#optional-dnf_modules)
* [enabled_services](systemprofile.md#optional-enabled_services)
* [gpg_pubkeys](systemprofile.md#optional-gpg_pubkeys)
* [greenboot_fallback_detected](systemprofile.md#optional-greenboot_fallback_detected)
* [greenboot_status](systemprofile.md#optional-greenboot_status)
* [host_type](systemprofile.md#optional-host_type)
* [infrastructure_type](systemprofile.md#optional-infrastructure_type)
* [infrastructure_vendor](systemprofile.md#optional-infrastructure_vendor)
* [insights_client_version](systemprofile.md#optional-insights_client_version)
* [insights_egg_version](systemprofile.md#optional-insights_egg_version)
* [installed_packages](systemprofile.md#optional-installed_packages)
* [installed_packages_delta](systemprofile.md#optional-installed_packages_delta)
* [installed_products](systemprofile.md#optional-installed_products)
* [installed_services](systemprofile.md#optional-installed_services)
* [is_marketplace](systemprofile.md#optional-is_marketplace)
* [katello_agent_running](systemprofile.md#optional-katello_agent_running)
* [kernel_modules](systemprofile.md#optional-kernel_modules)
* [last_boot_time](systemprofile.md#optional-last_boot_time)
* [network_interfaces](systemprofile.md#optional-network_interfaces)
* [number_of_cpus](systemprofile.md#optional-number_of_cpus)
* [number_of_sockets](systemprofile.md#optional-number_of_sockets)
* [operating_system](systemprofile.md#optional-operating_system)
* [os_kernel_version](systemprofile.md#optional-os_kernel_version)
* [os_release](systemprofile.md#optional-os_release)
* [owner_id](systemprofile.md#optional-owner_id)
* [rhc_client_id](systemprofile.md#optional-rhc_client_id)
* [rhc_config_state](systemprofile.md#optional-rhc_config_state)
* [rhsm](systemprofile.md#optional-rhsm)
* [rpm_ostree_deployments](systemprofile.md#optional-rpm_ostree_deployments)
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

*Defined in [packages/host-inventory/api.ts:1176](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1176)*

**`memberof`** SystemProfile

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [packages/host-inventory/api.ts:1146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1146)*

**`memberof`** SystemProfile

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:1134](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1134)*

**`memberof`** SystemProfile

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [packages/host-inventory/api.ts:1140](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1140)*

**`memberof`** SystemProfile

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [packages/host-inventory/api.ts:1260](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1260)*

**`memberof`** SystemProfile

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [packages/host-inventory/api.ts:1224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1224)*

**`memberof`** SystemProfile

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [packages/host-inventory/api.ts:1098](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1098)*

**`memberof`** SystemProfile

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1152](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1152)*

**`memberof`** SystemProfile

___

### `Optional` cpu_model

• **cpu_model**? : *string*

*Defined in [packages/host-inventory/api.ts:1080](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1080)*

The cpu model name

**`memberof`** SystemProfile

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [packages/host-inventory/api.ts:1128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1128)*

**`memberof`** SystemProfile

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [packages/host-inventory/api.ts:1236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1236)*

**`memberof`** SystemProfile

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1290)*

**`memberof`** SystemProfile

___

### `Optional` gpg_pubkeys

• **gpg_pubkeys**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1278)*

**`memberof`** SystemProfile

___

### `Optional` greenboot_fallback_detected

• **greenboot_fallback_detected**? : *boolean*

*Defined in [packages/host-inventory/api.ts:1356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1356)*

Indicates whether greenboot detected a rolled back update on an edge device.

**`memberof`** SystemProfile

___

### `Optional` greenboot_status

• **greenboot_status**? : *[SystemProfileGreenbootStatusEnum](../enums/systemprofilegreenbootstatusenum.md)*

*Defined in [packages/host-inventory/api.ts:1350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1350)*

Indicates the greenboot status of an edge device.

**`memberof`** SystemProfile

___

### `Optional` host_type

• **host_type**? : *[SystemProfileHostTypeEnum](../enums/systemprofilehosttypeenum.md)*

*Defined in [packages/host-inventory/api.ts:1344](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1344)*

Indicates the type of host.

**`memberof`** SystemProfile

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [packages/host-inventory/api.ts:1110](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1110)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [packages/host-inventory/api.ts:1116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1116)*

**`memberof`** SystemProfile

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [packages/host-inventory/api.ts:1248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1248)*

the version number of insights client. supports wildcards

**`memberof`** SystemProfile

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [packages/host-inventory/api.ts:1254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1254)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1266)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages_delta

• **installed_packages_delta**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1272)*

**`memberof`** SystemProfile

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [packages/host-inventory/api.ts:1242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1242)*

**`memberof`** SystemProfile

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1284)*

**`memberof`** SystemProfile

___

### `Optional` is_marketplace

• **is_marketplace**? : *boolean*

*Defined in [packages/host-inventory/api.ts:1338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1338)*

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`memberof`** SystemProfile

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [packages/host-inventory/api.ts:1212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1212)*

**`memberof`** SystemProfile

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1182)*

**`memberof`** SystemProfile

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [packages/host-inventory/api.ts:1188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1188)*

**`memberof`** SystemProfile

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [packages/host-inventory/api.ts:1122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1122)*

**`memberof`** SystemProfile

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [packages/host-inventory/api.ts:1086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1086)*

**`memberof`** SystemProfile

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [packages/host-inventory/api.ts:1092](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1092)*

**`memberof`** SystemProfile

___

### `Optional` operating_system

• **operating_system**? : *[SystemProfileOperatingSystem](systemprofileoperatingsystem.md)*

*Defined in [packages/host-inventory/api.ts:1158](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1158)*

**`memberof`** SystemProfile

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [packages/host-inventory/api.ts:1170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1170)*

The kernel version represented with a three, optionally four, number scheme.

**`memberof`** SystemProfile

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [packages/host-inventory/api.ts:1164](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1164)*

**`memberof`** SystemProfile

___

### `Optional` owner_id

• **owner_id**? : *string*

*Defined in [packages/host-inventory/api.ts:1062](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1062)*

A UUID associated with the host\'s RHSM certificate

**`memberof`** SystemProfile

___

### `Optional` rhc_client_id

• **rhc_client_id**? : *string*

*Defined in [packages/host-inventory/api.ts:1068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1068)*

A UUID associated with a cloud_connector

**`memberof`** SystemProfile

___

### `Optional` rhc_config_state

• **rhc_config_state**? : *string*

*Defined in [packages/host-inventory/api.ts:1074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1074)*

A UUID associated with the config manager state

**`memberof`** SystemProfile

___

### `Optional` rhsm

• **rhsm**? : *[SystemProfileRhsm](systemprofilerhsm.md)*

*Defined in [packages/host-inventory/api.ts:1368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1368)*

**`memberof`** SystemProfile

___

### `Optional` rpm_ostree_deployments

• **rpm_ostree_deployments**? : *Array‹[RPMOSTreeDeployment](rpmostreedeployment.md)›*

*Defined in [packages/host-inventory/api.ts:1362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1362)*

The list of deployments on the system as reported by rpm-ostree status --json

**`memberof`** SystemProfile

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1194)*

**`memberof`** SystemProfile

___

### `Optional` sap_instance_number

• **sap_instance_number**? : *string*

*Defined in [packages/host-inventory/api.ts:1308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1308)*

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`memberof`** SystemProfile

___

### `Optional` sap_sids

• **sap_sids**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:1302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1302)*

**`memberof`** SystemProfile

___

### `Optional` sap_system

• **sap_system**? : *boolean*

*Defined in [packages/host-inventory/api.ts:1296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1296)*

Indicates if SAP is installed on the system

**`memberof`** SystemProfile

___

### `Optional` sap_version

• **sap_version**? : *string*

*Defined in [packages/host-inventory/api.ts:1314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1314)*

The version of the SAP HANA lifecycle management program

**`memberof`** SystemProfile

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [packages/host-inventory/api.ts:1218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1218)*

**`memberof`** SystemProfile

___

### `Optional` selinux_config_file

• **selinux_config_file**? : *string*

*Defined in [packages/host-inventory/api.ts:1332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1332)*

The SELinux mode provided in the config file

**`memberof`** SystemProfile

___

### `Optional` selinux_current_mode

• **selinux_current_mode**? : *[SystemProfileSelinuxCurrentModeEnum](../enums/systemprofileselinuxcurrentmodeenum.md)*

*Defined in [packages/host-inventory/api.ts:1326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1326)*

The current SELinux mode, either enforcing, permissive, or disabled

**`memberof`** SystemProfile

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [packages/host-inventory/api.ts:1206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1206)*

**`memberof`** SystemProfile

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [packages/host-inventory/api.ts:1200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1200)*

**`memberof`** SystemProfile

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [packages/host-inventory/api.ts:1104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1104)*

**`memberof`** SystemProfile

___

### `Optional` tuned_profile

• **tuned_profile**? : *string*

*Defined in [packages/host-inventory/api.ts:1320](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1320)*

Current profile resulting from command tuned-adm active

**`memberof`** SystemProfile

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [packages/host-inventory/api.ts:1230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1230)*

**`memberof`** SystemProfile
