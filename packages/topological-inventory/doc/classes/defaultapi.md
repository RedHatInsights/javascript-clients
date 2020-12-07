[@redhat-cloud-services/topological-inventory-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#protected-axios)
* [basePath](defaultapi.md#protected-basepath)
* [configuration](defaultapi.md#protected-configuration)

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

## Constructors

###  constructor

\+ **new DefaultApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[DefaultApi](defaultapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/topological-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/topological-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/topological-inventory/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/topological-inventory/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/base.ts#L49)*

## Methods

###  appliedInventoriesForServiceOffering

▸ **appliedInventoriesForServiceOffering**(`id`: string, `appliedInventoriesParametersServicePlan`: [AppliedInventoriesParametersServicePlan](../interfaces/appliedinventoriesparametersserviceplan.md), `options?`: any): *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

*Defined in [packages/topological-inventory/api.ts:19471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19471)*

Returns a Task id

**`summary`** Invokes computing of ServiceInventories for given ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`appliedInventoriesParametersServicePlan` | [AppliedInventoriesParametersServicePlan](../interfaces/appliedinventoriesparametersserviceplan.md) | Parameters defining input data for computing inventories |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

___

###  getDocumentation

▸ **getDocumentation**(`options?`: any): *Promise‹AxiosResponse‹object››*

*Defined in [packages/topological-inventory/api.ts:19482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19482)*

**`summary`** Return this API document in JSON format

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹object››*

___

###  listClusterHosts

▸ **listClusterHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19498](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19498)*

Returns an array of Host objects

**`summary`** List Hosts for Cluster

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

___

###  listClusters

▸ **listClusters**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ClustersCollection](../interfaces/clusterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19513)*

Returns an array of Cluster objects

**`summary`** List Clusters

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ClustersCollection](../interfaces/clusterscollection.md)››*

___

###  listContainerGroupContainers

▸ **listContainerGroupContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19529)*

Returns an array of Container objects

**`summary`** List Containers for ContainerGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

___

###  listContainerGroupTags

▸ **listContainerGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19545)*

Returns an array of Tag objects

**`summary`** List Tags for ContainerGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listContainerGroups

▸ **listContainerGroups**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19560](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19560)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

___

###  listContainerImageTags

▸ **listContainerImageTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19576)*

Returns an array of Tag objects

**`summary`** List Tags for ContainerImage

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listContainerImages

▸ **listContainerImages**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19591](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19591)*

Returns an array of ContainerImage objects

**`summary`** List ContainerImages

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

___

###  listContainerNodeContainerGroups

▸ **listContainerNodeContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19607)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups for ContainerNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

___

###  listContainerNodeTags

▸ **listContainerNodeTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19623](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19623)*

Returns an array of Tag objects

**`summary`** List Tags for ContainerNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listContainerNodes

▸ **listContainerNodes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19638)*

Returns an array of ContainerNode objects

**`summary`** List ContainerNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

___

###  listContainerProjectContainerGroups

▸ **listContainerProjectContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19654)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups for ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

___

###  listContainerProjectContainerResourceQuota

▸ **listContainerProjectContainerResourceQuota**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19670](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19670)*

Returns an array of ContainerResourceQuota objects

**`summary`** List ContainerResourceQuota for ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)››*

___

###  listContainerProjectContainerTemplates

▸ **listContainerProjectContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19686)*

Returns an array of ContainerTemplate objects

**`summary`** List ContainerTemplates for ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

___

###  listContainerProjectTags

▸ **listContainerProjectTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19702)*

Returns an array of Tag objects

**`summary`** List Tags for ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listContainerProjects

▸ **listContainerProjects**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19717)*

Returns an array of ContainerProject objects

**`summary`** List ContainerProjects

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

___

###  listContainerResourceQuota

▸ **listContainerResourceQuota**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19732](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19732)*

Returns an array of ContainerResourceQuota objects

**`summary`** List ContainerResourceQuota

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)››*

___

###  listContainerTemplateTags

▸ **listContainerTemplateTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19748](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19748)*

Returns an array of Tag objects

**`summary`** List Tags for ContainerTemplate

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listContainerTemplates

