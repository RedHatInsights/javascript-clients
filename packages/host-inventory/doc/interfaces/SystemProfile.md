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
- [bootc\_status](SystemProfile.md#bootc_status)
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
- [intersystems](SystemProfile.md#intersystems)
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
- [public\_dns](SystemProfile.md#public_dns)
- [public\_ipv4\_addresses](SystemProfile.md#public_ipv4_addresses)
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
- [systemd](SystemProfile.md#systemd)
- [threads\_per\_core](SystemProfile.md#threads_per_core)
- [tuned\_profile](SystemProfile.md#tuned_profile)
- [virtual\_host\_uuid](SystemProfile.md#virtual_host_uuid)
- [yum\_repos](SystemProfile.md#yum_repos)

## Properties

### ansible

• `Optional` **ansible**: [`SystemProfileAnsible`](SystemProfileAnsible.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1934](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1934)

___

### arch

• `Optional` **arch**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1706)

___

### basearch

• `Optional` **basearch**: `string`

The architecture family (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1712](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1712)

___

### bios\_release\_date

• `Optional` **bios\_release\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1664](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1664)

___

### bios\_vendor

• `Optional` **bios\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1652](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1652)

___

### bios\_version

• `Optional` **bios\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1658](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1658)

___

### bootc\_status

• `Optional` **bootc\_status**: [`SystemProfileBootcStatus`](SystemProfileBootcStatus.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1964)

___

### captured\_date

• `Optional` **captured\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1808)

___

### cloud\_provider

• `Optional` **cloud\_provider**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1760)

___

### cores\_per\_socket

• `Optional` **cores\_per\_socket**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1610)

___

### cpu\_flags

• `Optional` **cpu\_flags**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1670)

___

### cpu\_model

• `Optional` **cpu\_model**: `string`

The cpu model name

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1592)

___

### disk\_devices

• `Optional` **disk\_devices**: [`DiskDevice`](DiskDevice.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1646](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1646)

___

### dnf\_modules

• `Optional` **dnf\_modules**: [`DnfModule`](DnfModule.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1784](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1784)

___

### enabled\_services

• `Optional` **enabled\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1838](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1838)

___

### gpg\_pubkeys

• `Optional` **gpg\_pubkeys**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1826)

___

### greenboot\_fallback\_detected

• `Optional` **greenboot\_fallback\_detected**: `boolean`

Indicates whether greenboot detected a rolled back update on an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1910)

___

### greenboot\_status

• `Optional` **greenboot\_status**: [`SystemProfileGreenbootStatusEnum`](../enums/SystemProfileGreenbootStatusEnum.md)

Indicates the greenboot status of an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1904](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1904)

___

### host\_type

• `Optional` **host\_type**: [`Edge`](../enums/SystemProfileHostTypeEnum.md#edge)

Indicates the type of host.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1898)

___

### infrastructure\_type

• `Optional` **infrastructure\_type**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1628](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1628)

___

### infrastructure\_vendor

• `Optional` **infrastructure\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1634)

___

### insights\_client\_version

• `Optional` **insights\_client\_version**: `string`

The version number of insights client. supports wildcards

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1796)

___

### insights\_egg\_version

• `Optional` **insights\_egg\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1802)

___

### installed\_packages

• `Optional` **installed\_packages**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1814)

___

### installed\_packages\_delta

• `Optional` **installed\_packages\_delta**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1820](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1820)

___

### installed\_products

• `Optional` **installed\_products**: [`InstalledProduct`](InstalledProduct.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1790)

___

### installed\_services

• `Optional` **installed\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1832](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1832)

___

### intersystems

• `Optional` **intersystems**: [`SystemProfileIntersystems`](SystemProfileIntersystems.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1940)

___

### is\_marketplace

• `Optional` **is\_marketplace**: `boolean`

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1892)

___

### katello\_agent\_running

• `Optional` **katello\_agent\_running**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1748)

___

### kernel\_modules

• `Optional` **kernel\_modules**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1718](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1718)

___

### last\_boot\_time

• `Optional` **last\_boot\_time**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1724](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1724)

___

### mssql

• `Optional` **mssql**: [`SystemProfileMssql`](SystemProfileMssql.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1946](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1946)

