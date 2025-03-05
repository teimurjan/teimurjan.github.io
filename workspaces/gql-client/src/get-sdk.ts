/* eslint-disable */
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageConference: Array<Conference>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoExperience: Array<Experience>;
  logoSkill: Array<Skill>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageConferenceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ConferenceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConferenceWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoExperienceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


/** Asset system model */
export type AssetLogoSkillArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  imageConference?: InputMaybe<ConferenceCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logoExperience?: InputMaybe<ExperienceCreateManyInlineInput>;
  logoSkill?: InputMaybe<SkillCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageConference_every?: InputMaybe<ConferenceWhereInput>;
  imageConference_none?: InputMaybe<ConferenceWhereInput>;
  imageConference_some?: InputMaybe<ConferenceWhereInput>;
  logoExperience_every?: InputMaybe<ExperienceWhereInput>;
  logoExperience_none?: InputMaybe<ExperienceWhereInput>;
  logoExperience_some?: InputMaybe<ExperienceWhereInput>;
  logoSkill_every?: InputMaybe<SkillWhereInput>;
  logoSkill_none?: InputMaybe<SkillWhereInput>;
  logoSkill_some?: InputMaybe<SkillWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  imageConference?: InputMaybe<ConferenceUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logoExperience?: InputMaybe<ExperienceUpdateManyInlineInput>;
  logoSkill?: InputMaybe<SkillUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageConference_every?: InputMaybe<ConferenceWhereInput>;
  imageConference_none?: InputMaybe<ConferenceWhereInput>;
  imageConference_some?: InputMaybe<ConferenceWhereInput>;
  logoExperience_every?: InputMaybe<ExperienceWhereInput>;
  logoExperience_none?: InputMaybe<ExperienceWhereInput>;
  logoExperience_some?: InputMaybe<ExperienceWhereInput>;
  logoSkill_every?: InputMaybe<SkillWhereInput>;
  logoSkill_none?: InputMaybe<SkillWhereInput>;
  logoSkill_some?: InputMaybe<SkillWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Bio = Entity & Node & {
  __typename?: 'Bio';
  about: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Bio>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  headline: Scalars['String']['output'];
  /** List of Bio versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BioCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BioDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BioHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BioPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BioScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BioUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BioConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BioWhereUniqueInput;
};

/** A connection to a list of items. */
export type BioConnection = {
  __typename?: 'BioConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BioEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BioCreateInput = {
  about: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  headline: Scalars['String']['input'];
  location: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BioCreateManyInlineInput = {
  /** Connect multiple existing Bio documents */
  connect?: InputMaybe<Array<BioWhereUniqueInput>>;
  /** Create and connect multiple existing Bio documents */
  create?: InputMaybe<Array<BioCreateInput>>;
};

export type BioCreateOneInlineInput = {
  /** Connect one existing Bio document */
  connect?: InputMaybe<BioWhereUniqueInput>;
  /** Create and connect one Bio document */
  create?: InputMaybe<BioCreateInput>;
};

/** An edge in a connection. */
export type BioEdge = {
  __typename?: 'BioEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Bio;
};

/** Identifies documents */
export type BioManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  about?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  about_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BioWhereStageInput>;
  documentInStages_none?: InputMaybe<BioWhereStageInput>;
  documentInStages_some?: InputMaybe<BioWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BioOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BioUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type BioUpdateManyInlineInput = {
  /** Connect multiple existing Bio documents */
  connect?: InputMaybe<Array<BioConnectInput>>;
  /** Create and connect multiple Bio documents */
  create?: InputMaybe<Array<BioCreateInput>>;
  /** Delete multiple Bio documents */
  delete?: InputMaybe<Array<BioWhereUniqueInput>>;
  /** Disconnect multiple Bio documents */
  disconnect?: InputMaybe<Array<BioWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Bio documents */
  set?: InputMaybe<Array<BioWhereUniqueInput>>;
  /** Update multiple Bio documents */
  update?: InputMaybe<Array<BioUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Bio documents */
  upsert?: InputMaybe<Array<BioUpsertWithNestedWhereUniqueInput>>;
};

export type BioUpdateManyInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type BioUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BioUpdateManyInput;
  /** Document search */
  where: BioWhereInput;
};

export type BioUpdateOneInlineInput = {
  /** Connect existing Bio document */
  connect?: InputMaybe<BioWhereUniqueInput>;
  /** Create and connect one Bio document */
  create?: InputMaybe<BioCreateInput>;
  /** Delete currently connected Bio document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Bio document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Bio document */
  update?: InputMaybe<BioUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Bio document */
  upsert?: InputMaybe<BioUpsertWithNestedWhereUniqueInput>;
};

export type BioUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BioUpdateInput;
  /** Unique document search */
  where: BioWhereUniqueInput;
};

export type BioUpsertInput = {
  /** Create document if it didn't exist */
  create: BioCreateInput;
  /** Update document if it exists */
  update: BioUpdateInput;
};

export type BioUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BioUpsertInput;
  /** Unique document search */
  where: BioWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BioWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BioWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  about?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  about_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BioWhereStageInput>;
  documentInStages_none?: InputMaybe<BioWhereStageInput>;
  documentInStages_some?: InputMaybe<BioWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BioWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BioWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BioWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BioWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BioWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Bio record uniquely */
export type BioWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type Conference = Entity & Node & {
  __typename?: 'Conference';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Conference>;
  /** List of Conference versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  link: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoEmbed?: Maybe<VideoEmbed>;
};


export type ConferenceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConferenceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ConferenceHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ConferenceImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConferencePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConferenceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ConferenceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConferenceVideoEmbedArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ConferenceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConferenceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConferenceConnection = {
  __typename?: 'ConferenceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConferenceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConferenceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  link: Scalars['String']['input'];
  title: Scalars['String']['input'];
  topic: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoEmbed?: InputMaybe<VideoEmbedCreateOneInlineInput>;
};

export type ConferenceCreateManyInlineInput = {
  /** Connect multiple existing Conference documents */
  connect?: InputMaybe<Array<ConferenceWhereUniqueInput>>;
  /** Create and connect multiple existing Conference documents */
  create?: InputMaybe<Array<ConferenceCreateInput>>;
};

export type ConferenceCreateOneInlineInput = {
  /** Connect one existing Conference document */
  connect?: InputMaybe<ConferenceWhereUniqueInput>;
  /** Create and connect one Conference document */
  create?: InputMaybe<ConferenceCreateInput>;
};

/** An edge in a connection. */
export type ConferenceEdge = {
  __typename?: 'ConferenceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Conference;
};

/** Identifies documents */
export type ConferenceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<ConferenceWhereStageInput>;
  documentInStages_none?: InputMaybe<ConferenceWhereStageInput>;
  documentInStages_some?: InputMaybe<ConferenceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoEmbed?: InputMaybe<VideoEmbedWhereInput>;
};

export enum ConferenceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConferenceUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  videoEmbed?: InputMaybe<VideoEmbedUpdateOneInlineInput>;
};

export type ConferenceUpdateManyInlineInput = {
  /** Connect multiple existing Conference documents */
  connect?: InputMaybe<Array<ConferenceConnectInput>>;
  /** Create and connect multiple Conference documents */
  create?: InputMaybe<Array<ConferenceCreateInput>>;
  /** Delete multiple Conference documents */
  delete?: InputMaybe<Array<ConferenceWhereUniqueInput>>;
  /** Disconnect multiple Conference documents */
  disconnect?: InputMaybe<Array<ConferenceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Conference documents */
  set?: InputMaybe<Array<ConferenceWhereUniqueInput>>;
  /** Update multiple Conference documents */
  update?: InputMaybe<Array<ConferenceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Conference documents */
  upsert?: InputMaybe<Array<ConferenceUpsertWithNestedWhereUniqueInput>>;
};

export type ConferenceUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type ConferenceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConferenceUpdateManyInput;
  /** Document search */
  where: ConferenceWhereInput;
};

export type ConferenceUpdateOneInlineInput = {
  /** Connect existing Conference document */
  connect?: InputMaybe<ConferenceWhereUniqueInput>;
  /** Create and connect one Conference document */
  create?: InputMaybe<ConferenceCreateInput>;
  /** Delete currently connected Conference document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Conference document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Conference document */
  update?: InputMaybe<ConferenceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Conference document */
  upsert?: InputMaybe<ConferenceUpsertWithNestedWhereUniqueInput>;
};

