/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTableaulogin: OnCreateTableauloginSubscription;
  onUpdateTableaulogin: OnUpdateTableauloginSubscription;
  onDeleteTableaulogin: OnDeleteTableauloginSubscription;
  onCreateQuicksightlogin: OnCreateQuicksightloginSubscription;
  onUpdateQuicksightlogin: OnUpdateQuicksightloginSubscription;
  onDeleteQuicksightlogin: OnDeleteQuicksightloginSubscription;
  onCreateCustomer: OnCreateCustomerSubscription;
  onUpdateCustomer: OnUpdateCustomerSubscription;
  onDeleteCustomer: OnDeleteCustomerSubscription;
  onCreateDepartment: OnCreateDepartmentSubscription;
  onUpdateDepartment: OnUpdateDepartmentSubscription;
  onDeleteDepartment: OnDeleteDepartmentSubscription;
  onCreateBIMProject: OnCreateBIMProjectSubscription;
  onUpdateBIMProject: OnUpdateBIMProjectSubscription;
  onDeleteBIMProject: OnDeleteBIMProjectSubscription;
  onCreateDataset: OnCreateDatasetSubscription;
  onUpdateDataset: OnUpdateDatasetSubscription;
  onDeleteDataset: OnDeleteDatasetSubscription;
  onCreateFile: OnCreateFileSubscription;
  onUpdateFile: OnUpdateFileSubscription;
  onDeleteFile: OnDeleteFileSubscription;
  onCreateDatasources: OnCreateDatasourcesSubscription;
  onUpdateDatasources: OnUpdateDatasourcesSubscription;
  onDeleteDatasources: OnDeleteDatasourcesSubscription;
  onCreateTableauProject: OnCreateTableauProjectSubscription;
  onUpdateTableauProject: OnUpdateTableauProjectSubscription;
  onDeleteTableauProject: OnDeleteTableauProjectSubscription;
  onCreateTableauEnv: OnCreateTableauEnvSubscription;
  onUpdateTableauEnv: OnUpdateTableauEnvSubscription;
  onDeleteTableauEnv: OnDeleteTableauEnvSubscription;
  onCreateTaleauWorkbook: OnCreateTaleauWorkbookSubscription;
  onUpdateTaleauWorkbook: OnUpdateTaleauWorkbookSubscription;
  onDeleteTaleauWorkbook: OnDeleteTaleauWorkbookSubscription;
  onCreateTableauSheet: OnCreateTableauSheetSubscription;
  onUpdateTableauSheet: OnUpdateTableauSheetSubscription;
  onDeleteTableauSheet: OnDeleteTableauSheetSubscription;
  onCreateTableauGraph: OnCreateTableauGraphSubscription;
  onUpdateTableauGraph: OnUpdateTableauGraphSubscription;
  onDeleteTableauGraph: OnDeleteTableauGraphSubscription;
  onCreateQuicksightProject: OnCreateQuicksightProjectSubscription;
  onUpdateQuicksightProject: OnUpdateQuicksightProjectSubscription;
  onDeleteQuicksightProject: OnDeleteQuicksightProjectSubscription;
  onCreateQuicksightTemplate: OnCreateQuicksightTemplateSubscription;
  onUpdateQuicksightTemplate: OnUpdateQuicksightTemplateSubscription;
  onDeleteQuicksightTemplate: OnDeleteQuicksightTemplateSubscription;
  onCreateQuicksightAnalysis: OnCreateQuicksightAnalysisSubscription;
  onUpdateQuicksightAnalysis: OnUpdateQuicksightAnalysisSubscription;
  onDeleteQuicksightAnalysis: OnDeleteQuicksightAnalysisSubscription;
  onCreateQuicksightEnv: OnCreateQuicksightEnvSubscription;
  onUpdateQuicksightEnv: OnUpdateQuicksightEnvSubscription;
  onDeleteQuicksightEnv: OnDeleteQuicksightEnvSubscription;
  onCreateQuicksightDashboard: OnCreateQuicksightDashboardSubscription;
  onUpdateQuicksightDashboard: OnUpdateQuicksightDashboardSubscription;
  onDeleteQuicksightDashboard: OnDeleteQuicksightDashboardSubscription;
  onCreateTable: OnCreateTableSubscription;
  onUpdateTable: OnUpdateTableSubscription;
  onDeleteTable: OnDeleteTableSubscription;
  onCreateQuicksightFolder: OnCreateQuicksightFolderSubscription;
  onUpdateQuicksightFolder: OnUpdateQuicksightFolderSubscription;
  onDeleteQuicksightFolder: OnDeleteQuicksightFolderSubscription;
  onCreateQuicksightGroup: OnCreateQuicksightGroupSubscription;
  onUpdateQuicksightGroup: OnUpdateQuicksightGroupSubscription;
  onDeleteQuicksightGroup: OnDeleteQuicksightGroupSubscription;
  onCreateComments: OnCreateCommentsSubscription;
  onUpdateComments: OnUpdateCommentsSubscription;
  onDeleteComments: OnDeleteCommentsSubscription;
  onCreateTprojects: OnCreateTprojectsSubscription;
  onUpdateTprojects: OnUpdateTprojectsSubscription;
  onDeleteTprojects: OnDeleteTprojectsSubscription;
  onCreateTdatasources: OnCreateTdatasourcesSubscription;
  onUpdateTdatasources: OnUpdateTdatasourcesSubscription;
  onDeleteTdatasources: OnDeleteTdatasourcesSubscription;
  onCreateTworkbooks: OnCreateTworkbooksSubscription;
  onUpdateTworkbooks: OnUpdateTworkbooksSubscription;
  onDeleteTworkbooks: OnDeleteTworkbooksSubscription;
  onCreateTptds: OnCreateTptdsSubscription;
  onUpdateTptds: OnUpdateTptdsSubscription;
  onDeleteTptds: OnDeleteTptdsSubscription;
  onCreateTwtp: OnCreateTwtpSubscription;
  onUpdateTwtp: OnUpdateTwtpSubscription;
  onDeleteTwtp: OnDeleteTwtpSubscription;
  onCreateXmlinput: OnCreateXmlinputSubscription;
  onUpdateXmlinput: OnUpdateXmlinputSubscription;
  onDeleteXmlinput: OnDeleteXmlinputSubscription;
};

export type CreateTableauloginInput = {
  id?: string | null;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  _version?: number | null;
};

