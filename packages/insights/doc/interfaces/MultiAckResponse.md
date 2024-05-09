[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / MultiAckResponse

# Interface: MultiAckResponse

The response from adding or deleting multiple acks on a rule.  For backward compatibility we include the count, and then list the impacted systems.

**`Export`**

MultiAckResponse

## Table of contents

### Properties

- [count](MultiAckResponse.md#count)
- [host\_ids](MultiAckResponse.md#host_ids)

## Properties

### count

• **count**: `number`

**`Memberof`**

MultiAckResponse

#### Defined in

[api.ts:478](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L478)

___

### host\_ids

• **host\_ids**: `string`[]

**`Memberof`**

MultiAckResponse

#### Defined in

[api.ts:484](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/insights/api.ts#L484)