export type ConferenceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConferenceUpdateInput;
  /** Unique document search */
  where: ConferenceWhereUniqueInput;
};

export type ConferenceUpsertInput = {
  /** Create document if it didn't exist */
  create: ConferenceCreateInput;
  /** Update document if it exists */
  update: ConferenceUpdateInput;
};

export type ConferenceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConferenceUpsertInput;
  /** Unique document search */
  where: ConferenceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ConferenceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ConferenceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConferenceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<ConferenceWhereStageInput>;
  documentInStages_none?: InputMaybe<ConferenceWhereStageInput>;
  documentInStages_some?: InputMaybe<ConferenceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoEmbed?: InputMaybe<VideoEmbedWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ConferenceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConferenceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConferenceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConferenceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ConferenceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Conference record uniquely */
export type ConferenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type Education = Entity & Node & {
  __typename?: 'Education';
  areaOfStudy: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  degree?: Maybe<Scalars['String']['output']>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Education>;
  endDate?: Maybe<Scalars['Date']['output']>;
  /** List of Education versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  school: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  startDate: Scalars['Date']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EducationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EducationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type EducationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type EducationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EducationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EducationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EducationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EducationWhereUniqueInput;
};

/** A connection to a list of items. */
export type EducationConnection = {
  __typename?: 'EducationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EducationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EducationCreateInput = {
  areaOfStudy: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['RichTextAST']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  school: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EducationCreateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Create and connect multiple existing Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>;
};

export type EducationCreateOneInlineInput = {
  /** Connect one existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>;
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>;
};

/** An edge in a connection. */
export type EducationEdge = {
  __typename?: 'EducationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Education;
};

/** Identifies documents */
export type EducationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  areaOfStudy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  areaOfStudy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  areaOfStudy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  areaOfStudy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  areaOfStudy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  areaOfStudy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  areaOfStudy_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  degree?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  degree_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  degree_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  degree_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  degree_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  degree_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  degree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  degree_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  degree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  degree_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<EducationWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationWhereStageInput>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  school?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  school_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  school_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  school_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  school_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  school_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  school_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  school_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  school_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  school_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EducationOrderByInput {
  AreaOfStudyAsc = 'areaOfStudy_ASC',
  AreaOfStudyDesc = 'areaOfStudy_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DegreeAsc = 'degree_ASC',
  DegreeDesc = 'degree_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SchoolAsc = 'school_ASC',
  SchoolDesc = 'school_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EducationUpdateInput = {
  areaOfStudy?: InputMaybe<Scalars['String']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type EducationUpdateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationConnectInput>>;
  /** Create and connect multiple Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>;
  /** Delete multiple Education documents */
  delete?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Disconnect multiple Education documents */
  disconnect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Education documents */
  set?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Update multiple Education documents */
  update?: InputMaybe<Array<EducationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Education documents */
  upsert?: InputMaybe<Array<EducationUpsertWithNestedWhereUniqueInput>>;
};

export type EducationUpdateManyInput = {
  areaOfStudy?: InputMaybe<Scalars['String']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type EducationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EducationUpdateManyInput;
  /** Document search */
  where: EducationWhereInput;
};

export type EducationUpdateOneInlineInput = {
  /** Connect existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>;
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>;
  /** Delete currently connected Education document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Education document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Education document */
  update?: InputMaybe<EducationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Education document */
  upsert?: InputMaybe<EducationUpsertWithNestedWhereUniqueInput>;
};

export type EducationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EducationUpdateInput;
  /** Unique document search */
  where: EducationWhereUniqueInput;
};

export type EducationUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationCreateInput;
  /** Update document if it exists */
  update: EducationUpdateInput;
};

export type EducationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EducationUpsertInput;
  /** Unique document search */
  where: EducationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EducationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EducationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  areaOfStudy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  areaOfStudy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  areaOfStudy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  areaOfStudy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  areaOfStudy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  areaOfStudy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  areaOfStudy_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  degree?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  degree_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  degree_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  degree_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  degree_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  degree_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  degree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  degree_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  degree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  degree_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<EducationWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationWhereStageInput>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  school?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  school_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  school_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  school_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  school_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  school_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  school_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  school_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  school_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  school_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EducationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EducationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Education record uniquely */
export type EducationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Bio = 'Bio',
  Conference = 'Conference',
  Education = 'Education',
  Experience = 'Experience',
  Interview = 'Interview',
  Language = 'Language',
  Publication = 'Publication',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Skill = 'Skill',
  /** User system model */
  User = 'User',
  VideoEmbed = 'VideoEmbed'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Experience = Entity & Node & {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Experience>;
  endDate?: Maybe<Scalars['Date']['output']>;
  /** List of Experience versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locationIcon: Scalars['String']['output'];
  logo: Asset;
  position: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  startDate: Scalars['Date']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ExperienceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ExperienceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ExperienceHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ExperienceLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ExperiencePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ExperienceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ExperienceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ExperienceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ExperienceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExperienceConnection = {
  __typename?: 'ExperienceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ExperienceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ExperienceCreateInput = {
  company: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationIcon: Scalars['String']['input'];
  logo: AssetCreateOneInlineInput;
  position: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExperienceCreateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Create and connect multiple existing Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>;
};

export type ExperienceCreateOneInlineInput = {
  /** Connect one existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>;
};

/** An edge in a connection. */
export type ExperienceEdge = {
  __typename?: 'ExperienceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Experience;
};

/** Identifies documents */
export type ExperienceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  company_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  company_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  company_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  company_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  company_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  company_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationIcon?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  locationIcon_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  locationIcon_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  locationIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  locationIcon_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  locationIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  locationIcon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  locationIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  locationIcon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  locationIcon_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  position?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  position_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  position_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ExperienceOrderByInput {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationIconAsc = 'locationIcon_ASC',
  LocationIconDesc = 'locationIcon_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ExperienceUpdateInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationIcon?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  position?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ExperienceUpdateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceConnectInput>>;
  /** Create and connect multiple Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>;
  /** Delete multiple Experience documents */
  delete?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Disconnect multiple Experience documents */
  disconnect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Experience documents */
  set?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Update multiple Experience documents */
  update?: InputMaybe<Array<ExperienceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Experience documents */
  upsert?: InputMaybe<Array<ExperienceUpsertWithNestedWhereUniqueInput>>;
};

export type ExperienceUpdateManyInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationIcon?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ExperienceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExperienceUpdateManyInput;
  /** Document search */
  where: ExperienceWhereInput;
};

export type ExperienceUpdateOneInlineInput = {
  /** Connect existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>;
  /** Delete currently connected Experience document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Experience document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Experience document */
  update?: InputMaybe<ExperienceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Experience document */
  upsert?: InputMaybe<ExperienceUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExperienceUpdateInput;
  /** Unique document search */
  where: ExperienceWhereUniqueInput;
};

export type ExperienceUpsertInput = {
  /** Create document if it didn't exist */
  create: ExperienceCreateInput;
  /** Update document if it exists */
  update: ExperienceUpdateInput;
};

export type ExperienceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExperienceUpsertInput;
  /** Unique document search */
  where: ExperienceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ExperienceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ExperienceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  company_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  company_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  company_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  company_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  company_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  company_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationIcon?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  locationIcon_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  locationIcon_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  locationIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  locationIcon_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  locationIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  locationIcon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  locationIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  locationIcon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  locationIcon_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  position?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  position_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  position_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExperienceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ExperienceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Experience record uniquely */
export type ExperienceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Interview = Entity & Node & {
  __typename?: 'Interview';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Interview>;
  /** List of Interview versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoEmbed?: Maybe<VideoEmbed>;
};


export type InterviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InterviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type InterviewHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type InterviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InterviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type InterviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type InterviewVideoEmbedArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type InterviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: InterviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type InterviewConnection = {
  __typename?: 'InterviewConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<InterviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type InterviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoEmbed?: InputMaybe<VideoEmbedCreateOneInlineInput>;
};

export type InterviewCreateManyInlineInput = {
  /** Connect multiple existing Interview documents */
  connect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  /** Create and connect multiple existing Interview documents */
  create?: InputMaybe<Array<InterviewCreateInput>>;
};

export type InterviewCreateOneInlineInput = {
  /** Connect one existing Interview document */
  connect?: InputMaybe<InterviewWhereUniqueInput>;
  /** Create and connect one Interview document */
  create?: InputMaybe<InterviewCreateInput>;
};

/** An edge in a connection. */
export type InterviewEdge = {
  __typename?: 'InterviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Interview;
};