▸ **listContainerTemplates**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19763)*

Returns an array of ContainerTemplate objects

**`summary`** List ContainerTemplates

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

___

###  listContainers

▸ **listContainers**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19778](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19778)*

Returns an array of Container objects

**`summary`** List Containers

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

___

###  listDatastores

▸ **listDatastores**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[DatastoresCollection](../interfaces/datastorescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19793)*

Returns an array of Datastore objects

**`summary`** List Datastores

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[DatastoresCollection](../interfaces/datastorescollection.md)››*

___

###  listFlavors

▸ **listFlavors**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[FlavorsCollection](../interfaces/flavorscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19808)*

Returns an array of Flavor objects

**`summary`** List Flavors

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[FlavorsCollection](../interfaces/flavorscollection.md)››*

___

###  listHosts

▸ **listHosts**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19823)*

Returns an array of Host objects

**`summary`** List Hosts

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

___

###  listIpaddressTags

▸ **listIpaddressTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19839)*

Returns an array of Tag objects

**`summary`** List Tags for Ipaddress

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listIpaddresses

▸ **listIpaddresses**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19854](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19854)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listNetworkAdapterIpaddresses

▸ **listNetworkAdapterIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19870)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for NetworkAdapter

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listNetworkAdapterTags

▸ **listNetworkAdapterTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19886](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19886)*

Returns an array of Tag objects

**`summary`** List Tags for NetworkAdapter

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listNetworkAdapters

▸ **listNetworkAdapters**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19901](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19901)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listNetworkSubnets

▸ **listNetworkSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19917](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19917)*

Returns an array of Subnet objects

**`summary`** List Subnets for Network

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listNetworkTags

▸ **listNetworkTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19933](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19933)*

Returns an array of Tag objects

**`summary`** List Tags for Network

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listNetworks

▸ **listNetworks**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19948)*

Returns an array of Network objects

**`summary`** List Networks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listOrchestrationStackIpaddresses

▸ **listOrchestrationStackIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19964)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listOrchestrationStackNetworkAdapters

▸ **listOrchestrationStackNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19980](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19980)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listOrchestrationStackNetworks

▸ **listOrchestrationStackNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:19996](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19996)*

Returns an array of Network objects

**`summary`** List Networks for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listOrchestrationStackSecurityGroups

▸ **listOrchestrationStackSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20012](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20012)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listOrchestrationStackSubnets

▸ **listOrchestrationStackSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20028](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20028)*

Returns an array of Subnet objects

**`summary`** List Subnets for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listOrchestrationStackVms

▸ **listOrchestrationStackVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20044)*

Returns an array of Vm objects

**`summary`** List Vms for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listOrchestrationStackVolumes

▸ **listOrchestrationStackVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20060)*

Returns an array of Volume objects

**`summary`** List Volumes for OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20075)*

Returns an array of OrchestrationStack objects

**`summary`** List OrchestrationStacks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

___

###  listSecurityGroupTags

▸ **listSecurityGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20091](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20091)*

Returns an array of Tag objects

**`summary`** List Tags for SecurityGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listSecurityGroupVms

▸ **listSecurityGroupVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20107)*

Returns an array of Vm objects

**`summary`** List Vms for SecurityGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listSecurityGroups

▸ **listSecurityGroups**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20122](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20122)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listServiceInstanceNodes

▸ **listServiceInstanceNodes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20137)*

Returns an array of ServiceInstanceNode objects

**`summary`** List ServiceInstanceNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

___

###  listServiceInstanceServiceInstanceNodes

▸ **listServiceInstanceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20153](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20153)*

Returns an array of ServiceInstanceNode objects

**`summary`** List ServiceInstanceNodes for ServiceInstance

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

___

###  listServiceInstances

▸ **listServiceInstances**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20168)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listServiceInventories

▸ **listServiceInventories**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20183](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20183)*

Returns an array of ServiceInventory objects

**`summary`** List ServiceInventories

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

___

###  listServiceInventoryTags

▸ **listServiceInventoryTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20199](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20199)*

Returns an array of Tag objects

**`summary`** List Tags for ServiceInventory

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listServiceOfferingIcons

▸ **listServiceOfferingIcons**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20214)*

