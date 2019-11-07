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

*Defined in [api.ts:18111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18111)*

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

*Defined in [api.ts:18122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18122)*

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

▸ **listClusterHosts**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:18137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18137)*

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

*Defined in [api.ts:18151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18151)*

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

*Defined in [api.ts:18166](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18166)*

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

*Defined in [api.ts:18181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18181)*

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

*Defined in [api.ts:18195](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18195)*

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

*Defined in [api.ts:18210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18210)*

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

*Defined in [api.ts:18224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18224)*

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

*Defined in [api.ts:18239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18239)*

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

*Defined in [api.ts:18254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18254)*

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

*Defined in [api.ts:18268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18268)*

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

*Defined in [api.ts:18283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18283)*

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

*Defined in [api.ts:18298](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18298)*

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

*Defined in [api.ts:18313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18313)*

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

*Defined in [api.ts:18328](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18328)*

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

*Defined in [api.ts:18342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18342)*

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

*Defined in [api.ts:18356](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18356)*

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

*Defined in [api.ts:18371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18371)*

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

*Defined in [api.ts:18385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18385)*

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

*Defined in [api.ts:18399](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18399)*

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

*Defined in [api.ts:18413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18413)*

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

*Defined in [api.ts:18427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18427)*

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

*Defined in [api.ts:18441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18441)*

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
<a id="listipaddresstags"></a>

###  listIpaddressTags

▸ **listIpaddressTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:18456](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18456)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listipaddresses"></a>

###  listIpaddresses

▸ **listIpaddresses**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:18470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18470)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listnetworkadapteripaddresses"></a>

###  listNetworkAdapterIpaddresses

▸ **listNetworkAdapterIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:18485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18485)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listnetworkadaptertags"></a>

###  listNetworkAdapterTags

▸ **listNetworkAdapterTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:18500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18500)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listnetworkadapters"></a>

###  listNetworkAdapters

▸ **listNetworkAdapters**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:18514](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18514)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listnetworksubnets"></a>

###  listNetworkSubnets

▸ **listNetworkSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:18529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18529)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listnetworktags"></a>

###  listNetworkTags

▸ **listNetworkTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:18544](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18544)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listnetworks"></a>

###  listNetworks

▸ **listNetworks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:18558](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18558)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listorchestrationstackipaddresses"></a>

###  listOrchestrationStackIpaddresses

▸ **listOrchestrationStackIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:18573](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18573)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listorchestrationstacknetworkadapters"></a>

###  listOrchestrationStackNetworkAdapters

▸ **listOrchestrationStackNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:18588](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18588)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listorchestrationstacknetworks"></a>

###  listOrchestrationStackNetworks

▸ **listOrchestrationStackNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:18603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18603)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listorchestrationstacksecuritygroups"></a>

###  listOrchestrationStackSecurityGroups

▸ **listOrchestrationStackSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:18618](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18618)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listorchestrationstacksubnets"></a>

###  listOrchestrationStackSubnets

▸ **listOrchestrationStackSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:18633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18633)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listorchestrationstackvms"></a>

###  listOrchestrationStackVms

▸ **listOrchestrationStackVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:18648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18648)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listorchestrationstackvolumes"></a>

###  listOrchestrationStackVolumes

▸ **listOrchestrationStackVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:18663](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18663)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listorchestrationstacks"></a>

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:18677](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18677)*

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
<a id="listsecuritygrouptags"></a>

###  listSecurityGroupTags

▸ **listSecurityGroupTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:18692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18692)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listsecuritygroupvms"></a>

###  listSecurityGroupVms

▸ **listSecurityGroupVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:18707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18707)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsecuritygroups"></a>

###  listSecurityGroups

▸ **listSecurityGroups**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:18721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18721)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listserviceinstancenodes"></a>

###  listServiceInstanceNodes

▸ **listServiceInstanceNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:18735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18735)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listserviceinstanceserviceinstancenodes"></a>

###  listServiceInstanceServiceInstanceNodes

▸ **listServiceInstanceServiceInstanceNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:18750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18750)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listserviceinstances"></a>

###  listServiceInstances

▸ **listServiceInstances**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:18764](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18764)*

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
<a id="listserviceinventories"></a>

###  listServiceInventories

▸ **listServiceInventories**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:18778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18778)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listserviceinventorytags"></a>

###  listServiceInventoryTags

▸ **listServiceInventoryTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:18793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18793)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listserviceofferingicons"></a>

###  listServiceOfferingIcons

▸ **listServiceOfferingIcons**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)>

*Defined in [api.ts:18807](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18807)*

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
<a id="listserviceofferingnodes"></a>

