[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaAffectedSystemsAllOf](metaaffectedsystemsallof.md)

# Interface: MetaAffectedSystemsAllOf

**`export`** 

**`interface`** MetaAffectedSystemsAllOf

## Hierarchy

* **MetaAffectedSystemsAllOf**

## Index

### Properties

* [patch_access](metaaffectedsystemsallof.md#patch_access)
* [rule_key](metaaffectedsystemsallof.md#rule_key)
* [rule_presence](metaaffectedsystemsallof.md#rule_presence)
* [status_id](metaaffectedsystemsallof.md#status_id)

## Properties

###  patch_access

• **patch_access**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1125](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1125)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1113)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1119](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1119)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystemsAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:1107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L1107)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystemsAllOf
