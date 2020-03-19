[@redhat-cloud-services/topological-inventory-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/topological-inventory-client

## Index

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [RequiredError](classes/requirederror.md)

### Interfaces

* [AppliedInventoriesParametersServicePlan](interfaces/appliedinventoriesparametersserviceplan.md)
* [AvailabilitiesCollection](interfaces/availabilitiescollection.md)
* [Availability](interfaces/availability.md)
* [Cluster](interfaces/cluster.md)
* [ClustersCollection](interfaces/clusterscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [Container](interfaces/container.md)
* [ContainerGroup](interfaces/containergroup.md)
* [ContainerGroupsCollection](interfaces/containergroupscollection.md)
* [ContainerImage](interfaces/containerimage.md)
* [ContainerImagesCollection](interfaces/containerimagescollection.md)
* [ContainerNode](interfaces/containernode.md)
* [ContainerNodesCollection](interfaces/containernodescollection.md)
* [ContainerProject](interfaces/containerproject.md)
* [ContainerProjectsCollection](interfaces/containerprojectscollection.md)
* [ContainerResourceQuota](interfaces/containerresourcequota.md)
* [ContainerResourceQuotaCollection](interfaces/containerresourcequotacollection.md)
* [ContainerTemplate](interfaces/containertemplate.md)
* [ContainerTemplatesCollection](interfaces/containertemplatescollection.md)
* [ContainersCollection](interfaces/containerscollection.md)
* [Datastore](interfaces/datastore.md)
* [DatastoresCollection](interfaces/datastorescollection.md)
* [ErrorNotFound](interfaces/errornotfound.md)
* [ErrorNotFoundErrors](interfaces/errornotfounderrors.md)
* [Flavor](interfaces/flavor.md)
* [FlavorsCollection](interfaces/flavorscollection.md)
* [GraphQLRequest](interfaces/graphqlrequest.md)
* [GraphQLResponse](interfaces/graphqlresponse.md)
* [Host](interfaces/host.md)
* [HostsCollection](interfaces/hostscollection.md)
* [InlineResponse200](interfaces/inlineresponse200.md)
* [Ipaddress](interfaces/ipaddress.md)
* [IpaddressesCollection](interfaces/ipaddressescollection.md)
* [Network](interfaces/network.md)
* [NetworkAdapter](interfaces/networkadapter.md)
* [NetworkAdaptersCollection](interfaces/networkadapterscollection.md)
* [NetworksCollection](interfaces/networkscollection.md)
* [OrchestrationStack](interfaces/orchestrationstack.md)
* [OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)
* [OrderParametersServiceOffering](interfaces/orderparametersserviceoffering.md)
* [OrderParametersServicePlan](interfaces/orderparametersserviceplan.md)
* [RequestArgs](interfaces/requestargs.md)
* [SecurityGroup](interfaces/securitygroup.md)
* [SecurityGroupsCollection](interfaces/securitygroupscollection.md)
* [ServiceInstance](interfaces/serviceinstance.md)
* [ServiceInstanceNode](interfaces/serviceinstancenode.md)
* [ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)
* [ServiceInstancesCollection](interfaces/serviceinstancescollection.md)
* [ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)
* [ServiceInventory](interfaces/serviceinventory.md)
* [ServiceOffering](interfaces/serviceoffering.md)
* [ServiceOfferingIcon](interfaces/serviceofferingicon.md)
* [ServiceOfferingIconsCollection](interfaces/serviceofferingiconscollection.md)
* [ServiceOfferingNode](interfaces/serviceofferingnode.md)
* [ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)
* [ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)
* [ServicePlan](interfaces/serviceplan.md)
* [ServicePlansCollection](interfaces/serviceplanscollection.md)
* [Source](interfaces/source.md)
* [SourceRegion](interfaces/sourceregion.md)
* [SourceRegionsCollection](interfaces/sourceregionscollection.md)
* [SourcesCollection](interfaces/sourcescollection.md)
* [Subnet](interfaces/subnet.md)
* [SubnetsCollection](interfaces/subnetscollection.md)
* [Subscription](interfaces/subscription.md)
* [SubscriptionsCollection](interfaces/subscriptionscollection.md)
* [Tag](interfaces/tag.md)
* [Tagging](interfaces/tagging.md)
* [TagsCollection](interfaces/tagscollection.md)
* [Task](interfaces/task.md)
* [TasksCollection](interfaces/taskscollection.md)
* [Tenant](interfaces/tenant.md)
* [Vm](interfaces/vm.md)
* [VmsCollection](interfaces/vmscollection.md)
* [Volume](interfaces/volume.md)
* [VolumeAttachment](interfaces/volumeattachment.md)
* [VolumeAttachmentsCollection](interfaces/volumeattachmentscollection.md)
* [VolumeType](interfaces/volumetype.md)
* [VolumeTypesCollection](interfaces/volumetypescollection.md)
* [VolumesCollection](interfaces/volumescollection.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "https://cloud.redhat.com//api/topological-inventory/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:4269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L4269)*

DefaultApi - axios parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appliedInventoriesForServiceOffering**(`id`: string, `appliedInventoriesParametersServicePlan`: [AppliedInventoriesParametersServicePlan](interfaces/appliedinventoriesparametersserviceplan.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getDocumentation**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listClusterHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listClusters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerGroupContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerImageTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerImages**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerNodeContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerNodeTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerProjectContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerProjectContainerResourceQuota**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerProjectContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerProjectTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerProjects**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerResourceQuota**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerTemplateTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainerTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listContainers**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listDatastores**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listFlavors**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listHosts**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listIpaddressTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listIpaddresses**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworkAdapterIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworkAdapterTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworkAdapters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworkSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworkTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listNetworks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStackVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrchestrationStacks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSecurityGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSecurityGroupVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSecurityGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceInstanceNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceInstanceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceInstances**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceInventories**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceInventoryTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingIcons**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferingTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServiceOfferings**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServicePlanServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServicePlans**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceAvailabilities**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceClusters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceDatastores**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceRegions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceSourceRegions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceSubscriptions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceVolumeTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSourceVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubnetIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubnetNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubnetTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubnets**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSubscriptions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTagVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTags**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listTasks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVmNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVmSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVmTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVmVolumeAttachments**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVmVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVms**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVolumeAttachments**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVolumeTypeVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVolumeTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVolumeVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listVolumes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **orderServiceOffering**(`id`: string, `orderParametersServiceOffering`: [OrderParametersServiceOffering](interfaces/orderparametersserviceoffering.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **orderServicePlan**(`id`: string, `orderParametersServicePlan`: [OrderParametersServicePlan](interfaces/orderparametersserviceplan.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showCluster**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainer**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerGroup**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerImage**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerNode**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerProject**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerResourceQuota**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showContainerTemplate**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showDatastore**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showFlavor**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showHost**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showIpaddress**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showNetwork**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showNetworkAdapter**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrchestrationStack**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSecurityGroup**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceInstance**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceInstanceNode**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceInventory**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceOffering**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceOfferingIcon**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceOfferingIconIconData**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServiceOfferingNode**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServicePlan**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSource**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSourceRegion**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSubnet**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSubscription**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showTag**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showTask**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showVm**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showVolume**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showVolumeAttachment**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showVolumeType**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateTask**(`id`: string, `task`: [Task](interfaces/task.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [api.ts:16761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L16761)*

DefaultApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **appliedInventoriesForServiceOffering**(`id`: string, `appliedInventoriesParametersServicePlan`: [AppliedInventoriesParametersServicePlan](interfaces/appliedinventoriesparametersserviceplan.md), `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **getDocumentation**(`options?`: any): *AxiosPromise‹any›*

* **listClusterHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listClusters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ClustersCollection](interfaces/clusterscollection.md)›*

* **listContainerGroupContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listContainerGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerImageTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerImages**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listContainerNodeContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerNodeTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listContainerProjectContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerProjectContainerResourceQuota**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerResourceQuotaCollection](interfaces/containerresourcequotacollection.md)›*

* **listContainerProjectContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listContainerProjectTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerProjects**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listContainerResourceQuota**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerResourceQuotaCollection](interfaces/containerresourcequotacollection.md)›*

* **listContainerTemplateTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listContainers**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listDatastores**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[DatastoresCollection](interfaces/datastorescollection.md)›*

* **listFlavors**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[FlavorsCollection](interfaces/flavorscollection.md)›*

* **listHosts**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listIpaddressTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listIpaddresses**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listNetworkAdapterIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listNetworkAdapterTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listNetworkAdapters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listNetworkSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listNetworkTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listNetworks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listOrchestrationStackIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listOrchestrationStackNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listOrchestrationStackNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listOrchestrationStackSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listOrchestrationStackSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listOrchestrationStackVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listOrchestrationStackVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listOrchestrationStacks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSecurityGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listSecurityGroupVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSecurityGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listServiceInstanceNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listServiceInstanceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listServiceInstances**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServiceInventories**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listServiceInventoryTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listServiceOfferingIcons**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingIconsCollection](interfaces/serviceofferingiconscollection.md)›*

* **listServiceOfferingNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listServiceOfferingServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServiceOfferingServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listServiceOfferingServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listServiceOfferingTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listServiceOfferings**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listServicePlanServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServicePlans**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceAvailabilities**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[AvailabilitiesCollection](interfaces/availabilitiescollection.md)›*

* **listSourceClusters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ClustersCollection](interfaces/clusterscollection.md)›*

* **listSourceContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listSourceContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listSourceContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listSourceContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listSourceContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listSourceContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listSourceDatastores**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[DatastoresCollection](interfaces/datastorescollection.md)›*

* **listSourceHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listSourceIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSourceNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSourceNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSourceOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSourceRegionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSourceRegionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSourceRegionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSourceRegionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSourceRegionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSourceRegionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSourceRegionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSourceRegionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceRegionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSourceRegionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSourceRegionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSourceRegions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourceRegionsCollection](interfaces/sourceregionscollection.md)›*

* **listSourceSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSourceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listSourceServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSourceServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listSourceServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listSourceServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSourceServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceSourceRegions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourceRegionsCollection](interfaces/sourceregionscollection.md)›*

* **listSourceSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSourceSubscriptions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubscriptionsCollection](interfaces/subscriptionscollection.md)›*

* **listSourceVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSourceVolumeTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeTypesCollection](interfaces/volumetypescollection.md)›*

* **listSourceVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listSubnetIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSubnetNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSubnetTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listSubnets**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSubscriptionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSubscriptionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSubscriptionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSubscriptionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSubscriptionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSubscriptionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSubscriptionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSubscriptionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSubscriptionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSubscriptionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSubscriptionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSubscriptions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubscriptionsCollection](interfaces/subscriptionscollection.md)›*

* **listTagContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listTagContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listTagContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listTagContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listTagContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listTagIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listTagNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listTagNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listTagSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listTagServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listTagServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listTagSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listTagVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listTags**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listTasks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TasksCollection](interfaces/taskscollection.md)›*

* **listVmNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listVmSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listVmTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listVmVolumeAttachments**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeAttachmentsCollection](interfaces/volumeattachmentscollection.md)›*

* **listVmVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listVms**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listVolumeAttachments**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeAttachmentsCollection](interfaces/volumeattachmentscollection.md)›*

* **listVolumeTypeVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listVolumeTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumeTypesCollection](interfaces/volumetypescollection.md)›*

* **listVolumeVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listVolumes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **orderServiceOffering**(`id`: string, `orderParametersServiceOffering`: [OrderParametersServiceOffering](interfaces/orderparametersserviceoffering.md), `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **orderServicePlan**(`id`: string, `orderParametersServicePlan`: [OrderParametersServicePlan](interfaces/orderparametersserviceplan.md), `options?`: any): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

* **showCluster**(`id`: string, `options?`: any): *AxiosPromise‹[Cluster](interfaces/cluster.md)›*

* **showContainer**(`id`: string, `options?`: any): *AxiosPromise‹[Container](interfaces/container.md)›*

* **showContainerGroup**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerGroup](interfaces/containergroup.md)›*

* **showContainerImage**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerImage](interfaces/containerimage.md)›*

* **showContainerNode**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerNode](interfaces/containernode.md)›*

* **showContainerProject**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerProject](interfaces/containerproject.md)›*

* **showContainerResourceQuota**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerResourceQuota](interfaces/containerresourcequota.md)›*

* **showContainerTemplate**(`id`: string, `options?`: any): *AxiosPromise‹[ContainerTemplate](interfaces/containertemplate.md)›*

* **showDatastore**(`id`: string, `options?`: any): *AxiosPromise‹[Datastore](interfaces/datastore.md)›*

* **showFlavor**(`id`: string, `options?`: any): *AxiosPromise‹[Flavor](interfaces/flavor.md)›*

* **showHost**(`id`: string, `options?`: any): *AxiosPromise‹[Host](interfaces/host.md)›*

* **showIpaddress**(`id`: string, `options?`: any): *AxiosPromise‹[Ipaddress](interfaces/ipaddress.md)›*

* **showNetwork**(`id`: string, `options?`: any): *AxiosPromise‹[Network](interfaces/network.md)›*

* **showNetworkAdapter**(`id`: string, `options?`: any): *AxiosPromise‹[NetworkAdapter](interfaces/networkadapter.md)›*

* **showOrchestrationStack**(`id`: string, `options?`: any): *AxiosPromise‹[OrchestrationStack](interfaces/orchestrationstack.md)›*

* **showSecurityGroup**(`id`: string, `options?`: any): *AxiosPromise‹[SecurityGroup](interfaces/securitygroup.md)›*

* **showServiceInstance**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInstance](interfaces/serviceinstance.md)›*

* **showServiceInstanceNode**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInstanceNode](interfaces/serviceinstancenode.md)›*

* **showServiceInventory**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceInventory](interfaces/serviceinventory.md)›*

* **showServiceOffering**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOffering](interfaces/serviceoffering.md)›*

* **showServiceOfferingIcon**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOfferingIcon](interfaces/serviceofferingicon.md)›*

* **showServiceOfferingIconIconData**(`id`: string, `options?`: any): *AxiosPromise‹any›*

* **showServiceOfferingNode**(`id`: string, `options?`: any): *AxiosPromise‹[ServiceOfferingNode](interfaces/serviceofferingnode.md)›*

* **showServicePlan**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showSource**(`id`: string, `options?`: any): *AxiosPromise‹[Source](interfaces/source.md)›*

* **showSourceRegion**(`id`: string, `options?`: any): *AxiosPromise‹[SourceRegion](interfaces/sourceregion.md)›*

* **showSubnet**(`id`: string, `options?`: any): *AxiosPromise‹[Subnet](interfaces/subnet.md)›*

* **showSubscription**(`id`: string, `options?`: any): *AxiosPromise‹[Subscription](interfaces/subscription.md)›*

* **showTag**(`id`: string, `options?`: any): *AxiosPromise‹[Tag](interfaces/tag.md)›*

* **showTask**(`id`: string, `options?`: any): *AxiosPromise‹[Task](interfaces/task.md)›*

* **showVm**(`id`: string, `options?`: any): *AxiosPromise‹[Vm](interfaces/vm.md)›*

* **showVolume**(`id`: string, `options?`: any): *AxiosPromise‹[Volume](interfaces/volume.md)›*

* **showVolumeAttachment**(`id`: string, `options?`: any): *AxiosPromise‹[VolumeAttachment](interfaces/volumeattachment.md)›*

* **showVolumeType**(`id`: string, `options?`: any): *AxiosPromise‹[VolumeType](interfaces/volumetype.md)›*

* **updateTask**(`id`: string, `task`: [Task](interfaces/task.md), `options?`: any): *AxiosPromise‹Response›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [api.ts:13756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L13756)*

DefaultApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **appliedInventoriesForServiceOffering**(`id`: string, `appliedInventoriesParametersServicePlan`: [AppliedInventoriesParametersServicePlan](interfaces/appliedinventoriesparametersserviceplan.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **getDocumentation**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **listClusterHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listClusters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ClustersCollection](interfaces/clusterscollection.md)›*

* **listContainerGroupContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listContainerGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerImageTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerImages**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listContainerNodeContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerNodeTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listContainerProjectContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listContainerProjectContainerResourceQuota**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerResourceQuotaCollection](interfaces/containerresourcequotacollection.md)›*

* **listContainerProjectContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listContainerProjectTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerProjects**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listContainerResourceQuota**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerResourceQuotaCollection](interfaces/containerresourcequotacollection.md)›*

* **listContainerTemplateTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listContainerTemplates**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listContainers**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listDatastores**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[DatastoresCollection](interfaces/datastorescollection.md)›*

* **listFlavors**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[FlavorsCollection](interfaces/flavorscollection.md)›*

* **listHosts**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listIpaddressTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listIpaddresses**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listNetworkAdapterIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listNetworkAdapterTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listNetworkAdapters**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listNetworkSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listNetworkTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listNetworks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listOrchestrationStackIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listOrchestrationStackNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listOrchestrationStackNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listOrchestrationStackSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listOrchestrationStackSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listOrchestrationStackVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listOrchestrationStackVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listOrchestrationStacks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSecurityGroupTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listSecurityGroupVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSecurityGroups**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listServiceInstanceNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listServiceInstanceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listServiceInstances**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServiceInventories**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listServiceInventoryTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listServiceOfferingIcons**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingIconsCollection](interfaces/serviceofferingiconscollection.md)›*