export type ModelTableauloginConditionInput = {
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  sitename?: ModelStringInput | null;
  siteurl?: ModelStringInput | null;
  and?: Array<ModelTableauloginConditionInput | null> | null;
  or?: Array<ModelTableauloginConditionInput | null> | null;
  not?: ModelTableauloginConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Tableaulogin = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: TableauEnv | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type TableauEnv = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: TableauProject | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type TableauProject = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: Department | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Department = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: ModelCustomerConnection | null;
  tprojects?: ModelTableauProjectConnection | null;
  qprojects?: ModelQuicksightProjectConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export enum Departments {
  MARKETING = "MARKETING",
  FINANCE = "FINANCE",
  HR = "HR",
  SALES = "SALES",
  PURCHASE = "PURCHASE"
}

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection";
  items: Array<Customer | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Customer = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: Department | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelTableauProjectConnection = {
  __typename: "ModelTableauProjectConnection";
  items: Array<TableauProject | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuicksightProjectConnection = {
  __typename: "ModelQuicksightProjectConnection";
  items: Array<QuicksightProject | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuicksightProject = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: Department | null;
  templates?: ModelQuicksightTemplateConnection | null;
  env?: ModelQuicksightEnvConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuicksightTemplateConnection = {
  __typename: "ModelQuicksightTemplateConnection";
  items: Array<QuicksightTemplate | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuicksightTemplate = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: QuicksightProject | null;
  qanalysis?: ModelQuicksightAnalysisConnection | null;
  qdashboard?: ModelQuicksightDashboardConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuicksightAnalysisConnection = {
  __typename: "ModelQuicksightAnalysisConnection";
  items: Array<QuicksightAnalysis | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuicksightAnalysis = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: QuicksightTemplate | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuicksightDashboardConnection = {
  __typename: "ModelQuicksightDashboardConnection";
  items: Array<QuicksightDashboard | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuicksightDashboard = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: QuicksightTemplate | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuicksightEnvConnection = {
  __typename: "ModelQuicksightEnvConnection";
  items: Array<QuicksightEnv | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type QuicksightEnv = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: QuicksightProject | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauloginInput = {
  id: string;
  username?: string | null;
  password?: string | null;
  sitename?: string | null;
  siteurl?: string | null;
  _version?: number | null;
};

export type DeleteTableauloginInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightloginInput = {
  id?: string | null;
  awsaccountId: string;
  username: string;
  region: string;
  _version?: number | null;
};

export type ModelQuicksightloginConditionInput = {
  awsaccountId?: ModelIDInput | null;
  username?: ModelStringInput | null;
  region?: ModelStringInput | null;
  and?: Array<ModelQuicksightloginConditionInput | null> | null;
  or?: Array<ModelQuicksightloginConditionInput | null> | null;
  not?: ModelQuicksightloginConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Quicksightlogin = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: QuicksightEnv | null;
  xmlinput?: ModelxmlinputConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelxmlinputConnection = {
  __typename: "ModelxmlinputConnection";
  items: Array<xmlinput | null>;
  nextToken?: string | null;
};

export type xmlinput = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: Quicksightlogin | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightloginInput = {
  id: string;
  awsaccountId?: string | null;
  username?: string | null;
  region?: string | null;
  _version?: number | null;
};

export type DeleteQuicksightloginInput = {
  id: string;
  _version?: number | null;
};

export type CreateCustomerInput = {
  name: string;
  DName: Departments;
  Did: string;
  _version?: number | null;
};

export type ModelCustomerConditionInput = {
  DName?: ModelDepartmentsInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
};

export type ModelDepartmentsInput = {
  eq?: Departments | null;
  ne?: Departments | null;
};

export type UpdateCustomerInput = {
  name: string;
  DName?: Departments | null;
  Did?: string | null;
  _version?: number | null;
};

export type DeleteCustomerInput = {
  name: string;
  _version?: number | null;
};

export type CreateDepartmentInput = {
  Did: string;
  DName: Departments;
  id?: string | null;
  _version?: number | null;
};

export type ModelDepartmentConditionInput = {
  Did?: ModelIDInput | null;
  DName?: ModelDepartmentsInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
};

export type UpdateDepartmentInput = {
  Did?: string | null;
  DName?: Departments | null;
  id: string;
  _version?: number | null;
};

export type DeleteDepartmentInput = {
  id: string;
  _version?: number | null;
};

export type CreateBIMProjectInput = {
  DName: Departments;
  UserName: string;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id?: string | null;
  _version?: number | null;
};

export enum BIPlatform {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}

export type ModelBIMProjectConditionInput = {
  DName?: ModelDepartmentsInput | null;
  UserName?: ModelIDInput | null;
  Pname?: ModelStringInput | null;
  source?: ModelBIPlatformInput | null;
  destination?: ModelBIPlatformInput | null;
  and?: Array<ModelBIMProjectConditionInput | null> | null;
  or?: Array<ModelBIMProjectConditionInput | null> | null;
  not?: ModelBIMProjectConditionInput | null;
};

export type ModelBIPlatformInput = {
  eq?: BIPlatform | null;
  ne?: BIPlatform | null;
};

export type BIMProject = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: Customer | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBIMProjectInput = {
  DName?: Departments | null;
  UserName?: string | null;
  Pname?: string | null;
  source?: BIPlatform | null;
  destination?: BIPlatform | null;
  id: string;
  _version?: number | null;
};

export type DeleteBIMProjectInput = {
  id: string;
  _version?: number | null;
};

export type CreateDatasetInput = {
  datasetid: string;
  name: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelDatasetConditionInput = {
  datasetid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDatasetConditionInput | null> | null;
  or?: Array<ModelDatasetConditionInput | null> | null;
  not?: ModelDatasetConditionInput | null;
};

export type dataset = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: ModeldatasourcesConnection | null;
  Files?: ModelFileConnection | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModeldatasourcesConnection = {
  __typename: "ModeldatasourcesConnection";
  items: Array<datasources | null>;
  nextToken?: string | null;
};

export type datasources = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: dataset | null;
  table?: ModelTableConnection | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection";
  items: Array<Table | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Table = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: datasources | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelFileConnection = {
  __typename: "ModelFileConnection";
  items: Array<File | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type File = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: dataset | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasetInput = {
  datasetid?: string | null;
  name?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteDatasetInput = {
  id: string;
  _version?: number | null;
};

export type CreateFileInput = {
  name: string;
  url: string;
  datasetid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelFileConditionInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelFileConditionInput | null> | null;
  or?: Array<ModelFileConditionInput | null> | null;
  not?: ModelFileConditionInput | null;
};

export type UpdateFileInput = {
  name?: string | null;
  url?: string | null;
  datasetid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteFileInput = {
  id: string;
  _version?: number | null;
};

export type CreateDatasourcesInput = {
  dsid: string;
  name: string;
  datasetid: string;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelDatasourcesConditionInput = {
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  databaseserver?: ModelStringInput | null;
  port?: ModelIntInput | null;
  databasename?: ModelStringInput | null;
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelDatasourcesConditionInput | null> | null;
  or?: Array<ModelDatasourcesConditionInput | null> | null;
  not?: ModelDatasourcesConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDatasourcesInput = {
  dsid?: string | null;
  name?: string | null;
  datasetid?: string | null;
  databaseserver?: string | null;
  port?: number | null;
  databasename?: string | null;
  username?: string | null;
  password?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteDatasourcesInput = {
  id: string;
  _version?: number | null;
};

export type CreateTableauProjectInput = {
  tpid: string;
  name: string;
  Did: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTableauProjectConditionInput = {
  tpid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelTableauProjectConditionInput | null> | null;
  or?: Array<ModelTableauProjectConditionInput | null> | null;
  not?: ModelTableauProjectConditionInput | null;
};

export type UpdateTableauProjectInput = {
  tpid?: string | null;
  name?: string | null;
  Did?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTableauProjectInput = {
  id: string;
  _version?: number | null;
};

export type CreateTableauEnvInput = {
  name: string;
  tpid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTableauEnvConditionInput = {
  name?: ModelStringInput | null;
  tpid?: ModelIDInput | null;
  and?: Array<ModelTableauEnvConditionInput | null> | null;
  or?: Array<ModelTableauEnvConditionInput | null> | null;
  not?: ModelTableauEnvConditionInput | null;
};

export type UpdateTableauEnvInput = {
  name?: string | null;
  tpid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTableauEnvInput = {
  id: string;
  _version?: number | null;
};

export type CreateTaleauWorkbookInput = {
  name: string;
  tpid: string;
  twbid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTaleauWorkbookConditionInput = {
  name?: ModelStringInput | null;
  tpid?: ModelIDInput | null;
  twbid?: ModelIDInput | null;
  and?: Array<ModelTaleauWorkbookConditionInput | null> | null;
  or?: Array<ModelTaleauWorkbookConditionInput | null> | null;
  not?: ModelTaleauWorkbookConditionInput | null;
};

export type TaleauWorkbook = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: TableauProject | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTaleauWorkbookInput = {
  name?: string | null;
  tpid?: string | null;
  twbid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTaleauWorkbookInput = {
  id: string;
  _version?: number | null;
};

export type CreateTableauSheetInput = {
  name: string;
  twbid: string;
  tsid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTableauSheetConditionInput = {
  name?: ModelStringInput | null;
  twbid?: ModelIDInput | null;
  tsid?: ModelIDInput | null;
  and?: Array<ModelTableauSheetConditionInput | null> | null;
  or?: Array<ModelTableauSheetConditionInput | null> | null;
  not?: ModelTableauSheetConditionInput | null;
};

export type TableauSheet = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: TaleauWorkbook | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauSheetInput = {
  name?: string | null;
  twbid?: string | null;
  tsid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTableauSheetInput = {
  id: string;
  _version?: number | null;
};

export type CreateTableauGraphInput = {
  name: string;
  tsid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTableauGraphConditionInput = {
  name?: ModelStringInput | null;
  tsid?: ModelIDInput | null;
  and?: Array<ModelTableauGraphConditionInput | null> | null;
  or?: Array<ModelTableauGraphConditionInput | null> | null;
  not?: ModelTableauGraphConditionInput | null;
};

export type TableauGraph = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: TableauSheet | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauGraphInput = {
  name?: string | null;
  tsid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTableauGraphInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightProjectInput = {
  id?: string | null;
  name: string;
  Did: string;
  _version?: number | null;
};

export type ModelQuicksightProjectConditionInput = {
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelQuicksightProjectConditionInput | null> | null;
  or?: Array<ModelQuicksightProjectConditionInput | null> | null;
  not?: ModelQuicksightProjectConditionInput | null;
};

export type UpdateQuicksightProjectInput = {
  id: string;
  name?: string | null;
  Did?: string | null;
  _version?: number | null;
};

export type DeleteQuicksightProjectInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightTemplateInput = {
  id?: string | null;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  _version?: number | null;
};

export type ModelQuicksightTemplateConditionInput = {
  name?: ModelStringInput | null;
  sourceanalysisId?: ModelIDInput | null;
  Qpid?: ModelIDInput | null;
  and?: Array<ModelQuicksightTemplateConditionInput | null> | null;
  or?: Array<ModelQuicksightTemplateConditionInput | null> | null;
  not?: ModelQuicksightTemplateConditionInput | null;
};

export type UpdateQuicksightTemplateInput = {
  id: string;
  name?: string | null;
  sourceanalysisId?: string | null;
  Qpid?: string | null;
  _version?: number | null;
};

export type DeleteQuicksightTemplateInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightAnalysisInput = {
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelQuicksightAnalysisConditionInput = {
  name?: ModelStringInput | null;
  QuicksightTemplateId?: ModelIDInput | null;
  sourceanalysisId?: ModelIDInput | null;
  and?: Array<ModelQuicksightAnalysisConditionInput | null> | null;
  or?: Array<ModelQuicksightAnalysisConditionInput | null> | null;
  not?: ModelQuicksightAnalysisConditionInput | null;
};

export type UpdateQuicksightAnalysisInput = {
  name?: string | null;
  QuicksightTemplateId?: string | null;
  sourceanalysisId?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteQuicksightAnalysisInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightEnvInput = {
  name: string;
  Qpid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelQuicksightEnvConditionInput = {
  name?: ModelStringInput | null;
  Qpid?: ModelIDInput | null;
  and?: Array<ModelQuicksightEnvConditionInput | null> | null;
  or?: Array<ModelQuicksightEnvConditionInput | null> | null;
  not?: ModelQuicksightEnvConditionInput | null;
};

export type UpdateQuicksightEnvInput = {
  name?: string | null;
  Qpid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteQuicksightEnvInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightDashboardInput = {
  name: string;
  qtid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelQuicksightDashboardConditionInput = {
  name?: ModelStringInput | null;
  qtid?: ModelIDInput | null;
  and?: Array<ModelQuicksightDashboardConditionInput | null> | null;
  or?: Array<ModelQuicksightDashboardConditionInput | null> | null;
  not?: ModelQuicksightDashboardConditionInput | null;
};

export type UpdateQuicksightDashboardInput = {
  name?: string | null;
  qtid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteQuicksightDashboardInput = {
  id: string;
  _version?: number | null;
};

export type CreateTableInput = {
  name: string;
  dsid: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelTableConditionInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelTableConditionInput | null> | null;
  or?: Array<ModelTableConditionInput | null> | null;
  not?: ModelTableConditionInput | null;
};

export type UpdateTableInput = {
  name?: string | null;
  dsid?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteTableInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightFolderInput = {
  name: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelQuicksightFolderConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightFolderConditionInput | null> | null;
  or?: Array<ModelQuicksightFolderConditionInput | null> | null;
  not?: ModelQuicksightFolderConditionInput | null;
};

export type QuicksightFolder = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightFolderInput = {
  name?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteQuicksightFolderInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuicksightGroupInput = {
  name: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelQuicksightGroupConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightGroupConditionInput | null> | null;
  or?: Array<ModelQuicksightGroupConditionInput | null> | null;
  not?: ModelQuicksightGroupConditionInput | null;
};

export type QuicksightGroup = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightGroupInput = {
  name?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteQuicksightGroupInput = {
  id: string;
  _version?: number | null;
};

export type CreateCommentsInput = {
  comments: string;
  id?: string | null;
  _version?: number | null;
};

export type ModelCommentsConditionInput = {
  comments?: ModelStringInput | null;
  and?: Array<ModelCommentsConditionInput | null> | null;
  or?: Array<ModelCommentsConditionInput | null> | null;
  not?: ModelCommentsConditionInput | null;
};

export type comments = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCommentsInput = {
  comments?: string | null;
  id: string;
  _version?: number | null;
};

export type DeleteCommentsInput = {
  id: string;
  _version?: number | null;
};

export type CreateTprojectsInput = {
  id?: string | null;
  name: string;
  description: string;
  _version?: number | null;
};

export type ModelTprojectsConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTprojectsConditionInput | null> | null;
  or?: Array<ModelTprojectsConditionInput | null> | null;
  not?: ModelTprojectsConditionInput | null;
};

export type tprojects = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTprojectsInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type DeleteTprojectsInput = {
  id: string;
  _version?: number | null;
};

export type CreateTdatasourcesInput = {
  id?: string | null;
  filepath: string;
  name: string;
  _version?: number | null;
};

export type ModelTdatasourcesConditionInput = {
  filepath?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTdatasourcesConditionInput | null> | null;
  or?: Array<ModelTdatasourcesConditionInput | null> | null;
  not?: ModelTdatasourcesConditionInput | null;
};

export type tdatasources = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTdatasourcesInput = {
  id: string;
  filepath?: string | null;
  name?: string | null;
  _version?: number | null;
};

export type DeleteTdatasourcesInput = {
  id: string;
  _version?: number | null;
};

export type CreateTworkbooksInput = {
  name: string;
  id?: string | null;
  projectname: string;
  _version?: number | null;
};

export type ModelTworkbooksConditionInput = {
  name?: ModelStringInput | null;
  projectname?: ModelStringInput | null;
  and?: Array<ModelTworkbooksConditionInput | null> | null;
  or?: Array<ModelTworkbooksConditionInput | null> | null;
  not?: ModelTworkbooksConditionInput | null;
};

export type tworkbooks = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTworkbooksInput = {
  name?: string | null;
  id: string;
  projectname?: string | null;
  _version?: number | null;
};

export type DeleteTworkbooksInput = {
  id: string;
  _version?: number | null;
};

export type CreateTptdsInput = {
  id?: string | null;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  _version?: number | null;
};

export type ModelTptdsConditionInput = {
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  pname?: ModelStringInput | null;
  filepath?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelTptdsConditionInput | null> | null;
  or?: Array<ModelTptdsConditionInput | null> | null;
  not?: ModelTptdsConditionInput | null;
};

export type tptds = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTptdsInput = {
  id: string;
  dsid?: string | null;
  name?: string | null;
  pname?: string | null;
  filepath?: string | null;
  username?: string | null;
  _version?: number | null;
};

export type DeleteTptdsInput = {
  id: string;
  _version?: number | null;
};

export type CreateTwtpInput = {
  id?: string | null;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  _version?: number | null;
};

export type ModelTwtpConditionInput = {
  pid?: ModelIDInput | null;
  pname?: ModelStringInput | null;
  workbookname?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelTwtpConditionInput | null> | null;
  or?: Array<ModelTwtpConditionInput | null> | null;
  not?: ModelTwtpConditionInput | null;
};

export type twtp = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTwtpInput = {
  id: string;
  pid?: string | null;
  pname?: string | null;
  workbookname?: string | null;
  username?: string | null;
  _version?: number | null;
};

export type DeleteTwtpInput = {
  id: string;
  _version?: number | null;
};

export type CreateXmlinputInput = {
  id?: string | null;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  _version?: number | null;
};

export type ModelXmlinputConditionInput = {
  sheetname?: ModelStringInput | null;
  xaxis?: ModelStringInput | null;
  yaxis?: ModelStringInput | null;
  charttype?: ModelStringInput | null;
  qsid?: ModelIDInput | null;
  title?: ModelStringInput | null;
  formula?: ModelStringInput | null;
  aggregationfun?: ModelStringInput | null;
  percentileval?: ModelStringInput | null;
  and?: Array<ModelXmlinputConditionInput | null> | null;
  or?: Array<ModelXmlinputConditionInput | null> | null;
  not?: ModelXmlinputConditionInput | null;
};

export type UpdateXmlinputInput = {
  id: string;
  sheetname?: string | null;
  xaxis?: string | null;
  yaxis?: string | null;
  charttype?: string | null;
  qsid?: string | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  _version?: number | null;
};

export type DeleteXmlinputInput = {
  id: string;
  _version?: number | null;
};

export type message = {
  __typename: "message";
  body: string;
  body1: string;
  body2: string;
};

export type quick = {
  __typename: "quick";
  body: string;
};

export type aws = {
  __typename: "aws";
  body: string;
};

export type tabauth = {
  __typename: "tabauth";
  body: string;
};

export type getwb = {
  __typename: "getwb";
  body: string;
};

export type ModelTableauloginFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  sitename?: ModelStringInput | null;
  siteurl?: ModelStringInput | null;
  and?: Array<ModelTableauloginFilterInput | null> | null;
  or?: Array<ModelTableauloginFilterInput | null> | null;
  not?: ModelTableauloginFilterInput | null;
};

export type ModelTableauloginConnection = {
  __typename: "ModelTableauloginConnection";
  items: Array<Tableaulogin | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuicksightloginFilterInput = {
  id?: ModelIDInput | null;
  awsaccountId?: ModelIDInput | null;
  username?: ModelStringInput | null;
  region?: ModelStringInput | null;
  and?: Array<ModelQuicksightloginFilterInput | null> | null;
  or?: Array<ModelQuicksightloginFilterInput | null> | null;
  not?: ModelQuicksightloginFilterInput | null;
};

export type ModelQuicksightloginConnection = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<Quicksightlogin | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCustomerFilterInput = {
  name?: ModelIDInput | null;
  DName?: ModelDepartmentsInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelDepartmentFilterInput = {
  Did?: ModelIDInput | null;
  DName?: ModelDepartmentsInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelBIMProjectFilterInput = {
  DName?: ModelDepartmentsInput | null;
  UserName?: ModelIDInput | null;
  Pname?: ModelStringInput | null;
  source?: ModelBIPlatformInput | null;
  destination?: ModelBIPlatformInput | null;
  and?: Array<ModelBIMProjectFilterInput | null> | null;
  or?: Array<ModelBIMProjectFilterInput | null> | null;
  not?: ModelBIMProjectFilterInput | null;
};

export type ModelBIMProjectConnection = {
  __typename: "ModelBIMProjectConnection";
  items: Array<BIMProject | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelDatasetFilterInput = {
  datasetid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDatasetFilterInput | null> | null;
  or?: Array<ModelDatasetFilterInput | null> | null;
  not?: ModelDatasetFilterInput | null;
};

export type ModelDatasetConnection = {
  __typename: "ModelDatasetConnection";
  items: Array<dataset | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelFileFilterInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  and?: Array<ModelFileFilterInput | null> | null;
  or?: Array<ModelFileFilterInput | null> | null;
  not?: ModelFileFilterInput | null;
};

export type ModelDatasourcesFilterInput = {
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  datasetid?: ModelIDInput | null;
  databaseserver?: ModelStringInput | null;
  port?: ModelIntInput | null;
  databasename?: ModelStringInput | null;
  username?: ModelStringInput | null;
  password?: ModelStringInput | null;
  and?: Array<ModelDatasourcesFilterInput | null> | null;
  or?: Array<ModelDatasourcesFilterInput | null> | null;
  not?: ModelDatasourcesFilterInput | null;
};

export type ModelDatasourcesConnection = {
  __typename: "ModelDatasourcesConnection";
  items: Array<datasources | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTableauProjectFilterInput = {
  tpid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelTableauProjectFilterInput | null> | null;
  or?: Array<ModelTableauProjectFilterInput | null> | null;
  not?: ModelTableauProjectFilterInput | null;
};

export type ModelTableauEnvFilterInput = {
  name?: ModelStringInput | null;
  tpid?: ModelIDInput | null;
  and?: Array<ModelTableauEnvFilterInput | null> | null;
  or?: Array<ModelTableauEnvFilterInput | null> | null;
  not?: ModelTableauEnvFilterInput | null;
};

export type ModelTableauEnvConnection = {
  __typename: "ModelTableauEnvConnection";
  items: Array<TableauEnv | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTaleauWorkbookFilterInput = {
  name?: ModelStringInput | null;
  tpid?: ModelIDInput | null;
  twbid?: ModelIDInput | null;
  and?: Array<ModelTaleauWorkbookFilterInput | null> | null;
  or?: Array<ModelTaleauWorkbookFilterInput | null> | null;
  not?: ModelTaleauWorkbookFilterInput | null;
};

export type ModelTaleauWorkbookConnection = {
  __typename: "ModelTaleauWorkbookConnection";
  items: Array<TaleauWorkbook | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTableauSheetFilterInput = {
  name?: ModelStringInput | null;
  twbid?: ModelIDInput | null;
  tsid?: ModelIDInput | null;
  and?: Array<ModelTableauSheetFilterInput | null> | null;
  or?: Array<ModelTableauSheetFilterInput | null> | null;
  not?: ModelTableauSheetFilterInput | null;
};

export type ModelTableauSheetConnection = {
  __typename: "ModelTableauSheetConnection";
  items: Array<TableauSheet | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTableauGraphFilterInput = {
  name?: ModelStringInput | null;
  tsid?: ModelIDInput | null;
  and?: Array<ModelTableauGraphFilterInput | null> | null;
  or?: Array<ModelTableauGraphFilterInput | null> | null;
  not?: ModelTableauGraphFilterInput | null;
};

export type ModelTableauGraphConnection = {
  __typename: "ModelTableauGraphConnection";
  items: Array<TableauGraph | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuicksightProjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  Did?: ModelIDInput | null;
  and?: Array<ModelQuicksightProjectFilterInput | null> | null;
  or?: Array<ModelQuicksightProjectFilterInput | null> | null;
  not?: ModelQuicksightProjectFilterInput | null;
};

export type ModelQuicksightTemplateFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  sourceanalysisId?: ModelIDInput | null;
  Qpid?: ModelIDInput | null;
  and?: Array<ModelQuicksightTemplateFilterInput | null> | null;
  or?: Array<ModelQuicksightTemplateFilterInput | null> | null;
  not?: ModelQuicksightTemplateFilterInput | null;
};

export type ModelQuicksightAnalysisFilterInput = {
  name?: ModelStringInput | null;
  QuicksightTemplateId?: ModelIDInput | null;
  sourceanalysisId?: ModelIDInput | null;
  and?: Array<ModelQuicksightAnalysisFilterInput | null> | null;
  or?: Array<ModelQuicksightAnalysisFilterInput | null> | null;
  not?: ModelQuicksightAnalysisFilterInput | null;
};

export type ModelQuicksightEnvFilterInput = {
  name?: ModelStringInput | null;
  Qpid?: ModelIDInput | null;
  and?: Array<ModelQuicksightEnvFilterInput | null> | null;
  or?: Array<ModelQuicksightEnvFilterInput | null> | null;
  not?: ModelQuicksightEnvFilterInput | null;
};

export type ModelQuicksightDashboardFilterInput = {
  name?: ModelStringInput | null;
  qtid?: ModelIDInput | null;
  and?: Array<ModelQuicksightDashboardFilterInput | null> | null;
  or?: Array<ModelQuicksightDashboardFilterInput | null> | null;
  not?: ModelQuicksightDashboardFilterInput | null;
};

export type ModelTableFilterInput = {
  name?: ModelStringInput | null;
  dsid?: ModelIDInput | null;
  and?: Array<ModelTableFilterInput | null> | null;
  or?: Array<ModelTableFilterInput | null> | null;
  not?: ModelTableFilterInput | null;
};

export type ModelQuicksightFolderFilterInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightFolderFilterInput | null> | null;
  or?: Array<ModelQuicksightFolderFilterInput | null> | null;
  not?: ModelQuicksightFolderFilterInput | null;
};

export type ModelQuicksightFolderConnection = {
  __typename: "ModelQuicksightFolderConnection";
  items: Array<QuicksightFolder | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuicksightGroupFilterInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelQuicksightGroupFilterInput | null> | null;
  or?: Array<ModelQuicksightGroupFilterInput | null> | null;
  not?: ModelQuicksightGroupFilterInput | null;
};

export type ModelQuicksightGroupConnection = {
  __typename: "ModelQuicksightGroupConnection";
  items: Array<QuicksightGroup | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCommentsFilterInput = {
  comments?: ModelStringInput | null;
  and?: Array<ModelCommentsFilterInput | null> | null;
  or?: Array<ModelCommentsFilterInput | null> | null;
  not?: ModelCommentsFilterInput | null;
};

export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection";
  items: Array<comments | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTprojectsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTprojectsFilterInput | null> | null;
  or?: Array<ModelTprojectsFilterInput | null> | null;
  not?: ModelTprojectsFilterInput | null;
};

export type ModelTprojectsConnection = {
  __typename: "ModelTprojectsConnection";
  items: Array<tprojects | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTdatasourcesFilterInput = {
  id?: ModelIDInput | null;
  filepath?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTdatasourcesFilterInput | null> | null;
  or?: Array<ModelTdatasourcesFilterInput | null> | null;
  not?: ModelTdatasourcesFilterInput | null;
};

export type ModelTdatasourcesConnection = {
  __typename: "ModelTdatasourcesConnection";
  items: Array<tdatasources | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTworkbooksFilterInput = {
  name?: ModelStringInput | null;
  id?: ModelIDInput | null;
  projectname?: ModelStringInput | null;
  and?: Array<ModelTworkbooksFilterInput | null> | null;
  or?: Array<ModelTworkbooksFilterInput | null> | null;
  not?: ModelTworkbooksFilterInput | null;
};

export type ModelTworkbooksConnection = {
  __typename: "ModelTworkbooksConnection";
  items: Array<tworkbooks | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTptdsFilterInput = {
  id?: ModelIDInput | null;
  dsid?: ModelIDInput | null;
  name?: ModelStringInput | null;
  pname?: ModelStringInput | null;
  filepath?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelTptdsFilterInput | null> | null;
  or?: Array<ModelTptdsFilterInput | null> | null;
  not?: ModelTptdsFilterInput | null;
};

export type ModelTptdsConnection = {
  __typename: "ModelTptdsConnection";
  items: Array<tptds | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTwtpFilterInput = {
  id?: ModelIDInput | null;
  pid?: ModelIDInput | null;
  pname?: ModelStringInput | null;
  workbookname?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelTwtpFilterInput | null> | null;
  or?: Array<ModelTwtpFilterInput | null> | null;
  not?: ModelTwtpFilterInput | null;
};

export type ModelTwtpConnection = {
  __typename: "ModelTwtpConnection";
  items: Array<twtp | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelXmlinputFilterInput = {
  id?: ModelIDInput | null;
  sheetname?: ModelStringInput | null;
  xaxis?: ModelStringInput | null;
  yaxis?: ModelStringInput | null;
  charttype?: ModelStringInput | null;
  qsid?: ModelIDInput | null;
  title?: ModelStringInput | null;
  formula?: ModelStringInput | null;
  aggregationfun?: ModelStringInput | null;
  percentileval?: ModelStringInput | null;
  and?: Array<ModelXmlinputFilterInput | null> | null;
  or?: Array<ModelXmlinputFilterInput | null> | null;
  not?: ModelXmlinputFilterInput | null;
};

export type ModelXmlinputConnection = {
  __typename: "ModelXmlinputConnection";
  items: Array<xmlinput | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauloginMutation = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightloginMutation = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateBIMProjectMutation = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBIMProjectMutation = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteBIMProjectMutation = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDatasetMutation = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteFileMutation = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteDatasourcesMutation = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTableauProjectMutation = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauProjectMutation = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauProjectMutation = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauEnvMutation = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTaleauWorkbookMutation = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTaleauWorkbookMutation = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTaleauWorkbookMutation = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauSheetMutation = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableauGraphMutation = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightProjectMutation = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightProjectMutation = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightProjectMutation = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightTemplateMutation = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightTemplateMutation = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightTemplateMutation = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightAnalysisMutation = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightAnalysisMutation = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightAnalysisMutation = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightEnvMutation = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightEnvMutation = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightEnvMutation = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightDashboardMutation = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightDashboardMutation = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightDashboardMutation = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTableMutation = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightFolderMutation = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteQuicksightGroupMutation = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCommentsMutation = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCommentsMutation = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCommentsMutation = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTprojectsMutation = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTprojectsMutation = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTprojectsMutation = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTdatasourcesMutation = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTdatasourcesMutation = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTdatasourcesMutation = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTworkbooksMutation = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTworkbooksMutation = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTworkbooksMutation = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTptdsMutation = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTptdsMutation = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTptdsMutation = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTwtpMutation = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTwtpMutation = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTwtpMutation = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateXmlinputMutation = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateXmlinputMutation = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteXmlinputMutation = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetMessageQuery = {
  __typename: "message";
  body: string;
  body1: string;
  body2: string;
};

export type GetquickQuery = {
  __typename: "quick";
  body: string;
};

export type GetawsQuery = {
  __typename: "aws";
  body: string;
};

export type TableauauthQuery = {
  __typename: "tabauth";
  body: string;
};

export type GetwbsQuery = {
  __typename: "getwb";
  body: string;
};

export type GetTableauloginQuery = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTableauloginsQuery = {
  __typename: "ModelTableauloginConnection";
  items: Array<{
    __typename: "Tableaulogin";
    id: string;
    username: string;
    password: string;
    sitename: string;
    siteurl: string;
    tenv?: {
      __typename: "TableauEnv";
      name: string;
      tpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauloginsQuery = {
  __typename: "ModelTableauloginConnection";
  items: Array<{
    __typename: "Tableaulogin";
    id: string;
    username: string;
    password: string;
    sitename: string;
    siteurl: string;
    tenv?: {
      __typename: "TableauEnv";
      name: string;
      tpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightloginQuery = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightloginsQuery = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<{
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightloginsQuery = {
  __typename: "ModelQuicksightloginConnection";
  items: Array<{
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetBIMProjectQuery = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListBIMProjectsQuery = {
  __typename: "ModelBIMProjectConnection";
  items: Array<{
    __typename: "BIMProject";
    DName: Departments;
    UserName: string;
    Customer?: {
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Pname: string;
    source: BIPlatform;
    destination: BIPlatform;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncBIMProjectsQuery = {
  __typename: "ModelBIMProjectConnection";
  items: Array<{
    __typename: "BIMProject";
    DName: Departments;
    UserName: string;
    Customer?: {
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    Pname: string;
    source: BIPlatform;
    destination: BIPlatform;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDatasetQuery = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetFileQuery = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    name: string;
    url: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    name: string;
    url: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDatasourcesQuery = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListDatasourcesQuery = {
  __typename: "ModelDatasourcesConnection";
  items: Array<{
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDatasourcesQuery = {
  __typename: "ModelDatasourcesConnection";
  items: Array<{
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTableauProjectQuery = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTableauProjectsQuery = {
  __typename: "ModelTableauProjectConnection";
  items: Array<{
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauProjectsQuery = {
  __typename: "ModelTableauProjectConnection";
  items: Array<{
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTableauEnvQuery = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTableauEnvsQuery = {
  __typename: "ModelTableauEnvConnection";
  items: Array<{
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauEnvsQuery = {
  __typename: "ModelTableauEnvConnection";
  items: Array<{
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTaleauWorkbookQuery = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTaleauWorkbooksQuery = {
  __typename: "ModelTaleauWorkbookConnection";
  items: Array<{
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTaleauWorkbooksQuery = {
  __typename: "ModelTaleauWorkbookConnection";
  items: Array<{
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTableauSheetQuery = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTableauSheetsQuery = {
  __typename: "ModelTableauSheetConnection";
  items: Array<{
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauSheetsQuery = {
  __typename: "ModelTableauSheetConnection";
  items: Array<{
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTableauGraphQuery = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTableauGraphsQuery = {
  __typename: "ModelTableauGraphConnection";
  items: Array<{
    __typename: "TableauGraph";
    name: string;
    tsid: string;
    tsheet?: {
      __typename: "TableauSheet";
      name: string;
      twbid: string;
      tsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTableauGraphsQuery = {
  __typename: "ModelTableauGraphConnection";
  items: Array<{
    __typename: "TableauGraph";
    name: string;
    tsid: string;
    tsheet?: {
      __typename: "TableauSheet";
      name: string;
      twbid: string;
      tsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightProjectQuery = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightProjectsQuery = {
  __typename: "ModelQuicksightProjectConnection";
  items: Array<{
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightProjectsQuery = {
  __typename: "ModelQuicksightProjectConnection";
  items: Array<{
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightTemplateQuery = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightTemplatesQuery = {
  __typename: "ModelQuicksightTemplateConnection";
  items: Array<{
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightTemplatesQuery = {
  __typename: "ModelQuicksightTemplateConnection";
  items: Array<{
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightAnalysisQuery = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightAnalysesQuery = {
  __typename: "ModelQuicksightAnalysisConnection";
  items: Array<{
    __typename: "QuicksightAnalysis";
    name: string;
    QuicksightTemplateId: string;
    sourceanalysisId: string;
    qtemplate?: {
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightAnalysesQuery = {
  __typename: "ModelQuicksightAnalysisConnection";
  items: Array<{
    __typename: "QuicksightAnalysis";
    name: string;
    QuicksightTemplateId: string;
    sourceanalysisId: string;
    qtemplate?: {
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightEnvQuery = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightEnvsQuery = {
  __typename: "ModelQuicksightEnvConnection";
  items: Array<{
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightEnvsQuery = {
  __typename: "ModelQuicksightEnvConnection";
  items: Array<{
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightDashboardQuery = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightDashboardsQuery = {
  __typename: "ModelQuicksightDashboardConnection";
  items: Array<{
    __typename: "QuicksightDashboard";
    name: string;
    qtid: string;
    qtemplate?: {
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightDashboardsQuery = {
  __typename: "ModelQuicksightDashboardConnection";
  items: Array<{
    __typename: "QuicksightDashboard";
    name: string;
    qtid: string;
    qtemplate?: {
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTableQuery = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTablesQuery = {
  __typename: "ModelTableConnection";
  items: Array<{
    __typename: "Table";
    name: string;
    dsid: string;
    datasource?: {
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTablesQuery = {
  __typename: "ModelTableConnection";
  items: Array<{
    __typename: "Table";
    name: string;
    dsid: string;
    datasource?: {
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightFolderQuery = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightFoldersQuery = {
  __typename: "ModelQuicksightFolderConnection";
  items: Array<{
    __typename: "QuicksightFolder";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightFoldersQuery = {
  __typename: "ModelQuicksightFolderConnection";
  items: Array<{
    __typename: "QuicksightFolder";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetQuicksightGroupQuery = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListQuicksightGroupsQuery = {
  __typename: "ModelQuicksightGroupConnection";
  items: Array<{
    __typename: "QuicksightGroup";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncQuicksightGroupsQuery = {
  __typename: "ModelQuicksightGroupConnection";
  items: Array<{
    __typename: "QuicksightGroup";
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCommentsQuery = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentsConnection";
  items: Array<{
    __typename: "comments";
    comments: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCommentsQuery = {
  __typename: "ModelCommentsConnection";
  items: Array<{
    __typename: "comments";
    comments: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTprojectsQuery = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTprojectsQuery = {
  __typename: "ModelTprojectsConnection";
  items: Array<{
    __typename: "tprojects";
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTprojectsQuery = {
  __typename: "ModelTprojectsConnection";
  items: Array<{
    __typename: "tprojects";
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTdatasourcesQuery = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTdatasourcesQuery = {
  __typename: "ModelTdatasourcesConnection";
  items: Array<{
    __typename: "tdatasources";
    id: string;
    filepath: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTdatasourcesQuery = {
  __typename: "ModelTdatasourcesConnection";
  items: Array<{
    __typename: "tdatasources";
    id: string;
    filepath: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTworkbooksQuery = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTworkbooksQuery = {
  __typename: "ModelTworkbooksConnection";
  items: Array<{
    __typename: "tworkbooks";
    name: string;
    id: string;
    projectname: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTworkbooksQuery = {
  __typename: "ModelTworkbooksConnection";
  items: Array<{
    __typename: "tworkbooks";
    name: string;
    id: string;
    projectname: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTptdsQuery = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTptdsQuery = {
  __typename: "ModelTptdsConnection";
  items: Array<{
    __typename: "tptds";
    id: string;
    dsid: string;
    name: string;
    pname: string;
    filepath: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTptdsQuery = {
  __typename: "ModelTptdsConnection";
  items: Array<{
    __typename: "tptds";
    id: string;
    dsid: string;
    name: string;
    pname: string;
    filepath: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTwtpQuery = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTwtpsQuery = {
  __typename: "ModelTwtpConnection";
  items: Array<{
    __typename: "twtp";
    id: string;
    pid: string;
    pname: string;
    workbookname: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTwtpsQuery = {
  __typename: "ModelTwtpConnection";
  items: Array<{
    __typename: "twtp";
    id: string;
    pid: string;
    pname: string;
    workbookname: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetXmlinputQuery = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListXmlinputsQuery = {
  __typename: "ModelXmlinputConnection";
  items: Array<{
    __typename: "xmlinput";
    id: string;
    sheetname: string;
    xaxis: string;
    yaxis: string;
    charttype: string;
    qsid: string;
    quicksight?: {
      __typename: "Quicksightlogin";
      id: string;
      awsaccountId: string;
      username: string;
      region: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    title?: string | null;
    formula?: string | null;
    aggregationfun?: string | null;
    percentileval?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncXmlinputsQuery = {
  __typename: "ModelXmlinputConnection";
  items: Array<{
    __typename: "xmlinput";
    id: string;
    sheetname: string;
    xaxis: string;
    yaxis: string;
    charttype: string;
    qsid: string;
    quicksight?: {
      __typename: "Quicksightlogin";
      id: string;
      awsaccountId: string;
      username: string;
      region: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    title?: string | null;
    formula?: string | null;
    aggregationfun?: string | null;
    percentileval?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauloginSubscription = {
  __typename: "Tableaulogin";
  id: string;
  username: string;
  password: string;
  sitename: string;
  siteurl: string;
  tenv?: {
    __typename: "TableauEnv";
    name: string;
    tpid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightloginSubscription = {
  __typename: "Quicksightlogin";
  id: string;
  awsaccountId: string;
  username: string;
  region: string;
  qenv?: {
    __typename: "QuicksightEnv";
    name: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  xmlinput?: {
    __typename: "ModelxmlinputConnection";
    items: Array<{
      __typename: "xmlinput";
      id: string;
      sheetname: string;
      xaxis: string;
      yaxis: string;
      charttype: string;
      qsid: string;
      title?: string | null;
      formula?: string | null;
      aggregationfun?: string | null;
      percentileval?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  name: string;
  DName: Departments;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  Did: string;
  DName: Departments;
  customers?: {
    __typename: "ModelCustomerConnection";
    items: Array<{
      __typename: "Customer";
      name: string;
      DName: Departments;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  tprojects?: {
    __typename: "ModelTableauProjectConnection";
    items: Array<{
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qprojects?: {
    __typename: "ModelQuicksightProjectConnection";
    items: Array<{
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateBIMProjectSubscription = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateBIMProjectSubscription = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteBIMProjectSubscription = {
  __typename: "BIMProject";
  DName: Departments;
  UserName: string;
  Customer?: {
    __typename: "Customer";
    name: string;
    DName: Departments;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  Pname: string;
  source: BIPlatform;
  destination: BIPlatform;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDatasetSubscription = {
  __typename: "dataset";
  datasetid: string;
  name: string;
  datasources?: {
    __typename: "ModeldatasourcesConnection";
    items: Array<{
      __typename: "datasources";
      dsid: string;
      name: string;
      datasetid: string;
      databaseserver: string;
      port: number;
      databasename: string;
      username: string;
      password: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
  } | null;
  Files?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      name: string;
      url: string;
      datasetid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteFileSubscription = {
  __typename: "File";
  name: string;
  url: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteDatasourcesSubscription = {
  __typename: "datasources";
  dsid: string;
  name: string;
  datasetid: string;
  datasets?: {
    __typename: "dataset";
    datasetid: string;
    name: string;
    datasources?: {
      __typename: "ModeldatasourcesConnection";
      nextToken?: string | null;
    } | null;
    Files?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  table?: {
    __typename: "ModelTableConnection";
    items: Array<{
      __typename: "Table";
      name: string;
      dsid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  databaseserver: string;
  port: number;
  databasename: string;
  username: string;
  password: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTableauProjectSubscription = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauProjectSubscription = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauProjectSubscription = {
  __typename: "TableauProject";
  tpid: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauEnvSubscription = {
  __typename: "TableauEnv";
  name: string;
  tpid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTaleauWorkbookSubscription = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTaleauWorkbookSubscription = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTaleauWorkbookSubscription = {
  __typename: "TaleauWorkbook";
  name: string;
  tpid: string;
  twbid: string;
  tproject?: {
    __typename: "TableauProject";
    tpid: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauSheetSubscription = {
  __typename: "TableauSheet";
  name: string;
  twbid: string;
  tsid: string;
  tworkbook?: {
    __typename: "TaleauWorkbook";
    name: string;
    tpid: string;
    twbid: string;
    tproject?: {
      __typename: "TableauProject";
      tpid: string;
      name: string;
      Did: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableauGraphSubscription = {
  __typename: "TableauGraph";
  name: string;
  tsid: string;
  tsheet?: {
    __typename: "TableauSheet";
    name: string;
    twbid: string;
    tsid: string;
    tworkbook?: {
      __typename: "TaleauWorkbook";
      name: string;
      tpid: string;
      twbid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightProjectSubscription = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightProjectSubscription = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightProjectSubscription = {
  __typename: "QuicksightProject";
  id: string;
  name: string;
  Did: string;
  department?: {
    __typename: "Department";
    Did: string;
    DName: Departments;
    customers?: {
      __typename: "ModelCustomerConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    tprojects?: {
      __typename: "ModelTableauProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qprojects?: {
      __typename: "ModelQuicksightProjectConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  templates?: {
    __typename: "ModelQuicksightTemplateConnection";
    items: Array<{
      __typename: "QuicksightTemplate";
      id: string;
      name: string;
      sourceanalysisId: string;
      Qpid: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  env?: {
    __typename: "ModelQuicksightEnvConnection";
    items: Array<{
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightTemplateSubscription = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightTemplateSubscription = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightTemplateSubscription = {
  __typename: "QuicksightTemplate";
  id: string;
  name: string;
  sourceanalysisId: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  qanalysis?: {
    __typename: "ModelQuicksightAnalysisConnection";
    items: Array<{
      __typename: "QuicksightAnalysis";
      name: string;
      QuicksightTemplateId: string;
      sourceanalysisId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  qdashboard?: {
    __typename: "ModelQuicksightDashboardConnection";
    items: Array<{
      __typename: "QuicksightDashboard";
      name: string;
      qtid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightAnalysisSubscription = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightAnalysisSubscription = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightAnalysisSubscription = {
  __typename: "QuicksightAnalysis";
  name: string;
  QuicksightTemplateId: string;
  sourceanalysisId: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightEnvSubscription = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightEnvSubscription = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightEnvSubscription = {
  __typename: "QuicksightEnv";
  name: string;
  Qpid: string;
  qproject?: {
    __typename: "QuicksightProject";
    id: string;
    name: string;
    Did: string;
    department?: {
      __typename: "Department";
      Did: string;
      DName: Departments;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    templates?: {
      __typename: "ModelQuicksightTemplateConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    env?: {
      __typename: "ModelQuicksightEnvConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightDashboardSubscription = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightDashboardSubscription = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightDashboardSubscription = {
  __typename: "QuicksightDashboard";
  name: string;
  qtid: string;
  qtemplate?: {
    __typename: "QuicksightTemplate";
    id: string;
    name: string;
    sourceanalysisId: string;
    Qpid: string;
    qproject?: {
      __typename: "QuicksightProject";
      id: string;
      name: string;
      Did: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    qanalysis?: {
      __typename: "ModelQuicksightAnalysisConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    qdashboard?: {
      __typename: "ModelQuicksightDashboardConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTableSubscription = {
  __typename: "Table";
  name: string;
  dsid: string;
  datasource?: {
    __typename: "datasources";
    dsid: string;
    name: string;
    datasetid: string;
    datasets?: {
      __typename: "dataset";
      datasetid: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    table?: {
      __typename: "ModelTableConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    databaseserver: string;
    port: number;
    databasename: string;
    username: string;
    password: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightFolderSubscription = {
  __typename: "QuicksightFolder";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteQuicksightGroupSubscription = {
  __typename: "QuicksightGroup";
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCommentsSubscription = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCommentsSubscription = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCommentsSubscription = {
  __typename: "comments";
  comments: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTprojectsSubscription = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTprojectsSubscription = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTprojectsSubscription = {
  __typename: "tprojects";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTdatasourcesSubscription = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTdatasourcesSubscription = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTdatasourcesSubscription = {
  __typename: "tdatasources";
  id: string;
  filepath: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTworkbooksSubscription = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTworkbooksSubscription = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTworkbooksSubscription = {
  __typename: "tworkbooks";
  name: string;
  id: string;
  projectname: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTptdsSubscription = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTptdsSubscription = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTptdsSubscription = {
  __typename: "tptds";
  id: string;
  dsid: string;
  name: string;
  pname: string;
  filepath: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTwtpSubscription = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTwtpSubscription = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTwtpSubscription = {
  __typename: "twtp";
  id: string;
  pid: string;
  pname: string;
  workbookname: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateXmlinputSubscription = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateXmlinputSubscription = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteXmlinputSubscription = {
  __typename: "xmlinput";
  id: string;
  sheetname: string;
  xaxis: string;
  yaxis: string;
  charttype: string;
  qsid: string;
  quicksight?: {
    __typename: "Quicksightlogin";
    id: string;
    awsaccountId: string;
    username: string;
    region: string;
    qenv?: {
      __typename: "QuicksightEnv";
      name: string;
      Qpid: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    xmlinput?: {
      __typename: "ModelxmlinputConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  title?: string | null;
  formula?: string | null;
  aggregationfun?: string | null;
  percentileval?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTableaulogin(
    input: CreateTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<CreateTableauloginMutation> {
    const statement = `mutation CreateTableaulogin($input: CreateTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        createTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauloginMutation>response.data.createTableaulogin;
  }
  async UpdateTableaulogin(
    input: UpdateTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<UpdateTableauloginMutation> {
    const statement = `mutation UpdateTableaulogin($input: UpdateTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        updateTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauloginMutation>response.data.updateTableaulogin;
  }
  async DeleteTableaulogin(
    input: DeleteTableauloginInput,
    condition?: ModelTableauloginConditionInput
  ): Promise<DeleteTableauloginMutation> {
    const statement = `mutation DeleteTableaulogin($input: DeleteTableauloginInput!, $condition: ModelTableauloginConditionInput) {
        deleteTableaulogin(input: $input, condition: $condition) {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauloginMutation>response.data.deleteTableaulogin;
  }
  async CreateQuicksightlogin(
    input: CreateQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<CreateQuicksightloginMutation> {
    const statement = `mutation CreateQuicksightlogin($input: CreateQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        createQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightloginMutation>response.data.createQuicksightlogin;
  }
  async UpdateQuicksightlogin(
    input: UpdateQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<UpdateQuicksightloginMutation> {
    const statement = `mutation UpdateQuicksightlogin($input: UpdateQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        updateQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightloginMutation>response.data.updateQuicksightlogin;
  }
  async DeleteQuicksightlogin(
    input: DeleteQuicksightloginInput,
    condition?: ModelQuicksightloginConditionInput
  ): Promise<DeleteQuicksightloginMutation> {
    const statement = `mutation DeleteQuicksightlogin($input: DeleteQuicksightloginInput!, $condition: ModelQuicksightloginConditionInput) {
        deleteQuicksightlogin(input: $input, condition: $condition) {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightloginMutation>response.data.deleteQuicksightlogin;
  }
  async CreateCustomer(
    input: CreateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!, $condition: ModelCustomerConditionInput) {
        createCustomer(input: $input, condition: $condition) {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!, $condition: ModelCustomerConditionInput) {
        updateCustomer(input: $input, condition: $condition) {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!, $condition: ModelCustomerConditionInput) {
        deleteCustomer(input: $input, condition: $condition) {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateDepartment(
    input: CreateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        createDepartment(input: $input, condition: $condition) {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        updateDepartment(input: $input, condition: $condition) {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        deleteDepartment(input: $input, condition: $condition) {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateBIMProject(
    input: CreateBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<CreateBIMProjectMutation> {
    const statement = `mutation CreateBIMProject($input: CreateBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        createBIMProject(input: $input, condition: $condition) {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBIMProjectMutation>response.data.createBIMProject;
  }
  async UpdateBIMProject(
    input: UpdateBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<UpdateBIMProjectMutation> {
    const statement = `mutation UpdateBIMProject($input: UpdateBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        updateBIMProject(input: $input, condition: $condition) {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBIMProjectMutation>response.data.updateBIMProject;
  }
  async DeleteBIMProject(
    input: DeleteBIMProjectInput,
    condition?: ModelBIMProjectConditionInput
  ): Promise<DeleteBIMProjectMutation> {
    const statement = `mutation DeleteBIMProject($input: DeleteBIMProjectInput!, $condition: ModelBIMProjectConditionInput) {
        deleteBIMProject(input: $input, condition: $condition) {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBIMProjectMutation>response.data.deleteBIMProject;
  }
  async CreateDataset(
    input: CreateDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<CreateDatasetMutation> {
    const statement = `mutation CreateDataset($input: CreateDatasetInput!, $condition: ModelDatasetConditionInput) {
        createDataset(input: $input, condition: $condition) {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatasetMutation>response.data.createDataset;
  }
  async UpdateDataset(
    input: UpdateDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<UpdateDatasetMutation> {
    const statement = `mutation UpdateDataset($input: UpdateDatasetInput!, $condition: ModelDatasetConditionInput) {
        updateDataset(input: $input, condition: $condition) {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatasetMutation>response.data.updateDataset;
  }
  async DeleteDataset(
    input: DeleteDatasetInput,
    condition?: ModelDatasetConditionInput
  ): Promise<DeleteDatasetMutation> {
    const statement = `mutation DeleteDataset($input: DeleteDatasetInput!, $condition: ModelDatasetConditionInput) {
        deleteDataset(input: $input, condition: $condition) {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatasetMutation>response.data.deleteDataset;
  }
  async CreateFile(
    input: CreateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<CreateFileMutation> {
    const statement = `mutation CreateFile($input: CreateFileInput!, $condition: ModelFileConditionInput) {
        createFile(input: $input, condition: $condition) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFileMutation>response.data.createFile;
  }
  async UpdateFile(
    input: UpdateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<UpdateFileMutation> {
    const statement = `mutation UpdateFile($input: UpdateFileInput!, $condition: ModelFileConditionInput) {
        updateFile(input: $input, condition: $condition) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFileMutation>response.data.updateFile;
  }
  async DeleteFile(
    input: DeleteFileInput,
    condition?: ModelFileConditionInput
  ): Promise<DeleteFileMutation> {
    const statement = `mutation DeleteFile($input: DeleteFileInput!, $condition: ModelFileConditionInput) {
        deleteFile(input: $input, condition: $condition) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFileMutation>response.data.deleteFile;
  }
  async CreateDatasources(
    input: CreateDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<CreateDatasourcesMutation> {
    const statement = `mutation CreateDatasources($input: CreateDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        createDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatasourcesMutation>response.data.createDatasources;
  }
  async UpdateDatasources(
    input: UpdateDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<UpdateDatasourcesMutation> {
    const statement = `mutation UpdateDatasources($input: UpdateDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        updateDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatasourcesMutation>response.data.updateDatasources;
  }
  async DeleteDatasources(
    input: DeleteDatasourcesInput,
    condition?: ModelDatasourcesConditionInput
  ): Promise<DeleteDatasourcesMutation> {
    const statement = `mutation DeleteDatasources($input: DeleteDatasourcesInput!, $condition: ModelDatasourcesConditionInput) {
        deleteDatasources(input: $input, condition: $condition) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatasourcesMutation>response.data.deleteDatasources;
  }
  async CreateTableauProject(
    input: CreateTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<CreateTableauProjectMutation> {
    const statement = `mutation CreateTableauProject($input: CreateTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        createTableauProject(input: $input, condition: $condition) {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauProjectMutation>response.data.createTableauProject;
  }
  async UpdateTableauProject(
    input: UpdateTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<UpdateTableauProjectMutation> {
    const statement = `mutation UpdateTableauProject($input: UpdateTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        updateTableauProject(input: $input, condition: $condition) {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauProjectMutation>response.data.updateTableauProject;
  }
  async DeleteTableauProject(
    input: DeleteTableauProjectInput,
    condition?: ModelTableauProjectConditionInput
  ): Promise<DeleteTableauProjectMutation> {
    const statement = `mutation DeleteTableauProject($input: DeleteTableauProjectInput!, $condition: ModelTableauProjectConditionInput) {
        deleteTableauProject(input: $input, condition: $condition) {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauProjectMutation>response.data.deleteTableauProject;
  }
  async CreateTableauEnv(
    input: CreateTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<CreateTableauEnvMutation> {
    const statement = `mutation CreateTableauEnv($input: CreateTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        createTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauEnvMutation>response.data.createTableauEnv;
  }
  async UpdateTableauEnv(
    input: UpdateTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<UpdateTableauEnvMutation> {
    const statement = `mutation UpdateTableauEnv($input: UpdateTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        updateTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauEnvMutation>response.data.updateTableauEnv;
  }
  async DeleteTableauEnv(
    input: DeleteTableauEnvInput,
    condition?: ModelTableauEnvConditionInput
  ): Promise<DeleteTableauEnvMutation> {
    const statement = `mutation DeleteTableauEnv($input: DeleteTableauEnvInput!, $condition: ModelTableauEnvConditionInput) {
        deleteTableauEnv(input: $input, condition: $condition) {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauEnvMutation>response.data.deleteTableauEnv;
  }
  async CreateTaleauWorkbook(
    input: CreateTaleauWorkbookInput,
    condition?: ModelTaleauWorkbookConditionInput
  ): Promise<CreateTaleauWorkbookMutation> {
    const statement = `mutation CreateTaleauWorkbook($input: CreateTaleauWorkbookInput!, $condition: ModelTaleauWorkbookConditionInput) {
        createTaleauWorkbook(input: $input, condition: $condition) {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaleauWorkbookMutation>response.data.createTaleauWorkbook;
  }
  async UpdateTaleauWorkbook(
    input: UpdateTaleauWorkbookInput,
    condition?: ModelTaleauWorkbookConditionInput
  ): Promise<UpdateTaleauWorkbookMutation> {
    const statement = `mutation UpdateTaleauWorkbook($input: UpdateTaleauWorkbookInput!, $condition: ModelTaleauWorkbookConditionInput) {
        updateTaleauWorkbook(input: $input, condition: $condition) {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaleauWorkbookMutation>response.data.updateTaleauWorkbook;
  }
  async DeleteTaleauWorkbook(
    input: DeleteTaleauWorkbookInput,
    condition?: ModelTaleauWorkbookConditionInput
  ): Promise<DeleteTaleauWorkbookMutation> {
    const statement = `mutation DeleteTaleauWorkbook($input: DeleteTaleauWorkbookInput!, $condition: ModelTaleauWorkbookConditionInput) {
        deleteTaleauWorkbook(input: $input, condition: $condition) {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaleauWorkbookMutation>response.data.deleteTaleauWorkbook;
  }
  async CreateTableauSheet(
    input: CreateTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<CreateTableauSheetMutation> {
    const statement = `mutation CreateTableauSheet($input: CreateTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        createTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauSheetMutation>response.data.createTableauSheet;
  }
  async UpdateTableauSheet(
    input: UpdateTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<UpdateTableauSheetMutation> {
    const statement = `mutation UpdateTableauSheet($input: UpdateTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        updateTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauSheetMutation>response.data.updateTableauSheet;
  }
  async DeleteTableauSheet(
    input: DeleteTableauSheetInput,
    condition?: ModelTableauSheetConditionInput
  ): Promise<DeleteTableauSheetMutation> {
    const statement = `mutation DeleteTableauSheet($input: DeleteTableauSheetInput!, $condition: ModelTableauSheetConditionInput) {
        deleteTableauSheet(input: $input, condition: $condition) {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauSheetMutation>response.data.deleteTableauSheet;
  }
  async CreateTableauGraph(
    input: CreateTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<CreateTableauGraphMutation> {
    const statement = `mutation CreateTableauGraph($input: CreateTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        createTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableauGraphMutation>response.data.createTableauGraph;
  }
  async UpdateTableauGraph(
    input: UpdateTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<UpdateTableauGraphMutation> {
    const statement = `mutation UpdateTableauGraph($input: UpdateTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        updateTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableauGraphMutation>response.data.updateTableauGraph;
  }
  async DeleteTableauGraph(
    input: DeleteTableauGraphInput,
    condition?: ModelTableauGraphConditionInput
  ): Promise<DeleteTableauGraphMutation> {
    const statement = `mutation DeleteTableauGraph($input: DeleteTableauGraphInput!, $condition: ModelTableauGraphConditionInput) {
        deleteTableauGraph(input: $input, condition: $condition) {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableauGraphMutation>response.data.deleteTableauGraph;
  }
  async CreateQuicksightProject(
    input: CreateQuicksightProjectInput,
    condition?: ModelQuicksightProjectConditionInput
  ): Promise<CreateQuicksightProjectMutation> {
    const statement = `mutation CreateQuicksightProject($input: CreateQuicksightProjectInput!, $condition: ModelQuicksightProjectConditionInput) {
        createQuicksightProject(input: $input, condition: $condition) {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightProjectMutation>(
      response.data.createQuicksightProject
    );
  }
  async UpdateQuicksightProject(
    input: UpdateQuicksightProjectInput,
    condition?: ModelQuicksightProjectConditionInput
  ): Promise<UpdateQuicksightProjectMutation> {
    const statement = `mutation UpdateQuicksightProject($input: UpdateQuicksightProjectInput!, $condition: ModelQuicksightProjectConditionInput) {
        updateQuicksightProject(input: $input, condition: $condition) {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightProjectMutation>(
      response.data.updateQuicksightProject
    );
  }
  async DeleteQuicksightProject(
    input: DeleteQuicksightProjectInput,
    condition?: ModelQuicksightProjectConditionInput
  ): Promise<DeleteQuicksightProjectMutation> {
    const statement = `mutation DeleteQuicksightProject($input: DeleteQuicksightProjectInput!, $condition: ModelQuicksightProjectConditionInput) {
        deleteQuicksightProject(input: $input, condition: $condition) {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightProjectMutation>(
      response.data.deleteQuicksightProject
    );
  }
  async CreateQuicksightTemplate(
    input: CreateQuicksightTemplateInput,
    condition?: ModelQuicksightTemplateConditionInput
  ): Promise<CreateQuicksightTemplateMutation> {
    const statement = `mutation CreateQuicksightTemplate($input: CreateQuicksightTemplateInput!, $condition: ModelQuicksightTemplateConditionInput) {
        createQuicksightTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightTemplateMutation>(
      response.data.createQuicksightTemplate
    );
  }
  async UpdateQuicksightTemplate(
    input: UpdateQuicksightTemplateInput,
    condition?: ModelQuicksightTemplateConditionInput
  ): Promise<UpdateQuicksightTemplateMutation> {
    const statement = `mutation UpdateQuicksightTemplate($input: UpdateQuicksightTemplateInput!, $condition: ModelQuicksightTemplateConditionInput) {
        updateQuicksightTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightTemplateMutation>(
      response.data.updateQuicksightTemplate
    );
  }
  async DeleteQuicksightTemplate(
    input: DeleteQuicksightTemplateInput,
    condition?: ModelQuicksightTemplateConditionInput
  ): Promise<DeleteQuicksightTemplateMutation> {
    const statement = `mutation DeleteQuicksightTemplate($input: DeleteQuicksightTemplateInput!, $condition: ModelQuicksightTemplateConditionInput) {
        deleteQuicksightTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightTemplateMutation>(
      response.data.deleteQuicksightTemplate
    );
  }
  async CreateQuicksightAnalysis(
    input: CreateQuicksightAnalysisInput,
    condition?: ModelQuicksightAnalysisConditionInput
  ): Promise<CreateQuicksightAnalysisMutation> {
    const statement = `mutation CreateQuicksightAnalysis($input: CreateQuicksightAnalysisInput!, $condition: ModelQuicksightAnalysisConditionInput) {
        createQuicksightAnalysis(input: $input, condition: $condition) {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightAnalysisMutation>(
      response.data.createQuicksightAnalysis
    );
  }
  async UpdateQuicksightAnalysis(
    input: UpdateQuicksightAnalysisInput,
    condition?: ModelQuicksightAnalysisConditionInput
  ): Promise<UpdateQuicksightAnalysisMutation> {
    const statement = `mutation UpdateQuicksightAnalysis($input: UpdateQuicksightAnalysisInput!, $condition: ModelQuicksightAnalysisConditionInput) {
        updateQuicksightAnalysis(input: $input, condition: $condition) {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightAnalysisMutation>(
      response.data.updateQuicksightAnalysis
    );
  }
  async DeleteQuicksightAnalysis(
    input: DeleteQuicksightAnalysisInput,
    condition?: ModelQuicksightAnalysisConditionInput
  ): Promise<DeleteQuicksightAnalysisMutation> {
    const statement = `mutation DeleteQuicksightAnalysis($input: DeleteQuicksightAnalysisInput!, $condition: ModelQuicksightAnalysisConditionInput) {
        deleteQuicksightAnalysis(input: $input, condition: $condition) {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightAnalysisMutation>(
      response.data.deleteQuicksightAnalysis
    );
  }
  async CreateQuicksightEnv(
    input: CreateQuicksightEnvInput,
    condition?: ModelQuicksightEnvConditionInput
  ): Promise<CreateQuicksightEnvMutation> {
    const statement = `mutation CreateQuicksightEnv($input: CreateQuicksightEnvInput!, $condition: ModelQuicksightEnvConditionInput) {
        createQuicksightEnv(input: $input, condition: $condition) {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightEnvMutation>response.data.createQuicksightEnv;
  }
  async UpdateQuicksightEnv(
    input: UpdateQuicksightEnvInput,
    condition?: ModelQuicksightEnvConditionInput
  ): Promise<UpdateQuicksightEnvMutation> {
    const statement = `mutation UpdateQuicksightEnv($input: UpdateQuicksightEnvInput!, $condition: ModelQuicksightEnvConditionInput) {
        updateQuicksightEnv(input: $input, condition: $condition) {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightEnvMutation>response.data.updateQuicksightEnv;
  }
  async DeleteQuicksightEnv(
    input: DeleteQuicksightEnvInput,
    condition?: ModelQuicksightEnvConditionInput
  ): Promise<DeleteQuicksightEnvMutation> {
    const statement = `mutation DeleteQuicksightEnv($input: DeleteQuicksightEnvInput!, $condition: ModelQuicksightEnvConditionInput) {
        deleteQuicksightEnv(input: $input, condition: $condition) {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightEnvMutation>response.data.deleteQuicksightEnv;
  }
  async CreateQuicksightDashboard(
    input: CreateQuicksightDashboardInput,
    condition?: ModelQuicksightDashboardConditionInput
  ): Promise<CreateQuicksightDashboardMutation> {
    const statement = `mutation CreateQuicksightDashboard($input: CreateQuicksightDashboardInput!, $condition: ModelQuicksightDashboardConditionInput) {
        createQuicksightDashboard(input: $input, condition: $condition) {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightDashboardMutation>(
      response.data.createQuicksightDashboard
    );
  }
  async UpdateQuicksightDashboard(
    input: UpdateQuicksightDashboardInput,
    condition?: ModelQuicksightDashboardConditionInput
  ): Promise<UpdateQuicksightDashboardMutation> {
    const statement = `mutation UpdateQuicksightDashboard($input: UpdateQuicksightDashboardInput!, $condition: ModelQuicksightDashboardConditionInput) {
        updateQuicksightDashboard(input: $input, condition: $condition) {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightDashboardMutation>(
      response.data.updateQuicksightDashboard
    );
  }
  async DeleteQuicksightDashboard(
    input: DeleteQuicksightDashboardInput,
    condition?: ModelQuicksightDashboardConditionInput
  ): Promise<DeleteQuicksightDashboardMutation> {
    const statement = `mutation DeleteQuicksightDashboard($input: DeleteQuicksightDashboardInput!, $condition: ModelQuicksightDashboardConditionInput) {
        deleteQuicksightDashboard(input: $input, condition: $condition) {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightDashboardMutation>(
      response.data.deleteQuicksightDashboard
    );
  }
  async CreateTable(
    input: CreateTableInput,
    condition?: ModelTableConditionInput
  ): Promise<CreateTableMutation> {
    const statement = `mutation CreateTable($input: CreateTableInput!, $condition: ModelTableConditionInput) {
        createTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTableMutation>response.data.createTable;
  }
  async UpdateTable(
    input: UpdateTableInput,
    condition?: ModelTableConditionInput
  ): Promise<UpdateTableMutation> {
    const statement = `mutation UpdateTable($input: UpdateTableInput!, $condition: ModelTableConditionInput) {
        updateTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTableMutation>response.data.updateTable;
  }
  async DeleteTable(
    input: DeleteTableInput,
    condition?: ModelTableConditionInput
  ): Promise<DeleteTableMutation> {
    const statement = `mutation DeleteTable($input: DeleteTableInput!, $condition: ModelTableConditionInput) {
        deleteTable(input: $input, condition: $condition) {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTableMutation>response.data.deleteTable;
  }
  async CreateQuicksightFolder(
    input: CreateQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<CreateQuicksightFolderMutation> {
    const statement = `mutation CreateQuicksightFolder($input: CreateQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        createQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightFolderMutation>response.data.createQuicksightFolder;
  }
  async UpdateQuicksightFolder(
    input: UpdateQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<UpdateQuicksightFolderMutation> {
    const statement = `mutation UpdateQuicksightFolder($input: UpdateQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        updateQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightFolderMutation>response.data.updateQuicksightFolder;
  }
  async DeleteQuicksightFolder(
    input: DeleteQuicksightFolderInput,
    condition?: ModelQuicksightFolderConditionInput
  ): Promise<DeleteQuicksightFolderMutation> {
    const statement = `mutation DeleteQuicksightFolder($input: DeleteQuicksightFolderInput!, $condition: ModelQuicksightFolderConditionInput) {
        deleteQuicksightFolder(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightFolderMutation>response.data.deleteQuicksightFolder;
  }
  async CreateQuicksightGroup(
    input: CreateQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<CreateQuicksightGroupMutation> {
    const statement = `mutation CreateQuicksightGroup($input: CreateQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        createQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuicksightGroupMutation>response.data.createQuicksightGroup;
  }
  async UpdateQuicksightGroup(
    input: UpdateQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<UpdateQuicksightGroupMutation> {
    const statement = `mutation UpdateQuicksightGroup($input: UpdateQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        updateQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuicksightGroupMutation>response.data.updateQuicksightGroup;
  }
  async DeleteQuicksightGroup(
    input: DeleteQuicksightGroupInput,
    condition?: ModelQuicksightGroupConditionInput
  ): Promise<DeleteQuicksightGroupMutation> {
    const statement = `mutation DeleteQuicksightGroup($input: DeleteQuicksightGroupInput!, $condition: ModelQuicksightGroupConditionInput) {
        deleteQuicksightGroup(input: $input, condition: $condition) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuicksightGroupMutation>response.data.deleteQuicksightGroup;
  }
  async CreateComments(
    input: CreateCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<CreateCommentsMutation> {
    const statement = `mutation CreateComments($input: CreateCommentsInput!, $condition: ModelCommentsConditionInput) {
        createComments(input: $input, condition: $condition) {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentsMutation>response.data.createComments;
  }
  async UpdateComments(
    input: UpdateCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<UpdateCommentsMutation> {
    const statement = `mutation UpdateComments($input: UpdateCommentsInput!, $condition: ModelCommentsConditionInput) {
        updateComments(input: $input, condition: $condition) {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentsMutation>response.data.updateComments;
  }
  async DeleteComments(
    input: DeleteCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<DeleteCommentsMutation> {
    const statement = `mutation DeleteComments($input: DeleteCommentsInput!, $condition: ModelCommentsConditionInput) {
        deleteComments(input: $input, condition: $condition) {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentsMutation>response.data.deleteComments;
  }
  async CreateTprojects(
    input: CreateTprojectsInput,
    condition?: ModelTprojectsConditionInput
  ): Promise<CreateTprojectsMutation> {
    const statement = `mutation CreateTprojects($input: CreateTprojectsInput!, $condition: ModelTprojectsConditionInput) {
        createTprojects(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTprojectsMutation>response.data.createTprojects;
  }
  async UpdateTprojects(
    input: UpdateTprojectsInput,
    condition?: ModelTprojectsConditionInput
  ): Promise<UpdateTprojectsMutation> {
    const statement = `mutation UpdateTprojects($input: UpdateTprojectsInput!, $condition: ModelTprojectsConditionInput) {
        updateTprojects(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTprojectsMutation>response.data.updateTprojects;
  }
  async DeleteTprojects(
    input: DeleteTprojectsInput,
    condition?: ModelTprojectsConditionInput
  ): Promise<DeleteTprojectsMutation> {
    const statement = `mutation DeleteTprojects($input: DeleteTprojectsInput!, $condition: ModelTprojectsConditionInput) {
        deleteTprojects(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTprojectsMutation>response.data.deleteTprojects;
  }
  async CreateTdatasources(
    input: CreateTdatasourcesInput,
    condition?: ModelTdatasourcesConditionInput
  ): Promise<CreateTdatasourcesMutation> {
    const statement = `mutation CreateTdatasources($input: CreateTdatasourcesInput!, $condition: ModelTdatasourcesConditionInput) {
        createTdatasources(input: $input, condition: $condition) {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTdatasourcesMutation>response.data.createTdatasources;
  }
  async UpdateTdatasources(
    input: UpdateTdatasourcesInput,
    condition?: ModelTdatasourcesConditionInput
  ): Promise<UpdateTdatasourcesMutation> {
    const statement = `mutation UpdateTdatasources($input: UpdateTdatasourcesInput!, $condition: ModelTdatasourcesConditionInput) {
        updateTdatasources(input: $input, condition: $condition) {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTdatasourcesMutation>response.data.updateTdatasources;
  }
  async DeleteTdatasources(
    input: DeleteTdatasourcesInput,
    condition?: ModelTdatasourcesConditionInput
  ): Promise<DeleteTdatasourcesMutation> {
    const statement = `mutation DeleteTdatasources($input: DeleteTdatasourcesInput!, $condition: ModelTdatasourcesConditionInput) {
        deleteTdatasources(input: $input, condition: $condition) {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTdatasourcesMutation>response.data.deleteTdatasources;
  }
  async CreateTworkbooks(
    input: CreateTworkbooksInput,
    condition?: ModelTworkbooksConditionInput
  ): Promise<CreateTworkbooksMutation> {
    const statement = `mutation CreateTworkbooks($input: CreateTworkbooksInput!, $condition: ModelTworkbooksConditionInput) {
        createTworkbooks(input: $input, condition: $condition) {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTworkbooksMutation>response.data.createTworkbooks;
  }
  async UpdateTworkbooks(
    input: UpdateTworkbooksInput,
    condition?: ModelTworkbooksConditionInput
  ): Promise<UpdateTworkbooksMutation> {
    const statement = `mutation UpdateTworkbooks($input: UpdateTworkbooksInput!, $condition: ModelTworkbooksConditionInput) {
        updateTworkbooks(input: $input, condition: $condition) {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTworkbooksMutation>response.data.updateTworkbooks;
  }
  async DeleteTworkbooks(
    input: DeleteTworkbooksInput,
    condition?: ModelTworkbooksConditionInput
  ): Promise<DeleteTworkbooksMutation> {
    const statement = `mutation DeleteTworkbooks($input: DeleteTworkbooksInput!, $condition: ModelTworkbooksConditionInput) {
        deleteTworkbooks(input: $input, condition: $condition) {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTworkbooksMutation>response.data.deleteTworkbooks;
  }
  async CreateTptds(
    input: CreateTptdsInput,
    condition?: ModelTptdsConditionInput
  ): Promise<CreateTptdsMutation> {
    const statement = `mutation CreateTptds($input: CreateTptdsInput!, $condition: ModelTptdsConditionInput) {
        createTptds(input: $input, condition: $condition) {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTptdsMutation>response.data.createTptds;
  }
  async UpdateTptds(
    input: UpdateTptdsInput,
    condition?: ModelTptdsConditionInput
  ): Promise<UpdateTptdsMutation> {
    const statement = `mutation UpdateTptds($input: UpdateTptdsInput!, $condition: ModelTptdsConditionInput) {
        updateTptds(input: $input, condition: $condition) {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTptdsMutation>response.data.updateTptds;
  }
  async DeleteTptds(
    input: DeleteTptdsInput,
    condition?: ModelTptdsConditionInput
  ): Promise<DeleteTptdsMutation> {
    const statement = `mutation DeleteTptds($input: DeleteTptdsInput!, $condition: ModelTptdsConditionInput) {
        deleteTptds(input: $input, condition: $condition) {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTptdsMutation>response.data.deleteTptds;
  }
  async CreateTwtp(
    input: CreateTwtpInput,
    condition?: ModelTwtpConditionInput
  ): Promise<CreateTwtpMutation> {
    const statement = `mutation CreateTwtp($input: CreateTwtpInput!, $condition: ModelTwtpConditionInput) {
        createTwtp(input: $input, condition: $condition) {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTwtpMutation>response.data.createTwtp;
  }
  async UpdateTwtp(
    input: UpdateTwtpInput,
    condition?: ModelTwtpConditionInput
  ): Promise<UpdateTwtpMutation> {
    const statement = `mutation UpdateTwtp($input: UpdateTwtpInput!, $condition: ModelTwtpConditionInput) {
        updateTwtp(input: $input, condition: $condition) {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTwtpMutation>response.data.updateTwtp;
  }
  async DeleteTwtp(
    input: DeleteTwtpInput,
    condition?: ModelTwtpConditionInput
  ): Promise<DeleteTwtpMutation> {
    const statement = `mutation DeleteTwtp($input: DeleteTwtpInput!, $condition: ModelTwtpConditionInput) {
        deleteTwtp(input: $input, condition: $condition) {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTwtpMutation>response.data.deleteTwtp;
  }
  async CreateXmlinput(
    input: CreateXmlinputInput,
    condition?: ModelXmlinputConditionInput
  ): Promise<CreateXmlinputMutation> {
    const statement = `mutation CreateXmlinput($input: CreateXmlinputInput!, $condition: ModelXmlinputConditionInput) {
        createXmlinput(input: $input, condition: $condition) {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateXmlinputMutation>response.data.createXmlinput;
  }
  async UpdateXmlinput(
    input: UpdateXmlinputInput,
    condition?: ModelXmlinputConditionInput
  ): Promise<UpdateXmlinputMutation> {
    const statement = `mutation UpdateXmlinput($input: UpdateXmlinputInput!, $condition: ModelXmlinputConditionInput) {
        updateXmlinput(input: $input, condition: $condition) {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateXmlinputMutation>response.data.updateXmlinput;
  }
  async DeleteXmlinput(
    input: DeleteXmlinputInput,
    condition?: ModelXmlinputConditionInput
  ): Promise<DeleteXmlinputMutation> {
    const statement = `mutation DeleteXmlinput($input: DeleteXmlinputInput!, $condition: ModelXmlinputConditionInput) {
        deleteXmlinput(input: $input, condition: $condition) {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteXmlinputMutation>response.data.deleteXmlinput;
  }
  async GetMessage(
    username: string,
    password: string,
    sitename: string,
    siteurl: string
  ): Promise<GetMessageQuery> {
    const statement = `query GetMessage($username: String!, $password: String!, $sitename: String!, $siteurl: String!) {
        getMessage(username: $username, password: $password, sitename: $sitename, siteurl: $siteurl) {
          __typename
          body
          body1
          body2
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username,
      password,
      sitename,
      siteurl
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async Getquick(
    dsid: string,
    id: string,
    awsaccountId: string,
    projectname: string,
    region: string,
    pname: string,
    username: string
  ): Promise<GetquickQuery> {
    const statement = `query Getquick($dsid: String!, $id: String!, $awsaccountId: String!, $projectname: String!, $region: String!, $pname: String!, $username: String!) {
        getquick(dsid: $dsid, id: $id, awsaccountId: $awsaccountId, projectname: $projectname, region: $region, pname: $pname, username: $username) {
          __typename
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {
      dsid,
      id,
      awsaccountId,
      projectname,
      region,
      pname,
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetquickQuery>response.data.getquick;
  }
  async Getaws(
    access: string,
    secret: string,
    username: string,
    awsaccountId: string
  ): Promise<GetawsQuery> {
    const statement = `query Getaws($access: String!, $secret: String!, $username: String!, $awsaccountId: String!) {
        getaws(access: $access, secret: $secret, username: $username, awsaccountId: $awsaccountId) {
          __typename
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {
      access,
      secret,
      username,
      awsaccountId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetawsQuery>response.data.getaws;
  }
  async Tableauauth(
    username: string,
    password: string,
    sitename: string,
    siteurl: string
  ): Promise<TableauauthQuery> {
    const statement = `query Tableauauth($username: String!, $password: String!, $sitename: String!, $siteurl: String!) {
        tableauauth(username: $username, password: $password, sitename: $sitename, siteurl: $siteurl) {
          __typename
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username,
      password,
      sitename,
      siteurl
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <TableauauthQuery>response.data.tableauauth;
  }
  async Getwbs(
    username: string,
    password: string,
    sitename: string,
    siteurl: string,
    projectname: string
  ): Promise<GetwbsQuery> {
    const statement = `query Getwbs($username: String!, $password: String!, $sitename: String!, $siteurl: String!, $projectname: String!) {
        getwbs(username: $username, password: $password, sitename: $sitename, siteurl: $siteurl, projectname: $projectname) {
          __typename
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username,
      password,
      sitename,
      siteurl,
      projectname
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetwbsQuery>response.data.getwbs;
  }
  async GetTableaulogin(id: string): Promise<GetTableauloginQuery> {
    const statement = `query GetTableaulogin($id: ID!) {
        getTableaulogin(id: $id) {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauloginQuery>response.data.getTableaulogin;
  }
  async ListTableaulogins(
    filter?: ModelTableauloginFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauloginsQuery> {
    const statement = `query ListTableaulogins($filter: ModelTableauloginFilterInput, $limit: Int, $nextToken: String) {
        listTableaulogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            password
            sitename
            siteurl
            tenv {
              __typename
              name
              tpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauloginsQuery>response.data.listTableaulogins;
  }
  async SyncTableaulogins(
    filter?: ModelTableauloginFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauloginsQuery> {
    const statement = `query SyncTableaulogins($filter: ModelTableauloginFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableaulogins(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            username
            password
            sitename
            siteurl
            tenv {
              __typename
              name
              tpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauloginsQuery>response.data.syncTableaulogins;
  }
  async GetQuicksightlogin(id: string): Promise<GetQuicksightloginQuery> {
    const statement = `query GetQuicksightlogin($id: ID!) {
        getQuicksightlogin(id: $id) {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightloginQuery>response.data.getQuicksightlogin;
  }
  async ListQuicksightlogins(
    filter?: ModelQuicksightloginFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightloginsQuery> {
    const statement = `query ListQuicksightlogins($filter: ModelQuicksightloginFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightlogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightloginsQuery>response.data.listQuicksightlogins;
  }
  async SyncQuicksightlogins(
    filter?: ModelQuicksightloginFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightloginsQuery> {
    const statement = `query SyncQuicksightlogins($filter: ModelQuicksightloginFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightlogins(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightloginsQuery>response.data.syncQuicksightlogins;
  }
  async GetCustomer(name: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($name: ID!) {
        getCustomer(name: $name) {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      name
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    name?: string,
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($name: ID, $filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCustomers(name: $name, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async SyncCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCustomersQuery> {
    const statement = `query SyncCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCustomers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCustomersQuery>response.data.syncCustomers;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String) {
        listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async SyncDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDepartmentsQuery> {
    const statement = `query SyncDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDepartments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDepartmentsQuery>response.data.syncDepartments;
  }
  async GetBIMProject(id: string): Promise<GetBIMProjectQuery> {
    const statement = `query GetBIMProject($id: ID!) {
        getBIMProject(id: $id) {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBIMProjectQuery>response.data.getBIMProject;
  }
  async ListBIMProjects(
    filter?: ModelBIMProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBIMProjectsQuery> {
    const statement = `query ListBIMProjects($filter: ModelBIMProjectFilterInput, $limit: Int, $nextToken: String) {
        listBIMProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            DName
            UserName
            Customer {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            Pname
            source
            destination
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBIMProjectsQuery>response.data.listBIMProjects;
  }
  async SyncBIMProjects(
    filter?: ModelBIMProjectFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBIMProjectsQuery> {
    const statement = `query SyncBIMProjects($filter: ModelBIMProjectFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBIMProjects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            DName
            UserName
            Customer {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            Pname
            source
            destination
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBIMProjectsQuery>response.data.syncBIMProjects;
  }
  async GetDataset(id: string): Promise<GetDatasetQuery> {
    const statement = `query GetDataset($id: ID!) {
        getDataset(id: $id) {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasetQuery>response.data.getDataset;
  }
  async ListDatasets(
    filter?: ModelDatasetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasetsQuery> {
    const statement = `query ListDatasets($filter: ModelDatasetFilterInput, $limit: Int, $nextToken: String) {
        listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatasetsQuery>response.data.listDatasets;
  }
  async SyncDatasets(
    filter?: ModelDatasetFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDatasetsQuery> {
    const statement = `query SyncDatasets($filter: ModelDatasetFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDatasets(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDatasetsQuery>response.data.syncDatasets;
  }
  async GetFile(id: string): Promise<GetFileQuery> {
    const statement = `query GetFile($id: ID!) {
        getFile(id: $id) {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFileQuery>response.data.getFile;
  }
  async ListFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFilesQuery> {
    const statement = `query ListFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            url
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFilesQuery>response.data.listFiles;
  }
  async SyncFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFilesQuery> {
    const statement = `query SyncFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFiles(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            url
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFilesQuery>response.data.syncFiles;
  }
  async GetDatasources(id: string): Promise<GetDatasourcesQuery> {
    const statement = `query GetDatasources($id: ID!) {
        getDatasources(id: $id) {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasourcesQuery>response.data.getDatasources;
  }
  async ListDatasources(
    filter?: ModelDatasourcesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasourcesQuery> {
    const statement = `query ListDatasources($filter: ModelDatasourcesFilterInput, $limit: Int, $nextToken: String) {
        listDatasources(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatasourcesQuery>response.data.listDatasources;
  }
  async SyncDatasources(
    filter?: ModelDatasourcesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDatasourcesQuery> {
    const statement = `query SyncDatasources($filter: ModelDatasourcesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDatasources(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDatasourcesQuery>response.data.syncDatasources;
  }
  async GetTableauProject(id: string): Promise<GetTableauProjectQuery> {
    const statement = `query GetTableauProject($id: ID!) {
        getTableauProject(id: $id) {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauProjectQuery>response.data.getTableauProject;
  }
  async ListTableauProjects(
    filter?: ModelTableauProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauProjectsQuery> {
    const statement = `query ListTableauProjects($filter: ModelTableauProjectFilterInput, $limit: Int, $nextToken: String) {
        listTableauProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauProjectsQuery>response.data.listTableauProjects;
  }
  async SyncTableauProjects(
    filter?: ModelTableauProjectFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauProjectsQuery> {
    const statement = `query SyncTableauProjects($filter: ModelTableauProjectFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableauProjects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauProjectsQuery>response.data.syncTableauProjects;
  }
  async GetTableauEnv(id: string): Promise<GetTableauEnvQuery> {
    const statement = `query GetTableauEnv($id: ID!) {
        getTableauEnv(id: $id) {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauEnvQuery>response.data.getTableauEnv;
  }
  async ListTableauEnvs(
    filter?: ModelTableauEnvFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauEnvsQuery> {
    const statement = `query ListTableauEnvs($filter: ModelTableauEnvFilterInput, $limit: Int, $nextToken: String) {
        listTableauEnvs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauEnvsQuery>response.data.listTableauEnvs;
  }
  async SyncTableauEnvs(
    filter?: ModelTableauEnvFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauEnvsQuery> {
    const statement = `query SyncTableauEnvs($filter: ModelTableauEnvFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableauEnvs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauEnvsQuery>response.data.syncTableauEnvs;
  }
  async GetTaleauWorkbook(id: string): Promise<GetTaleauWorkbookQuery> {
    const statement = `query GetTaleauWorkbook($id: ID!) {
        getTaleauWorkbook(id: $id) {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaleauWorkbookQuery>response.data.getTaleauWorkbook;
  }
  async ListTaleauWorkbooks(
    filter?: ModelTaleauWorkbookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTaleauWorkbooksQuery> {
    const statement = `query ListTaleauWorkbooks($filter: ModelTaleauWorkbookFilterInput, $limit: Int, $nextToken: String) {
        listTaleauWorkbooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTaleauWorkbooksQuery>response.data.listTaleauWorkbooks;
  }
  async SyncTaleauWorkbooks(
    filter?: ModelTaleauWorkbookFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTaleauWorkbooksQuery> {
    const statement = `query SyncTaleauWorkbooks($filter: ModelTaleauWorkbookFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTaleauWorkbooks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTaleauWorkbooksQuery>response.data.syncTaleauWorkbooks;
  }
  async GetTableauSheet(id: string): Promise<GetTableauSheetQuery> {
    const statement = `query GetTableauSheet($id: ID!) {
        getTableauSheet(id: $id) {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauSheetQuery>response.data.getTableauSheet;
  }
  async ListTableauSheets(
    filter?: ModelTableauSheetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauSheetsQuery> {
    const statement = `query ListTableauSheets($filter: ModelTableauSheetFilterInput, $limit: Int, $nextToken: String) {
        listTableauSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauSheetsQuery>response.data.listTableauSheets;
  }
  async SyncTableauSheets(
    filter?: ModelTableauSheetFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauSheetsQuery> {
    const statement = `query SyncTableauSheets($filter: ModelTableauSheetFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableauSheets(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauSheetsQuery>response.data.syncTableauSheets;
  }
  async GetTableauGraph(id: string): Promise<GetTableauGraphQuery> {
    const statement = `query GetTableauGraph($id: ID!) {
        getTableauGraph(id: $id) {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableauGraphQuery>response.data.getTableauGraph;
  }
  async ListTableauGraphs(
    filter?: ModelTableauGraphFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTableauGraphsQuery> {
    const statement = `query ListTableauGraphs($filter: ModelTableauGraphFilterInput, $limit: Int, $nextToken: String) {
        listTableauGraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            tsid
            tsheet {
              __typename
              name
              twbid
              tsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTableauGraphsQuery>response.data.listTableauGraphs;
  }
  async SyncTableauGraphs(
    filter?: ModelTableauGraphFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTableauGraphsQuery> {
    const statement = `query SyncTableauGraphs($filter: ModelTableauGraphFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTableauGraphs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            tsid
            tsheet {
              __typename
              name
              twbid
              tsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTableauGraphsQuery>response.data.syncTableauGraphs;
  }
  async GetQuicksightProject(id: string): Promise<GetQuicksightProjectQuery> {
    const statement = `query GetQuicksightProject($id: ID!) {
        getQuicksightProject(id: $id) {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightProjectQuery>response.data.getQuicksightProject;
  }
  async ListQuicksightProjects(
    filter?: ModelQuicksightProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightProjectsQuery> {
    const statement = `query ListQuicksightProjects($filter: ModelQuicksightProjectFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightProjectsQuery>response.data.listQuicksightProjects;
  }
  async SyncQuicksightProjects(
    filter?: ModelQuicksightProjectFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightProjectsQuery> {
    const statement = `query SyncQuicksightProjects($filter: ModelQuicksightProjectFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightProjects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightProjectsQuery>response.data.syncQuicksightProjects;
  }
  async GetQuicksightTemplate(id: string): Promise<GetQuicksightTemplateQuery> {
    const statement = `query GetQuicksightTemplate($id: ID!) {
        getQuicksightTemplate(id: $id) {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightTemplateQuery>response.data.getQuicksightTemplate;
  }
  async ListQuicksightTemplates(
    filter?: ModelQuicksightTemplateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightTemplatesQuery> {
    const statement = `query ListQuicksightTemplates($filter: ModelQuicksightTemplateFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightTemplatesQuery>response.data.listQuicksightTemplates;
  }
  async SyncQuicksightTemplates(
    filter?: ModelQuicksightTemplateFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightTemplatesQuery> {
    const statement = `query SyncQuicksightTemplates($filter: ModelQuicksightTemplateFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightTemplates(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightTemplatesQuery>response.data.syncQuicksightTemplates;
  }
  async GetQuicksightAnalysis(id: string): Promise<GetQuicksightAnalysisQuery> {
    const statement = `query GetQuicksightAnalysis($id: ID!) {
        getQuicksightAnalysis(id: $id) {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightAnalysisQuery>response.data.getQuicksightAnalysis;
  }
  async ListQuicksightAnalyses(
    filter?: ModelQuicksightAnalysisFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightAnalysesQuery> {
    const statement = `query ListQuicksightAnalyses($filter: ModelQuicksightAnalysisFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightAnalyses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            QuicksightTemplateId
            sourceanalysisId
            qtemplate {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightAnalysesQuery>response.data.listQuicksightAnalyses;
  }
  async SyncQuicksightAnalyses(
    filter?: ModelQuicksightAnalysisFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightAnalysesQuery> {
    const statement = `query SyncQuicksightAnalyses($filter: ModelQuicksightAnalysisFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightAnalyses(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            QuicksightTemplateId
            sourceanalysisId
            qtemplate {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightAnalysesQuery>response.data.syncQuicksightAnalyses;
  }
  async GetQuicksightEnv(id: string): Promise<GetQuicksightEnvQuery> {
    const statement = `query GetQuicksightEnv($id: ID!) {
        getQuicksightEnv(id: $id) {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightEnvQuery>response.data.getQuicksightEnv;
  }
  async ListQuicksightEnvs(
    filter?: ModelQuicksightEnvFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightEnvsQuery> {
    const statement = `query ListQuicksightEnvs($filter: ModelQuicksightEnvFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightEnvs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightEnvsQuery>response.data.listQuicksightEnvs;
  }
  async SyncQuicksightEnvs(
    filter?: ModelQuicksightEnvFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightEnvsQuery> {
    const statement = `query SyncQuicksightEnvs($filter: ModelQuicksightEnvFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightEnvs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightEnvsQuery>response.data.syncQuicksightEnvs;
  }
  async GetQuicksightDashboard(
    id: string
  ): Promise<GetQuicksightDashboardQuery> {
    const statement = `query GetQuicksightDashboard($id: ID!) {
        getQuicksightDashboard(id: $id) {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightDashboardQuery>response.data.getQuicksightDashboard;
  }
  async ListQuicksightDashboards(
    filter?: ModelQuicksightDashboardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightDashboardsQuery> {
    const statement = `query ListQuicksightDashboards($filter: ModelQuicksightDashboardFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            qtid
            qtemplate {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightDashboardsQuery>(
      response.data.listQuicksightDashboards
    );
  }
  async SyncQuicksightDashboards(
    filter?: ModelQuicksightDashboardFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightDashboardsQuery> {
    const statement = `query SyncQuicksightDashboards($filter: ModelQuicksightDashboardFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightDashboards(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            qtid
            qtemplate {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightDashboardsQuery>(
      response.data.syncQuicksightDashboards
    );
  }
  async GetTable(id: string): Promise<GetTableQuery> {
    const statement = `query GetTable($id: ID!) {
        getTable(id: $id) {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTableQuery>response.data.getTable;
  }
  async ListTables(
    filter?: ModelTableFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTablesQuery> {
    const statement = `query ListTables($filter: ModelTableFilterInput, $limit: Int, $nextToken: String) {
        listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            dsid
            datasource {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTablesQuery>response.data.listTables;
  }
  async SyncTables(
    filter?: ModelTableFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTablesQuery> {
    const statement = `query SyncTables($filter: ModelTableFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTables(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            dsid
            datasource {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTablesQuery>response.data.syncTables;
  }
  async GetQuicksightFolder(id: string): Promise<GetQuicksightFolderQuery> {
    const statement = `query GetQuicksightFolder($id: ID!) {
        getQuicksightFolder(id: $id) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightFolderQuery>response.data.getQuicksightFolder;
  }
  async ListQuicksightFolders(
    filter?: ModelQuicksightFolderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightFoldersQuery> {
    const statement = `query ListQuicksightFolders($filter: ModelQuicksightFolderFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightFoldersQuery>response.data.listQuicksightFolders;
  }
  async SyncQuicksightFolders(
    filter?: ModelQuicksightFolderFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightFoldersQuery> {
    const statement = `query SyncQuicksightFolders($filter: ModelQuicksightFolderFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightFolders(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightFoldersQuery>response.data.syncQuicksightFolders;
  }
  async GetQuicksightGroup(id: string): Promise<GetQuicksightGroupQuery> {
    const statement = `query GetQuicksightGroup($id: ID!) {
        getQuicksightGroup(id: $id) {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuicksightGroupQuery>response.data.getQuicksightGroup;
  }
  async ListQuicksightGroups(
    filter?: ModelQuicksightGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuicksightGroupsQuery> {
    const statement = `query ListQuicksightGroups($filter: ModelQuicksightGroupFilterInput, $limit: Int, $nextToken: String) {
        listQuicksightGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuicksightGroupsQuery>response.data.listQuicksightGroups;
  }
  async SyncQuicksightGroups(
    filter?: ModelQuicksightGroupFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuicksightGroupsQuery> {
    const statement = `query SyncQuicksightGroups($filter: ModelQuicksightGroupFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuicksightGroups(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuicksightGroupsQuery>response.data.syncQuicksightGroups;
  }
  async GetComments(id: string): Promise<GetCommentsQuery> {
    const statement = `query GetComments($id: ID!) {
        getComments(id: $id) {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentsQuery>response.data.getComments;
  }
  async ListComments(
    filter?: ModelCommentsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentsFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            comments
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async SyncComments(
    filter?: ModelCommentsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCommentsQuery> {
    const statement = `query SyncComments($filter: ModelCommentsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncComments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            comments
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCommentsQuery>response.data.syncComments;
  }
  async GetTprojects(id: string): Promise<GetTprojectsQuery> {
    const statement = `query GetTprojects($id: ID!) {
        getTprojects(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTprojectsQuery>response.data.getTprojects;
  }
  async ListTprojects(
    filter?: ModelTprojectsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTprojectsQuery> {
    const statement = `query ListTprojects($filter: ModelTprojectsFilterInput, $limit: Int, $nextToken: String) {
        listTprojects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTprojectsQuery>response.data.listTprojects;
  }
  async SyncTprojects(
    filter?: ModelTprojectsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTprojectsQuery> {
    const statement = `query SyncTprojects($filter: ModelTprojectsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTprojects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTprojectsQuery>response.data.syncTprojects;
  }
  async GetTdatasources(id: string): Promise<GetTdatasourcesQuery> {
    const statement = `query GetTdatasources($id: ID!) {
        getTdatasources(id: $id) {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTdatasourcesQuery>response.data.getTdatasources;
  }
  async ListTdatasources(
    filter?: ModelTdatasourcesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTdatasourcesQuery> {
    const statement = `query ListTdatasources($filter: ModelTdatasourcesFilterInput, $limit: Int, $nextToken: String) {
        listTdatasources(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            filepath
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTdatasourcesQuery>response.data.listTdatasources;
  }
  async SyncTdatasources(
    filter?: ModelTdatasourcesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTdatasourcesQuery> {
    const statement = `query SyncTdatasources($filter: ModelTdatasourcesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTdatasources(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            filepath
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTdatasourcesQuery>response.data.syncTdatasources;
  }
  async GetTworkbooks(id: string): Promise<GetTworkbooksQuery> {
    const statement = `query GetTworkbooks($id: ID!) {
        getTworkbooks(id: $id) {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTworkbooksQuery>response.data.getTworkbooks;
  }
  async ListTworkbooks(
    filter?: ModelTworkbooksFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTworkbooksQuery> {
    const statement = `query ListTworkbooks($filter: ModelTworkbooksFilterInput, $limit: Int, $nextToken: String) {
        listTworkbooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            id
            projectname
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTworkbooksQuery>response.data.listTworkbooks;
  }
  async SyncTworkbooks(
    filter?: ModelTworkbooksFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTworkbooksQuery> {
    const statement = `query SyncTworkbooks($filter: ModelTworkbooksFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTworkbooks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            name
            id
            projectname
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTworkbooksQuery>response.data.syncTworkbooks;
  }
  async GetTptds(id: string): Promise<GetTptdsQuery> {
    const statement = `query GetTptds($id: ID!) {
        getTptds(id: $id) {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTptdsQuery>response.data.getTptds;
  }
  async ListTptds(
    filter?: ModelTptdsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTptdsQuery> {
    const statement = `query ListTptds($filter: ModelTptdsFilterInput, $limit: Int, $nextToken: String) {
        listTptds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            dsid
            name
            pname
            filepath
            username
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTptdsQuery>response.data.listTptds;
  }
  async SyncTptds(
    filter?: ModelTptdsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTptdsQuery> {
    const statement = `query SyncTptds($filter: ModelTptdsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTptds(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            dsid
            name
            pname
            filepath
            username
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTptdsQuery>response.data.syncTptds;
  }
  async GetTwtp(id: string): Promise<GetTwtpQuery> {
    const statement = `query GetTwtp($id: ID!) {
        getTwtp(id: $id) {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTwtpQuery>response.data.getTwtp;
  }
  async ListTwtps(
    filter?: ModelTwtpFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTwtpsQuery> {
    const statement = `query ListTwtps($filter: ModelTwtpFilterInput, $limit: Int, $nextToken: String) {
        listTwtps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            pid
            pname
            workbookname
            username
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTwtpsQuery>response.data.listTwtps;
  }
  async SyncTwtps(
    filter?: ModelTwtpFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTwtpsQuery> {
    const statement = `query SyncTwtps($filter: ModelTwtpFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTwtps(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            pid
            pname
            workbookname
            username
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTwtpsQuery>response.data.syncTwtps;
  }
  async GetXmlinput(id: string): Promise<GetXmlinputQuery> {
    const statement = `query GetXmlinput($id: ID!) {
        getXmlinput(id: $id) {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetXmlinputQuery>response.data.getXmlinput;
  }
  async ListXmlinputs(
    filter?: ModelXmlinputFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListXmlinputsQuery> {
    const statement = `query ListXmlinputs($filter: ModelXmlinputFilterInput, $limit: Int, $nextToken: String) {
        listXmlinputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sheetname
            xaxis
            yaxis
            charttype
            qsid
            quicksight {
              __typename
              id
              awsaccountId
              username
              region
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            title
            formula
            aggregationfun
            percentileval
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListXmlinputsQuery>response.data.listXmlinputs;
  }
  async SyncXmlinputs(
    filter?: ModelXmlinputFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncXmlinputsQuery> {
    const statement = `query SyncXmlinputs($filter: ModelXmlinputFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncXmlinputs(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            sheetname
            xaxis
            yaxis
            charttype
            qsid
            quicksight {
              __typename
              id
              awsaccountId
              username
              region
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            title
            formula
            aggregationfun
            percentileval
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncXmlinputsQuery>response.data.syncXmlinputs;
  }
  OnCreateTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableaulogin {
        onCreateTableaulogin {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableaulogin">>
  >;

  OnUpdateTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableaulogin {
        onUpdateTableaulogin {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableaulogin">>
  >;

  OnDeleteTableauloginListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableaulogin">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableaulogin {
        onDeleteTableaulogin {
          __typename
          id
          username
          password
          sitename
          siteurl
          tenv {
            __typename
            name
            tpid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableaulogin">>
  >;

  OnCreateQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightlogin {
        onCreateQuicksightlogin {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightlogin">
    >
  >;

  OnUpdateQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightlogin {
        onUpdateQuicksightlogin {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightlogin">
    >
  >;

  OnDeleteQuicksightloginListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightlogin">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightlogin {
        onDeleteQuicksightlogin {
          __typename
          id
          awsaccountId
          username
          region
          qenv {
            __typename
            name
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          xmlinput {
            __typename
            items {
              __typename
              id
              sheetname
              xaxis
              yaxis
              charttype
              qsid
              title
              formula
              aggregationfun
              percentileval
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightlogin">
    >
  >;

  OnCreateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCustomer">>
  >;

  OnUpdateCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCustomer">>
  >;

  OnDeleteCustomerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          name
          DName
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCustomer">>
  >;

  OnCreateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDepartment {
        onCreateDepartment {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  >;

  OnUpdateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDepartment {
        onUpdateDepartment {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  >;

  OnDeleteDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDepartment {
        onDeleteDepartment {
          __typename
          Did
          DName
          customers {
            __typename
            items {
              __typename
              name
              DName
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          tprojects {
            __typename
            items {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qprojects {
            __typename
            items {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  >;

  OnCreateBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBIMProject {
        onCreateBIMProject {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBIMProject">>
  >;

  OnUpdateBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBIMProject {
        onUpdateBIMProject {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBIMProject">>
  >;

  OnDeleteBIMProjectListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBIMProject">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBIMProject {
        onDeleteBIMProject {
          __typename
          DName
          UserName
          Customer {
            __typename
            name
            DName
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          Pname
          source
          destination
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBIMProject">>
  >;

  OnCreateDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDataset {
        onCreateDataset {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDataset">>
  >;

  OnUpdateDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDataset {
        onUpdateDataset {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDataset">>
  >;

  OnDeleteDatasetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDataset">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDataset {
        onDeleteDataset {
          __typename
          datasetid
          name
          datasources {
            __typename
            items {
              __typename
              dsid
              name
              datasetid
              databaseserver
              port
              databasename
              username
              password
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
          }
          Files {
            __typename
            items {
              __typename
              name
              url
              datasetid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDataset">>
  >;

  OnCreateFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFile {
        onCreateFile {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  >;

  OnUpdateFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFile {
        onUpdateFile {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
  >;

  OnDeleteFileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFile {
        onDeleteFile {
          __typename
          name
          url
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  >;

  OnCreateDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDatasources {
        onCreateDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDatasources">>
  >;

  OnUpdateDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDatasources {
        onUpdateDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDatasources">>
  >;

  OnDeleteDatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDatasources {
        onDeleteDatasources {
          __typename
          dsid
          name
          datasetid
          datasets {
            __typename
            datasetid
            name
            datasources {
              __typename
              nextToken
            }
            Files {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          table {
            __typename
            items {
              __typename
              name
              dsid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          databaseserver
          port
          databasename
          username
          password
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDatasources">>
  >;

  OnCreateTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauProject {
        onCreateTableauProject {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTableauProject">
    >
  >;

  OnUpdateTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauProject {
        onUpdateTableauProject {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTableauProject">
    >
  >;

  OnDeleteTableauProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauProject {
        onDeleteTableauProject {
          __typename
          tpid
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTableauProject">
    >
  >;

  OnCreateTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauEnv {
        onCreateTableauEnv {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauEnv">>
  >;

  OnUpdateTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauEnv {
        onUpdateTableauEnv {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauEnv">>
  >;

  OnDeleteTableauEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauEnv {
        onDeleteTableauEnv {
          __typename
          name
          tpid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauEnv">>
  >;

  OnCreateTaleauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTaleauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTaleauWorkbook {
        onCreateTaleauWorkbook {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTaleauWorkbook">
    >
  >;

  OnUpdateTaleauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTaleauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTaleauWorkbook {
        onUpdateTaleauWorkbook {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTaleauWorkbook">
    >
  >;

  OnDeleteTaleauWorkbookListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTaleauWorkbook">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTaleauWorkbook {
        onDeleteTaleauWorkbook {
          __typename
          name
          tpid
          twbid
          tproject {
            __typename
            tpid
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTaleauWorkbook">
    >
  >;

  OnCreateTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauSheet {
        onCreateTableauSheet {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauSheet">>
  >;

  OnUpdateTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauSheet {
        onUpdateTableauSheet {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauSheet">>
  >;

  OnDeleteTableauSheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauSheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauSheet {
        onDeleteTableauSheet {
          __typename
          name
          twbid
          tsid
          tworkbook {
            __typename
            name
            tpid
            twbid
            tproject {
              __typename
              tpid
              name
              Did
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauSheet">>
  >;

  OnCreateTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTableauGraph {
        onCreateTableauGraph {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTableauGraph">>
  >;

  OnUpdateTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTableauGraph {
        onUpdateTableauGraph {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTableauGraph">>
  >;

  OnDeleteTableauGraphListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauGraph">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTableauGraph {
        onDeleteTableauGraph {
          __typename
          name
          tsid
          tsheet {
            __typename
            name
            twbid
            tsid
            tworkbook {
              __typename
              name
              tpid
              twbid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTableauGraph">>
  >;

  OnCreateQuicksightProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightProject {
        onCreateQuicksightProject {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightProject">
    >
  >;

  OnUpdateQuicksightProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightProject {
        onUpdateQuicksightProject {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightProject">
    >
  >;

  OnDeleteQuicksightProjectListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightProject">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightProject {
        onDeleteQuicksightProject {
          __typename
          id
          name
          Did
          department {
            __typename
            Did
            DName
            customers {
              __typename
              nextToken
              startedAt
            }
            tprojects {
              __typename
              nextToken
              startedAt
            }
            qprojects {
              __typename
              nextToken
              startedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          templates {
            __typename
            items {
              __typename
              id
              name
              sourceanalysisId
              Qpid
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          env {
            __typename
            items {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightProject">
    >
  >;

  OnCreateQuicksightTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightTemplate {
        onCreateQuicksightTemplate {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightTemplate">
    >
  >;

  OnUpdateQuicksightTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightTemplate {
        onUpdateQuicksightTemplate {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightTemplate">
    >
  >;

  OnDeleteQuicksightTemplateListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightTemplate">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightTemplate {
        onDeleteQuicksightTemplate {
          __typename
          id
          name
          sourceanalysisId
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          qanalysis {
            __typename
            items {
              __typename
              name
              QuicksightTemplateId
              sourceanalysisId
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          qdashboard {
            __typename
            items {
              __typename
              name
              qtid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightTemplate">
    >
  >;

  OnCreateQuicksightAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightAnalysis {
        onCreateQuicksightAnalysis {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightAnalysis">
    >
  >;

  OnUpdateQuicksightAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightAnalysis {
        onUpdateQuicksightAnalysis {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightAnalysis">
    >
  >;

  OnDeleteQuicksightAnalysisListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightAnalysis">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightAnalysis {
        onDeleteQuicksightAnalysis {
          __typename
          name
          QuicksightTemplateId
          sourceanalysisId
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightAnalysis">
    >
  >;

  OnCreateQuicksightEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuicksightEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightEnv {
        onCreateQuicksightEnv {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuicksightEnv">>
  >;

  OnUpdateQuicksightEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuicksightEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightEnv {
        onUpdateQuicksightEnv {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuicksightEnv">>
  >;

  OnDeleteQuicksightEnvListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuicksightEnv">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightEnv {
        onDeleteQuicksightEnv {
          __typename
          name
          Qpid
          qproject {
            __typename
            id
            name
            Did
            department {
              __typename
              Did
              DName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            templates {
              __typename
              nextToken
              startedAt
            }
            env {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuicksightEnv">>
  >;

  OnCreateQuicksightDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightDashboard {
        onCreateQuicksightDashboard {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightDashboard">
    >
  >;

  OnUpdateQuicksightDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightDashboard {
        onUpdateQuicksightDashboard {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightDashboard">
    >
  >;

  OnDeleteQuicksightDashboardListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightDashboard">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightDashboard {
        onDeleteQuicksightDashboard {
          __typename
          name
          qtid
          qtemplate {
            __typename
            id
            name
            sourceanalysisId
            Qpid
            qproject {
              __typename
              id
              name
              Did
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            qanalysis {
              __typename
              nextToken
              startedAt
            }
            qdashboard {
              __typename
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightDashboard">
    >
  >;

  OnCreateTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTable {
        onCreateTable {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTable">>
  >;

  OnUpdateTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTable {
        onUpdateTable {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTable">>
  >;

  OnDeleteTableListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTable">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTable {
        onDeleteTable {
          __typename
          name
          dsid
          datasource {
            __typename
            dsid
            name
            datasetid
            datasets {
              __typename
              datasetid
              name
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            table {
              __typename
              nextToken
              startedAt
            }
            databaseserver
            port
            databasename
            username
            password
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTable">>
  >;

  OnCreateQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightFolder {
        onCreateQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightFolder">
    >
  >;

  OnUpdateQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightFolder {
        onUpdateQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightFolder">
    >
  >;

  OnDeleteQuicksightFolderListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightFolder">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightFolder {
        onDeleteQuicksightFolder {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightFolder">
    >
  >;

  OnCreateQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuicksightGroup {
        onCreateQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateQuicksightGroup">
    >
  >;

  OnUpdateQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuicksightGroup {
        onUpdateQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateQuicksightGroup">
    >
  >;

  OnDeleteQuicksightGroupListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightGroup">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuicksightGroup {
        onDeleteQuicksightGroup {
          __typename
          name
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteQuicksightGroup">
    >
  >;

  OnCreateCommentsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComments">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComments {
        onCreateComments {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComments">>
  >;

  OnUpdateCommentsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComments">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComments {
        onUpdateComments {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComments">>
  >;

  OnDeleteCommentsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComments">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComments {
        onDeleteComments {
          __typename
          comments
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComments">>
  >;

  OnCreateTprojectsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTprojects">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTprojects {
        onCreateTprojects {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTprojects">>
  >;

  OnUpdateTprojectsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTprojects">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTprojects {
        onUpdateTprojects {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTprojects">>
  >;

  OnDeleteTprojectsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTprojects">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTprojects {
        onDeleteTprojects {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTprojects">>
  >;

  OnCreateTdatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTdatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTdatasources {
        onCreateTdatasources {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTdatasources">>
  >;

  OnUpdateTdatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTdatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTdatasources {
        onUpdateTdatasources {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTdatasources">>
  >;

  OnDeleteTdatasourcesListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTdatasources">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTdatasources {
        onDeleteTdatasources {
          __typename
          id
          filepath
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTdatasources">>
  >;

  OnCreateTworkbooksListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTworkbooks">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTworkbooks {
        onCreateTworkbooks {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTworkbooks">>
  >;

  OnUpdateTworkbooksListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTworkbooks">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTworkbooks {
        onUpdateTworkbooks {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTworkbooks">>
  >;

  OnDeleteTworkbooksListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTworkbooks">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTworkbooks {
        onDeleteTworkbooks {
          __typename
          name
          id
          projectname
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTworkbooks">>
  >;

  OnCreateTptdsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTptds">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTptds {
        onCreateTptds {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTptds">>
  >;

  OnUpdateTptdsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTptds">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTptds {
        onUpdateTptds {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTptds">>
  >;

  OnDeleteTptdsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTptds">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTptds {
        onDeleteTptds {
          __typename
          id
          dsid
          name
          pname
          filepath
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTptds">>
  >;

  OnCreateTwtpListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTwtp">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTwtp {
        onCreateTwtp {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTwtp">>
  >;

  OnUpdateTwtpListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTwtp">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTwtp {
        onUpdateTwtp {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTwtp">>
  >;

  OnDeleteTwtpListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTwtp">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTwtp {
        onDeleteTwtp {
          __typename
          id
          pid
          pname
          workbookname
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTwtp">>
  >;

  OnCreateXmlinputListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateXmlinput">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateXmlinput {
        onCreateXmlinput {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateXmlinput">>
  >;

  OnUpdateXmlinputListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateXmlinput">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateXmlinput {
        onUpdateXmlinput {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateXmlinput">>
  >;

  OnDeleteXmlinputListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteXmlinput">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteXmlinput {
        onDeleteXmlinput {
          __typename
          id
          sheetname
          xaxis
          yaxis
          charttype
          qsid
          quicksight {
            __typename
            id
            awsaccountId
            username
            region
            qenv {
              __typename
              name
              Qpid
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            xmlinput {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          title
          formula
          aggregationfun
          percentileval
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteXmlinput">>
  >;
}
