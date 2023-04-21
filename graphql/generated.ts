import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddAnswersToQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCoordinatorsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCreatedProjectsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddDependenciesToQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddDependentsToQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddEnrolledProjectsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddInterviewersToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddQuestionGroupsToInterviewTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddQuestionsToQuestionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String'];
  user: User;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type CreateInterviewInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
  templateId: Scalars['String'];
};

export type CreateInterviewTemplateInput = {
  isAvailable: Scalars['Boolean'];
  isFinished: Scalars['Boolean'];
  name: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  version: Scalars['Float'];
};

export type CreateManyInterviewTemplatesInput = {
  /** Array of records to create */
  interviewTemplates: Array<CreateInterviewTemplateInput>;
};

export type CreateManyInterviewsInput = {
  /** Array of records to create */
  interviews: Array<CreateInterviewInput>;
};

export type CreateManyProjectsInput = {
  /** Array of records to create */
  projects: Array<CreateProjectInput>;
};

export type CreateManyQuestionDependenciesInput = {
  /** Array of records to create */
  questionDependencies: Array<CreateQuestionDependencyInput>;
};

export type CreateManyQuestionGroupsInput = {
  /** Array of records to create */
  questionGroups: Array<CreateQuestionGroupInput>;
};

export type CreateManyQuestionsInput = {
  /** Array of records to create */
  questions: Array<CreateQuestionInput>;
};

