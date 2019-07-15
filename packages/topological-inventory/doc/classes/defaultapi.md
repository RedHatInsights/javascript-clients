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
* [listClusterHosts](defaultapi.md#listclusterhosts)
* [listClusters](defaultapi.md#listclusters)
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
* [listDatastores](defaultapi.md#listdatastores)
* [listFlavors](defaultapi.md#listflavors)
* [listHosts](defaultapi.md#listhosts)
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
* [showCluster](defaultapi.md#showcluster)
* [showContainer](defaultapi.md#showcontainer)
* [showContainerGroup](defaultapi.md#showcontainergroup)
* [showContainerImage](defaultapi.md#showcontainerimage)
* [showContainerNode](defaultapi.md#showcontainernode)
* [showContainerProject](defaultapi.md#showcontainerproject)
* [showContainerResourceQuota](defaultapi.md#showcontainerresourcequota)
* [showContainerTemplate](defaultapi.md#showcontainertemplate)
* [showDatastore](defaultapi.md#showdatastore)
* [showFlavor](defaultapi.md#showflavor)
* [showHost](defaultapi.md#showhost)
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

*Defined in [api.ts:9791](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9791)*

*__summary__*: Return this API document in JSON format

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="listclusterhosts"></a>

###  listClusterHosts

▸ **listClusterHosts**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:9806](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9806)*

Returns an array of Host objects

*__summary__*: List Hosts for Cluster

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

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listclusters"></a>

###  listClusters

▸ **listClusters**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

*Defined in [api.ts:9820](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9820)*

Returns an array of Cluster objects

*__summary__*: List Clusters

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

___
<a id="listcontainergroupcontainers"></a>

###  listContainerGroupContainers

▸ **listContainerGroupContainers**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:9835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9835)*

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

*Defined in [api.ts:9850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9850)*

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

*Defined in [api.ts:9864](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9864)*

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

*Defined in [api.ts:9879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9879)*

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

*Defined in [api.ts:9893](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9893)*

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

*Defined in [api.ts:9908](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9908)*

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

*Defined in [api.ts:9923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9923)*

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

*Defined in [api.ts:9937](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9937)*

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

*Defined in [api.ts:9952](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9952)*

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

*Defined in [api.ts:9967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9967)*

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

*Defined in [api.ts:9982](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9982)*

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

*Defined in [api.ts:9997](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L9997)*

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

*Defined in [api.ts:10011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10011)*

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

*Defined in [api.ts:10025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10025)*

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

*Defined in [api.ts:10040](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10040)*

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

*Defined in [api.ts:10054](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10054)*

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

*Defined in [api.ts:10068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10068)*

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
<a id="listdatastores"></a>

###  listDatastores

▸ **listDatastores**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

*Defined in [api.ts:10082](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10082)*

Returns an array of Datastore objects

*__summary__*: List Datastores

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

___
<a id="listflavors"></a>

###  listFlavors

▸ **listFlavors**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[FlavorsCollection](../interfaces/flavorscollection.md)>

*Defined in [api.ts:10096](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10096)*

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
<a id="listhosts"></a>

###  listHosts

▸ **listHosts**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:10110](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10110)*

Returns an array of Host objects

*__summary__*: List Hosts

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listorchestrationstacks"></a>

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:10124](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10124)*

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

*Defined in [api.ts:10138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10138)*

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

*Defined in [api.ts:10152](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10152)*

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

*Defined in [api.ts:10167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10167)*

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

*Defined in [api.ts:10182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10182)*

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

*Defined in [api.ts:10197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10197)*

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

*Defined in [api.ts:10211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10211)*

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

*Defined in [api.ts:10226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10226)*

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

*Defined in [api.ts:10240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10240)*

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

*Defined in [api.ts:10255](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10255)*

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

*Defined in [api.ts:10270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10270)*

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

*Defined in [api.ts:10285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10285)*

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

*Defined in [api.ts:10300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10300)*

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

*Defined in [api.ts:10315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10315)*

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

*Defined in [api.ts:10330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10330)*

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

*Defined in [api.ts:10345](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10345)*

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

*Defined in [api.ts:10360](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10360)*

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

*Defined in [api.ts:10375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10375)*

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

*Defined in [api.ts:10390](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10390)*

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

*Defined in [api.ts:10405](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10405)*

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

*Defined in [api.ts:10420](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10420)*

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

*Defined in [api.ts:10435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10435)*

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

*Defined in [api.ts:10450](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10450)*

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

*Defined in [api.ts:10464](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10464)*

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

*Defined in [api.ts:10479](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10479)*

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

*Defined in [api.ts:10494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10494)*

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

*Defined in [api.ts:10509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10509)*

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

*Defined in [api.ts:10524](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10524)*

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

*Defined in [api.ts:10539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10539)*

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

*Defined in [api.ts:10554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10554)*

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

*Defined in [api.ts:10569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10569)*

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

*Defined in [api.ts:10583](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10583)*

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

*Defined in [api.ts:10597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10597)*

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

*Defined in [api.ts:10612](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10612)*

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

*Defined in [api.ts:10627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10627)*

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

*Defined in [api.ts:10642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10642)*

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

*Defined in [api.ts:10656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10656)*

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

*Defined in [api.ts:10670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10670)*

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

*Defined in [api.ts:10684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10684)*

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

*Defined in [api.ts:10698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10698)*

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

*Defined in [api.ts:10711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10711)*

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

*Defined in [api.ts:10723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10723)*

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
<a id="showcluster"></a>

###  showCluster

▸ **showCluster**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Cluster](../interfaces/cluster.md)>

*Defined in [api.ts:10735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10735)*

Returns a Cluster object

*__summary__*: Show an existing Cluster

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Cluster](../interfaces/cluster.md)>

___
<a id="showcontainer"></a>

###  showContainer

▸ **showContainer**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Container](../interfaces/container.md)>

*Defined in [api.ts:10747](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10747)*

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

*Defined in [api.ts:10759](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10759)*

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

*Defined in [api.ts:10771](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10771)*

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

*Defined in [api.ts:10783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10783)*

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

*Defined in [api.ts:10795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10795)*

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

*Defined in [api.ts:10807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10807)*

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

*Defined in [api.ts:10819](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10819)*

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
<a id="showdatastore"></a>

###  showDatastore

▸ **showDatastore**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Datastore](../interfaces/datastore.md)>

*Defined in [api.ts:10831](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10831)*

Returns a Datastore object

*__summary__*: Show an existing Datastore

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Datastore](../interfaces/datastore.md)>

___
<a id="showflavor"></a>

###  showFlavor

▸ **showFlavor**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Flavor](../interfaces/flavor.md)>

*Defined in [api.ts:10843](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10843)*

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
<a id="showhost"></a>

###  showHost

▸ **showHost**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Host](../interfaces/host.md)>

*Defined in [api.ts:10855](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10855)*

Returns a Host object

*__summary__*: Show an existing Host

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Host](../interfaces/host.md)>

___
<a id="showorchestrationstack"></a>

###  showOrchestrationStack

▸ **showOrchestrationStack**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStack](../interfaces/orchestrationstack.md)>

*Defined in [api.ts:10867](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10867)*

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

*Defined in [api.ts:10879](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10879)*

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

*Defined in [api.ts:10891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10891)*

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

*Defined in [api.ts:10903](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10903)*

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

*Defined in [api.ts:10915](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10915)*

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

*Defined in [api.ts:10927](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10927)*

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

*Defined in [api.ts:10939](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10939)*

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

*Defined in [api.ts:10951](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10951)*

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

*Defined in [api.ts:10963](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10963)*

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

*Defined in [api.ts:10975](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10975)*

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

*Defined in [api.ts:10987](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10987)*

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

*Defined in [api.ts:10999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L10999)*

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

*Defined in [api.ts:11011](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L11011)*

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

*Defined in [api.ts:11024](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L11024)*

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