###  listServiceOfferingNodes

▸ **listServiceOfferingNodes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:18821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18821)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listserviceofferingserviceinstances"></a>

###  listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:18836](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18836)*

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
<a id="listserviceofferingserviceofferingnodes"></a>

###  listServiceOfferingServiceOfferingNodes

▸ **listServiceOfferingServiceOfferingNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:18851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18851)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listserviceofferingserviceplans"></a>

###  listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:18866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18866)*

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

*Defined in [api.ts:18881](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18881)*

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

*Defined in [api.ts:18895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18895)*

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

*Defined in [api.ts:18910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18910)*

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

*Defined in [api.ts:18924](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18924)*

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

*Defined in [api.ts:18939](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18939)*

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
<a id="listsourceclusters"></a>

###  listSourceClusters

▸ **listSourceClusters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

*Defined in [api.ts:18954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18954)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ClustersCollection](../interfaces/clusterscollection.md)>

___
<a id="listsourcecontainergroups"></a>

###  listSourceContainerGroups

▸ **listSourceContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:18969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18969)*

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

*Defined in [api.ts:18984](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18984)*

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

*Defined in [api.ts:18999](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L18999)*

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

*Defined in [api.ts:19014](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19014)*

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

*Defined in [api.ts:19029](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19029)*

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

*Defined in [api.ts:19044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19044)*

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
<a id="listsourcedatastores"></a>

###  listSourceDatastores

▸ **listSourceDatastores**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

*Defined in [api.ts:19059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19059)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[DatastoresCollection](../interfaces/datastorescollection.md)>

___
<a id="listsourcehosts"></a>

###  listSourceHosts

▸ **listSourceHosts**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

*Defined in [api.ts:19074](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19074)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostsCollection](../interfaces/hostscollection.md)>

___
<a id="listsourceipaddresses"></a>

###  listSourceIpaddresses

▸ **listSourceIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19089](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19089)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsourcenetworkadapters"></a>

###  listSourceNetworkAdapters

▸ **listSourceNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19104)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsourcenetworks"></a>

###  listSourceNetworks

▸ **listSourceNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19119](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19119)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsourceorchestrationstacks"></a>

###  listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:19134](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19134)*

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
<a id="listsourceregionipaddresses"></a>

###  listSourceRegionIpaddresses

▸ **listSourceRegionIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19149)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsourceregionnetworkadapters"></a>

###  listSourceRegionNetworkAdapters

▸ **listSourceRegionNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19164](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19164)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsourceregionnetworks"></a>

###  listSourceRegionNetworks

▸ **listSourceRegionNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19179)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsourceregionorchestrationstacks"></a>

###  listSourceRegionOrchestrationStacks

▸ **listSourceRegionOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:19194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19194)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsourceregionsecuritygroups"></a>

###  listSourceRegionSecurityGroups

▸ **listSourceRegionSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19209)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsourceregionserviceinstances"></a>

###  listSourceRegionServiceInstances

▸ **listSourceRegionServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19224)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsourceregionserviceofferings"></a>

###  listSourceRegionServiceOfferings

▸ **listSourceRegionServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:19239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19239)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsourceregionserviceplans"></a>

###  listSourceRegionServicePlans

▸ **listSourceRegionServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:19254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19254)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsourceregionsubnets"></a>

###  listSourceRegionSubnets

▸ **listSourceRegionSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19269)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsourceregionvms"></a>

###  listSourceRegionVms

▸ **listSourceRegionVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19284)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsourceregionvolumes"></a>

###  listSourceRegionVolumes

▸ **listSourceRegionVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:19299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19299)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsourceregions"></a>

###  listSourceRegions

▸ **listSourceRegions**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

*Defined in [api.ts:19313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19313)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

___
<a id="listsourcesecuritygroups"></a>

###  listSourceSecurityGroups

▸ **listSourceSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19328](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19328)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsourceserviceinstancenodes"></a>

###  listSourceServiceInstanceNodes

▸ **listSourceServiceInstanceNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

*Defined in [api.ts:19343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19343)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)>

___
<a id="listsourceserviceinstances"></a>

###  listSourceServiceInstances

▸ **listSourceServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19358](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19358)*

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
<a id="listsourceserviceinventories"></a>

###  listSourceServiceInventories

▸ **listSourceServiceInventories**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:19373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19373)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listsourceserviceofferingnodes"></a>

###  listSourceServiceOfferingNodes

▸ **listSourceServiceOfferingNodes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

*Defined in [api.ts:19388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19388)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)>

___
<a id="listsourceserviceofferings"></a>