Returns an array of ServiceOfferingIcon objects

**`summary`** List ServiceOfferingIcons

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)››*

___

###  listServiceOfferingNodes

▸ **listServiceOfferingNodes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20229](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20229)*

Returns an array of ServiceOfferingNode objects

**`summary`** List ServiceOfferingNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

___

###  listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20245)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances for ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listServiceOfferingServiceOfferingNodes

▸ **listServiceOfferingServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20261)*

Returns an array of ServiceOfferingNode objects

**`summary`** List ServiceOfferingNodes for ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

___

###  listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20277)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans for ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

___

###  listServiceOfferingTags

▸ **listServiceOfferingTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20293)*

Returns an array of Tag objects

**`summary`** List Tags for ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listServiceOfferings

▸ **listServiceOfferings**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20308)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

___

###  listServicePlanServiceInstances

▸ **listServicePlanServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20324)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances for ServicePlan

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listServicePlans

▸ **listServicePlans**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20339)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

___

###  listSourceAvailabilities

▸ **listSourceAvailabilities**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20355)*

Returns an array of Availability objects

**`summary`** List Availabilities for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)››*

___

###  listSourceClusters

▸ **listSourceClusters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ClustersCollection](../interfaces/clusterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20371](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20371)*

Returns an array of Cluster objects

**`summary`** List Clusters for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ClustersCollection](../interfaces/clusterscollection.md)››*

___

###  listSourceContainerGroups

▸ **listSourceContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20387](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20387)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

___

###  listSourceContainerImages

▸ **listSourceContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20403)*

Returns an array of ContainerImage objects

**`summary`** List ContainerImages for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

___

###  listSourceContainerNodes

▸ **listSourceContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20419](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20419)*

Returns an array of ContainerNode objects

**`summary`** List ContainerNodes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

___

###  listSourceContainerProjects

▸ **listSourceContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20435)*

Returns an array of ContainerProject objects

**`summary`** List ContainerProjects for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

___

###  listSourceContainerTemplates

▸ **listSourceContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20451](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20451)*

Returns an array of ContainerTemplate objects

**`summary`** List ContainerTemplates for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

___

###  listSourceContainers

▸ **listSourceContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20467](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20467)*

Returns an array of Container objects

**`summary`** List Containers for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainersCollection](../interfaces/containerscollection.md)››*

___

###  listSourceDatastores

▸ **listSourceDatastores**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[DatastoresCollection](../interfaces/datastorescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20483)*

Returns an array of Datastore objects

**`summary`** List Datastores for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[DatastoresCollection](../interfaces/datastorescollection.md)››*

___

###  listSourceHosts

▸ **listSourceHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20499](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20499)*

Returns an array of Host objects

**`summary`** List Hosts for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[HostsCollection](../interfaces/hostscollection.md)››*

___

###  listSourceIpaddresses

▸ **listSourceIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20515)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listSourceNetworkAdapters

▸ **listSourceNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20531)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listSourceNetworks

▸ **listSourceNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20547)*

Returns an array of Network objects

**`summary`** List Networks for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20563)*

Returns an array of OrchestrationStack objects

**`summary`** List OrchestrationStacks for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

___

###  listSourceRegionIpaddresses

▸ **listSourceRegionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20579)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listSourceRegionNetworkAdapters

▸ **listSourceRegionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20595)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listSourceRegionNetworks

▸ **listSourceRegionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20611)*

Returns an array of Network objects

**`summary`** List Networks for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listSourceRegionOrchestrationStacks

▸ **listSourceRegionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20627)*

Returns an array of OrchestrationStack objects

**`summary`** List OrchestrationStacks for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

___

###  listSourceRegionSecurityGroups

▸ **listSourceRegionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20643)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listSourceRegionServiceInstances

▸ **listSourceRegionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20659)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listSourceRegionServiceOfferings

▸ **listSourceRegionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20675)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

___

###  listSourceRegionServicePlans

▸ **listSourceRegionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20691)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

___

###  listSourceRegionSubnets

▸ **listSourceRegionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20707](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20707)*

Returns an array of Subnet objects

**`summary`** List Subnets for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listSourceRegionVms

