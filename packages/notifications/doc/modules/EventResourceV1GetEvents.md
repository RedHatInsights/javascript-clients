[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EventResourceV1GetEvents

# Module: EventResourceV1GetEvents

## Table of contents

### References

- [default](EventResourceV1GetEvents.md#default)

### Type Aliases

- [EventResourceV1GetEventsParams](EventResourceV1GetEvents.md#eventresourcev1geteventsparams)

### Functions

- [eventResourceV1GetEventsParamCreator](EventResourceV1GetEvents.md#eventresourcev1geteventsparamcreator)

## References

### default

Renames and re-exports [eventResourceV1GetEventsParamCreator](EventResourceV1GetEvents.md#eventresourcev1geteventsparamcreator)

## Type Aliases

### EventResourceV1GetEventsParams

Ƭ **EventResourceV1GetEventsParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `appIds?` | `Set`\<`string`\> | **`Memberof`** EventResourceV1GetEventsApi |
| `bundleIds?` | `Set`\<`string`\> | **`Memberof`** EventResourceV1GetEventsApi |
| `endDate?` | `string` | **`Memberof`** EventResourceV1GetEventsApi |
| `endpointTypes?` | `Set`\<`string`\> | **`Memberof`** EventResourceV1GetEventsApi |
| `eventTypeDisplayName?` | `string` | **`Memberof`** EventResourceV1GetEventsApi |
| `includeActions?` | `boolean` | **`Memberof`** EventResourceV1GetEventsApi |
| `includeDetails?` | `boolean` | **`Memberof`** EventResourceV1GetEventsApi |
| `includePayload?` | `boolean` | **`Memberof`** EventResourceV1GetEventsApi |
| `invocationResults?` | `Set`\<`boolean`\> | **`Memberof`** EventResourceV1GetEventsApi |
| `limit?` | `number` | **`Memberof`** EventResourceV1GetEventsApi |
| `offset?` | `number` | **`Memberof`** EventResourceV1GetEventsApi |
| `options?` | `AxiosRequestConfig` | - |
| `pageNumber?` | `number` | **`Memberof`** EventResourceV1GetEventsApi |
| `sortBy?` | `string` | **`Memberof`** EventResourceV1GetEventsApi |
| `sortBy2?` | `string` | **`Memberof`** EventResourceV1GetEventsApi |
| `startDate?` | `string` | **`Memberof`** EventResourceV1GetEventsApi |
| `status?` | `Set`\<[`EventLogEntryActionStatus`](../enums/types.EventLogEntryActionStatus.md)\> | **`Memberof`** EventResourceV1GetEventsApi |

#### Defined in

[EventResourceV1GetEvents/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/EventResourceV1GetEvents/index.ts#L14)

## Functions

### eventResourceV1GetEventsParamCreator

▸ **eventResourceV1GetEventsParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`EventResourceV1GetEventsParams`](EventResourceV1GetEvents.md#eventresourcev1geteventsparams)] \| [`Set`\<`string`\>, `Set`\<`string`\>, `string`, `Set`\<`string`\>, `string`, `boolean`, `boolean`, `boolean`, `Set`\<`boolean`\>, `number`, `number`, `number`, `string`, `string`, `string`, `Set`\<[`EventLogEntryActionStatus`](../enums/types.EventLogEntryActionStatus.md)\>, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve the event log entries

**`Throws`**

#### Defined in

[EventResourceV1GetEvents/index.ts:124](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/EventResourceV1GetEvents/index.ts#L124)