###  listSourceServiceOfferings

▸ **listSourceServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:19403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19403)*

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

*Defined in [api.ts:19418](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19418)*

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
<a id="listsourcesourceregions"></a>

###  listSourceSourceRegions

▸ **listSourceSourceRegions**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

*Defined in [api.ts:19433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19433)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SourceRegionsCollection](../interfaces/sourceregionscollection.md)>

___
<a id="listsourcesubnets"></a>

###  listSourceSubnets

▸ **listSourceSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19448)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsourcesubscriptions"></a>

###  listSourceSubscriptions

▸ **listSourceSubscriptions**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

*Defined in [api.ts:19463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19463)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

___
<a id="listsourcevms"></a>

###  listSourceVms

▸ **listSourceVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19478](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19478)*

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

*Defined in [api.ts:19493](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19493)*

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

*Defined in [api.ts:19508](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19508)*

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

*Defined in [api.ts:19522](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19522)*

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
<a id="listsubnetipaddresses"></a>

###  listSubnetIpaddresses

▸ **listSubnetIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19537](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19537)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsubnetnetworkadapters"></a>

###  listSubnetNetworkAdapters

▸ **listSubnetNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19552](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19552)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsubnettags"></a>

###  listSubnetTags

▸ **listSubnetTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:19567](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19567)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

___
<a id="listsubnets"></a>

###  listSubnets

▸ **listSubnets**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19581)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsubscriptionipaddresses"></a>

###  listSubscriptionIpaddresses

▸ **listSubscriptionIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19596)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listsubscriptionnetworkadapters"></a>

###  listSubscriptionNetworkAdapters

▸ **listSubscriptionNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19611)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listsubscriptionnetworks"></a>

###  listSubscriptionNetworks

▸ **listSubscriptionNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19626)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listsubscriptionorchestrationstacks"></a>

###  listSubscriptionOrchestrationStacks

▸ **listSubscriptionOrchestrationStacks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

*Defined in [api.ts:19641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19641)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)>

___
<a id="listsubscriptionsecuritygroups"></a>

###  listSubscriptionSecurityGroups

▸ **listSubscriptionSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19656)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listsubscriptionserviceinstances"></a>

###  listSubscriptionServiceInstances

▸ **listSubscriptionServiceInstances**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

*Defined in [api.ts:19671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19671)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)>

___
<a id="listsubscriptionserviceofferings"></a>

###  listSubscriptionServiceOfferings

▸ **listSubscriptionServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:19686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19686)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

___
<a id="listsubscriptionserviceplans"></a>

###  listSubscriptionServicePlans

▸ **listSubscriptionServicePlans**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

*Defined in [api.ts:19701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19701)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServicePlansCollection](../interfaces/serviceplanscollection.md)>

___
<a id="listsubscriptionsubnets"></a>

###  listSubscriptionSubnets

▸ **listSubscriptionSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19716](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19716)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listsubscriptionvms"></a>

###  listSubscriptionVms

▸ **listSubscriptionVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19731](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19731)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listsubscriptionvolumes"></a>

###  listSubscriptionVolumes

▸ **listSubscriptionVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:19746](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19746)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listsubscriptions"></a>

###  listSubscriptions

▸ **listSubscriptions**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

*Defined in [api.ts:19760](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19760)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubscriptionsCollection](../interfaces/subscriptionscollection.md)>

___
<a id="listtagcontainergroups"></a>

###  listTagContainerGroups

▸ **listTagContainerGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ContainerGroupsCollection](../interfaces/containergroupscollection.md)>

*Defined in [api.ts:19775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19775)*

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

*Defined in [api.ts:19790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19790)*

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

*Defined in [api.ts:19805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19805)*

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

*Defined in [api.ts:19820](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19820)*

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

*Defined in [api.ts:19835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19835)*

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
<a id="listtagipaddresses"></a>

###  listTagIpaddresses

▸ **listTagIpaddresses**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

*Defined in [api.ts:19850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19850)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[IpaddressesCollection](../interfaces/ipaddressescollection.md)>

___
<a id="listtagnetworkadapters"></a>

###  listTagNetworkAdapters

▸ **listTagNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19865)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listtagnetworks"></a>

###  listTagNetworks

▸ **listTagNetworks**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

*Defined in [api.ts:19880](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19880)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworksCollection](../interfaces/networkscollection.md)>

___
<a id="listtagsecuritygroups"></a>

###  listTagSecurityGroups

▸ **listTagSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:19895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19895)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listtagserviceinventories"></a>

###  listTagServiceInventories

▸ **listTagServiceInventories**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

