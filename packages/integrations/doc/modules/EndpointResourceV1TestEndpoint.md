[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1TestEndpoint

# Module: EndpointResourceV1TestEndpoint

## Table of contents

### References

- [default](EndpointResourceV1TestEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1TestEndpointParams](EndpointResourceV1TestEndpoint.md#endpointresourcev1testendpointparams)

### Functions

- [endpointResourceV1TestEndpointParamCreator](EndpointResourceV1TestEndpoint.md#endpointresourcev1testendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1TestEndpointParamCreator](EndpointResourceV1TestEndpoint.md#endpointresourcev1testendpointparamcreator)

## Type Aliases

### EndpointResourceV1TestEndpointParams

Ƭ **EndpointResourceV1TestEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointTestRequest?` | [`EndpointTestRequest`](../interfaces/types.EndpointTestRequest.md) | **`Memberof`** EndpointResourceV1TestEndpointApi |
| `options?` | `AxiosRequestConfig` | - |
| `uuid` | `string` | The UUID of the endpoint to test **`Memberof`** EndpointResourceV1TestEndpointApi |

#### Defined in

[EndpointResourceV1TestEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1TestEndpoint/index.ts#L14)

## Functions

### endpointResourceV1TestEndpointParamCreator

▸ **endpointResourceV1TestEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Generates a test notification for a particular endpoint. Use this endpoint to test that an integration that you created works as expected. This endpoint triggers a test notification that should be received by the target recipient. For example, if you set up a webhook as the action to take upon receiving a notification, you should receive a test notification when using this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1TestEndpointParams`](EndpointResourceV1TestEndpoint.md#endpointresourcev1testendpointparams)] \| [`string`, [`EndpointTestRequest`](../interfaces/types.EndpointTestRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Generate a test notification

**`Throws`**

#### Defined in

[EndpointResourceV1TestEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1TestEndpoint/index.ts#L40)