▸ **listSourceRegionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20723)*

Returns an array of Vm objects

**`summary`** List Vms for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listSourceRegionVolumes

▸ **listSourceRegionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20739)*

Returns an array of Volume objects

**`summary`** List Volumes for SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listSourceRegions

▸ **listSourceRegions**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20754](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20754)*

Returns an array of SourceRegion objects

**`summary`** List SourceRegions

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)››*

___

###  listSourceSecurityGroups

▸ **listSourceSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20770)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listSourceServiceInstanceNodes

▸ **listSourceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20786)*

Returns an array of ServiceInstanceNode objects

**`summary`** List ServiceInstanceNodes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)››*

___

###  listSourceServiceInstances

▸ **listSourceServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20802)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listSourceServiceInventories

▸ **listSourceServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20818)*

Returns an array of ServiceInventory objects

**`summary`** List ServiceInventories for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

___

###  listSourceServiceOfferingNodes

▸ **listSourceServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20834)*

Returns an array of ServiceOfferingNode objects

**`summary`** List ServiceOfferingNodes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)››*

___

###  listSourceServiceOfferings

▸ **listSourceServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20850](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20850)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

___

###  listSourceServicePlans

▸ **listSourceServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20866](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20866)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

___

###  listSourceSourceRegions

▸ **listSourceSourceRegions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20882)*

Returns an array of SourceRegion objects

**`summary`** List SourceRegions for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)››*

___

###  listSourceSubnets

▸ **listSourceSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20898](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20898)*

Returns an array of Subnet objects

**`summary`** List Subnets for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listSourceSubscriptions

▸ **listSourceSubscriptions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20914](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20914)*

Returns an array of Subscription objects

**`summary`** List Subscriptions for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)››*

___

###  listSourceVms

▸ **listSourceVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20930](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20930)*

Returns an array of Vm objects

**`summary`** List Vms for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listSourceVolumeTypes

▸ **listSourceVolumeTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20946](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20946)*

Returns an array of VolumeType objects

**`summary`** List VolumeTypes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)››*

___

###  listSourceVolumes

▸ **listSourceVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20962)*

Returns an array of Volume objects

**`summary`** List Volumes for Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listSources

▸ **listSources**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20977](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20977)*

Returns an array of Source objects

**`summary`** List Sources

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SourcesCollection](../interfaces/sourcescollection.md)››*

___

###  listSubnetIpaddresses

▸ **listSubnetIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:20993](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20993)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for Subnet

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listSubnetNetworkAdapters

▸ **listSubnetNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21009](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21009)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for Subnet

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listSubnetTags

▸ **listSubnetTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21025](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21025)*

Returns an array of Tag objects

**`summary`** List Tags for Subnet

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listSubnets

▸ **listSubnets**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21040](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21040)*

Returns an array of Subnet objects

**`summary`** List Subnets

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listSubscriptionIpaddresses

▸ **listSubscriptionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21056](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21056)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listSubscriptionNetworkAdapters

▸ **listSubscriptionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21072)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listSubscriptionNetworks

▸ **listSubscriptionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21088](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21088)*

Returns an array of Network objects

**`summary`** List Networks for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listSubscriptionOrchestrationStacks

▸ **listSubscriptionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21104](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21104)*

Returns an array of OrchestrationStack objects

**`summary`** List OrchestrationStacks for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)››*

___

###  listSubscriptionSecurityGroups

▸ **listSubscriptionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21120](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21120)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listSubscriptionServiceInstances

▸ **listSubscriptionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21136](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21136)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)››*

___

###  listSubscriptionServiceOfferings

▸ **listSubscriptionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21152](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21152)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

___

###  listSubscriptionServicePlans

▸ **listSubscriptionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21168](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21168)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)››*

___

###  listSubscriptionSubnets

▸ **listSubscriptionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21184)*

Returns an array of Subnet objects

**`summary`** List Subnets for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listSubscriptionVms

▸ **listSubscriptionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21200)*

Returns an array of Vm objects

**`summary`** List Vms for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listSubscriptionVolumes

▸ **listSubscriptionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21216](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21216)*

Returns an array of Volume objects

**`summary`** List Volumes for Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listSubscriptions

▸ **listSubscriptions**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21231)*