*Defined in [api.ts:19910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19910)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)>

___
<a id="listtagserviceofferings"></a>

###  listTagServiceOfferings

▸ **listTagServiceOfferings**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)>

*Defined in [api.ts:19925](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19925)*

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
<a id="listtagsubnets"></a>

###  listTagSubnets

▸ **listTagSubnets**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

*Defined in [api.ts:19940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19940)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SubnetsCollection](../interfaces/subnetscollection.md)>

___
<a id="listtagvms"></a>

###  listTagVms

▸ **listTagVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:19955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19955)*

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

*Defined in [api.ts:19969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19969)*

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

*Defined in [api.ts:19983](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19983)*

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
<a id="listvmnetworkadapters"></a>

###  listVmNetworkAdapters

▸ **listVmNetworkAdapters**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

*Defined in [api.ts:19998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19998)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)>

___
<a id="listvmsecuritygroups"></a>

###  listVmSecurityGroups

▸ **listVmSecurityGroups**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

*Defined in [api.ts:20013](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20013)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)>

___
<a id="listvmtags"></a>

###  listVmTags

▸ **listVmTags**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[TagsCollection](../interfaces/tagscollection.md)>

*Defined in [api.ts:20028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20028)*

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

*Defined in [api.ts:20043](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20043)*

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

*Defined in [api.ts:20058](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20058)*

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

*Defined in [api.ts:20072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20072)*

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

*Defined in [api.ts:20086](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20086)*

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
<a id="listvolumetypevolumes"></a>

###  listVolumeTypeVolumes

▸ **listVolumeTypeVolumes**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:20101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20101)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

___
<a id="listvolumetypes"></a>

###  listVolumeTypes

▸ **listVolumeTypes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumeTypesCollection](../interfaces/volumetypescollection.md)>

*Defined in [api.ts:20115](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20115)*

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
<a id="listvolumevms"></a>

###  listVolumeVms

▸ **listVolumeVms**(id: *`string`*, limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

*Defined in [api.ts:20130](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20130)*

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
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VmsCollection](../interfaces/vmscollection.md)>

___
<a id="listvolumes"></a>

###  listVolumes

▸ **listVolumes**(limit?: *`number`*, offset?: *`number`*, filter?: *`any`*, options?: *`any`*): `AxiosPromise`<[VolumesCollection](../interfaces/volumescollection.md)>

*Defined in [api.ts:20144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20144)*

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
<a id="orderserviceoffering"></a>

###  orderServiceOffering

▸ **orderServiceOffering**(id: *`string`*, orderParametersServiceOffering: *[OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md)*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:20157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20157)*

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

*Defined in [api.ts:20170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20170)*

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

*Defined in [api.ts:20182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20182)*

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

*Defined in [api.ts:20194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20194)*

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

*Defined in [api.ts:20206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20206)*

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

*Defined in [api.ts:20218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20218)*

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

*Defined in [api.ts:20230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20230)*

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

*Defined in [api.ts:20242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20242)*

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

*Defined in [api.ts:20254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20254)*

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

*Defined in [api.ts:20266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20266)*

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

*Defined in [api.ts:20278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20278)*

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

*Defined in [api.ts:20290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20290)*

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

*Defined in [api.ts:20302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20302)*

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

*Defined in [api.ts:20314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20314)*

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

*Defined in [api.ts:20326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20326)*

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

*Defined in [api.ts:20338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20338)*

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

*Defined in [api.ts:20350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20350)*

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

*Defined in [api.ts:20362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20362)*

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

*Defined in [api.ts:20374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20374)*

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

*Defined in [api.ts:20386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20386)*

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

*Defined in [api.ts:20398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20398)*

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

*Defined in [api.ts:20410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20410)*

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

*Defined in [api.ts:20422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20422)*

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

*Defined in [api.ts:20434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20434)*

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

*Defined in [api.ts:20446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20446)*

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

*Defined in [api.ts:20458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20458)*

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

*Defined in [api.ts:20470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20470)*

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

*Defined in [api.ts:20482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20482)*

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

*Defined in [api.ts:20494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20494)*

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

*Defined in [api.ts:20506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20506)*

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

*Defined in [api.ts:20518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20518)*

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

*Defined in [api.ts:20530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20530)*

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

*Defined in [api.ts:20542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20542)*

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

*Defined in [api.ts:20554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20554)*

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

*Defined in [api.ts:20566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20566)*

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

*Defined in [api.ts:20578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20578)*

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

*Defined in [api.ts:20590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20590)*

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

*Defined in [api.ts:20603](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20603)*

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

