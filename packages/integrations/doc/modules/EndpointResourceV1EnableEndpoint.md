[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1EnableEndpoint

# Module: EndpointResourceV1EnableEndpoint

## Table of contents

### References

- [default](EndpointResourceV1EnableEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1EnableEndpointParams](EndpointResourceV1EnableEndpoint.md#endpointresourcev1enableendpointparams)

### Functions

- [endpointResourceV1EnableEndpointParamCreator](EndpointResourceV1EnableEndpoint.md#endpointresourcev1enableendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1EnableEndpointParamCreator](EndpointResourceV1EnableEndpoint.md#endpointresourcev1enableendpointparamcreator)

## Type Aliases

### EndpointResourceV1EnableEndpointParams

Ƭ **EndpointResourceV1EnableEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | **`Memberof`** EndpointResourceV1EnableEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[packages/integrations/EndpointResourceV1EnableEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1EnableEndpoint/index.ts#L14)

## Functions

### endpointResourceV1EnableEndpointParamCreator

▸ **endpointResourceV1EnableEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Enables an endpoint that is disabled so that the endpoint will be executed on the following operations that use the endpoint. An operation must be restarted to use the enabled endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`EndpointResourceV1EnableEndpointParams`](EndpointResourceV1EnableEndpoint.md#endpointresourcev1enableendpointparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Enable an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1EnableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1EnableEndpoint/index.ts#L34)