Returns an array of Subscription objects

**`summary`** List Subscriptions

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)››*

___

###  listTagContainerGroups

▸ **listTagContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21247)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)››*

___

###  listTagContainerImages

▸ **listTagContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21263)*

Returns an array of ContainerImage objects

**`summary`** List ContainerImages for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)››*

___

###  listTagContainerNodes

▸ **listTagContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21279)*

Returns an array of ContainerNode objects

**`summary`** List ContainerNodes for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerNodesCollection](../interfaces/containernodescollection.md)››*

___

###  listTagContainerProjects

▸ **listTagContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21295)*

Returns an array of ContainerProject objects

**`summary`** List ContainerProjects for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)››*

___

###  listTagContainerTemplates

▸ **listTagContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21311)*

Returns an array of ContainerTemplate objects

**`summary`** List ContainerTemplates for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)››*

___

###  listTagIpaddresses

▸ **listTagIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21327)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)››*

___

###  listTagNetworkAdapters

▸ **listTagNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21343](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21343)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listTagNetworks

▸ **listTagNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21359)*

Returns an array of Network objects

**`summary`** List Networks for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworksCollection](../interfaces/networkscollection.md)››*

___

###  listTagSecurityGroups

▸ **listTagSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21375](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21375)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listTagServiceInventories

▸ **listTagServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21391)*

Returns an array of ServiceInventory objects

**`summary`** List ServiceInventories for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)››*

___

###  listTagServiceOfferings

▸ **listTagServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21407)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)››*

___

###  listTagSubnets

▸ **listTagSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21423)*

Returns an array of Subnet objects

**`summary`** List Subnets for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SubnetsCollection](../interfaces/subnetscollection.md)››*

___

###  listTagVms

▸ **listTagVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21439](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21439)*

Returns an array of Vm objects

**`summary`** List Vms for Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listTags

▸ **listTags**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21454)*

Returns an array of Tag objects

**`summary`** List Tags

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listTasks

▸ **listTasks**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TasksCollection](../interfaces/taskscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21469)*

Returns an array of Task objects

**`summary`** List Tasks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[TasksCollection](../interfaces/taskscollection.md)››*

___

###  listVmNetworkAdapters

▸ **listVmNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21485)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters for Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)››*

___

###  listVmSecurityGroups

▸ **listVmSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21501)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups for Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)››*

___

###  listVmTags

▸ **listVmTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21517](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21517)*

Returns an array of Tag objects

**`summary`** List Tags for Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[TagsCollection](../interfaces/tagscollection.md)››*

___

###  listVmVolumeAttachments

▸ **listVmVolumeAttachments**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21533)*

Returns an array of VolumeAttachment objects

**`summary`** List VolumeAttachments for Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)››*

___

###  listVmVolumes

▸ **listVmVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21549](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21549)*

Returns an array of Volume objects

**`summary`** List Volumes for Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listVms

▸ **listVms**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21564](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21564)*

Returns an array of Vm objects

**`summary`** List Vms

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listVolumeAttachments

▸ **listVolumeAttachments**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21579)*

Returns an array of VolumeAttachment objects

**`summary`** List VolumeAttachments

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)››*

___

###  listVolumeTypeVolumes

▸ **listVolumeTypeVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21595)*

Returns an array of Volume objects

**`summary`** List Volumes for VolumeType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  listVolumeTypes

▸ **listVolumeTypes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21610](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21610)*

Returns an array of VolumeType objects

**`summary`** List VolumeTypes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)››*

___

###  listVolumeVms

▸ **listVolumeVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21626)*

Returns an array of Vm objects

**`summary`** List Vms for Volume

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`limit?` | number | - |
`offset?` | number | - |
`filter?` | object | - |
`sortBy?` | string &#124; Array‹string› | - |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VmsCollection](../interfaces/vmscollection.md)››*

___

###  listVolumes

▸ **listVolumes**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string | Array‹string›, `options?`: any): *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

*Defined in [packages/topological-inventory/api.ts:21641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21641)*

Returns an array of Volume objects

**`summary`** List Volumes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string &#124; Array‹string› |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[VolumesCollection](../interfaces/volumescollection.md)››*

___

