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

export type AddInterviewersToProjectInput = {
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
  index: Scalars['Float'];
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
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
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
  interviewerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
};

export type InterviewDeleteFilter = {
  and?: InputMaybe<Array<InterviewDeleteFilter>>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewDeleteFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
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
  interviewer?: InputMaybe<InterviewFilterUserFilter>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilter>>;
  project?: InputMaybe<InterviewFilterProjectFilter>;
  projectId?: InputMaybe<StringFieldComparison>;
  template?: InputMaybe<InterviewFilterInterviewTemplateFilter>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type InterviewFilterInterviewResponseFilter = {
  and?: InputMaybe<Array<InterviewFilterInterviewResponseFilter>>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId: StringFieldComparison;
  or?: InputMaybe<Array<InterviewFilterInterviewResponseFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
};

export type InterviewFilterInterviewTemplateFilter = {
  and?: InputMaybe<Array<InterviewFilterInterviewTemplateFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterInterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewFilterProjectFilter = {
  and?: InputMaybe<Array<InterviewFilterProjectFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterProjectFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
};

export type InterviewFilterUserFilter = {
  and?: InputMaybe<Array<InterviewFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
};

export type InterviewMaxAggregate = {
  __typename?: 'InterviewMaxAggregate';
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
};

export type InterviewMinAggregate = {
  __typename?: 'InterviewMinAggregate';
  interviewerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
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
  InterviewerId = 'interviewerId',
  Name = 'name',
  ProjectId = 'projectId',
  TemplateId = 'templateId'
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
  projectId: Scalars['String'];
  questionGroups?: Maybe<Array<QuestionGroup>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version: Scalars['Float'];
};


export type InterviewTemplateQuestionGroupsArgs = {
  filter?: QuestionGroupFilter;
  sorting?: Array<QuestionGroupSort>;
};

export type InterviewTemplateAggregateGroupBy = {
  __typename?: 'InterviewTemplateAggregateGroupBy';
  creatorId?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  isFinished?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
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
  creatorId?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Int']>;
  isFinished?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type InterviewTemplateDeleteFilter = {
  and?: InputMaybe<Array<InterviewTemplateDeleteFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateDeleteFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
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
  creatorId?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  questionGroups?: InputMaybe<InterviewTemplateFilterQuestionGroupFilter>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewTemplateFilterQuestionGroupFilter = {
  and?: InputMaybe<Array<InterviewTemplateFilterQuestionGroupFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateFilterQuestionGroupFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type InterviewTemplateMaxAggregate = {
  __typename?: 'InterviewTemplateMaxAggregate';
  creatorId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateMinAggregate = {
  __typename?: 'InterviewTemplateMinAggregate';
  creatorId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateSort = {
  direction: SortDirection;
  field: InterviewTemplateSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InterviewTemplateSortFields {
  CreatorId = 'creatorId',
  IsAvailable = 'isAvailable',
  IsFinished = 'isFinished',
  Name = 'name',
  ProjectId = 'projectId',
  Version = 'version'
}

export type InterviewTemplateSumAggregate = {
  __typename?: 'InterviewTemplateSumAggregate';
  version?: Maybe<Scalars['Float']>;
};

export type InterviewTemplateUpdateFilter = {
  and?: InputMaybe<Array<InterviewTemplateUpdateFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewTemplateUpdateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type InterviewUpdateFilter = {
  and?: InputMaybe<Array<InterviewUpdateFilter>>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InterviewUpdateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnswersToQuestion: Question;
  addCoordinatorsToProject: Project;
  addDependenciesToQuestion: Question;
  addDependentsToQuestion: Question;
  addInterviewersToProject: Project;
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
  removeDependenciesFromQuestion: Question;
  removeDependencyFromQuestionDependency: QuestionDependency;
  removeDependentFromQuestionDependency: QuestionDependency;
  removeDependentsFromQuestion: Question;
  removeGroupFromQuestion: Question;
  removeInterviewFromResponse: Response;
  removeInterviewerFromInterview: Interview;
  removeInterviewerFromResponse: Response;
  removeInterviewersFromProject: Project;
  removeProjectFromInterview: Interview;
  removeQuestionFromResponse: Response;
  removeQuestionGroupsFromInterviewTemplate: InterviewTemplate;
  removeQuestionsFromQuestionGroup: QuestionGroup;
  removeTemplateFromInterview: Interview;
  removeTemplateFromQuestionGroup: QuestionGroup;
  setAnswersOnInterview: Interview;
  setAnswersOnQuestion: Question;
  setCoordinatorsOnProject: Project;
  setDependenciesOnQuestion: Question;
  setDependencyOnQuestionDependency: QuestionDependency;
  setDependentOnQuestionDependency: QuestionDependency;
  setDependentsOnQuestion: Question;
  setGroupOnQuestion: Question;
  setInterviewOnResponse: Response;
  setInterviewerOnInterview: Interview;
  setInterviewerOnResponse: Response;
  setInterviewersOnProject: Project;
  setProjectOnInterview: Interview;
  setQuestionGroupsOnInterviewTemplate: InterviewTemplate;
  setQuestionOnResponse: Response;
  setQuestionsOnQuestionGroup: QuestionGroup;
  setTemplateOnInterview: Interview;
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


export type MutationAddDependenciesToQuestionArgs = {
  input: AddDependenciesToQuestionInput;
};


export type MutationAddDependentsToQuestionArgs = {
  input: AddDependentsToQuestionInput;
};


export type MutationAddInterviewersToProjectArgs = {
  input: AddInterviewersToProjectInput;
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
  creatorId?: Maybe<Scalars['String']>;
  generalDescription?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
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
  creatorId?: Maybe<Scalars['Int']>;
  generalDescription?: Maybe<Scalars['Int']>;
  interviewerOrientations?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['Int']>;
};

export type ProjectDeleteFilter = {
  and?: InputMaybe<Array<ProjectDeleteFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDeleteFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
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
  creatorId?: InputMaybe<StringFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  interviewers?: InputMaybe<ProjectFilterUserFilter>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
};

export type ProjectFilterUserFilter = {
  and?: InputMaybe<Array<ProjectFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
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
  creatorId?: Maybe<Scalars['String']>;
  generalDescription?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  creatorId?: Maybe<Scalars['String']>;
  generalDescription?: Maybe<Scalars['String']>;
  interviewerOrientations?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
};

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectSortFields {
  CreatorId = 'creatorId',
  GeneralDescription = 'generalDescription',
  InterviewerOrientations = 'interviewerOrientations',
  Name = 'name',
  Terms = 'terms'
}

export type ProjectUpdateFilter = {
  and?: InputMaybe<Array<ProjectUpdateFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  generalDescription?: InputMaybe<StringFieldComparison>;
  interviewerOrientations?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectUpdateFilter>>;
  terms?: InputMaybe<StringFieldComparison>;
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
  id: Scalars['String'];
  index: Scalars['Float'];
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
  description?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
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
  description?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type QuestionDeleteFilter = {
  and?: InputMaybe<Array<QuestionDeleteFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionDeleteFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
};

export type QuestionDeleteResponse = {
  __typename?: 'QuestionDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
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
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
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
  dependencyId?: Maybe<Scalars['Int']>;
  dependentId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  referenceValue?: Maybe<Scalars['Int']>;
};

export type QuestionDependencyDeleteFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionDependencyDeleteFilter>>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyDeleteFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
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
  dependency?: InputMaybe<QuestionDependencyFilterQuestionFilter>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependent?: InputMaybe<QuestionDependencyFilterQuestionFilter>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
};

export type QuestionDependencyFilterQuestionFilter = {
  and?: InputMaybe<Array<QuestionDependencyFilterQuestionFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
};

export type QuestionDependencyMaxAggregate = {
  __typename?: 'QuestionDependencyMaxAggregate';
  action?: Maybe<QuestionDependencyActionEnum>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
};

export type QuestionDependencyMinAggregate = {
  __typename?: 'QuestionDependencyMinAggregate';
  action?: Maybe<QuestionDependencyActionEnum>;
  dependencyId?: Maybe<Scalars['String']>;
  dependentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  referenceValue?: Maybe<Scalars['String']>;
};

export type QuestionDependencySort = {
  direction: SortDirection;
  field: QuestionDependencySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionDependencySortFields {
  Action = 'action',
  DependencyId = 'dependencyId',
  DependentId = 'dependentId',
  Description = 'description',
  ReferenceValue = 'referenceValue'
}

export type QuestionDependencyUpdateFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionDependencyUpdateFilter>>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionDependencyUpdateFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
};

export type QuestionFilter = {
  and?: InputMaybe<Array<QuestionFilter>>;
  answers?: InputMaybe<QuestionFilterResponseFilter>;
  dependencies?: InputMaybe<QuestionFilterQuestionDependencyFilter>;
  dependents?: InputMaybe<QuestionFilterQuestionDependencyFilter>;
  description?: InputMaybe<StringFieldComparison>;
  group?: InputMaybe<QuestionFilterQuestionGroupFilter>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
};

export type QuestionFilterQuestionDependencyFilter = {
  action?: InputMaybe<QuestionDependencyActionEnumFilterComparison>;
  and?: InputMaybe<Array<QuestionFilterQuestionDependencyFilter>>;
  dependencyId?: InputMaybe<StringFieldComparison>;
  dependentId?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterQuestionDependencyFilter>>;
  referenceValue?: InputMaybe<StringFieldComparison>;
};

export type QuestionFilterQuestionGroupFilter = {
  and?: InputMaybe<Array<QuestionFilterQuestionGroupFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterQuestionGroupFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type QuestionFilterResponseFilter = {
  and?: InputMaybe<Array<QuestionFilterResponseFilter>>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionFilterResponseFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
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
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
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
  description?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  templateId?: Maybe<Scalars['Int']>;
};

export type QuestionGroupDeleteFilter = {
  and?: InputMaybe<Array<QuestionGroupDeleteFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupDeleteFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
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
  description?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilter>>;
  questions?: InputMaybe<QuestionGroupFilterQuestionFilter>;
  template?: InputMaybe<QuestionGroupFilterInterviewTemplateFilter>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type QuestionGroupFilterInterviewTemplateFilter = {
  and?: InputMaybe<Array<QuestionGroupFilterInterviewTemplateFilter>>;
  creatorId?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  isFinished?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilterInterviewTemplateFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  version?: InputMaybe<NumberFieldComparison>;
};

export type QuestionGroupFilterQuestionFilter = {
  and?: InputMaybe<Array<QuestionGroupFilterQuestionFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
};

export type QuestionGroupMaxAggregate = {
  __typename?: 'QuestionGroupMaxAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
};

export type QuestionGroupMinAggregate = {
  __typename?: 'QuestionGroupMinAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['String']>;
};

export type QuestionGroupSort = {
  direction: SortDirection;
  field: QuestionGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionGroupSortFields {
  Description = 'description',
  Name = 'name',
  TemplateId = 'templateId'
}

export type QuestionGroupUpdateFilter = {
  and?: InputMaybe<Array<QuestionGroupUpdateFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuestionGroupUpdateFilter>>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  description?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  description?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<QuestionTypeEnum>;
};

export type QuestionSort = {
  direction: SortDirection;
  field: QuestionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QuestionSortFields {
  Description = 'description',
  Index = 'index',
  Placeholder = 'placeholder',
  Title = 'title',
  Type = 'type'
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
  description?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QuestionUpdateFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
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
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseAggregateFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
};

export type ResponseAggregateGroupBy = {
  __typename?: 'ResponseAggregateGroupBy';
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
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
  interviewId?: Maybe<Scalars['Int']>;
  interviewerId?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type ResponseDeleteFilter = {
  and?: InputMaybe<Array<ResponseDeleteFilter>>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseDeleteFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
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
  interview?: InputMaybe<ResponseFilterInterviewFilter>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewer?: InputMaybe<ResponseFilterUserFilter>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilter>>;
  question?: InputMaybe<ResponseFilterQuestionFilter>;
  questionId?: InputMaybe<StringFieldComparison>;
};

export type ResponseFilterInterviewFilter = {
  and?: InputMaybe<Array<ResponseFilterInterviewFilter>>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterInterviewFilter>>;
  projectId?: InputMaybe<StringFieldComparison>;
  templateId?: InputMaybe<StringFieldComparison>;
};

export type ResponseFilterQuestionFilter = {
  and?: InputMaybe<Array<ResponseFilterQuestionFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  index?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterQuestionFilter>>;
  placeholder?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<QuestionTypeEnumFilterComparison>;
};

export type ResponseFilterUserFilter = {
  and?: InputMaybe<Array<ResponseFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseFilterUserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
};

export type ResponseMaxAggregate = {
  __typename?: 'ResponseMaxAggregate';
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
};

export type ResponseMinAggregate = {
  __typename?: 'ResponseMinAggregate';
  interviewId?: Maybe<Scalars['String']>;
  interviewerId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
};

export type ResponseSort = {
  direction: SortDirection;
  field: ResponseSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ResponseSortFields {
  InterviewId = 'interviewId',
  InterviewerId = 'interviewerId',
  QuestionId = 'questionId'
}

export type ResponseUpdateFilter = {
  and?: InputMaybe<Array<ResponseUpdateFilter>>;
  interviewId?: InputMaybe<StringFieldComparison>;
  interviewerId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResponseUpdateFilter>>;
  questionId?: InputMaybe<StringFieldComparison>;
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
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
};

export type UpdateInterviewTemplateInput = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
  referenceValue?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionInput = {
  description?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  index?: InputMaybe<Scalars['Float']>;
  options?: InputMaybe<Array<Scalars['String']>>;
  placeholder?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<QuestionTypeEnum>;
};

export type UpdateResponseInput = {
  answer?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  interviewId?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role: UserRoleEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
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
  email?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
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
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
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
  Email = 'email',
  Name = 'name',
  Role = 'role'
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  role?: InputMaybe<UserRoleEnumFilterComparison>;
};

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthType', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, email?: string | null, role: UserRoleEnum } };


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