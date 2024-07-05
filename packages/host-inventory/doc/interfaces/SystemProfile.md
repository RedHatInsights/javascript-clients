[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfile

# Interface: SystemProfile

Representation of the system profile fields

**`Export`**

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
- [conversions](SystemProfile.md#conversions)
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
- [third\_party\_services](SystemProfile.md#third_party_services)
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

[api.ts:1960](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1960)

___

### arch

• `Optional` **arch**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1732](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1732)

___

### basearch

• `Optional` **basearch**: `string`

The architecture family (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1738](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1738)

___

### bios\_release\_date

• `Optional` **bios\_release\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1690](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1690)

___

### bios\_vendor

• `Optional` **bios\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1678](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1678)

___

### bios\_version

• `Optional` **bios\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1684](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1684)

___

### bootc\_status

• `Optional` **bootc\_status**: [`SystemProfileBootcStatus`](SystemProfileBootcStatus.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1990](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1990)

___

### captured\_date

• `Optional` **captured\_date**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1834](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1834)

___

### cloud\_provider

• `Optional` **cloud\_provider**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1786](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1786)

___

### conversions

• `Optional` **conversions**: [`SystemProfileConversions`](SystemProfileConversions.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1996](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1996)

___

### cores\_per\_socket

• `Optional` **cores\_per\_socket**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1636](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1636)

___

### cpu\_flags

• `Optional` **cpu\_flags**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1696](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1696)

___

### cpu\_model

• `Optional` **cpu\_model**: `string`

The cpu model name

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1618](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1618)

___

### disk\_devices

• `Optional` **disk\_devices**: [`DiskDevice`](DiskDevice.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1672](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1672)

___

### dnf\_modules

• `Optional` **dnf\_modules**: [`DnfModule`](DnfModule.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1810](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1810)

___

### enabled\_services

• `Optional` **enabled\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1864](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1864)

___

### gpg\_pubkeys

• `Optional` **gpg\_pubkeys**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1852](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1852)

___

### greenboot\_fallback\_detected

• `Optional` **greenboot\_fallback\_detected**: `boolean`

Indicates whether greenboot detected a rolled back update on an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1936](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1936)

___

### greenboot\_status

• `Optional` **greenboot\_status**: [`SystemProfileGreenbootStatusEnum`](../enums/SystemProfileGreenbootStatusEnum.md)

Indicates the greenboot status of an edge device.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1930](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1930)

___

### host\_type

• `Optional` **host\_type**: [`Edge`](../enums/SystemProfileHostTypeEnum.md#edge)

Indicates the type of host.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1924](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1924)

___

### infrastructure\_type

• `Optional` **infrastructure\_type**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1654](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1654)

___

### infrastructure\_vendor

• `Optional` **infrastructure\_vendor**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1660](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1660)

___

### insights\_client\_version

• `Optional` **insights\_client\_version**: `string`

The version number of insights client. supports wildcards

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1822](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1822)

___

### insights\_egg\_version

• `Optional` **insights\_egg\_version**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1828](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1828)

___

### installed\_packages

• `Optional` **installed\_packages**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1840](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1840)

___

### installed\_packages\_delta

• `Optional` **installed\_packages\_delta**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1846](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1846)

___

### installed\_products

• `Optional` **installed\_products**: [`InstalledProduct`](InstalledProduct.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1816](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1816)

___

### installed\_services

• `Optional` **installed\_services**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1858](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1858)

___

### intersystems

• `Optional` **intersystems**: [`SystemProfileIntersystems`](SystemProfileIntersystems.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1966](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1966)

___

### is\_marketplace

• `Optional` **is\_marketplace**: `boolean`

Indicates whether the host is part of a marketplace install from AWS, Azure, etc.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1918](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1918)

___

### katello\_agent\_running

• `Optional` **katello\_agent\_running**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1774](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1774)

___

### kernel\_modules

• `Optional` **kernel\_modules**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1744](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1744)

___

### last\_boot\_time

• `Optional` **last\_boot\_time**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1750](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1750)

___

### mssql

• `Optional` **mssql**: [`SystemProfileMssql`](SystemProfileMssql.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1972](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1972)

___

### network\_interfaces

• `Optional` **network\_interfaces**: [`NetworkInterface`](NetworkInterface.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1666](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1666)

___

### number\_of\_cpus

• `Optional` **number\_of\_cpus**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1624](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1624)

