[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [PlaybookRunExecutorDetails](playbookrunexecutordetails.md)

# Interface: PlaybookRunExecutorDetails

**`export`** 

**`interface`** PlaybookRunExecutorDetails

## Hierarchy

* **PlaybookRunExecutorDetails**

## Index

### Properties

* [createdAt](playbookrunexecutordetails.md#createdat)
* [createdBy](playbookrunexecutordetails.md#createdby)
* [executors](playbookrunexecutordetails.md#executors)
* [id](playbookrunexecutordetails.md#optional-id)
* [remediationId](playbookrunexecutordetails.md#remediationid)
* [status](playbookrunexecutordetails.md#status)
* [updatedAt](playbookrunexecutordetails.md#updatedat)

## Properties

###  createdAt

• **createdAt**: *Date*

*Defined in [api.ts:415](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L415)*

**`type`** {Date}

**`memberof`** PlaybookRunExecutorDetails

___

###  createdBy

• **createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:409](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L409)*

**`type`** {UserOut}

**`memberof`** PlaybookRunExecutorDetails

___

###  executors

• **executors**: *Array‹[PlaybookExecutorDetails](playbookexecutordetails.md)›*

*Defined in [api.ts:397](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L397)*

**`type`** {Array<PlaybookExecutorDetails>}

**`memberof`** PlaybookRunExecutorDetails

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:391](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L391)*

**`type`** {string}

**`memberof`** PlaybookRunExecutorDetails

___

###  remediationId

• **remediationId**: *string*

*Defined in [api.ts:403](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L403)*

**`type`** {string}

**`memberof`** PlaybookRunExecutorDetails

___

###  status

• **status**: *[PlaybookRunStatus](../enums/playbookrunstatus.md)*

*Defined in [api.ts:427](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L427)*

**`type`** {PlaybookRunStatus}

**`memberof`** PlaybookRunExecutorDetails

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [api.ts:421](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L421)*

**`type`** {Date}

**`memberof`** PlaybookRunExecutorDetails
