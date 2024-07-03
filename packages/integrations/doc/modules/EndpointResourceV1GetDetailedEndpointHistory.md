[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetDetailedEndpointHistory

# Module: EndpointResourceV1GetDetailedEndpointHistory

## Table of contents

### References

- [default](EndpointResourceV1GetDetailedEndpointHistory.md#default)

### Type Aliases

- [EndpointResourceV1GetDetailedEndpointHistoryParams](EndpointResourceV1GetDetailedEndpointHistory.md#endpointresourcev1getdetailedendpointhistoryparams)

### Functions

- [endpointResourceV1GetDetailedEndpointHistoryParamCreator](EndpointResourceV1GetDetailedEndpointHistory.md#endpointresourcev1getdetailedendpointhistoryparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetDetailedEndpointHistoryParamCreator](EndpointResourceV1GetDetailedEndpointHistory.md#endpointresourcev1getdetailedendpointhistoryparamcreator)

## Type Aliases

### EndpointResourceV1GetDetailedEndpointHistoryParams

Ƭ **EndpointResourceV1GetDetailedEndpointHistoryParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `historyId` | `string` | **`Memberof`** EndpointResourceV1GetDetailedEndpointHistoryApi |
| `id` | `string` | **`Memberof`** EndpointResourceV1GetDetailedEndpointHistoryApi |
| `options?` | `AxiosRequestConfig` | - |

#### Defined in

[EndpointResourceV1GetDetailedEndpointHistory/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts#L14)

## Functions

### endpointResourceV1GetDetailedEndpointHistoryParamCreator

▸ **endpointResourceV1GetDetailedEndpointHistoryParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1GetDetailedEndpointHistoryParams`](EndpointResourceV1GetDetailedEndpointHistory.md#endpointresourcev1getdetailedendpointhistoryparams)] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve event notification details

**`Throws`**

#### Defined in

[EndpointResourceV1GetDetailedEndpointHistory/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts#L40)