/** Identifies documents */
export type InterviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InterviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InterviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InterviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<InterviewWhereStageInput>;
  documentInStages_none?: InputMaybe<InterviewWhereStageInput>;
  documentInStages_some?: InputMaybe<InterviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoEmbed?: InputMaybe<VideoEmbedWhereInput>;
};

export enum InterviewOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type InterviewUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoEmbed?: InputMaybe<VideoEmbedUpdateOneInlineInput>;
};

export type InterviewUpdateManyInlineInput = {
  /** Connect multiple existing Interview documents */
  connect?: InputMaybe<Array<InterviewConnectInput>>;
  /** Create and connect multiple Interview documents */
  create?: InputMaybe<Array<InterviewCreateInput>>;
  /** Delete multiple Interview documents */
  delete?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  /** Disconnect multiple Interview documents */
  disconnect?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Interview documents */
  set?: InputMaybe<Array<InterviewWhereUniqueInput>>;
  /** Update multiple Interview documents */
  update?: InputMaybe<Array<InterviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Interview documents */
  upsert?: InputMaybe<Array<InterviewUpsertWithNestedWhereUniqueInput>>;
};

export type InterviewUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InterviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: InterviewUpdateManyInput;
  /** Document search */
  where: InterviewWhereInput;
};

export type InterviewUpdateOneInlineInput = {
  /** Connect existing Interview document */
  connect?: InputMaybe<InterviewWhereUniqueInput>;
  /** Create and connect one Interview document */
  create?: InputMaybe<InterviewCreateInput>;
  /** Delete currently connected Interview document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Interview document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Interview document */
  update?: InputMaybe<InterviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Interview document */
  upsert?: InputMaybe<InterviewUpsertWithNestedWhereUniqueInput>;
};

export type InterviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: InterviewUpdateInput;
  /** Unique document search */
  where: InterviewWhereUniqueInput;
};

export type InterviewUpsertInput = {
  /** Create document if it didn't exist */
  create: InterviewCreateInput;
  /** Update document if it exists */
  update: InterviewUpdateInput;
};

export type InterviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: InterviewUpsertInput;
  /** Unique document search */
  where: InterviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type InterviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type InterviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InterviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InterviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InterviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<InterviewWhereStageInput>;
  documentInStages_none?: InputMaybe<InterviewWhereStageInput>;
  documentInStages_some?: InputMaybe<InterviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoEmbed?: InputMaybe<VideoEmbedWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type InterviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<InterviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<InterviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<InterviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<InterviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Interview record uniquely */
export type InterviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Language = Entity & Node & {
  __typename?: 'Language';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Language>;
  /** List of Language versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  level: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type LanguageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LanguageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LanguageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type LanguagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LanguageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LanguageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LanguageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LanguageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LanguageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LanguageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LanguageCreateManyInlineInput = {
  /** Connect multiple existing Language documents */
  connect?: InputMaybe<Array<LanguageWhereUniqueInput>>;
  /** Create and connect multiple existing Language documents */
  create?: InputMaybe<Array<LanguageCreateInput>>;
};

export type LanguageCreateOneInlineInput = {
  /** Connect one existing Language document */
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  /** Create and connect one Language document */
  create?: InputMaybe<LanguageCreateInput>;
};

/** An edge in a connection. */
export type LanguageEdge = {
  __typename?: 'LanguageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Language;
};

/** Identifies documents */
export type LanguageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LanguageWhereStageInput>;
  documentInStages_none?: InputMaybe<LanguageWhereStageInput>;
  documentInStages_some?: InputMaybe<LanguageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  level_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  level_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  level_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  level_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  level_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  level_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  level_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  level_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  level_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LanguageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LevelAsc = 'level_ASC',
  LevelDesc = 'level_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LanguageUpdateInput = {
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageUpdateManyInlineInput = {
  /** Connect multiple existing Language documents */
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  /** Create and connect multiple Language documents */
  create?: InputMaybe<Array<LanguageCreateInput>>;
  /** Delete multiple Language documents */
  delete?: InputMaybe<Array<LanguageWhereUniqueInput>>;
  /** Disconnect multiple Language documents */
  disconnect?: InputMaybe<Array<LanguageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Language documents */
  set?: InputMaybe<Array<LanguageWhereUniqueInput>>;
  /** Update multiple Language documents */
  update?: InputMaybe<Array<LanguageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Language documents */
  upsert?: InputMaybe<Array<LanguageUpsertWithNestedWhereUniqueInput>>;
};

export type LanguageUpdateManyInput = {
  level?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LanguageUpdateManyInput;
  /** Document search */
  where: LanguageWhereInput;
};

export type LanguageUpdateOneInlineInput = {
  /** Connect existing Language document */
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  /** Create and connect one Language document */
  create?: InputMaybe<LanguageCreateInput>;
  /** Delete currently connected Language document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Language document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Language document */
  update?: InputMaybe<LanguageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Language document */
  upsert?: InputMaybe<LanguageUpsertWithNestedWhereUniqueInput>;
};

export type LanguageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LanguageUpdateInput;
  /** Unique document search */
  where: LanguageWhereUniqueInput;
};

export type LanguageUpsertInput = {
  /** Create document if it didn't exist */
  create: LanguageCreateInput;
  /** Update document if it exists */
  update: LanguageUpdateInput;
};

export type LanguageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LanguageUpsertInput;
  /** Unique document search */
  where: LanguageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LanguageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LanguageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LanguageWhereStageInput>;
  documentInStages_none?: InputMaybe<LanguageWhereStageInput>;
  documentInStages_some?: InputMaybe<LanguageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  level_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  level_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  level_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  level_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  level_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  level_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  level_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  level_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  level_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LanguageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LanguageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LanguageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LanguageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LanguageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Language record uniquely */
