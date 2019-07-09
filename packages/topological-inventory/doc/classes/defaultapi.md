[@redhat-cloud-services/topological-inventory-client](../README.md) > [DefaultApi](../classes/defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

*__export__*: 

*__class__*: DefaultApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#axios)
* [basePath](defaultapi.md#basepath)
* [configuration](defaultapi.md#configuration)

### Methods

* [getDocumentation](defaultapi.md#getdocumentation)
* [listContainerGroupContainers](defaultapi.md#listcontainergroupcontainers)
* [listContainerGroupTags](defaultapi.md#listcontainergrouptags)
* [listContainerGroups](defaultapi.md#listcontainergroups)
* [listContainerImageTags](defaultapi.md#listcontainerimagetags)
* [listContainerImages](defaultapi.md#listcontainerimages)
* [listContainerNodeContainerGroups](defaultapi.md#listcontainernodecontainergroups)
* [listContainerNodeTags](defaultapi.md#listcontainernodetags)
* [listContainerNodes](defaultapi.md#listcontainernodes)
* [listContainerProjectContainerGroups](defaultapi.md#listcontainerprojectcontainergroups)
* [listContainerProjectContainerResourceQuota](defaultapi.md#listcontainerprojectcontainerresourcequota)
* [listContainerProjectContainerTemplates](defaultapi.md#listcontainerprojectcontainertemplates)
* [listContainerProjectTags](defaultapi.md#listcontainerprojecttags)
* [listContainerProjects](defaultapi.md#listcontainerprojects)
* [listContainerResourceQuota](defaultapi.md#listcontainerresourcequota)
* [listContainerTemplateTags](defaultapi.md#listcontainertemplatetags)
* [listContainerTemplates](defaultapi.md#listcontainertemplates)
* [listContainers](defaultapi.md#listcontainers)
* [listFlavors](defaultapi.md#listflavors)
* [listOrchestrationStacks](defaultapi.md#listorchestrationstacks)
* [listServiceInstances](defaultapi.md#listserviceinstances)
* [listServiceOfferingIcons](defaultapi.md#listserviceofferingicons)
* [listServiceOfferingServiceInstances](defaultapi.md#listserviceofferingserviceinstances)
* [listServiceOfferingServicePlans](defaultapi.md#listserviceofferingserviceplans)
* [listServiceOfferingTags](defaultapi.md#listserviceofferingtags)
* [listServiceOfferings](defaultapi.md#listserviceofferings)
* [listServicePlanServiceInstances](defaultapi.md#listserviceplanserviceinstances)
* [listServicePlans](defaultapi.md#listserviceplans)
* [listSourceAvailabilities](defaultapi.md#listsourceavailabilities)
* [listSourceContainerGroups](defaultapi.md#listsourcecontainergroups)
* [listSourceContainerImages](defaultapi.md#listsourcecontainerimages)
* [listSourceContainerNodes](defaultapi.md#listsourcecontainernodes)
* [listSourceContainerProjects](defaultapi.md#listsourcecontainerprojects)
* [listSourceContainerTemplates](defaultapi.md#listsourcecontainertemplates)
* [listSourceContainers](defaultapi.md#listsourcecontainers)
* [listSourceOrchestrationStacks](defaultapi.md#listsourceorchestrationstacks)
* [listSourceServiceInstances](defaultapi.md#listsourceserviceinstances)
* [listSourceServiceOfferings](defaultapi.md#listsourceserviceofferings)
* [listSourceServicePlans](defaultapi.md#listsourceserviceplans)
* [listSourceVms](defaultapi.md#listsourcevms)
* [listSourceVolumeTypes](defaultapi.md#listsourcevolumetypes)
* [listSourceVolumes](defaultapi.md#listsourcevolumes)
* [listSources](defaultapi.md#listsources)
* [listTagContainerGroups](defaultapi.md#listtagcontainergroups)
* [listTagContainerImages](defaultapi.md#listtagcontainerimages)
* [listTagContainerNodes](defaultapi.md#listtagcontainernodes)
* [listTagContainerProjects](defaultapi.md#listtagcontainerprojects)
* [listTagContainerTemplates](defaultapi.md#listtagcontainertemplates)
* [listTagServiceOfferings](defaultapi.md#listtagserviceofferings)
* [listTagVms](defaultapi.md#listtagvms)
* [listTags](defaultapi.md#listtags)
* [listTasks](defaultapi.md#listtasks)
* [listVmTags](defaultapi.md#listvmtags)
* [listVmVolumeAttachments](defaultapi.md#listvmvolumeattachments)
* [listVmVolumes](defaultapi.md#listvmvolumes)
* [listVms](defaultapi.md#listvms)
* [listVolumeAttachments](defaultapi.md#listvolumeattachments)
* [listVolumeTypes](defaultapi.md#listvolumetypes)
* [listVolumes](defaultapi.md#listvolumes)
* [orderServicePlan](defaultapi.md#orderserviceplan)
* [postGraphQL](defaultapi.md#postgraphql)
* [showContainer](defaultapi.md#showcontainer)
* [showContainerGroup](defaultapi.md#showcontainergroup)
* [showContainerImage](defaultapi.md#showcontainerimage)
* [showContainerNode](defaultapi.md#showcontainernode)
* [showContainerProject](defaultapi.md#showcontainerproject)
* [showContainerResourceQuota](defaultapi.md#showcontainerresourcequota)
* [showContainerTemplate](defaultapi.md#showcontainertemplate)
* [showFlavor](defaultapi.md#showflavor)
* [showOrchestrationStack](defaultapi.md#showorchestrationstack)
* [showServiceInstance](defaultapi.md#showserviceinstance)
* [showServiceOffering](defaultapi.md#showserviceoffering)
* [showServiceOfferingIcon](defaultapi.md#showserviceofferingicon)
* [showServiceOfferingIconIconData](defaultapi.md#showserviceofferingiconicondata)
* [showServicePlan](defaultapi.md#showserviceplan)
* [showSource](defaultapi.md#showsource)
* [showTag](defaultapi.md#showtag)
* [showTask](defaultapi.md#showtask)
* [showVm](defaultapi.md#showvm)
* [showVolume](defaultapi.md#showvolume)
* [showVolumeAttachment](defaultapi.md#showvolumeattachment)
* [showVolumeType](defaultapi.md#showvolumetype)
* [updateTask](defaultapi.md#updatetask)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DefaultApi](defaultapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L49)*

___

## Methods

<a id="getdocumentation"></a>

###  getDocumentation

▸ **getDocumentation**(options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:8912](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8912)*

*__summary__*: Return this API document in JSON format

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="listcontainergroupcontainers"></a>

###  listContainerGroupContainers

▸ **listContainerGroupContainers**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:8927](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8927)*

Returns an array of Container objects

*__summary__*: List Containers for ContainerGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listcontainergrouptags"></a>

###  listContainerGroupTags

▸ **listContainerGroupTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:8942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8942)*

Returns an array of Tag objects

*__summary__*: List Tags for ContainerGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainergroups"></a>

###  listContainerGroups

▸ **listContainerGroups**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:8956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8956)*

Returns an array of ContainerGroup objects

*__summary__*: List ContainerGroups

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainerimagetags"></a>

###  listContainerImageTags

▸ **listContainerImageTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:8971](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8971)*

Returns an array of Tag objects

*__summary__*: List Tags for ContainerImage

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainerimages"></a>

###  listContainerImages

▸ **listContainerImages**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:8985](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L8985)*

Returns an array of ContainerImage objects

*__summary__*: List ContainerImages

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listcontainernodecontainergroups"></a>

###  listContainerNodeContainerGroups

▸ **listContainerNodeContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:9000](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9000)*

Returns an array of ContainerGroup objects

*__summary__*: List ContainerGroups for ContainerNode

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainernodetags"></a>

###  listContainerNodeTags

▸ **listContainerNodeTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9015)*

Returns an array of Tag objects

*__summary__*: List Tags for ContainerNode

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainernodes"></a>

###  listContainerNodes

▸ **listContainerNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:9029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9029)*

Returns an array of ContainerNode objects

*__summary__*: List ContainerNodes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listcontainerprojectcontainergroups"></a>

###  listContainerProjectContainerGroups

▸ **listContainerProjectContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:9044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9044)*

Returns an array of ContainerGroup objects

*__summary__*: List ContainerGroups for ContainerProject

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainerprojectcontainerresourcequota"></a>

###  listContainerProjectContainerResourceQuota

▸ **listContainerProjectContainerResourceQuota**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

*Defined in [api.ts:9059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9059)*

Returns an array of ContainerResourceQuota objects

*__summary__*: List ContainerResourceQuota for ContainerProject

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

___
<a id="listcontainerprojectcontainertemplates"></a>

###  listContainerProjectContainerTemplates

▸ **listContainerProjectContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:9074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9074)*

Returns an array of ContainerTemplate objects

*__summary__*: List ContainerTemplates for ContainerProject

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listcontainerprojecttags"></a>

###  listContainerProjectTags

▸ **listContainerProjectTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9089](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9089)*

Returns an array of Tag objects

*__summary__*: List Tags for ContainerProject

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainerprojects"></a>

###  listContainerProjects

▸ **listContainerProjects**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:9103](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9103)*

Returns an array of ContainerProject objects

*__summary__*: List ContainerProjects

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listcontainerresourcequota"></a>

###  listContainerResourceQuota

▸ **listContainerResourceQuota**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

*Defined in [api.ts:9117](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9117)*

Returns an array of ContainerResourceQuota objects

*__summary__*: List ContainerResourceQuota

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

___
<a id="listcontainertemplatetags"></a>

###  listContainerTemplateTags

▸ **listContainerTemplateTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9132)*

Returns an array of Tag objects

*__summary__*: List Tags for ContainerTemplate

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainertemplates"></a>

###  listContainerTemplates

▸ **listContainerTemplates**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:9146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9146)*

Returns an array of ContainerTemplate objects

*__summary__*: List ContainerTemplates

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listcontainers"></a>

###  listContainers

▸ **listContainers**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:9160](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9160)*

Returns an array of Container objects

*__summary__*: List Containers

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listflavors"></a>

###  listFlavors

▸ **listFlavors**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[FlavorsCollection](../interfaces/flavorscollection.md)>

*Defined in [api.ts:9174](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9174)*

Returns an array of Flavor objects

*__summary__*: List Flavors

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[FlavorsCollection](../interfaces/flavorscollection.md)>

___
<a id="listorchestrationstacks"></a>

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:9188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9188)*

Returns an array of OrchestrationStack objects

*__summary__*: List OrchestrationStacks

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listserviceinstances"></a>

###  listServiceInstances

▸ **listServiceInstances**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:9202](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9202)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceofferingicons"></a>

###  listServiceOfferingIcons

▸ **listServiceOfferingIcons**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)>

*Defined in [api.ts:9216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9216)*

Returns an array of ServiceOfferingIcon objects

*__summary__*: List ServiceOfferingIcons

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)>

___
<a id="listserviceofferingserviceinstances"></a>

###  listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:9231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9231)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances for ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceofferingserviceplans"></a>

###  listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:9246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9246)*

Returns an array of ServicePlan objects

*__summary__*: List ServicePlans for ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listserviceofferingtags"></a>

###  listServiceOfferingTags

▸ **listServiceOfferingTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9261)*

Returns an array of Tag objects

*__summary__*: List Tags for ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listserviceofferings"></a>

###  listServiceOfferings

▸ **listServiceOfferings**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:9275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9275)*

Returns an array of ServiceOffering objects

*__summary__*: List ServiceOfferings

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listserviceplanserviceinstances"></a>

###  listServicePlanServiceInstances

▸ **listServicePlanServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:9290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9290)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances for ServicePlan

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceplans"></a>

###  listServicePlans

▸ **listServicePlans**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:9304](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9304)*

Returns an array of ServicePlan objects

*__summary__*: List ServicePlans

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourceavailabilities"></a>

###  listSourceAvailabilities

▸ **listSourceAvailabilities**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)>

*Defined in [api.ts:9319](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9319)*

Returns an array of Availability objects

*__summary__*: List Availabilities for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)>

___
<a id="listsourcecontainergroups"></a>

###  listSourceContainerGroups

▸ **listSourceContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:9334](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9334)*

Returns an array of ContainerGroup objects

*__summary__*: List ContainerGroups for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listsourcecontainerimages"></a>

###  listSourceContainerImages

▸ **listSourceContainerImages**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:9349](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9349)*

Returns an array of ContainerImage objects

*__summary__*: List ContainerImages for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listsourcecontainernodes"></a>

###  listSourceContainerNodes

▸ **listSourceContainerNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:9364](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9364)*

Returns an array of ContainerNode objects

*__summary__*: List ContainerNodes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listsourcecontainerprojects"></a>

###  listSourceContainerProjects

▸ **listSourceContainerProjects**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:9379](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9379)*

Returns an array of ContainerProject objects

*__summary__*: List ContainerProjects for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listsourcecontainertemplates"></a>

###  listSourceContainerTemplates

▸ **listSourceContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:9394](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9394)*

Returns an array of ContainerTemplate objects

*__summary__*: List ContainerTemplates for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listsourcecontainers"></a>

###  listSourceContainers

▸ **listSourceContainers**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:9409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9409)*

Returns an array of Container objects

*__summary__*: List Containers for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listsourceorchestrationstacks"></a>

###  listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:9424](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9424)*

Returns an array of OrchestrationStack objects

*__summary__*: List OrchestrationStacks for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsourceserviceinstances"></a>

###  listSourceServiceInstances

▸ **listSourceServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:9439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9439)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsourceserviceofferings"></a>

###  listSourceServiceOfferings

▸ **listSourceServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:9454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9454)*

Returns an array of ServiceOffering objects

*__summary__*: List ServiceOfferings for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsourceserviceplans"></a>

###  listSourceServicePlans

▸ **listSourceServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:9469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9469)*

Returns an array of ServicePlan objects

*__summary__*: List ServicePlans for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourcevms"></a>

###  listSourceVms

▸ **listSourceVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:9484](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9484)*

Returns an array of Vm objects

*__summary__*: List Vms for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsourcevolumetypes"></a>

###  listSourceVolumeTypes

▸ **listSourceVolumeTypes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

*Defined in [api.ts:9499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9499)*

Returns an array of VolumeType objects

*__summary__*: List VolumeTypes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

___
<a id="listsourcevolumes"></a>

###  listSourceVolumes

▸ **listSourceVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:9514](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9514)*

Returns an array of Volume objects

*__summary__*: List Volumes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsources"></a>

###  listSources

▸ **listSources**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:9528](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9528)*

Returns an array of Source objects

*__summary__*: List Sources

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="listtagcontainergroups"></a>

###  listTagContainerGroups

▸ **listTagContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:9543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9543)*

Returns an array of ContainerGroup objects

*__summary__*: List ContainerGroups for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listtagcontainerimages"></a>

###  listTagContainerImages

▸ **listTagContainerImages**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:9558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9558)*

Returns an array of ContainerImage objects

*__summary__*: List ContainerImages for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listtagcontainernodes"></a>

###  listTagContainerNodes

▸ **listTagContainerNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:9573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9573)*

Returns an array of ContainerNode objects

*__summary__*: List ContainerNodes for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listtagcontainerprojects"></a>

###  listTagContainerProjects

▸ **listTagContainerProjects**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:9588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9588)*

Returns an array of ContainerProject objects

*__summary__*: List ContainerProjects for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listtagcontainertemplates"></a>

###  listTagContainerTemplates

▸ **listTagContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:9603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9603)*

Returns an array of ContainerTemplate objects

*__summary__*: List ContainerTemplates for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listtagserviceofferings"></a>

###  listTagServiceOfferings

▸ **listTagServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:9618](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9618)*

Returns an array of ServiceOffering objects

*__summary__*: List ServiceOfferings for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listtagvms"></a>

###  listTagVms

▸ **listTagVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:9633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9633)*

Returns an array of Vm objects

*__summary__*: List Vms for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listtags"></a>

###  listTags

▸ **listTags**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9647)*

Returns an array of Tag objects

*__summary__*: List Tags

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listtasks"></a>

###  listTasks

▸ **listTasks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TasksCollection](../interfaces/taskscollection.md)>

*Defined in [api.ts:9661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9661)*

Returns an array of Task objects

*__summary__*: List Tasks

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TasksCollection](../interfaces/taskscollection.md)>

___
<a id="listvmtags"></a>

###  listVmTags

▸ **listVmTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:9676](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9676)*

Returns an array of Tag objects

*__summary__*: List Tags for Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listvmvolumeattachments"></a>

###  listVmVolumeAttachments

▸ **listVmVolumeAttachments**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

*Defined in [api.ts:9691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9691)*

Returns an array of VolumeAttachment objects

*__summary__*: List VolumeAttachments for Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

___
<a id="listvmvolumes"></a>

###  listVmVolumes

▸ **listVmVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:9706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9706)*

Returns an array of Volume objects

*__summary__*: List Volumes for Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listvms"></a>

###  listVms

▸ **listVms**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:9720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9720)*

Returns an array of Vm objects

*__summary__*: List Vms

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listvolumeattachments"></a>

###  listVolumeAttachments

▸ **listVolumeAttachments**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

*Defined in [api.ts:9734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9734)*

Returns an array of VolumeAttachment objects

*__summary__*: List VolumeAttachments

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

___
<a id="listvolumetypes"></a>

###  listVolumeTypes

▸ **listVolumeTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

*Defined in [api.ts:9748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9748)*

Returns an array of VolumeType objects

*__summary__*: List VolumeTypes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

___
<a id="listvolumes"></a>

###  listVolumes

▸ **listVolumes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:9762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9762)*

Returns an array of Volume objects

*__summary__*: List Volumes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="orderserviceplan"></a>

###  orderServicePlan

▸ **orderServicePlan**(id: *`string`*, orderParameters: *[OrderParameters](../interfaces/orderparameters.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:9775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9775)*

Returns a Task id

*__summary__*: Order an existing ServicePlan

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| orderParameters | [OrderParameters](../interfaces/orderparameters.md) |  Order parameters defining the service and provider control |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="postgraphql"></a>

###  postGraphQL

▸ **postGraphQL**(inlineObject: *[InlineObject](../interfaces/inlineobject.md)*, options?: *`any`*): `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

*Defined in [api.ts:9787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9787)*

Performs a GraphQL Query

*__summary__*: Perform a GraphQL Query

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inlineObject | [InlineObject](../interfaces/inlineobject.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

___
<a id="showcontainer"></a>

###  showContainer

▸ **showContainer**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Container](../interfaces/container.md)>

*Defined in [api.ts:9799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9799)*

Returns a Container object

*__summary__*: Show an existing Container

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Container](../interfaces/container.md)>

___
<a id="showcontainergroup"></a>

###  showContainerGroup

▸ **showContainerGroup**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerGroup](../interfaces/containergroup.md)>

*Defined in [api.ts:9811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9811)*

Returns a ContainerGroup object

*__summary__*: Show an existing ContainerGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroup](../interfaces/containergroup.md)>

___
<a id="showcontainerimage"></a>

###  showContainerImage

▸ **showContainerImage**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerImage](../interfaces/containerimage.md)>

*Defined in [api.ts:9823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9823)*

Returns a ContainerImage object

*__summary__*: Show an existing ContainerImage

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImage](../interfaces/containerimage.md)>

___
<a id="showcontainernode"></a>

###  showContainerNode

▸ **showContainerNode**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerNode](../interfaces/containernode.md)>

*Defined in [api.ts:9835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9835)*

Returns a ContainerNode object

*__summary__*: Show an existing ContainerNode

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNode](../interfaces/containernode.md)>

___
<a id="showcontainerproject"></a>

###  showContainerProject

▸ **showContainerProject**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerProject](../interfaces/containerproject.md)>

*Defined in [api.ts:9847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9847)*

Returns a ContainerProject object

*__summary__*: Show an existing ContainerProject

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProject](../interfaces/containerproject.md)>

___
<a id="showcontainerresourcequota"></a>

###  showContainerResourceQuota

▸ **showContainerResourceQuota**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerResourceQuota](../interfaces/containerresourcequota.md)>

*Defined in [api.ts:9859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9859)*

Returns a ContainerResourceQuota object

*__summary__*: Show an existing ContainerResourceQuota

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerResourceQuota](../interfaces/containerresourcequota.md)>

___
<a id="showcontainertemplate"></a>

###  showContainerTemplate

▸ **showContainerTemplate**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplate](../interfaces/containertemplate.md)>

*Defined in [api.ts:9871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9871)*

Returns a ContainerTemplate object

*__summary__*: Show an existing ContainerTemplate

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplate](../interfaces/containertemplate.md)>

___
<a id="showflavor"></a>

###  showFlavor

▸ **showFlavor**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Flavor](../interfaces/flavor.md)>

*Defined in [api.ts:9883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9883)*

Returns a Flavor object

*__summary__*: Show an existing Flavor

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Flavor](../interfaces/flavor.md)>

___
<a id="showorchestrationstack"></a>

###  showOrchestrationStack

▸ **showOrchestrationStack**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStack](../interfaces/orchestrationstack.md)>

*Defined in [api.ts:9895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9895)*

Returns a OrchestrationStack object

*__summary__*: Show an existing OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStack](../interfaces/orchestrationstack.md)>

___
<a id="showserviceinstance"></a>

###  showServiceInstance

▸ **showServiceInstance**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceInstance](../interfaces/serviceinstance.md)>

*Defined in [api.ts:9907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9907)*

Returns a ServiceInstance object

*__summary__*: Show an existing ServiceInstance

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstance](../interfaces/serviceinstance.md)>

___
<a id="showserviceoffering"></a>

###  showServiceOffering

▸ **showServiceOffering**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceOffering](../interfaces/serviceoffering.md)>

*Defined in [api.ts:9919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9919)*

Returns a ServiceOffering object

*__summary__*: Show an existing ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOffering](../interfaces/serviceoffering.md)>

___
<a id="showserviceofferingicon"></a>

###  showServiceOfferingIcon

▸ **showServiceOfferingIcon**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)>

*Defined in [api.ts:9931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9931)*

Returns a ServiceOfferingIcon object

*__summary__*: Show an existing ServiceOfferingIcon

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)>

___
<a id="showserviceofferingiconicondata"></a>

###  showServiceOfferingIconIconData

▸ **showServiceOfferingIconIconData**(id: *`string`*, options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:9943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9943)*

Returns a ServiceOfferingIcon IconData

*__summary__*: Show an existing ServiceOfferingIcon IconData

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="showserviceplan"></a>

###  showServicePlan

▸ **showServicePlan**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

*Defined in [api.ts:9955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9955)*

Returns a ServicePlan object

*__summary__*: Show an existing ServicePlan

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

___
<a id="showsource"></a>

###  showSource

▸ **showSource**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Source](../interfaces/source.md)>

*Defined in [api.ts:9967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9967)*

Returns a Source object

*__summary__*: Show an existing Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Source](../interfaces/source.md)>

___
<a id="showtag"></a>

###  showTag

▸ **showTag**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Tag](../interfaces/tag.md)>

*Defined in [api.ts:9979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9979)*

Returns a Tag object

*__summary__*: Show an existing Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Tag](../interfaces/tag.md)>

___
<a id="showtask"></a>

###  showTask

▸ **showTask**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Task](../interfaces/task.md)>

*Defined in [api.ts:9991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9991)*

Returns a Task object

*__summary__*: Show an existing Task

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Task](../interfaces/task.md)>

___
<a id="showvm"></a>

###  showVm

▸ **showVm**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Vm](../interfaces/vm.md)>

*Defined in [api.ts:10003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10003)*

Returns a Vm object

*__summary__*: Show an existing Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Vm](../interfaces/vm.md)>

___
<a id="showvolume"></a>

###  showVolume

▸ **showVolume**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Volume](../interfaces/volume.md)>

*Defined in [api.ts:10015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10015)*

Returns a Volume object

*__summary__*: Show an existing Volume

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Volume](../interfaces/volume.md)>

___
<a id="showvolumeattachment"></a>

###  showVolumeAttachment

▸ **showVolumeAttachment**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[VolumeAttachment](../interfaces/volumeattachment.md)>

*Defined in [api.ts:10027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10027)*

Returns a VolumeAttachment object

*__summary__*: Show an existing VolumeAttachment

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeAttachment](../interfaces/volumeattachment.md)>

___
<a id="showvolumetype"></a>

###  showVolumeType

▸ **showVolumeType**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[VolumeType](../interfaces/volumetype.md)>

*Defined in [api.ts:10039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10039)*

Returns a VolumeType object

*__summary__*: Show an existing VolumeType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeType](../interfaces/volumetype.md)>

___
<a id="updatetask"></a>

###  updateTask

▸ **updateTask**(id: *`string`*, task: *[Task](../interfaces/task.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:10052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10052)*

Updates a Task object

*__summary__*: Update an existing Task

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| task | [Task](../interfaces/task.md) |  Task attributes to update |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___

