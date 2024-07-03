[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1DisableEndpoint

# Module: EndpointResourceV1DisableEndpoint

## Table of contents

### References

- [default](EndpointResourceV1DisableEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1DisableEndpointParams](EndpointResourceV1DisableEndpoint.md#endpointresourcev1disableendpointparams)

### Functions

- [endpointResourceV1DisableEndpointParamCreator](EndpointResourceV1DisableEndpoint.md#endpointresourcev1disableendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1DisableEndpointParamCreator](EndpointResourceV1DisableEndpoint.md#endpointresourcev1disableendpointparamcreator)

## Type Aliases

### EndpointResourceV1DisableEndpointParams

Ƭ **EndpointResourceV1DisableEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | **`Memberof`** EndpointResourceV1DisableEndpointApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[EndpointResourceV1DisableEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DisableEndpoint/index.ts#L14)

## Functions

### endpointResourceV1DisableEndpointParamCreator

▸ **endpointResourceV1DisableEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Disables an endpoint so that the endpoint will not be executed after an operation that uses the endpoint is started. An operation that is already running can still execute the endpoint. Disable an endpoint when you want to stop it from running and might want to re-enable it in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [[`EndpointResourceV1DisableEndpointParams`](EndpointResourceV1DisableEndpoint.md#endpointresourcev1disableendpointparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Disable an endpoint

**`Throws`**

#### Defined in

[EndpointResourceV1DisableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DisableEndpoint/index.ts#L34)
