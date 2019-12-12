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

* [appliedInventoriesForServiceOffering](defaultapi.md#appliedinventoriesforserviceoffering)
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
* [listIpaddressTags](defaultapi.md#listipaddresstags)
* [listIpaddresses](defaultapi.md#listipaddresses)
* [listNetworkAdapterIpaddresses](defaultapi.md#listnetworkadapteripaddresses)
* [listNetworkAdapterTags](defaultapi.md#listnetworkadaptertags)
* [listNetworkAdapters](defaultapi.md#listnetworkadapters)
* [listNetworkSubnets](defaultapi.md#listnetworksubnets)
* [listNetworkTags](defaultapi.md#listnetworktags)
* [listNetworks](defaultapi.md#listnetworks)
* [listOrchestrationStackIpaddresses](defaultapi.md#listorchestrationstackipaddresses)
* [listOrchestrationStackNetworkAdapters](defaultapi.md#listorchestrationstacknetworkadapters)
* [listOrchestrationStackNetworks](defaultapi.md#listorchestrationstacknetworks)
* [listOrchestrationStackSecurityGroups](defaultapi.md#listorchestrationstacksecuritygroups)
* [listOrchestrationStackSubnets](defaultapi.md#listorchestrationstacksubnets)
* [listOrchestrationStackVms](defaultapi.md#listorchestrationstackvms)
* [listOrchestrationStackVolumes](defaultapi.md#listorchestrationstackvolumes)
* [listOrchestrationStacks](defaultapi.md#listorchestrationstacks)
* [listSecurityGroupTags](defaultapi.md#listsecuritygrouptags)
* [listSecurityGroupVms](defaultapi.md#listsecuritygroupvms)
* [listSecurityGroups](defaultapi.md#listsecuritygroups)
* [listServiceInstanceNodes](defaultapi.md#listserviceinstancenodes)
* [listServiceInstanceServiceInstanceNodes](defaultapi.md#listserviceinstanceserviceinstancenodes)
* [listServiceInstances](defaultapi.md#listserviceinstances)
* [listServiceInventories](defaultapi.md#listserviceinventories)
* [listServiceInventoryTags](defaultapi.md#listserviceinventorytags)
* [listServiceOfferingIcons](defaultapi.md#listserviceofferingicons)
* [listServiceOfferingNodes](defaultapi.md#listserviceofferingnodes)
* [listServiceOfferingServiceInstances](defaultapi.md#listserviceofferingserviceinstances)
* [listServiceOfferingServiceOfferingNodes](defaultapi.md#listserviceofferingserviceofferingnodes)
* [listServiceOfferingServicePlans](defaultapi.md#listserviceofferingserviceplans)
* [listServiceOfferingTags](defaultapi.md#listserviceofferingtags)
* [listServiceOfferings](defaultapi.md#listserviceofferings)
* [listServicePlanServiceInstances](defaultapi.md#listserviceplanserviceinstances)
* [listServicePlans](defaultapi.md#listserviceplans)
* [listSourceAvailabilities](defaultapi.md#listsourceavailabilities)
* [listSourceClusters](defaultapi.md#listsourceclusters)
* [listSourceContainerGroups](defaultapi.md#listsourcecontainergroups)
* [listSourceContainerImages](defaultapi.md#listsourcecontainerimages)
* [listSourceContainerNodes](defaultapi.md#listsourcecontainernodes)
* [listSourceContainerProjects](defaultapi.md#listsourcecontainerprojects)
* [listSourceContainerTemplates](defaultapi.md#listsourcecontainertemplates)
* [listSourceContainers](defaultapi.md#listsourcecontainers)
* [listSourceDatastores](defaultapi.md#listsourcedatastores)
* [listSourceHosts](defaultapi.md#listsourcehosts)
* [listSourceIpaddresses](defaultapi.md#listsourceipaddresses)
* [listSourceNetworkAdapters](defaultapi.md#listsourcenetworkadapters)
* [listSourceNetworks](defaultapi.md#listsourcenetworks)
* [listSourceOrchestrationStacks](defaultapi.md#listsourceorchestrationstacks)
* [listSourceRegionIpaddresses](defaultapi.md#listsourceregionipaddresses)
* [listSourceRegionNetworkAdapters](defaultapi.md#listsourceregionnetworkadapters)
* [listSourceRegionNetworks](defaultapi.md#listsourceregionnetworks)
* [listSourceRegionOrchestrationStacks](defaultapi.md#listsourceregionorchestrationstacks)
* [listSourceRegionSecurityGroups](defaultapi.md#listsourceregionsecuritygroups)
* [listSourceRegionServiceInstances](defaultapi.md#listsourceregionserviceinstances)
* [listSourceRegionServiceOfferings](defaultapi.md#listsourceregionserviceofferings)
* [listSourceRegionServicePlans](defaultapi.md#listsourceregionserviceplans)
* [listSourceRegionSubnets](defaultapi.md#listsourceregionsubnets)
* [listSourceRegionVms](defaultapi.md#listsourceregionvms)
* [listSourceRegionVolumes](defaultapi.md#listsourceregionvolumes)
* [listSourceRegions](defaultapi.md#listsourceregions)
* [listSourceSecurityGroups](defaultapi.md#listsourcesecuritygroups)
* [listSourceServiceInstanceNodes](defaultapi.md#listsourceserviceinstancenodes)
* [listSourceServiceInstances](defaultapi.md#listsourceserviceinstances)
* [listSourceServiceInventories](defaultapi.md#listsourceserviceinventories)
* [listSourceServiceOfferingNodes](defaultapi.md#listsourceserviceofferingnodes)
* [listSourceServiceOfferings](defaultapi.md#listsourceserviceofferings)
* [listSourceServicePlans](defaultapi.md#listsourceserviceplans)
* [listSourceSourceRegions](defaultapi.md#listsourcesourceregions)
* [listSourceSubnets](defaultapi.md#listsourcesubnets)
* [listSourceSubscriptions](defaultapi.md#listsourcesubscriptions)
* [listSourceVms](defaultapi.md#listsourcevms)
* [listSourceVolumeTypes](defaultapi.md#listsourcevolumetypes)
* [listSourceVolumes](defaultapi.md#listsourcevolumes)
* [listSources](defaultapi.md#listsources)
* [listSubnetIpaddresses](defaultapi.md#listsubnetipaddresses)
* [listSubnetNetworkAdapters](defaultapi.md#listsubnetnetworkadapters)
* [listSubnetTags](defaultapi.md#listsubnettags)
* [listSubnets](defaultapi.md#listsubnets)
* [listSubscriptionIpaddresses](defaultapi.md#listsubscriptionipaddresses)
* [listSubscriptionNetworkAdapters](defaultapi.md#listsubscriptionnetworkadapters)
* [listSubscriptionNetworks](defaultapi.md#listsubscriptionnetworks)
* [listSubscriptionOrchestrationStacks](defaultapi.md#listsubscriptionorchestrationstacks)
* [listSubscriptionSecurityGroups](defaultapi.md#listsubscriptionsecuritygroups)
* [listSubscriptionServiceInstances](defaultapi.md#listsubscriptionserviceinstances)
* [listSubscriptionServiceOfferings](defaultapi.md#listsubscriptionserviceofferings)
* [listSubscriptionServicePlans](defaultapi.md#listsubscriptionserviceplans)
* [listSubscriptionSubnets](defaultapi.md#listsubscriptionsubnets)
* [listSubscriptionVms](defaultapi.md#listsubscriptionvms)
* [listSubscriptionVolumes](defaultapi.md#listsubscriptionvolumes)
* [listSubscriptions](defaultapi.md#listsubscriptions)
* [listTagContainerGroups](defaultapi.md#listtagcontainergroups)
* [listTagContainerImages](defaultapi.md#listtagcontainerimages)
* [listTagContainerNodes](defaultapi.md#listtagcontainernodes)
* [listTagContainerProjects](defaultapi.md#listtagcontainerprojects)
* [listTagContainerTemplates](defaultapi.md#listtagcontainertemplates)
* [listTagIpaddresses](defaultapi.md#listtagipaddresses)
* [listTagNetworkAdapters](defaultapi.md#listtagnetworkadapters)
* [listTagNetworks](defaultapi.md#listtagnetworks)
* [listTagSecurityGroups](defaultapi.md#listtagsecuritygroups)
* [listTagServiceInventories](defaultapi.md#listtagserviceinventories)
* [listTagServiceOfferings](defaultapi.md#listtagserviceofferings)
* [listTagSubnets](defaultapi.md#listtagsubnets)
* [listTagVms](defaultapi.md#listtagvms)
* [listTags](defaultapi.md#listtags)
* [listTasks](defaultapi.md#listtasks)
* [listVmNetworkAdapters](defaultapi.md#listvmnetworkadapters)
* [listVmSecurityGroups](defaultapi.md#listvmsecuritygroups)
* [listVmTags](defaultapi.md#listvmtags)
* [listVmVolumeAttachments](defaultapi.md#listvmvolumeattachments)
* [listVmVolumes](defaultapi.md#listvmvolumes)
* [listVms](defaultapi.md#listvms)
* [listVolumeAttachments](defaultapi.md#listvolumeattachments)
* [listVolumeTypeVolumes](defaultapi.md#listvolumetypevolumes)
* [listVolumeTypes](defaultapi.md#listvolumetypes)
* [listVolumeVms](defaultapi.md#listvolumevms)
* [listVolumes](defaultapi.md#listvolumes)
* [orderServiceOffering](defaultapi.md#orderserviceoffering)
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
* [showIpaddress](defaultapi.md#showipaddress)
* [showNetwork](defaultapi.md#shownetwork)
* [showNetworkAdapter](defaultapi.md#shownetworkadapter)
* [showOrchestrationStack](defaultapi.md#showorchestrationstack)
* [showSecurityGroup](defaultapi.md#showsecuritygroup)
* [showServiceInstance](defaultapi.md#showserviceinstance)
* [showServiceInstanceNode](defaultapi.md#showserviceinstancenode)
* [showServiceInventory](defaultapi.md#showserviceinventory)
* [showServiceOffering](defaultapi.md#showserviceoffering)
* [showServiceOfferingIcon](defaultapi.md#showserviceofferingicon)
* [showServiceOfferingIconIconData](defaultapi.md#showserviceofferingiconicondata)
* [showServiceOfferingNode](defaultapi.md#showserviceofferingnode)
* [showServicePlan](defaultapi.md#showserviceplan)
* [showSource](defaultapi.md#showsource)
* [showSourceRegion](defaultapi.md#showsourceregion)
* [showSubnet](defaultapi.md#showsubnet)
* [showSubscription](defaultapi.md#showsubscription)
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

<a id="appliedinventoriesforserviceoffering"></a>

###  appliedInventoriesForServiceOffering

▸ **appliedInventoriesForServiceOffering**(id: *`string`*, appliedInventoriesParametersServicePlan: *[AppliedInventoriesParametersServicePlan](../interfaces/appliedinventoriesparametersserviceplan.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:19070](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19070)*

Returns a Task id

*__summary__*: Invokes computing of ServiceInventories for given ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| appliedInventoriesParametersServicePlan | [AppliedInventoriesParametersServicePlan](../interfaces/appliedinventoriesparametersserviceplan.md) |  Parameters defining input data for computing inventories |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="getdocumentation"></a>

###  getDocumentation

▸ **getDocumentation**(options?: *`any`*): `AxiosPromise`<`any`>

*Defined in [api.ts:19081](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19081)*

*__summary__*: Return this API document in JSON format

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`any`>

___
<a id="listclusterhosts"></a>

###  listClusterHosts

▸ **listClusterHosts**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:19097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19097)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listclusters"></a>

###  listClusters

▸ **listClusters**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

*Defined in [api.ts:19112](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19112)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

___
<a id="listcontainergroupcontainers"></a>

###  listContainerGroupContainers

▸ **listContainerGroupContainers**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:19128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19128)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listcontainergrouptags"></a>

###  listContainerGroupTags

▸ **listContainerGroupTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19144)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainergroups"></a>

###  listContainerGroups

▸ **listContainerGroups**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:19159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19159)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainerimagetags"></a>

###  listContainerImageTags

▸ **listContainerImageTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19175)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainerimages"></a>

###  listContainerImages

▸ **listContainerImages**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:19190](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19190)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listcontainernodecontainergroups"></a>

###  listContainerNodeContainerGroups

▸ **listContainerNodeContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:19206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19206)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainernodetags"></a>

###  listContainerNodeTags

▸ **listContainerNodeTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19222)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainernodes"></a>

###  listContainerNodes

▸ **listContainerNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:19237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19237)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listcontainerprojectcontainergroups"></a>

###  listContainerProjectContainerGroups

▸ **listContainerProjectContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:19253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19253)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listcontainerprojectcontainerresourcequota"></a>

###  listContainerProjectContainerResourceQuota

▸ **listContainerProjectContainerResourceQuota**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

*Defined in [api.ts:19269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19269)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

___
<a id="listcontainerprojectcontainertemplates"></a>

###  listContainerProjectContainerTemplates

▸ **listContainerProjectContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:19285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19285)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listcontainerprojecttags"></a>

###  listContainerProjectTags

▸ **listContainerProjectTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19301)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainerprojects"></a>

###  listContainerProjects

▸ **listContainerProjects**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:19316](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19316)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listcontainerresourcequota"></a>

###  listContainerResourceQuota

▸ **listContainerResourceQuota**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

*Defined in [api.ts:19331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19331)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)>

___
<a id="listcontainertemplatetags"></a>

###  listContainerTemplateTags

▸ **listContainerTemplateTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19347)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listcontainertemplates"></a>

###  listContainerTemplates

▸ **listContainerTemplates**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:19362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19362)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listcontainers"></a>

###  listContainers

▸ **listContainers**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:19377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19377)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listdatastores"></a>

###  listDatastores

▸ **listDatastores**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

*Defined in [api.ts:19392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19392)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

___
<a id="listflavors"></a>

###  listFlavors

▸ **listFlavors**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[FlavorsCollection](../interfaces/flavorscollection.md)>

*Defined in [api.ts:19407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19407)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[FlavorsCollection](../interfaces/flavorscollection.md)>

___
<a id="listhosts"></a>

###  listHosts

▸ **listHosts**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:19422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19422)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listipaddresstags"></a>

###  listIpaddressTags

▸ **listIpaddressTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19438)*

Returns an array of Tag objects

*__summary__*: List Tags for Ipaddress

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listipaddresses"></a>

###  listIpaddresses

▸ **listIpaddresses**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19453](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19453)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listnetworkadapteripaddresses"></a>

###  listNetworkAdapterIpaddresses

▸ **listNetworkAdapterIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19469)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for NetworkAdapter

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listnetworkadaptertags"></a>

###  listNetworkAdapterTags

▸ **listNetworkAdapterTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19485)*

Returns an array of Tag objects

*__summary__*: List Tags for NetworkAdapter

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listnetworkadapters"></a>

###  listNetworkAdapters

▸ **listNetworkAdapters**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19500)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listnetworksubnets"></a>

###  listNetworkSubnets

▸ **listNetworkSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19516)*

Returns an array of Subnet objects

*__summary__*: List Subnets for Network

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listnetworktags"></a>

###  listNetworkTags

▸ **listNetworkTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19532](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19532)*

Returns an array of Tag objects

*__summary__*: List Tags for Network

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listnetworks"></a>

###  listNetworks

▸ **listNetworks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19547)*

Returns an array of Network objects

*__summary__*: List Networks

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listorchestrationstackipaddresses"></a>

###  listOrchestrationStackIpaddresses

▸ **listOrchestrationStackIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19563)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listorchestrationstacknetworkadapters"></a>

###  listOrchestrationStackNetworkAdapters

▸ **listOrchestrationStackNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19579)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listorchestrationstacknetworks"></a>

###  listOrchestrationStackNetworks

▸ **listOrchestrationStackNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19595)*

Returns an array of Network objects

*__summary__*: List Networks for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listorchestrationstacksecuritygroups"></a>

###  listOrchestrationStackSecurityGroups

▸ **listOrchestrationStackSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19611)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listorchestrationstacksubnets"></a>

###  listOrchestrationStackSubnets

▸ **listOrchestrationStackSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19627)*

Returns an array of Subnet objects

*__summary__*: List Subnets for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listorchestrationstackvms"></a>

###  listOrchestrationStackVms

▸ **listOrchestrationStackVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19643)*

Returns an array of Vm objects

*__summary__*: List Vms for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listorchestrationstackvolumes"></a>

###  listOrchestrationStackVolumes

▸ **listOrchestrationStackVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:19659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19659)*

Returns an array of Volume objects

*__summary__*: List Volumes for OrchestrationStack

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listorchestrationstacks"></a>

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:19674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19674)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsecuritygrouptags"></a>

###  listSecurityGroupTags

▸ **listSecurityGroupTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19690)*

Returns an array of Tag objects

*__summary__*: List Tags for SecurityGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listsecuritygroupvms"></a>

###  listSecurityGroupVms

▸ **listSecurityGroupVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19706)*

Returns an array of Vm objects

*__summary__*: List Vms for SecurityGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsecuritygroups"></a>

###  listSecurityGroups

▸ **listSecurityGroups**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19721)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listserviceinstancenodes"></a>

###  listServiceInstanceNodes

▸ **listServiceInstanceNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:19736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19736)*

Returns an array of ServiceInstanceNode objects

*__summary__*: List ServiceInstanceNodes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listserviceinstanceserviceinstancenodes"></a>

###  listServiceInstanceServiceInstanceNodes

▸ **listServiceInstanceServiceInstanceNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:19752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19752)*

Returns an array of ServiceInstanceNode objects

*__summary__*: List ServiceInstanceNodes for ServiceInstance

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listserviceinstances"></a>

###  listServiceInstances

▸ **listServiceInstances**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19767)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceinventories"></a>

###  listServiceInventories

▸ **listServiceInventories**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:19782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19782)*

Returns an array of ServiceInventory objects

*__summary__*: List ServiceInventories

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listserviceinventorytags"></a>

###  listServiceInventoryTags

▸ **listServiceInventoryTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19798)*

Returns an array of Tag objects

*__summary__*: List Tags for ServiceInventory

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listserviceofferingicons"></a>

###  listServiceOfferingIcons

▸ **listServiceOfferingIcons**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)>

*Defined in [api.ts:19813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19813)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)>

___
<a id="listserviceofferingnodes"></a>

###  listServiceOfferingNodes

▸ **listServiceOfferingNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:19828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19828)*

Returns an array of ServiceOfferingNode objects

*__summary__*: List ServiceOfferingNodes

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listserviceofferingserviceinstances"></a>

###  listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19844)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceofferingserviceofferingnodes"></a>

###  listServiceOfferingServiceOfferingNodes

▸ **listServiceOfferingServiceOfferingNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:19860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19860)*

Returns an array of ServiceOfferingNode objects

*__summary__*: List ServiceOfferingNodes for ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listserviceofferingserviceplans"></a>

###  listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:19876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19876)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listserviceofferingtags"></a>

###  listServiceOfferingTags

▸ **listServiceOfferingTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19892)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listserviceofferings"></a>

###  listServiceOfferings

▸ **listServiceOfferings**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:19907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19907)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listserviceplanserviceinstances"></a>

###  listServicePlanServiceInstances

▸ **listServicePlanServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19923)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listserviceplans"></a>

###  listServicePlans

▸ **listServicePlans**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:19938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19938)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourceavailabilities"></a>

###  listSourceAvailabilities

▸ **listSourceAvailabilities**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)>

*Defined in [api.ts:19954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19954)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)>

___
<a id="listsourceclusters"></a>

###  listSourceClusters

▸ **listSourceClusters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

*Defined in [api.ts:19970](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19970)*

Returns an array of Cluster objects

*__summary__*: List Clusters for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

___
<a id="listsourcecontainergroups"></a>

###  listSourceContainerGroups

▸ **listSourceContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:19986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19986)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listsourcecontainerimages"></a>

###  listSourceContainerImages

▸ **listSourceContainerImages**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:20002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20002)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listsourcecontainernodes"></a>

###  listSourceContainerNodes

▸ **listSourceContainerNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:20018](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20018)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listsourcecontainerprojects"></a>

###  listSourceContainerProjects

▸ **listSourceContainerProjects**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:20034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20034)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listsourcecontainertemplates"></a>

###  listSourceContainerTemplates

▸ **listSourceContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:20050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20050)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listsourcecontainers"></a>

###  listSourceContainers

▸ **listSourceContainers**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

*Defined in [api.ts:20066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20066)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainersCollection](../interfaces/containerscollection.md)>

___
<a id="listsourcedatastores"></a>

###  listSourceDatastores

▸ **listSourceDatastores**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

*Defined in [api.ts:20082](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20082)*

Returns an array of Datastore objects

*__summary__*: List Datastores for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

___
<a id="listsourcehosts"></a>

###  listSourceHosts

▸ **listSourceHosts**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:20098](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20098)*

Returns an array of Host objects

*__summary__*: List Hosts for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listsourceipaddresses"></a>

###  listSourceIpaddresses

▸ **listSourceIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:20114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20114)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsourcenetworkadapters"></a>

###  listSourceNetworkAdapters

▸ **listSourceNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:20130](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20130)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsourcenetworks"></a>

###  listSourceNetworks

▸ **listSourceNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:20146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20146)*

Returns an array of Network objects

*__summary__*: List Networks for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsourceorchestrationstacks"></a>

###  listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:20162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20162)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsourceregionipaddresses"></a>

###  listSourceRegionIpaddresses

▸ **listSourceRegionIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:20178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20178)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsourceregionnetworkadapters"></a>

###  listSourceRegionNetworkAdapters

▸ **listSourceRegionNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:20194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20194)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsourceregionnetworks"></a>

###  listSourceRegionNetworks

▸ **listSourceRegionNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:20210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20210)*

Returns an array of Network objects

*__summary__*: List Networks for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsourceregionorchestrationstacks"></a>

###  listSourceRegionOrchestrationStacks

▸ **listSourceRegionOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:20226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20226)*

Returns an array of OrchestrationStack objects

*__summary__*: List OrchestrationStacks for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsourceregionsecuritygroups"></a>

###  listSourceRegionSecurityGroups

▸ **listSourceRegionSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:20242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20242)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsourceregionserviceinstances"></a>

###  listSourceRegionServiceInstances

▸ **listSourceRegionServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:20258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20258)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsourceregionserviceofferings"></a>

###  listSourceRegionServiceOfferings

▸ **listSourceRegionServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:20274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20274)*

Returns an array of ServiceOffering objects

*__summary__*: List ServiceOfferings for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsourceregionserviceplans"></a>

###  listSourceRegionServicePlans

▸ **listSourceRegionServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:20290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20290)*

Returns an array of ServicePlan objects

*__summary__*: List ServicePlans for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourceregionsubnets"></a>

###  listSourceRegionSubnets

▸ **listSourceRegionSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:20306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20306)*

Returns an array of Subnet objects

*__summary__*: List Subnets for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsourceregionvms"></a>

###  listSourceRegionVms

▸ **listSourceRegionVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:20322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20322)*

Returns an array of Vm objects

*__summary__*: List Vms for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsourceregionvolumes"></a>

###  listSourceRegionVolumes

▸ **listSourceRegionVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:20338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20338)*

Returns an array of Volume objects

*__summary__*: List Volumes for SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsourceregions"></a>

###  listSourceRegions

▸ **listSourceRegions**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

*Defined in [api.ts:20353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20353)*

Returns an array of SourceRegion objects

*__summary__*: List SourceRegions

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

___
<a id="listsourcesecuritygroups"></a>

###  listSourceSecurityGroups

▸ **listSourceSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:20369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20369)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsourceserviceinstancenodes"></a>

###  listSourceServiceInstanceNodes

▸ **listSourceServiceInstanceNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:20385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20385)*

Returns an array of ServiceInstanceNode objects

*__summary__*: List ServiceInstanceNodes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listsourceserviceinstances"></a>

###  listSourceServiceInstances

▸ **listSourceServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:20401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20401)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsourceserviceinventories"></a>

###  listSourceServiceInventories

▸ **listSourceServiceInventories**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:20417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20417)*

Returns an array of ServiceInventory objects

*__summary__*: List ServiceInventories for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listsourceserviceofferingnodes"></a>

###  listSourceServiceOfferingNodes

▸ **listSourceServiceOfferingNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:20433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20433)*

Returns an array of ServiceOfferingNode objects

*__summary__*: List ServiceOfferingNodes for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listsourceserviceofferings"></a>

###  listSourceServiceOfferings

▸ **listSourceServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:20449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20449)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsourceserviceplans"></a>

###  listSourceServicePlans

▸ **listSourceServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:20465](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20465)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourcesourceregions"></a>

###  listSourceSourceRegions

▸ **listSourceSourceRegions**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

*Defined in [api.ts:20481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20481)*

Returns an array of SourceRegion objects

*__summary__*: List SourceRegions for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

___
<a id="listsourcesubnets"></a>

###  listSourceSubnets

▸ **listSourceSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:20497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20497)*

Returns an array of Subnet objects

*__summary__*: List Subnets for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsourcesubscriptions"></a>

###  listSourceSubscriptions

▸ **listSourceSubscriptions**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

*Defined in [api.ts:20513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20513)*

Returns an array of Subscription objects

*__summary__*: List Subscriptions for Source

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

___
<a id="listsourcevms"></a>

###  listSourceVms

▸ **listSourceVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:20529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20529)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsourcevolumetypes"></a>

###  listSourceVolumeTypes

▸ **listSourceVolumeTypes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

*Defined in [api.ts:20545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20545)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

___
<a id="listsourcevolumes"></a>

###  listSourceVolumes

▸ **listSourceVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:20561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20561)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsources"></a>

###  listSources

▸ **listSources**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

*Defined in [api.ts:20576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20576)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourcesCollection](../interfaces/sourcescollection.md)>

___
<a id="listsubnetipaddresses"></a>

###  listSubnetIpaddresses

▸ **listSubnetIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:20592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20592)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for Subnet

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsubnetnetworkadapters"></a>

###  listSubnetNetworkAdapters

▸ **listSubnetNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:20608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20608)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for Subnet

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsubnettags"></a>

###  listSubnetTags

▸ **listSubnetTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:20624](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20624)*

Returns an array of Tag objects

*__summary__*: List Tags for Subnet

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listsubnets"></a>

###  listSubnets

▸ **listSubnets**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:20639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20639)*

Returns an array of Subnet objects

*__summary__*: List Subnets

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsubscriptionipaddresses"></a>

###  listSubscriptionIpaddresses

▸ **listSubscriptionIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:20655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20655)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsubscriptionnetworkadapters"></a>

###  listSubscriptionNetworkAdapters

▸ **listSubscriptionNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:20671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20671)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsubscriptionnetworks"></a>

###  listSubscriptionNetworks

▸ **listSubscriptionNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:20687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20687)*

Returns an array of Network objects

*__summary__*: List Networks for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsubscriptionorchestrationstacks"></a>

###  listSubscriptionOrchestrationStacks

▸ **listSubscriptionOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:20703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20703)*

Returns an array of OrchestrationStack objects

*__summary__*: List OrchestrationStacks for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsubscriptionsecuritygroups"></a>

###  listSubscriptionSecurityGroups

▸ **listSubscriptionSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:20719](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20719)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsubscriptionserviceinstances"></a>

###  listSubscriptionServiceInstances

▸ **listSubscriptionServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:20735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20735)*

Returns an array of ServiceInstance objects

*__summary__*: List ServiceInstances for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsubscriptionserviceofferings"></a>

###  listSubscriptionServiceOfferings

▸ **listSubscriptionServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:20751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20751)*

Returns an array of ServiceOffering objects

*__summary__*: List ServiceOfferings for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsubscriptionserviceplans"></a>

###  listSubscriptionServicePlans

▸ **listSubscriptionServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:20767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20767)*

Returns an array of ServicePlan objects

*__summary__*: List ServicePlans for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsubscriptionsubnets"></a>

###  listSubscriptionSubnets

▸ **listSubscriptionSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:20783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20783)*

Returns an array of Subnet objects

*__summary__*: List Subnets for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsubscriptionvms"></a>

###  listSubscriptionVms

▸ **listSubscriptionVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:20799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20799)*

Returns an array of Vm objects

*__summary__*: List Vms for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsubscriptionvolumes"></a>

###  listSubscriptionVolumes

▸ **listSubscriptionVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:20815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20815)*

Returns an array of Volume objects

*__summary__*: List Volumes for Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsubscriptions"></a>

###  listSubscriptions

▸ **listSubscriptions**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

*Defined in [api.ts:20830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20830)*

Returns an array of Subscription objects

*__summary__*: List Subscriptions

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

___
<a id="listtagcontainergroups"></a>

###  listTagContainerGroups

▸ **listTagContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:20846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20846)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

___
<a id="listtagcontainerimages"></a>

###  listTagContainerImages

▸ **listTagContainerImages**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

*Defined in [api.ts:20862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20862)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerImagesCollection](../interfaces/containerimagescollection.md)>

___
<a id="listtagcontainernodes"></a>

###  listTagContainerNodes

▸ **listTagContainerNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

*Defined in [api.ts:20878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20878)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerNodesCollection](../interfaces/containernodescollection.md)>

___
<a id="listtagcontainerprojects"></a>

###  listTagContainerProjects

▸ **listTagContainerProjects**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

*Defined in [api.ts:20894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20894)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)>

___
<a id="listtagcontainertemplates"></a>

###  listTagContainerTemplates

▸ **listTagContainerTemplates**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

*Defined in [api.ts:20910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20910)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)>

___
<a id="listtagipaddresses"></a>

###  listTagIpaddresses

▸ **listTagIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:20926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20926)*

Returns an array of Ipaddress objects

*__summary__*: List Ipaddresses for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listtagnetworkadapters"></a>

###  listTagNetworkAdapters

▸ **listTagNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:20942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20942)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listtagnetworks"></a>

###  listTagNetworks

▸ **listTagNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:20958](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20958)*

Returns an array of Network objects

*__summary__*: List Networks for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listtagsecuritygroups"></a>

###  listTagSecurityGroups

▸ **listTagSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:20974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20974)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listtagserviceinventories"></a>

###  listTagServiceInventories

▸ **listTagServiceInventories**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:20990](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20990)*

Returns an array of ServiceInventory objects

*__summary__*: List ServiceInventories for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listtagserviceofferings"></a>

###  listTagServiceOfferings

▸ **listTagServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:21006](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21006)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listtagsubnets"></a>

###  listTagSubnets

▸ **listTagSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:21022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21022)*

Returns an array of Subnet objects

*__summary__*: List Subnets for Tag

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listtagvms"></a>

###  listTagVms

▸ **listTagVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:21038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21038)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listtags"></a>

###  listTags

▸ **listTags**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:21053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21053)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listtasks"></a>

###  listTasks

▸ **listTasks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TasksCollection](../interfaces/taskscollection.md)>

*Defined in [api.ts:21068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21068)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TasksCollection](../interfaces/taskscollection.md)>

___
<a id="listvmnetworkadapters"></a>

###  listVmNetworkAdapters

▸ **listVmNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:21084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21084)*

Returns an array of NetworkAdapter objects

*__summary__*: List NetworkAdapters for Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listvmsecuritygroups"></a>

###  listVmSecurityGroups

▸ **listVmSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:21100](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21100)*

Returns an array of SecurityGroup objects

*__summary__*: List SecurityGroups for Vm

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listvmtags"></a>

###  listVmTags

▸ **listVmTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:21116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21116)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listvmvolumeattachments"></a>

###  listVmVolumeAttachments

▸ **listVmVolumeAttachments**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

*Defined in [api.ts:21132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21132)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

___
<a id="listvmvolumes"></a>

###  listVmVolumes

▸ **listVmVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:21148](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21148)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listvms"></a>

###  listVms

▸ **listVms**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:21163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21163)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listvolumeattachments"></a>

###  listVolumeAttachments

▸ **listVolumeAttachments**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

*Defined in [api.ts:21178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21178)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)>

___
<a id="listvolumetypevolumes"></a>

###  listVolumeTypeVolumes

▸ **listVolumeTypeVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:21194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21194)*

Returns an array of Volume objects

*__summary__*: List Volumes for VolumeType

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listvolumetypes"></a>

###  listVolumeTypes

▸ **listVolumeTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

*Defined in [api.ts:21209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21209)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

___
<a id="listvolumevms"></a>

###  listVolumeVms

▸ **listVolumeVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:21225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21225)*

Returns an array of Vm objects

*__summary__*: List Vms for Volume

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` filter | `any` |
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listvolumes"></a>

###  listVolumes

▸ **listVolumes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, sortBy?: *`Object`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:21240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21240)*

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
| `Optional` sortBy | `Object` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="orderserviceoffering"></a>

###  orderServiceOffering

▸ **orderServiceOffering**(id: *`string`*, orderParametersServiceOffering: *[OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:21253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21253)*

Returns a Task id

*__summary__*: Order an existing ServiceOffering

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| orderParametersServiceOffering | [OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md) |  Order parameters defining the service and provider control |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="orderserviceplan"></a>

###  orderServicePlan

▸ **orderServicePlan**(id: *`string`*, orderParametersServicePlan: *[OrderParametersServicePlan](../interfaces/orderparametersserviceplan.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:21266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21266)*

Returns a Task id

*__summary__*: Order an existing ServicePlan

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| orderParametersServicePlan | [OrderParametersServicePlan](../interfaces/orderparametersserviceplan.md) |  Order parameters defining the service and provider control |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="postgraphql"></a>

###  postGraphQL

▸ **postGraphQL**(graphQLRequest: *[GraphQLRequest](../interfaces/graphqlrequest.md)*, options?: *`any`*): `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

*Defined in [api.ts:21278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21278)*

Performs a GraphQL Query

*__summary__*: Perform a GraphQL Query

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graphQLRequest | [GraphQLRequest](../interfaces/graphqlrequest.md) |  GraphQL Query Request |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[GraphQLResponse](../interfaces/graphqlresponse.md)>

___
<a id="showcluster"></a>

###  showCluster

▸ **showCluster**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Cluster](../interfaces/cluster.md)>

*Defined in [api.ts:21290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21290)*

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

*Defined in [api.ts:21302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21302)*

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

*Defined in [api.ts:21314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21314)*

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

*Defined in [api.ts:21326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21326)*

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

*Defined in [api.ts:21338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21338)*

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

*Defined in [api.ts:21350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21350)*

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

*Defined in [api.ts:21362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21362)*

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

*Defined in [api.ts:21374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21374)*

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

*Defined in [api.ts:21386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21386)*

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

*Defined in [api.ts:21398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21398)*

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

*Defined in [api.ts:21410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21410)*

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
<a id="showipaddress"></a>

###  showIpaddress

▸ **showIpaddress**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Ipaddress](../interfaces/ipaddress.md)>

*Defined in [api.ts:21422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21422)*

Returns a Ipaddress object

*__summary__*: Show an existing Ipaddress

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Ipaddress](../interfaces/ipaddress.md)>

___
<a id="shownetwork"></a>

###  showNetwork

▸ **showNetwork**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Network](../interfaces/network.md)>

*Defined in [api.ts:21434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21434)*

Returns a Network object

*__summary__*: Show an existing Network

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Network](../interfaces/network.md)>

___
<a id="shownetworkadapter"></a>

###  showNetworkAdapter

▸ **showNetworkAdapter**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[NetworkAdapter](../interfaces/networkadapter.md)>

*Defined in [api.ts:21446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21446)*

Returns a NetworkAdapter object

*__summary__*: Show an existing NetworkAdapter

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdapter](../interfaces/networkadapter.md)>

___
<a id="showorchestrationstack"></a>

###  showOrchestrationStack

▸ **showOrchestrationStack**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStack](../interfaces/orchestrationstack.md)>

*Defined in [api.ts:21458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21458)*

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
<a id="showsecuritygroup"></a>

###  showSecurityGroup

▸ **showSecurityGroup**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[SecurityGroup](../interfaces/securitygroup.md)>

*Defined in [api.ts:21470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21470)*

Returns a SecurityGroup object

*__summary__*: Show an existing SecurityGroup

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroup](../interfaces/securitygroup.md)>

___
<a id="showserviceinstance"></a>

###  showServiceInstance

▸ **showServiceInstance**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceInstance](../interfaces/serviceinstance.md)>

*Defined in [api.ts:21482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21482)*

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
<a id="showserviceinstancenode"></a>

###  showServiceInstanceNode

▸ **showServiceInstanceNode**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNode](../interfaces/serviceinstancenode.md)>

*Defined in [api.ts:21494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21494)*

Returns a ServiceInstanceNode object

*__summary__*: Show an existing ServiceInstanceNode

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNode](../interfaces/serviceinstancenode.md)>

___
<a id="showserviceinventory"></a>

###  showServiceInventory

▸ **showServiceInventory**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceInventory](../interfaces/serviceinventory.md)>

