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

*Defined in [packages/vulnerabilities/api.ts:828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L828)*

If show_advisories=true shows access to patch service else null

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_key

• **rule_key**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:816](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L816)*

Filters security rules by its error key.

**`memberof`** MetaAffectedSystemsAllOf

___

###  rule_presence

• **rule_presence**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:822](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L822)*

Filter based on presence of security rule

**`memberof`** MetaAffectedSystemsAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L810)*

Filer based on CVE status ID.

**`memberof`** MetaAffectedSystemsAllOf
