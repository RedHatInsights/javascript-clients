[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [PlaybookTemplateData](playbooktemplatedata.md)

# Interface: PlaybookTemplateData

**`export`** 

**`interface`** PlaybookTemplateData

## Hierarchy

* **PlaybookTemplateData**

## Index

### Properties

* [description](playbooktemplatedata.md#description)
* [play](playbooktemplatedata.md#play)
* [reboot_required](playbooktemplatedata.md#optional-reboot_required)
* [version](playbooktemplatedata.md#version)

## Properties

###  description

• **description**: *string*

*Defined in [git-api/api.ts:2136](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2136)*

Playbook template description.

**`memberof`** PlaybookTemplateData

___

###  play

• **play**: *string*

*Defined in [git-api/api.ts:2142](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2142)*

Actual playbook template.

**`memberof`** PlaybookTemplateData

___

### `Optional` reboot_required

• **reboot_required**? : *boolean | null*

*Defined in [git-api/api.ts:2148](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2148)*

Indicator whter reboot is required to mitigate vulnerability.

**`memberof`** PlaybookTemplateData

___

###  version

• **version**: *string*

*Defined in [git-api/api.ts:2154](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2154)*

Revision of the playbook template.

**`memberof`** PlaybookTemplateData
