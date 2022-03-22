[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystemsAllOf](metaaffectedsystemsallof.md)

# Interface: MetaAffectedSystemsAllOf

**`export`** 

**`interface`** MetaAffectedSystemsAllOf

## Hierarchy

* **MetaAffectedSystemsAllOf**

## Index

### Properties

* [first_reported_from](metaaffectedsystemsallof.md#first_reported_from)
* [first_reported_to](metaaffectedsystemsallof.md#first_reported_to)
* [patch_access](metaaffectedsystemsallof.md#patch_access)
* [rhel_version](metaaffectedsystemsallof.md#rhel_version)
* [rule_key](metaaffectedsystemsallof.md#rule_key)
* [rule_presence](metaaffectedsystemsallof.md#rule_presence)
* [status_id](metaaffectedsystemsallof.md#status_id)

## Properties

###  first_reported_from

• **first_reported_from**: *string | null*

*Defined in [api.ts:1342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1342)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaAffectedSystemsAllOf

___

###  first_reported_to

• **first_reported_to**: *string | null*

*Defined in [api.ts:1348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1348)*

Filter system-cve pairs based on first time of detection of CVE.

**`memberof`** MetaAffectedSystemsAllOf

___

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [api.ts:1354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1354)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystemsAllOf

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [api.ts:1360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1360)*

Filter base on system RHEL version.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1366)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [api.ts:1372](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1372)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystemsAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [api.ts:1378](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1378)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystemsAllOf
