[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / ExecutiveReportTopCves

# Interface: ExecutiveReportTopCves

**`Export`**

ExecutiveReportTopCves

## Table of contents

### Properties

- [cvss2\_score](ExecutiveReportTopCves.md#cvss2_score)
- [cvss3\_score](ExecutiveReportTopCves.md#cvss3_score)
- [description](ExecutiveReportTopCves.md#description)
- [known\_exploit](ExecutiveReportTopCves.md#known_exploit)
- [rule\_presence](ExecutiveReportTopCves.md#rule_presence)
- [security\_rule](ExecutiveReportTopCves.md#security_rule)
- [synopsis](ExecutiveReportTopCves.md#synopsis)
- [systems\_affected](ExecutiveReportTopCves.md#systems_affected)

## Properties

### cvss2\_score

• **cvss2\_score**: ``null`` \| `string`

String representation of cvss2 score of the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:990](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L990)

___

### cvss3\_score

• **cvss3\_score**: ``null`` \| `string`

String representation of cvss3 score of the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:996](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L996)

___

### description

• **description**: `string`

Description of the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1002](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1002)

___

### known\_exploit

• **known\_exploit**: `boolean`

Shows whether a CVE has known exploits or not

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1026](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1026)

___

### rule\_presence

• `Optional` **rule\_presence**: `boolean`

Indicator of security rule presence

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1014](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1014)

___

### security\_rule

• `Optional` **security\_rule**: `boolean`

Indicator of security rule presence

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1008](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1008)

___

### synopsis

• **synopsis**: `string`

CVE synopsis

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:984](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L984)

___

### systems\_affected

• **systems\_affected**: `number`

Systems affected by the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1020](https://github.com/mkholjuraev/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1020)