* **listServiceOfferingNodes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listServiceOfferingServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServiceOfferingServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listServiceOfferingServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listServiceOfferingTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listServiceOfferings**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listServicePlanServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listServicePlans**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceAvailabilities**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[AvailabilitiesCollection](interfaces/availabilitiescollection.md)›*

* **listSourceClusters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ClustersCollection](interfaces/clusterscollection.md)›*

* **listSourceContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listSourceContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listSourceContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listSourceContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listSourceContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listSourceContainers**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainersCollection](interfaces/containerscollection.md)›*

* **listSourceDatastores**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[DatastoresCollection](interfaces/datastorescollection.md)›*

* **listSourceHosts**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[HostsCollection](interfaces/hostscollection.md)›*

* **listSourceIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSourceNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSourceNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSourceOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSourceRegionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSourceRegionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSourceRegionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSourceRegionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSourceRegionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSourceRegionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSourceRegionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSourceRegionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceRegionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSourceRegionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSourceRegionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSourceRegions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceRegionsCollection](interfaces/sourceregionscollection.md)›*

* **listSourceSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSourceServiceInstanceNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstanceNodesCollection](interfaces/serviceinstancenodescollection.md)›*

* **listSourceServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSourceServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listSourceServiceOfferingNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingNodesCollection](interfaces/serviceofferingnodescollection.md)›*

