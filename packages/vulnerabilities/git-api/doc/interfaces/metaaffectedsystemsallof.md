[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystemsAllOf](metaaffectedsystemsallof.md)

# Interface: MetaAffectedSystemsAllOf

**`export`** 

**`interface`** MetaAffectedSystemsAllOf

## Hierarchy

* **MetaAffectedSystemsAllOf**

## Index

### Properties

* [patch_access](metaaffectedsystemsallof.md#patch_access)
* [rhel_version](metaaffectedsystemsallof.md#rhel_version)
* [rule_key](metaaffectedsystemsallof.md#rule_key)
* [rule_presence](metaaffectedsystemsallof.md#rule_presence)
* [status_id](metaaffectedsystemsallof.md#status_id)

## Properties

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1268](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1268)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystemsAllOf

___

###  rhel_version

• **rhel_version**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1274](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1274)*

Filter base on system RHEL version.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1256](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1256)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1262](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1262)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystemsAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1250](https://github.com/fhlavac/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1250)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystemsAllOf
