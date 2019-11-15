
[

Javascript client for Topological inventory API
===============================================

](#javascript-client-for-topological-inventory-api)

If you want to use [ManageIQ/topological-inventory-api](https://github.com/ManageIQ/https://github.com/ManageIQ/topological_inventory-api) you shouldn't use get requests directly, but rather use this client to integrate with this service.

[

Install
-------

](#install)

NPM

```bash
npm install --save @redhat-cloud-services/topological-inventory-client
```

Or Yarn

```bash
yarn add @redhat-cloud-services/topological-inventory-client
```

[

### Usage

](#usage)

This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).

```JS
// api.js
import axios from 'axios';
import { DefaultApi } from '@redhat-cloud-services/topological-inventory-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const baseApi = new DefaultApi(undefined, BASE_PATH, instance);
export baseApi;
```

If you want to add some interceptors you can use axios build in interceptors

```JS
// api.js
import axios from 'axios';
import { DefaultApi } from '@redhat-cloud-services/topological-inventory-client';
const instance = axios.create();

// Request interceptor
instance.interceptors.request.use((request) => {
    // some logic to do with request
});

// Response interceptor
instance.interceptors.response.use((response) => {
    // some logic to do with request
});

// Error interceptor
instance.interceptors.response.use(null, (error) => {
    // some logic to do with error
});

// BASE_PATH should be set in your constants file
const baseApi = new DefaultApi(undefined, BASE_PATH, instance);
export baseApi;
```

[

API documentation
-----------------

](#api-documentation)

*   [README](doc/README.md)

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

* [BASE_PATH](#base_path)

### Functions

* [DefaultApiAxiosParamCreator](#defaultapiaxiosparamcreator)
* [DefaultApiFactory](#defaultapifactory)
* [DefaultApiFp](#defaultapifp)

### Object literals

* [COLLECTION_FORMATS](#collection_formats)

---

## Variables

<a id="base_path"></a>

### `<Const>` BASE_PATH

**● BASE_PATH**: *`string`* =  "https://cloud.redhat.com//api/topological-inventory/v1.0".replace(/\/+$/, "")

*Defined in [api.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L20)*

___

## Functions

<a id="defaultapiaxiosparamcreator"></a>

### `<Const>` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:4269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L4269)*

DefaultApi - axios parameter creator

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |

**Returns:** `object`

___
<a id="defaultapifactory"></a>

### `<Const>` DefaultApiFactory

▸ **DefaultApiFactory**(configuration?: *[Configuration](classes/configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): `object`

*Defined in [api.ts:16761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L16761)*

DefaultApi - factory interface

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](classes/configuration.md) |
| `Optional` basePath | `string` |
| `Optional` axios | `AxiosInstance` |

**Returns:** `object`

___
<a id="defaultapifp"></a>

### `<Const>` DefaultApiFp

▸ **DefaultApiFp**(configuration?: *[Configuration](classes/configuration.md)*): `object`

*Defined in [api.ts:13756](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L13756)*

DefaultApi - functional programming interface

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

*Defined in [api.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L26)*

*__export__*: 

<a id="collection_formats.csv"></a>

####  csv

**● csv**: *`string`* = ","

*Defined in [api.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L27)*

___
<a id="collection_formats.pipes"></a>

####  pipes

**● pipes**: *`string`* = "|"

*Defined in [api.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L30)*

___
<a id="collection_formats.ssv"></a>

####  ssv

**● ssv**: *`string`* = " "

*Defined in [api.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L28)*

___
<a id="collection_formats.tsv"></a>

####  tsv

**● tsv**: *`string`* = "	"

*Defined in [api.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L29)*

___

___