* **listSourceServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSourceServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSourceSourceRegions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceRegionsCollection](interfaces/sourceregionscollection.md)›*

* **listSourceSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSourceSubscriptions**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubscriptionsCollection](interfaces/subscriptionscollection.md)›*

* **listSourceVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSourceVolumeTypes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeTypesCollection](interfaces/volumetypescollection.md)›*

* **listSourceVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSources**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourcesCollection](interfaces/sourcescollection.md)›*

* **listSubnetIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSubnetNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSubnetTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listSubnets**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSubscriptionIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listSubscriptionNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listSubscriptionNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listSubscriptionOrchestrationStacks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrchestrationStacksCollection](interfaces/orchestrationstackscollection.md)›*

* **listSubscriptionSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listSubscriptionServiceInstances**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstancesCollection](interfaces/serviceinstancescollection.md)›*

* **listSubscriptionServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listSubscriptionServicePlans**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlansCollection](interfaces/serviceplanscollection.md)›*

* **listSubscriptionSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listSubscriptionVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listSubscriptionVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listSubscriptions**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubscriptionsCollection](interfaces/subscriptionscollection.md)›*

* **listTagContainerGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroupsCollection](interfaces/containergroupscollection.md)›*

* **listTagContainerImages**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerImagesCollection](interfaces/containerimagescollection.md)›*

