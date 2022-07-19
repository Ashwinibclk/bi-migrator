import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Departments {
  MARKETING = "MARKETING",
  FINANCE = "FINANCE",
  HR = "HR",
  SALES = "SALES",
  PURCHASE = "PURCHASE"
}

export enum BiPlatform {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}

export declare class message {
  readonly body: string;
  readonly body1: string;
  readonly body2: string;
  constructor(init: ModelInit<message>);
}

export declare class quick {
  readonly body: string;
  constructor(init: ModelInit<quick>);
}

export declare class aws {
  readonly body: string;
  constructor(init: ModelInit<aws>);
}

export declare class tabauth {
  readonly body: string;
  constructor(init: ModelInit<tabauth>);
}

export declare class getwb {
  readonly body: string;
  constructor(init: ModelInit<getwb>);
}

type TableauloginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauEnvMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DepartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightTemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightAnalysisMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightDashboardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightEnvMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightloginMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type xmlinputMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BIMProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type datasetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type datasourcesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaleauWorkbookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauSheetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauGraphMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightFolderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuicksightGroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type commentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type tprojectsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type tdatasourcesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type tworkbooksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type tptdsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type twtpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tableaulogin {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly sitename: string;
  readonly siteurl: string;
  readonly tenv?: TableauEnv | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly i?: string | null;
  constructor(init: ModelInit<Tableaulogin, TableauloginMetaData>);
  static copyOf(source: Tableaulogin, mutator: (draft: MutableModel<Tableaulogin, TableauloginMetaData>) => MutableModel<Tableaulogin, TableauloginMetaData> | void): Tableaulogin;
}

export declare class TableauEnv {
  readonly id: string;
  readonly name: string;
  readonly tpid: string;
  readonly tproject?: TableauProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauEnv, TableauEnvMetaData>);
  static copyOf(source: TableauEnv, mutator: (draft: MutableModel<TableauEnv, TableauEnvMetaData>) => MutableModel<TableauEnv, TableauEnvMetaData> | void): TableauEnv;
}

export declare class TableauProject {
  readonly id: string;
  readonly tpid: string;
  readonly name: string;
  readonly department?: Department | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauProject, TableauProjectMetaData>);
  static copyOf(source: TableauProject, mutator: (draft: MutableModel<TableauProject, TableauProjectMetaData>) => MutableModel<TableauProject, TableauProjectMetaData> | void): TableauProject;
}

export declare class Department {
  readonly id: string;
  readonly Did: string;
  readonly DName: Departments | keyof typeof Departments;
  readonly customers?: (Customer | null)[] | null;
  readonly tprojects?: (TableauProject | null)[] | null;
  readonly qprojects?: (QuicksightProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly DName: Departments | keyof typeof Departments;
  readonly department?: Department | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class QuicksightProject {
  readonly id: string;
  readonly name: string;
  readonly department?: Department | null;
  readonly templates?: (QuicksightTemplate | null)[] | null;
  readonly env?: (QuicksightEnv | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightProject, QuicksightProjectMetaData>);
  static copyOf(source: QuicksightProject, mutator: (draft: MutableModel<QuicksightProject, QuicksightProjectMetaData>) => MutableModel<QuicksightProject, QuicksightProjectMetaData> | void): QuicksightProject;
}

export declare class QuicksightTemplate {
  readonly id: string;
  readonly name: string;
  readonly sourceanalysisId: string;
  readonly qproject?: QuicksightProject | null;
  readonly qanalysis?: (QuicksightAnalysis | null)[] | null;
  readonly qdashboard?: (QuicksightDashboard | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightTemplate, QuicksightTemplateMetaData>);
  static copyOf(source: QuicksightTemplate, mutator: (draft: MutableModel<QuicksightTemplate, QuicksightTemplateMetaData>) => MutableModel<QuicksightTemplate, QuicksightTemplateMetaData> | void): QuicksightTemplate;
}

export declare class QuicksightAnalysis {
  readonly id: string;
  readonly name: string;
  readonly QuicksightTemplateId: string;
  readonly qtemplate?: QuicksightTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightAnalysis, QuicksightAnalysisMetaData>);
  static copyOf(source: QuicksightAnalysis, mutator: (draft: MutableModel<QuicksightAnalysis, QuicksightAnalysisMetaData>) => MutableModel<QuicksightAnalysis, QuicksightAnalysisMetaData> | void): QuicksightAnalysis;
}

export declare class QuicksightDashboard {
  readonly id: string;
  readonly name: string;
  readonly qtemplate?: QuicksightTemplate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightDashboard, QuicksightDashboardMetaData>);
  static copyOf(source: QuicksightDashboard, mutator: (draft: MutableModel<QuicksightDashboard, QuicksightDashboardMetaData>) => MutableModel<QuicksightDashboard, QuicksightDashboardMetaData> | void): QuicksightDashboard;
}