*Defined in [api.ts:21506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21506)*

Returns a ServiceInventory object

*__summary__*: Show an existing ServiceInventory

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventory](../interfaces/serviceinventory.md)>

___
<a id="showserviceoffering"></a>

###  showServiceOffering

▸ **showServiceOffering**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceOffering](../interfaces/serviceoffering.md)>

*Defined in [api.ts:21518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21518)*

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

*Defined in [api.ts:21530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21530)*

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

*Defined in [api.ts:21542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21542)*

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
<a id="showserviceofferingnode"></a>

###  showServiceOfferingNode

▸ **showServiceOfferingNode**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNode](../interfaces/serviceofferingnode.md)>

*Defined in [api.ts:21554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21554)*

Returns a ServiceOfferingNode object

*__summary__*: Show an existing ServiceOfferingNode

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNode](../interfaces/serviceofferingnode.md)>

___
<a id="showserviceplan"></a>

###  showServicePlan

▸ **showServicePlan**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[ServicePlan](../interfaces/serviceplan.md)>

*Defined in [api.ts:21566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21566)*

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

*Defined in [api.ts:21578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21578)*

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
<a id="showsourceregion"></a>

###  showSourceRegion

▸ **showSourceRegion**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[SourceRegion](../interfaces/sourceregion.md)>

