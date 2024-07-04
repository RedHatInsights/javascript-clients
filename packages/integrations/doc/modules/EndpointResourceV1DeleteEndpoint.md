[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1DeleteEndpoint

# Module: EndpointResourceV1DeleteEndpoint

## Table of contents

### References

- [default](EndpointResourceV1DeleteEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1DeleteEndpointParams](EndpointResourceV1DeleteEndpoint.md#endpointresourcev1deleteendpointparams)

### Functions

- [endpointResourceV1DeleteEndpointParamCreator](EndpointResourceV1DeleteEndpoint.md#endpointresourcev1deleteendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1DeleteEndpointParamCreator](EndpointResourceV1DeleteEndpoint.md#endpointresourcev1deleteendpointparamcreator)

## Type Aliases

### EndpointResourceV1DeleteEndpointParams

Ƭ **EndpointResourceV1DeleteEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | **`Memberof`** EndpointResourceV1DeleteEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[EndpointResourceV1DeleteEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts#L14)

## Functions

### endpointResourceV1DeleteEndpointParamCreator

▸ **endpointResourceV1DeleteEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Deletes an endpoint. Use this endpoint to delete an endpoint that is no longer needed. Deleting an endpoint that is already linked to a behavior group will unlink it from the behavior group. You cannot delete system endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1DeleteEndpointParams`](EndpointResourceV1DeleteEndpoint.md#endpointresourcev1deleteendpointparams)] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an endpoint

**`Throws`**

#### Defined in

[EndpointResourceV1DeleteEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts#L34)
