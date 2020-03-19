
[

Javascript client for Remediations API
======================================

](#javascript-client-for-remediations-api)

This is a client library for [RedHatInsights/insights-remediations](https://github.com/RedHatInsights/insights-remediations).

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/remediations-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/remediations-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

```js
import { RemediationsApi } from '@redhat-cloud-services/remediations-client';

const api = new RemediationsApi();
const remediations = await api.getRemediations();
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

## Index

### Modules

* [PlaybookExecutorStatus](modules/playbookexecutorstatus.md)

### Enumerations

* [PlaybookRunStatus](enums/playbookrunstatus.md)
* [PlaybookRunSystemStatus](enums/playbookrunsystemstatus.md)
* [ResolutionRisk](enums/resolutionrisk.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DiagnosisApi](classes/diagnosisapi.md)
* [GeneratorApi](classes/generatorapi.md)
* [RemediationsApi](classes/remediationsapi.md)
* [RequiredError](classes/requirederror.md)
* [ResolutionsApi](classes/resolutionsapi.md)
* [VersionApi](classes/versionapi.md)

### Interfaces

* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Diagnosis](interfaces/diagnosis.md)
* [ExecuteRemediation](interfaces/executeremediation.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [Meta](interfaces/meta.md)
* [PlaybookDefinition](interfaces/playbookdefinition.md)
* [PlaybookDefinitionIssues](interfaces/playbookdefinitionissues.md)
* [PlaybookExecutorDetails](interfaces/playbookexecutordetails.md)
* [PlaybookExecutors](interfaces/playbookexecutors.md)
* [PlaybookRunDetails](interfaces/playbookrundetails.md)
* [PlaybookRunExecutorDetails](interfaces/playbookrunexecutordetails.md)
* [PlaybookRunSystemDetails](interfaces/playbookrunsystemdetails.md)
* [PlaybookRunSystemList](interfaces/playbookrunsystemlist.md)
* [PlaybookRunSystems](interfaces/playbookrunsystems.md)
* [PlaybookRunsList](interfaces/playbookrunslist.md)
* [RemediationConnectionStatus](interfaces/remediationconnectionstatus.md)
* [RemediationCreated](interfaces/remediationcreated.md)
* [RemediationDetails](interfaces/remediationdetails.md)
* [RemediationInput](interfaces/remediationinput.md)
* [RemediationInputAdd](interfaces/remediationinputadd.md)
* [RemediationInputAddIssues](interfaces/remediationinputaddissues.md)
* [RemediationIssue](interfaces/remediationissue.md)
* [RemediationIssueIn](interfaces/remediationissuein.md)
* [RemediationIssueResolution](interfaces/remediationissueresolution.md)
* [RemediationList](interfaces/remediationlist.md)
* [RemediationListItem](interfaces/remediationlistitem.md)
* [RemediationListLinks](interfaces/remediationlistlinks.md)
* [RequestArgs](interfaces/requestargs.md)
* [RequestError](interfaces/requesterror.md)
* [RequestErrorErrors](interfaces/requesterrorerrors.md)
* [Resolutions](interfaces/resolutions.md)
* [ResolutionsBatchInput](interfaces/resolutionsbatchinput.md)
* [ResolutionsResolutions](interfaces/resolutionsresolutions.md)
* [SystemOut](interfaces/systemout.md)
* [UserOut](interfaces/userout.md)

### Variables

* [BASE_PATH](#base_path)
* [env](#env)

### Functions

* [DiagnosisApiAxiosParamCreator](#diagnosisapiaxiosparamcreator)
* [DiagnosisApiFactory](#diagnosisapifactory)
* [DiagnosisApiFp](#diagnosisapifp)
* [GeneratorApiAxiosParamCreator](#generatorapiaxiosparamcreator)
* [GeneratorApiFactory](#generatorapifactory)
* [GeneratorApiFp](#generatorapifp)
* [RemediationsApiAxiosParamCreator](#remediationsapiaxiosparamcreator)
* [RemediationsApiFactory](#remediationsapifactory)
* [RemediationsApiFp](#remediationsapifp)
* [ResolutionsApiAxiosParamCreator](#resolutionsapiaxiosparamcreator)
* [ResolutionsApiFactory](#resolutionsapifactory)
* [ResolutionsApiFp](#resolutionsapifp)
* [VersionApiAxiosParamCreator](#versionapiaxiosparamcreator)
* [VersionApiFactory](#versionapifactory)
* [VersionApiFp](#versionapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)
* [config](#config)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com/api/remediations/v1".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L20)*

___
<a id="env"></a>

### `<Const>` env

**● env**: *`ProcessEnv`* =  process.env

*Defined in [test/config.ts:1](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L1)*

___

## Functions

<a id="diagnosisapiaxiosparamcreator"></a>

### `<Const>` DiagnosisApiAxiosParamCreator

▸ **DiagnosisApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1145)*

DiagnosisApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="diagnosisapifactory"></a>

### `<Const>` DiagnosisApiFactory

▸ **DiagnosisApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1216)*

DiagnosisApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="diagnosisapifp"></a>

### `<Const>` DiagnosisApiFp

▸ **DiagnosisApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1192](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1192)*

DiagnosisApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="generatorapiaxiosparamcreator"></a>

### `<Const>` GeneratorApiAxiosParamCreator

▸ **GeneratorApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1258)*

GeneratorApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="generatorapifactory"></a>

### `<Const>` GeneratorApiFactory

▸ **GeneratorApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:1326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1326)*

GeneratorApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="generatorapifp"></a>

### `<Const>` GeneratorApiFp

▸ **GeneratorApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1303)*

GeneratorApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="remediationsapiaxiosparamcreator"></a>

### `<Const>` RemediationsApiAxiosParamCreator

▸ **RemediationsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1366](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1366)*

RemediationsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="remediationsapifactory"></a>

### `<Const>` RemediationsApiFactory

▸ **RemediationsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2197)*

RemediationsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="remediationsapifp"></a>

### `<Const>` RemediationsApiFp

▸ **RemediationsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:1963](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L1963)*

RemediationsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="resolutionsapiaxiosparamcreator"></a>

### `<Const>` ResolutionsApiAxiosParamCreator

▸ **ResolutionsApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2575)*

ResolutionsApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="resolutionsapifactory"></a>

### `<Const>` ResolutionsApiFactory

▸ **ResolutionsApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2690)*

ResolutionsApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="resolutionsapifp"></a>

### `<Const>` ResolutionsApiFp

▸ **ResolutionsApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2653)*

ResolutionsApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="versionapiaxiosparamcreator"></a>

### `<Const>` VersionApiAxiosParamCreator

▸ **VersionApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2752)*

VersionApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="versionapifactory"></a>

### `<Const>` VersionApiFactory

▸ **VersionApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:2810](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2810)*

VersionApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="versionapifp"></a>

### `<Const>` VersionApiFp

▸ **VersionApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:2788](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2788)*

VersionApi - functional programming interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___

## Object literals

<a id="collection_formats"></a>

### `<Const>` COLLECTION_FORMATS

**COLLECTION_FORMATS**: *`object`*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L29)*

___

___
<a id="config"></a>

### `<Const>` config

**config**: *`object`*

*Defined in [test/config.ts:5](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L5)*

<a id="config.baseoptions"></a>

####  baseOptions

**● baseOptions**: *`object`*

*Defined in [test/config.ts:7](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L7)*

#### Type declaration

___
<a id="config.basepath"></a>

####  basePath

**● basePath**: *`string`* =  env.TEST_BASEPATH || 'http://localhost:9002/api/remediations/v1'

*Defined in [test/config.ts:6](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/test/config.ts#L6)*

___

___

