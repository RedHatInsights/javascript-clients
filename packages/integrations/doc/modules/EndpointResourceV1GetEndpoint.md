[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetEndpoint

# Module: EndpointResourceV1GetEndpoint

## Table of contents

### References

- [default](EndpointResourceV1GetEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1GetEndpointParams](EndpointResourceV1GetEndpoint.md#endpointresourcev1getendpointparams)

### Functions

- [endpointResourceV1GetEndpointParamCreator](EndpointResourceV1GetEndpoint.md#endpointresourcev1getendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetEndpointParamCreator](EndpointResourceV1GetEndpoint.md#endpointresourcev1getendpointparamcreator)

## Type Aliases

### EndpointResourceV1GetEndpointParams

Ƭ **EndpointResourceV1GetEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | **`Memberof`** EndpointResourceV1GetEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoint/index.ts#L14)

## Functions

### endpointResourceV1GetEndpointParamCreator

▸ **endpointResourceV1GetEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the public information associated with an endpoint such as its description, name, and properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`EndpointResourceV1GetEndpointParams`](EndpointResourceV1GetEndpoint.md#endpointresourcev1getendpointparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoint/index.ts#L34)
