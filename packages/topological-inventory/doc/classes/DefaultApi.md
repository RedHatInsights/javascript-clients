[@redhat-cloud-services/topological-inventory-client](../README.md) / [Exports](../modules.md) / DefaultApi

# Class: DefaultApi

DefaultApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`DefaultApi`**

## Table of contents

### Constructors

- [constructor](DefaultApi.md#constructor)

### Properties

- [axios](DefaultApi.md#axios)
- [basePath](DefaultApi.md#basepath)
- [configuration](DefaultApi.md#configuration)

### Methods

- [appliedInventoriesForServiceOffering](DefaultApi.md#appliedinventoriesforserviceoffering)
- [getDocumentation](DefaultApi.md#getdocumentation)
- [listClusterHosts](DefaultApi.md#listclusterhosts)
- [listClusters](DefaultApi.md#listclusters)
- [listContainerGroupContainers](DefaultApi.md#listcontainergroupcontainers)
- [listContainerGroupTags](DefaultApi.md#listcontainergrouptags)
- [listContainerGroups](DefaultApi.md#listcontainergroups)
- [listContainerImageTags](DefaultApi.md#listcontainerimagetags)
- [listContainerImages](DefaultApi.md#listcontainerimages)
- [listContainerNodeContainerGroups](DefaultApi.md#listcontainernodecontainergroups)
- [listContainerNodeTags](DefaultApi.md#listcontainernodetags)
- [listContainerNodes](DefaultApi.md#listcontainernodes)
- [listContainerProjectContainerGroups](DefaultApi.md#listcontainerprojectcontainergroups)
- [listContainerProjectContainerResourceQuota](DefaultApi.md#listcontainerprojectcontainerresourcequota)
- [listContainerProjectContainerTemplates](DefaultApi.md#listcontainerprojectcontainertemplates)
- [listContainerProjectTags](DefaultApi.md#listcontainerprojecttags)
- [listContainerProjects](DefaultApi.md#listcontainerprojects)
- [listContainerResourceQuota](DefaultApi.md#listcontainerresourcequota)
- [listContainerTemplateTags](DefaultApi.md#listcontainertemplatetags)
- [listContainerTemplates](DefaultApi.md#listcontainertemplates)
- [listContainers](DefaultApi.md#listcontainers)
- [listDatastores](DefaultApi.md#listdatastores)
- [listFlavors](DefaultApi.md#listflavors)
- [listHosts](DefaultApi.md#listhosts)
- [listIpaddressTags](DefaultApi.md#listipaddresstags)
- [listIpaddresses](DefaultApi.md#listipaddresses)
- [listNetworkAdapterIpaddresses](DefaultApi.md#listnetworkadapteripaddresses)
- [listNetworkAdapterTags](DefaultApi.md#listnetworkadaptertags)
- [listNetworkAdapters](DefaultApi.md#listnetworkadapters)
- [listNetworkSubnets](DefaultApi.md#listnetworksubnets)
- [listNetworkTags](DefaultApi.md#listnetworktags)
- [listNetworks](DefaultApi.md#listnetworks)
- [listOrchestrationStackIpaddresses](DefaultApi.md#listorchestrationstackipaddresses)
- [listOrchestrationStackNetworkAdapters](DefaultApi.md#listorchestrationstacknetworkadapters)
- [listOrchestrationStackNetworks](DefaultApi.md#listorchestrationstacknetworks)
- [listOrchestrationStackSecurityGroups](DefaultApi.md#listorchestrationstacksecuritygroups)
- [listOrchestrationStackSubnets](DefaultApi.md#listorchestrationstacksubnets)
- [listOrchestrationStackVms](DefaultApi.md#listorchestrationstackvms)
- [listOrchestrationStackVolumes](DefaultApi.md#listorchestrationstackvolumes)
- [listOrchestrationStacks](DefaultApi.md#listorchestrationstacks)
- [listSecurityGroupTags](DefaultApi.md#listsecuritygrouptags)
- [listSecurityGroupVms](DefaultApi.md#listsecuritygroupvms)
- [listSecurityGroups](DefaultApi.md#listsecuritygroups)
- [listServiceInstanceNodes](DefaultApi.md#listserviceinstancenodes)
- [listServiceInstanceServiceInstanceNodes](DefaultApi.md#listserviceinstanceserviceinstancenodes)
- [listServiceInstances](DefaultApi.md#listserviceinstances)
- [listServiceInventories](DefaultApi.md#listserviceinventories)
- [listServiceInventoryTags](DefaultApi.md#listserviceinventorytags)
- [listServiceOfferingIcons](DefaultApi.md#listserviceofferingicons)
- [listServiceOfferingNodes](DefaultApi.md#listserviceofferingnodes)
- [listServiceOfferingServiceInstances](DefaultApi.md#listserviceofferingserviceinstances)
- [listServiceOfferingServiceOfferingNodes](DefaultApi.md#listserviceofferingserviceofferingnodes)
- [listServiceOfferingServicePlans](DefaultApi.md#listserviceofferingserviceplans)
- [listServiceOfferingTags](DefaultApi.md#listserviceofferingtags)
- [listServiceOfferings](DefaultApi.md#listserviceofferings)
- [listServicePlanServiceInstances](DefaultApi.md#listserviceplanserviceinstances)
- [listServicePlans](DefaultApi.md#listserviceplans)
- [listSourceAvailabilities](DefaultApi.md#listsourceavailabilities)
- [listSourceClusters](DefaultApi.md#listsourceclusters)
- [listSourceContainerGroups](DefaultApi.md#listsourcecontainergroups)
- [listSourceContainerImages](DefaultApi.md#listsourcecontainerimages)
- [listSourceContainerNodes](DefaultApi.md#listsourcecontainernodes)
- [listSourceContainerProjects](DefaultApi.md#listsourcecontainerprojects)
- [listSourceContainerTemplates](DefaultApi.md#listsourcecontainertemplates)
- [listSourceContainers](DefaultApi.md#listsourcecontainers)
- [listSourceDatastores](DefaultApi.md#listsourcedatastores)
- [listSourceHosts](DefaultApi.md#listsourcehosts)
- [listSourceIpaddresses](DefaultApi.md#listsourceipaddresses)
- [listSourceNetworkAdapters](DefaultApi.md#listsourcenetworkadapters)
- [listSourceNetworks](DefaultApi.md#listsourcenetworks)
- [listSourceOrchestrationStacks](DefaultApi.md#listsourceorchestrationstacks)
- [listSourceRegionIpaddresses](DefaultApi.md#listsourceregionipaddresses)
- [listSourceRegionNetworkAdapters](DefaultApi.md#listsourceregionnetworkadapters)
- [listSourceRegionNetworks](DefaultApi.md#listsourceregionnetworks)
- [listSourceRegionOrchestrationStacks](DefaultApi.md#listsourceregionorchestrationstacks)
- [listSourceRegionSecurityGroups](DefaultApi.md#listsourceregionsecuritygroups)
- [listSourceRegionServiceInstances](DefaultApi.md#listsourceregionserviceinstances)
- [listSourceRegionServiceOfferings](DefaultApi.md#listsourceregionserviceofferings)
- [listSourceRegionServicePlans](DefaultApi.md#listsourceregionserviceplans)
- [listSourceRegionSubnets](DefaultApi.md#listsourceregionsubnets)
- [listSourceRegionVms](DefaultApi.md#listsourceregionvms)
- [listSourceRegionVolumes](DefaultApi.md#listsourceregionvolumes)
- [listSourceRegions](DefaultApi.md#listsourceregions)
- [listSourceSecurityGroups](DefaultApi.md#listsourcesecuritygroups)
- [listSourceServiceInstanceNodes](DefaultApi.md#listsourceserviceinstancenodes)
- [listSourceServiceInstances](DefaultApi.md#listsourceserviceinstances)
- [listSourceServiceInventories](DefaultApi.md#listsourceserviceinventories)
- [listSourceServiceOfferingNodes](DefaultApi.md#listsourceserviceofferingnodes)
- [listSourceServiceOfferings](DefaultApi.md#listsourceserviceofferings)
- [listSourceServicePlans](DefaultApi.md#listsourceserviceplans)
- [listSourceSourceRegions](DefaultApi.md#listsourcesourceregions)
- [listSourceSubnets](DefaultApi.md#listsourcesubnets)
- [listSourceSubscriptions](DefaultApi.md#listsourcesubscriptions)
- [listSourceVms](DefaultApi.md#listsourcevms)
- [listSourceVolumeTypes](DefaultApi.md#listsourcevolumetypes)
- [listSourceVolumes](DefaultApi.md#listsourcevolumes)
- [listSources](DefaultApi.md#listsources)
- [listSubnetIpaddresses](DefaultApi.md#listsubnetipaddresses)
- [listSubnetNetworkAdapters](DefaultApi.md#listsubnetnetworkadapters)
- [listSubnetTags](DefaultApi.md#listsubnettags)
- [listSubnets](DefaultApi.md#listsubnets)
- [listSubscriptionIpaddresses](DefaultApi.md#listsubscriptionipaddresses)
- [listSubscriptionNetworkAdapters](DefaultApi.md#listsubscriptionnetworkadapters)
- [listSubscriptionNetworks](DefaultApi.md#listsubscriptionnetworks)
- [listSubscriptionOrchestrationStacks](DefaultApi.md#listsubscriptionorchestrationstacks)
- [listSubscriptionSecurityGroups](DefaultApi.md#listsubscriptionsecuritygroups)
- [listSubscriptionServiceInstances](DefaultApi.md#listsubscriptionserviceinstances)
- [listSubscriptionServiceOfferings](DefaultApi.md#listsubscriptionserviceofferings)
- [listSubscriptionServicePlans](DefaultApi.md#listsubscriptionserviceplans)
- [listSubscriptionSubnets](DefaultApi.md#listsubscriptionsubnets)
- [listSubscriptionVms](DefaultApi.md#listsubscriptionvms)
- [listSubscriptionVolumes](DefaultApi.md#listsubscriptionvolumes)
- [listSubscriptions](DefaultApi.md#listsubscriptions)
- [listTagContainerGroups](DefaultApi.md#listtagcontainergroups)
- [listTagContainerImages](DefaultApi.md#listtagcontainerimages)
- [listTagContainerNodes](DefaultApi.md#listtagcontainernodes)
- [listTagContainerProjects](DefaultApi.md#listtagcontainerprojects)
- [listTagContainerTemplates](DefaultApi.md#listtagcontainertemplates)
- [listTagIpaddresses](DefaultApi.md#listtagipaddresses)
- [listTagNetworkAdapters](DefaultApi.md#listtagnetworkadapters)
- [listTagNetworks](DefaultApi.md#listtagnetworks)
- [listTagSecurityGroups](DefaultApi.md#listtagsecuritygroups)
- [listTagServiceInventories](DefaultApi.md#listtagserviceinventories)
- [listTagServiceOfferings](DefaultApi.md#listtagserviceofferings)
- [listTagSubnets](DefaultApi.md#listtagsubnets)
- [listTagVms](DefaultApi.md#listtagvms)
- [listTags](DefaultApi.md#listtags)
- [listTasks](DefaultApi.md#listtasks)
- [listVmNetworkAdapters](DefaultApi.md#listvmnetworkadapters)
- [listVmSecurityGroups](DefaultApi.md#listvmsecuritygroups)
- [listVmTags](DefaultApi.md#listvmtags)
- [listVmVolumeAttachments](DefaultApi.md#listvmvolumeattachments)
- [listVmVolumes](DefaultApi.md#listvmvolumes)
- [listVms](DefaultApi.md#listvms)
- [listVolumeAttachments](DefaultApi.md#listvolumeattachments)
- [listVolumeTypeVolumes](DefaultApi.md#listvolumetypevolumes)
- [listVolumeTypes](DefaultApi.md#listvolumetypes)
- [listVolumeVms](DefaultApi.md#listvolumevms)
- [listVolumes](DefaultApi.md#listvolumes)
- [orderServiceOffering](DefaultApi.md#orderserviceoffering)
- [orderServicePlan](DefaultApi.md#orderserviceplan)
- [postGraphQL](DefaultApi.md#postgraphql)
- [showCluster](DefaultApi.md#showcluster)
- [showContainer](DefaultApi.md#showcontainer)
- [showContainerGroup](DefaultApi.md#showcontainergroup)
- [showContainerImage](DefaultApi.md#showcontainerimage)
- [showContainerNode](DefaultApi.md#showcontainernode)
- [showContainerProject](DefaultApi.md#showcontainerproject)
- [showContainerResourceQuota](DefaultApi.md#showcontainerresourcequota)
- [showContainerTemplate](DefaultApi.md#showcontainertemplate)
- [showDatastore](DefaultApi.md#showdatastore)
- [showFlavor](DefaultApi.md#showflavor)
- [showHost](DefaultApi.md#showhost)
- [showIpaddress](DefaultApi.md#showipaddress)
- [showNetwork](DefaultApi.md#shownetwork)
- [showNetworkAdapter](DefaultApi.md#shownetworkadapter)
- [showOrchestrationStack](DefaultApi.md#showorchestrationstack)
- [showSecurityGroup](DefaultApi.md#showsecuritygroup)
- [showServiceInstance](DefaultApi.md#showserviceinstance)
- [showServiceInstanceNode](DefaultApi.md#showserviceinstancenode)
- [showServiceInventory](DefaultApi.md#showserviceinventory)
- [showServiceOffering](DefaultApi.md#showserviceoffering)
- [showServiceOfferingIcon](DefaultApi.md#showserviceofferingicon)
- [showServiceOfferingIconIconData](DefaultApi.md#showserviceofferingiconicondata)
- [showServiceOfferingNode](DefaultApi.md#showserviceofferingnode)
- [showServicePlan](DefaultApi.md#showserviceplan)
- [showSource](DefaultApi.md#showsource)
- [showSourceRegion](DefaultApi.md#showsourceregion)
- [showSubnet](DefaultApi.md#showsubnet)
- [showSubscription](DefaultApi.md#showsubscription)
- [showTag](DefaultApi.md#showtag)
- [showTask](DefaultApi.md#showtask)
- [showVm](DefaultApi.md#showvm)
- [showVolume](DefaultApi.md#showvolume)
- [showVolumeAttachment](DefaultApi.md#showvolumeattachment)
- [showVolumeType](DefaultApi.md#showvolumetype)
- [updateTask](DefaultApi.md#updatetask)

## Constructors

### constructor

• **new DefaultApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L49)

## Methods

### appliedInventoriesForServiceOffering

▸ **appliedInventoriesForServiceOffering**(`id`, `appliedInventoriesParametersServicePlan`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

Returns a Task id

**`Summary`**

Invokes computing of ServiceInventories for given ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `appliedInventoriesParametersServicePlan` | [`AppliedInventoriesParametersServicePlan`](../interfaces/AppliedInventoriesParametersServicePlan.md) | Parameters defining input data for computing inventories |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

#### Defined in

[api.ts:19471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19471)

___

### getDocumentation

▸ **getDocumentation**(`options?`): `Promise`<`AxiosResponse`<`object`, `any`\>\>

**`Summary`**

Return this API document in JSON format

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`, `any`\>\>

#### Defined in

[api.ts:19482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19482)

___

### listClusterHosts

▸ **listClusterHosts**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

Returns an array of Host objects

**`Summary`**

List Hosts for Cluster

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

#### Defined in

[api.ts:19498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19498)

___

### listClusters

▸ **listClusters**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ClustersCollection`](../interfaces/ClustersCollection.md), `any`\>\>

Returns an array of Cluster objects

**`Summary`**

List Clusters

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ClustersCollection`](../interfaces/ClustersCollection.md), `any`\>\>

#### Defined in

[api.ts:19513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19513)

___

### listContainerGroupContainers

▸ **listContainerGroupContainers**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

Returns an array of Container objects

**`Summary`**

List Containers for ContainerGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

#### Defined in

[api.ts:19529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19529)

___

### listContainerGroupTags

▸ **listContainerGroupTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ContainerGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19545)

___

### listContainerGroups

▸ **listContainerGroups**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

Returns an array of ContainerGroup objects

**`Summary`**

List ContainerGroups

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:19560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19560)

___

### listContainerImageTags

▸ **listContainerImageTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ContainerImage

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19576)

___

### listContainerImages

▸ **listContainerImages**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

Returns an array of ContainerImage objects

**`Summary`**

List ContainerImages

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

#### Defined in

[api.ts:19591](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19591)

___

### listContainerNodeContainerGroups

▸ **listContainerNodeContainerGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

Returns an array of ContainerGroup objects

**`Summary`**

List ContainerGroups for ContainerNode

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:19607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19607)

___

### listContainerNodeTags

▸ **listContainerNodeTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ContainerNode

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19623](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19623)

___

### listContainerNodes

▸ **listContainerNodes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

Returns an array of ContainerNode objects

**`Summary`**

List ContainerNodes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:19638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19638)

___

### listContainerProjectContainerGroups

▸ **listContainerProjectContainerGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

Returns an array of ContainerGroup objects

**`Summary`**

List ContainerGroups for ContainerProject

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:19654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19654)

___

### listContainerProjectContainerResourceQuota

▸ **listContainerProjectContainerResourceQuota**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerResourceQuotaCollection`](../interfaces/ContainerResourceQuotaCollection.md), `any`\>\>

Returns an array of ContainerResourceQuota objects

**`Summary`**

List ContainerResourceQuota for ContainerProject

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerResourceQuotaCollection`](../interfaces/ContainerResourceQuotaCollection.md), `any`\>\>

#### Defined in

[api.ts:19670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19670)

___

### listContainerProjectContainerTemplates

▸ **listContainerProjectContainerTemplates**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

Returns an array of ContainerTemplate objects

**`Summary`**

List ContainerTemplates for ContainerProject

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

#### Defined in

[api.ts:19686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19686)

___

### listContainerProjectTags

▸ **listContainerProjectTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ContainerProject

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19702)

___

### listContainerProjects

▸ **listContainerProjects**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

Returns an array of ContainerProject objects

**`Summary`**

List ContainerProjects

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

#### Defined in

[api.ts:19717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19717)

___

### listContainerResourceQuota

▸ **listContainerResourceQuota**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerResourceQuotaCollection`](../interfaces/ContainerResourceQuotaCollection.md), `any`\>\>

Returns an array of ContainerResourceQuota objects

**`Summary`**

List ContainerResourceQuota

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerResourceQuotaCollection`](../interfaces/ContainerResourceQuotaCollection.md), `any`\>\>

#### Defined in

[api.ts:19732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19732)

___

### listContainerTemplateTags

▸ **listContainerTemplateTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ContainerTemplate

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19748)

___

### listContainerTemplates

▸ **listContainerTemplates**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

Returns an array of ContainerTemplate objects

**`Summary`**

List ContainerTemplates

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

#### Defined in

[api.ts:19763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19763)

___

### listContainers

▸ **listContainers**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

Returns an array of Container objects

**`Summary`**

List Containers

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

#### Defined in

[api.ts:19778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19778)

___

### listDatastores

▸ **listDatastores**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`DatastoresCollection`](../interfaces/DatastoresCollection.md), `any`\>\>

Returns an array of Datastore objects

**`Summary`**

List Datastores

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`DatastoresCollection`](../interfaces/DatastoresCollection.md), `any`\>\>

#### Defined in

[api.ts:19793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19793)

___

### listFlavors

▸ **listFlavors**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`FlavorsCollection`](../interfaces/FlavorsCollection.md), `any`\>\>

Returns an array of Flavor objects

**`Summary`**

List Flavors

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`FlavorsCollection`](../interfaces/FlavorsCollection.md), `any`\>\>

#### Defined in

[api.ts:19808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19808)

___

### listHosts

▸ **listHosts**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

Returns an array of Host objects

**`Summary`**

List Hosts

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

#### Defined in

[api.ts:19823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19823)

___

### listIpaddressTags

▸ **listIpaddressTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Ipaddress

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19839)

___

### listIpaddresses

▸ **listIpaddresses**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:19854](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19854)

___

### listNetworkAdapterIpaddresses

▸ **listNetworkAdapterIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for NetworkAdapter

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:19870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19870)

___

### listNetworkAdapterTags

▸ **listNetworkAdapterTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for NetworkAdapter

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19886)

___

### listNetworkAdapters

▸ **listNetworkAdapters**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:19901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19901)

___

### listNetworkSubnets

▸ **listNetworkSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for Network

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:19917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19917)

___

### listNetworkTags

▸ **listNetworkTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Network

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:19933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19933)

___

### listNetworks

▸ **listNetworks**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:19948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19948)

___

### listOrchestrationStackIpaddresses

▸ **listOrchestrationStackIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:19964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19964)

___

### listOrchestrationStackNetworkAdapters

▸ **listOrchestrationStackNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:19980](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19980)

___

### listOrchestrationStackNetworks

▸ **listOrchestrationStackNetworks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:19996](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19996)

___

### listOrchestrationStackSecurityGroups

▸ **listOrchestrationStackSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:20012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20012)

___

### listOrchestrationStackSubnets

▸ **listOrchestrationStackSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:20028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20028)

___

### listOrchestrationStackVms

▸ **listOrchestrationStackVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:20044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20044)

___

### listOrchestrationStackVolumes

▸ **listOrchestrationStackVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:20060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20060)

___

### listOrchestrationStacks

▸ **listOrchestrationStacks**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

Returns an array of OrchestrationStack objects

**`Summary`**

List OrchestrationStacks

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

#### Defined in

[api.ts:20075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20075)

___

### listSecurityGroupTags

▸ **listSecurityGroupTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for SecurityGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:20091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20091)

___

### listSecurityGroupVms

▸ **listSecurityGroupVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for SecurityGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:20107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20107)

___

### listSecurityGroups

▸ **listSecurityGroups**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:20122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20122)

___

### listServiceInstanceNodes

▸ **listServiceInstanceNodes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

Returns an array of ServiceInstanceNode objects

**`Summary`**

List ServiceInstanceNodes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20137)

___

### listServiceInstanceServiceInstanceNodes

▸ **listServiceInstanceServiceInstanceNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

Returns an array of ServiceInstanceNode objects

**`Summary`**

List ServiceInstanceNodes for ServiceInstance

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20153](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20153)

___

### listServiceInstances

▸ **listServiceInstances**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:20168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20168)

___

### listServiceInventories

▸ **listServiceInventories**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

Returns an array of ServiceInventory objects

**`Summary`**

List ServiceInventories

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

#### Defined in

[api.ts:20183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20183)

___

### listServiceInventoryTags

▸ **listServiceInventoryTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ServiceInventory

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:20199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20199)

___

### listServiceOfferingIcons

▸ **listServiceOfferingIcons**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingIconsCollection`](../interfaces/ServiceOfferingIconsCollection.md), `any`\>\>

Returns an array of ServiceOfferingIcon objects

**`Summary`**

List ServiceOfferingIcons

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingIconsCollection`](../interfaces/ServiceOfferingIconsCollection.md), `any`\>\>

#### Defined in

[api.ts:20214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20214)

___

### listServiceOfferingNodes

▸ **listServiceOfferingNodes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

Returns an array of ServiceOfferingNode objects

**`Summary`**

List ServiceOfferingNodes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20229)

___

### listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances for ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:20245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20245)

___

### listServiceOfferingServiceOfferingNodes

▸ **listServiceOfferingServiceOfferingNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

Returns an array of ServiceOfferingNode objects

**`Summary`**

List ServiceOfferingNodes for ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20261)

___

### listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

Returns an array of ServicePlan objects

**`Summary`**

List ServicePlans for ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

#### Defined in

[api.ts:20277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20277)

___

### listServiceOfferingTags

▸ **listServiceOfferingTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:20293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20293)

___

### listServiceOfferings

▸ **listServiceOfferings**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

Returns an array of ServiceOffering objects

**`Summary`**

List ServiceOfferings

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

#### Defined in

[api.ts:20308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20308)

___

### listServicePlanServiceInstances

▸ **listServicePlanServiceInstances**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances for ServicePlan

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:20324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20324)

___

### listServicePlans

▸ **listServicePlans**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

Returns an array of ServicePlan objects

**`Summary`**

List ServicePlans

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

#### Defined in

[api.ts:20339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20339)

___

### listSourceAvailabilities

▸ **listSourceAvailabilities**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`AvailabilitiesCollection`](../interfaces/AvailabilitiesCollection.md), `any`\>\>

Returns an array of Availability objects

**`Summary`**

List Availabilities for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`AvailabilitiesCollection`](../interfaces/AvailabilitiesCollection.md), `any`\>\>

#### Defined in

[api.ts:20355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20355)

___

### listSourceClusters

▸ **listSourceClusters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ClustersCollection`](../interfaces/ClustersCollection.md), `any`\>\>

Returns an array of Cluster objects

**`Summary`**

List Clusters for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ClustersCollection`](../interfaces/ClustersCollection.md), `any`\>\>

#### Defined in

[api.ts:20371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20371)

___

### listSourceContainerGroups

▸ **listSourceContainerGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

Returns an array of ContainerGroup objects

**`Summary`**

List ContainerGroups for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:20387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20387)

___

### listSourceContainerImages

▸ **listSourceContainerImages**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

Returns an array of ContainerImage objects

**`Summary`**

List ContainerImages for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

#### Defined in

[api.ts:20403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20403)

___

### listSourceContainerNodes

▸ **listSourceContainerNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

Returns an array of ContainerNode objects

**`Summary`**

List ContainerNodes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20419)

___

### listSourceContainerProjects

▸ **listSourceContainerProjects**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

Returns an array of ContainerProject objects

**`Summary`**

List ContainerProjects for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

#### Defined in

[api.ts:20435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20435)

___

### listSourceContainerTemplates

▸ **listSourceContainerTemplates**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

Returns an array of ContainerTemplate objects

**`Summary`**

List ContainerTemplates for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

#### Defined in

[api.ts:20451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20451)

___

### listSourceContainers

▸ **listSourceContainers**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

Returns an array of Container objects

**`Summary`**

List Containers for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainersCollection`](../interfaces/ContainersCollection.md), `any`\>\>

#### Defined in

[api.ts:20467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20467)

___

### listSourceDatastores

▸ **listSourceDatastores**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`DatastoresCollection`](../interfaces/DatastoresCollection.md), `any`\>\>

Returns an array of Datastore objects

**`Summary`**

List Datastores for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`DatastoresCollection`](../interfaces/DatastoresCollection.md), `any`\>\>

#### Defined in

[api.ts:20483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20483)

___

### listSourceHosts

▸ **listSourceHosts**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

Returns an array of Host objects

**`Summary`**

List Hosts for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostsCollection`](../interfaces/HostsCollection.md), `any`\>\>

#### Defined in

[api.ts:20499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20499)

___

### listSourceIpaddresses

▸ **listSourceIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:20515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20515)

___

### listSourceNetworkAdapters

▸ **listSourceNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:20531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20531)

___

### listSourceNetworks

▸ **listSourceNetworks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:20547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20547)

___

### listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

Returns an array of OrchestrationStack objects

**`Summary`**

List OrchestrationStacks for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

#### Defined in

[api.ts:20563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20563)

___

### listSourceRegionIpaddresses

▸ **listSourceRegionIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:20579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20579)

___

### listSourceRegionNetworkAdapters

▸ **listSourceRegionNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:20595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20595)

___

### listSourceRegionNetworks

▸ **listSourceRegionNetworks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:20611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20611)

___

### listSourceRegionOrchestrationStacks

▸ **listSourceRegionOrchestrationStacks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

Returns an array of OrchestrationStack objects

**`Summary`**

List OrchestrationStacks for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

#### Defined in

[api.ts:20627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20627)

___

### listSourceRegionSecurityGroups

▸ **listSourceRegionSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:20643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20643)

___

### listSourceRegionServiceInstances

▸ **listSourceRegionServiceInstances**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:20659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20659)

___

### listSourceRegionServiceOfferings

▸ **listSourceRegionServiceOfferings**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

Returns an array of ServiceOffering objects

**`Summary`**

List ServiceOfferings for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

#### Defined in

[api.ts:20675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20675)

___

### listSourceRegionServicePlans

▸ **listSourceRegionServicePlans**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

Returns an array of ServicePlan objects

**`Summary`**

List ServicePlans for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

#### Defined in

[api.ts:20691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20691)

___

### listSourceRegionSubnets

▸ **listSourceRegionSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:20707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20707)

___

### listSourceRegionVms

▸ **listSourceRegionVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:20723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20723)

___

### listSourceRegionVolumes

▸ **listSourceRegionVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:20739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20739)

___

### listSourceRegions

▸ **listSourceRegions**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourceRegionsCollection`](../interfaces/SourceRegionsCollection.md), `any`\>\>

Returns an array of SourceRegion objects

**`Summary`**

List SourceRegions

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourceRegionsCollection`](../interfaces/SourceRegionsCollection.md), `any`\>\>

#### Defined in

[api.ts:20754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20754)

___

### listSourceSecurityGroups

▸ **listSourceSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:20770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20770)

___

### listSourceServiceInstanceNodes

▸ **listSourceServiceInstanceNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

Returns an array of ServiceInstanceNode objects

**`Summary`**

List ServiceInstanceNodes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstanceNodesCollection`](../interfaces/ServiceInstanceNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20786)

___

### listSourceServiceInstances

▸ **listSourceServiceInstances**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:20802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20802)

___

### listSourceServiceInventories

▸ **listSourceServiceInventories**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

Returns an array of ServiceInventory objects

**`Summary`**

List ServiceInventories for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

#### Defined in

[api.ts:20818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20818)

___

### listSourceServiceOfferingNodes

▸ **listSourceServiceOfferingNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

Returns an array of ServiceOfferingNode objects

**`Summary`**

List ServiceOfferingNodes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingNodesCollection`](../interfaces/ServiceOfferingNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:20834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20834)

___

### listSourceServiceOfferings

▸ **listSourceServiceOfferings**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

Returns an array of ServiceOffering objects

**`Summary`**

List ServiceOfferings for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

#### Defined in

[api.ts:20850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20850)

___

### listSourceServicePlans

▸ **listSourceServicePlans**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

Returns an array of ServicePlan objects

**`Summary`**

List ServicePlans for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

#### Defined in

[api.ts:20866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20866)

___

### listSourceSourceRegions

▸ **listSourceSourceRegions**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourceRegionsCollection`](../interfaces/SourceRegionsCollection.md), `any`\>\>

Returns an array of SourceRegion objects

**`Summary`**

List SourceRegions for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourceRegionsCollection`](../interfaces/SourceRegionsCollection.md), `any`\>\>

#### Defined in

[api.ts:20882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20882)

___

### listSourceSubnets

▸ **listSourceSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:20898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20898)

___

### listSourceSubscriptions

▸ **listSourceSubscriptions**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubscriptionsCollection`](../interfaces/SubscriptionsCollection.md), `any`\>\>

Returns an array of Subscription objects

**`Summary`**

List Subscriptions for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubscriptionsCollection`](../interfaces/SubscriptionsCollection.md), `any`\>\>

#### Defined in

[api.ts:20914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20914)

___

### listSourceVms

▸ **listSourceVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:20930](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20930)

___

### listSourceVolumeTypes

▸ **listSourceVolumeTypes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumeTypesCollection`](../interfaces/VolumeTypesCollection.md), `any`\>\>

Returns an array of VolumeType objects

**`Summary`**

List VolumeTypes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeTypesCollection`](../interfaces/VolumeTypesCollection.md), `any`\>\>

#### Defined in

[api.ts:20946](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20946)

___

### listSourceVolumes

▸ **listSourceVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:20962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20962)

___

### listSources

▸ **listSources**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

Returns an array of Source objects

**`Summary`**

List Sources

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourcesCollection`](../interfaces/SourcesCollection.md), `any`\>\>

#### Defined in

[api.ts:20977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20977)

___

### listSubnetIpaddresses

▸ **listSubnetIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for Subnet

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:20993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20993)

___

### listSubnetNetworkAdapters

▸ **listSubnetNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for Subnet

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:21009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21009)

___

### listSubnetTags

▸ **listSubnetTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Subnet

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:21025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21025)

___

### listSubnets

▸ **listSubnets**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:21040](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21040)

___

### listSubscriptionIpaddresses

▸ **listSubscriptionIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:21056](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21056)

___

### listSubscriptionNetworkAdapters

▸ **listSubscriptionNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:21072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21072)

___

### listSubscriptionNetworks

▸ **listSubscriptionNetworks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:21088](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21088)

___

### listSubscriptionOrchestrationStacks

▸ **listSubscriptionOrchestrationStacks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

Returns an array of OrchestrationStack objects

**`Summary`**

List OrchestrationStacks for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrchestrationStacksCollection`](../interfaces/OrchestrationStacksCollection.md), `any`\>\>

#### Defined in

[api.ts:21104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21104)

___

### listSubscriptionSecurityGroups

▸ **listSubscriptionSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:21120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21120)

___

### listSubscriptionServiceInstances

▸ **listSubscriptionServiceInstances**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

Returns an array of ServiceInstance objects

**`Summary`**

List ServiceInstances for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstancesCollection`](../interfaces/ServiceInstancesCollection.md), `any`\>\>

#### Defined in

[api.ts:21136](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21136)

___

### listSubscriptionServiceOfferings

▸ **listSubscriptionServiceOfferings**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

Returns an array of ServiceOffering objects

**`Summary`**

List ServiceOfferings for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

#### Defined in

[api.ts:21152](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21152)

___

### listSubscriptionServicePlans

▸ **listSubscriptionServicePlans**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

Returns an array of ServicePlan objects

**`Summary`**

List ServicePlans for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlansCollection`](../interfaces/ServicePlansCollection.md), `any`\>\>

#### Defined in

[api.ts:21168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21168)

___

### listSubscriptionSubnets

▸ **listSubscriptionSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:21184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21184)

___

### listSubscriptionVms

▸ **listSubscriptionVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:21200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21200)

___

### listSubscriptionVolumes

▸ **listSubscriptionVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:21216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21216)

___

### listSubscriptions

▸ **listSubscriptions**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubscriptionsCollection`](../interfaces/SubscriptionsCollection.md), `any`\>\>

Returns an array of Subscription objects

**`Summary`**

List Subscriptions

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubscriptionsCollection`](../interfaces/SubscriptionsCollection.md), `any`\>\>

#### Defined in

[api.ts:21231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21231)

___

### listTagContainerGroups

▸ **listTagContainerGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

Returns an array of ContainerGroup objects

**`Summary`**

List ContainerGroups for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroupsCollection`](../interfaces/ContainerGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:21247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21247)

___

### listTagContainerImages

▸ **listTagContainerImages**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

Returns an array of ContainerImage objects

**`Summary`**

List ContainerImages for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerImagesCollection`](../interfaces/ContainerImagesCollection.md), `any`\>\>

#### Defined in

[api.ts:21263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21263)

___

### listTagContainerNodes

▸ **listTagContainerNodes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

Returns an array of ContainerNode objects

**`Summary`**

List ContainerNodes for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerNodesCollection`](../interfaces/ContainerNodesCollection.md), `any`\>\>

#### Defined in

[api.ts:21279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21279)

___

### listTagContainerProjects

▸ **listTagContainerProjects**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

Returns an array of ContainerProject objects

**`Summary`**

List ContainerProjects for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerProjectsCollection`](../interfaces/ContainerProjectsCollection.md), `any`\>\>

#### Defined in

[api.ts:21295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21295)

___

### listTagContainerTemplates

▸ **listTagContainerTemplates**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

Returns an array of ContainerTemplate objects

**`Summary`**

List ContainerTemplates for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerTemplatesCollection`](../interfaces/ContainerTemplatesCollection.md), `any`\>\>

#### Defined in

[api.ts:21311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21311)

___

### listTagIpaddresses

▸ **listTagIpaddresses**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

Returns an array of Ipaddress objects

**`Summary`**

List Ipaddresses for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`IpaddressesCollection`](../interfaces/IpaddressesCollection.md), `any`\>\>

#### Defined in

[api.ts:21327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21327)

___

### listTagNetworkAdapters

▸ **listTagNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:21343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21343)

___

### listTagNetworks

▸ **listTagNetworks**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

Returns an array of Network objects

**`Summary`**

List Networks for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworksCollection`](../interfaces/NetworksCollection.md), `any`\>\>

#### Defined in

[api.ts:21359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21359)

___

### listTagSecurityGroups

▸ **listTagSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:21375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21375)

___

### listTagServiceInventories

▸ **listTagServiceInventories**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

Returns an array of ServiceInventory objects

**`Summary`**

List ServiceInventories for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInventoriesCollection`](../interfaces/ServiceInventoriesCollection.md), `any`\>\>

#### Defined in

[api.ts:21391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21391)

___

### listTagServiceOfferings

▸ **listTagServiceOfferings**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

Returns an array of ServiceOffering objects

**`Summary`**

List ServiceOfferings for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingsCollection`](../interfaces/ServiceOfferingsCollection.md), `any`\>\>

#### Defined in

[api.ts:21407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21407)

___

### listTagSubnets

▸ **listTagSubnets**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

Returns an array of Subnet objects

**`Summary`**

List Subnets for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SubnetsCollection`](../interfaces/SubnetsCollection.md), `any`\>\>

#### Defined in

[api.ts:21423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21423)

___

### listTagVms

▸ **listTagVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:21439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21439)

___

### listTags

▸ **listTags**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:21454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21454)

___

### listTasks

▸ **listTasks**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TasksCollection`](../interfaces/TasksCollection.md), `any`\>\>

Returns an array of Task objects

**`Summary`**

List Tasks

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TasksCollection`](../interfaces/TasksCollection.md), `any`\>\>

#### Defined in

[api.ts:21469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21469)

___

### listVmNetworkAdapters

▸ **listVmNetworkAdapters**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

Returns an array of NetworkAdapter objects

**`Summary`**

List NetworkAdapters for Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdaptersCollection`](../interfaces/NetworkAdaptersCollection.md), `any`\>\>

#### Defined in

[api.ts:21485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21485)

___

### listVmSecurityGroups

▸ **listVmSecurityGroups**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

Returns an array of SecurityGroup objects

**`Summary`**

List SecurityGroups for Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroupsCollection`](../interfaces/SecurityGroupsCollection.md), `any`\>\>

#### Defined in

[api.ts:21501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21501)

___

### listVmTags

▸ **listVmTags**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

Returns an array of Tag objects

**`Summary`**

List Tags for Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsCollection`](../interfaces/TagsCollection.md), `any`\>\>

#### Defined in

[api.ts:21517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21517)

___

### listVmVolumeAttachments

▸ **listVmVolumeAttachments**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumeAttachmentsCollection`](../interfaces/VolumeAttachmentsCollection.md), `any`\>\>

Returns an array of VolumeAttachment objects

**`Summary`**

List VolumeAttachments for Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeAttachmentsCollection`](../interfaces/VolumeAttachmentsCollection.md), `any`\>\>

#### Defined in

[api.ts:21533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21533)

___

### listVmVolumes

▸ **listVmVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:21549](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21549)

___

### listVms

▸ **listVms**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:21564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21564)

___

### listVolumeAttachments

▸ **listVolumeAttachments**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumeAttachmentsCollection`](../interfaces/VolumeAttachmentsCollection.md), `any`\>\>

Returns an array of VolumeAttachment objects

**`Summary`**

List VolumeAttachments

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeAttachmentsCollection`](../interfaces/VolumeAttachmentsCollection.md), `any`\>\>

#### Defined in

[api.ts:21579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21579)

___

### listVolumeTypeVolumes

▸ **listVolumeTypeVolumes**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes for VolumeType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:21595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21595)

___

### listVolumeTypes

▸ **listVolumeTypes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumeTypesCollection`](../interfaces/VolumeTypesCollection.md), `any`\>\>

Returns an array of VolumeType objects

**`Summary`**

List VolumeTypes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeTypesCollection`](../interfaces/VolumeTypesCollection.md), `any`\>\>

#### Defined in

[api.ts:21610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21610)

___

### listVolumeVms

▸ **listVolumeVms**(`id`, `limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

Returns an array of Vm objects

**`Summary`**

List Vms for Volume

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VmsCollection`](../interfaces/VmsCollection.md), `any`\>\>

#### Defined in

[api.ts:21626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21626)

___

### listVolumes

▸ **listVolumes**(`limit?`, `offset?`, `filter?`, `sortBy?`, `options?`): `Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

Returns an array of Volume objects

**`Summary`**

List Volumes

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | The numbers of items to return per page. |
| `offset?` | `number` | The number of items to skip before starting to collect the result set. |
| `filter?` | `object` | Filter for querying collections. |
| `sortBy?` | `string` \| `string`[] | The list of attribute and order to sort the result set by. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumesCollection`](../interfaces/VolumesCollection.md), `any`\>\>

#### Defined in

[api.ts:21641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21641)

___

### orderServiceOffering

▸ **orderServiceOffering**(`id`, `orderParametersServiceOffering`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

Returns a Task id

**`Summary`**

Order an existing ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderParametersServiceOffering` | [`OrderParametersServiceOffering`](../interfaces/OrderParametersServiceOffering.md) | Order parameters defining the service and provider control |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

#### Defined in

[api.ts:21654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21654)

___

### orderServicePlan

▸ **orderServicePlan**(`id`, `orderParametersServicePlan`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

Returns a Task id

**`Summary`**

Order an existing ServicePlan

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `orderParametersServicePlan` | [`OrderParametersServicePlan`](../interfaces/OrderParametersServicePlan.md) | Order parameters defining the service and provider control |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md), `any`\>\>

#### Defined in

[api.ts:21667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21667)

___

### postGraphQL

▸ **postGraphQL**(`graphQLRequest`, `options?`): `Promise`<`AxiosResponse`<[`GraphQLResponse`](../interfaces/GraphQLResponse.md), `any`\>\>

Performs a GraphQL Query

**`Summary`**

Perform a GraphQL Query

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphQLRequest` | [`GraphQLRequest`](../interfaces/GraphQLRequest.md) | GraphQL Query Request |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GraphQLResponse`](../interfaces/GraphQLResponse.md), `any`\>\>

#### Defined in

[api.ts:21679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21679)

___

### showCluster

▸ **showCluster**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Cluster`](../interfaces/Cluster.md), `any`\>\>

Returns a Cluster object

**`Summary`**

Show an existing Cluster

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Cluster`](../interfaces/Cluster.md), `any`\>\>

#### Defined in

[api.ts:21691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21691)

___

### showContainer

▸ **showContainer**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Container`](../interfaces/Container.md), `any`\>\>

Returns a Container object

**`Summary`**

Show an existing Container

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Container`](../interfaces/Container.md), `any`\>\>

#### Defined in

[api.ts:21703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21703)

___

### showContainerGroup

▸ **showContainerGroup**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerGroup`](../interfaces/ContainerGroup.md), `any`\>\>

Returns a ContainerGroup object

**`Summary`**

Show an existing ContainerGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerGroup`](../interfaces/ContainerGroup.md), `any`\>\>

#### Defined in

[api.ts:21715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21715)

___

### showContainerImage

▸ **showContainerImage**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerImage`](../interfaces/ContainerImage.md), `any`\>\>

Returns a ContainerImage object

**`Summary`**

Show an existing ContainerImage

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerImage`](../interfaces/ContainerImage.md), `any`\>\>

#### Defined in

[api.ts:21727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21727)

___

### showContainerNode

▸ **showContainerNode**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerNode`](../interfaces/ContainerNode.md), `any`\>\>

Returns a ContainerNode object

**`Summary`**

Show an existing ContainerNode

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerNode`](../interfaces/ContainerNode.md), `any`\>\>

#### Defined in

[api.ts:21739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21739)

___

### showContainerProject

▸ **showContainerProject**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerProject`](../interfaces/ContainerProject.md), `any`\>\>

Returns a ContainerProject object

**`Summary`**

Show an existing ContainerProject

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerProject`](../interfaces/ContainerProject.md), `any`\>\>

#### Defined in

[api.ts:21751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21751)

___

### showContainerResourceQuota

▸ **showContainerResourceQuota**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerResourceQuota`](../interfaces/ContainerResourceQuota.md), `any`\>\>

Returns a ContainerResourceQuota object

**`Summary`**

Show an existing ContainerResourceQuota

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerResourceQuota`](../interfaces/ContainerResourceQuota.md), `any`\>\>

#### Defined in

[api.ts:21763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21763)

___

### showContainerTemplate

▸ **showContainerTemplate**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ContainerTemplate`](../interfaces/ContainerTemplate.md), `any`\>\>

Returns a ContainerTemplate object

**`Summary`**

Show an existing ContainerTemplate

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ContainerTemplate`](../interfaces/ContainerTemplate.md), `any`\>\>

#### Defined in

[api.ts:21775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21775)

___

### showDatastore

▸ **showDatastore**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Datastore`](../interfaces/Datastore.md), `any`\>\>

Returns a Datastore object

**`Summary`**

Show an existing Datastore

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Datastore`](../interfaces/Datastore.md), `any`\>\>

#### Defined in

[api.ts:21787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21787)

___

### showFlavor

▸ **showFlavor**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Flavor`](../interfaces/Flavor.md), `any`\>\>

Returns a Flavor object

**`Summary`**

Show an existing Flavor

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Flavor`](../interfaces/Flavor.md), `any`\>\>

#### Defined in

[api.ts:21799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21799)

___

### showHost

▸ **showHost**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Host`](../interfaces/Host.md), `any`\>\>

Returns a Host object

**`Summary`**

Show an existing Host

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Host`](../interfaces/Host.md), `any`\>\>

#### Defined in

[api.ts:21811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21811)

___

### showIpaddress

▸ **showIpaddress**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Ipaddress`](../interfaces/Ipaddress.md), `any`\>\>

Returns a Ipaddress object

**`Summary`**

Show an existing Ipaddress

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Ipaddress`](../interfaces/Ipaddress.md), `any`\>\>

#### Defined in

[api.ts:21823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21823)

___

### showNetwork

▸ **showNetwork**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Network`](../interfaces/Network.md), `any`\>\>

Returns a Network object

**`Summary`**

Show an existing Network

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Network`](../interfaces/Network.md), `any`\>\>

#### Defined in

[api.ts:21835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21835)

___

### showNetworkAdapter

▸ **showNetworkAdapter**(`id`, `options?`): `Promise`<`AxiosResponse`<[`NetworkAdapter`](../interfaces/NetworkAdapter.md), `any`\>\>

Returns a NetworkAdapter object

**`Summary`**

Show an existing NetworkAdapter

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`NetworkAdapter`](../interfaces/NetworkAdapter.md), `any`\>\>

#### Defined in

[api.ts:21847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21847)

___

### showOrchestrationStack

▸ **showOrchestrationStack**(`id`, `options?`): `Promise`<`AxiosResponse`<[`OrchestrationStack`](../interfaces/OrchestrationStack.md), `any`\>\>

Returns a OrchestrationStack object

**`Summary`**

Show an existing OrchestrationStack

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrchestrationStack`](../interfaces/OrchestrationStack.md), `any`\>\>

#### Defined in

[api.ts:21859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21859)

___

### showSecurityGroup

▸ **showSecurityGroup**(`id`, `options?`): `Promise`<`AxiosResponse`<[`SecurityGroup`](../interfaces/SecurityGroup.md), `any`\>\>

Returns a SecurityGroup object

**`Summary`**

Show an existing SecurityGroup

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SecurityGroup`](../interfaces/SecurityGroup.md), `any`\>\>

#### Defined in

[api.ts:21871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21871)

___

### showServiceInstance

▸ **showServiceInstance**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstance`](../interfaces/ServiceInstance.md), `any`\>\>

Returns a ServiceInstance object

**`Summary`**

Show an existing ServiceInstance

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstance`](../interfaces/ServiceInstance.md), `any`\>\>

#### Defined in

[api.ts:21883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21883)

___

### showServiceInstanceNode

▸ **showServiceInstanceNode**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInstanceNode`](../interfaces/ServiceInstanceNode.md), `any`\>\>

Returns a ServiceInstanceNode object

**`Summary`**

Show an existing ServiceInstanceNode

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInstanceNode`](../interfaces/ServiceInstanceNode.md), `any`\>\>

#### Defined in

[api.ts:21895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21895)

___

### showServiceInventory

▸ **showServiceInventory**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceInventory`](../interfaces/ServiceInventory.md), `any`\>\>

Returns a ServiceInventory object

**`Summary`**

Show an existing ServiceInventory

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceInventory`](../interfaces/ServiceInventory.md), `any`\>\>

#### Defined in

[api.ts:21907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21907)

___

### showServiceOffering

▸ **showServiceOffering**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOffering`](../interfaces/ServiceOffering.md), `any`\>\>

Returns a ServiceOffering object

**`Summary`**

Show an existing ServiceOffering

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOffering`](../interfaces/ServiceOffering.md), `any`\>\>

#### Defined in

[api.ts:21919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21919)

___

### showServiceOfferingIcon

▸ **showServiceOfferingIcon**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingIcon`](../interfaces/ServiceOfferingIcon.md), `any`\>\>

Returns a ServiceOfferingIcon object

**`Summary`**

Show an existing ServiceOfferingIcon

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingIcon`](../interfaces/ServiceOfferingIcon.md), `any`\>\>

#### Defined in

[api.ts:21931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21931)

___

### showServiceOfferingIconIconData

▸ **showServiceOfferingIconIconData**(`id`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Returns a ServiceOfferingIcon IconData

**`Summary`**

Show an existing ServiceOfferingIcon IconData

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[api.ts:21943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21943)

___

### showServiceOfferingNode

▸ **showServiceOfferingNode**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServiceOfferingNode`](../interfaces/ServiceOfferingNode.md), `any`\>\>

Returns a ServiceOfferingNode object

**`Summary`**

Show an existing ServiceOfferingNode

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServiceOfferingNode`](../interfaces/ServiceOfferingNode.md), `any`\>\>

#### Defined in

[api.ts:21955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21955)

___

### showServicePlan

▸ **showServicePlan**(`id`, `options?`): `Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

Returns a ServicePlan object

**`Summary`**

Show an existing ServicePlan

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ServicePlan`](../interfaces/ServicePlan.md), `any`\>\>

#### Defined in

[api.ts:21967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21967)

___

### showSource

▸ **showSource**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

Returns a Source object

**`Summary`**

Show an existing Source

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Source`](../interfaces/Source.md), `any`\>\>

#### Defined in

[api.ts:21979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21979)

___

### showSourceRegion

▸ **showSourceRegion**(`id`, `options?`): `Promise`<`AxiosResponse`<[`SourceRegion`](../interfaces/SourceRegion.md), `any`\>\>

Returns a SourceRegion object

**`Summary`**

Show an existing SourceRegion

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SourceRegion`](../interfaces/SourceRegion.md), `any`\>\>

#### Defined in

[api.ts:21991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21991)

___

### showSubnet

▸ **showSubnet**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Subnet`](../interfaces/Subnet.md), `any`\>\>

Returns a Subnet object

**`Summary`**

Show an existing Subnet

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Subnet`](../interfaces/Subnet.md), `any`\>\>

#### Defined in

[api.ts:22003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22003)

___

### showSubscription

▸ **showSubscription**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Subscription`](../interfaces/Subscription.md), `any`\>\>

Returns a Subscription object

**`Summary`**

Show an existing Subscription

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Subscription`](../interfaces/Subscription.md), `any`\>\>

#### Defined in

[api.ts:22015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22015)

___

### showTag

▸ **showTag**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md), `any`\>\>

Returns a Tag object

**`Summary`**

Show an existing Tag

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md), `any`\>\>

#### Defined in

[api.ts:22027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22027)

___

### showTask

▸ **showTask**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Task`](../interfaces/Task.md), `any`\>\>

Returns a Task object

**`Summary`**

Show an existing Task

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Task`](../interfaces/Task.md), `any`\>\>

#### Defined in

[api.ts:22039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22039)

___

### showVm

▸ **showVm**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Vm`](../interfaces/Vm.md), `any`\>\>

Returns a Vm object

**`Summary`**

Show an existing Vm

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Vm`](../interfaces/Vm.md), `any`\>\>

#### Defined in

[api.ts:22051](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22051)

___

### showVolume

▸ **showVolume**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Volume`](../interfaces/Volume.md), `any`\>\>

Returns a Volume object

**`Summary`**

Show an existing Volume

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Volume`](../interfaces/Volume.md), `any`\>\>

#### Defined in

[api.ts:22063](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22063)

___

### showVolumeAttachment

▸ **showVolumeAttachment**(`id`, `options?`): `Promise`<`AxiosResponse`<[`VolumeAttachment`](../interfaces/VolumeAttachment.md), `any`\>\>

Returns a VolumeAttachment object

**`Summary`**

Show an existing VolumeAttachment

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeAttachment`](../interfaces/VolumeAttachment.md), `any`\>\>

#### Defined in

[api.ts:22075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22075)

___

### showVolumeType

▸ **showVolumeType**(`id`, `options?`): `Promise`<`AxiosResponse`<[`VolumeType`](../interfaces/VolumeType.md), `any`\>\>

Returns a VolumeType object

**`Summary`**

Show an existing VolumeType

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`VolumeType`](../interfaces/VolumeType.md), `any`\>\>

#### Defined in

[api.ts:22087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22087)

___

### updateTask

▸ **updateTask**(`id`, `task`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

Updates a Task object

**`Summary`**

Update an existing Task

**`Throws`**

**`Memberof`**

DefaultApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the resource |
| `task` | [`Task`](../interfaces/Task.md) | Task attributes to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[api.ts:22100](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22100)
