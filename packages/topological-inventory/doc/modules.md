[@redhat-cloud-services/topological-inventory-client](README.md) / Exports

# @redhat-cloud-services/topological-inventory-client

## Table of contents

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)

### Interfaces

- [AppliedInventoriesParametersServicePlan](interfaces/AppliedInventoriesParametersServicePlan.md)
- [AvailabilitiesCollection](interfaces/AvailabilitiesCollection.md)
- [Availability](interfaces/Availability.md)
- [Cluster](interfaces/Cluster.md)
- [ClustersCollection](interfaces/ClustersCollection.md)
- [CollectionLinks](interfaces/CollectionLinks.md)
- [CollectionMetadata](interfaces/CollectionMetadata.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Container](interfaces/Container.md)
- [ContainerGroup](interfaces/ContainerGroup.md)
- [ContainerGroupsCollection](interfaces/ContainerGroupsCollection.md)
- [ContainerImage](interfaces/ContainerImage.md)
- [ContainerImagesCollection](interfaces/ContainerImagesCollection.md)
- [ContainerNode](interfaces/ContainerNode.md)
- [ContainerNodesCollection](interfaces/ContainerNodesCollection.md)
- [ContainerProject](interfaces/ContainerProject.md)
- [ContainerProjectsCollection](interfaces/ContainerProjectsCollection.md)
- [ContainerResourceQuota](interfaces/ContainerResourceQuota.md)
- [ContainerResourceQuotaCollection](interfaces/ContainerResourceQuotaCollection.md)
- [ContainerTemplate](interfaces/ContainerTemplate.md)
- [ContainerTemplatesCollection](interfaces/ContainerTemplatesCollection.md)
- [ContainersCollection](interfaces/ContainersCollection.md)
- [Datastore](interfaces/Datastore.md)
- [DatastoresCollection](interfaces/DatastoresCollection.md)
- [ErrorNotFound](interfaces/ErrorNotFound.md)
- [ErrorNotFoundErrors](interfaces/ErrorNotFoundErrors.md)
- [Flavor](interfaces/Flavor.md)
- [FlavorsCollection](interfaces/FlavorsCollection.md)
- [GraphQLRequest](interfaces/GraphQLRequest.md)
- [GraphQLResponse](interfaces/GraphQLResponse.md)
- [Host](interfaces/Host.md)
- [HostsCollection](interfaces/HostsCollection.md)
- [InlineResponse200](interfaces/InlineResponse200.md)
- [Ipaddress](interfaces/Ipaddress.md)
- [IpaddressesCollection](interfaces/IpaddressesCollection.md)
- [Network](interfaces/Network.md)
- [NetworkAdapter](interfaces/NetworkAdapter.md)
- [NetworkAdaptersCollection](interfaces/NetworkAdaptersCollection.md)
- [NetworksCollection](interfaces/NetworksCollection.md)
- [OrchestrationStack](interfaces/OrchestrationStack.md)
- [OrchestrationStacksCollection](interfaces/OrchestrationStacksCollection.md)
- [OrderParametersServiceOffering](interfaces/OrderParametersServiceOffering.md)
- [OrderParametersServicePlan](interfaces/OrderParametersServicePlan.md)
- [SecurityGroup](interfaces/SecurityGroup.md)
- [SecurityGroupsCollection](interfaces/SecurityGroupsCollection.md)
- [ServiceInstance](interfaces/ServiceInstance.md)
- [ServiceInstanceNode](interfaces/ServiceInstanceNode.md)
- [ServiceInstanceNodesCollection](interfaces/ServiceInstanceNodesCollection.md)
- [ServiceInstancesCollection](interfaces/ServiceInstancesCollection.md)
- [ServiceInventoriesCollection](interfaces/ServiceInventoriesCollection.md)
- [ServiceInventory](interfaces/ServiceInventory.md)
- [ServiceOffering](interfaces/ServiceOffering.md)
- [ServiceOfferingIcon](interfaces/ServiceOfferingIcon.md)
- [ServiceOfferingIconsCollection](interfaces/ServiceOfferingIconsCollection.md)
- [ServiceOfferingNode](interfaces/ServiceOfferingNode.md)
- [ServiceOfferingNodesCollection](interfaces/ServiceOfferingNodesCollection.md)
- [ServiceOfferingsCollection](interfaces/ServiceOfferingsCollection.md)
- [ServicePlan](interfaces/ServicePlan.md)
- [ServicePlansCollection](interfaces/ServicePlansCollection.md)
- [Source](interfaces/Source.md)
- [SourceRegion](interfaces/SourceRegion.md)
- [SourceRegionsCollection](interfaces/SourceRegionsCollection.md)
- [SourcesCollection](interfaces/SourcesCollection.md)
- [Subnet](interfaces/Subnet.md)
- [SubnetsCollection](interfaces/SubnetsCollection.md)
- [Subscription](interfaces/Subscription.md)
- [SubscriptionsCollection](interfaces/SubscriptionsCollection.md)
- [Tag](interfaces/Tag.md)
- [Tagging](interfaces/Tagging.md)
- [TagsCollection](interfaces/TagsCollection.md)
- [Task](interfaces/Task.md)
- [TasksCollection](interfaces/TasksCollection.md)
- [Tenant](interfaces/Tenant.md)
- [Vm](interfaces/Vm.md)
- [VmsCollection](interfaces/VmsCollection.md)
- [Volume](interfaces/Volume.md)
- [VolumeAttachment](interfaces/VolumeAttachment.md)
- [VolumeAttachmentsCollection](interfaces/VolumeAttachmentsCollection.md)
- [VolumeType](interfaces/VolumeType.md)
- [VolumeTypesCollection](interfaces/VolumeTypesCollection.md)
- [VolumesCollection](interfaces/VolumesCollection.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appliedInventoriesForServiceOffering` | (`id`: `string`, `appliedInventoriesParametersServicePlan`: [`AppliedInventoriesParametersServicePlan`](interfaces/AppliedInventoriesParametersServicePlan.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getDocumentation` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listClusterHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listClusters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerGroupContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerImageTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerImages` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerNodeContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerNodeTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerProjectContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerProjectContainerResourceQuota` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerProjectContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerProjectTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerProjects` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerResourceQuota` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerTemplateTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainerTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listContainers` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listDatastores` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listFlavors` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listHosts` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listIpaddressTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listIpaddresses` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworkAdapterIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworkAdapterTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworkAdapters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworkSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworkTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listNetworks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStackVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrchestrationStacks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSecurityGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSecurityGroupVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSecurityGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceInstanceNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceInstanceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceInstances` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceInventories` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceInventoryTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingIcons` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferingTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServiceOfferings` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServicePlanServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServicePlans` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceAvailabilities` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceClusters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceDatastores` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceRegions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceSourceRegions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceSubscriptions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceVolumeTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSourceVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubnetIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubnetNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubnetTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubnets` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSubscriptions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTagVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTags` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listTasks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVmNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVmSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVmTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVmVolumeAttachments` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVmVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVms` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVolumeAttachments` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVolumeTypeVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVolumeTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVolumeVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listVolumes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `orderServiceOffering` | (`id`: `string`, `orderParametersServiceOffering`: [`OrderParametersServiceOffering`](interfaces/OrderParametersServiceOffering.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `orderServicePlan` | (`id`: `string`, `orderParametersServicePlan`: [`OrderParametersServicePlan`](interfaces/OrderParametersServicePlan.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showCluster` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainer` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerGroup` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerImage` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerNode` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerProject` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerResourceQuota` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showContainerTemplate` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showDatastore` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showFlavor` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showHost` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showIpaddress` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showNetwork` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showNetworkAdapter` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showOrchestrationStack` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSecurityGroup` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceInstance` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceInstanceNode` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceInventory` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceOffering` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceOfferingIcon` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceOfferingIconIconData` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServiceOfferingNode` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSource` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSourceRegion` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSubnet` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSubscription` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showTag` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showTask` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showVm` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showVolume` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showVolumeAttachment` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showVolumeType` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updateTask` | (`id`: `string`, `task`: [`Task`](interfaces/Task.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:4139](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L4139)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appliedInventoriesForServiceOffering` | (`id`: `string`, `appliedInventoriesParametersServicePlan`: [`AppliedInventoriesParametersServicePlan`](interfaces/AppliedInventoriesParametersServicePlan.md), `options?`: `any`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\> |
| `getDocumentation` | (`options?`: `any`) => `AxiosPromise`<`object`\> |
| `listClusterHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\> |
| `listClusters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ClustersCollection`](interfaces/ClustersCollection.md)\> |
| `listContainerGroupContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\> |
| `listContainerGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listContainerGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\> |
| `listContainerImageTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listContainerImages` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\> |
| `listContainerNodeContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\> |
| `listContainerNodeTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listContainerNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\> |
| `listContainerProjectContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\> |
| `listContainerProjectContainerResourceQuota` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerResourceQuotaCollection`](interfaces/ContainerResourceQuotaCollection.md)\> |
| `listContainerProjectContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\> |
| `listContainerProjectTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listContainerProjects` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\> |
| `listContainerResourceQuota` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerResourceQuotaCollection`](interfaces/ContainerResourceQuotaCollection.md)\> |
| `listContainerTemplateTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listContainerTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\> |
| `listContainers` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\> |
| `listDatastores` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`DatastoresCollection`](interfaces/DatastoresCollection.md)\> |
| `listFlavors` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`FlavorsCollection`](interfaces/FlavorsCollection.md)\> |
| `listHosts` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\> |
| `listIpaddressTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listIpaddresses` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listNetworkAdapterIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listNetworkAdapterTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listNetworkAdapters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listNetworkSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listNetworkTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listNetworks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listOrchestrationStackIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listOrchestrationStackNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listOrchestrationStackNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listOrchestrationStackSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listOrchestrationStackSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listOrchestrationStackVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listOrchestrationStackVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listOrchestrationStacks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\> |
| `listSecurityGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listSecurityGroupVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listSecurityGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listServiceInstanceNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\> |
| `listServiceInstanceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\> |
| `listServiceInstances` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listServiceInventories` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\> |
| `listServiceInventoryTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listServiceOfferingIcons` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingIconsCollection`](interfaces/ServiceOfferingIconsCollection.md)\> |
| `listServiceOfferingNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\> |
| `listServiceOfferingServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listServiceOfferingServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\> |
| `listServiceOfferingServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\> |
| `listServiceOfferingTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listServiceOfferings` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\> |
| `listServicePlanServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listServicePlans` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\> |
| `listSourceAvailabilities` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`AvailabilitiesCollection`](interfaces/AvailabilitiesCollection.md)\> |
| `listSourceClusters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ClustersCollection`](interfaces/ClustersCollection.md)\> |
| `listSourceContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\> |
| `listSourceContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\> |
| `listSourceContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\> |
| `listSourceContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\> |
| `listSourceContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\> |
| `listSourceContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\> |
| `listSourceDatastores` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`DatastoresCollection`](interfaces/DatastoresCollection.md)\> |
| `listSourceHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\> |
| `listSourceIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listSourceNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listSourceNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listSourceOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\> |
| `listSourceRegionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listSourceRegionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listSourceRegionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listSourceRegionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\> |
| `listSourceRegionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listSourceRegionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listSourceRegionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\> |
| `listSourceRegionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\> |
| `listSourceRegionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listSourceRegionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listSourceRegionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listSourceRegions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SourceRegionsCollection`](interfaces/SourceRegionsCollection.md)\> |
| `listSourceSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listSourceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\> |
| `listSourceServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listSourceServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\> |
| `listSourceServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\> |
| `listSourceServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\> |
| `listSourceServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\> |
| `listSourceSourceRegions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SourceRegionsCollection`](interfaces/SourceRegionsCollection.md)\> |
| `listSourceSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listSourceSubscriptions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubscriptionsCollection`](interfaces/SubscriptionsCollection.md)\> |
| `listSourceVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listSourceVolumeTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumeTypesCollection`](interfaces/VolumeTypesCollection.md)\> |
| `listSourceVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SourcesCollection`](interfaces/SourcesCollection.md)\> |
| `listSubnetIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listSubnetNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listSubnetTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listSubnets` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listSubscriptionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listSubscriptionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listSubscriptionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listSubscriptionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\> |
| `listSubscriptionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listSubscriptionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\> |
| `listSubscriptionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\> |
| `listSubscriptionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\> |
| `listSubscriptionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listSubscriptionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listSubscriptionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listSubscriptions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubscriptionsCollection`](interfaces/SubscriptionsCollection.md)\> |
| `listTagContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\> |
| `listTagContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\> |
| `listTagContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\> |
| `listTagContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\> |
| `listTagContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\> |
| `listTagIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\> |
| `listTagNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listTagNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\> |
| `listTagSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listTagServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\> |
| `listTagServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\> |
| `listTagSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\> |
| `listTagVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listTags` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listTasks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TasksCollection`](interfaces/TasksCollection.md)\> |
| `listVmNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\> |
| `listVmSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\> |
| `listVmTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listVmVolumeAttachments` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumeAttachmentsCollection`](interfaces/VolumeAttachmentsCollection.md)\> |
| `listVmVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listVms` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listVolumeAttachments` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumeAttachmentsCollection`](interfaces/VolumeAttachmentsCollection.md)\> |
| `listVolumeTypeVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `listVolumeTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumeTypesCollection`](interfaces/VolumeTypesCollection.md)\> |
| `listVolumeVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\> |
| `listVolumes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\> |
| `orderServiceOffering` | (`id`: `string`, `orderParametersServiceOffering`: [`OrderParametersServiceOffering`](interfaces/OrderParametersServiceOffering.md), `options?`: `any`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\> |
| `orderServicePlan` | (`id`: `string`, `orderParametersServicePlan`: [`OrderParametersServicePlan`](interfaces/OrderParametersServicePlan.md), `options?`: `any`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `AxiosPromise`<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\> |
| `showCluster` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Cluster`](interfaces/Cluster.md)\> |
| `showContainer` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Container`](interfaces/Container.md)\> |
| `showContainerGroup` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerGroup`](interfaces/ContainerGroup.md)\> |
| `showContainerImage` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerImage`](interfaces/ContainerImage.md)\> |
| `showContainerNode` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerNode`](interfaces/ContainerNode.md)\> |
| `showContainerProject` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerProject`](interfaces/ContainerProject.md)\> |
| `showContainerResourceQuota` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerResourceQuota`](interfaces/ContainerResourceQuota.md)\> |
| `showContainerTemplate` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ContainerTemplate`](interfaces/ContainerTemplate.md)\> |
| `showDatastore` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Datastore`](interfaces/Datastore.md)\> |
| `showFlavor` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Flavor`](interfaces/Flavor.md)\> |
| `showHost` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Host`](interfaces/Host.md)\> |
| `showIpaddress` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Ipaddress`](interfaces/Ipaddress.md)\> |
| `showNetwork` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Network`](interfaces/Network.md)\> |
| `showNetworkAdapter` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`NetworkAdapter`](interfaces/NetworkAdapter.md)\> |
| `showOrchestrationStack` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrchestrationStack`](interfaces/OrchestrationStack.md)\> |
| `showSecurityGroup` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`SecurityGroup`](interfaces/SecurityGroup.md)\> |
| `showServiceInstance` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceInstance`](interfaces/ServiceInstance.md)\> |
| `showServiceInstanceNode` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceInstanceNode`](interfaces/ServiceInstanceNode.md)\> |
| `showServiceInventory` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceInventory`](interfaces/ServiceInventory.md)\> |
| `showServiceOffering` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceOffering`](interfaces/ServiceOffering.md)\> |
| `showServiceOfferingIcon` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingIcon`](interfaces/ServiceOfferingIcon.md)\> |
| `showServiceOfferingIconIconData` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<`any`\> |
| `showServiceOfferingNode` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServiceOfferingNode`](interfaces/ServiceOfferingNode.md)\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\> |
| `showSource` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Source`](interfaces/Source.md)\> |
| `showSourceRegion` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`SourceRegion`](interfaces/SourceRegion.md)\> |
| `showSubnet` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Subnet`](interfaces/Subnet.md)\> |
| `showSubscription` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Subscription`](interfaces/Subscription.md)\> |
| `showTag` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)\> |
| `showTask` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Task`](interfaces/Task.md)\> |
| `showVm` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Vm`](interfaces/Vm.md)\> |
| `showVolume` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Volume`](interfaces/Volume.md)\> |
| `showVolumeAttachment` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`VolumeAttachment`](interfaces/VolumeAttachment.md)\> |
| `showVolumeType` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`VolumeType`](interfaces/VolumeType.md)\> |
| `updateTask` | (`id`: `string`, `task`: [`Task`](interfaces/Task.md), `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:17162](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L17162)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `appliedInventoriesForServiceOffering` | (`id`: `string`, `appliedInventoriesParametersServicePlan`: [`AppliedInventoriesParametersServicePlan`](interfaces/AppliedInventoriesParametersServicePlan.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\>\> |
| `getDocumentation` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`object`\>\> |
| `listClusterHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\>\> |
| `listClusters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ClustersCollection`](interfaces/ClustersCollection.md)\>\> |
| `listContainerGroupContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\>\> |
| `listContainerGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listContainerGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\>\> |
| `listContainerImageTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listContainerImages` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\>\> |
| `listContainerNodeContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\>\> |
| `listContainerNodeTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listContainerNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\>\> |
| `listContainerProjectContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\>\> |
| `listContainerProjectContainerResourceQuota` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerResourceQuotaCollection`](interfaces/ContainerResourceQuotaCollection.md)\>\> |
| `listContainerProjectContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\>\> |
| `listContainerProjectTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listContainerProjects` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\>\> |
| `listContainerResourceQuota` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerResourceQuotaCollection`](interfaces/ContainerResourceQuotaCollection.md)\>\> |
| `listContainerTemplateTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listContainerTemplates` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\>\> |
| `listContainers` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\>\> |
| `listDatastores` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`DatastoresCollection`](interfaces/DatastoresCollection.md)\>\> |
| `listFlavors` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`FlavorsCollection`](interfaces/FlavorsCollection.md)\>\> |
| `listHosts` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\>\> |
| `listIpaddressTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listIpaddresses` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listNetworkAdapterIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listNetworkAdapterTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listNetworkAdapters` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listNetworkSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listNetworkTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listNetworks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listOrchestrationStackIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listOrchestrationStackNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listOrchestrationStackNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listOrchestrationStackSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listOrchestrationStackSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listOrchestrationStackVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listOrchestrationStackVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listOrchestrationStacks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\>\> |
| `listSecurityGroupTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listSecurityGroupVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listSecurityGroups` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listServiceInstanceNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\>\> |
| `listServiceInstanceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\>\> |
| `listServiceInstances` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listServiceInventories` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\>\> |
| `listServiceInventoryTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listServiceOfferingIcons` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingIconsCollection`](interfaces/ServiceOfferingIconsCollection.md)\>\> |
| `listServiceOfferingNodes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\>\> |
| `listServiceOfferingServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listServiceOfferingServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\>\> |
| `listServiceOfferingServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\>\> |
| `listServiceOfferingTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listServiceOfferings` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\>\> |
| `listServicePlanServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listServicePlans` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\>\> |
| `listSourceAvailabilities` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`AvailabilitiesCollection`](interfaces/AvailabilitiesCollection.md)\>\> |
| `listSourceClusters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ClustersCollection`](interfaces/ClustersCollection.md)\>\> |
| `listSourceContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\>\> |
| `listSourceContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\>\> |
| `listSourceContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\>\> |
| `listSourceContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\>\> |
| `listSourceContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\>\> |
| `listSourceContainers` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainersCollection`](interfaces/ContainersCollection.md)\>\> |
| `listSourceDatastores` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`DatastoresCollection`](interfaces/DatastoresCollection.md)\>\> |
| `listSourceHosts` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`HostsCollection`](interfaces/HostsCollection.md)\>\> |
| `listSourceIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listSourceNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listSourceNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listSourceOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\>\> |
| `listSourceRegionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listSourceRegionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listSourceRegionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listSourceRegionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\>\> |
| `listSourceRegionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listSourceRegionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listSourceRegionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\>\> |
| `listSourceRegionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\>\> |
| `listSourceRegionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listSourceRegionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listSourceRegionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listSourceRegions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SourceRegionsCollection`](interfaces/SourceRegionsCollection.md)\>\> |
| `listSourceSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listSourceServiceInstanceNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstanceNodesCollection`](interfaces/ServiceInstanceNodesCollection.md)\>\> |
| `listSourceServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listSourceServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\>\> |
| `listSourceServiceOfferingNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingNodesCollection`](interfaces/ServiceOfferingNodesCollection.md)\>\> |
| `listSourceServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\>\> |
| `listSourceServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\>\> |
| `listSourceSourceRegions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SourceRegionsCollection`](interfaces/SourceRegionsCollection.md)\>\> |
| `listSourceSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listSourceSubscriptions` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubscriptionsCollection`](interfaces/SubscriptionsCollection.md)\>\> |
| `listSourceVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listSourceVolumeTypes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeTypesCollection`](interfaces/VolumeTypesCollection.md)\>\> |
| `listSourceVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listSources` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SourcesCollection`](interfaces/SourcesCollection.md)\>\> |
| `listSubnetIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listSubnetNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listSubnetTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listSubnets` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listSubscriptionIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listSubscriptionNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listSubscriptionNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listSubscriptionOrchestrationStacks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrchestrationStacksCollection`](interfaces/OrchestrationStacksCollection.md)\>\> |
| `listSubscriptionSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listSubscriptionServiceInstances` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstancesCollection`](interfaces/ServiceInstancesCollection.md)\>\> |
| `listSubscriptionServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\>\> |
| `listSubscriptionServicePlans` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlansCollection`](interfaces/ServicePlansCollection.md)\>\> |
| `listSubscriptionSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listSubscriptionVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listSubscriptionVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listSubscriptions` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubscriptionsCollection`](interfaces/SubscriptionsCollection.md)\>\> |
| `listTagContainerGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroupsCollection`](interfaces/ContainerGroupsCollection.md)\>\> |
| `listTagContainerImages` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerImagesCollection`](interfaces/ContainerImagesCollection.md)\>\> |
| `listTagContainerNodes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerNodesCollection`](interfaces/ContainerNodesCollection.md)\>\> |
| `listTagContainerProjects` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerProjectsCollection`](interfaces/ContainerProjectsCollection.md)\>\> |
| `listTagContainerTemplates` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerTemplatesCollection`](interfaces/ContainerTemplatesCollection.md)\>\> |
| `listTagIpaddresses` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`IpaddressesCollection`](interfaces/IpaddressesCollection.md)\>\> |
| `listTagNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listTagNetworks` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworksCollection`](interfaces/NetworksCollection.md)\>\> |
| `listTagSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listTagServiceInventories` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInventoriesCollection`](interfaces/ServiceInventoriesCollection.md)\>\> |
| `listTagServiceOfferings` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingsCollection`](interfaces/ServiceOfferingsCollection.md)\>\> |
| `listTagSubnets` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SubnetsCollection`](interfaces/SubnetsCollection.md)\>\> |
| `listTagVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listTags` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listTasks` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TasksCollection`](interfaces/TasksCollection.md)\>\> |
| `listVmNetworkAdapters` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdaptersCollection`](interfaces/NetworkAdaptersCollection.md)\>\> |
| `listVmSecurityGroups` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroupsCollection`](interfaces/SecurityGroupsCollection.md)\>\> |
| `listVmTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listVmVolumeAttachments` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeAttachmentsCollection`](interfaces/VolumeAttachmentsCollection.md)\>\> |
| `listVmVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listVms` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listVolumeAttachments` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeAttachmentsCollection`](interfaces/VolumeAttachmentsCollection.md)\>\> |
| `listVolumeTypeVolumes` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `listVolumeTypes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeTypesCollection`](interfaces/VolumeTypesCollection.md)\>\> |
| `listVolumeVms` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VmsCollection`](interfaces/VmsCollection.md)\>\> |
| `listVolumes` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string` \| `string`[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumesCollection`](interfaces/VolumesCollection.md)\>\> |
| `orderServiceOffering` | (`id`: `string`, `orderParametersServiceOffering`: [`OrderParametersServiceOffering`](interfaces/OrderParametersServiceOffering.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\>\> |
| `orderServicePlan` | (`id`: `string`, `orderParametersServicePlan`: [`OrderParametersServicePlan`](interfaces/OrderParametersServicePlan.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`InlineResponse200`](interfaces/InlineResponse200.md)\>\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\>\> |
| `showCluster` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Cluster`](interfaces/Cluster.md)\>\> |
| `showContainer` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Container`](interfaces/Container.md)\>\> |
| `showContainerGroup` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerGroup`](interfaces/ContainerGroup.md)\>\> |
| `showContainerImage` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerImage`](interfaces/ContainerImage.md)\>\> |
| `showContainerNode` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerNode`](interfaces/ContainerNode.md)\>\> |
| `showContainerProject` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerProject`](interfaces/ContainerProject.md)\>\> |
| `showContainerResourceQuota` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerResourceQuota`](interfaces/ContainerResourceQuota.md)\>\> |
| `showContainerTemplate` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ContainerTemplate`](interfaces/ContainerTemplate.md)\>\> |
| `showDatastore` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Datastore`](interfaces/Datastore.md)\>\> |
| `showFlavor` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Flavor`](interfaces/Flavor.md)\>\> |
| `showHost` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Host`](interfaces/Host.md)\>\> |
| `showIpaddress` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Ipaddress`](interfaces/Ipaddress.md)\>\> |
| `showNetwork` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Network`](interfaces/Network.md)\>\> |
| `showNetworkAdapter` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`NetworkAdapter`](interfaces/NetworkAdapter.md)\>\> |
| `showOrchestrationStack` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrchestrationStack`](interfaces/OrchestrationStack.md)\>\> |
| `showSecurityGroup` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SecurityGroup`](interfaces/SecurityGroup.md)\>\> |
| `showServiceInstance` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstance`](interfaces/ServiceInstance.md)\>\> |
| `showServiceInstanceNode` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInstanceNode`](interfaces/ServiceInstanceNode.md)\>\> |
| `showServiceInventory` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceInventory`](interfaces/ServiceInventory.md)\>\> |
| `showServiceOffering` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOffering`](interfaces/ServiceOffering.md)\>\> |
| `showServiceOfferingIcon` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingIcon`](interfaces/ServiceOfferingIcon.md)\>\> |
| `showServiceOfferingIconIconData` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `showServiceOfferingNode` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServiceOfferingNode`](interfaces/ServiceOfferingNode.md)\>\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\>\> |
| `showSource` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Source`](interfaces/Source.md)\>\> |
| `showSourceRegion` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SourceRegion`](interfaces/SourceRegion.md)\>\> |
| `showSubnet` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Subnet`](interfaces/Subnet.md)\>\> |
| `showSubscription` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Subscription`](interfaces/Subscription.md)\>\> |
| `showTag` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)\>\> |
| `showTask` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Task`](interfaces/Task.md)\>\> |
| `showVm` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Vm`](interfaces/Vm.md)\>\> |
| `showVolume` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Volume`](interfaces/Volume.md)\>\> |
| `showVolumeAttachment` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeAttachment`](interfaces/VolumeAttachment.md)\>\> |
| `showVolumeType` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`VolumeType`](interfaces/VolumeType.md)\>\> |
| `updateTask` | (`id`: `string`, `task`: [`Task`](interfaces/Task.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:14157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L14157)
