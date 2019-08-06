[@redhat-cloud-services/notifications-client](../README.md) > [EndpointAttributes](../modules/endpointattributes.md)

# Module: EndpointAttributes

*__export__*: 

*__namespace__*: EndpointAttributes

## Index

### Enumerations

* [LastDeliveryStatusEnum](../enums/endpointattributes.lastdeliverystatusenum.md)

### Properties

* [active](endpointattributes.md#active)
* [lastDeliveryStatus](endpointattributes.md#lastdeliverystatus)
* [lastDeliveryTime](endpointattributes.md#lastdeliverytime)
* [lastFailureTime](endpointattributes.md#lastfailuretime)
* [name](endpointattributes.md#name)
* [url](endpointattributes.md#url)

---

## Properties

<a id="active"></a>

### `<Optional>` active

**● active**: *`boolean`*

*Defined in [api.ts:275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L275)*

A flag determining whether this endpoint should be used

*__type__*: {boolean}

*__memberof__*: EndpointAttributes

___
<a id="lastdeliverystatus"></a>

### `<Optional>` lastDeliveryStatus

**● lastDeliveryStatus**: *[LastDeliveryStatusEnum](../enums/endpointattributes.lastdeliverystatusenum.md)*

*Defined in [api.ts:287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L287)*

Status of the last delivery

*__type__*: {string}

*__memberof__*: EndpointAttributes

___
<a id="lastdeliverytime"></a>

### `<Optional>` lastDeliveryTime

**● lastDeliveryTime**: *`Date` \| `null`*

*Defined in [api.ts:293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L293)*

Timestamp of last delivery attempt

*__type__*: {Date}

*__memberof__*: EndpointAttributes

___
<a id="lastfailuretime"></a>

### `<Optional>` lastFailureTime

**● lastFailureTime**: *`Date`*

*Defined in [api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L299)*

Timestamp of first failure. If the status is "failure", this marks when the endpoint "went down"

*__type__*: {Date}

*__memberof__*: EndpointAttributes

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string`*

*Defined in [api.ts:269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L269)*

Human readable description of the endpoint

*__type__*: {string}

*__memberof__*: EndpointAttributes

___
<a id="url"></a>

### `<Optional>` url

**● url**: *`string`*

*Defined in [api.ts:281](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/hooks/api.ts#L281)*

URL to which messages should be POSTed

*__type__*: {string}

*__memberof__*: EndpointAttributes

___