* **listTagContainerNodes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerNodesCollection](interfaces/containernodescollection.md)›*

* **listTagContainerProjects**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerProjectsCollection](interfaces/containerprojectscollection.md)›*

* **listTagContainerTemplates**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerTemplatesCollection](interfaces/containertemplatescollection.md)›*

* **listTagIpaddresses**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[IpaddressesCollection](interfaces/ipaddressescollection.md)›*

* **listTagNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listTagNetworks**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworksCollection](interfaces/networkscollection.md)›*

* **listTagSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listTagServiceInventories**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInventoriesCollection](interfaces/serviceinventoriescollection.md)›*

* **listTagServiceOfferings**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingsCollection](interfaces/serviceofferingscollection.md)›*

* **listTagSubnets**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SubnetsCollection](interfaces/subnetscollection.md)›*

* **listTagVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listTags**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listTasks**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TasksCollection](interfaces/taskscollection.md)›*

* **listVmNetworkAdapters**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdaptersCollection](interfaces/networkadapterscollection.md)›*

* **listVmSecurityGroups**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroupsCollection](interfaces/securitygroupscollection.md)›*

* **listVmTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listVmVolumeAttachments**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeAttachmentsCollection](interfaces/volumeattachmentscollection.md)›*

* **listVmVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listVms**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listVolumeAttachments**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeAttachmentsCollection](interfaces/volumeattachmentscollection.md)›*

