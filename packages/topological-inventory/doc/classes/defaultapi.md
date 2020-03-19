[@redhat-cloud-services/topological-inventory-client](../README.md) › [Globals](../globals.md) › [DefaultApi](defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

**`export`** 

**`class`** DefaultApi

**`extends`** {BaseAPI}

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

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[DefaultApi](defaultapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L49)*

## Methods

###  appliedInventoriesForServiceOffering

▸ **appliedInventoriesForServiceOffering**(`id`: string, `appliedInventoriesParametersServicePlan`: [AppliedInventoriesParametersServicePlan](../interfaces/appliedinventoriesparametersserviceplan.md), `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [api.ts:19070](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19070)*

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

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  getDocumentation

▸ **getDocumentation**(`options?`: any): *AxiosPromise‹any›*

*Defined in [api.ts:19081](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19081)*

**`summary`** Return this API document in JSON format

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *AxiosPromise‹any›*

___

###  listClusterHosts

▸ **listClusterHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

*Defined in [api.ts:19097](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19097)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

___

###  listClusters

▸ **listClusters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ClustersCollection](../interfaces/clusterscollection.md)›*

*Defined in [api.ts:19112](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19112)*

Returns an array of Cluster objects

**`summary`** List Clusters

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ClustersCollection](../interfaces/clusterscollection.md)›*

___

###  listContainerGroupContainers

▸ **listContainerGroupContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

*Defined in [api.ts:19128](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19128)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

___

###  listContainerGroupTags

▸ **listContainerGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19144](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19144)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listContainerGroups

▸ **listContainerGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

*Defined in [api.ts:19159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19159)*

Returns an array of ContainerGroup objects

**`summary`** List ContainerGroups

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

___

###  listContainerImageTags

▸ **listContainerImageTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19175)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listContainerImages

▸ **listContainerImages**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

*Defined in [api.ts:19190](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19190)*

Returns an array of ContainerImage objects

**`summary`** List ContainerImages

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

___

###  listContainerNodeContainerGroups

▸ **listContainerNodeContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

*Defined in [api.ts:19206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19206)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

___

###  listContainerNodeTags

▸ **listContainerNodeTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19222)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listContainerNodes

▸ **listContainerNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

*Defined in [api.ts:19237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19237)*

Returns an array of ContainerNode objects

**`summary`** List ContainerNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

___

###  listContainerProjectContainerGroups

▸ **listContainerProjectContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

*Defined in [api.ts:19253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19253)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

___

###  listContainerProjectContainerResourceQuota

▸ **listContainerProjectContainerResourceQuota**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)›*

*Defined in [api.ts:19269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19269)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)›*

___

###  listContainerProjectContainerTemplates

▸ **listContainerProjectContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

*Defined in [api.ts:19285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19285)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

___

###  listContainerProjectTags

▸ **listContainerProjectTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19301](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19301)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listContainerProjects

▸ **listContainerProjects**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

*Defined in [api.ts:19316](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19316)*

Returns an array of ContainerProject objects

**`summary`** List ContainerProjects

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

___

###  listContainerResourceQuota

▸ **listContainerResourceQuota**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)›*

*Defined in [api.ts:19331](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19331)*

Returns an array of ContainerResourceQuota objects

**`summary`** List ContainerResourceQuota

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerResourceQuotaCollection](../interfaces/containerresourcequotacollection.md)›*

___

###  listContainerTemplateTags

▸ **listContainerTemplateTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19347)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listContainerTemplates

▸ **listContainerTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

*Defined in [api.ts:19362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19362)*

Returns an array of ContainerTemplate objects

**`summary`** List ContainerTemplates

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

___

###  listContainers

▸ **listContainers**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

*Defined in [api.ts:19377](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19377)*

Returns an array of Container objects

**`summary`** List Containers

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

___

###  listDatastores

▸ **listDatastores**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[DatastoresCollection](../interfaces/datastorescollection.md)›*

*Defined in [api.ts:19392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19392)*

Returns an array of Datastore objects

**`summary`** List Datastores

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[DatastoresCollection](../interfaces/datastorescollection.md)›*

___

###  listFlavors

▸ **listFlavors**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[FlavorsCollection](../interfaces/flavorscollection.md)›*

*Defined in [api.ts:19407](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19407)*

Returns an array of Flavor objects

**`summary`** List Flavors

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[FlavorsCollection](../interfaces/flavorscollection.md)›*

___

###  listHosts

▸ **listHosts**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

*Defined in [api.ts:19422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19422)*

Returns an array of Host objects

**`summary`** List Hosts

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

___

###  listIpaddressTags

▸ **listIpaddressTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19438](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19438)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listIpaddresses

▸ **listIpaddresses**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:19453](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19453)*

Returns an array of Ipaddress objects

**`summary`** List Ipaddresses

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listNetworkAdapterIpaddresses

▸ **listNetworkAdapterIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:19469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19469)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listNetworkAdapterTags

▸ **listNetworkAdapterTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19485](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19485)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listNetworkAdapters

▸ **listNetworkAdapters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:19500](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19500)*

Returns an array of NetworkAdapter objects

**`summary`** List NetworkAdapters

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listNetworkSubnets

▸ **listNetworkSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:19516](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19516)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listNetworkTags

▸ **listNetworkTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19532](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19532)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listNetworks

▸ **listNetworks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:19547](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19547)*

Returns an array of Network objects

**`summary`** List Networks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listOrchestrationStackIpaddresses

▸ **listOrchestrationStackIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:19563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19563)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listOrchestrationStackNetworkAdapters

▸ **listOrchestrationStackNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:19579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19579)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listOrchestrationStackNetworks

▸ **listOrchestrationStackNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:19595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19595)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listOrchestrationStackSecurityGroups

▸ **listOrchestrationStackSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:19611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19611)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listOrchestrationStackSubnets

▸ **listOrchestrationStackSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:19627](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19627)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listOrchestrationStackVms

▸ **listOrchestrationStackVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:19643](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19643)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listOrchestrationStackVolumes

▸ **listOrchestrationStackVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:19659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19659)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listOrchestrationStacks

▸ **listOrchestrationStacks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

*Defined in [api.ts:19674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19674)*

Returns an array of OrchestrationStack objects

**`summary`** List OrchestrationStacks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

___

###  listSecurityGroupTags

▸ **listSecurityGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19690)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listSecurityGroupVms

▸ **listSecurityGroupVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:19706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19706)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listSecurityGroups

▸ **listSecurityGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:19721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19721)*

Returns an array of SecurityGroup objects

**`summary`** List SecurityGroups

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listServiceInstanceNodes

▸ **listServiceInstanceNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

*Defined in [api.ts:19736](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19736)*

Returns an array of ServiceInstanceNode objects

**`summary`** List ServiceInstanceNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

___

###  listServiceInstanceServiceInstanceNodes

▸ **listServiceInstanceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

*Defined in [api.ts:19752](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19752)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

___

###  listServiceInstances

▸ **listServiceInstances**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:19767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19767)*

Returns an array of ServiceInstance objects

**`summary`** List ServiceInstances

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listServiceInventories

▸ **listServiceInventories**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

*Defined in [api.ts:19782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19782)*

Returns an array of ServiceInventory objects

**`summary`** List ServiceInventories

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

___

###  listServiceInventoryTags

▸ **listServiceInventoryTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19798](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19798)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listServiceOfferingIcons

▸ **listServiceOfferingIcons**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)›*

*Defined in [api.ts:19813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19813)*

Returns an array of ServiceOfferingIcon objects

**`summary`** List ServiceOfferingIcons

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceOfferingIconsCollection](../interfaces/serviceofferingiconscollection.md)›*

___

###  listServiceOfferingNodes

▸ **listServiceOfferingNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

*Defined in [api.ts:19828](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19828)*

Returns an array of ServiceOfferingNode objects

**`summary`** List ServiceOfferingNodes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

___

###  listServiceOfferingServiceInstances

▸ **listServiceOfferingServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:19844](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19844)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listServiceOfferingServiceOfferingNodes

▸ **listServiceOfferingServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

*Defined in [api.ts:19860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19860)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

___

###  listServiceOfferingServicePlans

▸ **listServiceOfferingServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

*Defined in [api.ts:19876](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19876)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

___

###  listServiceOfferingTags

▸ **listServiceOfferingTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:19892](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19892)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listServiceOfferings

▸ **listServiceOfferings**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

*Defined in [api.ts:19907](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19907)*

Returns an array of ServiceOffering objects

**`summary`** List ServiceOfferings

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

___

###  listServicePlanServiceInstances

▸ **listServicePlanServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:19923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19923)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listServicePlans

▸ **listServicePlans**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

*Defined in [api.ts:19938](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19938)*

Returns an array of ServicePlan objects

**`summary`** List ServicePlans

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

___

###  listSourceAvailabilities

▸ **listSourceAvailabilities**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)›*

*Defined in [api.ts:19954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19954)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[AvailabilitiesCollection](../interfaces/availabilitiescollection.md)›*

___

###  listSourceClusters

▸ **listSourceClusters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ClustersCollection](../interfaces/clusterscollection.md)›*

*Defined in [api.ts:19970](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19970)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ClustersCollection](../interfaces/clusterscollection.md)›*

___

###  listSourceContainerGroups

▸ **listSourceContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

*Defined in [api.ts:19986](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L19986)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

___

###  listSourceContainerImages

▸ **listSourceContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

*Defined in [api.ts:20002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20002)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

___

###  listSourceContainerNodes

▸ **listSourceContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

*Defined in [api.ts:20018](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20018)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

___

###  listSourceContainerProjects

▸ **listSourceContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

*Defined in [api.ts:20034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20034)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

___

###  listSourceContainerTemplates

▸ **listSourceContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

*Defined in [api.ts:20050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20050)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

___

###  listSourceContainers

▸ **listSourceContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

*Defined in [api.ts:20066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20066)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainersCollection](../interfaces/containerscollection.md)›*

___

###  listSourceDatastores

▸ **listSourceDatastores**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[DatastoresCollection](../interfaces/datastorescollection.md)›*

*Defined in [api.ts:20082](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20082)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[DatastoresCollection](../interfaces/datastorescollection.md)›*

___

###  listSourceHosts

▸ **listSourceHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

*Defined in [api.ts:20098](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20098)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[HostsCollection](../interfaces/hostscollection.md)›*

___

###  listSourceIpaddresses

▸ **listSourceIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:20114](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20114)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listSourceNetworkAdapters

▸ **listSourceNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:20130](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20130)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listSourceNetworks

▸ **listSourceNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:20146](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20146)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listSourceOrchestrationStacks

▸ **listSourceOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

*Defined in [api.ts:20162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20162)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

___

###  listSourceRegionIpaddresses

▸ **listSourceRegionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:20178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20178)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listSourceRegionNetworkAdapters

▸ **listSourceRegionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:20194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20194)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listSourceRegionNetworks

▸ **listSourceRegionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:20210](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20210)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listSourceRegionOrchestrationStacks

▸ **listSourceRegionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

*Defined in [api.ts:20226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20226)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

___

###  listSourceRegionSecurityGroups

▸ **listSourceRegionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:20242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20242)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listSourceRegionServiceInstances

▸ **listSourceRegionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:20258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20258)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listSourceRegionServiceOfferings

▸ **listSourceRegionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

*Defined in [api.ts:20274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20274)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

___

###  listSourceRegionServicePlans

▸ **listSourceRegionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

*Defined in [api.ts:20290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20290)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

___

###  listSourceRegionSubnets

▸ **listSourceRegionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:20306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20306)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listSourceRegionVms

▸ **listSourceRegionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:20322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20322)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listSourceRegionVolumes

▸ **listSourceRegionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:20338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20338)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listSourceRegions

▸ **listSourceRegions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)›*

*Defined in [api.ts:20353](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20353)*

Returns an array of SourceRegion objects

**`summary`** List SourceRegions

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)›*

___

###  listSourceSecurityGroups

▸ **listSourceSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:20369](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20369)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listSourceServiceInstanceNodes

▸ **listSourceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

*Defined in [api.ts:20385](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20385)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstanceNodesCollection](../interfaces/serviceinstancenodescollection.md)›*

___

###  listSourceServiceInstances

▸ **listSourceServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:20401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20401)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listSourceServiceInventories

▸ **listSourceServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

*Defined in [api.ts:20417](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20417)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

___

###  listSourceServiceOfferingNodes

▸ **listSourceServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

*Defined in [api.ts:20433](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20433)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingNodesCollection](../interfaces/serviceofferingnodescollection.md)›*

___

###  listSourceServiceOfferings

▸ **listSourceServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

*Defined in [api.ts:20449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20449)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

___

###  listSourceServicePlans

▸ **listSourceServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

*Defined in [api.ts:20465](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20465)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

___

###  listSourceSourceRegions

▸ **listSourceSourceRegions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)›*

*Defined in [api.ts:20481](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20481)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceRegionsCollection](../interfaces/sourceregionscollection.md)›*

___

###  listSourceSubnets

▸ **listSourceSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:20497](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20497)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listSourceSubscriptions

▸ **listSourceSubscriptions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)›*

*Defined in [api.ts:20513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20513)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)›*

___

###  listSourceVms

▸ **listSourceVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:20529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20529)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listSourceVolumeTypes

▸ **listSourceVolumeTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)›*

*Defined in [api.ts:20545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20545)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)›*

___

###  listSourceVolumes

▸ **listSourceVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:20561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20561)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listSources

▸ **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

*Defined in [api.ts:20576](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20576)*

Returns an array of Source objects

**`summary`** List Sources

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[SourcesCollection](../interfaces/sourcescollection.md)›*

___

###  listSubnetIpaddresses

▸ **listSubnetIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:20592](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20592)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listSubnetNetworkAdapters

▸ **listSubnetNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:20608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20608)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listSubnetTags

▸ **listSubnetTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:20624](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20624)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listSubnets

▸ **listSubnets**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:20639](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20639)*

Returns an array of Subnet objects

**`summary`** List Subnets

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listSubscriptionIpaddresses

▸ **listSubscriptionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:20655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20655)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listSubscriptionNetworkAdapters

▸ **listSubscriptionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:20671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20671)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listSubscriptionNetworks

▸ **listSubscriptionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:20687](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20687)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listSubscriptionOrchestrationStacks

▸ **listSubscriptionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

*Defined in [api.ts:20703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20703)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrchestrationStacksCollection](../interfaces/orchestrationstackscollection.md)›*

___

###  listSubscriptionSecurityGroups

▸ **listSubscriptionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:20719](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20719)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listSubscriptionServiceInstances

▸ **listSubscriptionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

*Defined in [api.ts:20735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20735)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstancesCollection](../interfaces/serviceinstancescollection.md)›*

___

###  listSubscriptionServiceOfferings

▸ **listSubscriptionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

*Defined in [api.ts:20751](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20751)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

___

###  listSubscriptionServicePlans

▸ **listSubscriptionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

*Defined in [api.ts:20767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20767)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlansCollection](../interfaces/serviceplanscollection.md)›*

___

###  listSubscriptionSubnets

▸ **listSubscriptionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:20783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20783)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listSubscriptionVms

▸ **listSubscriptionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:20799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20799)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listSubscriptionVolumes

▸ **listSubscriptionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:20815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20815)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listSubscriptions

▸ **listSubscriptions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)›*

*Defined in [api.ts:20830](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20830)*

Returns an array of Subscription objects

**`summary`** List Subscriptions

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[SubscriptionsCollection](../interfaces/subscriptionscollection.md)›*

___

###  listTagContainerGroups

▸ **listTagContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

*Defined in [api.ts:20846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20846)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerGroupsCollection](../interfaces/containergroupscollection.md)›*

___

###  listTagContainerImages

▸ **listTagContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

*Defined in [api.ts:20862](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20862)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerImagesCollection](../interfaces/containerimagescollection.md)›*

___

###  listTagContainerNodes

▸ **listTagContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

*Defined in [api.ts:20878](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20878)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerNodesCollection](../interfaces/containernodescollection.md)›*

___

###  listTagContainerProjects

▸ **listTagContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

*Defined in [api.ts:20894](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20894)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerProjectsCollection](../interfaces/containerprojectscollection.md)›*

___

###  listTagContainerTemplates

▸ **listTagContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

*Defined in [api.ts:20910](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20910)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerTemplatesCollection](../interfaces/containertemplatescollection.md)›*

___

###  listTagIpaddresses

▸ **listTagIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

*Defined in [api.ts:20926](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20926)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[IpaddressesCollection](../interfaces/ipaddressescollection.md)›*

___

###  listTagNetworkAdapters

▸ **listTagNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:20942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20942)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listTagNetworks

▸ **listTagNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

*Defined in [api.ts:20958](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20958)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworksCollection](../interfaces/networkscollection.md)›*

___

###  listTagSecurityGroups

▸ **listTagSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:20974](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20974)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listTagServiceInventories

▸ **listTagServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

*Defined in [api.ts:20990](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20990)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInventoriesCollection](../interfaces/serviceinventoriescollection.md)›*

___

###  listTagServiceOfferings

▸ **listTagServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

*Defined in [api.ts:21006](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21006)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingsCollection](../interfaces/serviceofferingscollection.md)›*

___

###  listTagSubnets

▸ **listTagSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

*Defined in [api.ts:21022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21022)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SubnetsCollection](../interfaces/subnetscollection.md)›*

___

###  listTagVms

▸ **listTagVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:21038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21038)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listTags

▸ **listTags**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:21053](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21053)*

Returns an array of Tag objects

**`summary`** List Tags

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listTasks

▸ **listTasks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TasksCollection](../interfaces/taskscollection.md)›*

*Defined in [api.ts:21068](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21068)*

Returns an array of Task objects

**`summary`** List Tasks

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[TasksCollection](../interfaces/taskscollection.md)›*

___

###  listVmNetworkAdapters

▸ **listVmNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

*Defined in [api.ts:21084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21084)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdaptersCollection](../interfaces/networkadapterscollection.md)›*

___

###  listVmSecurityGroups

▸ **listVmSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

*Defined in [api.ts:21100](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21100)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroupsCollection](../interfaces/securitygroupscollection.md)›*

___

###  listVmTags

▸ **listVmTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

*Defined in [api.ts:21116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21116)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[TagsCollection](../interfaces/tagscollection.md)›*

___

###  listVmVolumeAttachments

▸ **listVmVolumeAttachments**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)›*

*Defined in [api.ts:21132](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21132)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)›*

___

###  listVmVolumes

▸ **listVmVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:21148](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21148)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listVms

▸ **listVms**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:21163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21163)*

Returns an array of Vm objects

**`summary`** List Vms

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listVolumeAttachments

▸ **listVolumeAttachments**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)›*

*Defined in [api.ts:21178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21178)*

Returns an array of VolumeAttachment objects

**`summary`** List VolumeAttachments

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[VolumeAttachmentsCollection](../interfaces/volumeattachmentscollection.md)›*

___

###  listVolumeTypeVolumes

▸ **listVolumeTypeVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:21194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21194)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  listVolumeTypes

▸ **listVolumeTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)›*

*Defined in [api.ts:21209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21209)*

Returns an array of VolumeType objects

**`summary`** List VolumeTypes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[VolumeTypesCollection](../interfaces/volumetypescollection.md)›*

___

###  listVolumeVms

▸ **listVolumeVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

*Defined in [api.ts:21225](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21225)*

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
`filter?` | any | - |
`sortBy?` | Object | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VmsCollection](../interfaces/vmscollection.md)›*

___

###  listVolumes

▸ **listVolumes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

*Defined in [api.ts:21240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21240)*

Returns an array of Volume objects

**`summary`** List Volumes

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`filter?` | any |
`sortBy?` | Object |
`options?` | any |

**Returns:** *AxiosPromise‹[VolumesCollection](../interfaces/volumescollection.md)›*

___

###  orderServiceOffering

▸ **orderServiceOffering**(`id`: string, `orderParametersServiceOffering`: [OrderParametersServiceOffering](../interfaces/orderparametersserviceoffering.md), `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [api.ts:21253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21253)*

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

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  orderServicePlan

▸ **orderServicePlan**(`id`: string, `orderParametersServicePlan`: [OrderParametersServicePlan](../interfaces/orderparametersserviceplan.md), `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [api.ts:21266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21266)*

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

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  postGraphQL

▸ **postGraphQL**(`graphQLRequest`: [GraphQLRequest](../interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](../interfaces/graphqlresponse.md)›*

*Defined in [api.ts:21278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21278)*

Performs a GraphQL Query

**`summary`** Perform a GraphQL Query

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`graphQLRequest` | [GraphQLRequest](../interfaces/graphqlrequest.md) | GraphQL Query Request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[GraphQLResponse](../interfaces/graphqlresponse.md)›*

___

###  showCluster

▸ **showCluster**(`id`: string, `options?`: any): *AxiosPromise‹[Cluster](../interfaces/cluster.md)›*

*Defined in [api.ts:21290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21290)*

Returns a Cluster object

**`summary`** Show an existing Cluster

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Cluster](../interfaces/cluster.md)›*

___

###  showContainer

▸ **showContainer**(`id`: string, `options?`: any): *AxiosPromise‹[Container](../interfaces/container.md)›*

*Defined in [api.ts:21302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21302)*

Returns a Container object

**`summary`** Show an existing Container

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Container](../interfaces/container.md)›*

___

###  showContainerGroup

▸ **showContainerGroup**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerGroup](../interfaces/containergroup.md)›*

*Defined in [api.ts:21314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21314)*

Returns a ContainerGroup object

**`summary`** Show an existing ContainerGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerGroup](../interfaces/containergroup.md)›*

___

###  showContainerImage

▸ **showContainerImage**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerImage](../interfaces/containerimage.md)›*

*Defined in [api.ts:21326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21326)*

Returns a ContainerImage object

**`summary`** Show an existing ContainerImage

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerImage](../interfaces/containerimage.md)›*

___

###  showContainerNode

▸ **showContainerNode**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerNode](../interfaces/containernode.md)›*

*Defined in [api.ts:21338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21338)*

Returns a ContainerNode object

**`summary`** Show an existing ContainerNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerNode](../interfaces/containernode.md)›*

___

###  showContainerProject

▸ **showContainerProject**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerProject](../interfaces/containerproject.md)›*

*Defined in [api.ts:21350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21350)*

Returns a ContainerProject object

**`summary`** Show an existing ContainerProject

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerProject](../interfaces/containerproject.md)›*

___

###  showContainerResourceQuota

▸ **showContainerResourceQuota**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerResourceQuota](../interfaces/containerresourcequota.md)›*

*Defined in [api.ts:21362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21362)*

Returns a ContainerResourceQuota object

**`summary`** Show an existing ContainerResourceQuota

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerResourceQuota](../interfaces/containerresourcequota.md)›*

___

###  showContainerTemplate

▸ **showContainerTemplate**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerTemplate](../interfaces/containertemplate.md)›*

*Defined in [api.ts:21374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21374)*

Returns a ContainerTemplate object

**`summary`** Show an existing ContainerTemplate

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ContainerTemplate](../interfaces/containertemplate.md)›*

___

###  showDatastore

▸ **showDatastore**(`id`: string, `options?`: any): *AxiosPromise‹[Datastore](../interfaces/datastore.md)›*

*Defined in [api.ts:21386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21386)*

Returns a Datastore object

**`summary`** Show an existing Datastore

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Datastore](../interfaces/datastore.md)›*

___

###  showFlavor

▸ **showFlavor**(`id`: string, `options?`: any): *AxiosPromise‹[Flavor](../interfaces/flavor.md)›*

*Defined in [api.ts:21398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21398)*

Returns a Flavor object

**`summary`** Show an existing Flavor

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Flavor](../interfaces/flavor.md)›*

___

###  showHost

▸ **showHost**(`id`: string, `options?`: any): *AxiosPromise‹[Host](../interfaces/host.md)›*

*Defined in [api.ts:21410](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21410)*

Returns a Host object

**`summary`** Show an existing Host

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Host](../interfaces/host.md)›*

___

###  showIpaddress

▸ **showIpaddress**(`id`: string, `options?`: any): *AxiosPromise‹[Ipaddress](../interfaces/ipaddress.md)›*

*Defined in [api.ts:21422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21422)*

Returns a Ipaddress object

**`summary`** Show an existing Ipaddress

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Ipaddress](../interfaces/ipaddress.md)›*

___

###  showNetwork

▸ **showNetwork**(`id`: string, `options?`: any): *AxiosPromise‹[Network](../interfaces/network.md)›*

*Defined in [api.ts:21434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21434)*

Returns a Network object

**`summary`** Show an existing Network

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Network](../interfaces/network.md)›*

___

###  showNetworkAdapter

▸ **showNetworkAdapter**(`id`: string, `options?`: any): *AxiosPromise‹[NetworkAdapter](../interfaces/networkadapter.md)›*

*Defined in [api.ts:21446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21446)*

Returns a NetworkAdapter object

**`summary`** Show an existing NetworkAdapter

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[NetworkAdapter](../interfaces/networkadapter.md)›*

___

###  showOrchestrationStack

▸ **showOrchestrationStack**(`id`: string, `options?`: any): *AxiosPromise‹[OrchestrationStack](../interfaces/orchestrationstack.md)›*

*Defined in [api.ts:21458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21458)*

Returns a OrchestrationStack object

**`summary`** Show an existing OrchestrationStack

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[OrchestrationStack](../interfaces/orchestrationstack.md)›*

___

###  showSecurityGroup

▸ **showSecurityGroup**(`id`: string, `options?`: any): *AxiosPromise‹[SecurityGroup](../interfaces/securitygroup.md)›*

*Defined in [api.ts:21470](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21470)*

Returns a SecurityGroup object

**`summary`** Show an existing SecurityGroup

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SecurityGroup](../interfaces/securitygroup.md)›*

___

###  showServiceInstance

▸ **showServiceInstance**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInstance](../interfaces/serviceinstance.md)›*

*Defined in [api.ts:21482](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21482)*

Returns a ServiceInstance object

**`summary`** Show an existing ServiceInstance

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstance](../interfaces/serviceinstance.md)›*

___

###  showServiceInstanceNode

▸ **showServiceInstanceNode**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInstanceNode](../interfaces/serviceinstancenode.md)›*

*Defined in [api.ts:21494](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21494)*

Returns a ServiceInstanceNode object

**`summary`** Show an existing ServiceInstanceNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInstanceNode](../interfaces/serviceinstancenode.md)›*

___

###  showServiceInventory

▸ **showServiceInventory**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInventory](../interfaces/serviceinventory.md)›*

*Defined in [api.ts:21506](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21506)*

Returns a ServiceInventory object

**`summary`** Show an existing ServiceInventory

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceInventory](../interfaces/serviceinventory.md)›*

___

###  showServiceOffering

▸ **showServiceOffering**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOffering](../interfaces/serviceoffering.md)›*

*Defined in [api.ts:21518](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21518)*

Returns a ServiceOffering object

**`summary`** Show an existing ServiceOffering

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOffering](../interfaces/serviceoffering.md)›*

___

###  showServiceOfferingIcon

▸ **showServiceOfferingIcon**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)›*

*Defined in [api.ts:21530](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21530)*

Returns a ServiceOfferingIcon object

**`summary`** Show an existing ServiceOfferingIcon

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingIcon](../interfaces/serviceofferingicon.md)›*

___

###  showServiceOfferingIconIconData

▸ **showServiceOfferingIconIconData**(`id`: string, `options?`: any): *AxiosPromise‹any›*

*Defined in [api.ts:21542](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21542)*

Returns a ServiceOfferingIcon IconData

**`summary`** Show an existing ServiceOfferingIcon IconData

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹any›*

___

###  showServiceOfferingNode

▸ **showServiceOfferingNode**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOfferingNode](../interfaces/serviceofferingnode.md)›*

*Defined in [api.ts:21554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21554)*

Returns a ServiceOfferingNode object

**`summary`** Show an existing ServiceOfferingNode

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServiceOfferingNode](../interfaces/serviceofferingnode.md)›*

___

###  showServicePlan

▸ **showServicePlan**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](../interfaces/serviceplan.md)›*

*Defined in [api.ts:21566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21566)*

Returns a ServicePlan object

**`summary`** Show an existing ServicePlan

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[ServicePlan](../interfaces/serviceplan.md)›*

___

###  showSource

▸ **showSource**(`id`: string, `options?`: any): *AxiosPromise‹[Source](../interfaces/source.md)›*

*Defined in [api.ts:21578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21578)*

Returns a Source object

**`summary`** Show an existing Source

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Source](../interfaces/source.md)›*

___

###  showSourceRegion

▸ **showSourceRegion**(`id`: string, `options?`: any): *AxiosPromise‹[SourceRegion](../interfaces/sourceregion.md)›*

*Defined in [api.ts:21590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21590)*

Returns a SourceRegion object

**`summary`** Show an existing SourceRegion

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SourceRegion](../interfaces/sourceregion.md)›*

___

###  showSubnet

▸ **showSubnet**(`id`: string, `options?`: any): *AxiosPromise‹[Subnet](../interfaces/subnet.md)›*

*Defined in [api.ts:21602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21602)*

Returns a Subnet object

**`summary`** Show an existing Subnet

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Subnet](../interfaces/subnet.md)›*

___

###  showSubscription

▸ **showSubscription**(`id`: string, `options?`: any): *AxiosPromise‹[Subscription](../interfaces/subscription.md)›*

*Defined in [api.ts:21614](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21614)*

Returns a Subscription object

**`summary`** Show an existing Subscription

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Subscription](../interfaces/subscription.md)›*

___

###  showTag

▸ **showTag**(`id`: string, `options?`: any): *AxiosPromise‹[Tag](../interfaces/tag.md)›*

*Defined in [api.ts:21626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21626)*

Returns a Tag object

**`summary`** Show an existing Tag

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Tag](../interfaces/tag.md)›*

___

###  showTask

▸ **showTask**(`id`: string, `options?`: any): *AxiosPromise‹[Task](../interfaces/task.md)›*

*Defined in [api.ts:21638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21638)*

Returns a Task object

**`summary`** Show an existing Task

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Task](../interfaces/task.md)›*

___

###  showVm

▸ **showVm**(`id`: string, `options?`: any): *AxiosPromise‹[Vm](../interfaces/vm.md)›*

*Defined in [api.ts:21650](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21650)*

Returns a Vm object

**`summary`** Show an existing Vm

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Vm](../interfaces/vm.md)›*

___

###  showVolume

▸ **showVolume**(`id`: string, `options?`: any): *AxiosPromise‹[Volume](../interfaces/volume.md)›*

*Defined in [api.ts:21662](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21662)*

Returns a Volume object

**`summary`** Show an existing Volume

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Volume](../interfaces/volume.md)›*

___

###  showVolumeAttachment

▸ **showVolumeAttachment**(`id`: string, `options?`: any): *AxiosPromise‹[VolumeAttachment](../interfaces/volumeattachment.md)›*

*Defined in [api.ts:21674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21674)*

Returns a VolumeAttachment object

**`summary`** Show an existing VolumeAttachment

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumeAttachment](../interfaces/volumeattachment.md)›*

___

###  showVolumeType

▸ **showVolumeType**(`id`: string, `options?`: any): *AxiosPromise‹[VolumeType](../interfaces/volumetype.md)›*

*Defined in [api.ts:21686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21686)*

Returns a VolumeType object

**`summary`** Show an existing VolumeType

**`throws`** {RequiredError}

**`memberof`** DefaultApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[VolumeType](../interfaces/volumetype.md)›*

___

###  updateTask

▸ **updateTask**(`id`: string, `task`: [Task](../interfaces/task.md), `options?`: any): *AxiosPromise‹Response›*

*Defined in [api.ts:21699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L21699)*

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

**Returns:** *AxiosPromise‹Response›*
