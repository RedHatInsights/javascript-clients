[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetEndpointHistory

# Module: EndpointResourceV1GetEndpointHistory

## Table of contents

### References

- [default](EndpointResourceV1GetEndpointHistory.md#default)

### Type Aliases

- [EndpointResourceV1GetEndpointHistoryParams](EndpointResourceV1GetEndpointHistory.md#endpointresourcev1getendpointhistoryparams)

### Functions

- [endpointResourceV1GetEndpointHistoryParamCreator](EndpointResourceV1GetEndpointHistory.md#endpointresourcev1getendpointhistoryparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetEndpointHistoryParamCreator](EndpointResourceV1GetEndpointHistory.md#endpointresourcev1getendpointhistoryparamcreator)

## Type Aliases

### EndpointResourceV1GetEndpointHistoryParams

Ƭ **EndpointResourceV1GetEndpointHistoryParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `includeDetail?` | `boolean` | Include the detail in the reply **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `limit?` | `number` | Number of items per page, if not specified or 0 is used, returns a maximum of 500 elements. **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `offset?` | `number` | **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | Page number. Starts at first page (0), if not specified starts at first page. **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `sortBy?` | `string` | **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |
| `sortBy2?` | `string` | **`Memberof`** EndpointResourceV1GetEndpointHistoryApi |

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts#L14)

## Functions

### endpointResourceV1GetEndpointHistoryParamCreator

▸ **endpointResourceV1GetEndpointHistoryParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EndpointResourceV1GetEndpointHistoryParams`](EndpointResourceV1GetEndpointHistory.md#endpointresourcev1getendpointhistoryparams)] \| [`string`, `number`, `number`, `boolean`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts:69](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts#L69)