___

### number\_of\_sockets

• `Optional` **number\_of\_sockets**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1630](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1630)

___

### operating\_system

• `Optional` **operating\_system**: [`SystemProfileOperatingSystem`](SystemProfileOperatingSystem.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1708](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1708)

___

### os\_kernel\_version

• `Optional` **os\_kernel\_version**: `string`

The kernel version represented with a three, optionally four, number scheme.

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1720)

___

### os\_release

• `Optional` **os\_release**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1714](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1714)

___

### owner\_id

• `Optional` **owner\_id**: `string`

A UUID associated with the host\'s RHSM certificate

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1600](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1600)

___

### public\_dns

• `Optional` **public\_dns**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1798](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1798)

___

### public\_ipv4\_addresses

• `Optional` **public\_ipv4\_addresses**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1792](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1792)

___

### releasever

• `Optional` **releasever**: `string`

Release name of the system distribution (from yum/dnf)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1726](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1726)

___

### rhc\_client\_id

• `Optional` **rhc\_client\_id**: `string`

A UUID associated with a cloud_connector

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1606](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1606)

___

### rhc\_config\_state

• `Optional` **rhc\_config\_state**: `string`

A UUID associated with the config manager state

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1612](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1612)

___

### rhsm

• `Optional` **rhsm**: [`SystemProfileRhsm`](SystemProfileRhsm.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1948](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1948)

___

### rpm\_ostree\_deployments

• `Optional` **rpm\_ostree\_deployments**: [`RPMOSTreeDeployment`](RPMOSTreeDeployment.md)[]

The list of deployments on the system as reported by rpm-ostree status --json

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1942](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1942)

___

### running\_processes

• `Optional` **running\_processes**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1756](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1756)

___

### sap

• `Optional` **sap**: [`SystemProfileSap`](SystemProfileSap.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1870](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1870)

___

### sap\_instance\_number

• `Optional` **sap\_instance\_number**: `string`

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1888](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1888)

___

### sap\_sids

• `Optional` **sap\_sids**: `string`[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1882](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1882)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1876](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1876)

___

### sap\_version

• `Optional` **sap\_version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1894](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1894)

___

### satellite\_managed

• `Optional` **satellite\_managed**: `boolean`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1780)

___

### selinux\_config\_file

• `Optional` **selinux\_config\_file**: `string`

The SELinux mode provided in the config file

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1912](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1912)

___

### selinux\_current\_mode

• `Optional` **selinux\_current\_mode**: [`SystemProfileSelinuxCurrentModeEnum`](../enums/SystemProfileSelinuxCurrentModeEnum.md)

The current SELinux mode, either enforcing, permissive, or disabled

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1906](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1906)

___

### subscription\_auto\_attach

• `Optional` **subscription\_auto\_attach**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1768)

___

### subscription\_status

• `Optional` **subscription\_status**: `string`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1762](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1762)

___

### system\_memory\_bytes

• `Optional` **system\_memory\_bytes**: `number`

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1648](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1648)

___

### system\_purpose

• `Optional` **system\_purpose**: [`SystemProfileSystemPurpose`](SystemProfileSystemPurpose.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1954](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1954)

___

### system\_update\_method

• `Optional` **system\_update\_method**: [`SystemProfileSystemUpdateMethodEnum`](../enums/SystemProfileSystemUpdateMethodEnum.md)

System update method

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1978](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1978)

___

### systemd

• `Optional` **systemd**: [`SystemProfileSystemd`](SystemProfileSystemd.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1702](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1702)

___

### third\_party\_services

• `Optional` **third\_party\_services**: [`SystemProfileThirdPartyServices`](SystemProfileThirdPartyServices.md)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:2002](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2002)

___

### threads\_per\_core

• `Optional` **threads\_per\_core**: `number`

Number of CPU threads per CPU core. Typical values: 1, 2, 4

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1642](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1642)

___

### tuned\_profile

• `Optional` **tuned\_profile**: `string`

Current profile resulting from command tuned-adm active

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1900](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1900)

___

### virtual\_host\_uuid

• `Optional` **virtual\_host\_uuid**: `string`

Hypervisor host identity (subscription manager id)

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1984](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1984)

___

### yum\_repos

• `Optional` **yum\_repos**: [`YumRepo`](YumRepo.md)[]

**`Memberof`**

SystemProfile

#### Defined in

[api.ts:1804](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L1804)
