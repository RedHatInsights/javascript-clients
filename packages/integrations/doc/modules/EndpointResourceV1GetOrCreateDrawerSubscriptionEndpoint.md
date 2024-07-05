[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint

# Module: EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint

## Table of contents

### References

- [default](EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams](EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint.md#endpointresourcev1getorcreatedrawersubscriptionendpointparams)

### Functions

- [endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator](EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint.md#endpointresourcev1getorcreatedrawersubscriptionendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator](EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint.md#endpointresourcev1getorcreatedrawersubscriptionendpointparamcreator)

## Type Aliases

### EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams

Ƭ **EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `requestSystemSubscriptionProperties` | [`RequestSystemSubscriptionProperties`](../interfaces/types.RequestSystemSubscriptionProperties.md) | **`Memberof`** EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointApi |

#### Defined in

[EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts#L14)

## Functions

### endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator

▸ **endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams`](EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint.md#endpointresourcev1getorcreatedrawersubscriptionendpointparams)] \| [[`RequestSystemSubscriptionProperties`](../interfaces/types.RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a drawer endpoint

**`Throws`**

#### Defined in

[EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts#L34)