* **listVolumeTypeVolumes**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **listVolumeTypes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeTypesCollection](interfaces/volumetypescollection.md)›*

* **listVolumeVms**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VmsCollection](interfaces/vmscollection.md)›*

* **listVolumes**(`limit?`: number, `offset?`: number, `filter?`: any, `sortBy?`: Object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumesCollection](interfaces/volumescollection.md)›*

* **orderServiceOffering**(`id`: string, `orderParametersServiceOffering`: [OrderParametersServiceOffering](interfaces/orderparametersserviceoffering.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **orderServicePlan**(`id`: string, `orderParametersServicePlan`: [OrderParametersServicePlan](interfaces/orderparametersserviceplan.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[InlineResponse200](interfaces/inlineresponse200.md)›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

* **showCluster**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Cluster](interfaces/cluster.md)›*

* **showContainer**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Container](interfaces/container.md)›*

* **showContainerGroup**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerGroup](interfaces/containergroup.md)›*

* **showContainerImage**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerImage](interfaces/containerimage.md)›*

* **showContainerNode**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerNode](interfaces/containernode.md)›*

* **showContainerProject**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerProject](interfaces/containerproject.md)›*

* **showContainerResourceQuota**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerResourceQuota](interfaces/containerresourcequota.md)›*

* **showContainerTemplate**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ContainerTemplate](interfaces/containertemplate.md)›*

