[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1CreateEndpoint

# Module: EndpointResourceV1CreateEndpoint

## Table of contents

### References

- [default](EndpointResourceV1CreateEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1CreateEndpointParams](EndpointResourceV1CreateEndpoint.md#endpointresourcev1createendpointparams)

### Functions

- [endpointResourceV1CreateEndpointParamCreator](EndpointResourceV1CreateEndpoint.md#endpointresourcev1createendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1CreateEndpointParamCreator](EndpointResourceV1CreateEndpoint.md#endpointresourcev1createendpointparamcreator)

## Type Aliases

### EndpointResourceV1CreateEndpointParams

Ƭ **EndpointResourceV1CreateEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointDTO` | [`EndpointDTO`](../interfaces/types.EndpointDTO.md) | **`Memberof`** EndpointResourceV1CreateEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[EndpointResourceV1CreateEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1CreateEndpoint/index.ts#L14)

## Functions

### endpointResourceV1CreateEndpointParamCreator

▸ **endpointResourceV1CreateEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1CreateEndpointParams`](EndpointResourceV1CreateEndpoint.md#endpointresourcev1createendpointparams)] \| [[`EndpointDTO`](../interfaces/types.EndpointDTO.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new endpoint

**`Throws`**

#### Defined in

[EndpointResourceV1CreateEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1CreateEndpoint/index.ts#L34)
