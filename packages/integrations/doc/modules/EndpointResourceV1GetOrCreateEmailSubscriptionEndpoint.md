[@redhat-cloud-services/javascript-clients](../README.md) / [Exports](../modules.md) / EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint

# Module: EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint

## Table of contents

### References

- [default](EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint.md#default)

### Type Aliases

- [EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams](EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint.md#endpointresourcev1getorcreateemailsubscriptionendpointparams)

### Functions

- [endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator](EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint.md#endpointresourcev1getorcreateemailsubscriptionendpointparamcreator)

## References

### default

Renames and re-exports [endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator](EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint.md#endpointresourcev1getorcreateemailsubscriptionendpointparamcreator)

## Type Aliases

### EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams

Ƭ **EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig` | - |
| `requestSystemSubscriptionProperties` | [`RequestSystemSubscriptionProperties`](../interfaces/types.RequestSystemSubscriptionProperties.md) | **`Memberof`** EndpointResourceV1GetOrCreateEmailSubscriptionEndpointApi |

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts:14](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts#L14)

## Functions

### endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator

▸ **endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator**(`...config`): `Promise`\<`RequestArgs`\>

Adds the email subscription endpoint into the system and specifies the role-based access control (RBAC) group that will receive email notifications. Use this endpoint in behavior groups to send emails when an action linked to the behavior group is triggered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`RequestSystemSubscriptionProperties`](../interfaces/types.RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] \| [[`EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams`](EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint.md#endpointresourcev1getorcreateemailsubscriptionendpointparams)] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create an email subscription endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts#L34)