export type LanguageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one bio */
  createBio?: Maybe<Bio>;
  /** Create one conference */
  createConference?: Maybe<Conference>;
  /** Create one education */
  createEducation?: Maybe<Education>;
  /** Create one experience */
  createExperience?: Maybe<Experience>;
  /** Create one interview */
  createInterview?: Maybe<Interview>;
  /** Create one language */
  createLanguage?: Maybe<Language>;
  /** Create one publication */
  createPublication?: Maybe<Publication>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one skill */
  createSkill?: Maybe<Skill>;
  /** Create one videoEmbed */
  createVideoEmbed?: Maybe<VideoEmbed>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one bio from _all_ existing stages. Returns deleted document. */
  deleteBio?: Maybe<Bio>;
  /** Delete one conference from _all_ existing stages. Returns deleted document. */
  deleteConference?: Maybe<Conference>;
  /** Delete one education from _all_ existing stages. Returns deleted document. */
  deleteEducation?: Maybe<Education>;
  /** Delete one experience from _all_ existing stages. Returns deleted document. */
  deleteExperience?: Maybe<Experience>;
  /** Delete one interview from _all_ existing stages. Returns deleted document. */
  deleteInterview?: Maybe<Interview>;
  /** Delete one language from _all_ existing stages. Returns deleted document. */
  deleteLanguage?: Maybe<Language>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Bio documents
   * @deprecated Please use the new paginated many mutation (deleteManyBiosConnection)
   */
  deleteManyBios: BatchPayload;
  /** Delete many Bio documents, return deleted documents */
  deleteManyBiosConnection: BioConnection;
  /**
   * Delete many Conference documents
   * @deprecated Please use the new paginated many mutation (deleteManyConferencesConnection)
   */
  deleteManyConferences: BatchPayload;
  /** Delete many Conference documents, return deleted documents */
  deleteManyConferencesConnection: ConferenceConnection;
  /**
   * Delete many Education documents
   * @deprecated Please use the new paginated many mutation (deleteManyEducationsConnection)
   */
  deleteManyEducations: BatchPayload;
  /** Delete many Education documents, return deleted documents */
  deleteManyEducationsConnection: EducationConnection;
  /**
   * Delete many Experience documents
   * @deprecated Please use the new paginated many mutation (deleteManyExperiencesConnection)
   */
  deleteManyExperiences: BatchPayload;
  /** Delete many Experience documents, return deleted documents */
  deleteManyExperiencesConnection: ExperienceConnection;
  /**
   * Delete many Interview documents
   * @deprecated Please use the new paginated many mutation (deleteManyInterviewsConnection)
   */
  deleteManyInterviews: BatchPayload;
  /** Delete many Interview documents, return deleted documents */
  deleteManyInterviewsConnection: InterviewConnection;
  /**
   * Delete many Language documents
   * @deprecated Please use the new paginated many mutation (deleteManyLanguagesConnection)
   */
  deleteManyLanguages: BatchPayload;
  /** Delete many Language documents, return deleted documents */
  deleteManyLanguagesConnection: LanguageConnection;
  /**
   * Delete many Publication documents
   * @deprecated Please use the new paginated many mutation (deleteManyPublicationsConnection)
   */
  deleteManyPublications: BatchPayload;
  /** Delete many Publication documents, return deleted documents */
  deleteManyPublicationsConnection: PublicationConnection;
  /**
   * Delete many Skill documents
   * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
   */
  deleteManySkills: BatchPayload;
  /** Delete many Skill documents, return deleted documents */
  deleteManySkillsConnection: SkillConnection;
  /**
   * Delete many VideoEmbed documents
   * @deprecated Please use the new paginated many mutation (deleteManyVideoEmbedsConnection)
   */
  deleteManyVideoEmbeds: BatchPayload;
  /** Delete many VideoEmbed documents, return deleted documents */
  deleteManyVideoEmbedsConnection: VideoEmbedConnection;
  /** Delete one publication from _all_ existing stages. Returns deleted document. */
  deletePublication?: Maybe<Publication>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one skill from _all_ existing stages. Returns deleted document. */
  deleteSkill?: Maybe<Skill>;
  /** Delete one videoEmbed from _all_ existing stages. Returns deleted document. */
  deleteVideoEmbed?: Maybe<VideoEmbed>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one bio */
  publishBio?: Maybe<Bio>;
  /** Publish one conference */
  publishConference?: Maybe<Conference>;
  /** Publish one education */
  publishEducation?: Maybe<Education>;
  /** Publish one experience */
  publishExperience?: Maybe<Experience>;
  /** Publish one interview */
  publishInterview?: Maybe<Interview>;
  /** Publish one language */
  publishLanguage?: Maybe<Language>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Bio documents
   * @deprecated Please use the new paginated many mutation (publishManyBiosConnection)
   */
  publishManyBios: BatchPayload;
  /** Publish many Bio documents */
  publishManyBiosConnection: BioConnection;
  /**
   * Publish many Conference documents
   * @deprecated Please use the new paginated many mutation (publishManyConferencesConnection)
   */
  publishManyConferences: BatchPayload;
  /** Publish many Conference documents */
  publishManyConferencesConnection: ConferenceConnection;
  /**
   * Publish many Education documents
   * @deprecated Please use the new paginated many mutation (publishManyEducationsConnection)
   */
  publishManyEducations: BatchPayload;
  /** Publish many Education documents */
  publishManyEducationsConnection: EducationConnection;
  /**
   * Publish many Experience documents
   * @deprecated Please use the new paginated many mutation (publishManyExperiencesConnection)
   */
  publishManyExperiences: BatchPayload;
  /** Publish many Experience documents */
  publishManyExperiencesConnection: ExperienceConnection;
  /**
   * Publish many Interview documents
   * @deprecated Please use the new paginated many mutation (publishManyInterviewsConnection)
   */
  publishManyInterviews: BatchPayload;
  /** Publish many Interview documents */
  publishManyInterviewsConnection: InterviewConnection;
  /**
   * Publish many Language documents
   * @deprecated Please use the new paginated many mutation (publishManyLanguagesConnection)
   */
  publishManyLanguages: BatchPayload;
  /** Publish many Language documents */
  publishManyLanguagesConnection: LanguageConnection;
  /**
   * Publish many Publication documents
   * @deprecated Please use the new paginated many mutation (publishManyPublicationsConnection)
   */
  publishManyPublications: BatchPayload;
  /** Publish many Publication documents */
  publishManyPublicationsConnection: PublicationConnection;
  /**
   * Publish many Skill documents
   * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
   */
  publishManySkills: BatchPayload;
  /** Publish many Skill documents */
  publishManySkillsConnection: SkillConnection;
  /**
   * Publish many VideoEmbed documents
   * @deprecated Please use the new paginated many mutation (publishManyVideoEmbedsConnection)
   */
  publishManyVideoEmbeds: BatchPayload;
  /** Publish many VideoEmbed documents */
  publishManyVideoEmbedsConnection: VideoEmbedConnection;
  /** Publish one publication */
  publishPublication?: Maybe<Publication>;
  /** Publish one skill */
  publishSkill?: Maybe<Skill>;
  /** Publish one videoEmbed */
  publishVideoEmbed?: Maybe<VideoEmbed>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one bio */
  schedulePublishBio?: Maybe<Bio>;
  /** Schedule to publish one conference */
  schedulePublishConference?: Maybe<Conference>;
  /** Schedule to publish one education */
  schedulePublishEducation?: Maybe<Education>;
  /** Schedule to publish one experience */
  schedulePublishExperience?: Maybe<Experience>;
  /** Schedule to publish one interview */
  schedulePublishInterview?: Maybe<Interview>;
  /** Schedule to publish one language */
  schedulePublishLanguage?: Maybe<Language>;
  /** Schedule to publish one publication */
  schedulePublishPublication?: Maybe<Publication>;
  /** Schedule to publish one skill */
  schedulePublishSkill?: Maybe<Skill>;
  /** Schedule to publish one videoEmbed */
  schedulePublishVideoEmbed?: Maybe<VideoEmbed>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one bio from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBio?: Maybe<Bio>;
  /** Unpublish one conference from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConference?: Maybe<Conference>;
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEducation?: Maybe<Education>;
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExperience?: Maybe<Experience>;
  /** Unpublish one interview from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishInterview?: Maybe<Interview>;
  /** Unpublish one language from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLanguage?: Maybe<Language>;
  /** Unpublish one publication from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPublication?: Maybe<Publication>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSkill?: Maybe<Skill>;
  /** Unpublish one videoEmbed from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishVideoEmbed?: Maybe<VideoEmbed>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one bio from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBio?: Maybe<Bio>;
  /** Unpublish one conference from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConference?: Maybe<Conference>;
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEducation?: Maybe<Education>;
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExperience?: Maybe<Experience>;
  /** Unpublish one interview from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishInterview?: Maybe<Interview>;
  /** Unpublish one language from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLanguage?: Maybe<Language>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Bio documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBiosConnection)
   */
  unpublishManyBios: BatchPayload;
  /** Find many Bio documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBiosConnection: BioConnection;
  /**
   * Unpublish many Conference documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConferencesConnection)
   */
  unpublishManyConferences: BatchPayload;
  /** Find many Conference documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConferencesConnection: ConferenceConnection;
  /**
   * Unpublish many Education documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEducationsConnection)
   */
  unpublishManyEducations: BatchPayload;
  /** Find many Education documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEducationsConnection: EducationConnection;
  /**
   * Unpublish many Experience documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExperiencesConnection)
   */
  unpublishManyExperiences: BatchPayload;
  /** Find many Experience documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExperiencesConnection: ExperienceConnection;
  /**
   * Unpublish many Interview documents
   * @deprecated Please use the new paginated many mutation (unpublishManyInterviewsConnection)
   */
  unpublishManyInterviews: BatchPayload;
  /** Find many Interview documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyInterviewsConnection: InterviewConnection;
  /**
   * Unpublish many Language documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLanguagesConnection)
   */
  unpublishManyLanguages: BatchPayload;
  /** Find many Language documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLanguagesConnection: LanguageConnection;
  /**
   * Unpublish many Publication documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPublicationsConnection)
   */
  unpublishManyPublications: BatchPayload;
  /** Find many Publication documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPublicationsConnection: PublicationConnection;
  /**
   * Unpublish many Skill documents
   * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
   */
  unpublishManySkills: BatchPayload;
  /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySkillsConnection: SkillConnection;
  /**
   * Unpublish many VideoEmbed documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVideoEmbedsConnection)
   */
  unpublishManyVideoEmbeds: BatchPayload;
  /** Find many VideoEmbed documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVideoEmbedsConnection: VideoEmbedConnection;
  /** Unpublish one publication from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPublication?: Maybe<Publication>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSkill?: Maybe<Skill>;
  /** Unpublish one videoEmbed from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVideoEmbed?: Maybe<VideoEmbed>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one bio */
  updateBio?: Maybe<Bio>;
  /** Update one conference */
  updateConference?: Maybe<Conference>;
  /** Update one education */
  updateEducation?: Maybe<Education>;
  /** Update one experience */
  updateExperience?: Maybe<Experience>;
  /** Update one interview */
  updateInterview?: Maybe<Interview>;
  /** Update one language */
  updateLanguage?: Maybe<Language>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many bios
   * @deprecated Please use the new paginated many mutation (updateManyBiosConnection)
   */
  updateManyBios: BatchPayload;
  /** Update many Bio documents */
  updateManyBiosConnection: BioConnection;
  /**
   * Update many conferences
   * @deprecated Please use the new paginated many mutation (updateManyConferencesConnection)
   */
  updateManyConferences: BatchPayload;
  /** Update many Conference documents */
  updateManyConferencesConnection: ConferenceConnection;
  /**
   * Update many educations
   * @deprecated Please use the new paginated many mutation (updateManyEducationsConnection)
   */
  updateManyEducations: BatchPayload;
  /** Update many Education documents */
  updateManyEducationsConnection: EducationConnection;
  /**
   * Update many experiences
   * @deprecated Please use the new paginated many mutation (updateManyExperiencesConnection)
   */
  updateManyExperiences: BatchPayload;
  /** Update many Experience documents */
  updateManyExperiencesConnection: ExperienceConnection;
  /**
   * Update many interviews
   * @deprecated Please use the new paginated many mutation (updateManyInterviewsConnection)
   */
  updateManyInterviews: BatchPayload;
  /** Update many Interview documents */
  updateManyInterviewsConnection: InterviewConnection;
  /**
   * Update many languages
   * @deprecated Please use the new paginated many mutation (updateManyLanguagesConnection)
   */
  updateManyLanguages: BatchPayload;
  /** Update many Language documents */
  updateManyLanguagesConnection: LanguageConnection;
  /**
   * Update many publications
   * @deprecated Please use the new paginated many mutation (updateManyPublicationsConnection)
   */
  updateManyPublications: BatchPayload;
  /** Update many Publication documents */
  updateManyPublicationsConnection: PublicationConnection;
  /**
   * Update many skills
   * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
   */
  updateManySkills: BatchPayload;
  /** Update many Skill documents */
  updateManySkillsConnection: SkillConnection;
  /**
   * Update many videoEmbeds
   * @deprecated Please use the new paginated many mutation (updateManyVideoEmbedsConnection)
   */
  updateManyVideoEmbeds: BatchPayload;
  /** Update many VideoEmbed documents */
  updateManyVideoEmbedsConnection: VideoEmbedConnection;
  /** Update one publication */
  updatePublication?: Maybe<Publication>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one skill */
  updateSkill?: Maybe<Skill>;
  /** Update one videoEmbed */
  updateVideoEmbed?: Maybe<VideoEmbed>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one bio */
  upsertBio?: Maybe<Bio>;
  /** Upsert one conference */
  upsertConference?: Maybe<Conference>;
  /** Upsert one education */
  upsertEducation?: Maybe<Education>;
  /** Upsert one experience */
  upsertExperience?: Maybe<Experience>;
  /** Upsert one interview */
  upsertInterview?: Maybe<Interview>;
  /** Upsert one language */
  upsertLanguage?: Maybe<Language>;
  /** Upsert one publication */
  upsertPublication?: Maybe<Publication>;
  /** Upsert one skill */
  upsertSkill?: Maybe<Skill>;
  /** Upsert one videoEmbed */
  upsertVideoEmbed?: Maybe<VideoEmbed>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBioArgs = {
  data: BioCreateInput;
};


