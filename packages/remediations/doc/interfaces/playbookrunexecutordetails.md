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

*Defined in [api.ts:471](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L471)*

**`type`** {Date}

**`memberof`** PlaybookRunExecutorDetails

___

###  createdBy

• **createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:465](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L465)*

**`type`** {UserOut}

**`memberof`** PlaybookRunExecutorDetails

___

###  executors

• **executors**: *Array‹[PlaybookExecutorDetails](playbookexecutordetails.md)›*

*Defined in [api.ts:453](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L453)*

**`type`** {Array<PlaybookExecutorDetails>}

**`memberof`** PlaybookRunExecutorDetails

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:447](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L447)*

**`type`** {string}

**`memberof`** PlaybookRunExecutorDetails

___

###  remediationId

• **remediationId**: *string*

*Defined in [api.ts:459](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L459)*

**`type`** {string}

**`memberof`** PlaybookRunExecutorDetails

___

###  status

• **status**: *[PlaybookRunStatus](../enums/playbookrunstatus.md)*

*Defined in [api.ts:483](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L483)*

**`type`** {PlaybookRunStatus}

**`memberof`** PlaybookRunExecutorDetails

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [api.ts:477](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L477)*

**`type`** {Date}

**`memberof`** PlaybookRunExecutorDetails
