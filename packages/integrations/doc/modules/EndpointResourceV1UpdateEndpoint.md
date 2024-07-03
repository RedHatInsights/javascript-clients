[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1UpdateEndpoint

# Module: EndpointResourceV1UpdateEndpoint

## Table of contents

### References

- [default](EndpointResourceV1UpdateEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1UpdateEndpointParams](EndpointResourceV1UpdateEndpoint.md#endpointresourcev1updateendpointparams)

### Functions

- [endpointResourceV1UpdateEndpointParamCreator](EndpointResourceV1UpdateEndpoint.md#endpointresourcev1updateendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1UpdateEndpointParamCreator](EndpointResourceV1UpdateEndpoint.md#endpointresourcev1updateendpointparamcreator)

## Type Aliases

### EndpointResourceV1UpdateEndpointParams

Ƭ **EndpointResourceV1UpdateEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointDTO` | [`EndpointDTO`](../interfaces/types.EndpointDTO.md) | **`Memberof`** EndpointResourceV1UpdateEndpointApi |
| `id` | `string` | **`Memberof`** EndpointResourceV1UpdateEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[EndpointResourceV1UpdateEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts#L14)

## Functions

### endpointResourceV1UpdateEndpointParamCreator

▸ **endpointResourceV1UpdateEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Updates the endpoint configuration. Use this to update an existing endpoint. Any changes to the endpoint take place immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1UpdateEndpointParams`](EndpointResourceV1UpdateEndpoint.md#endpointresourcev1updateendpointparams)] \| [`string`, [`EndpointDTO`](../interfaces/types.EndpointDTO.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an endpoint

**`Throws`**

#### Defined in

[EndpointResourceV1UpdateEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts#L40)