export declare class QuicksightEnv {
  readonly id: string;
  readonly name: string;
  readonly qproject?: QuicksightProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightEnv, QuicksightEnvMetaData>);
  static copyOf(source: QuicksightEnv, mutator: (draft: MutableModel<QuicksightEnv, QuicksightEnvMetaData>) => MutableModel<QuicksightEnv, QuicksightEnvMetaData> | void): QuicksightEnv;
}

export declare class Quicksightlogin {
  readonly id: string;
  readonly awsaccountId: string;
  readonly username: string;
  readonly region: string;
  readonly qenv?: QuicksightEnv | null;
  readonly xmlinput?: (xmlinput | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly i?: string | null;
  constructor(init: ModelInit<Quicksightlogin, QuicksightloginMetaData>);
  static copyOf(source: Quicksightlogin, mutator: (draft: MutableModel<Quicksightlogin, QuicksightloginMetaData>) => MutableModel<Quicksightlogin, QuicksightloginMetaData> | void): Quicksightlogin;
}

export declare class xmlinput {
  readonly id: string;
  readonly sheetname: string;
  readonly xaxis: string;
  readonly yaxis: string;
  readonly charttype: string;
  readonly quicksight?: Quicksightlogin | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<xmlinput, xmlinputMetaData>);
  static copyOf(source: xmlinput, mutator: (draft: MutableModel<xmlinput, xmlinputMetaData>) => MutableModel<xmlinput, xmlinputMetaData> | void): xmlinput;
}

export declare class BIMProject {
  readonly id: string;
  readonly DName: Departments | keyof typeof Departments;
  readonly UserName: string;
  readonly Customer?: Customer | null;
  readonly Pname: string;
  readonly source: BiPlatform | keyof typeof BiPlatform;
  readonly destination: BiPlatform | keyof typeof BiPlatform;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BIMProject, BIMProjectMetaData>);
  static copyOf(source: BIMProject, mutator: (draft: MutableModel<BIMProject, BIMProjectMetaData>) => MutableModel<BIMProject, BIMProjectMetaData> | void): BIMProject;
}

export declare class dataset {
  readonly id: string;
  readonly datasetid: string;
  readonly name: string;
  readonly datasources?: (datasources | null)[] | null;
  readonly Files?: (File | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<dataset, datasetMetaData>);
  static copyOf(source: dataset, mutator: (draft: MutableModel<dataset, datasetMetaData>) => MutableModel<dataset, datasetMetaData> | void): dataset;
}

export declare class datasources {
  readonly id: string;
  readonly dsid: string;
  readonly name: string;
  readonly datasets?: dataset | null;
  readonly table?: (Table | null)[] | null;
  readonly databaseserver: string;
  readonly port: number;
  readonly databasename: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<datasources, datasourcesMetaData>);
  static copyOf(source: datasources, mutator: (draft: MutableModel<datasources, datasourcesMetaData>) => MutableModel<datasources, datasourcesMetaData> | void): datasources;
}

export declare class Table {
  readonly id: string;
  readonly name: string;
  readonly datasource?: datasources | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Table, TableMetaData>);
  static copyOf(source: Table, mutator: (draft: MutableModel<Table, TableMetaData>) => MutableModel<Table, TableMetaData> | void): Table;
}