export type MutationCreateConferenceArgs = {
  data: ConferenceCreateInput;
};


export type MutationCreateEducationArgs = {
  data: EducationCreateInput;
};


export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationCreateInterviewArgs = {
  data: InterviewCreateInput;
};


export type MutationCreateLanguageArgs = {
  data: LanguageCreateInput;
};


export type MutationCreatePublicationArgs = {
  data: PublicationCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateVideoEmbedArgs = {
  data: VideoEmbedCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBioArgs = {
  where: BioWhereUniqueInput;
};


export type MutationDeleteConferenceArgs = {
  where: ConferenceWhereUniqueInput;
};


export type MutationDeleteEducationArgs = {
  where: EducationWhereUniqueInput;
};


export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationDeleteInterviewArgs = {
  where: InterviewWhereUniqueInput;
};


export type MutationDeleteLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBiosArgs = {
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationDeleteManyBiosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationDeleteManyConferencesArgs = {
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationDeleteManyConferencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationDeleteManyEducationsArgs = {
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationDeleteManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationDeleteManyExperiencesArgs = {
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationDeleteManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationDeleteManyInterviewsArgs = {
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationDeleteManyInterviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationDeleteManyLanguagesArgs = {
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationDeleteManyLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationDeleteManyPublicationsArgs = {
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationDeleteManyPublicationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationDeleteManySkillsArgs = {
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationDeleteManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationDeleteManyVideoEmbedsArgs = {
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationDeleteManyVideoEmbedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationDeletePublicationArgs = {
  where: PublicationWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteVideoEmbedArgs = {
  where: VideoEmbedWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBioArgs = {
  to?: Array<Stage>;
  where: BioWhereUniqueInput;
};


export type MutationPublishConferenceArgs = {
  to?: Array<Stage>;
  where: ConferenceWhereUniqueInput;
};


export type MutationPublishEducationArgs = {
  to?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationPublishExperienceArgs = {
  to?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationPublishInterviewArgs = {
  to?: Array<Stage>;
  where: InterviewWhereUniqueInput;
};


export type MutationPublishLanguageArgs = {
  to?: Array<Stage>;
  where: LanguageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBiosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationPublishManyBiosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationPublishManyConferencesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationPublishManyConferencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationPublishManyEducationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationPublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationPublishManyExperiencesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationPublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationPublishManyInterviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationPublishManyInterviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationPublishManyLanguagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationPublishManyLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationPublishManyPublicationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationPublishManyPublicationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationPublishManySkillsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationPublishManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationPublishManyVideoEmbedsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationPublishManyVideoEmbedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationPublishPublicationArgs = {
  to?: Array<Stage>;
  where: PublicationWhereUniqueInput;
};


export type MutationPublishSkillArgs = {
  to?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationPublishVideoEmbedArgs = {
  to?: Array<Stage>;
  where: VideoEmbedWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBioArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BioWhereUniqueInput;
};


export type MutationSchedulePublishConferenceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ConferenceWhereUniqueInput;
};


export type MutationSchedulePublishEducationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationSchedulePublishExperienceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationSchedulePublishInterviewArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: InterviewWhereUniqueInput;
};


export type MutationSchedulePublishLanguageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LanguageWhereUniqueInput;
};


export type MutationSchedulePublishPublicationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PublicationWhereUniqueInput;
};


export type MutationSchedulePublishSkillArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationSchedulePublishVideoEmbedArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: VideoEmbedWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBioArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: BioWhereUniqueInput;
};


export type MutationScheduleUnpublishConferenceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ConferenceWhereUniqueInput;
};


export type MutationScheduleUnpublishEducationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: EducationWhereUniqueInput;
};


export type MutationScheduleUnpublishExperienceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ExperienceWhereUniqueInput;
};


export type MutationScheduleUnpublishInterviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: InterviewWhereUniqueInput;
};


export type MutationScheduleUnpublishLanguageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: LanguageWhereUniqueInput;
};


export type MutationScheduleUnpublishPublicationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PublicationWhereUniqueInput;
};


export type MutationScheduleUnpublishSkillArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SkillWhereUniqueInput;
};


export type MutationScheduleUnpublishVideoEmbedArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: VideoEmbedWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBioArgs = {
  from?: Array<Stage>;
  where: BioWhereUniqueInput;
};


export type MutationUnpublishConferenceArgs = {
  from?: Array<Stage>;
  where: ConferenceWhereUniqueInput;
};


export type MutationUnpublishEducationArgs = {
  from?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationUnpublishExperienceArgs = {
  from?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationUnpublishInterviewArgs = {
  from?: Array<Stage>;
  where: InterviewWhereUniqueInput;
};


export type MutationUnpublishLanguageArgs = {
  from?: Array<Stage>;
  where: LanguageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBiosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationUnpublishManyBiosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationUnpublishManyConferencesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationUnpublishManyConferencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationUnpublishManyEducationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUnpublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUnpublishManyExperiencesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUnpublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUnpublishManyInterviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationUnpublishManyInterviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationUnpublishManyLanguagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationUnpublishManyLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationUnpublishManyPublicationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationUnpublishManyPublicationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationUnpublishManySkillsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUnpublishManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUnpublishManyVideoEmbedsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationUnpublishManyVideoEmbedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationUnpublishPublicationArgs = {
  from?: Array<Stage>;
  where: PublicationWhereUniqueInput;
};


export type MutationUnpublishSkillArgs = {
  from?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationUnpublishVideoEmbedArgs = {
  from?: Array<Stage>;
  where: VideoEmbedWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBioArgs = {
  data: BioUpdateInput;
  where: BioWhereUniqueInput;
};


export type MutationUpdateConferenceArgs = {
  data: ConferenceUpdateInput;
  where: ConferenceWhereUniqueInput;
};


export type MutationUpdateEducationArgs = {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpdateInterviewArgs = {
  data: InterviewUpdateInput;
  where: InterviewWhereUniqueInput;
};


export type MutationUpdateLanguageArgs = {
  data: LanguageUpdateInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBiosArgs = {
  data: BioUpdateManyInput;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationUpdateManyBiosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BioUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BioManyWhereInput>;
};


export type MutationUpdateManyConferencesArgs = {
  data: ConferenceUpdateManyInput;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationUpdateManyConferencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ConferenceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConferenceManyWhereInput>;
};


export type MutationUpdateManyEducationsArgs = {
  data: EducationUpdateManyInput;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUpdateManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: EducationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUpdateManyExperiencesArgs = {
  data: ExperienceUpdateManyInput;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUpdateManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ExperienceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUpdateManyInterviewsArgs = {
  data: InterviewUpdateManyInput;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationUpdateManyInterviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: InterviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InterviewManyWhereInput>;
};


export type MutationUpdateManyLanguagesArgs = {
  data: LanguageUpdateManyInput;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationUpdateManyLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: LanguageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageManyWhereInput>;
};


export type MutationUpdateManyPublicationsArgs = {
  data: PublicationUpdateManyInput;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationUpdateManyPublicationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PublicationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PublicationManyWhereInput>;
};


export type MutationUpdateManySkillsArgs = {
  data: SkillUpdateManyInput;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUpdateManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SkillUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUpdateManyVideoEmbedsArgs = {
  data: VideoEmbedUpdateManyInput;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationUpdateManyVideoEmbedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: VideoEmbedUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoEmbedManyWhereInput>;
};


export type MutationUpdatePublicationArgs = {
  data: PublicationUpdateInput;
  where: PublicationWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateVideoEmbedArgs = {
  data: VideoEmbedUpdateInput;
  where: VideoEmbedWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBioArgs = {
  upsert: BioUpsertInput;
  where: BioWhereUniqueInput;
};


export type MutationUpsertConferenceArgs = {
  upsert: ConferenceUpsertInput;
  where: ConferenceWhereUniqueInput;
};


export type MutationUpsertEducationArgs = {
  upsert: EducationUpsertInput;
  where: EducationWhereUniqueInput;
};


export type MutationUpsertExperienceArgs = {
  upsert: ExperienceUpsertInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpsertInterviewArgs = {
  upsert: InterviewUpsertInput;
  where: InterviewWhereUniqueInput;
};


export type MutationUpsertLanguageArgs = {
  upsert: LanguageUpsertInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpsertPublicationArgs = {
  upsert: PublicationUpsertInput;
  where: PublicationWhereUniqueInput;
};


export type MutationUpsertSkillArgs = {
  upsert: SkillUpsertInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpsertVideoEmbedArgs = {
  upsert: VideoEmbedUpsertInput;
  where: VideoEmbedWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Publication = Entity & Node & {
  __typename?: 'Publication';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Publication>;
  /** List of Publication versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PublicationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PublicationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PublicationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PublicationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PublicationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PublicationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PublicationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PublicationWhereUniqueInput;
};

/** A connection to a list of items. */
export type PublicationConnection = {
  __typename?: 'PublicationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PublicationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PublicationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  link: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PublicationCreateManyInlineInput = {
  /** Connect multiple existing Publication documents */
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  /** Create and connect multiple existing Publication documents */
  create?: InputMaybe<Array<PublicationCreateInput>>;
};

export type PublicationCreateOneInlineInput = {
  /** Connect one existing Publication document */
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  /** Create and connect one Publication document */
  create?: InputMaybe<PublicationCreateInput>;
};

/** An edge in a connection. */
export type PublicationEdge = {
  __typename?: 'PublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Publication;
};

/** Identifies documents */
export type PublicationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PublicationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PublicationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PublicationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<PublicationWhereStageInput>;
  documentInStages_none?: InputMaybe<PublicationWhereStageInput>;
  documentInStages_some?: InputMaybe<PublicationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PublicationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PublicationUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PublicationUpdateManyInlineInput = {
  /** Connect multiple existing Publication documents */
  connect?: InputMaybe<Array<PublicationConnectInput>>;
  /** Create and connect multiple Publication documents */
  create?: InputMaybe<Array<PublicationCreateInput>>;
  /** Delete multiple Publication documents */
  delete?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  /** Disconnect multiple Publication documents */
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Publication documents */
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  /** Update multiple Publication documents */
  update?: InputMaybe<Array<PublicationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Publication documents */
  upsert?: InputMaybe<Array<PublicationUpsertWithNestedWhereUniqueInput>>;
};

export type PublicationUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PublicationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PublicationUpdateManyInput;
  /** Document search */
  where: PublicationWhereInput;
};

export type PublicationUpdateOneInlineInput = {
  /** Connect existing Publication document */
  connect?: InputMaybe<PublicationWhereUniqueInput>;
  /** Create and connect one Publication document */
  create?: InputMaybe<PublicationCreateInput>;
  /** Delete currently connected Publication document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Publication document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Publication document */
  update?: InputMaybe<PublicationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Publication document */
  upsert?: InputMaybe<PublicationUpsertWithNestedWhereUniqueInput>;
};

export type PublicationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PublicationUpdateInput;
  /** Unique document search */
  where: PublicationWhereUniqueInput;
};

export type PublicationUpsertInput = {
  /** Create document if it didn't exist */
  create: PublicationCreateInput;
  /** Update document if it exists */
  update: PublicationUpdateInput;
};

export type PublicationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PublicationUpsertInput;
  /** Unique document search */
  where: PublicationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PublicationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PublicationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PublicationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PublicationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PublicationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<PublicationWhereStageInput>;
  documentInStages_none?: InputMaybe<PublicationWhereStageInput>;
  documentInStages_some?: InputMaybe<PublicationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PublicationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PublicationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PublicationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PublicationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PublicationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Publication record uniquely */
export type PublicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single bio */
  bio?: Maybe<Bio>;
  /** Retrieve document version */
  bioVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple bios */
  bios: Array<Bio>;
  /** Retrieve multiple bios using the Relay connection interface */
  biosConnection: BioConnection;
  /** Retrieve a single conference */
  conference?: Maybe<Conference>;
  /** Retrieve document version */
  conferenceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple conferences */
  conferences: Array<Conference>;
  /** Retrieve multiple conferences using the Relay connection interface */
  conferencesConnection: ConferenceConnection;
  /** Retrieve a single education */
  education?: Maybe<Education>;
  /** Retrieve document version */
  educationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple educations */
  educations: Array<Education>;
  /** Retrieve multiple educations using the Relay connection interface */
  educationsConnection: EducationConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single experience */
  experience?: Maybe<Experience>;
  /** Retrieve document version */
  experienceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple experiences */
  experiences: Array<Experience>;
  /** Retrieve multiple experiences using the Relay connection interface */
  experiencesConnection: ExperienceConnection;
  /** Retrieve a single interview */
  interview?: Maybe<Interview>;
  /** Retrieve document version */
  interviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple interviews */
  interviews: Array<Interview>;
  /** Retrieve multiple interviews using the Relay connection interface */
  interviewsConnection: InterviewConnection;
  /** Retrieve a single language */
  language?: Maybe<Language>;
  /** Retrieve document version */
  languageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple languages */
  languages: Array<Language>;
  /** Retrieve multiple languages using the Relay connection interface */
  languagesConnection: LanguageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single publication */
  publication?: Maybe<Publication>;
  /** Retrieve document version */
  publicationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple publications */
  publications: Array<Publication>;
  /** Retrieve multiple publications using the Relay connection interface */
  publicationsConnection: PublicationConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single skill */
  skill?: Maybe<Skill>;
  /** Retrieve document version */
  skillVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple skills */
  skills: Array<Skill>;
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: SkillConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single videoEmbed */
  videoEmbed?: Maybe<VideoEmbed>;
  /** Retrieve document version */
  videoEmbedVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple videoEmbeds */
  videoEmbeds: Array<VideoEmbed>;
  /** Retrieve multiple videoEmbeds using the Relay connection interface */
  videoEmbedsConnection: VideoEmbedConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBioArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BioWhereUniqueInput;
};


export type QueryBioVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBiosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BioWhereInput>;
};


export type QueryBiosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BioWhereInput>;
};


export type QueryConferenceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConferenceWhereUniqueInput;
};


export type QueryConferenceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConferenceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConferenceWhereInput>;
};


export type QueryConferencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConferenceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConferenceWhereInput>;
};


export type QueryEducationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EducationWhereUniqueInput;
};


export type QueryEducationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEducationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryExperienceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ExperienceWhereUniqueInput;
};


export type QueryExperienceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryInterviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: InterviewWhereUniqueInput;
};


export type QueryInterviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInterviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<InterviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<InterviewWhereInput>;
};


export type QueryInterviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<InterviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<InterviewWhereInput>;
};


export type QueryLanguageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LanguageWhereUniqueInput;
};


export type QueryLanguageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLanguagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LanguageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LanguageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPublicationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PublicationWhereUniqueInput;
};


export type QueryPublicationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PublicationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PublicationWhereInput>;
};


export type QueryPublicationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PublicationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PublicationWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySkillArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SkillWhereUniqueInput;
};


export type QuerySkillVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SkillWhereInput>;
};


export type QuerySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SkillWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVideoEmbedArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: VideoEmbedWhereUniqueInput;
};


export type QueryVideoEmbedVersionArgs = {
  where: VersionWhereInput;
};


export type QueryVideoEmbedsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VideoEmbedOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<VideoEmbedWhereInput>;
};


export type QueryVideoEmbedsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<VideoEmbedOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<VideoEmbedWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Bio | Conference | Education | Experience | Interview | Language | Publication | Skill | VideoEmbed;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Skill = Entity & Node & {
  __typename?: 'Skill';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Skill>;
  /** List of Skill versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  logo: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  yearsOfExperience: Scalars['Int']['output'];
};


export type SkillCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SkillDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SkillHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SkillLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SkillPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SkillScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SkillUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type SkillConnection = {
  __typename?: 'SkillConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SkillEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SkillCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo: AssetCreateOneInlineInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  yearsOfExperience: Scalars['Int']['input'];
};

export type SkillCreateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Create and connect multiple existing Skill documents */
  create?: InputMaybe<Array<SkillCreateInput>>;
};

export type SkillCreateOneInlineInput = {
  /** Connect one existing Skill document */
  connect?: InputMaybe<SkillWhereUniqueInput>;
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
  __typename?: 'SkillEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Skill;
};

/** Identifies documents */
export type SkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SkillWhereStageInput>;
  documentInStages_none?: InputMaybe<SkillWhereStageInput>;
  documentInStages_some?: InputMaybe<SkillWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  yearsOfExperience?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  yearsOfExperience_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  yearsOfExperience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  yearsOfExperience_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  yearsOfExperience_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum SkillOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearsOfExperienceAsc = 'yearsOfExperience_ASC',
  YearsOfExperienceDesc = 'yearsOfExperience_DESC'
}

export type SkillUpdateInput = {
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  yearsOfExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillUpdateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: InputMaybe<Array<SkillConnectInput>>;
  /** Create and connect multiple Skill documents */
  create?: InputMaybe<Array<SkillCreateInput>>;
  /** Delete multiple Skill documents */
  delete?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Disconnect multiple Skill documents */
  disconnect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Skill documents */
  set?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Update multiple Skill documents */
  update?: InputMaybe<Array<SkillUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Skill documents */
  upsert?: InputMaybe<Array<SkillUpsertWithNestedWhereUniqueInput>>;
};

export type SkillUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  yearsOfExperience?: InputMaybe<Scalars['Int']['input']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SkillUpdateManyInput;
  /** Document search */
  where: SkillWhereInput;
};