*Defined in [api.ts:21590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21590)*

Returns a SourceRegion object

*__summary__*: Show an existing SourceRegion

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceRegion](../interfaces/sourceregion.md)>

___
<a id="showsubnet"></a>

###  showSubnet

▸ **showSubnet**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Subnet](../interfaces/subnet.md)>

*Defined in [api.ts:21602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21602)*

Returns a Subnet object

*__summary__*: Show an existing Subnet

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Subnet](../interfaces/subnet.md)>

___
<a id="showsubscription"></a>

###  showSubscription

▸ **showSubscription**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Subscription](../interfaces/subscription.md)>

*Defined in [api.ts:21614](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21614)*

Returns a Subscription object

*__summary__*: Show an existing Subscription

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the resource |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Subscription](../interfaces/subscription.md)>

___
<a id="showtag"></a>

###  showTag

▸ **showTag**(id: *`string`*, options?: *`any`*): `AxiosPromise`<[Tag](../interfaces/tag.md)>

*Defined in [api.ts:21626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21626)*

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

*Defined in [api.ts:21638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21638)*

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

*Defined in [api.ts:21650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21650)*

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

*Defined in [api.ts:21662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21662)*

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

*Defined in [api.ts:21674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21674)*

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

*Defined in [api.ts:21686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21686)*

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

*Defined in [api.ts:21699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21699)*

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

