[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / VmaasUpdatesV3Request

# Interface: VmaasUpdatesV3Request

**`Export`**

VmaasUpdatesV3Request

## Table of contents

### Properties

- [basearch](VmaasUpdatesV3Request.md#basearch)
- [epoch\_required](VmaasUpdatesV3Request.md#epoch_required)
- [latest\_only](VmaasUpdatesV3Request.md#latest_only)
- [modules\_list](VmaasUpdatesV3Request.md#modules_list)
- [optimistic\_updates](VmaasUpdatesV3Request.md#optimistic_updates)
- [package\_list](VmaasUpdatesV3Request.md#package_list)
- [releasever](VmaasUpdatesV3Request.md#releasever)
- [repository\_list](VmaasUpdatesV3Request.md#repository_list)
- [repository\_paths](VmaasUpdatesV3Request.md#repository_paths)
- [security\_only](VmaasUpdatesV3Request.md#security_only)
- [third\_party](VmaasUpdatesV3Request.md#third_party)

## Properties

### basearch

• `Optional` **basearch**: `string`

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3429

___

### epoch\_required

• `Optional` **epoch\_required**: `boolean`

VMaaS will check package_list and return error if we provide package_list without epochs

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3435

___

### latest\_only

• `Optional` **latest\_only**: `boolean`

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3441

___

### modules\_list

• `Optional` **modules\_list**: [`VmaasUpdatesV3RequestModulesList`](VmaasUpdatesV3RequestModulesList.md)[]

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3447

___

### optimistic\_updates

• `Optional` **optimistic\_updates**: `boolean`

Search for updates of unknown package EVRAs.

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3453

___

### package\_list

• `Optional` **package\_list**: `string`[]

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3459

___

### releasever

• `Optional` **releasever**: `string`

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3465

___

### repository\_list

• `Optional` **repository\_list**: `string`[]

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3471

___

### repository\_paths

• `Optional` **repository\_paths**: `string`[]

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3477

___

### security\_only

• `Optional` **security\_only**: `boolean`

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3483

___

### third\_party

• `Optional` **third\_party**: `boolean`

Include content from \\\"third party\\\" repositories into the response, disabled by default.

**`Memberof`**

VmaasUpdatesV3Request

#### Defined in

types/index.ts:3489