###  orderServiceOffering

▸ **orderServiceOffering**(`id`: string, `orderParametersServiceOffering`: [OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md), `options?`: any): *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

*Defined in [packages/topological-inventory/api.ts:21654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21654)*

Returns a Task id

**`summary`** Order an existing ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderParametersServiceOffering` | [OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md) | Order parameters defining the service and provider control |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

___

###  orderServicePlan

▸ **orderServicePlan**(`id`: string, `orderParametersServicePlan`: [OrderParametersServicePlan](../interfaces/orderparametersserviceplan.md), `options?`: any): *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

*Defined in [packages/topological-inventory/api.ts:21667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21667)*

Returns a Task id

**`summary`** Order an existing ServicePlan

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`orderParametersServicePlan` | [OrderParametersServicePlan](../interfaces/orderparametersserviceplan.md) | Order parameters defining the service and provider control |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[InlineResponse200](../interfaces/inlineresponse200.md)››*

___

###  postGraphQL

▸ **postGraphQL**(`graphQLRequest`: [GraphQLRequest](../interfaces/graphqlrequest.md), `options?`: any): *Promise‹AxiosResponse‹[GraphQLResponse](../interfaces/graphqlresponse.md)››*

*Defined in [packages/topological-inventory/api.ts:21679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21679)*

Performs a GraphQL Query

**`summary`** Perform a GraphQL Query

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphQLRequest` | [GraphQLRequest](../interfaces/graphqlrequest.md) | GraphQL Query Request |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[GraphQLResponse](../interfaces/graphqlresponse.md)››*

___

###  showCluster

▸ **showCluster**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Cluster](../interfaces/cluster.md)››*

*Defined in [packages/topological-inventory/api.ts:21691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21691)*

Returns a Cluster object

**`summary`** Show an existing Cluster

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Cluster](../interfaces/cluster.md)››*

___

###  showContainer

▸ **showContainer**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Container](../interfaces/container.md)››*

*Defined in [packages/topological-inventory/api.ts:21703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21703)*

Returns a Container object

**`summary`** Show an existing Container

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Container](../interfaces/container.md)››*

___

###  showContainerGroup

▸ **showContainerGroup**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerGroup](../interfaces/containergroup.md)››*

*Defined in [packages/topological-inventory/api.ts:21715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21715)*

Returns a ContainerGroup object

**`summary`** Show an existing ContainerGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerGroup](../interfaces/containergroup.md)››*

___

###  showContainerImage

▸ **showContainerImage**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerImage](../interfaces/containerimage.md)››*

*Defined in [packages/topological-inventory/api.ts:21727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21727)*

Returns a ContainerImage object

**`summary`** Show an existing ContainerImage

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerImage](../interfaces/containerimage.md)››*

___

###  showContainerNode

▸ **showContainerNode**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerNode](../interfaces/containernode.md)››*

*Defined in [packages/topological-inventory/api.ts:21739](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21739)*

Returns a ContainerNode object

**`summary`** Show an existing ContainerNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerNode](../interfaces/containernode.md)››*

___

###  showContainerProject

▸ **showContainerProject**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerProject](../interfaces/containerproject.md)››*

*Defined in [packages/topological-inventory/api.ts:21751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21751)*

Returns a ContainerProject object

**`summary`** Show an existing ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerProject](../interfaces/containerproject.md)››*

___

###  showContainerResourceQuota

▸ **showContainerResourceQuota**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerResourceQuota](../interfaces/containerresourcequota.md)››*

*Defined in [packages/topological-inventory/api.ts:21763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21763)*

Returns a ContainerResourceQuota object

**`summary`** Show an existing ContainerResourceQuota

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerResourceQuota](../interfaces/containerresourcequota.md)››*

___

###  showContainerTemplate

▸ **showContainerTemplate**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ContainerTemplate](../interfaces/containertemplate.md)››*

*Defined in [packages/topological-inventory/api.ts:21775](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21775)*

Returns a ContainerTemplate object

**`summary`** Show an existing ContainerTemplate

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ContainerTemplate](../interfaces/containertemplate.md)››*

___

###  showDatastore

▸ **showDatastore**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Datastore](../interfaces/datastore.md)››*