export declare class File {
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly datasets?: dataset | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<File, FileMetaData>);
  static copyOf(source: File, mutator: (draft: MutableModel<File, FileMetaData>) => MutableModel<File, FileMetaData> | void): File;
}

export declare class TaleauWorkbook {
  readonly id: string;
  readonly name: string;
  readonly tpid: string;
  readonly twbid: string;
  readonly tproject?: TableauProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TaleauWorkbook, TaleauWorkbookMetaData>);
  static copyOf(source: TaleauWorkbook, mutator: (draft: MutableModel<TaleauWorkbook, TaleauWorkbookMetaData>) => MutableModel<TaleauWorkbook, TaleauWorkbookMetaData> | void): TaleauWorkbook;
}

export declare class TableauSheet {
  readonly id: string;
  readonly name: string;
  readonly twbid: string;
  readonly tsid: string;
  readonly tworkbook?: TaleauWorkbook | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauSheet, TableauSheetMetaData>);
  static copyOf(source: TableauSheet, mutator: (draft: MutableModel<TableauSheet, TableauSheetMetaData>) => MutableModel<TableauSheet, TableauSheetMetaData> | void): TableauSheet;
}

export declare class TableauGraph {
  readonly id: string;
  readonly name: string;
  readonly tsid: string;
  readonly tsheet?: TableauSheet | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauGraph, TableauGraphMetaData>);
  static copyOf(source: TableauGraph, mutator: (draft: MutableModel<TableauGraph, TableauGraphMetaData>) => MutableModel<TableauGraph, TableauGraphMetaData> | void): TableauGraph;
}

export declare class QuicksightFolder {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightFolder, QuicksightFolderMetaData>);
  static copyOf(source: QuicksightFolder, mutator: (draft: MutableModel<QuicksightFolder, QuicksightFolderMetaData>) => MutableModel<QuicksightFolder, QuicksightFolderMetaData> | void): QuicksightFolder;
}

export declare class QuicksightGroup {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QuicksightGroup, QuicksightGroupMetaData>);
  static copyOf(source: QuicksightGroup, mutator: (draft: MutableModel<QuicksightGroup, QuicksightGroupMetaData>) => MutableModel<QuicksightGroup, QuicksightGroupMetaData> | void): QuicksightGroup;
}

export declare class comments {
  readonly id: string;
  readonly comments: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<comments, commentsMetaData>);
  static copyOf(source: comments, mutator: (draft: MutableModel<comments, commentsMetaData>) => MutableModel<comments, commentsMetaData> | void): comments;
}

export declare class tprojects {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<tprojects, tprojectsMetaData>);
  static copyOf(source: tprojects, mutator: (draft: MutableModel<tprojects, tprojectsMetaData>) => MutableModel<tprojects, tprojectsMetaData> | void): tprojects;
}

export declare class tdatasources {
  readonly id: string;
  readonly filepath: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<tdatasources, tdatasourcesMetaData>);
  static copyOf(source: tdatasources, mutator: (draft: MutableModel<tdatasources, tdatasourcesMetaData>) => MutableModel<tdatasources, tdatasourcesMetaData> | void): tdatasources;
}

export declare class tworkbooks {
  readonly id: string;
  readonly name: string;
  readonly projectname: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<tworkbooks, tworkbooksMetaData>);
  static copyOf(source: tworkbooks, mutator: (draft: MutableModel<tworkbooks, tworkbooksMetaData>) => MutableModel<tworkbooks, tworkbooksMetaData> | void): tworkbooks;
}

export declare class tptds {
  readonly id: string;
  readonly dsid: string;
  readonly name: string;
  readonly pname: string;
  readonly filepath: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<tptds, tptdsMetaData>);
  static copyOf(source: tptds, mutator: (draft: MutableModel<tptds, tptdsMetaData>) => MutableModel<tptds, tptdsMetaData> | void): tptds;
}

export declare class twtp {
  readonly id: string;
  readonly pid: string;
  readonly pname: string;
  readonly workbookname: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<twtp, twtpMetaData>);
  static copyOf(source: twtp, mutator: (draft: MutableModel<twtp, twtpMetaData>) => MutableModel<twtp, twtpMetaData> | void): twtp;
}