* **showDatastore**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Datastore](interfaces/datastore.md)›*

* **showFlavor**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Flavor](interfaces/flavor.md)›*

* **showHost**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Host](interfaces/host.md)›*

* **showIpaddress**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Ipaddress](interfaces/ipaddress.md)›*

* **showNetwork**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Network](interfaces/network.md)›*

* **showNetworkAdapter**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[NetworkAdapter](interfaces/networkadapter.md)›*

* **showOrchestrationStack**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrchestrationStack](interfaces/orchestrationstack.md)›*

* **showSecurityGroup**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SecurityGroup](interfaces/securitygroup.md)›*

* **showServiceInstance**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstance](interfaces/serviceinstance.md)›*

* **showServiceInstanceNode**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInstanceNode](interfaces/serviceinstancenode.md)›*

* **showServiceInventory**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceInventory](interfaces/serviceinventory.md)›*

* **showServiceOffering**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOffering](interfaces/serviceoffering.md)›*

* **showServiceOfferingIcon**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingIcon](interfaces/serviceofferingicon.md)›*

* **showServiceOfferingIconIconData**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **showServiceOfferingNode**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServiceOfferingNode](interfaces/serviceofferingnode.md)›*

* **showServicePlan**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showSource**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Source](interfaces/source.md)›*

* **showSourceRegion**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[SourceRegion](interfaces/sourceregion.md)›*

* **showSubnet**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Subnet](interfaces/subnet.md)›*

* **showSubscription**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Subscription](interfaces/subscription.md)›*

* **showTag**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Tag](interfaces/tag.md)›*

* **showTask**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Task](interfaces/task.md)›*

* **showVm**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Vm](interfaces/vm.md)›*

* **showVolume**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Volume](interfaces/volume.md)›*

* **showVolumeAttachment**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeAttachment](interfaces/volumeattachment.md)›*

* **showVolumeType**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[VolumeType](interfaces/volumetype.md)›*

* **updateTask**(`id`: string, `task`: [Task](interfaces/task.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Response›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L29)*