___

### network\_interfaces

• `Optional` **network\_interfaces**: [`NetworkInterface`](NetworkInterface.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1640](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1640)

___

### number\_of\_cpus

• `Optional` **number\_of\_cpus**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1598](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1598)

___

### number\_of\_sockets

• `Optional` **number\_of\_sockets**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1604](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1604)

___

### operating\_system

• `Optional` **operating\_system**: [`SystemProfileOperatingSystem`](SystemProfileOperatingSystem.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1682](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1682)

___

### os\_kernel\_version

• `Optional` **os\_kernel\_version**: `string`

The kernel version represented with a three, optionally four, number scheme.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1694](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1694)

___

### os\_release

• `Optional` **os\_release**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1688](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1688)

___

### owner\_id

• `Optional` **owner\_id**: `string`

A UUID associated with the host\'s RHSM certificate

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1574](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1574)

___

### public\_dns

• `Optional` **public\_dns**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1772](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1772)

___

### public\_ipv4\_addresses

• `Optional` **public\_ipv4\_addresses**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1766)

___

### releasever

• `Optional` **releasever**: `string`

Release name of the system distribution (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1700](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1700)

___

### rhc\_client\_id

• `Optional` **rhc\_client\_id**: `string`

A UUID associated with a cloud_connector

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1580](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1580)

___

### rhc\_config\_state

• `Optional` **rhc\_config\_state**: `string`

A UUID associated with the config manager state

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1586](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1586)

___

### rhsm

• `Optional` **rhsm**: [`SystemProfileRhsm`](SystemProfileRhsm.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1922](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1922)

___

### rpm\_ostree\_deployments

• `Optional` **rpm\_ostree\_deployments**: [`RPMOSTreeDeployment`](RPMOSTreeDeployment.md)[]

The list of deployments on the system as reported by rpm-ostree status --json

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1916](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1916)

___

### running\_processes

• `Optional` **running\_processes**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1730)

___

### sap

• `Optional` **sap**: [`SystemProfileSap`](SystemProfileSap.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1844)

___

### sap\_instance\_number

• `Optional` **sap\_instance\_number**: `string`

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1862)

___

### sap\_sids

• `Optional` **sap\_sids**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1856](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1856)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1850)

___

### sap\_version

• `Optional` **sap\_version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1868](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1868)

___

### satellite\_managed

• `Optional` **satellite\_managed**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1754)

___

### selinux\_config\_file

• `Optional` **selinux\_config\_file**: `string`

The SELinux mode provided in the config file

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1886)

___

### selinux\_current\_mode

• `Optional` **selinux\_current\_mode**: [`SystemProfileSelinuxCurrentModeEnum`](../enums/SystemProfileSelinuxCurrentModeEnum.md)

The current SELinux mode, either enforcing, permissive, or disabled

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1880)

___

### subscription\_auto\_attach

• `Optional` **subscription\_auto\_attach**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1742](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1742)

___

### subscription\_status

• `Optional` **subscription\_status**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1736)

___

### system\_memory\_bytes

• `Optional` **system\_memory\_bytes**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1622](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1622)

___

### system\_purpose

• `Optional` **system\_purpose**: [`SystemProfileSystemPurpose`](SystemProfileSystemPurpose.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1928](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1928)

___

### system\_update\_method

• `Optional` **system\_update\_method**: [`SystemProfileSystemUpdateMethodEnum`](../enums/SystemProfileSystemUpdateMethodEnum.md)

System update method

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1952](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1952)

___

### systemd

• `Optional` **systemd**: [`SystemProfileSystemd`](SystemProfileSystemd.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1676](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1676)

___

### threads\_per\_core

• `Optional` **threads\_per\_core**: `number`

Number of CPU threads per CPU core. Typical values: 1, 2, 4

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1616](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1616)

___

### tuned\_profile

• `Optional` **tuned\_profile**: `string`

Current profile resulting from command tuned-adm active

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1874](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1874)

___

### virtual\_host\_uuid

• `Optional` **virtual\_host\_uuid**: `string`

Hypervisor host identity (subscription manager id)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1958](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1958)

___

### yum\_repos

• `Optional` **yum\_repos**: [`YumRepo`](YumRepo.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1778)