export type CreateManyResponsesInput = {
  /** Array of records to create */
  responses: Array<CreateResponseInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneInterviewInput = {
  /** The record to create */
  interview: CreateInterviewInput;
};

export type CreateOneInterviewTemplateInput = {
  /** The record to create */
  interviewTemplate: CreateInterviewTemplateInput;
};

export type CreateOneProjectInput = {
  /** The record to create */
  project: CreateProjectInput;
};

export type CreateOneQuestionDependencyInput = {
  /** The record to create */
  questionDependency: CreateQuestionDependencyInput;
};

export type CreateOneQuestionGroupInput = {
  /** The record to create */
  questionGroup: CreateQuestionGroupInput;
};

export type CreateOneQuestionInput = {
  /** The record to create */
  question: CreateQuestionInput;
};

export type CreateOneResponseInput = {
  /** The record to create */
  response: CreateResponseInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateProjectInput = {
  coordinators?: InputMaybe<Array<UpdateUserInput>>;
  generalDescription?: InputMaybe<Scalars['String']>;
  interviewerOrientations?: InputMaybe<Scalars['String']>;
  interviewers?: InputMaybe<Array<UpdateUserInput>>;
  name: Scalars['String'];
  terms?: InputMaybe<Scalars['String']>;
};

export type CreateQuestionDependencyInput = {
  action: QuestionDependencyActionEnum;
  dependencyId: Scalars['String'];
  dependentId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  referenceValue: Scalars['String'];
};

export type CreateQuestionGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  templateId: Scalars['String'];
};

export type CreateQuestionInput = {
  description?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Float']>;
  options?: InputMaybe<Array<Scalars['String']>>;
  placeholder?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: QuestionTypeEnum;
};

export type CreateResponseInput = {
  answer: Array<Scalars['String']>;
  interviewId: Scalars['String'];
  questionId: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: UserRoleEnum;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyInterviewTemplatesInput = {
  /** Filter to find records to delete */
  filter: InterviewTemplateDeleteFilter;
};

export type DeleteManyInterviewsInput = {
  /** Filter to find records to delete */
  filter: InterviewDeleteFilter;
};

export type DeleteManyProjectsInput = {
  /** Filter to find records to delete */
  filter: ProjectDeleteFilter;
};

export type DeleteManyQuestionDependenciesInput = {
  /** Filter to find records to delete */
  filter: QuestionDependencyDeleteFilter;
};

export type DeleteManyQuestionGroupsInput = {
  /** Filter to find records to delete */
  filter: QuestionGroupDeleteFilter;
};

export type DeleteManyQuestionsInput = {
  /** Filter to find records to delete */
  filter: QuestionDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyResponsesInput = {
  /** Filter to find records to delete */
  filter: ResponseDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneInterviewInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneInterviewTemplateInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneQuestionDependencyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneQuestionGroupInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneQuestionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneResponseInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Interview = {
  __typename?: 'Interview';
  answers?: Maybe<InterviewResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  interviewer: User;
  interviewerId: Scalars['String'];
  name: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  template: InterviewTemplate;
  templateId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewAggregateGroupBy = {
  __typename?: 'InterviewAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewConnection = {
  __typename?: 'InterviewConnection';
  /** Array of nodes. */
  nodes: Array<Interview>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type InterviewCountAggregate = {
  __typename?: 'InterviewCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interviewerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type InterviewDeleteFilter = {
  and?: InputMaybe<Array<InterviewDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewDeleteFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewDeleteResponse = {
  __typename?: 'InterviewDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewFilter = {
  and?: InputMaybe<Array<InterviewFilter>>;
  answers?: InputMaybe<InterviewFilterInterviewResponseFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewer?: InputMaybe<InterviewFilterUserFilter>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilter>>;
  project?: InputMaybe<InterviewFilterProjectFilter>;
  projectId?: InputMaybe<StringFieldComparison>;
  template?: InputMaybe<InterviewFilterInterviewTemplateFilter>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewFilterInterviewResponseFilter = {
  and?: InputMaybe<Array<InterviewFilterInterviewResponseFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId: StringFieldComparison;
  or?: InputMaybe<Array<InterviewFilterInterviewResponseFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewFilterInterviewTemplateFilter = {
  and?: InputMaybe<Array<InterviewFilterInterviewTemplateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterInterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewFilterProjectFilter = {
  and?: InputMaybe<Array<InterviewFilterProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterProjectFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewFilterUserFilter = {
  and?: InputMaybe<Array<InterviewFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewMaxAggregate = {
  __typename?: 'InterviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewMinAggregate = {
  __typename?: 'InterviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewResponse = {
  __typename?: 'InterviewResponse';
  answer: Array<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  interviewId: Scalars['String'];
  interviewerId: Scalars['String'];
  questionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterviewSort = {
  direction: SortDirection;
  field: InterviewSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InterviewSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  InterviewerId = 'interviewerId',
  Name = 'name',
  ProjectId = 'projectId',
  TemplateId = 'templateId',
  UpdatedAt = 'updatedAt'
}

export type InterviewTemplate = {
  __typename?: 'InterviewTemplate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  isFinished: Scalars['Boolean'];
  name: Scalars['String'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']>;
  questionGroups?: Maybe<Array<QuestionGroup>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Float']>;
};


export type InterviewTemplateQuestionGroupsArgs = {
  filter?: QuestionGroupFilter;
  sorting?: Array<QuestionGroupSort>;
};

export type InterviewTemplateAggregateGroupBy = {
  __typename?: 'InterviewTemplateAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isFinished?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateAvgAggregate = {
  __typename?: 'InterviewTemplateAvgAggregate';
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateConnection = {
  __typename?: 'InterviewTemplateConnection';
  /** Array of nodes. */
  nodes: Array<InterviewTemplate>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type InterviewTemplateCountAggregate = {
  __typename?: 'InterviewTemplateCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Int']>;
  isFinished?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type InterviewTemplateDeleteFilter = {
  and?: InputMaybe<Array<InterviewTemplateDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateDeleteFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewTemplateDeleteResponse = {
  __typename?: 'InterviewTemplateDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isFinished?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateFilter = {
  and?: InputMaybe<Array<InterviewTemplateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateFilter>>;
  project?: InputMaybe<InterviewTemplateFilterProjectFilter>;
  projectId?: InputMaybe<StringFieldComparison>;
  questionGroups?: InputMaybe<InterviewTemplateFilterQuestionGroupFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewTemplateFilterProjectFilter = {
  and?: InputMaybe<Array<InterviewTemplateFilterProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateFilterProjectFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewTemplateFilterQuestionGroupFilter = {
  and?: InputMaybe<Array<InterviewTemplateFilterQuestionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateFilterQuestionGroupFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InterviewTemplateMaxAggregate = {
  __typename?: 'InterviewTemplateMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateMinAggregate = {
  __typename?: 'InterviewTemplateMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateSort = {
  direction: SortDirection;
  field: InterviewTemplateSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InterviewTemplateSortFields {
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  DeletedAt = 'deletedAt',
  Id = 'id',
  IsAvailable = 'isAvailable',
  IsFinished = 'isFinished',
  Name = 'name',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt',
  Version = 'version'
}

export type InterviewTemplateSumAggregate = {
  __typename?: 'InterviewTemplateSumAggregate';
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateUpdateFilter = {
  and?: InputMaybe<Array<InterviewTemplateUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateUpdateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewUpdateFilter = {
  and?: InputMaybe<Array<InterviewUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewUpdateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnswersToQuestion: Question;
  addCoordinatorsToProject: Project;
  addCreatedProjectsToUser: User;
  addDependenciesToQuestion: Question;
  addDependentsToQuestion: Question;
  addEnrolledProjectsToUser: User;
  addInterviewersToProject: Project;
  addProjectsToUser: User;
  addQuestionGroupsToInterviewTemplate: InterviewTemplate;
  addQuestionsToQuestionGroup: QuestionGroup;
  createManyInterviewTemplates: Array<InterviewTemplate>;
  createManyInterviews: Array<Interview>;
  createManyProjects: Array<Project>;
  createManyQuestionDependencies: Array<QuestionDependency>;
  createManyQuestionGroups: Array<QuestionGroup>;
  createManyQuestions: Array<Question>;
  createManyResponses: Array<Response>;
  createManyUsers: Array<User>;
  createOneInterview: Interview;
  createOneInterviewTemplate: InterviewTemplate;
  createOneProject: Project;
  createOneQuestion: Question;
  createOneQuestionDependency: QuestionDependency;
  createOneQuestionGroup: QuestionGroup;
  createOneResponse: Response;
  createOneUser: User;
  deleteManyInterviewTemplates: DeleteManyResponse;
  deleteManyInterviews: DeleteManyResponse;
  deleteManyProjects: DeleteManyResponse;
  deleteManyQuestionDependencies: DeleteManyResponse;
  deleteManyQuestionGroups: DeleteManyResponse;
  deleteManyQuestions: DeleteManyResponse;
  deleteManyResponses: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneInterview: InterviewDeleteResponse;
  deleteOneInterviewTemplate: InterviewTemplateDeleteResponse;
  deleteOneProject: ProjectDeleteResponse;
  deleteOneQuestion: QuestionDeleteResponse;
  deleteOneQuestionDependency: QuestionDependencyDeleteResponse;
  deleteOneQuestionGroup: QuestionGroupDeleteResponse;
  deleteOneResponse: ResponseDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  login: AuthType;
  removeAnswersFromInterview: Interview;
  removeAnswersFromQuestion: Question;
  removeCoordinatorsFromProject: Project;
  removeCreatedProjectsFromUser: User;
  removeDependenciesFromQuestion: Question;
  removeDependencyFromQuestionDependency: QuestionDependency;
  removeDependentFromQuestionDependency: QuestionDependency;
  removeDependentsFromQuestion: Question;
  removeEnrolledProjectsFromUser: User;
  removeGroupFromQuestion: Question;
  removeInterviewFromResponse: Response;
  removeInterviewerFromInterview: Interview;
  removeInterviewerFromResponse: Response;
  removeInterviewersFromProject: Project;
  removeProjectFromInterview: Interview;
  removeProjectFromInterviewTemplate: InterviewTemplate;
  removeProjectsFromUser: User;
  removeQuestionFromResponse: Response;
  removeQuestionGroupsFromInterviewTemplate: InterviewTemplate;
  removeQuestionsFromQuestionGroup: QuestionGroup;
  removeTemplateFromInterview: Interview;
  removeTemplateFromProject: Project;
  removeTemplateFromQuestionGroup: QuestionGroup;
  setAnswersOnInterview: Interview;
  setAnswersOnQuestion: Question;
  setCoordinatorsOnProject: Project;
  setCreatedProjectsOnUser: User;
  setDependenciesOnQuestion: Question;
  setDependencyOnQuestionDependency: QuestionDependency;
  setDependentOnQuestionDependency: QuestionDependency;
  setDependentsOnQuestion: Question;
  setEnrolledProjectsOnUser: User;
  setGroupOnQuestion: Question;
  setInterviewOnResponse: Response;
  setInterviewerOnInterview: Interview;
  setInterviewerOnResponse: Response;
  setInterviewersOnProject: Project;
  setProjectOnInterview: Interview;
  setProjectOnInterviewTemplate: InterviewTemplate;
  setProjectsOnUser: User;
  setQuestionGroupsOnInterviewTemplate: InterviewTemplate;
  setQuestionOnResponse: Response;
  setQuestionsOnQuestionGroup: QuestionGroup;
  setTemplateOnInterview: Interview;
  setTemplateOnProject: Project;
  setTemplateOnQuestionGroup: QuestionGroup;
  updateManyInterviewTemplates: UpdateManyResponse;
  updateManyInterviews: UpdateManyResponse;
  updateManyProjects: UpdateManyResponse;
  updateManyQuestionDependencies: UpdateManyResponse;
  updateManyQuestionGroups: UpdateManyResponse;
  updateManyQuestions: UpdateManyResponse;
  updateManyResponses: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneInterview: Interview;
  updateOneInterviewTemplate: InterviewTemplate;
  updateOneProject: Project;
  updateOneQuestion: Question;
  updateOneQuestionDependency: QuestionDependency;
  updateOneQuestionGroup: QuestionGroup;
  updateOneResponse: Response;
  updateOneUser: User;
};


export type MutationAddAnswersToQuestionArgs = {
  input: AddAnswersToQuestionInput;
};


export type MutationAddCoordinatorsToProjectArgs = {
  input: AddCoordinatorsToProjectInput;
};


export type MutationAddCreatedProjectsToUserArgs = {
  input: AddCreatedProjectsToUserInput;
};


export type MutationAddDependenciesToQuestionArgs = {
  input: AddDependenciesToQuestionInput;
};


export type MutationAddDependentsToQuestionArgs = {
  input: AddDependentsToQuestionInput;
};


export type MutationAddEnrolledProjectsToUserArgs = {
  input: AddEnrolledProjectsToUserInput;
};


export type MutationAddInterviewersToProjectArgs = {
  input: AddInterviewersToProjectInput;
};


export type MutationAddProjectsToUserArgs = {
  input: AddProjectsToUserInput;
};


export type MutationAddQuestionGroupsToInterviewTemplateArgs = {
  input: AddQuestionGroupsToInterviewTemplateInput;
};


export type MutationAddQuestionsToQuestionGroupArgs = {
  input: AddQuestionsToQuestionGroupInput;
};


export type MutationCreateManyInterviewTemplatesArgs = {
  input: CreateManyInterviewTemplatesInput;
};


export type MutationCreateManyInterviewsArgs = {
  input: CreateManyInterviewsInput;
};


export type MutationCreateManyProjectsArgs = {
  input: CreateManyProjectsInput;
};


export type MutationCreateManyQuestionDependenciesArgs = {
  input: CreateManyQuestionDependenciesInput;
};


export type MutationCreateManyQuestionGroupsArgs = {
  input: CreateManyQuestionGroupsInput;
};


export type MutationCreateManyQuestionsArgs = {
  input: CreateManyQuestionsInput;
};


export type MutationCreateManyResponsesArgs = {
  input: CreateManyResponsesInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneInterviewArgs = {
  input: CreateOneInterviewInput;
};


export type MutationCreateOneInterviewTemplateArgs = {
  input: CreateOneInterviewTemplateInput;
};


export type MutationCreateOneProjectArgs = {
  input: CreateOneProjectInput;
};


export type MutationCreateOneQuestionArgs = {
  input: CreateOneQuestionInput;
};


export type MutationCreateOneQuestionDependencyArgs = {
  input: CreateOneQuestionDependencyInput;
};


export type MutationCreateOneQuestionGroupArgs = {
  input: CreateOneQuestionGroupInput;
};


export type MutationCreateOneResponseArgs = {
  input: CreateOneResponseInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyInterviewTemplatesArgs = {
  input: DeleteManyInterviewTemplatesInput;
};


export type MutationDeleteManyInterviewsArgs = {
  input: DeleteManyInterviewsInput;
};


export type MutationDeleteManyProjectsArgs = {
  input: DeleteManyProjectsInput;
};


export type MutationDeleteManyQuestionDependenciesArgs = {
  input: DeleteManyQuestionDependenciesInput;
};


export type MutationDeleteManyQuestionGroupsArgs = {
  input: DeleteManyQuestionGroupsInput;
};


export type MutationDeleteManyQuestionsArgs = {
  input: DeleteManyQuestionsInput;
};


export type MutationDeleteManyResponsesArgs = {
  input: DeleteManyResponsesInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneInterviewArgs = {
  input: DeleteOneInterviewInput;
};


export type MutationDeleteOneInterviewTemplateArgs = {
  input: DeleteOneInterviewTemplateInput;
};


export type MutationDeleteOneProjectArgs = {
  input: DeleteOneProjectInput;
};


export type MutationDeleteOneQuestionArgs = {
  input: DeleteOneQuestionInput;
};


export type MutationDeleteOneQuestionDependencyArgs = {
  input: DeleteOneQuestionDependencyInput;
};


export type MutationDeleteOneQuestionGroupArgs = {
  input: DeleteOneQuestionGroupInput;
};


export type MutationDeleteOneResponseArgs = {
  input: DeleteOneResponseInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationRemoveAnswersFromInterviewArgs = {
  input: RemoveAnswersFromInterviewInput;
};


export type MutationRemoveAnswersFromQuestionArgs = {
  input: RemoveAnswersFromQuestionInput;
};


export type MutationRemoveCoordinatorsFromProjectArgs = {
  input: RemoveCoordinatorsFromProjectInput;
};


export type MutationRemoveCreatedProjectsFromUserArgs = {
  input: RemoveCreatedProjectsFromUserInput;
};


export type MutationRemoveDependenciesFromQuestionArgs = {
  input: RemoveDependenciesFromQuestionInput;
};


export type MutationRemoveDependencyFromQuestionDependencyArgs = {
  input: RemoveDependencyFromQuestionDependencyInput;
};


export type MutationRemoveDependentFromQuestionDependencyArgs = {
  input: RemoveDependentFromQuestionDependencyInput;
};


export type MutationRemoveDependentsFromQuestionArgs = {
  input: RemoveDependentsFromQuestionInput;
};


export type MutationRemoveEnrolledProjectsFromUserArgs = {
  input: RemoveEnrolledProjectsFromUserInput;
};


export type MutationRemoveGroupFromQuestionArgs = {
  input: RemoveGroupFromQuestionInput;
};


export type MutationRemoveInterviewFromResponseArgs = {
  input: RemoveInterviewFromResponseInput;
};


export type MutationRemoveInterviewerFromInterviewArgs = {
  input: RemoveInterviewerFromInterviewInput;
};


export type MutationRemoveInterviewerFromResponseArgs = {
  input: RemoveInterviewerFromResponseInput;
};


export type MutationRemoveInterviewersFromProjectArgs = {
  input: RemoveInterviewersFromProjectInput;
};


export type MutationRemoveProjectFromInterviewArgs = {
  input: RemoveProjectFromInterviewInput;
};


export type MutationRemoveProjectFromInterviewTemplateArgs = {
  input: RemoveProjectFromInterviewTemplateInput;
};


export type MutationRemoveProjectsFromUserArgs = {
  input: RemoveProjectsFromUserInput;
};


export type MutationRemoveQuestionFromResponseArgs = {
  input: RemoveQuestionFromResponseInput;
};


export type MutationRemoveQuestionGroupsFromInterviewTemplateArgs = {
  input: RemoveQuestionGroupsFromInterviewTemplateInput;
};


export type MutationRemoveQuestionsFromQuestionGroupArgs = {
  input: RemoveQuestionsFromQuestionGroupInput;
};


export type MutationRemoveTemplateFromInterviewArgs = {
  input: RemoveTemplateFromInterviewInput;
};


export type MutationRemoveTemplateFromProjectArgs = {
  input: RemoveTemplateFromProjectInput;
};


export type MutationRemoveTemplateFromQuestionGroupArgs = {
  input: RemoveTemplateFromQuestionGroupInput;
};


export type MutationSetAnswersOnInterviewArgs = {
  input: SetAnswersOnInterviewInput;
};


export type MutationSetAnswersOnQuestionArgs = {
  input: SetAnswersOnQuestionInput;
};


export type MutationSetCoordinatorsOnProjectArgs = {
  input: SetCoordinatorsOnProjectInput;
};


export type MutationSetCreatedProjectsOnUserArgs = {
  input: SetCreatedProjectsOnUserInput;
};


export type MutationSetDependenciesOnQuestionArgs = {
  input: SetDependenciesOnQuestionInput;
};


export type MutationSetDependencyOnQuestionDependencyArgs = {
  input: SetDependencyOnQuestionDependencyInput;
};


export type MutationSetDependentOnQuestionDependencyArgs = {
  input: SetDependentOnQuestionDependencyInput;
};


export type MutationSetDependentsOnQuestionArgs = {
  input: SetDependentsOnQuestionInput;
};


export type MutationSetEnrolledProjectsOnUserArgs = {
  input: SetEnrolledProjectsOnUserInput;
};


export type MutationSetGroupOnQuestionArgs = {
  input: SetGroupOnQuestionInput;
};


export type MutationSetInterviewOnResponseArgs = {
  input: SetInterviewOnResponseInput;
};


export type MutationSetInterviewerOnInterviewArgs = {
  input: SetInterviewerOnInterviewInput;
};


export type MutationSetInterviewerOnResponseArgs = {
  input: SetInterviewerOnResponseInput;
};


export type MutationSetInterviewersOnProjectArgs = {
  input: SetInterviewersOnProjectInput;
};


export type MutationSetProjectOnInterviewArgs = {
  input: SetProjectOnInterviewInput;
};


export type MutationSetProjectOnInterviewTemplateArgs = {
  input: SetProjectOnInterviewTemplateInput;
};


export type MutationSetProjectsOnUserArgs = {
  input: SetProjectsOnUserInput;
};


export type MutationSetQuestionGroupsOnInterviewTemplateArgs = {
  input: SetQuestionGroupsOnInterviewTemplateInput;
};


export type MutationSetQuestionOnResponseArgs = {
  input: SetQuestionOnResponseInput;
};


export type MutationSetQuestionsOnQuestionGroupArgs = {
  input: SetQuestionsOnQuestionGroupInput;
};


export type MutationSetTemplateOnInterviewArgs = {
  input: SetTemplateOnInterviewInput;
};


export type MutationSetTemplateOnProjectArgs = {
  input: SetTemplateOnProjectInput;
};


export type MutationSetTemplateOnQuestionGroupArgs = {
  input: SetTemplateOnQuestionGroupInput;
};


export type MutationUpdateManyInterviewTemplatesArgs = {
  input: UpdateManyInterviewTemplatesInput;
};


export type MutationUpdateManyInterviewsArgs = {
  input: UpdateManyInterviewsInput;
};


export type MutationUpdateManyProjectsArgs = {
  input: UpdateManyProjectsInput;
};


export type MutationUpdateManyQuestionDependenciesArgs = {
  input: UpdateManyQuestionDependenciesInput;
};


export type MutationUpdateManyQuestionGroupsArgs = {
  input: UpdateManyQuestionGroupsInput;
};


export type MutationUpdateManyQuestionsArgs = {
  input: UpdateManyQuestionsInput;
};


export type MutationUpdateManyResponsesArgs = {
  input: UpdateManyResponsesInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneInterviewArgs = {
  input: UpdateOneInterviewInput;
};


export type MutationUpdateOneInterviewTemplateArgs = {
  input: UpdateOneInterviewTemplateInput;
};


export type MutationUpdateOneProjectArgs = {
  input: UpdateOneProjectInput;
};


export type MutationUpdateOneQuestionArgs = {
  input: UpdateOneQuestionInput;
};


export type MutationUpdateOneQuestionDependencyArgs = {
  input: UpdateOneQuestionDependencyInput;
};


export type MutationUpdateOneQuestionGroupArgs = {
  input: UpdateOneQuestionGroupInput;
};


export type MutationUpdateOneResponseArgs = {
  input: UpdateOneResponseInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  coordinators?: Maybe<Array<User>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  generalDescription?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interviewerOrientations?: Maybe<Scalars['String']>;
  interviewers?: Maybe<ProjectInterviewersConnection>;
  name?: Maybe<Scalars['String']>;
  template?: Maybe<InterviewTemplate>;
  terms?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProjectCoordinatorsArgs = {
  filter?: UserFilter;
  sorting?: Array<UserSort>;
};


export type ProjectInterviewersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type ProjectAggregateGroupBy = {
  __typename?: 'ProjectAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  generalDescription?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Array of nodes. */
  nodes: Array<Project>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  generalDescription?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interviewerOrientations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProjectDeleteFilter = {
  and?: InputMaybe<Array<ProjectDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDeleteFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProjectDeleteResponse = {
  __typename?: 'ProjectDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  generalDescription?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectFilter = {
  and?: InputMaybe<Array<ProjectFilter>>;
  coordinators?: InputMaybe<ProjectFilterUserFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  interviewers?: InputMaybe<ProjectFilterUserFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilter>>;
  template?: InputMaybe<ProjectFilterInterviewTemplateFilter>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProjectFilterInterviewTemplateFilter = {
  and?: InputMaybe<Array<ProjectFilterInterviewTemplateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilterInterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type ProjectFilterUserFilter = {
  and?: InputMaybe<Array<ProjectFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProjectInterviewersConnection = {
  __typename?: 'ProjectInterviewersConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  generalDescription?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  generalDescription?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectSortFields {
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  DeletedAt = 'deletedAt',
  GeneralDescription = 'generalDescription',
  Id = 'id',
  InterviewerOrientations = 'interviewerOrientations',
  Name = 'name',
  Terms = 'terms',
  UpdatedAt = 'updatedAt'
}

export type ProjectUpdateFilter = {
  and?: InputMaybe<Array<ProjectUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectUpdateFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  interview?: Maybe<Interview>;
  interviewTemplate?: Maybe<InterviewTemplate>;
  interviewTemplates: InterviewTemplateConnection;
  interviews: InterviewConnection;
  isTokenValid: TokenValidType;
  me: User;
  project?: Maybe<Project>;
  projects: ProjectConnection;
  question?: Maybe<Question>;
  questionDependencies: QuestionDependencyConnection;
  questionDependency?: Maybe<QuestionDependency>;
  questionGroup?: Maybe<QuestionGroup>;
  questionGroups: QuestionGroupConnection;
  questions: QuestionConnection;
  response?: Maybe<Response>;
  responseAggregate: Array<ResponseAggregateResponse>;
  responses: ResponseConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryInterviewArgs = {
  id: Scalars['ID'];
};


export type QueryInterviewTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryInterviewTemplatesArgs = {
  filter?: InterviewTemplateFilter;
  paging?: OffsetPaging;
  sorting?: Array<InterviewTemplateSort>;
};


export type QueryInterviewsArgs = {
  filter?: InterviewFilter;
  paging?: OffsetPaging;
  sorting?: Array<InterviewSort>;
};


export type QueryIsTokenValidArgs = {
  token: Scalars['String'];
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  filter?: ProjectFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProjectSort>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionDependenciesArgs = {
  filter?: QuestionDependencyFilter;
  paging?: OffsetPaging;
  sorting?: Array<QuestionDependencySort>;
};


export type QueryQuestionDependencyArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionGroupsArgs = {
  filter?: QuestionGroupFilter;
  paging?: OffsetPaging;
  sorting?: Array<QuestionGroupSort>;
};


export type QueryQuestionsArgs = {
  filter?: QuestionFilter;
  paging?: OffsetPaging;
  sorting?: Array<QuestionSort>;
};


export type QueryResponseArgs = {
  id: Scalars['ID'];
};


export type QueryResponseAggregateArgs = {
  filter?: InputMaybe<ResponseAggregateFilter>;
};


export type QueryResponsesArgs = {
  filter?: ResponseFilter;
  paging?: OffsetPaging;
  sorting?: Array<ResponseSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Response>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependencies?: Maybe<Array<QuestionDependency>>;
  dependents?: Maybe<Array<QuestionDependency>>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<QuestionGroup>;
  groupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  index?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Scalars['String']>>;
  placeholder?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: QuestionTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type QuestionAnswersArgs = {
  filter?: ResponseFilter;
  sorting?: Array<ResponseSort>;
};


export type QuestionDependenciesArgs = {
  filter?: QuestionDependencyFilter;
  sorting?: Array<QuestionDependencySort>;
};


export type QuestionDependentsArgs = {
  filter?: QuestionDependencyFilter;
  sorting?: Array<QuestionDependencySort>;
};

export type QuestionAggregateGroupBy = {
  __typename?: 'QuestionAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionAvgAggregate = {
  __typename?: 'QuestionAvgAggregate';
  index?: Maybe<Scalars['Float']>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  /** Array of nodes. */
  nodes: Array<Question>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type QuestionDeleteFilter = {
  and?: InputMaybe<Array<QuestionDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionDeleteFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionDeleteResponse = {
  __typename?: 'QuestionDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<Scalars['String']>>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionDependency = {
  __typename?: 'QuestionDependency';
  action: QuestionDependencyActionEnum;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependency: Question;
  dependencyId: Scalars['String'];
  dependent: Question;
  dependentId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  referenceValue: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum QuestionDependencyActionEnum {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  Includes = 'INCLUDES',
  Lower = 'LOWER'
}

export type QuestionDependencyActionEnumFilterComparison = {
  eq?: InputMaybe<QuestionDependencyActionEnum>;
  gt?: InputMaybe<QuestionDependencyActionEnum>;
  gte?: InputMaybe<QuestionDependencyActionEnum>;
  iLike?: InputMaybe<QuestionDependencyActionEnum>;
  in?: InputMaybe<Array<QuestionDependencyActionEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<QuestionDependencyActionEnum>;
  lt?: InputMaybe<QuestionDependencyActionEnum>;
  lte?: InputMaybe<QuestionDependencyActionEnum>;
  neq?: InputMaybe<QuestionDependencyActionEnum>;
  notILike?: InputMaybe<QuestionDependencyActionEnum>;
  notIn?: InputMaybe<Array<QuestionDependencyActionEnum>>;
  notLike?: InputMaybe<QuestionDependencyActionEnum>;
};

export type QuestionDependencyAggregateGroupBy = {
  __typename?: 'QuestionDependencyAggregateGroupBy';
  action?: Maybe<QuestionDependencyActionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionDependencyConnection = {
  __typename?: 'QuestionDependencyConnection';
  /** Array of nodes. */
  nodes: Array<QuestionDependency>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type QuestionDependencyCountAggregate = {
  __typename?: 'QuestionDependencyCountAggregate';
  action?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  dependencyId?: Maybe<Scalars['Int']>;
  dependentId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  referenceValue?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type QuestionDependencyDeleteFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionDependencyDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyDeleteFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionDependencyDeleteResponse = {
  __typename?: 'QuestionDependencyDeleteResponse';
  action?: Maybe<QuestionDependencyActionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionDependencyFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionDependencyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dependency?: InputMaybe<QuestionDependencyFilterQuestionFilter>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependent?: InputMaybe<QuestionDependencyFilterQuestionFilter>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionDependencyFilterQuestionFilter = {
  and?: InputMaybe<Array<QuestionDependencyFilterQuestionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionDependencyMaxAggregate = {
  __typename?: 'QuestionDependencyMaxAggregate';
  action?: Maybe<QuestionDependencyActionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionDependencyMinAggregate = {
  __typename?: 'QuestionDependencyMinAggregate';
  action?: Maybe<QuestionDependencyActionEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionDependencySort = {
  direction: SortDirection;
  field: QuestionDependencySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionDependencySortFields {
  Action = 'action',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DependencyId = 'dependencyId',
  DependentId = 'dependentId',
  Description = 'description',
  Id = 'id',
  ReferenceValue = 'referenceValue',
  UpdatedAt = 'updatedAt'
}

export type QuestionDependencyUpdateFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionDependencyUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyUpdateFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionFilter = {
  and?: InputMaybe<Array<QuestionFilter>>;
  answers?: InputMaybe<QuestionFilterResponseFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dependencies?: InputMaybe<QuestionFilterQuestionDependencyFilter>;
  dependents?: InputMaybe<QuestionFilterQuestionDependencyFilter>;
  description?: InputMaybe<StringFieldComparison>;
  group?: InputMaybe<QuestionFilterQuestionGroupFilter>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionFilterQuestionDependencyFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionFilterQuestionDependencyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterQuestionDependencyFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionFilterQuestionGroupFilter = {
  and?: InputMaybe<Array<QuestionFilterQuestionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterQuestionGroupFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionFilterResponseFilter = {
  and?: InputMaybe<Array<QuestionFilterResponseFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterResponseFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionGroup = {
  __typename?: 'QuestionGroup';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<Array<Question>>;
  template: InterviewTemplate;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type QuestionGroupQuestionsArgs = {
  filter?: QuestionFilter;
  sorting?: Array<QuestionSort>;
};

export type QuestionGroupAggregateGroupBy = {
  __typename?: 'QuestionGroupAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionGroupConnection = {
  __typename?: 'QuestionGroupConnection';
  /** Array of nodes. */
  nodes: Array<QuestionGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type QuestionGroupCountAggregate = {
  __typename?: 'QuestionGroupCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type QuestionGroupDeleteFilter = {
  and?: InputMaybe<Array<QuestionGroupDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupDeleteFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionGroupDeleteResponse = {
  __typename?: 'QuestionGroupDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionGroupFilter = {
  and?: InputMaybe<Array<QuestionGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilter>>;
  questions?: InputMaybe<QuestionGroupFilterQuestionFilter>;
  template?: InputMaybe<QuestionGroupFilterInterviewTemplateFilter>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionGroupFilterInterviewTemplateFilter = {
  and?: InputMaybe<Array<QuestionGroupFilterInterviewTemplateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilterInterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type QuestionGroupFilterQuestionFilter = {
  and?: InputMaybe<Array<QuestionGroupFilterQuestionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionGroupMaxAggregate = {
  __typename?: 'QuestionGroupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionGroupMinAggregate = {
  __typename?: 'QuestionGroupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionGroupSort = {
  direction: SortDirection;
  field: QuestionGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionGroupSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  TemplateId = 'templateId',
  UpdatedAt = 'updatedAt'
}

export type QuestionGroupUpdateFilter = {
  and?: InputMaybe<Array<QuestionGroupUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupUpdateFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionSort = {
  direction: SortDirection;
  field: QuestionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  GroupId = 'groupId',
  Id = 'id',
  Index = 'index',
  Placeholder = 'placeholder',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type QuestionSumAggregate = {
  __typename?: 'QuestionSumAggregate';
  index?: Maybe<Scalars['Float']>;
};

export enum QuestionTypeEnum {
  MultiSelect = 'MULTI_SELECT',
  Number = 'NUMBER',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA'
}

export type QuestionTypeEnumFilterComparison = {
  eq?: InputMaybe<QuestionTypeEnum>;
  gt?: InputMaybe<QuestionTypeEnum>;
  gte?: InputMaybe<QuestionTypeEnum>;
  iLike?: InputMaybe<QuestionTypeEnum>;
  in?: InputMaybe<Array<QuestionTypeEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<QuestionTypeEnum>;
  lt?: InputMaybe<QuestionTypeEnum>;
  lte?: InputMaybe<QuestionTypeEnum>;
  neq?: InputMaybe<QuestionTypeEnum>;
  notILike?: InputMaybe<QuestionTypeEnum>;
  notIn?: InputMaybe<Array<QuestionTypeEnum>>;
  notLike?: InputMaybe<QuestionTypeEnum>;
};

export type QuestionUpdateFilter = {
  and?: InputMaybe<Array<QuestionUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionUpdateFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RemoveAnswersFromInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveAnswersFromQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCoordinatorsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCreatedProjectsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveDependenciesFromQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveDependencyFromQuestionDependencyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveDependentFromQuestionDependencyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveDependentsFromQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveEnrolledProjectsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveGroupFromQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveInterviewFromResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveInterviewerFromInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveInterviewerFromResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveInterviewersFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectFromInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveProjectFromInterviewTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveProjectsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveQuestionFromResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveQuestionGroupsFromInterviewTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveQuestionsFromQuestionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveTemplateFromInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveTemplateFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveTemplateFromQuestionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type Response = {
  __typename?: 'Response';
  answer: Array<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  interview: Interview;
  interviewId: Scalars['String'];
  interviewer: User;
  interviewerId: Scalars['String'];
  question: Question;
  questionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResponseAggregateFilter = {
  and?: InputMaybe<Array<ResponseAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseAggregateFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseAggregateGroupBy = {
  __typename?: 'ResponseAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResponseAggregateResponse = {
  __typename?: 'ResponseAggregateResponse';
  count?: Maybe<ResponseCountAggregate>;
  groupBy?: Maybe<ResponseAggregateGroupBy>;
  max?: Maybe<ResponseMaxAggregate>;
  min?: Maybe<ResponseMinAggregate>;
};

export type ResponseConnection = {
  __typename?: 'ResponseConnection';
  /** Array of nodes. */
  nodes: Array<Response>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ResponseCountAggregate = {
  __typename?: 'ResponseCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interviewId?: Maybe<Scalars['Int']>;
  interviewerId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ResponseDeleteFilter = {
  and?: InputMaybe<Array<ResponseDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseDeleteFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseDeleteResponse = {
  __typename?: 'ResponseDeleteResponse';
  answer?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResponseFilter = {
  and?: InputMaybe<Array<ResponseFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interview?: InputMaybe<ResponseFilterInterviewFilter>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewer?: InputMaybe<ResponseFilterUserFilter>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilter>>;
  question?: InputMaybe<ResponseFilterQuestionFilter>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseFilterInterviewFilter = {
  and?: InputMaybe<Array<ResponseFilterInterviewFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterInterviewFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseFilterQuestionFilter = {
  and?: InputMaybe<Array<ResponseFilterQuestionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  groupId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseFilterUserFilter = {
  and?: InputMaybe<Array<ResponseFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ResponseMaxAggregate = {
  __typename?: 'ResponseMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResponseMinAggregate = {
  __typename?: 'ResponseMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResponseSort = {
  direction: SortDirection;
  field: ResponseSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ResponseSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  InterviewId = 'interviewId',
  InterviewerId = 'interviewerId',
  QuestionId = 'questionId',
  UpdatedAt = 'updatedAt'
}

export type ResponseUpdateFilter = {
  and?: InputMaybe<Array<ResponseUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseUpdateFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SetAnswersOnInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetAnswersOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCoordinatorsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCreatedProjectsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetDependenciesOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetDependencyOnQuestionDependencyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetDependentOnQuestionDependencyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetDependentsOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEnrolledProjectsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetGroupOnQuestionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetInterviewOnResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetInterviewerOnInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetInterviewerOnResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetInterviewersOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectOnInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetProjectOnInterviewTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetProjectsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetQuestionGroupsOnInterviewTemplateInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetQuestionOnResponseInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetQuestionsOnQuestionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetTemplateOnInterviewInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetTemplateOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetTemplateOnQuestionGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type TokenValidType = {
  __typename?: 'TokenValidType';
  valid: Scalars['Boolean'];
};

export type UpdateInterviewInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
};

export type UpdateInterviewTemplateInput = {
  id?: InputMaybe<Scalars['ID']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  isFinished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Float']>;
};

export type UpdateManyInterviewTemplatesInput = {
  /** Filter used to find fields to update */
  filter: InterviewTemplateUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateInterviewTemplateInput;
};

export type UpdateManyInterviewsInput = {
  /** Filter used to find fields to update */
  filter: InterviewUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateInterviewInput;
};

export type UpdateManyProjectsInput = {
  /** Filter used to find fields to update */
  filter: ProjectUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectInput;
};

export type UpdateManyQuestionDependenciesInput = {
  /** Filter used to find fields to update */
  filter: QuestionDependencyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQuestionDependencyInput;
};

export type UpdateManyQuestionGroupsInput = {
  /** Filter used to find fields to update */
  filter: QuestionGroupUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQuestionGroupInput;
};

export type UpdateManyQuestionsInput = {
  /** Filter used to find fields to update */
  filter: QuestionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQuestionInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyResponsesInput = {
  /** Filter used to find fields to update */
  filter: ResponseUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateResponseInput;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateOneInterviewInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateInterviewInput;
};

export type UpdateOneInterviewTemplateInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateInterviewTemplateInput;
};

export type UpdateOneProjectInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProjectInput;
};

export type UpdateOneQuestionDependencyInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateQuestionDependencyInput;
};

export type UpdateOneQuestionGroupInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateQuestionGroupInput;
};

export type UpdateOneQuestionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateQuestionInput;
};

export type UpdateOneResponseInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateResponseInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateProjectInput = {
  coordinators?: InputMaybe<Array<UpdateUserInput>>;
  generalDescription?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  interviewerOrientations?: InputMaybe<Scalars['String']>;
  interviewers?: InputMaybe<Array<UpdateUserInput>>;
  name?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionDependencyInput = {
  action?: InputMaybe<QuestionDependencyActionEnum>;
  dependencyId?: InputMaybe<Scalars['String']>;
  dependentId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  referenceValue?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionInput = {
  description?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  index?: InputMaybe<Scalars['Float']>;
  options?: InputMaybe<Array<Scalars['String']>>;
  placeholder?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<QuestionTypeEnum>;
};

export type UpdateResponseInput = {
  answer?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  interviewId?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdProjects?: Maybe<Array<Project>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  enrolledProjects?: Maybe<Array<Project>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Project>>;
  role: UserRoleEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UserCreatedProjectsArgs = {
  filter?: ProjectFilter;
  sorting?: Array<ProjectSort>;
};


export type UserEnrolledProjectsArgs = {
  filter?: ProjectFilter;
  sorting?: Array<ProjectSort>;
};


export type UserProjectsArgs = {
  filter?: ProjectFilter;
  sorting?: Array<ProjectSort>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdProjects?: InputMaybe<UserFilterProjectFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  enrolledProjects?: InputMaybe<UserFilterProjectFilter>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  projects?: InputMaybe<UserFilterProjectFilter>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserFilterProjectFilter = {
  and?: InputMaybe<Array<UserFilterProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  creatorId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterProjectFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  Coordinator = 'COORDINATOR',
  Interviewer = 'INTERVIEWER',
  Visitor = 'VISITOR'
}

export type UserRoleEnumFilterComparison = {
  eq?: InputMaybe<UserRoleEnum>;
  gt?: InputMaybe<UserRoleEnum>;
  gte?: InputMaybe<UserRoleEnum>;
  iLike?: InputMaybe<UserRoleEnum>;
  in?: InputMaybe<Array<UserRoleEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<UserRoleEnum>;
  lt?: InputMaybe<UserRoleEnum>;
  lte?: InputMaybe<UserRoleEnum>;
  neq?: InputMaybe<UserRoleEnum>;
  notILike?: InputMaybe<UserRoleEnum>;
  notIn?: InputMaybe<Array<UserRoleEnum>>;
  notLike?: InputMaybe<UserRoleEnum>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type GetInterviewsQueryVariables = Exact<{
  filter?: InputMaybe<InterviewFilter>;
  sorting?: InputMaybe<Array<InterviewSort> | InterviewSort>;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetInterviewsQuery = { __typename?: 'Query', interviews: { __typename?: 'InterviewConnection', nodes: Array<{ __typename?: 'Interview', id: string, name: string }>, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null } } };

export type CreateOneProjectMutationVariables = Exact<{
  input: CreateOneProjectInput;
}>;


export type CreateOneProjectMutation = { __typename?: 'Mutation', createOneProject: { __typename?: 'Project', id: string } };

export type GetProjectsQueryVariables = Exact<{
  filter?: InputMaybe<ProjectFilter>;
  sorting?: InputMaybe<Array<ProjectSort> | ProjectSort>;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectConnection', nodes: Array<{ __typename?: 'Project', id: string, name?: string | null }>, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null } } };

export type GetUsersToProjectsQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetUsersToProjectsQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', nodes: Array<{ __typename?: 'User', id: string, name?: string | null, role: UserRoleEnum }>, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null } } };

export type TemplateFieldsFragment = { __typename?: 'InterviewTemplate', id: string, name: string, version?: number | null, isFinished: boolean, isAvailable: boolean, projectId?: string | null, questionGroups?: Array<{ __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null }> | null };

export type GroupFieldsFragment = { __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null };

export type QuestionFieldsFragment = { __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null };

export type CreateOneTemplateMutationVariables = Exact<{
  input: CreateOneInterviewTemplateInput;
}>;


export type CreateOneTemplateMutation = { __typename?: 'Mutation', createOneInterviewTemplate: { __typename?: 'InterviewTemplate', id: string, name: string, version?: number | null, isFinished: boolean, isAvailable: boolean, projectId?: string | null, questionGroups?: Array<{ __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null }> | null } };

export type UpdateOneTemplateMutationVariables = Exact<{
  input: UpdateOneInterviewTemplateInput;
}>;


export type UpdateOneTemplateMutation = { __typename?: 'Mutation', updateOneInterviewTemplate: { __typename?: 'InterviewTemplate', id: string, name: string, version?: number | null, isFinished: boolean, isAvailable: boolean, projectId?: string | null, questionGroups?: Array<{ __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null }> | null } };

export type CreateOneQuestionGroupMutationVariables = Exact<{
  input: CreateOneQuestionGroupInput;
}>;


export type CreateOneQuestionGroupMutation = { __typename?: 'Mutation', createOneQuestionGroup: { __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null } };

export type UpdateOneQuestionGroupMutationVariables = Exact<{
  input: UpdateOneQuestionGroupInput;
}>;


export type UpdateOneQuestionGroupMutation = { __typename?: 'Mutation', updateOneQuestionGroup: { __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null } };

export type CreateOneQuestionMutationVariables = Exact<{
  input: CreateOneQuestionInput;
}>;


export type CreateOneQuestionMutation = { __typename?: 'Mutation', createOneQuestion: { __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null } };

export type UpdateOneQuestionMutationVariables = Exact<{
  input: UpdateOneQuestionInput;
}>;


export type UpdateOneQuestionMutation = { __typename?: 'Mutation', updateOneQuestion: { __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null } };

export type GetTemplatesQueryVariables = Exact<{
  filter?: InputMaybe<InterviewTemplateFilter>;
  sorting?: InputMaybe<Array<InterviewTemplateSort> | InterviewTemplateSort>;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GetTemplatesQuery = { __typename?: 'Query', interviewTemplates: { __typename?: 'InterviewTemplateConnection', nodes: Array<{ __typename?: 'InterviewTemplate', id: string, name: string }>, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null } } };

export type GetMyCreatedProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCreatedProjectsQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, createdProjects?: Array<{ __typename?: 'Project', id: string, name?: string | null, template?: { __typename?: 'InterviewTemplate', id: string } | null }> | null } };

export type GetTemplateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTemplateQuery = { __typename?: 'Query', interviewTemplate?: { __typename?: 'InterviewTemplate', id: string, name: string, version?: number | null, isFinished: boolean, isAvailable: boolean, projectId?: string | null, project?: { __typename?: 'Project', id: string, name?: string | null } | null, questionGroups?: Array<{ __typename?: 'QuestionGroup', id: string, name: string, description?: string | null, templateId?: string | null, questions?: Array<{ __typename?: 'Question', id: string, index?: number | null, title: string, description?: string | null, placeholder?: string | null, type: QuestionTypeEnum, options?: Array<string> | null, groupId?: string | null }> | null }> | null } | null };

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthType', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, email?: string | null, role: UserRoleEnum } };

export const QuestionFieldsFragmentDoc = gql`
    fragment QuestionFields on Question {
  id
  index
  title
  description
  placeholder
  type
  options
  groupId
}
    `;
export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on QuestionGroup {
  id
  name
  description
  templateId
  questions {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;
export const TemplateFieldsFragmentDoc = gql`
    fragment TemplateFields on InterviewTemplate {
  id
  name
  version
  isFinished
  isAvailable
  projectId
  questionGroups {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export const GetInterviewsDocument = gql`
    query getInterviews($filter: InterviewFilter, $sorting: [InterviewSort!], $paging: OffsetPaging) {
  interviews(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useGetInterviewsQuery__
 *
 * To run a query within a React component, call `useGetInterviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInterviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInterviewsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetInterviewsQuery(baseOptions?: Apollo.QueryHookOptions<GetInterviewsQuery, GetInterviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInterviewsQuery, GetInterviewsQueryVariables>(GetInterviewsDocument, options);
      }
export function useGetInterviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInterviewsQuery, GetInterviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInterviewsQuery, GetInterviewsQueryVariables>(GetInterviewsDocument, options);
        }
export type GetInterviewsQueryHookResult = ReturnType<typeof useGetInterviewsQuery>;
export type GetInterviewsLazyQueryHookResult = ReturnType<typeof useGetInterviewsLazyQuery>;
export type GetInterviewsQueryResult = Apollo.QueryResult<GetInterviewsQuery, GetInterviewsQueryVariables>;
export const CreateOneProjectDocument = gql`
    mutation createOneProject($input: CreateOneProjectInput!) {
  createOneProject(input: $input) {
    id
  }
}
    `;
export type CreateOneProjectMutationFn = Apollo.MutationFunction<CreateOneProjectMutation, CreateOneProjectMutationVariables>;

/**
 * __useCreateOneProjectMutation__
 *
 * To run a mutation, you first call `useCreateOneProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProjectMutation, { data, loading, error }] = useCreateOneProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneProjectMutation, CreateOneProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneProjectMutation, CreateOneProjectMutationVariables>(CreateOneProjectDocument, options);
      }
export type CreateOneProjectMutationHookResult = ReturnType<typeof useCreateOneProjectMutation>;
export type CreateOneProjectMutationResult = Apollo.MutationResult<CreateOneProjectMutation>;
export type CreateOneProjectMutationOptions = Apollo.BaseMutationOptions<CreateOneProjectMutation, CreateOneProjectMutationVariables>;
export const GetProjectsDocument = gql`
    query getProjects($filter: ProjectFilter, $sorting: [ProjectSort!], $paging: OffsetPaging) {
  projects(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetUsersToProjectsDocument = gql`
    query getUsersToProjects($filter: UserFilter, $paging: OffsetPaging) {
  users(filter: $filter, paging: $paging) {
    nodes {
      id
      name
      role
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useGetUsersToProjectsQuery__
 *
 * To run a query within a React component, call `useGetUsersToProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersToProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersToProjectsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetUsersToProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersToProjectsQuery, GetUsersToProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersToProjectsQuery, GetUsersToProjectsQueryVariables>(GetUsersToProjectsDocument, options);
      }
export function useGetUsersToProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersToProjectsQuery, GetUsersToProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersToProjectsQuery, GetUsersToProjectsQueryVariables>(GetUsersToProjectsDocument, options);
        }
export type GetUsersToProjectsQueryHookResult = ReturnType<typeof useGetUsersToProjectsQuery>;
export type GetUsersToProjectsLazyQueryHookResult = ReturnType<typeof useGetUsersToProjectsLazyQuery>;
export type GetUsersToProjectsQueryResult = Apollo.QueryResult<GetUsersToProjectsQuery, GetUsersToProjectsQueryVariables>;
export const CreateOneTemplateDocument = gql`
    mutation createOneTemplate($input: CreateOneInterviewTemplateInput!) {
  createOneInterviewTemplate(input: $input) {
    ...TemplateFields
  }
}
    ${TemplateFieldsFragmentDoc}`;
export type CreateOneTemplateMutationFn = Apollo.MutationFunction<CreateOneTemplateMutation, CreateOneTemplateMutationVariables>;

/**
 * __useCreateOneTemplateMutation__
 *
 * To run a mutation, you first call `useCreateOneTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTemplateMutation, { data, loading, error }] = useCreateOneTemplateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTemplateMutation, CreateOneTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTemplateMutation, CreateOneTemplateMutationVariables>(CreateOneTemplateDocument, options);
      }
export type CreateOneTemplateMutationHookResult = ReturnType<typeof useCreateOneTemplateMutation>;
export type CreateOneTemplateMutationResult = Apollo.MutationResult<CreateOneTemplateMutation>;
export type CreateOneTemplateMutationOptions = Apollo.BaseMutationOptions<CreateOneTemplateMutation, CreateOneTemplateMutationVariables>;
export const UpdateOneTemplateDocument = gql`
    mutation updateOneTemplate($input: UpdateOneInterviewTemplateInput!) {
  updateOneInterviewTemplate(input: $input) {
    ...TemplateFields
  }
}
    ${TemplateFieldsFragmentDoc}`;
export type UpdateOneTemplateMutationFn = Apollo.MutationFunction<UpdateOneTemplateMutation, UpdateOneTemplateMutationVariables>;

/**
 * __useUpdateOneTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateOneTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTemplateMutation, { data, loading, error }] = useUpdateOneTemplateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTemplateMutation, UpdateOneTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneTemplateMutation, UpdateOneTemplateMutationVariables>(UpdateOneTemplateDocument, options);
      }
export type UpdateOneTemplateMutationHookResult = ReturnType<typeof useUpdateOneTemplateMutation>;
export type UpdateOneTemplateMutationResult = Apollo.MutationResult<UpdateOneTemplateMutation>;
export type UpdateOneTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateOneTemplateMutation, UpdateOneTemplateMutationVariables>;
export const CreateOneQuestionGroupDocument = gql`
    mutation createOneQuestionGroup($input: CreateOneQuestionGroupInput!) {
  createOneQuestionGroup(input: $input) {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export type CreateOneQuestionGroupMutationFn = Apollo.MutationFunction<CreateOneQuestionGroupMutation, CreateOneQuestionGroupMutationVariables>;

/**
 * __useCreateOneQuestionGroupMutation__
 *
 * To run a mutation, you first call `useCreateOneQuestionGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneQuestionGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneQuestionGroupMutation, { data, loading, error }] = useCreateOneQuestionGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneQuestionGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneQuestionGroupMutation, CreateOneQuestionGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneQuestionGroupMutation, CreateOneQuestionGroupMutationVariables>(CreateOneQuestionGroupDocument, options);
      }
export type CreateOneQuestionGroupMutationHookResult = ReturnType<typeof useCreateOneQuestionGroupMutation>;
export type CreateOneQuestionGroupMutationResult = Apollo.MutationResult<CreateOneQuestionGroupMutation>;
export type CreateOneQuestionGroupMutationOptions = Apollo.BaseMutationOptions<CreateOneQuestionGroupMutation, CreateOneQuestionGroupMutationVariables>;
export const UpdateOneQuestionGroupDocument = gql`
    mutation updateOneQuestionGroup($input: UpdateOneQuestionGroupInput!) {
  updateOneQuestionGroup(input: $input) {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export type UpdateOneQuestionGroupMutationFn = Apollo.MutationFunction<UpdateOneQuestionGroupMutation, UpdateOneQuestionGroupMutationVariables>;

/**
 * __useUpdateOneQuestionGroupMutation__
 *
 * To run a mutation, you first call `useUpdateOneQuestionGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneQuestionGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneQuestionGroupMutation, { data, loading, error }] = useUpdateOneQuestionGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneQuestionGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneQuestionGroupMutation, UpdateOneQuestionGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneQuestionGroupMutation, UpdateOneQuestionGroupMutationVariables>(UpdateOneQuestionGroupDocument, options);
      }
export type UpdateOneQuestionGroupMutationHookResult = ReturnType<typeof useUpdateOneQuestionGroupMutation>;
export type UpdateOneQuestionGroupMutationResult = Apollo.MutationResult<UpdateOneQuestionGroupMutation>;
export type UpdateOneQuestionGroupMutationOptions = Apollo.BaseMutationOptions<UpdateOneQuestionGroupMutation, UpdateOneQuestionGroupMutationVariables>;
export const CreateOneQuestionDocument = gql`
    mutation createOneQuestion($input: CreateOneQuestionInput!) {
  createOneQuestion(input: $input) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;
export type CreateOneQuestionMutationFn = Apollo.MutationFunction<CreateOneQuestionMutation, CreateOneQuestionMutationVariables>;

/**
 * __useCreateOneQuestionMutation__
 *
 * To run a mutation, you first call `useCreateOneQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneQuestionMutation, { data, loading, error }] = useCreateOneQuestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneQuestionMutation, CreateOneQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneQuestionMutation, CreateOneQuestionMutationVariables>(CreateOneQuestionDocument, options);
      }
export type CreateOneQuestionMutationHookResult = ReturnType<typeof useCreateOneQuestionMutation>;
export type CreateOneQuestionMutationResult = Apollo.MutationResult<CreateOneQuestionMutation>;
export type CreateOneQuestionMutationOptions = Apollo.BaseMutationOptions<CreateOneQuestionMutation, CreateOneQuestionMutationVariables>;
export const UpdateOneQuestionDocument = gql`
    mutation updateOneQuestion($input: UpdateOneQuestionInput!) {
  updateOneQuestion(input: $input) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;
export type UpdateOneQuestionMutationFn = Apollo.MutationFunction<UpdateOneQuestionMutation, UpdateOneQuestionMutationVariables>;

/**
 * __useUpdateOneQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateOneQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneQuestionMutation, { data, loading, error }] = useUpdateOneQuestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneQuestionMutation, UpdateOneQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneQuestionMutation, UpdateOneQuestionMutationVariables>(UpdateOneQuestionDocument, options);
      }
export type UpdateOneQuestionMutationHookResult = ReturnType<typeof useUpdateOneQuestionMutation>;
export type UpdateOneQuestionMutationResult = Apollo.MutationResult<UpdateOneQuestionMutation>;
export type UpdateOneQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateOneQuestionMutation, UpdateOneQuestionMutationVariables>;
export const GetTemplatesDocument = gql`
    query getTemplates($filter: InterviewTemplateFilter, $sorting: [InterviewTemplateSort!], $paging: OffsetPaging) {
  interviewTemplates(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useGetTemplatesQuery__
 *
 * To run a query within a React component, call `useGetTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
      }
export function useGetTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
        }
export type GetTemplatesQueryHookResult = ReturnType<typeof useGetTemplatesQuery>;
export type GetTemplatesLazyQueryHookResult = ReturnType<typeof useGetTemplatesLazyQuery>;
export type GetTemplatesQueryResult = Apollo.QueryResult<GetTemplatesQuery, GetTemplatesQueryVariables>;
export const GetMyCreatedProjectsDocument = gql`
    query getMyCreatedProjects {
  me {
    id
    name
    createdProjects {
      id
      name
      template {
        id
      }
    }
  }
}
    `;

/**
 * __useGetMyCreatedProjectsQuery__
 *
 * To run a query within a React component, call `useGetMyCreatedProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyCreatedProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyCreatedProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyCreatedProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyCreatedProjectsQuery, GetMyCreatedProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyCreatedProjectsQuery, GetMyCreatedProjectsQueryVariables>(GetMyCreatedProjectsDocument, options);
      }
export function useGetMyCreatedProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyCreatedProjectsQuery, GetMyCreatedProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyCreatedProjectsQuery, GetMyCreatedProjectsQueryVariables>(GetMyCreatedProjectsDocument, options);
        }
export type GetMyCreatedProjectsQueryHookResult = ReturnType<typeof useGetMyCreatedProjectsQuery>;
export type GetMyCreatedProjectsLazyQueryHookResult = ReturnType<typeof useGetMyCreatedProjectsLazyQuery>;
export type GetMyCreatedProjectsQueryResult = Apollo.QueryResult<GetMyCreatedProjectsQuery, GetMyCreatedProjectsQueryVariables>;
export const GetTemplateDocument = gql`
    query getTemplate($id: ID!) {
  interviewTemplate(id: $id) {
    ...TemplateFields
    project {
      id
      name
    }
  }
}
    ${TemplateFieldsFragmentDoc}`;

/**
 * __useGetTemplateQuery__
 *
 * To run a query within a React component, call `useGetTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTemplateQuery(baseOptions: Apollo.QueryHookOptions<GetTemplateQuery, GetTemplateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplateQuery, GetTemplateQueryVariables>(GetTemplateDocument, options);
      }
export function useGetTemplateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplateQuery, GetTemplateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplateQuery, GetTemplateQueryVariables>(GetTemplateDocument, options);
        }
export type GetTemplateQueryHookResult = ReturnType<typeof useGetTemplateQuery>;
export type GetTemplateLazyQueryHookResult = ReturnType<typeof useGetTemplateLazyQuery>;
export type GetTemplateQueryResult = Apollo.QueryResult<GetTemplateQuery, GetTemplateQueryVariables>;
export const LoginDocument = gql`
    mutation login($data: AuthInput!) {
  login(data: $data) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;