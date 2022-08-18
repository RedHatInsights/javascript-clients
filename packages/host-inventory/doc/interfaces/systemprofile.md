[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfile](systemprofile.md)

# Interface: SystemProfile

Representation of the system profile fields

**`export`** 

**`interface`** SystemProfile

## Hierarchy

* **SystemProfile**

## Index

### Properties

* [ansible](systemprofile.md#optional-ansible)
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
* [mssql](systemprofile.md#optional-mssql)
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
* [system_purpose](systemprofile.md#optional-system_purpose)
* [tuned_profile](systemprofile.md#optional-tuned_profile)
* [yum_repos](systemprofile.md#optional-yum_repos)

## Properties

### `Optional` ansible

• **ansible**? : *[SystemProfileAnsible](systemprofileansible.md)*

*Defined in [api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1372)*

**`memberof`** SystemProfile

___

### `Optional` arch

• **arch**? : *string*

*Defined in [api.ts:1168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1168)*

**`memberof`** SystemProfile

___

### `Optional` bios_release_date

• **bios_release_date**? : *string*

*Defined in [api.ts:1138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1138)*

**`memberof`** SystemProfile

___

### `Optional` bios_vendor

• **bios_vendor**? : *string*

*Defined in [api.ts:1126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1126)*

**`memberof`** SystemProfile

___

### `Optional` bios_version

• **bios_version**? : *string*

*Defined in [api.ts:1132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1132)*

**`memberof`** SystemProfile

___

### `Optional` captured_date

• **captured_date**? : *string*

*Defined in [api.ts:1252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1252)*

**`memberof`** SystemProfile

___

### `Optional` cloud_provider

• **cloud_provider**? : *string*

*Defined in [api.ts:1216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1216)*

**`memberof`** SystemProfile

___

### `Optional` cores_per_socket

• **cores_per_socket**? : *number*

*Defined in [api.ts:1090](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1090)*

**`memberof`** SystemProfile

___

### `Optional` cpu_flags

• **cpu_flags**? : *Array‹string›*

*Defined in [api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1144)*

**`memberof`** SystemProfile

___

### `Optional` cpu_model

• **cpu_model**? : *string*

*Defined in [api.ts:1072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1072)*

The cpu model name

**`memberof`** SystemProfile

___

### `Optional` disk_devices

• **disk_devices**? : *Array‹[DiskDevice](diskdevice.md)›*

*Defined in [api.ts:1120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1120)*

**`memberof`** SystemProfile

___

### `Optional` dnf_modules

• **dnf_modules**? : *Array‹[DnfModule](dnfmodule.md)›*

*Defined in [api.ts:1228](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1228)*

**`memberof`** SystemProfile

___

### `Optional` enabled_services

• **enabled_services**? : *Array‹string›*

*Defined in [api.ts:1282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1282)*

**`memberof`** SystemProfile

___

### `Optional` gpg_pubkeys

• **gpg_pubkeys**? : *Array‹string›*

*Defined in [api.ts:1270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1270)*

**`memberof`** SystemProfile

___

### `Optional` greenboot_fallback_detected

• **greenboot_fallback_detected**? : *boolean*

*Defined in [api.ts:1348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1348)*

Indicates whether greenboot detected a rolled back update on an edge device.

**`memberof`** SystemProfile

___

### `Optional` greenboot_status

• **greenboot_status**? : *[SystemProfileGreenbootStatusEnum](../enums/systemprofilegreenbootstatusenum.md)*

*Defined in [api.ts:1342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1342)*

Indicates the greenboot status of an edge device.

**`memberof`** SystemProfile

___

### `Optional` host_type

• **host_type**? : *[SystemProfileHostTypeEnum](../enums/systemprofilehosttypeenum.md)*

*Defined in [api.ts:1336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1336)*

Indicates the type of host.

**`memberof`** SystemProfile

___

### `Optional` infrastructure_type

• **infrastructure_type**? : *string*

*Defined in [api.ts:1102](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1102)*

**`memberof`** SystemProfile

___

### `Optional` infrastructure_vendor

• **infrastructure_vendor**? : *string*

*Defined in [api.ts:1108](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1108)*

**`memberof`** SystemProfile

___

### `Optional` insights_client_version

• **insights_client_version**? : *string*

*Defined in [api.ts:1240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1240)*

The version number of insights client. supports wildcards

**`memberof`** SystemProfile

___

### `Optional` insights_egg_version

• **insights_egg_version**? : *string*

*Defined in [api.ts:1246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1246)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages

• **installed_packages**? : *Array‹string›*

*Defined in [api.ts:1258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1258)*

**`memberof`** SystemProfile

___

### `Optional` installed_packages_delta

• **installed_packages_delta**? : *Array‹string›*

*Defined in [api.ts:1264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1264)*

**`memberof`** SystemProfile

___

### `Optional` installed_products

• **installed_products**? : *Array‹[InstalledProduct](installedproduct.md)›*

*Defined in [api.ts:1234](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1234)*

**`memberof`** SystemProfile

___

### `Optional` installed_services

• **installed_services**? : *Array‹string›*

*Defined in [api.ts:1276](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1276)*

**`memberof`** SystemProfile

___

### `Optional` is_marketplace

• **is_marketplace**? : *boolean*

*Defined in [api.ts:1330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1330)*

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`memberof`** SystemProfile

___

### `Optional` katello_agent_running

• **katello_agent_running**? : *boolean*

*Defined in [api.ts:1204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1204)*

**`memberof`** SystemProfile

___

### `Optional` kernel_modules

• **kernel_modules**? : *Array‹string›*

*Defined in [api.ts:1174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1174)*

**`memberof`** SystemProfile

___

### `Optional` last_boot_time

• **last_boot_time**? : *string*

*Defined in [api.ts:1180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1180)*

**`memberof`** SystemProfile

___

### `Optional` mssql

• **mssql**? : *[SystemProfileMssql](systemprofilemssql.md)*

*Defined in [api.ts:1378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1378)*

**`memberof`** SystemProfile

___

### `Optional` network_interfaces

• **network_interfaces**? : *Array‹[NetworkInterface](networkinterface.md)›*

*Defined in [api.ts:1114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1114)*

**`memberof`** SystemProfile

___

### `Optional` number_of_cpus

• **number_of_cpus**? : *number*

*Defined in [api.ts:1078](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1078)*

**`memberof`** SystemProfile

___

### `Optional` number_of_sockets

• **number_of_sockets**? : *number*

*Defined in [api.ts:1084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1084)*

**`memberof`** SystemProfile

___

### `Optional` operating_system

• **operating_system**? : *[SystemProfileOperatingSystem](systemprofileoperatingsystem.md)*

*Defined in [api.ts:1150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1150)*

**`memberof`** SystemProfile

___

### `Optional` os_kernel_version

• **os_kernel_version**? : *string*

*Defined in [api.ts:1162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1162)*

The kernel version represented with a three, optionally four, number scheme.

**`memberof`** SystemProfile

___

### `Optional` os_release

• **os_release**? : *string*

*Defined in [api.ts:1156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1156)*

**`memberof`** SystemProfile

___

### `Optional` owner_id

• **owner_id**? : *string*

*Defined in [api.ts:1054](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1054)*

A UUID associated with the host\'s RHSM certificate

**`memberof`** SystemProfile

___

### `Optional` rhc_client_id

• **rhc_client_id**? : *string*

*Defined in [api.ts:1060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1060)*

A UUID associated with a cloud_connector

**`memberof`** SystemProfile

___

### `Optional` rhc_config_state

• **rhc_config_state**? : *string*

*Defined in [api.ts:1066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1066)*

A UUID associated with the config manager state

**`memberof`** SystemProfile

___

### `Optional` rhsm

• **rhsm**? : *[SystemProfileRhsm](systemprofilerhsm.md)*

*Defined in [api.ts:1360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1360)*

**`memberof`** SystemProfile

___

### `Optional` rpm_ostree_deployments

• **rpm_ostree_deployments**? : *Array‹[RPMOSTreeDeployment](rpmostreedeployment.md)›*

*Defined in [api.ts:1354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1354)*

The list of deployments on the system as reported by rpm-ostree status --json

**`memberof`** SystemProfile

___

### `Optional` running_processes

• **running_processes**? : *Array‹string›*

*Defined in [api.ts:1186](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1186)*

**`memberof`** SystemProfile

___

### `Optional` sap_instance_number

• **sap_instance_number**? : *string*

*Defined in [api.ts:1300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1300)*

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`memberof`** SystemProfile

___

### `Optional` sap_sids

• **sap_sids**? : *Array‹string›*

*Defined in [api.ts:1294](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1294)*

**`memberof`** SystemProfile

___

### `Optional` sap_system

• **sap_system**? : *boolean*

*Defined in [api.ts:1288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1288)*

Indicates if SAP is installed on the system

**`memberof`** SystemProfile

___

### `Optional` sap_version

• **sap_version**? : *string*

*Defined in [api.ts:1306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1306)*

The version of the SAP HANA lifecycle management program

**`memberof`** SystemProfile

___

### `Optional` satellite_managed

• **satellite_managed**? : *boolean*

*Defined in [api.ts:1210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1210)*

**`memberof`** SystemProfile

___

### `Optional` selinux_config_file

• **selinux_config_file**? : *string*

*Defined in [api.ts:1324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1324)*

The SELinux mode provided in the config file

**`memberof`** SystemProfile

___

### `Optional` selinux_current_mode

• **selinux_current_mode**? : *[SystemProfileSelinuxCurrentModeEnum](../enums/systemprofileselinuxcurrentmodeenum.md)*

*Defined in [api.ts:1318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1318)*

The current SELinux mode, either enforcing, permissive, or disabled

**`memberof`** SystemProfile

___

### `Optional` subscription_auto_attach

• **subscription_auto_attach**? : *string*

*Defined in [api.ts:1198](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1198)*

**`memberof`** SystemProfile

___

### `Optional` subscription_status

• **subscription_status**? : *string*

*Defined in [api.ts:1192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1192)*

**`memberof`** SystemProfile

___

### `Optional` system_memory_bytes

• **system_memory_bytes**? : *number*

*Defined in [api.ts:1096](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1096)*

**`memberof`** SystemProfile

___

### `Optional` system_purpose

• **system_purpose**? : *[SystemProfileSystemPurpose](systemprofilesystempurpose.md)*

*Defined in [api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1366)*

**`memberof`** SystemProfile

___

### `Optional` tuned_profile

• **tuned_profile**? : *string*

*Defined in [api.ts:1312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1312)*

Current profile resulting from command tuned-adm active

**`memberof`** SystemProfile

___

### `Optional` yum_repos

• **yum_repos**? : *Array‹[YumRepo](yumrepo.md)›*

*Defined in [api.ts:1222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1222)*

**`memberof`** SystemProfile