*Defined in [packages/topological-inventory/api.ts:21787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21787)*

Returns a Datastore object

**`summary`** Show an existing Datastore

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Datastore](../interfaces/datastore.md)››*

___

###  showFlavor

▸ **showFlavor**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Flavor](../interfaces/flavor.md)››*

*Defined in [packages/topological-inventory/api.ts:21799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21799)*

Returns a Flavor object

**`summary`** Show an existing Flavor

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Flavor](../interfaces/flavor.md)››*

___

###  showHost

▸ **showHost**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Host](../interfaces/host.md)››*

*Defined in [packages/topological-inventory/api.ts:21811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21811)*

Returns a Host object

**`summary`** Show an existing Host

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Host](../interfaces/host.md)››*

___

###  showIpaddress

▸ **showIpaddress**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Ipaddress](../interfaces/ipaddress.md)››*

*Defined in [packages/topological-inventory/api.ts:21823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21823)*

Returns a Ipaddress object

**`summary`** Show an existing Ipaddress

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Ipaddress](../interfaces/ipaddress.md)››*

___

###  showNetwork

▸ **showNetwork**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Network](../interfaces/network.md)››*

*Defined in [packages/topological-inventory/api.ts:21835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21835)*

Returns a Network object

**`summary`** Show an existing Network

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Network](../interfaces/network.md)››*

___

###  showNetworkAdapter

▸ **showNetworkAdapter**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[NetworkAdapter](../interfaces/networkadapter.md)››*

*Defined in [packages/topological-inventory/api.ts:21847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21847)*

Returns a NetworkAdapter object

**`summary`** Show an existing NetworkAdapter

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[NetworkAdapter](../interfaces/networkadapter.md)››*

___

###  showOrchestrationStack

▸ **showOrchestrationStack**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[OrchestrationStack](../interfaces/orchestrationstack.md)››*

*Defined in [packages/topological-inventory/api.ts:21859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21859)*

Returns a OrchestrationStack object

**`summary`** Show an existing OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[OrchestrationStack](../interfaces/orchestrationstack.md)››*

___

###  showSecurityGroup

▸ **showSecurityGroup**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[SecurityGroup](../interfaces/securitygroup.md)››*

*Defined in [packages/topological-inventory/api.ts:21871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21871)*

Returns a SecurityGroup object

**`summary`** Show an existing SecurityGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SecurityGroup](../interfaces/securitygroup.md)››*

___

###  showServiceInstance

▸ **showServiceInstance**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstance](../interfaces/serviceinstance.md)››*

*Defined in [packages/topological-inventory/api.ts:21883](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21883)*

Returns a ServiceInstance object

**`summary`** Show an existing ServiceInstance

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstance](../interfaces/serviceinstance.md)››*

___

###  showServiceInstanceNode

▸ **showServiceInstanceNode**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceInstanceNode](../interfaces/serviceinstancenode.md)››*

*Defined in [packages/topological-inventory/api.ts:21895](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21895)*

Returns a ServiceInstanceNode object

**`summary`** Show an existing ServiceInstanceNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInstanceNode](../interfaces/serviceinstancenode.md)››*

___

###  showServiceInventory

▸ **showServiceInventory**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceInventory](../interfaces/serviceinventory.md)››*

*Defined in [packages/topological-inventory/api.ts:21907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21907)*

Returns a ServiceInventory object

**`summary`** Show an existing ServiceInventory

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceInventory](../interfaces/serviceinventory.md)››*

___

###  showServiceOffering

▸ **showServiceOffering**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceOffering](../interfaces/serviceoffering.md)››*

*Defined in [packages/topological-inventory/api.ts:21919](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21919)*

Returns a ServiceOffering object

**`summary`** Show an existing ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOffering](../interfaces/serviceoffering.md)››*

___

###  showServiceOfferingIcon

▸ **showServiceOfferingIcon**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)››*

*Defined in [packages/topological-inventory/api.ts:21931](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21931)*

Returns a ServiceOfferingIcon object

**`summary`** Show an existing ServiceOfferingIcon

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)››*

___

###  showServiceOfferingIconIconData

