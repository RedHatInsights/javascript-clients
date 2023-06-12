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
- [basearch](SystemProfile.md#basearch)
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
- [releasever](SystemProfile.md#releasever)
- [rhc\_client\_id](SystemProfile.md#rhc_client_id)
- [rhc\_config\_state](SystemProfile.md#rhc_config_state)
- [rhsm](SystemProfile.md#rhsm)
- [rpm\_ostree\_deployments](SystemProfile.md#rpm_ostree_deployments)
- [running\_processes](SystemProfile.md#running_processes)
- [sap](SystemProfile.md#sap)
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
- [system\_update\_method](SystemProfile.md#system_update_method)
- [tuned\_profile](SystemProfile.md#tuned_profile)
- [yum\_repos](SystemProfile.md#yum_repos)

## Properties

### ansible

• `Optional` **ansible**: [`SystemProfileAnsible`](SystemProfileAnsible.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1679)

___

### arch

• `Optional` **arch**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1463)

___

### basearch

• `Optional` **basearch**: `string`

The architecture family (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1469)

___

### bios\_release\_date

• `Optional` **bios\_release\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1427)

___

### bios\_vendor

• `Optional` **bios\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1415)

___

### bios\_version

• `Optional` **bios\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1421)

___

### captured\_date

• `Optional` **captured\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1553)

___

### cloud\_provider

• `Optional` **cloud\_provider**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1517)

___

### cores\_per\_socket

• `Optional` **cores\_per\_socket**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1379)

___

### cpu\_flags

• `Optional` **cpu\_flags**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1433)

___

### cpu\_model

• `Optional` **cpu\_model**: `string`

The cpu model name

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1361)

___

### disk\_devices

• `Optional` **disk\_devices**: [`DiskDevice`](DiskDevice.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1409)

___

### dnf\_modules

• `Optional` **dnf\_modules**: [`DnfModule`](DnfModule.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1529)

___

### enabled\_services

• `Optional` **enabled\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1583)

___

### gpg\_pubkeys

• `Optional` **gpg\_pubkeys**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1571](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1571)

___

### greenboot\_fallback\_detected

• `Optional` **greenboot\_fallback\_detected**: `boolean`

Indicates whether greenboot detected a rolled back update on an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1655)

___

### greenboot\_status

• `Optional` **greenboot\_status**: [`SystemProfileGreenbootStatusEnum`](../enums/SystemProfileGreenbootStatusEnum.md)

Indicates the greenboot status of an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1649](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1649)

___

### host\_type

• `Optional` **host\_type**: [`Edge`](../enums/SystemProfileHostTypeEnum.md#edge)

Indicates the type of host.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1643)

___

### infrastructure\_type

• `Optional` **infrastructure\_type**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1391)

___

### infrastructure\_vendor

• `Optional` **infrastructure\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1397)

___

### insights\_client\_version

• `Optional` **insights\_client\_version**: `string`

The version number of insights client. supports wildcards

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1541)

___

### insights\_egg\_version

• `Optional` **insights\_egg\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1547)

___

### installed\_packages

• `Optional` **installed\_packages**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1559](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1559)

___

### installed\_packages\_delta

• `Optional` **installed\_packages\_delta**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1565)

___

### installed\_products

• `Optional` **installed\_products**: [`InstalledProduct`](InstalledProduct.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1535](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1535)

___

### installed\_services

• `Optional` **installed\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1577](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1577)

___

### is\_marketplace

• `Optional` **is\_marketplace**: `boolean`

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1637](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1637)

___

### katello\_agent\_running

• `Optional` **katello\_agent\_running**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1505](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1505)

___

### kernel\_modules

• `Optional` **kernel\_modules**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1475)

___

### last\_boot\_time

• `Optional` **last\_boot\_time**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1481)

___

### mssql

• `Optional` **mssql**: [`SystemProfileMssql`](SystemProfileMssql.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1685)

___

### network\_interfaces

• `Optional` **network\_interfaces**: [`NetworkInterface`](NetworkInterface.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1403)

___

### number\_of\_cpus

• `Optional` **number\_of\_cpus**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1367)

___

### number\_of\_sockets

• `Optional` **number\_of\_sockets**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1373)

___

### operating\_system

• `Optional` **operating\_system**: [`SystemProfileOperatingSystem`](SystemProfileOperatingSystem.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1439)

___

### os\_kernel\_version

• `Optional` **os\_kernel\_version**: `string`

The kernel version represented with a three, optionally four, number scheme.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1451)

___

### os\_release

• `Optional` **os\_release**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1445](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1445)

___

### owner\_id

• `Optional` **owner\_id**: `string`

A UUID associated with the host\'s RHSM certificate

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1343)

___

### releasever

• `Optional` **releasever**: `string`

Release name of the system distribution (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1457)

___

### rhc\_client\_id

• `Optional` **rhc\_client\_id**: `string`

A UUID associated with a cloud_connector

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1349)

___

### rhc\_config\_state

• `Optional` **rhc\_config\_state**: `string`

A UUID associated with the config manager state

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1355)

___

### rhsm

• `Optional` **rhsm**: [`SystemProfileRhsm`](SystemProfileRhsm.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1667)

___

### rpm\_ostree\_deployments

• `Optional` **rpm\_ostree\_deployments**: [`RPMOSTreeDeployment`](RPMOSTreeDeployment.md)[]

The list of deployments on the system as reported by rpm-ostree status --json

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1661)

___

### running\_processes

• `Optional` **running\_processes**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1487](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1487)

___

### sap

• `Optional` **sap**: [`SystemProfileSap`](SystemProfileSap.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1589](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1589)

___

### sap\_instance\_number

• `Optional` **sap\_instance\_number**: `string`

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1607)

___

### sap\_sids

• `Optional` **sap\_sids**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1601](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1601)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1595)

___

### sap\_version

• `Optional` **sap\_version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1613](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1613)

___

### satellite\_managed

• `Optional` **satellite\_managed**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1511)

___

### selinux\_config\_file

• `Optional` **selinux\_config\_file**: `string`

The SELinux mode provided in the config file

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1631](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1631)

___

### selinux\_current\_mode

• `Optional` **selinux\_current\_mode**: [`SystemProfileSelinuxCurrentModeEnum`](../enums/SystemProfileSelinuxCurrentModeEnum.md)

The current SELinux mode, either enforcing, permissive, or disabled

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1625](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1625)

___

### subscription\_auto\_attach

• `Optional` **subscription\_auto\_attach**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1499)

___

### subscription\_status

• `Optional` **subscription\_status**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1493)

___

### system\_memory\_bytes

• `Optional` **system\_memory\_bytes**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1385)

___

### system\_purpose

• `Optional` **system\_purpose**: [`SystemProfileSystemPurpose`](SystemProfileSystemPurpose.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1673)

___

### system\_update\_method

• `Optional` **system\_update\_method**: [`SystemProfileSystemUpdateMethodEnum`](../enums/SystemProfileSystemUpdateMethodEnum.md)

System update method

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1691)

___

### tuned\_profile

• `Optional` **tuned\_profile**: `string`

Current profile resulting from command tuned-adm active

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1619)

___

### yum\_repos

• `Optional` **yum\_repos**: [`YumRepo`](YumRepo.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1523](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1523)
