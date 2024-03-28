[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / ExecutiveReportTopCves

# Interface: ExecutiveReportTopCves

**`Export`**

**`Interface`**

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

[api.ts:1003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1003)

___

### cvss3\_score

• **cvss3\_score**: ``null`` \| `string`

String representation of cvss3 score of the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1009)

___

### description

• **description**: `string`

Description of the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1015)

___

### known\_exploit

• **known\_exploit**: `boolean`

Shows whether a CVE has known exploits or not

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1021](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1021)

___

### rule\_presence

• `Optional` **rule\_presence**: `boolean`

Indicator of security rule presence

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1027)

___

### security\_rule

• `Optional` **security\_rule**: `boolean`

Indicator of security rule presence

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1033](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1033)

___

### synopsis

• **synopsis**: `string`

CVE synopsis

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1039)

___

### systems\_affected

• **systems\_affected**: `number`

Systems affected by the CVE.

**`Memberof`**

ExecutiveReportTopCves

#### Defined in

[api.ts:1045](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1045)
