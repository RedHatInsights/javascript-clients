[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetEndpoints

# Module: EndpointResourceV1GetEndpoints

## Table of contents

### References

- [default](EndpointResourceV1GetEndpoints.md#default)

### Type Aliases

- [EndpointResourceV1GetEndpointsParams](EndpointResourceV1GetEndpoints.md#endpointresourcev1getendpointsparams)

### Functions

- [endpointResourceV1GetEndpointsParamCreator](EndpointResourceV1GetEndpoints.md#endpointresourcev1getendpointsparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetEndpointsParamCreator](EndpointResourceV1GetEndpoints.md#endpointresourcev1getendpointsparamcreator)

## Type Aliases

### EndpointResourceV1GetEndpointsParams

Ƭ **EndpointResourceV1GetEndpointsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `active?` | `boolean` | **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `limit?` | `number` | Number of items per page. If the value is 0, it will return all elements **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `name?` | `string` | **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `offset?` | `number` | **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | Page number. Starts at first page (0), if not specified starts at first page. **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `sortBy?` | `string` | **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `sortBy2?` | `string` | **`Memberof`** EndpointResourceV1GetEndpointsApi |
| `type?` | `string`[] | **`Memberof`** EndpointResourceV1GetEndpointsApi |

#### Defined in

[EndpointResourceV1GetEndpoints/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoints/index.ts#L14)

## Functions

### endpointResourceV1GetEndpointsParamCreator

▸ **endpointResourceV1GetEndpointsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Provides a list of endpoints. Use this endpoint to find specific endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1GetEndpointsParams`](EndpointResourceV1GetEndpoints.md#endpointresourcev1getendpointsparams)] \| [`number`, `number`, `boolean`, `string`, `number`, `string`, `string`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List endpoints

**`Throws`**

#### Defined in

[EndpointResourceV1GetEndpoints/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoints/index.ts#L76)
