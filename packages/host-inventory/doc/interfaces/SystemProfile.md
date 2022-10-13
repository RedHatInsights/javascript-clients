[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfile

# Interface: SystemProfile

Representation of the system profile fields

**`Export`**

**`Interface`**

SystemProfile

## Table of contents

### Properties

- [ansible](SystemProfile.md#ansible)
- [arch](SystemProfile.md#arch)
- [bios\_release\_date](SystemProfile.md#bios_release_date)
- [bios\_vendor](SystemProfile.md#bios_vendor)
- [bios\_version](SystemProfile.md#bios_version)
- [captured\_date](SystemProfile.md#captured_date)
- [cloud\_provider](SystemProfile.md#cloud_provider)
- [cores\_per\_socket](SystemProfile.md#cores_per_socket)
- [cpu\_flags](SystemProfile.md#cpu_flags)
- [cpu\_model](SystemProfile.md#cpu_model)
- [disk\_devices](SystemProfile.md#disk_devices)
- [dnf\_modules](SystemProfile.md#dnf_modules)
- [enabled\_services](SystemProfile.md#enabled_services)
- [gpg\_pubkeys](SystemProfile.md#gpg_pubkeys)
- [greenboot\_fallback\_detected](SystemProfile.md#greenboot_fallback_detected)
- [greenboot\_status](SystemProfile.md#greenboot_status)
- [host\_type](SystemProfile.md#host_type)
- [infrastructure\_type](SystemProfile.md#infrastructure_type)
- [infrastructure\_vendor](SystemProfile.md#infrastructure_vendor)
- [insights\_client\_version](SystemProfile.md#insights_client_version)
- [insights\_egg\_version](SystemProfile.md#insights_egg_version)
- [installed\_packages](SystemProfile.md#installed_packages)
- [installed\_packages\_delta](SystemProfile.md#installed_packages_delta)
- [installed\_products](SystemProfile.md#installed_products)
- [installed\_services](SystemProfile.md#installed_services)
- [is\_marketplace](SystemProfile.md#is_marketplace)
- [katello\_agent\_running](SystemProfile.md#katello_agent_running)
- [kernel\_modules](SystemProfile.md#kernel_modules)
- [last\_boot\_time](SystemProfile.md#last_boot_time)
- [mssql](SystemProfile.md#mssql)
- [network\_interfaces](SystemProfile.md#network_interfaces)
- [number\_of\_cpus](SystemProfile.md#number_of_cpus)
- [number\_of\_sockets](SystemProfile.md#number_of_sockets)
- [operating\_system](SystemProfile.md#operating_system)
- [os\_kernel\_version](SystemProfile.md#os_kernel_version)
- [os\_release](SystemProfile.md#os_release)
- [owner\_id](SystemProfile.md#owner_id)
- [rhc\_client\_id](SystemProfile.md#rhc_client_id)
- [rhc\_config\_state](SystemProfile.md#rhc_config_state)
- [rhsm](SystemProfile.md#rhsm)
- [rpm\_ostree\_deployments](SystemProfile.md#rpm_ostree_deployments)
- [running\_processes](SystemProfile.md#running_processes)
- [sap\_instance\_number](SystemProfile.md#sap_instance_number)
- [sap\_sids](SystemProfile.md#sap_sids)
- [sap\_system](SystemProfile.md#sap_system)
- [sap\_version](SystemProfile.md#sap_version)
- [satellite\_managed](SystemProfile.md#satellite_managed)
- [selinux\_config\_file](SystemProfile.md#selinux_config_file)
- [selinux\_current\_mode](SystemProfile.md#selinux_current_mode)
- [subscription\_auto\_attach](SystemProfile.md#subscription_auto_attach)
- [subscription\_status](SystemProfile.md#subscription_status)
- [system\_memory\_bytes](SystemProfile.md#system_memory_bytes)
- [system\_purpose](SystemProfile.md#system_purpose)
- [tuned\_profile](SystemProfile.md#tuned_profile)
- [yum\_repos](SystemProfile.md#yum_repos)

## Properties

### ansible

• `Optional` **ansible**: [`SystemProfileAnsible`](SystemProfileAnsible.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1372)

___

### arch

• `Optional` **arch**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1168)

___

### bios\_release\_date

• `Optional` **bios\_release\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1138)

___

### bios\_vendor

• `Optional` **bios\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1126](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1126)

___

### bios\_version

• `Optional` **bios\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1132)

___

### captured\_date

• `Optional` **captured\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1252)

___

### cloud\_provider

• `Optional` **cloud\_provider**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1216)

___

### cores\_per\_socket

• `Optional` **cores\_per\_socket**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1090](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1090)

___

### cpu\_flags

• `Optional` **cpu\_flags**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1144)

___

### cpu\_model

• `Optional` **cpu\_model**: `string`

The cpu model name

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1072)

___

### disk\_devices

• `Optional` **disk\_devices**: [`DiskDevice`](DiskDevice.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1120)

___

### dnf\_modules

• `Optional` **dnf\_modules**: [`DnfModule`](DnfModule.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1228](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1228)

___

### enabled\_services

• `Optional` **enabled\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1282)

___

### gpg\_pubkeys

• `Optional` **gpg\_pubkeys**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1270)

___

### greenboot\_fallback\_detected

• `Optional` **greenboot\_fallback\_detected**: `boolean`

Indicates whether greenboot detected a rolled back update on an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1348)

___

### greenboot\_status

• `Optional` **greenboot\_status**: [`SystemProfileGreenbootStatusEnum`](../enums/SystemProfileGreenbootStatusEnum.md)

Indicates the greenboot status of an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1342)

___

### host\_type

• `Optional` **host\_type**: [`Edge`](../enums/SystemProfileHostTypeEnum.md#edge)

Indicates the type of host.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1336)

___

### infrastructure\_type

• `Optional` **infrastructure\_type**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1102](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1102)

___

### infrastructure\_vendor

• `Optional` **infrastructure\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1108](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1108)

___

### insights\_client\_version

• `Optional` **insights\_client\_version**: `string`

The version number of insights client. supports wildcards

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1240)

___

### insights\_egg\_version

• `Optional` **insights\_egg\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1246)

___

### installed\_packages

• `Optional` **installed\_packages**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1258)

___

### installed\_packages\_delta

• `Optional` **installed\_packages\_delta**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1264)

___

### installed\_products

• `Optional` **installed\_products**: [`InstalledProduct`](InstalledProduct.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1234](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1234)

___

### installed\_services

• `Optional` **installed\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1276](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1276)

___

### is\_marketplace

• `Optional` **is\_marketplace**: `boolean`

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1330)

___

### katello\_agent\_running

• `Optional` **katello\_agent\_running**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1204)

___

### kernel\_modules

• `Optional` **kernel\_modules**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1174)

___

### last\_boot\_time

• `Optional` **last\_boot\_time**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1180](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1180)

___

### mssql

• `Optional` **mssql**: [`SystemProfileMssql`](SystemProfileMssql.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1378)

___

### network\_interfaces

• `Optional` **network\_interfaces**: [`NetworkInterface`](NetworkInterface.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1114)

___

### number\_of\_cpus

• `Optional` **number\_of\_cpus**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1078](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1078)

___

### number\_of\_sockets

• `Optional` **number\_of\_sockets**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1084)

___

### operating\_system

• `Optional` **operating\_system**: [`SystemProfileOperatingSystem`](SystemProfileOperatingSystem.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1150](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1150)

___

### os\_kernel\_version

• `Optional` **os\_kernel\_version**: `string`

The kernel version represented with a three, optionally four, number scheme.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1162)

___

### os\_release

• `Optional` **os\_release**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1156](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1156)

___

### owner\_id

• `Optional` **owner\_id**: `string`

A UUID associated with the host\'s RHSM certificate

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1054](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1054)

___

### rhc\_client\_id

• `Optional` **rhc\_client\_id**: `string`

A UUID associated with a cloud_connector

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1060)

___

### rhc\_config\_state

• `Optional` **rhc\_config\_state**: `string`

A UUID associated with the config manager state

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1066)

___

### rhsm

• `Optional` **rhsm**: [`SystemProfileRhsm`](SystemProfileRhsm.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1360)

___

### rpm\_ostree\_deployments

• `Optional` **rpm\_ostree\_deployments**: [`RPMOSTreeDeployment`](RPMOSTreeDeployment.md)[]

The list of deployments on the system as reported by rpm-ostree status --json

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1354)

___

### running\_processes

• `Optional` **running\_processes**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1186](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1186)

___

### sap\_instance\_number

• `Optional` **sap\_instance\_number**: `string`

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1300)

___

### sap\_sids

• `Optional` **sap\_sids**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1294](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1294)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1288)

___

### sap\_version

• `Optional` **sap\_version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1306)

___

### satellite\_managed

• `Optional` **satellite\_managed**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1210)

___

### selinux\_config\_file

• `Optional` **selinux\_config\_file**: `string`

The SELinux mode provided in the config file

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1324)

___

### selinux\_current\_mode

• `Optional` **selinux\_current\_mode**: [`SystemProfileSelinuxCurrentModeEnum`](../enums/SystemProfileSelinuxCurrentModeEnum.md)

The current SELinux mode, either enforcing, permissive, or disabled

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1318)

___

### subscription\_auto\_attach

• `Optional` **subscription\_auto\_attach**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1198](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1198)

___

### subscription\_status

• `Optional` **subscription\_status**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1192)

___

### system\_memory\_bytes

• `Optional` **system\_memory\_bytes**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1096](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1096)

___

### system\_purpose

• `Optional` **system\_purpose**: [`SystemProfileSystemPurpose`](SystemProfileSystemPurpose.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1366)

___

### tuned\_profile

• `Optional` **tuned\_profile**: `string`

Current profile resulting from command tuned-adm active

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1312)

___

### yum\_repos

• `Optional` **yum\_repos**: [`YumRepo`](YumRepo.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1222)