▸ **showServiceOfferingIconIconData**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/topological-inventory/api.ts:21943](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21943)*

Returns a ServiceOfferingIcon IconData

**`summary`** Show an existing ServiceOfferingIcon IconData

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  showServiceOfferingNode

▸ **showServiceOfferingNode**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServiceOfferingNode](../interfaces/serviceofferingnode.md)››*

*Defined in [packages/topological-inventory/api.ts:21955](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21955)*

Returns a ServiceOfferingNode object

**`summary`** Show an existing ServiceOfferingNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServiceOfferingNode](../interfaces/serviceofferingnode.md)››*

___

###  showServicePlan

▸ **showServicePlan**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

*Defined in [packages/topological-inventory/api.ts:21967](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21967)*

Returns a ServicePlan object

**`summary`** Show an existing ServicePlan

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[ServicePlan](../interfaces/serviceplan.md)››*

___

###  showSource

▸ **showSource**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

*Defined in [packages/topological-inventory/api.ts:21979](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21979)*

Returns a Source object

**`summary`** Show an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Source](../interfaces/source.md)››*

___

###  showSourceRegion

▸ **showSourceRegion**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[SourceRegion](../interfaces/sourceregion.md)››*

*Defined in [packages/topological-inventory/api.ts:21991](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21991)*

Returns a SourceRegion object

**`summary`** Show an existing SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[SourceRegion](../interfaces/sourceregion.md)››*

___

###  showSubnet

▸ **showSubnet**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Subnet](../interfaces/subnet.md)››*

*Defined in [packages/topological-inventory/api.ts:22003](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22003)*

Returns a Subnet object

**`summary`** Show an existing Subnet

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Subnet](../interfaces/subnet.md)››*

___

###  showSubscription

▸ **showSubscription**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Subscription](../interfaces/subscription.md)››*

*Defined in [packages/topological-inventory/api.ts:22015](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22015)*

Returns a Subscription object

**`summary`** Show an existing Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Subscription](../interfaces/subscription.md)››*

___

###  showTag

▸ **showTag**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Tag](../interfaces/tag.md)››*

*Defined in [packages/topological-inventory/api.ts:22027](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22027)*

Returns a Tag object

**`summary`** Show an existing Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Tag](../interfaces/tag.md)››*

___

###  showTask

▸ **showTask**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Task](../interfaces/task.md)››*

*Defined in [packages/topological-inventory/api.ts:22039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22039)*

Returns a Task object

**`summary`** Show an existing Task

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Task](../interfaces/task.md)››*

___

###  showVm

▸ **showVm**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Vm](../interfaces/vm.md)››*

*Defined in [packages/topological-inventory/api.ts:22051](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22051)*

Returns a Vm object

**`summary`** Show an existing Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Vm](../interfaces/vm.md)››*

___

###  showVolume

▸ **showVolume**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[Volume](../interfaces/volume.md)››*

*Defined in [packages/topological-inventory/api.ts:22063](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22063)*

Returns a Volume object

**`summary`** Show an existing Volume

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[Volume](../interfaces/volume.md)››*

___

###  showVolumeAttachment

▸ **showVolumeAttachment**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[VolumeAttachment](../interfaces/volumeattachment.md)››*

*Defined in [packages/topological-inventory/api.ts:22075](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22075)*

Returns a VolumeAttachment object

**`summary`** Show an existing VolumeAttachment

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumeAttachment](../interfaces/volumeattachment.md)››*

___

###  showVolumeType

▸ **showVolumeType**(`id`: string, `options?`: any): *Promise‹AxiosResponse‹[VolumeType](../interfaces/volumetype.md)››*

*Defined in [packages/topological-inventory/api.ts:22087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22087)*

Returns a VolumeType object

**`summary`** Show an existing VolumeType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹[VolumeType](../interfaces/volumetype.md)››*

___

###  updateTask

▸ **updateTask**(`id`: string, `task`: [Task](../interfaces/task.md), `options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/topological-inventory/api.ts:22100](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L22100)*

Updates a Task object

**`summary`** Update an existing Task

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`task` | [Task](../interfaces/task.md) | Task attributes to update |
`options?` | any | - |

**Returns:** *Promise‹AxiosResponse‹void››*
