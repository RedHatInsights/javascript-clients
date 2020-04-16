[@redhat-cloud-services/notifications-client](../README.md) › [Globals](../globals.md) › [EndpointAttributes](endpointattributes.md)

# Interface: EndpointAttributes

**`export`** 

**`interface`** EndpointAttributes

## Hierarchy

* **EndpointAttributes**

## Index

### Properties

* [active](endpointattributes.md#optional-active)
* [last_delivery_status](endpointattributes.md#optional-last_delivery_status)
* [last_delivery_time](endpointattributes.md#optional-last_delivery_time)
* [last_failure_time](endpointattributes.md#optional-last_failure_time)
* [name](endpointattributes.md#optional-name)
* [url](endpointattributes.md#optional-url)

## Properties

### `Optional` active

• **active**? : *boolean*

*Defined in [packages/hooks/api.ts:208](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L208)*

A flag determining whether this endpoint should be used

**`memberof`** EndpointAttributes

___

### `Optional` last_delivery_status

• **last_delivery_status**? : *[EndpointAttributesLastDeliveryStatusEnum](../enums/endpointattributeslastdeliverystatusenum.md)*

*Defined in [packages/hooks/api.ts:220](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L220)*

Status of the last delivery

**`memberof`** EndpointAttributes

___

### `Optional` last_delivery_time

• **last_delivery_time**? : *string | null*

*Defined in [packages/hooks/api.ts:226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L226)*

Timestamp of last delivery attempt

**`memberof`** EndpointAttributes

___

### `Optional` last_failure_time

• **last_failure_time**? : *string*

*Defined in [packages/hooks/api.ts:232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L232)*

Timestamp of first failure. If the status is \"failure\", this marks when the endpoint \"went down\"

**`memberof`** EndpointAttributes

___

### `Optional` name

• **name**? : *string*

*Defined in [packages/hooks/api.ts:202](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L202)*

Human readable description of the endpoint

**`memberof`** EndpointAttributes

___

### `Optional` url

• **url**? : *string*

*Defined in [packages/hooks/api.ts:214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L214)*

URL to which messages should be POSTed

**`memberof`** EndpointAttributes