export type SkillUpdateOneInlineInput = {
  /** Connect existing Skill document */
  connect?: InputMaybe<SkillWhereUniqueInput>;
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
  /** Delete currently connected Skill document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Skill document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Skill document */
  update?: InputMaybe<SkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skill document */
  upsert?: InputMaybe<SkillUpsertWithNestedWhereUniqueInput>;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SkillUpdateInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

export type SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillCreateInput;
  /** Update document if it exists */
  update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SkillUpsertInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SkillWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SkillWhereStageInput>;
  documentInStages_none?: InputMaybe<SkillWhereStageInput>;
  documentInStages_some?: InputMaybe<SkillWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  yearsOfExperience?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  yearsOfExperience_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  yearsOfExperience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  yearsOfExperience_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  yearsOfExperience_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SkillWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SkillWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type VideoEmbed = Entity & Node & {
  __typename?: 'VideoEmbed';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<VideoEmbed>;
  /** List of VideoEmbed versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  iframeOptions?: Maybe<Scalars['Json']['output']>;
  link: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type VideoEmbedCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type VideoEmbedDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type VideoEmbedHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type VideoEmbedPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type VideoEmbedScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type VideoEmbedUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type VideoEmbedConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VideoEmbedWhereUniqueInput;
};

/** A connection to a list of items. */
export type VideoEmbedConnection = {
  __typename?: 'VideoEmbedConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VideoEmbedEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VideoEmbedCreateInput = {
  ckuqxi3pk1l0h01xu82t5a3d6?: InputMaybe<ConferenceCreateManyInlineInput>;
  ckuqxikqv1iyj01yvc51r6sq2?: InputMaybe<InterviewCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iframeOptions?: InputMaybe<Scalars['Json']['input']>;
  link: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoEmbedCreateManyInlineInput = {
  /** Connect multiple existing VideoEmbed documents */
  connect?: InputMaybe<Array<VideoEmbedWhereUniqueInput>>;
  /** Create and connect multiple existing VideoEmbed documents */
  create?: InputMaybe<Array<VideoEmbedCreateInput>>;
};

export type VideoEmbedCreateOneInlineInput = {
  /** Connect one existing VideoEmbed document */
  connect?: InputMaybe<VideoEmbedWhereUniqueInput>;
  /** Create and connect one VideoEmbed document */
  create?: InputMaybe<VideoEmbedCreateInput>;
};

/** An edge in a connection. */
export type VideoEmbedEdge = {
  __typename?: 'VideoEmbedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VideoEmbed;
};

/** Identifies documents */
export type VideoEmbedManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<VideoEmbedWhereStageInput>;
  documentInStages_none?: InputMaybe<VideoEmbedWhereStageInput>;
  documentInStages_some?: InputMaybe<VideoEmbedWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  iframeOptions_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  iframeOptions_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum VideoEmbedOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type VideoEmbedUpdateInput = {
  ckuqxi3pk1l0h01xu82t5a3d6?: InputMaybe<ConferenceUpdateManyInlineInput>;
  ckuqxikqv1iyj01yvc51r6sq2?: InputMaybe<InterviewUpdateManyInlineInput>;
  iframeOptions?: InputMaybe<Scalars['Json']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type VideoEmbedUpdateManyInlineInput = {
  /** Connect multiple existing VideoEmbed documents */
  connect?: InputMaybe<Array<VideoEmbedConnectInput>>;
  /** Create and connect multiple VideoEmbed documents */
  create?: InputMaybe<Array<VideoEmbedCreateInput>>;
  /** Delete multiple VideoEmbed documents */
  delete?: InputMaybe<Array<VideoEmbedWhereUniqueInput>>;
  /** Disconnect multiple VideoEmbed documents */
  disconnect?: InputMaybe<Array<VideoEmbedWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing VideoEmbed documents */
  set?: InputMaybe<Array<VideoEmbedWhereUniqueInput>>;
  /** Update multiple VideoEmbed documents */
  update?: InputMaybe<Array<VideoEmbedUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple VideoEmbed documents */
  upsert?: InputMaybe<Array<VideoEmbedUpsertWithNestedWhereUniqueInput>>;
};

export type VideoEmbedUpdateManyInput = {
  iframeOptions?: InputMaybe<Scalars['Json']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type VideoEmbedUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VideoEmbedUpdateManyInput;
  /** Document search */
  where: VideoEmbedWhereInput;
};

export type VideoEmbedUpdateOneInlineInput = {
  /** Connect existing VideoEmbed document */
  connect?: InputMaybe<VideoEmbedWhereUniqueInput>;
  /** Create and connect one VideoEmbed document */
  create?: InputMaybe<VideoEmbedCreateInput>;
  /** Delete currently connected VideoEmbed document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected VideoEmbed document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single VideoEmbed document */
  update?: InputMaybe<VideoEmbedUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VideoEmbed document */
  upsert?: InputMaybe<VideoEmbedUpsertWithNestedWhereUniqueInput>;
};

export type VideoEmbedUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VideoEmbedUpdateInput;
  /** Unique document search */
  where: VideoEmbedWhereUniqueInput;
};

export type VideoEmbedUpsertInput = {
  /** Create document if it didn't exist */
  create: VideoEmbedCreateInput;
  /** Update document if it exists */
  update: VideoEmbedUpdateInput;
};

export type VideoEmbedUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VideoEmbedUpsertInput;
  /** Unique document search */
  where: VideoEmbedWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type VideoEmbedWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type VideoEmbedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoEmbedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<VideoEmbedWhereStageInput>;
  documentInStages_none?: InputMaybe<VideoEmbedWhereStageInput>;
  documentInStages_some?: InputMaybe<VideoEmbedWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  iframeOptions_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  iframeOptions_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type VideoEmbedWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoEmbedWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoEmbedWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoEmbedWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<VideoEmbedWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References VideoEmbed record uniquely */
export type VideoEmbedWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type EducationQueryVariables = Exact<{ [key: string]: never; }>;


export type EducationQuery = { __typename?: 'Query', educations: Array<{ __typename?: 'Education', id: string, school: string, degree?: string | null, areaOfStudy: string, startDate: any, endDate?: any | null, description: { __typename?: 'RichText', html: string } }> };

export type ExperienceHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExperienceHistoryQuery = { __typename?: 'Query', experiences: Array<{ __typename?: 'Experience', id: string, company: string, position: string, startDate: any, endDate?: any | null, location?: string | null, locationIcon: string, logo: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null }, description: { __typename?: 'RichText', html: string } }> };

export type MediaQueryVariables = Exact<{ [key: string]: never; }>;


export type MediaQuery = { __typename?: 'Query', publications: Array<{ __typename: 'Publication', id: string, title: string, link: string, date: any }>, conferences: Array<{ __typename: 'Conference', id: string, title: string, topic: string, link: string, date: any, image?: { __typename?: 'Asset', url: string } | null, videoEmbed?: { __typename?: 'VideoEmbed', link: string, iframeOptions?: any | null } | null }>, interviews: Array<{ __typename: 'Interview', id: string, title: string, date: any, videoEmbed?: { __typename?: 'VideoEmbed', link: string, iframeOptions?: any | null } | null }> };

export type ProfileReadmeQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileReadmeQuery = { __typename?: 'Query', bios: Array<{ __typename?: 'Bio', fullName: string, headline: string, about: string, location: string, phoneNumber: string, email: string }>, experiences: Array<{ __typename?: 'Experience', id: string, company: string, position: string, startDate: any, endDate?: any | null, location?: string | null, locationIcon: string, description: { __typename?: 'RichText', html: string }, logo: { __typename?: 'Asset', url: string } }>, publications: Array<{ __typename?: 'Publication', id: string, title: string, link: string, date: any }>, conferences: Array<{ __typename?: 'Conference', id: string, title: string, topic: string, link: string, date: any, videoEmbed?: { __typename?: 'VideoEmbed', link: string } | null }>, interviews: Array<{ __typename?: 'Interview', id: string, title: string, date: any, videoEmbed?: { __typename?: 'VideoEmbed', link: string, iframeOptions?: any | null } | null }> };

export type ResumeQueryVariables = Exact<{ [key: string]: never; }>;


export type ResumeQuery = { __typename?: 'Query', bios: Array<{ __typename?: 'Bio', fullName: string, headline: string, about: string, location: string, phoneNumber: string, email: string }>, educations: Array<{ __typename?: 'Education', id: string, school: string, degree?: string | null, areaOfStudy: string, startDate: any, endDate?: any | null }>, skills: Array<{ __typename?: 'Skill', id: string, title: string, yearsOfExperience: number }>, experiences: Array<{ __typename?: 'Experience', id: string, company: string, position: string, startDate: any, endDate?: any | null, description: { __typename?: 'RichText', html: string } }>, publications: Array<{ __typename?: 'Publication', id: string, title: string, link: string, date: any }>, conferences: Array<{ __typename?: 'Conference', id: string, title: string, topic: string, link: string, date: any }> };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { __typename?: 'Query', bios: Array<{ __typename?: 'Bio', fullName: string, headline: string }> };

export type SkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, title: string, yearsOfExperience: number, logo: { __typename?: 'Asset', url: string } }> };


export const EducationDocument = gql`
    query Education {
  educations(orderBy: startDate_DESC) {
    id
    school
    degree
    description {
      html
    }
    areaOfStudy
    startDate
    endDate
  }
}
    `;
export const ExperienceHistoryDocument = gql`
    query ExperienceHistory {
  experiences(orderBy: startDate_DESC) {
    id
    logo {
      url(transformation: {image: {resize: {width: 64, height: 64, fit: clip}}})
      width
      height
    }
    company
    position
    startDate
    endDate
    description {
      html
    }
    location
    locationIcon
  }
}
    `;
export const MediaDocument = gql`
    query Media {
  publications {
    __typename
    id
    title
    link
    date
  }
  conferences {
    __typename
    id
    title
    topic
    link
    date
    image {
      url
    }
    videoEmbed {
      link
      iframeOptions
    }
  }
  interviews {
    __typename
    id
    title
    date
    videoEmbed {
      link
      iframeOptions
    }
  }
}
    `;
export const ProfileReadmeDocument = gql`
    query ProfileReadme {
  bios {
    fullName
    headline
    about
    location
    phoneNumber
    email
  }
  experiences(orderBy: startDate_DESC) {
    id
    company
    position
    startDate
    endDate
    location
    locationIcon
    description {
      html
    }
    logo {
      url(transformation: {image: {resize: {width: 200, height: 200, fit: clip}}})
    }
  }
  publications {
    id
    title
    link
    date
  }
  conferences {
    id
    title
    topic
    link
    date
    videoEmbed {
      link
    }
  }
  interviews {
    id
    title
    date
    videoEmbed {
      link
      iframeOptions
    }
  }
}
    `;
export const ResumeDocument = gql`
    query Resume {
  bios {
    fullName
    headline
    about
    location
    phoneNumber
    email
  }
  educations(orderBy: startDate_DESC) {
    id
    school
    degree
    areaOfStudy
    startDate
    endDate
  }
  skills(orderBy: yearsOfExperience_DESC) {
    id
    title
    yearsOfExperience
  }
  experiences(orderBy: startDate_DESC) {
    id
    company
    position
    startDate
    endDate
    description {
      html
    }
  }
  publications {
    id
    title
    link
    date
  }
  conferences {
    id
    title
    topic
    link
    date
  }
}
    `;
export const SeoDocument = gql`
    query Seo {
  bios {
    fullName
    headline
  }
}
    `;
export const SkillsDocument = gql`
    query Skills {
  skills(orderBy: yearsOfExperience_DESC) {
    id
    title
    yearsOfExperience
    logo {
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Education(variables?: EducationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EducationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EducationQuery>(EducationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Education', 'query', variables);
    },
    ExperienceHistory(variables?: ExperienceHistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExperienceHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExperienceHistoryQuery>(ExperienceHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExperienceHistory', 'query', variables);
    },
    Media(variables?: MediaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MediaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MediaQuery>(MediaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Media', 'query', variables);
    },
    ProfileReadme(variables?: ProfileReadmeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileReadmeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileReadmeQuery>(ProfileReadmeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProfileReadme', 'query', variables);
    },
    Resume(variables?: ResumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ResumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResumeQuery>(ResumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Resume', 'query', variables);
    },
    Seo(variables?: SeoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SeoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SeoQuery>(SeoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Seo', 'query', variables);
    },
    Skills(variables?: SkillsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SkillsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SkillsQuery>(SkillsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Skills', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;