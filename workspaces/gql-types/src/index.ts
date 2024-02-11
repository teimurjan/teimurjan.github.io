/* eslint-disable */

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  GatsbyImageData: any
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  GraphCMS_Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  GraphCMS_DateTime: any
  GraphCMS_Hex: any
  /** Raw JSON value */
  GraphCMS_Json: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  GraphCMS_Long: any
  GraphCMS_RGBAHue: any
  GraphCMS_RGBATransparency: any
  /** Slate-compatible RichText AST */
  GraphCMS_RichTextAST: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  lossless?: Maybe<Scalars['Boolean']>
  quality?: Maybe<Scalars['Int']>
  speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  ne?: Maybe<Scalars['Boolean']>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldSelector = {
  absolutePath?: Maybe<FieldSelectorEnum>
  accessTime?: Maybe<FieldSelectorEnum>
  atime?: Maybe<FieldSelectorEnum>
  atimeMs?: Maybe<FieldSelectorEnum>
  base?: Maybe<FieldSelectorEnum>
  birthTime?: Maybe<FieldSelectorEnum>
  birthtime?: Maybe<FieldSelectorEnum>
  birthtimeMs?: Maybe<FieldSelectorEnum>
  changeTime?: Maybe<FieldSelectorEnum>
  children?: Maybe<NodeFieldSelector>
  ctime?: Maybe<FieldSelectorEnum>
  ctimeMs?: Maybe<FieldSelectorEnum>
  dev?: Maybe<FieldSelectorEnum>
  dir?: Maybe<FieldSelectorEnum>
  ext?: Maybe<FieldSelectorEnum>
  extension?: Maybe<FieldSelectorEnum>
  gid?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  ino?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  mode?: Maybe<FieldSelectorEnum>
  modifiedTime?: Maybe<FieldSelectorEnum>
  mtime?: Maybe<FieldSelectorEnum>
  mtimeMs?: Maybe<FieldSelectorEnum>
  name?: Maybe<FieldSelectorEnum>
  nlink?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  prettySize?: Maybe<FieldSelectorEnum>
  rdev?: Maybe<FieldSelectorEnum>
  relativeDirectory?: Maybe<FieldSelectorEnum>
  relativePath?: Maybe<FieldSelectorEnum>
  root?: Maybe<FieldSelectorEnum>
  size?: Maybe<FieldSelectorEnum>
  sourceInstanceName?: Maybe<FieldSelectorEnum>
  uid?: Maybe<FieldSelectorEnum>
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectorySortInput = {
  absolutePath?: Maybe<SortOrderEnum>
  accessTime?: Maybe<SortOrderEnum>
  atime?: Maybe<SortOrderEnum>
  atimeMs?: Maybe<SortOrderEnum>
  base?: Maybe<SortOrderEnum>
  birthTime?: Maybe<SortOrderEnum>
  birthtime?: Maybe<SortOrderEnum>
  birthtimeMs?: Maybe<SortOrderEnum>
  changeTime?: Maybe<SortOrderEnum>
  children?: Maybe<NodeSortInput>
  ctime?: Maybe<SortOrderEnum>
  ctimeMs?: Maybe<SortOrderEnum>
  dev?: Maybe<SortOrderEnum>
  dir?: Maybe<SortOrderEnum>
  ext?: Maybe<SortOrderEnum>
  extension?: Maybe<SortOrderEnum>
  gid?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  ino?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  mode?: Maybe<SortOrderEnum>
  modifiedTime?: Maybe<SortOrderEnum>
  mtime?: Maybe<SortOrderEnum>
  mtimeMs?: Maybe<SortOrderEnum>
  name?: Maybe<SortOrderEnum>
  nlink?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  prettySize?: Maybe<SortOrderEnum>
  rdev?: Maybe<SortOrderEnum>
  relativeDirectory?: Maybe<SortOrderEnum>
  relativePath?: Maybe<SortOrderEnum>
  root?: Maybe<SortOrderEnum>
  size?: Maybe<SortOrderEnum>
  sourceInstanceName?: Maybe<SortOrderEnum>
  uid?: Maybe<SortOrderEnum>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
  shadow: Scalars['String']
}

export enum FieldSelectorEnum {
  SELECT = 'SELECT',
}

export type File = Node & {
  __typename?: 'File'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  changeTime: Scalars['Date']
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  children: Array<Node>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
  field: FileFieldSelector
}

export type FileConnectionGroupArgs = {
  field: FileFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldSelector = {
  absolutePath?: Maybe<FieldSelectorEnum>
  accessTime?: Maybe<FieldSelectorEnum>
  atime?: Maybe<FieldSelectorEnum>
  atimeMs?: Maybe<FieldSelectorEnum>
  base?: Maybe<FieldSelectorEnum>
  birthTime?: Maybe<FieldSelectorEnum>
  birthtime?: Maybe<FieldSelectorEnum>
  birthtimeMs?: Maybe<FieldSelectorEnum>
  blksize?: Maybe<FieldSelectorEnum>
  blocks?: Maybe<FieldSelectorEnum>
  changeTime?: Maybe<FieldSelectorEnum>
  childImageSharp?: Maybe<ImageSharpFieldSelector>
  children?: Maybe<NodeFieldSelector>
  childrenImageSharp?: Maybe<ImageSharpFieldSelector>
  ctime?: Maybe<FieldSelectorEnum>
  ctimeMs?: Maybe<FieldSelectorEnum>
  dev?: Maybe<FieldSelectorEnum>
  dir?: Maybe<FieldSelectorEnum>
  ext?: Maybe<FieldSelectorEnum>
  extension?: Maybe<FieldSelectorEnum>
  gid?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  ino?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  mode?: Maybe<FieldSelectorEnum>
  modifiedTime?: Maybe<FieldSelectorEnum>
  mtime?: Maybe<FieldSelectorEnum>
  mtimeMs?: Maybe<FieldSelectorEnum>
  name?: Maybe<FieldSelectorEnum>
  nlink?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  prettySize?: Maybe<FieldSelectorEnum>
  publicURL?: Maybe<FieldSelectorEnum>
  rdev?: Maybe<FieldSelectorEnum>
  relativeDirectory?: Maybe<FieldSelectorEnum>
  relativePath?: Maybe<FieldSelectorEnum>
  root?: Maybe<FieldSelectorEnum>
  size?: Maybe<FieldSelectorEnum>
  sourceInstanceName?: Maybe<FieldSelectorEnum>
  uid?: Maybe<FieldSelectorEnum>
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  children?: Maybe<NodeFilterListInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileSortInput = {
  absolutePath?: Maybe<SortOrderEnum>
  accessTime?: Maybe<SortOrderEnum>
  atime?: Maybe<SortOrderEnum>
  atimeMs?: Maybe<SortOrderEnum>
  base?: Maybe<SortOrderEnum>
  birthTime?: Maybe<SortOrderEnum>
  birthtime?: Maybe<SortOrderEnum>
  birthtimeMs?: Maybe<SortOrderEnum>
  blksize?: Maybe<SortOrderEnum>
  blocks?: Maybe<SortOrderEnum>
  changeTime?: Maybe<SortOrderEnum>
  childImageSharp?: Maybe<ImageSharpSortInput>
  children?: Maybe<NodeSortInput>
  childrenImageSharp?: Maybe<ImageSharpSortInput>
  ctime?: Maybe<SortOrderEnum>
  ctimeMs?: Maybe<SortOrderEnum>
  dev?: Maybe<SortOrderEnum>
  dir?: Maybe<SortOrderEnum>
  ext?: Maybe<SortOrderEnum>
  extension?: Maybe<SortOrderEnum>
  gid?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  ino?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  mode?: Maybe<SortOrderEnum>
  modifiedTime?: Maybe<SortOrderEnum>
  mtime?: Maybe<SortOrderEnum>
  mtimeMs?: Maybe<SortOrderEnum>
  name?: Maybe<SortOrderEnum>
  nlink?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  prettySize?: Maybe<SortOrderEnum>
  publicURL?: Maybe<SortOrderEnum>
  rdev?: Maybe<SortOrderEnum>
  relativeDirectory?: Maybe<SortOrderEnum>
  relativePath?: Maybe<SortOrderEnum>
  root?: Maybe<SortOrderEnum>
  size?: Maybe<SortOrderEnum>
  sourceInstanceName?: Maybe<SortOrderEnum>
  uid?: Maybe<SortOrderEnum>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type GatsbyImageDataQueryOperatorInput = {
  eq?: Maybe<Scalars['GatsbyImageData']>
  in?: Maybe<Array<Maybe<Scalars['GatsbyImageData']>>>
  ne?: Maybe<Scalars['GatsbyImageData']>
  nin?: Maybe<Array<Maybe<Scalars['GatsbyImageData']>>>
}

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export type GraphCms = {
  __typename?: 'GraphCMS'
  /** Retrieve a single asset */
  asset?: Maybe<GraphCms_Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<GraphCms_Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: GraphCms_AssetConnection
  /** Retrieve a single bio */
  bio?: Maybe<GraphCms_Bio>
  /** Retrieve document version */
  bioVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple bios */
  bios: Array<GraphCms_Bio>
  /** Retrieve multiple bios using the Relay connection interface */
  biosConnection: GraphCms_BioConnection
  /** Retrieve a single conference */
  conference?: Maybe<GraphCms_Conference>
  /** Retrieve document version */
  conferenceVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple conferences */
  conferences: Array<GraphCms_Conference>
  /** Retrieve multiple conferences using the Relay connection interface */
  conferencesConnection: GraphCms_ConferenceConnection
  /** Retrieve a single education */
  education?: Maybe<GraphCms_Education>
  /** Retrieve document version */
  educationVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple educations */
  educations: Array<GraphCms_Education>
  /** Retrieve multiple educations using the Relay connection interface */
  educationsConnection: GraphCms_EducationConnection
  /** Retrieve a single experience */
  experience?: Maybe<GraphCms_Experience>
  /** Retrieve document version */
  experienceVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple experiences */
  experiences: Array<GraphCms_Experience>
  /** Retrieve multiple experiences using the Relay connection interface */
  experiencesConnection: GraphCms_ExperienceConnection
  /** Retrieve a single interview */
  interview?: Maybe<GraphCms_Interview>
  /** Retrieve document version */
  interviewVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple interviews */
  interviews: Array<GraphCms_Interview>
  /** Retrieve multiple interviews using the Relay connection interface */
  interviewsConnection: GraphCms_InterviewConnection
  /** Fetches an object given its ID */
  node?: Maybe<GraphCms_Node>
  /** Retrieve a single publication */
  publication?: Maybe<GraphCms_Publication>
  /** Retrieve document version */
  publicationVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple publications */
  publications: Array<GraphCms_Publication>
  /** Retrieve multiple publications using the Relay connection interface */
  publicationsConnection: GraphCms_PublicationConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<GraphCms_ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<GraphCms_ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: GraphCms_ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<GraphCms_ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<GraphCms_ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: GraphCms_ScheduledReleaseConnection
  /** Retrieve a single skill */
  skill?: Maybe<GraphCms_Skill>
  /** Retrieve document version */
  skillVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple skills */
  skills: Array<GraphCms_Skill>
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: GraphCms_SkillConnection
  /** Retrieve a single user */
  user?: Maybe<GraphCms_User>
  /** Retrieve multiple users */
  users: Array<GraphCms_User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: GraphCms_UserConnection
  /** Retrieve a single videoEmbed */
  videoEmbed?: Maybe<GraphCms_VideoEmbed>
  /** Retrieve document version */
  videoEmbedVersion?: Maybe<GraphCms_DocumentVersion>
  /** Retrieve multiple videoEmbeds */
  videoEmbeds: Array<GraphCms_VideoEmbed>
  /** Retrieve multiple videoEmbeds using the Relay connection interface */
  videoEmbedsConnection: GraphCms_VideoEmbedConnection
}

export type GraphCmsAssetArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_AssetWhereUniqueInput
}

export type GraphCmsAssetVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsAssetsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_AssetWhereInput>
}

export type GraphCmsAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_AssetWhereInput>
}

export type GraphCmsBioArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_BioWhereUniqueInput
}

export type GraphCmsBioVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsBiosArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_BioOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_BioWhereInput>
}

export type GraphCmsBiosConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_BioOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_BioWhereInput>
}

export type GraphCmsConferenceArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_ConferenceWhereUniqueInput
}

export type GraphCmsConferenceVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsConferencesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ConferenceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ConferenceWhereInput>
}

export type GraphCmsConferencesConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ConferenceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ConferenceWhereInput>
}

export type GraphCmsEducationArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_EducationWhereUniqueInput
}

export type GraphCmsEducationVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsEducationsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_EducationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_EducationWhereInput>
}

export type GraphCmsEducationsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_EducationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_EducationWhereInput>
}

export type GraphCmsExperienceArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_ExperienceWhereUniqueInput
}

export type GraphCmsExperienceVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsExperiencesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ExperienceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ExperienceWhereInput>
}

export type GraphCmsExperiencesConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ExperienceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ExperienceWhereInput>
}

export type GraphCmsInterviewArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_InterviewWhereUniqueInput
}

export type GraphCmsInterviewVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsInterviewsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_InterviewOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_InterviewWhereInput>
}

export type GraphCmsInterviewsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_InterviewOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_InterviewWhereInput>
}

export type GraphCmsNodeArgs = {
  id: Scalars['ID']
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
}

export type GraphCmsPublicationArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_PublicationWhereUniqueInput
}

export type GraphCmsPublicationVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsPublicationsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_PublicationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_PublicationWhereInput>
}

export type GraphCmsPublicationsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_PublicationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_PublicationWhereInput>
}

export type GraphCmsScheduledOperationArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_ScheduledOperationWhereUniqueInput
}

export type GraphCmsScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ScheduledOperationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCmsScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ScheduledOperationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCmsScheduledReleaseArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_ScheduledReleaseWhereUniqueInput
}

export type GraphCmsScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ScheduledReleaseOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ScheduledReleaseWhereInput>
}

export type GraphCmsScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_ScheduledReleaseOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_ScheduledReleaseWhereInput>
}

export type GraphCmsSkillArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_SkillWhereUniqueInput
}

export type GraphCmsSkillVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsSkillsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_SkillOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_SkillWhereInput>
}

export type GraphCmsSkillsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_SkillOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_SkillWhereInput>
}

export type GraphCmsUserArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_UserWhereUniqueInput
}

export type GraphCmsUsersArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_UserWhereInput>
}

export type GraphCmsUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_UserWhereInput>
}

export type GraphCmsVideoEmbedArgs = {
  locales?: Array<GraphCms_Locale>
  stage?: GraphCms_Stage
  where: GraphCms_VideoEmbedWhereUniqueInput
}

export type GraphCmsVideoEmbedVersionArgs = {
  where: GraphCms_VersionWhereInput
}

export type GraphCmsVideoEmbedsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_VideoEmbedOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_VideoEmbedWhereInput>
}

export type GraphCmsVideoEmbedsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<GraphCms_Locale>
  orderBy?: Maybe<GraphCms_VideoEmbedOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: GraphCms_Stage
  where?: Maybe<GraphCms_VideoEmbedWhereInput>
}

export type GraphCms_Aggregate = {
  __typename?: 'GraphCMS_Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type GraphCms_Asset = GraphCms_Node & {
  __typename?: 'GraphCMS_Asset'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageConference: Array<GraphCms_Conference>
  /** System Locale field */
  locale: GraphCms_Locale
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Asset>
  logoExperience: Array<GraphCms_Experience>
  logoSkill: Array<GraphCms_Skill>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type GraphCms_AssetCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation
}

/** Asset system model */
export type GraphCms_AssetCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Asset system model */
export type GraphCms_AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

/** Asset system model */
export type GraphCms_AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

/** Asset system model */
export type GraphCms_AssetImageConferenceArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  orderBy?: Maybe<GraphCms_ConferenceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ConferenceWhereInput>
}

/** Asset system model */
export type GraphCms_AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<GraphCms_Locale>
}

/** Asset system model */
export type GraphCms_AssetLogoExperienceArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  orderBy?: Maybe<GraphCms_ExperienceOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ExperienceWhereInput>
}

/** Asset system model */
export type GraphCms_AssetLogoSkillArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  orderBy?: Maybe<GraphCms_SkillOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_SkillWhereInput>
}

/** Asset system model */
export type GraphCms_AssetPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation
}

/** Asset system model */
export type GraphCms_AssetPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Asset system model */
export type GraphCms_AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

/** Asset system model */
export type GraphCms_AssetUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation
}

/** Asset system model */
export type GraphCms_AssetUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Asset system model */
export type GraphCms_AssetUrlArgs = {
  transformation?: Maybe<GraphCms_AssetTransformationInput>
}

export type GraphCms_AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_AssetConnection = {
  __typename?: 'GraphCMS_AssetConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_AssetCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: Maybe<Scalars['Float']>
  imageConference?: Maybe<GraphCms_ConferenceCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<GraphCms_AssetCreateLocalizationsInput>
  logoExperience?: Maybe<GraphCms_ExperienceCreateManyInlineInput>
  logoSkill?: Maybe<GraphCms_SkillCreateManyInlineInput>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_AssetCreateLocalizationDataInput
  locale: GraphCms_Locale
}

export type GraphCms_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>
}

export type GraphCms_AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<GraphCms_AssetCreateInput>>
}

export type GraphCms_AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: Maybe<GraphCms_AssetCreateInput>
}

/** An edge in a connection. */
export type GraphCms_AssetEdge = {
  __typename?: 'GraphCMS_AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Asset
}

/** Identifies documents */
export type GraphCms_AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_AssetWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_AssetWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_AssetWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  imageConference_every?: Maybe<GraphCms_ConferenceWhereInput>
  imageConference_none?: Maybe<GraphCms_ConferenceWhereInput>
  imageConference_some?: Maybe<GraphCms_ConferenceWhereInput>
  logoExperience_every?: Maybe<GraphCms_ExperienceWhereInput>
  logoExperience_none?: Maybe<GraphCms_ExperienceWhereInput>
  logoExperience_some?: Maybe<GraphCms_ExperienceWhereInput>
  logoSkill_every?: Maybe<GraphCms_SkillWhereInput>
  logoSkill_none?: Maybe<GraphCms_SkillWhereInput>
  logoSkill_some?: Maybe<GraphCms_SkillWhereInput>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_AssetOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  fileName_ASC = 'fileName_ASC',
  fileName_DESC = 'fileName_DESC',
  handle_ASC = 'handle_ASC',
  handle_DESC = 'handle_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  width_ASC = 'width_ASC',
  width_DESC = 'width_DESC',
}

/** Transformations for Assets */
export type GraphCms_AssetTransformationInput = {
  document?: Maybe<GraphCms_DocumentTransformationInput>
  image?: Maybe<GraphCms_ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

export type GraphCms_AssetUpdateInput = {
  fileName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  imageConference?: Maybe<GraphCms_ConferenceUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: Maybe<GraphCms_AssetUpdateLocalizationsInput>
  logoExperience?: Maybe<GraphCms_ExperienceUpdateManyInlineInput>
  logoSkill?: Maybe<GraphCms_SkillUpdateManyInlineInput>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetUpdateLocalizationInput = {
  data: GraphCms_AssetUpdateLocalizationDataInput
  locale: GraphCms_Locale
}

export type GraphCms_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<GraphCms_Locale>>
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AssetUpdateLocalizationInput>>
  upsert?: Maybe<Array<GraphCms_AssetUpsertLocalizationInput>>
}

export type GraphCms_AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<GraphCms_AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<GraphCms_AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<GraphCms_AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: Maybe<Array<GraphCms_AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<GraphCms_AssetUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: Maybe<GraphCms_AssetUpdateManyLocalizationsInput>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type GraphCms_AssetUpdateManyLocalizationInput = {
  data: GraphCms_AssetUpdateManyLocalizationDataInput
  locale: GraphCms_Locale
}

export type GraphCms_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<GraphCms_AssetUpdateManyLocalizationInput>>
}

export type GraphCms_AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_AssetUpdateManyInput
  /** Document search */
  where: GraphCms_AssetWhereInput
}

export type GraphCms_AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: Maybe<GraphCms_AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: Maybe<GraphCms_AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: Maybe<GraphCms_AssetUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_AssetUpdateInput
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput
}

export type GraphCms_AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_AssetCreateInput
  /** Update document if it exists */
  update: GraphCms_AssetUpdateInput
}

export type GraphCms_AssetUpsertLocalizationInput = {
  create: GraphCms_AssetCreateLocalizationDataInput
  locale: GraphCms_Locale
  update: GraphCms_AssetUpdateLocalizationDataInput
}

export type GraphCms_AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_AssetUpsertInput
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_AssetWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_AssetWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_AssetWhereStageInput>
  fileName?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  imageConference_every?: Maybe<GraphCms_ConferenceWhereInput>
  imageConference_none?: Maybe<GraphCms_ConferenceWhereInput>
  imageConference_some?: Maybe<GraphCms_ConferenceWhereInput>
  logoExperience_every?: Maybe<GraphCms_ExperienceWhereInput>
  logoExperience_none?: Maybe<GraphCms_ExperienceWhereInput>
  logoExperience_some?: Maybe<GraphCms_ExperienceWhereInput>
  logoSkill_every?: Maybe<GraphCms_SkillWhereInput>
  logoSkill_none?: Maybe<GraphCms_SkillWhereInput>
  logoSkill_some?: Maybe<GraphCms_SkillWhereInput>
  mimeType?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  size?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  width?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Asset record uniquely */
export type GraphCms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_BatchPayload = {
  __typename?: 'GraphCMS_BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long']
}

export type GraphCms_Bio = GraphCms_Node & {
  __typename?: 'GraphCMS_Bio'
  about: Scalars['String']
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Bio>
  email: Scalars['String']
  fullName: Scalars['String']
  headline: Scalars['String']
  /** List of Bio versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  location: Scalars['String']
  phoneNumber: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_BioCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_BioDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_BioHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_BioPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_BioScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_BioUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_BioConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_BioWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_BioConnection = {
  __typename?: 'GraphCMS_BioConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_BioEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_BioCreateInput = {
  about: Scalars['String']
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  email: Scalars['String']
  fullName: Scalars['String']
  headline: Scalars['String']
  location: Scalars['String']
  phoneNumber: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_BioCreateManyInlineInput = {
  /** Connect multiple existing Bio documents */
  connect?: Maybe<Array<GraphCms_BioWhereUniqueInput>>
  /** Create and connect multiple existing Bio documents */
  create?: Maybe<Array<GraphCms_BioCreateInput>>
}

export type GraphCms_BioCreateOneInlineInput = {
  /** Connect one existing Bio document */
  connect?: Maybe<GraphCms_BioWhereUniqueInput>
  /** Create and connect one Bio document */
  create?: Maybe<GraphCms_BioCreateInput>
}

/** An edge in a connection. */
export type GraphCms_BioEdge = {
  __typename?: 'GraphCMS_BioEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Bio
}

/** Identifies documents */
export type GraphCms_BioManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  about_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_BioWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_BioWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_BioWhereStageInput>
  email?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fullName_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fullName_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fullName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fullName_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fullName_starts_with?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  location?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  phoneNumber_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  phoneNumber_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  phoneNumber_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  phoneNumber_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_BioOrderByInput {
  about_ASC = 'about_ASC',
  about_DESC = 'about_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  fullName_ASC = 'fullName_ASC',
  fullName_DESC = 'fullName_DESC',
  headline_ASC = 'headline_ASC',
  headline_DESC = 'headline_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  location_ASC = 'location_ASC',
  location_DESC = 'location_DESC',
  phoneNumber_ASC = 'phoneNumber_ASC',
  phoneNumber_DESC = 'phoneNumber_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_BioUpdateInput = {
  about?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
}

export type GraphCms_BioUpdateManyInlineInput = {
  /** Connect multiple existing Bio documents */
  connect?: Maybe<Array<GraphCms_BioConnectInput>>
  /** Create and connect multiple Bio documents */
  create?: Maybe<Array<GraphCms_BioCreateInput>>
  /** Delete multiple Bio documents */
  delete?: Maybe<Array<GraphCms_BioWhereUniqueInput>>
  /** Disconnect multiple Bio documents */
  disconnect?: Maybe<Array<GraphCms_BioWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Bio documents */
  set?: Maybe<Array<GraphCms_BioWhereUniqueInput>>
  /** Update multiple Bio documents */
  update?: Maybe<Array<GraphCms_BioUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Bio documents */
  upsert?: Maybe<Array<GraphCms_BioUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_BioUpdateManyInput = {
  about?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
}

export type GraphCms_BioUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_BioUpdateManyInput
  /** Document search */
  where: GraphCms_BioWhereInput
}

export type GraphCms_BioUpdateOneInlineInput = {
  /** Connect existing Bio document */
  connect?: Maybe<GraphCms_BioWhereUniqueInput>
  /** Create and connect one Bio document */
  create?: Maybe<GraphCms_BioCreateInput>
  /** Delete currently connected Bio document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Bio document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Bio document */
  update?: Maybe<GraphCms_BioUpdateWithNestedWhereUniqueInput>
  /** Upsert single Bio document */
  upsert?: Maybe<GraphCms_BioUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_BioUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_BioUpdateInput
  /** Unique document search */
  where: GraphCms_BioWhereUniqueInput
}

export type GraphCms_BioUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_BioCreateInput
  /** Update document if it exists */
  update: GraphCms_BioUpdateInput
}

export type GraphCms_BioUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_BioUpsertInput
  /** Unique document search */
  where: GraphCms_BioWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_BioWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_BioWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BioWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  about?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  about_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_BioWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_BioWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_BioWhereStageInput>
  email?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fullName_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fullName_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fullName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fullName_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fullName_starts_with?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  headline_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  headline_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  headline_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  headline_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  headline_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  location?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  phoneNumber_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  phoneNumber_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  phoneNumber_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  phoneNumber_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_BioWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_BioWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_BioWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_BioWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_BioWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Bio record uniquely */
export type GraphCms_BioWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type GraphCms_Color = {
  __typename?: 'GraphCMS_Color'
  css: Scalars['String']
  hex: Scalars['GraphCMS_Hex']
  rgba: GraphCms_Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type GraphCms_ColorInput = {
  hex?: Maybe<Scalars['GraphCMS_Hex']>
  rgba?: Maybe<GraphCms_RgbaInput>
}

export type GraphCms_Conference = GraphCms_Node & {
  __typename?: 'GraphCMS_Conference'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  date: Scalars['GraphCMS_Date']
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Conference>
  /** List of Conference versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  image?: Maybe<GraphCms_Asset>
  link: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  title: Scalars['String']
  topic: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
  videoEmbed?: Maybe<GraphCms_VideoEmbed>
}

export type GraphCms_ConferenceCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_ConferenceHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_ConferenceImageArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferencePublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_ConferenceUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceVideoEmbedArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_ConferenceWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_ConferenceConnection = {
  __typename?: 'GraphCMS_ConferenceConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_ConferenceEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_ConferenceCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  date: Scalars['GraphCMS_Date']
  image?: Maybe<GraphCms_AssetCreateOneInlineInput>
  link: Scalars['String']
  title: Scalars['String']
  topic: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  videoEmbed?: Maybe<GraphCms_VideoEmbedCreateOneInlineInput>
}

export type GraphCms_ConferenceCreateManyInlineInput = {
  /** Connect multiple existing Conference documents */
  connect?: Maybe<Array<GraphCms_ConferenceWhereUniqueInput>>
  /** Create and connect multiple existing Conference documents */
  create?: Maybe<Array<GraphCms_ConferenceCreateInput>>
}

export type GraphCms_ConferenceCreateOneInlineInput = {
  /** Connect one existing Conference document */
  connect?: Maybe<GraphCms_ConferenceWhereUniqueInput>
  /** Create and connect one Conference document */
  create?: Maybe<GraphCms_ConferenceCreateInput>
}

/** An edge in a connection. */
export type GraphCms_ConferenceEdge = {
  __typename?: 'GraphCMS_ConferenceEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Conference
}

/** Identifies documents */
export type GraphCms_ConferenceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_ConferenceWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_ConferenceWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_ConferenceWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  image?: Maybe<GraphCms_AssetWhereInput>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  topic?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  topic_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  topic_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  topic_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  topic_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  topic_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  topic_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  topic_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  topic_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
}

export enum GraphCms_ConferenceOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  link_ASC = 'link_ASC',
  link_DESC = 'link_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  topic_ASC = 'topic_ASC',
  topic_DESC = 'topic_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_ConferenceUpdateInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  image?: Maybe<GraphCms_AssetUpdateOneInlineInput>
  link?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  topic?: Maybe<Scalars['String']>
  videoEmbed?: Maybe<GraphCms_VideoEmbedUpdateOneInlineInput>
}

export type GraphCms_ConferenceUpdateManyInlineInput = {
  /** Connect multiple existing Conference documents */
  connect?: Maybe<Array<GraphCms_ConferenceConnectInput>>
  /** Create and connect multiple Conference documents */
  create?: Maybe<Array<GraphCms_ConferenceCreateInput>>
  /** Delete multiple Conference documents */
  delete?: Maybe<Array<GraphCms_ConferenceWhereUniqueInput>>
  /** Disconnect multiple Conference documents */
  disconnect?: Maybe<Array<GraphCms_ConferenceWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Conference documents */
  set?: Maybe<Array<GraphCms_ConferenceWhereUniqueInput>>
  /** Update multiple Conference documents */
  update?: Maybe<Array<GraphCms_ConferenceUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Conference documents */
  upsert?: Maybe<Array<GraphCms_ConferenceUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_ConferenceUpdateManyInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  link?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  topic?: Maybe<Scalars['String']>
}

export type GraphCms_ConferenceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_ConferenceUpdateManyInput
  /** Document search */
  where: GraphCms_ConferenceWhereInput
}

export type GraphCms_ConferenceUpdateOneInlineInput = {
  /** Connect existing Conference document */
  connect?: Maybe<GraphCms_ConferenceWhereUniqueInput>
  /** Create and connect one Conference document */
  create?: Maybe<GraphCms_ConferenceCreateInput>
  /** Delete currently connected Conference document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Conference document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Conference document */
  update?: Maybe<GraphCms_ConferenceUpdateWithNestedWhereUniqueInput>
  /** Upsert single Conference document */
  upsert?: Maybe<GraphCms_ConferenceUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_ConferenceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_ConferenceUpdateInput
  /** Unique document search */
  where: GraphCms_ConferenceWhereUniqueInput
}

export type GraphCms_ConferenceUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ConferenceCreateInput
  /** Update document if it exists */
  update: GraphCms_ConferenceUpdateInput
}

export type GraphCms_ConferenceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_ConferenceUpsertInput
  /** Unique document search */
  where: GraphCms_ConferenceWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_ConferenceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_ConferenceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ConferenceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_ConferenceWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_ConferenceWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_ConferenceWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  image?: Maybe<GraphCms_AssetWhereInput>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  topic?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  topic_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  topic_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  topic_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  topic_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  topic_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  topic_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  topic_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  topic_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_ConferenceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ConferenceWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ConferenceWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ConferenceWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_ConferenceWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Conference record uniquely */
export type GraphCms_ConferenceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>
}

export enum GraphCms_DocumentFileTypes {
  doc = 'doc',
  docx = 'docx',
  html = 'html',
  jpg = 'jpg',
  odp = 'odp',
  ods = 'ods',
  odt = 'odt',
  pdf = 'pdf',
  png = 'png',
  ppt = 'ppt',
  pptx = 'pptx',
  svg = 'svg',
  txt = 'txt',
  webp = 'webp',
  xls = 'xls',
  xlsx = 'xlsx',
}

export type GraphCms_DocumentOutputInput = {
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
  format?: Maybe<GraphCms_DocumentFileTypes>
}

/** Transformations for Documents */
export type GraphCms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<GraphCms_DocumentOutputInput>
}

export type GraphCms_DocumentVersion = {
  __typename?: 'GraphCMS_DocumentVersion'
  createdAt: Scalars['GraphCMS_DateTime']
  data?: Maybe<Scalars['GraphCMS_Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: GraphCms_Stage
}

export type GraphCms_Education = GraphCms_Node & {
  __typename?: 'GraphCMS_Education'
  areaOfStudy: Scalars['String']
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  degree?: Maybe<Scalars['String']>
  description: GraphCms_RichText
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Education>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** List of Education versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  school: Scalars['String']
  /** System stage field */
  stage: GraphCms_Stage
  startDate: Scalars['GraphCMS_Date']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_EducationCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_EducationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_EducationHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_EducationPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_EducationScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_EducationUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_EducationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_EducationWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_EducationConnection = {
  __typename?: 'GraphCMS_EducationConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_EducationEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_EducationCreateInput = {
  areaOfStudy: Scalars['String']
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  degree?: Maybe<Scalars['String']>
  description: Scalars['GraphCMS_RichTextAST']
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  school: Scalars['String']
  startDate: Scalars['GraphCMS_Date']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_EducationCreateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: Maybe<Array<GraphCms_EducationWhereUniqueInput>>
  /** Create and connect multiple existing Education documents */
  create?: Maybe<Array<GraphCms_EducationCreateInput>>
}

export type GraphCms_EducationCreateOneInlineInput = {
  /** Connect one existing Education document */
  connect?: Maybe<GraphCms_EducationWhereUniqueInput>
  /** Create and connect one Education document */
  create?: Maybe<GraphCms_EducationCreateInput>
}

/** An edge in a connection. */
export type GraphCms_EducationEdge = {
  __typename?: 'GraphCMS_EducationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Education
}

/** Identifies documents */
export type GraphCms_EducationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  areaOfStudy?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  areaOfStudy_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  areaOfStudy_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  areaOfStudy_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  areaOfStudy_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  areaOfStudy_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  areaOfStudy_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  degree?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  degree_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>
  documentInStages_every?: Maybe<GraphCms_EducationWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_EducationWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_EducationWhereStageInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  school?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  school_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  school_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  school_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  school_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  school_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  school_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  school_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  school_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  school_starts_with?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_EducationOrderByInput {
  areaOfStudy_ASC = 'areaOfStudy_ASC',
  areaOfStudy_DESC = 'areaOfStudy_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  degree_ASC = 'degree_ASC',
  degree_DESC = 'degree_DESC',
  endDate_ASC = 'endDate_ASC',
  endDate_DESC = 'endDate_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  school_ASC = 'school_ASC',
  school_DESC = 'school_DESC',
  startDate_ASC = 'startDate_ASC',
  startDate_DESC = 'startDate_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_EducationUpdateInput = {
  areaOfStudy?: Maybe<Scalars['String']>
  degree?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  school?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
}

export type GraphCms_EducationUpdateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: Maybe<Array<GraphCms_EducationConnectInput>>
  /** Create and connect multiple Education documents */
  create?: Maybe<Array<GraphCms_EducationCreateInput>>
  /** Delete multiple Education documents */
  delete?: Maybe<Array<GraphCms_EducationWhereUniqueInput>>
  /** Disconnect multiple Education documents */
  disconnect?: Maybe<Array<GraphCms_EducationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Education documents */
  set?: Maybe<Array<GraphCms_EducationWhereUniqueInput>>
  /** Update multiple Education documents */
  update?: Maybe<Array<GraphCms_EducationUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Education documents */
  upsert?: Maybe<Array<GraphCms_EducationUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_EducationUpdateManyInput = {
  areaOfStudy?: Maybe<Scalars['String']>
  degree?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  school?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
}

export type GraphCms_EducationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_EducationUpdateManyInput
  /** Document search */
  where: GraphCms_EducationWhereInput
}

export type GraphCms_EducationUpdateOneInlineInput = {
  /** Connect existing Education document */
  connect?: Maybe<GraphCms_EducationWhereUniqueInput>
  /** Create and connect one Education document */
  create?: Maybe<GraphCms_EducationCreateInput>
  /** Delete currently connected Education document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Education document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Education document */
  update?: Maybe<GraphCms_EducationUpdateWithNestedWhereUniqueInput>
  /** Upsert single Education document */
  upsert?: Maybe<GraphCms_EducationUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_EducationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_EducationUpdateInput
  /** Unique document search */
  where: GraphCms_EducationWhereUniqueInput
}

export type GraphCms_EducationUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_EducationCreateInput
  /** Update document if it exists */
  update: GraphCms_EducationUpdateInput
}

export type GraphCms_EducationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_EducationUpsertInput
  /** Unique document search */
  where: GraphCms_EducationWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_EducationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_EducationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EducationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  areaOfStudy?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  areaOfStudy_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  areaOfStudy_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  areaOfStudy_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  areaOfStudy_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  areaOfStudy_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  areaOfStudy_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  degree?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  degree_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>
  documentInStages_every?: Maybe<GraphCms_EducationWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_EducationWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_EducationWhereStageInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  school?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  school_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  school_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  school_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  school_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  school_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  school_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  school_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  school_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  school_starts_with?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_EducationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_EducationWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_EducationWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_EducationWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_EducationWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Education record uniquely */
export type GraphCms_EducationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_Experience = GraphCms_Node & {
  __typename?: 'GraphCMS_Experience'
  company: Scalars['String']
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  description: GraphCms_RichText
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Experience>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** List of Experience versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  location?: Maybe<Scalars['String']>
  locationIcon: Scalars['String']
  logo: GraphCms_Asset
  position: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  startDate: Scalars['GraphCMS_Date']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_ExperienceCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperienceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_ExperienceHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_ExperienceLogoArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperiencePublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperienceScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_ExperienceUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperienceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_ExperienceWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_ExperienceConnection = {
  __typename?: 'GraphCMS_ExperienceConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_ExperienceEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_ExperienceCreateInput = {
  company: Scalars['String']
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  description: Scalars['GraphCMS_RichTextAST']
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  location?: Maybe<Scalars['String']>
  locationIcon: Scalars['String']
  logo: GraphCms_AssetCreateOneInlineInput
  position: Scalars['String']
  startDate: Scalars['GraphCMS_Date']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_ExperienceCreateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: Maybe<Array<GraphCms_ExperienceWhereUniqueInput>>
  /** Create and connect multiple existing Experience documents */
  create?: Maybe<Array<GraphCms_ExperienceCreateInput>>
}

export type GraphCms_ExperienceCreateOneInlineInput = {
  /** Connect one existing Experience document */
  connect?: Maybe<GraphCms_ExperienceWhereUniqueInput>
  /** Create and connect one Experience document */
  create?: Maybe<GraphCms_ExperienceCreateInput>
}

/** An edge in a connection. */
export type GraphCms_ExperienceEdge = {
  __typename?: 'GraphCMS_ExperienceEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Experience
}

/** Identifies documents */
export type GraphCms_ExperienceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  company_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  company_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  company_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  company_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  company_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  company_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_ExperienceWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_ExperienceWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_ExperienceWhereStageInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  location?: Maybe<Scalars['String']>
  locationIcon?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  locationIcon_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  locationIcon_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  locationIcon_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  locationIcon_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  locationIcon_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  locationIcon_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  locationIcon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  locationIcon_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  locationIcon_starts_with?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  position?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  position_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  position_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_ExperienceOrderByInput {
  company_ASC = 'company_ASC',
  company_DESC = 'company_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  endDate_ASC = 'endDate_ASC',
  endDate_DESC = 'endDate_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  locationIcon_ASC = 'locationIcon_ASC',
  locationIcon_DESC = 'locationIcon_DESC',
  location_ASC = 'location_ASC',
  location_DESC = 'location_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  startDate_ASC = 'startDate_ASC',
  startDate_DESC = 'startDate_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_ExperienceUpdateInput = {
  company?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  location?: Maybe<Scalars['String']>
  locationIcon?: Maybe<Scalars['String']>
  logo?: Maybe<GraphCms_AssetUpdateOneInlineInput>
  position?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
}

export type GraphCms_ExperienceUpdateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: Maybe<Array<GraphCms_ExperienceConnectInput>>
  /** Create and connect multiple Experience documents */
  create?: Maybe<Array<GraphCms_ExperienceCreateInput>>
  /** Delete multiple Experience documents */
  delete?: Maybe<Array<GraphCms_ExperienceWhereUniqueInput>>
  /** Disconnect multiple Experience documents */
  disconnect?: Maybe<Array<GraphCms_ExperienceWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Experience documents */
  set?: Maybe<Array<GraphCms_ExperienceWhereUniqueInput>>
  /** Update multiple Experience documents */
  update?: Maybe<Array<GraphCms_ExperienceUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Experience documents */
  upsert?: Maybe<Array<GraphCms_ExperienceUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_ExperienceUpdateManyInput = {
  company?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['GraphCMS_RichTextAST']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  location?: Maybe<Scalars['String']>
  locationIcon?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
}

export type GraphCms_ExperienceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_ExperienceUpdateManyInput
  /** Document search */
  where: GraphCms_ExperienceWhereInput
}

export type GraphCms_ExperienceUpdateOneInlineInput = {
  /** Connect existing Experience document */
  connect?: Maybe<GraphCms_ExperienceWhereUniqueInput>
  /** Create and connect one Experience document */
  create?: Maybe<GraphCms_ExperienceCreateInput>
  /** Delete currently connected Experience document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Experience document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Experience document */
  update?: Maybe<GraphCms_ExperienceUpdateWithNestedWhereUniqueInput>
  /** Upsert single Experience document */
  upsert?: Maybe<GraphCms_ExperienceUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_ExperienceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_ExperienceUpdateInput
  /** Unique document search */
  where: GraphCms_ExperienceWhereUniqueInput
}

export type GraphCms_ExperienceUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ExperienceCreateInput
  /** Update document if it exists */
  update: GraphCms_ExperienceUpdateInput
}

export type GraphCms_ExperienceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_ExperienceUpsertInput
  /** Unique document search */
  where: GraphCms_ExperienceWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_ExperienceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_ExperienceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ExperienceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  company_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  company_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  company_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  company_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  company_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  company_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_ExperienceWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_ExperienceWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_ExperienceWhereStageInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  location?: Maybe<Scalars['String']>
  locationIcon?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  locationIcon_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  locationIcon_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  locationIcon_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  locationIcon_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  locationIcon_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  locationIcon_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  locationIcon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  locationIcon_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  locationIcon_starts_with?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars['String']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  position?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  position_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  position_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  position_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  position_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_ExperienceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ExperienceWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ExperienceWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ExperienceWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_ExperienceWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Experience record uniquely */
export type GraphCms_ExperienceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export enum GraphCms_ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  scale = 'scale',
}

export type GraphCms_ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<GraphCms_ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
}

/** Transformations for Images */
export type GraphCms_ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<GraphCms_ImageResizeInput>
}

export type GraphCms_Interview = GraphCms_Node & {
  __typename?: 'GraphCMS_Interview'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  date: Scalars['GraphCMS_Date']
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Interview>
  /** List of Interview versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
  videoEmbed?: Maybe<GraphCms_VideoEmbed>
}

export type GraphCms_InterviewCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_InterviewHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_InterviewPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_InterviewUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewVideoEmbedArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_InterviewWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_InterviewConnection = {
  __typename?: 'GraphCMS_InterviewConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_InterviewEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_InterviewCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  date: Scalars['GraphCMS_Date']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  videoEmbed?: Maybe<GraphCms_VideoEmbedCreateOneInlineInput>
}

export type GraphCms_InterviewCreateManyInlineInput = {
  /** Connect multiple existing Interview documents */
  connect?: Maybe<Array<GraphCms_InterviewWhereUniqueInput>>
  /** Create and connect multiple existing Interview documents */
  create?: Maybe<Array<GraphCms_InterviewCreateInput>>
}

export type GraphCms_InterviewCreateOneInlineInput = {
  /** Connect one existing Interview document */
  connect?: Maybe<GraphCms_InterviewWhereUniqueInput>
  /** Create and connect one Interview document */
  create?: Maybe<GraphCms_InterviewCreateInput>
}

/** An edge in a connection. */
export type GraphCms_InterviewEdge = {
  __typename?: 'GraphCMS_InterviewEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Interview
}

/** Identifies documents */
export type GraphCms_InterviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_InterviewWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_InterviewWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_InterviewWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
}

export enum GraphCms_InterviewOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_InterviewUpdateInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  title?: Maybe<Scalars['String']>
  videoEmbed?: Maybe<GraphCms_VideoEmbedUpdateOneInlineInput>
}

export type GraphCms_InterviewUpdateManyInlineInput = {
  /** Connect multiple existing Interview documents */
  connect?: Maybe<Array<GraphCms_InterviewConnectInput>>
  /** Create and connect multiple Interview documents */
  create?: Maybe<Array<GraphCms_InterviewCreateInput>>
  /** Delete multiple Interview documents */
  delete?: Maybe<Array<GraphCms_InterviewWhereUniqueInput>>
  /** Disconnect multiple Interview documents */
  disconnect?: Maybe<Array<GraphCms_InterviewWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Interview documents */
  set?: Maybe<Array<GraphCms_InterviewWhereUniqueInput>>
  /** Update multiple Interview documents */
  update?: Maybe<Array<GraphCms_InterviewUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Interview documents */
  upsert?: Maybe<Array<GraphCms_InterviewUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_InterviewUpdateManyInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  title?: Maybe<Scalars['String']>
}

export type GraphCms_InterviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_InterviewUpdateManyInput
  /** Document search */
  where: GraphCms_InterviewWhereInput
}

export type GraphCms_InterviewUpdateOneInlineInput = {
  /** Connect existing Interview document */
  connect?: Maybe<GraphCms_InterviewWhereUniqueInput>
  /** Create and connect one Interview document */
  create?: Maybe<GraphCms_InterviewCreateInput>
  /** Delete currently connected Interview document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Interview document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Interview document */
  update?: Maybe<GraphCms_InterviewUpdateWithNestedWhereUniqueInput>
  /** Upsert single Interview document */
  upsert?: Maybe<GraphCms_InterviewUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_InterviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_InterviewUpdateInput
  /** Unique document search */
  where: GraphCms_InterviewWhereUniqueInput
}

export type GraphCms_InterviewUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_InterviewCreateInput
  /** Update document if it exists */
  update: GraphCms_InterviewUpdateInput
}

export type GraphCms_InterviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_InterviewUpsertInput
  /** Unique document search */
  where: GraphCms_InterviewWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_InterviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_InterviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InterviewWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_InterviewWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_InterviewWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_InterviewWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_InterviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_InterviewWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_InterviewWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_InterviewWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_InterviewWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Interview record uniquely */
export type GraphCms_InterviewWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Locale system enumeration */
export enum GraphCms_Locale {
  /** System locale */
  en = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type GraphCms_Location = {
  __typename?: 'GraphCMS_Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type GraphCms_LocationDistanceArgs = {
  from: GraphCms_LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type GraphCms_LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** An object with an ID */
export type GraphCms_Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: GraphCms_Stage
}

/** Information about pagination in a connection. */
export type GraphCms_PageInfo = {
  __typename?: 'GraphCMS_PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type GraphCms_Publication = GraphCms_Node & {
  __typename?: 'GraphCMS_Publication'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  date: Scalars['GraphCMS_Date']
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Publication>
  /** List of Publication versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  link: Scalars['String']
  opengraph: Opengraph
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_PublicationCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_PublicationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_PublicationHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_PublicationPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_PublicationScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_PublicationUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_PublicationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_PublicationWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_PublicationConnection = {
  __typename?: 'GraphCMS_PublicationConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_PublicationEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_PublicationCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  date: Scalars['GraphCMS_Date']
  link: Scalars['String']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_PublicationCreateManyInlineInput = {
  /** Connect multiple existing Publication documents */
  connect?: Maybe<Array<GraphCms_PublicationWhereUniqueInput>>
  /** Create and connect multiple existing Publication documents */
  create?: Maybe<Array<GraphCms_PublicationCreateInput>>
}

export type GraphCms_PublicationCreateOneInlineInput = {
  /** Connect one existing Publication document */
  connect?: Maybe<GraphCms_PublicationWhereUniqueInput>
  /** Create and connect one Publication document */
  create?: Maybe<GraphCms_PublicationCreateInput>
}

/** An edge in a connection. */
export type GraphCms_PublicationEdge = {
  __typename?: 'GraphCMS_PublicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Publication
}

/** Identifies documents */
export type GraphCms_PublicationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_PublicationWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_PublicationWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_PublicationWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_PublicationOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  link_ASC = 'link_ASC',
  link_DESC = 'link_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_PublicationUpdateInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  link?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type GraphCms_PublicationUpdateManyInlineInput = {
  /** Connect multiple existing Publication documents */
  connect?: Maybe<Array<GraphCms_PublicationConnectInput>>
  /** Create and connect multiple Publication documents */
  create?: Maybe<Array<GraphCms_PublicationCreateInput>>
  /** Delete multiple Publication documents */
  delete?: Maybe<Array<GraphCms_PublicationWhereUniqueInput>>
  /** Disconnect multiple Publication documents */
  disconnect?: Maybe<Array<GraphCms_PublicationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Publication documents */
  set?: Maybe<Array<GraphCms_PublicationWhereUniqueInput>>
  /** Update multiple Publication documents */
  update?: Maybe<Array<GraphCms_PublicationUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Publication documents */
  upsert?: Maybe<Array<GraphCms_PublicationUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_PublicationUpdateManyInput = {
  date?: Maybe<Scalars['GraphCMS_Date']>
  link?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type GraphCms_PublicationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_PublicationUpdateManyInput
  /** Document search */
  where: GraphCms_PublicationWhereInput
}

export type GraphCms_PublicationUpdateOneInlineInput = {
  /** Connect existing Publication document */
  connect?: Maybe<GraphCms_PublicationWhereUniqueInput>
  /** Create and connect one Publication document */
  create?: Maybe<GraphCms_PublicationCreateInput>
  /** Delete currently connected Publication document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Publication document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Publication document */
  update?: Maybe<GraphCms_PublicationUpdateWithNestedWhereUniqueInput>
  /** Upsert single Publication document */
  upsert?: Maybe<GraphCms_PublicationUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_PublicationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_PublicationUpdateInput
  /** Unique document search */
  where: GraphCms_PublicationWhereUniqueInput
}

export type GraphCms_PublicationUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PublicationCreateInput
  /** Update document if it exists */
  update: GraphCms_PublicationUpdateInput
}

export type GraphCms_PublicationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_PublicationUpsertInput
  /** Unique document search */
  where: GraphCms_PublicationWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_PublicationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_PublicationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PublicationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_Date']>>>
  documentInStages_every?: Maybe<GraphCms_PublicationWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_PublicationWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_PublicationWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_PublicationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PublicationWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PublicationWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PublicationWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_PublicationWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Publication record uniquely */
export type GraphCms_PublicationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_PublishLocaleInput = {
  /** Locales to publish */
  locale: GraphCms_Locale
  /** Stages to publish selected locales to */
  stages: Array<GraphCms_Stage>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_Rgba = {
  __typename?: 'GraphCMS_RGBA'
  a: Scalars['GraphCMS_RGBATransparency']
  b: Scalars['GraphCMS_RGBAHue']
  g: Scalars['GraphCMS_RGBAHue']
  r: Scalars['GraphCMS_RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_RgbaInput = {
  a: Scalars['GraphCMS_RGBATransparency']
  b: Scalars['GraphCMS_RGBAHue']
  g: Scalars['GraphCMS_RGBAHue']
  r: Scalars['GraphCMS_RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type GraphCms_RichText = {
  __typename?: 'GraphCMS_RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['GraphCMS_RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperation = GraphCms_Node & {
  __typename?: 'GraphCMS_ScheduledOperation'
  affectedDocuments: Array<GraphCms_ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['GraphCMS_Json']
  /** The release this operation is scheduled for */
  release?: Maybe<GraphCms_ScheduledRelease>
  /** System stage field */
  stage: GraphCms_Stage
  /** operation Status */
  status: GraphCms_ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationReleaseArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Scheduled Operation system model */
export type GraphCms_ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ScheduledOperationAffectedDocument =
  | GraphCms_Asset
  | GraphCms_Bio
  | GraphCms_Conference
  | GraphCms_Education
  | GraphCms_Experience
  | GraphCms_Interview
  | GraphCms_Publication
  | GraphCms_Skill
  | GraphCms_VideoEmbed

export type GraphCms_ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_ScheduledOperationConnection = {
  __typename?: 'GraphCMS_ScheduledOperationConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<GraphCms_ScheduledOperationWhereUniqueInput>>
}

export type GraphCms_ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<GraphCms_ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type GraphCms_ScheduledOperationEdge = {
  __typename?: 'GraphCMS_ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_ScheduledOperation
}

/** Identifies documents */
export type GraphCms_ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: Maybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: Maybe<Scalars['GraphCMS_Json']>
  release?: Maybe<GraphCms_ScheduledReleaseWhereInput>
  status?: Maybe<GraphCms_ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<GraphCms_ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<GraphCms_ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<GraphCms_ScheduledOperationStatus>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_ScheduledOperationOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  status_ASC = 'status_ASC',
  status_DESC = 'status_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum GraphCms_ScheduledOperationStatus {
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
}

export type GraphCms_ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<GraphCms_ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<GraphCms_ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<GraphCms_ScheduledOperationWhereUniqueInput>>
}

export type GraphCms_ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<GraphCms_ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: Maybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: Maybe<Scalars['GraphCMS_Json']>
  release?: Maybe<GraphCms_ScheduledReleaseWhereInput>
  status?: Maybe<GraphCms_ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<GraphCms_ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<GraphCms_ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<GraphCms_ScheduledOperationStatus>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type GraphCms_ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledRelease = GraphCms_Node & {
  __typename?: 'GraphCMS_ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<GraphCms_ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** System stage field */
  stage: GraphCms_Stage
  /** Release Status */
  status: GraphCms_ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  orderBy?: Maybe<GraphCms_ScheduledOperationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledReleasePublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Scheduled Release system model */
export type GraphCms_ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_ScheduledReleaseConnection = {
  __typename?: 'GraphCMS_ScheduledReleaseConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  description?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<GraphCms_ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<GraphCms_ScheduledReleaseCreateInput>>
}

export type GraphCms_ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<GraphCms_ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<GraphCms_ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type GraphCms_ScheduledReleaseEdge = {
  __typename?: 'GraphCMS_ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_ScheduledRelease
}

/** Identifies documents */
export type GraphCms_ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  isImplicit?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>
  operations_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  operations_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  operations_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  status?: Maybe<GraphCms_ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<GraphCms_ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<GraphCms_ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<GraphCms_ScheduledReleaseStatus>>>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_ScheduledReleaseOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isActive_ASC = 'isActive_ASC',
  isActive_DESC = 'isActive_DESC',
  isImplicit_ASC = 'isImplicit_ASC',
  isImplicit_DESC = 'isImplicit_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  releaseAt_ASC = 'releaseAt_ASC',
  releaseAt_DESC = 'releaseAt_DESC',
  status_ASC = 'status_ASC',
  status_DESC = 'status_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum GraphCms_ScheduledReleaseStatus {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
}

export type GraphCms_ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  title?: Maybe<Scalars['String']>
}

export type GraphCms_ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<GraphCms_ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<GraphCms_ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<GraphCms_ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<GraphCms_ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<GraphCms_ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<
    Array<GraphCms_ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<
    Array<GraphCms_ScheduledReleaseUpsertWithNestedWhereUniqueInput>
  >
}

export type GraphCms_ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  title?: Maybe<Scalars['String']>
}

export type GraphCms_ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_ScheduledReleaseUpdateManyInput
  /** Document search */
  where: GraphCms_ScheduledReleaseWhereInput
}

export type GraphCms_ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<GraphCms_ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<GraphCms_ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: Maybe<GraphCms_ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<GraphCms_ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_ScheduledReleaseUpdateInput
  /** Unique document search */
  where: GraphCms_ScheduledReleaseWhereUniqueInput
}

export type GraphCms_ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: GraphCms_ScheduledReleaseUpdateInput
}

export type GraphCms_ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_ScheduledReleaseUpsertInput
  /** Unique document search */
  where: GraphCms_ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type GraphCms_ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  description?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  errorMessage?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  isImplicit?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>
  operations_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  operations_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  operations_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  releaseAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  status?: Maybe<GraphCms_ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Maybe<GraphCms_ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: Maybe<GraphCms_ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Maybe<GraphCms_ScheduledReleaseStatus>>>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type GraphCms_ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_Skill = GraphCms_Node & {
  __typename?: 'GraphCMS_Skill'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Skill>
  /** List of Skill versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  logo: GraphCms_Asset
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
  yearsOfExperience: Scalars['Int']
}

export type GraphCms_SkillCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_SkillHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_SkillLogoArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_SkillUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_SkillWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_SkillConnection = {
  __typename?: 'GraphCMS_SkillConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_SkillEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_SkillCreateInput = {
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  logo: GraphCms_AssetCreateOneInlineInput
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  yearsOfExperience: Scalars['Int']
}

export type GraphCms_SkillCreateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<GraphCms_SkillWhereUniqueInput>>
  /** Create and connect multiple existing Skill documents */
  create?: Maybe<Array<GraphCms_SkillCreateInput>>
}

export type GraphCms_SkillCreateOneInlineInput = {
  /** Connect one existing Skill document */
  connect?: Maybe<GraphCms_SkillWhereUniqueInput>
  /** Create and connect one Skill document */
  create?: Maybe<GraphCms_SkillCreateInput>
}

/** An edge in a connection. */
export type GraphCms_SkillEdge = {
  __typename?: 'GraphCMS_SkillEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_Skill
}

/** Identifies documents */
export type GraphCms_SkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_SkillWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_SkillWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_SkillWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  yearsOfExperience?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  yearsOfExperience_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  yearsOfExperience_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** All values less than the given value. */
  yearsOfExperience_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: Maybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  yearsOfExperience_not?: Maybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export enum GraphCms_SkillOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  yearsOfExperience_ASC = 'yearsOfExperience_ASC',
  yearsOfExperience_DESC = 'yearsOfExperience_DESC',
}

export type GraphCms_SkillUpdateInput = {
  logo?: Maybe<GraphCms_AssetUpdateOneInlineInput>
  title?: Maybe<Scalars['String']>
  yearsOfExperience?: Maybe<Scalars['Int']>
}

export type GraphCms_SkillUpdateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<GraphCms_SkillConnectInput>>
  /** Create and connect multiple Skill documents */
  create?: Maybe<Array<GraphCms_SkillCreateInput>>
  /** Delete multiple Skill documents */
  delete?: Maybe<Array<GraphCms_SkillWhereUniqueInput>>
  /** Disconnect multiple Skill documents */
  disconnect?: Maybe<Array<GraphCms_SkillWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Skill documents */
  set?: Maybe<Array<GraphCms_SkillWhereUniqueInput>>
  /** Update multiple Skill documents */
  update?: Maybe<Array<GraphCms_SkillUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Skill documents */
  upsert?: Maybe<Array<GraphCms_SkillUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_SkillUpdateManyInput = {
  title?: Maybe<Scalars['String']>
  yearsOfExperience?: Maybe<Scalars['Int']>
}

export type GraphCms_SkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_SkillUpdateManyInput
  /** Document search */
  where: GraphCms_SkillWhereInput
}

export type GraphCms_SkillUpdateOneInlineInput = {
  /** Connect existing Skill document */
  connect?: Maybe<GraphCms_SkillWhereUniqueInput>
  /** Create and connect one Skill document */
  create?: Maybe<GraphCms_SkillCreateInput>
  /** Delete currently connected Skill document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Skill document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Skill document */
  update?: Maybe<GraphCms_SkillUpdateWithNestedWhereUniqueInput>
  /** Upsert single Skill document */
  upsert?: Maybe<GraphCms_SkillUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_SkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_SkillUpdateInput
  /** Unique document search */
  where: GraphCms_SkillWhereUniqueInput
}

export type GraphCms_SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_SkillCreateInput
  /** Update document if it exists */
  update: GraphCms_SkillUpdateInput
}

export type GraphCms_SkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_SkillUpsertInput
  /** Unique document search */
  where: GraphCms_SkillWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_SkillWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_SkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_SkillWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_SkillWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_SkillWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_SkillWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  yearsOfExperience?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  yearsOfExperience_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  yearsOfExperience_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** All values less than the given value. */
  yearsOfExperience_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: Maybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  yearsOfExperience_not?: Maybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_SkillWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_SkillWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_SkillWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_SkillWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_SkillWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References Skill record uniquely */
export type GraphCms_SkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum GraphCms_Stage {
  /** The Draft is the default stage for all your content. */
  DRAFT = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  PUBLISHED = 'PUBLISHED',
}

export enum GraphCms_SystemDateTimeFieldVariation {
  BASE = 'BASE',
  COMBINED = 'COMBINED',
  LOCALIZATION = 'LOCALIZATION',
}

export type GraphCms_UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: GraphCms_Locale
  /** Stages to unpublish selected locales from */
  stages: Array<GraphCms_Stage>
}

/** User system model */
export type GraphCms_User = GraphCms_Node & {
  __typename?: 'GraphCMS_User'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: GraphCms_UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
}

/** User system model */
export type GraphCms_UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_UserWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_UserConnection = {
  __typename?: 'GraphCMS_UserConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_UserEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<GraphCms_UserWhereUniqueInput>>
}

export type GraphCms_UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<GraphCms_UserWhereUniqueInput>
}

/** An edge in a connection. */
export type GraphCms_UserEdge = {
  __typename?: 'GraphCMS_UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_User
}

/** System User Kind */
export enum GraphCms_UserKind {
  MEMBER = 'MEMBER',
  PAT = 'PAT',
  PUBLIC = 'PUBLIC',
  WEBHOOK = 'WEBHOOK',
}

/** Identifies documents */
export type GraphCms_UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  documentInStages_every?: Maybe<GraphCms_UserWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_UserWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_UserWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  kind?: Maybe<GraphCms_UserKind>
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<GraphCms_UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: Maybe<GraphCms_UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<GraphCms_UserKind>>>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
}

export enum GraphCms_UserOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isActive_ASC = 'isActive_ASC',
  isActive_DESC = 'isActive_DESC',
  kind_ASC = 'kind_ASC',
  kind_DESC = 'kind_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  picture_ASC = 'picture_ASC',
  picture_DESC = 'picture_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<GraphCms_UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<GraphCms_UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<GraphCms_UserWhereUniqueInput>>
}

export type GraphCms_UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<GraphCms_UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  documentInStages_every?: Maybe<GraphCms_UserWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_UserWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_UserWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  kind?: Maybe<GraphCms_UserKind>
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<Maybe<GraphCms_UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: Maybe<GraphCms_UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<Maybe<GraphCms_UserKind>>>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  picture?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References User record uniquely */
export type GraphCms_UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type GraphCms_Version = {
  __typename?: 'GraphCMS_Version'
  createdAt: Scalars['GraphCMS_DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: GraphCms_Stage
}

export type GraphCms_VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: GraphCms_Stage
}

export type GraphCms_VideoEmbed = GraphCms_Node & {
  __typename?: 'GraphCMS_VideoEmbed'
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime']
  /** User that created this document */
  createdBy?: Maybe<GraphCms_User>
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_VideoEmbed>
  /** List of VideoEmbed versions */
  history: Array<GraphCms_Version>
  /** The unique identifier */
  id: Scalars['ID']
  iframeOptions?: Maybe<Scalars['GraphCMS_Json']>
  link: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  scheduledIn: Array<GraphCms_ScheduledOperation>
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_VideoEmbedCreatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_VideoEmbedDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<GraphCms_Stage>
}

export type GraphCms_VideoEmbedHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<GraphCms_Stage>
}

export type GraphCms_VideoEmbedPublishedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_VideoEmbedScheduledInArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  forceParentLocale?: Maybe<Scalars['Boolean']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<GraphCms_Locale>>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<GraphCms_ScheduledOperationWhereInput>
}

export type GraphCms_VideoEmbedUpdatedByArgs = {
  forceParentLocale?: Maybe<Scalars['Boolean']>
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_VideoEmbedConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<GraphCms_ConnectPositionInput>
  /** Document to connect */
  where: GraphCms_VideoEmbedWhereUniqueInput
}

/** A connection to a list of items. */
export type GraphCms_VideoEmbedConnection = {
  __typename?: 'GraphCMS_VideoEmbedConnection'
  aggregate: GraphCms_Aggregate
  /** A list of edges. */
  edges: Array<GraphCms_VideoEmbedEdge>
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo
}

export type GraphCms_VideoEmbedCreateInput = {
  ckuqxi3pk1l0h01xu82t5a3d6?: Maybe<GraphCms_ConferenceCreateManyInlineInput>
  ckuqxikqv1iyj01yvc51r6sq2?: Maybe<GraphCms_InterviewCreateManyInlineInput>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  iframeOptions?: Maybe<Scalars['GraphCMS_Json']>
  link: Scalars['String']
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
}

export type GraphCms_VideoEmbedCreateManyInlineInput = {
  /** Connect multiple existing VideoEmbed documents */
  connect?: Maybe<Array<GraphCms_VideoEmbedWhereUniqueInput>>
  /** Create and connect multiple existing VideoEmbed documents */
  create?: Maybe<Array<GraphCms_VideoEmbedCreateInput>>
}

export type GraphCms_VideoEmbedCreateOneInlineInput = {
  /** Connect one existing VideoEmbed document */
  connect?: Maybe<GraphCms_VideoEmbedWhereUniqueInput>
  /** Create and connect one VideoEmbed document */
  create?: Maybe<GraphCms_VideoEmbedCreateInput>
}

/** An edge in a connection. */
export type GraphCms_VideoEmbedEdge = {
  __typename?: 'GraphCMS_VideoEmbedEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: GraphCms_VideoEmbed
}

/** Identifies documents */
export type GraphCms_VideoEmbedManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values containing the given json path. */
  iframeOptions_json_path_exists?: Maybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  iframeOptions_value_recursive?: Maybe<Scalars['GraphCMS_Json']>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

export enum GraphCms_VideoEmbedOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  link_ASC = 'link_ASC',
  link_DESC = 'link_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type GraphCms_VideoEmbedUpdateInput = {
  ckuqxi3pk1l0h01xu82t5a3d6?: Maybe<GraphCms_ConferenceUpdateManyInlineInput>
  ckuqxikqv1iyj01yvc51r6sq2?: Maybe<GraphCms_InterviewUpdateManyInlineInput>
  iframeOptions?: Maybe<Scalars['GraphCMS_Json']>
  link?: Maybe<Scalars['String']>
}

export type GraphCms_VideoEmbedUpdateManyInlineInput = {
  /** Connect multiple existing VideoEmbed documents */
  connect?: Maybe<Array<GraphCms_VideoEmbedConnectInput>>
  /** Create and connect multiple VideoEmbed documents */
  create?: Maybe<Array<GraphCms_VideoEmbedCreateInput>>
  /** Delete multiple VideoEmbed documents */
  delete?: Maybe<Array<GraphCms_VideoEmbedWhereUniqueInput>>
  /** Disconnect multiple VideoEmbed documents */
  disconnect?: Maybe<Array<GraphCms_VideoEmbedWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing VideoEmbed documents */
  set?: Maybe<Array<GraphCms_VideoEmbedWhereUniqueInput>>
  /** Update multiple VideoEmbed documents */
  update?: Maybe<Array<GraphCms_VideoEmbedUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple VideoEmbed documents */
  upsert?: Maybe<Array<GraphCms_VideoEmbedUpsertWithNestedWhereUniqueInput>>
}

export type GraphCms_VideoEmbedUpdateManyInput = {
  iframeOptions?: Maybe<Scalars['GraphCMS_Json']>
  link?: Maybe<Scalars['String']>
}

export type GraphCms_VideoEmbedUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_VideoEmbedUpdateManyInput
  /** Document search */
  where: GraphCms_VideoEmbedWhereInput
}

export type GraphCms_VideoEmbedUpdateOneInlineInput = {
  /** Connect existing VideoEmbed document */
  connect?: Maybe<GraphCms_VideoEmbedWhereUniqueInput>
  /** Create and connect one VideoEmbed document */
  create?: Maybe<GraphCms_VideoEmbedCreateInput>
  /** Delete currently connected VideoEmbed document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected VideoEmbed document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single VideoEmbed document */
  update?: Maybe<GraphCms_VideoEmbedUpdateWithNestedWhereUniqueInput>
  /** Upsert single VideoEmbed document */
  upsert?: Maybe<GraphCms_VideoEmbedUpsertWithNestedWhereUniqueInput>
}

export type GraphCms_VideoEmbedUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_VideoEmbedUpdateInput
  /** Unique document search */
  where: GraphCms_VideoEmbedWhereUniqueInput
}

export type GraphCms_VideoEmbedUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_VideoEmbedCreateInput
  /** Update document if it exists */
  update: GraphCms_VideoEmbedUpdateInput
}

export type GraphCms_VideoEmbedUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_VideoEmbedUpsertInput
  /** Unique document search */
  where: GraphCms_VideoEmbedWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type GraphCms_VideoEmbedWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: Maybe<Scalars['Boolean']>
}

/** Identifies documents */
export type GraphCms_VideoEmbedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_VideoEmbedWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  documentInStages_every?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  documentInStages_none?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  documentInStages_some?: Maybe<GraphCms_VideoEmbedWhereStageInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values containing the given json path. */
  iframeOptions_json_path_exists?: Maybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  iframeOptions_value_recursive?: Maybe<Scalars['GraphCMS_Json']>
  link?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  scheduledIn_every?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_none?: Maybe<GraphCms_ScheduledOperationWhereInput>
  scheduledIn_some?: Maybe<GraphCms_ScheduledOperationWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['GraphCMS_DateTime']>>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GraphCms_VideoEmbedWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_VideoEmbedWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_VideoEmbedWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_VideoEmbedWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: Maybe<GraphCms_VideoEmbedWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: Maybe<GraphCms_Stage>
}

/** References VideoEmbed record uniquely */
export type GraphCms_VideoEmbedWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export enum GraphCms__FilterKind {
  AND = 'AND',
  NOT = 'NOT',
  OR = 'OR',
  contains = 'contains',
  contains_all = 'contains_all',
  contains_none = 'contains_none',
  contains_some = 'contains_some',
  ends_with = 'ends_with',
  eq = 'eq',
  eq_not = 'eq_not',
  gt = 'gt',
  gte = 'gte',
  in = 'in',
  json_path_exists = 'json_path_exists',
  json_value_recursive = 'json_value_recursive',
  lt = 'lt',
  lte = 'lte',
  not_contains = 'not_contains',
  not_ends_with = 'not_ends_with',
  not_in = 'not_in',
  not_starts_with = 'not_starts_with',
  relational_every = 'relational_every',
  relational_none = 'relational_none',
  relational_single = 'relational_single',
  relational_some = 'relational_some',
  search = 'search',
  starts_with = 'starts_with',
  union_empty = 'union_empty',
  union_every = 'union_every',
  union_none = 'union_none',
  union_single = 'union_single',
  union_some = 'union_some',
}

export enum GraphCms__MutationInputFieldKind {
  enum = 'enum',
  relation = 'relation',
  richText = 'richText',
  richTextWithEmbeds = 'richTextWithEmbeds',
  scalar = 'scalar',
  union = 'union',
  virtual = 'virtual',
}

export enum GraphCms__MutationKind {
  create = 'create',
  delete = 'delete',
  deleteMany = 'deleteMany',
  publish = 'publish',
  publishMany = 'publishMany',
  schedulePublish = 'schedulePublish',
  scheduleUnpublish = 'scheduleUnpublish',
  unpublish = 'unpublish',
  unpublishMany = 'unpublishMany',
  update = 'update',
  updateMany = 'updateMany',
  upsert = 'upsert',
}

export enum GraphCms__OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum GraphCms__RelationInputCardinality {
  many = 'many',
  one = 'one',
}

export enum GraphCms__RelationInputKind {
  create = 'create',
  update = 'update',
}

export enum GraphCms__RelationKind {
  regular = 'regular',
  union = 'union',
}

export enum GraphCms__SystemDateTimeFieldVariation {
  base = 'base',
  combined = 'combined',
  localization = 'localization',
}

export type GraphQlSource = Node & {
  __typename?: 'GraphQLSource'
  children: Array<Node>
  fieldName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  typeName?: Maybe<Scalars['String']>
}

export type GraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection'
  distinct: Array<Scalars['String']>
  edges: Array<GraphQlSourceEdge>
  group: Array<GraphQlSourceGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<GraphQlSource>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceConnectionGroupArgs = {
  field: GraphQlSourceFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type GraphQlSourceConnectionMaxArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceConnectionMinArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceConnectionSumArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge'
  next?: Maybe<GraphQlSource>
  node: GraphQlSource
  previous?: Maybe<GraphQlSource>
}

export type GraphQlSourceFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  fieldName?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  parent?: Maybe<NodeFieldSelector>
  typeName?: Maybe<FieldSelectorEnum>
}

export type GraphQlSourceFilterInput = {
  children?: Maybe<NodeFilterListInput>
  fieldName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  typeName?: Maybe<StringQueryOperatorInput>
}

export type GraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<GraphQlSourceEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<GraphQlSourceGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<GraphQlSource>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type GraphQlSourceGroupConnectionDistinctArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceGroupConnectionGroupArgs = {
  field: GraphQlSourceFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type GraphQlSourceGroupConnectionMaxArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceGroupConnectionMinArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceGroupConnectionSumArgs = {
  field: GraphQlSourceFieldSelector
}

export type GraphQlSourceSortInput = {
  children?: Maybe<NodeSortInput>
  fieldName?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  parent?: Maybe<NodeSortInput>
  typeName?: Maybe<SortOrderEnum>
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  children: Array<Node>
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['GatsbyImageData']
  id: Scalars['ID']
  internal: Internal
  original?: Maybe<ImageSharpOriginal>
  parent?: Maybe<Node>
  resize?: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  cropFocus?: Maybe<ImageCropFocus>
  duotone?: Maybe<DuotoneGradient>
  fit?: Maybe<ImageFit>
  grayscale?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  rotate?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  traceSVG?: Maybe<Potrace>
  trim?: Maybe<Scalars['Float']>
  webpQuality?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  cropFocus?: Maybe<ImageCropFocus>
  duotone?: Maybe<DuotoneGradient>
  fit?: Maybe<ImageFit>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  jpegQuality?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  maxWidth?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  rotate?: Maybe<Scalars['Int']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  traceSVG?: Maybe<Potrace>
  trim?: Maybe<Scalars['Float']>
  webpQuality?: Maybe<Scalars['Int']>
}

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>
  avifOptions?: Maybe<AvifOptions>
  backgroundColor?: Maybe<Scalars['String']>
  blurredOptions?: Maybe<BlurredOptions>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  height?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  layout?: Maybe<ImageLayout>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  placeholder?: Maybe<ImagePlaceholder>
  pngOptions?: Maybe<PngOptions>
  quality?: Maybe<Scalars['Int']>
  sizes?: Maybe<Scalars['String']>
  tracedSVGOptions?: Maybe<Potrace>
  transformOptions?: Maybe<TransformOptions>
  webpOptions?: Maybe<WebPOptions>
  width?: Maybe<Scalars['Int']>
}

export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>
  base64?: Maybe<Scalars['Boolean']>
  cropFocus?: Maybe<ImageCropFocus>
  duotone?: Maybe<DuotoneGradient>
  fit?: Maybe<ImageFit>
  grayscale?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  rotate?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  traceSVG?: Maybe<Potrace>
  trim?: Maybe<Scalars['Float']>
  webpQuality?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  distinct: Array<Scalars['String']>
  edges: Array<ImageSharpEdge>
  group: Array<ImageSharpGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  fixed?: Maybe<ImageSharpFixedFieldSelector>
  fluid?: Maybe<ImageSharpFluidFieldSelector>
  gatsbyImageData?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  original?: Maybe<ImageSharpOriginalFieldSelector>
  parent?: Maybe<NodeFieldSelector>
  resize?: Maybe<ImageSharpResizeFieldSelector>
}

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<GatsbyImageDataQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  parent?: Maybe<NodeFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  aspectRatio?: Maybe<Scalars['Float']>
  base64?: Maybe<Scalars['String']>
  height: Scalars['Float']
  originalName?: Maybe<Scalars['String']>
  src: Scalars['String']
  srcSet: Scalars['String']
  srcSetWebp?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width: Scalars['Float']
}

export type ImageSharpFixedFieldSelector = {
  aspectRatio?: Maybe<FieldSelectorEnum>
  base64?: Maybe<FieldSelectorEnum>
  height?: Maybe<FieldSelectorEnum>
  originalName?: Maybe<FieldSelectorEnum>
  src?: Maybe<FieldSelectorEnum>
  srcSet?: Maybe<FieldSelectorEnum>
  srcSetWebp?: Maybe<FieldSelectorEnum>
  srcWebp?: Maybe<FieldSelectorEnum>
  tracedSVG?: Maybe<FieldSelectorEnum>
  width?: Maybe<FieldSelectorEnum>
}

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpFixedSortInput = {
  aspectRatio?: Maybe<SortOrderEnum>
  base64?: Maybe<SortOrderEnum>
  height?: Maybe<SortOrderEnum>
  originalName?: Maybe<SortOrderEnum>
  src?: Maybe<SortOrderEnum>
  srcSet?: Maybe<SortOrderEnum>
  srcSetWebp?: Maybe<SortOrderEnum>
  srcWebp?: Maybe<SortOrderEnum>
  tracedSVG?: Maybe<SortOrderEnum>
  width?: Maybe<SortOrderEnum>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  aspectRatio: Scalars['Float']
  base64?: Maybe<Scalars['String']>
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationHeight: Scalars['Int']
  presentationWidth: Scalars['Int']
  sizes: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcSetWebp?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
}

export type ImageSharpFluidFieldSelector = {
  aspectRatio?: Maybe<FieldSelectorEnum>
  base64?: Maybe<FieldSelectorEnum>
  originalImg?: Maybe<FieldSelectorEnum>
  originalName?: Maybe<FieldSelectorEnum>
  presentationHeight?: Maybe<FieldSelectorEnum>
  presentationWidth?: Maybe<FieldSelectorEnum>
  sizes?: Maybe<FieldSelectorEnum>
  src?: Maybe<FieldSelectorEnum>
  srcSet?: Maybe<FieldSelectorEnum>
  srcSetWebp?: Maybe<FieldSelectorEnum>
  srcWebp?: Maybe<FieldSelectorEnum>
  tracedSVG?: Maybe<FieldSelectorEnum>
}

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  base64?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluidSortInput = {
  aspectRatio?: Maybe<SortOrderEnum>
  base64?: Maybe<SortOrderEnum>
  originalImg?: Maybe<SortOrderEnum>
  originalName?: Maybe<SortOrderEnum>
  presentationHeight?: Maybe<SortOrderEnum>
  presentationWidth?: Maybe<SortOrderEnum>
  sizes?: Maybe<SortOrderEnum>
  src?: Maybe<SortOrderEnum>
  srcSet?: Maybe<SortOrderEnum>
  srcSetWebp?: Maybe<SortOrderEnum>
  srcWebp?: Maybe<SortOrderEnum>
  tracedSVG?: Maybe<SortOrderEnum>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<ImageSharpEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
}

export type ImageSharpOriginalFieldSelector = {
  height?: Maybe<FieldSelectorEnum>
  src?: Maybe<FieldSelectorEnum>
  width?: Maybe<FieldSelectorEnum>
}

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpOriginalSortInput = {
  height?: Maybe<SortOrderEnum>
  src?: Maybe<SortOrderEnum>
  width?: Maybe<SortOrderEnum>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  aspectRatio?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Int']>
  originalName?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export type ImageSharpResizeFieldSelector = {
  aspectRatio?: Maybe<FieldSelectorEnum>
  height?: Maybe<FieldSelectorEnum>
  originalName?: Maybe<FieldSelectorEnum>
  src?: Maybe<FieldSelectorEnum>
  tracedSVG?: Maybe<FieldSelectorEnum>
  width?: Maybe<FieldSelectorEnum>
}

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpResizeSortInput = {
  aspectRatio?: Maybe<SortOrderEnum>
  height?: Maybe<SortOrderEnum>
  originalName?: Maybe<SortOrderEnum>
  src?: Maybe<SortOrderEnum>
  tracedSVG?: Maybe<SortOrderEnum>
  width?: Maybe<SortOrderEnum>
}

export type ImageSharpSortInput = {
  children?: Maybe<NodeSortInput>
  fixed?: Maybe<ImageSharpFixedSortInput>
  fluid?: Maybe<ImageSharpFluidSortInput>
  gatsbyImageData?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  original?: Maybe<ImageSharpOriginalSortInput>
  parent?: Maybe<NodeSortInput>
  resize?: Maybe<ImageSharpResizeSortInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  contentFilePath?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFieldSelector = {
  content?: Maybe<FieldSelectorEnum>
  contentDigest?: Maybe<FieldSelectorEnum>
  contentFilePath?: Maybe<FieldSelectorEnum>
  description?: Maybe<FieldSelectorEnum>
  fieldOwners?: Maybe<FieldSelectorEnum>
  ignoreType?: Maybe<FieldSelectorEnum>
  mediaType?: Maybe<FieldSelectorEnum>
  owner?: Maybe<FieldSelectorEnum>
  type?: Maybe<FieldSelectorEnum>
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  contentFilePath?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type InternalSortInput = {
  content?: Maybe<SortOrderEnum>
  contentDigest?: Maybe<SortOrderEnum>
  contentFilePath?: Maybe<SortOrderEnum>
  description?: Maybe<SortOrderEnum>
  fieldOwners?: Maybe<SortOrderEnum>
  ignoreType?: Maybe<SortOrderEnum>
  mediaType?: Maybe<SortOrderEnum>
  owner?: Maybe<SortOrderEnum>
  type?: Maybe<SortOrderEnum>
}

export type JpgOptions = {
  progressive?: Maybe<Scalars['Boolean']>
  quality?: Maybe<Scalars['Int']>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  ne?: Maybe<Scalars['JSON']>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
}

export enum MarkdownExcerptFormats {
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
  PLAIN = 'PLAIN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading'
  depth?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type MarkdownHeadingFieldSelector = {
  depth?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  value?: Maybe<FieldSelectorEnum>
}

export type MarkdownHeadingFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export type MarkdownHeadingSortInput = {
  depth?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  value?: Maybe<SortOrderEnum>
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark'
  children: Array<Node>
  excerpt?: Maybe<Scalars['String']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  tableOfContents?: Maybe<Scalars['String']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MarkdownWordCount>
}

export type MarkdownRemarkExcerptArgs = {
  format?: Maybe<MarkdownExcerptFormats>
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>
  heading?: Maybe<Scalars['String']>
  maxDepth?: Maybe<Scalars['Int']>
  pathToSlugField?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge'
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  excerpt?: Maybe<FieldSelectorEnum>
  excerptAst?: Maybe<FieldSelectorEnum>
  headings?: Maybe<MarkdownHeadingFieldSelector>
  html?: Maybe<FieldSelectorEnum>
  htmlAst?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  parent?: Maybe<NodeFieldSelector>
  tableOfContents?: Maybe<FieldSelectorEnum>
  timeToRead?: Maybe<FieldSelectorEnum>
  wordCount?: Maybe<MarkdownWordCountFieldSelector>
}

export type MarkdownRemarkFilterInput = {
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkSortInput = {
  children?: Maybe<NodeSortInput>
  excerpt?: Maybe<SortOrderEnum>
  excerptAst?: Maybe<SortOrderEnum>
  headings?: Maybe<MarkdownHeadingSortInput>
  html?: Maybe<SortOrderEnum>
  htmlAst?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  parent?: Maybe<NodeSortInput>
  tableOfContents?: Maybe<SortOrderEnum>
  timeToRead?: Maybe<SortOrderEnum>
  wordCount?: Maybe<MarkdownWordCountSortInput>
}

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFieldSelector = {
  paragraphs?: Maybe<FieldSelectorEnum>
  sentences?: Maybe<FieldSelectorEnum>
  words?: Maybe<FieldSelectorEnum>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

export type MarkdownWordCountSortInput = {
  paragraphs?: Maybe<SortOrderEnum>
  sentences?: Maybe<SortOrderEnum>
  words?: Maybe<SortOrderEnum>
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type NodeFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  parent?: Maybe<NodeFieldSelector>
}

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type NodeSortInput = {
  children?: Maybe<NodeSortInput>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  parent?: Maybe<NodeSortInput>
}

export type Opengraph = Node & {
  __typename?: 'Opengraph'
  children: Array<Node>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  internal: Internal
  ogDescription?: Maybe<Scalars['String']>
  ogImage?: Maybe<Scalars['String']>
  ogTitle?: Maybe<Scalars['String']>
  ogType?: Maybe<Scalars['String']>
  ogUrl?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  twitterCard?: Maybe<Scalars['String']>
  twitterDescription?: Maybe<Scalars['String']>
  twitterImageSrc?: Maybe<Scalars['String']>
  twitterTitle?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type OpengraphConnection = {
  __typename?: 'OpengraphConnection'
  distinct: Array<Scalars['String']>
  edges: Array<OpengraphEdge>
  group: Array<OpengraphGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Opengraph>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type OpengraphConnectionDistinctArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphConnectionGroupArgs = {
  field: OpengraphFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type OpengraphConnectionMaxArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphConnectionMinArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphConnectionSumArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphEdge = {
  __typename?: 'OpengraphEdge'
  next?: Maybe<Opengraph>
  node: Opengraph
  previous?: Maybe<Opengraph>
}

export type OpengraphFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  description?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  image?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  ogDescription?: Maybe<FieldSelectorEnum>
  ogImage?: Maybe<FieldSelectorEnum>
  ogTitle?: Maybe<FieldSelectorEnum>
  ogType?: Maybe<FieldSelectorEnum>
  ogUrl?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  twitterCard?: Maybe<FieldSelectorEnum>
  twitterDescription?: Maybe<FieldSelectorEnum>
  twitterImageSrc?: Maybe<FieldSelectorEnum>
  twitterTitle?: Maybe<FieldSelectorEnum>
  url?: Maybe<FieldSelectorEnum>
}

export type OpengraphFilterInput = {
  children?: Maybe<NodeFilterListInput>
  description?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  ogDescription?: Maybe<StringQueryOperatorInput>
  ogImage?: Maybe<StringQueryOperatorInput>
  ogTitle?: Maybe<StringQueryOperatorInput>
  ogType?: Maybe<StringQueryOperatorInput>
  ogUrl?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  twitterCard?: Maybe<StringQueryOperatorInput>
  twitterDescription?: Maybe<StringQueryOperatorInput>
  twitterImageSrc?: Maybe<StringQueryOperatorInput>
  twitterTitle?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
}

export type OpengraphGroupConnection = {
  __typename?: 'OpengraphGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<OpengraphEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<OpengraphGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Opengraph>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type OpengraphGroupConnectionDistinctArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphGroupConnectionGroupArgs = {
  field: OpengraphFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type OpengraphGroupConnectionMaxArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphGroupConnectionMinArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphGroupConnectionSumArgs = {
  field: OpengraphFieldSelector
}

export type OpengraphSortInput = {
  children?: Maybe<NodeSortInput>
  description?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  image?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  ogDescription?: Maybe<SortOrderEnum>
  ogImage?: Maybe<SortOrderEnum>
  ogTitle?: Maybe<SortOrderEnum>
  ogType?: Maybe<SortOrderEnum>
  ogUrl?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  twitterCard?: Maybe<SortOrderEnum>
  twitterDescription?: Maybe<SortOrderEnum>
  twitterImageSrc?: Maybe<SortOrderEnum>
  twitterTitle?: Maybe<SortOrderEnum>
  url?: Maybe<SortOrderEnum>
}

export type PngOptions = {
  compressionSpeed?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  alphaMax?: Maybe<Scalars['Float']>
  background?: Maybe<Scalars['String']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  turdSize?: Maybe<Scalars['Float']>
  turnPolicy?: Maybe<PotraceTurnPolicy>
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
}

export type Query = {
  __typename?: 'Query'
  allDirectory: DirectoryConnection
  allFile: FileConnection
  allGraphQlSource: GraphQlSourceConnection
  allImageSharp: ImageSharpConnection
  allMarkdownRemark: MarkdownRemarkConnection
  allOpengraph: OpengraphConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  directory?: Maybe<Directory>
  file?: Maybe<File>
  gcms: GraphCms
  graphQlSource?: Maybe<GraphQlSource>
  imageSharp?: Maybe<ImageSharp>
  markdownRemark?: Maybe<MarkdownRemark>
  opengraph?: Maybe<Opengraph>
  site?: Maybe<Site>
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  siteFunction?: Maybe<SiteFunction>
  sitePage?: Maybe<SitePage>
  sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<DirectorySortInput>>>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<FileSortInput>>>
}

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<GraphQlSourceSortInput>>>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<ImageSharpSortInput>>>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<MarkdownRemarkSortInput>>>
}

export type QueryAllOpengraphArgs = {
  filter?: Maybe<OpengraphFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<OpengraphSortInput>>>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SiteSortInput>>>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SiteBuildMetadataSortInput>>>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SiteFunctionSortInput>>>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SitePageSortInput>>>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SitePluginSortInput>>>
}

export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  children?: Maybe<NodeFilterListInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryGraphQlSourceArgs = {
  children?: Maybe<NodeFilterListInput>
  fieldName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  typeName?: Maybe<StringQueryOperatorInput>
}

export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<GatsbyImageDataQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  parent?: Maybe<NodeFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
}

export type QueryMarkdownRemarkArgs = {
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
}

export type QueryOpengraphArgs = {
  children?: Maybe<NodeFilterListInput>
  description?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  ogDescription?: Maybe<StringQueryOperatorInput>
  ogImage?: Maybe<StringQueryOperatorInput>
  ogTitle?: Maybe<StringQueryOperatorInput>
  ogType?: Maybe<StringQueryOperatorInput>
  ogUrl?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  twitterCard?: Maybe<StringQueryOperatorInput>
  twitterDescription?: Maybe<StringQueryOperatorInput>
  twitterImageSrc?: Maybe<StringQueryOperatorInput>
  twitterTitle?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  graphqlTypegen?: Maybe<BooleanQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  jsxRuntime?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  trailingSlash?: Maybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  functionRoute?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  pageContext?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<JsonQueryOperatorInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  graphqlTypegen?: Maybe<Scalars['Boolean']>
  host?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  jsxRuntime?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  port?: Maybe<Scalars['Int']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  trailingSlash?: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldSelector = {
  buildTime?: Maybe<FieldSelectorEnum>
  children?: Maybe<NodeFieldSelector>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  parent?: Maybe<NodeFieldSelector>
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataSortInput = {
  buildTime?: Maybe<SortOrderEnum>
  children?: Maybe<NodeSortInput>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  parent?: Maybe<NodeSortInput>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldSelector = {
  buildTime?: Maybe<FieldSelectorEnum>
  children?: Maybe<NodeFieldSelector>
  graphqlTypegen?: Maybe<FieldSelectorEnum>
  host?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  jsxRuntime?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  pathPrefix?: Maybe<FieldSelectorEnum>
  polyfill?: Maybe<FieldSelectorEnum>
  port?: Maybe<FieldSelectorEnum>
  siteMetadata?: Maybe<SiteSiteMetadataFieldSelector>
  trailingSlash?: Maybe<FieldSelectorEnum>
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  graphqlTypegen?: Maybe<BooleanQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  jsxRuntime?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  trailingSlash?: Maybe<StringQueryOperatorInput>
}

export type SiteFunction = Node & {
  __typename?: 'SiteFunction'
  absoluteCompiledFilePath: Scalars['String']
  children: Array<Node>
  functionRoute: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  matchPath?: Maybe<Scalars['String']>
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  parent?: Maybe<Node>
  pluginName: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge'
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export type SiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: Maybe<FieldSelectorEnum>
  children?: Maybe<NodeFieldSelector>
  functionRoute?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  matchPath?: Maybe<FieldSelectorEnum>
  originalAbsoluteFilePath?: Maybe<FieldSelectorEnum>
  originalRelativeFilePath?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  pluginName?: Maybe<FieldSelectorEnum>
  relativeCompiledFilePath?: Maybe<FieldSelectorEnum>
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  functionRoute?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionSortInput = {
  absoluteCompiledFilePath?: Maybe<SortOrderEnum>
  children?: Maybe<NodeSortInput>
  functionRoute?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  matchPath?: Maybe<SortOrderEnum>
  originalAbsoluteFilePath?: Maybe<SortOrderEnum>
  originalRelativeFilePath?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  pluginName?: Maybe<SortOrderEnum>
  relativeCompiledFilePath?: Maybe<SortOrderEnum>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  pageContext?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  path: Scalars['String']
  pluginCreator?: Maybe<SitePlugin>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldSelector = {
  children?: Maybe<NodeFieldSelector>
  component?: Maybe<FieldSelectorEnum>
  componentChunkName?: Maybe<FieldSelectorEnum>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  internalComponentName?: Maybe<FieldSelectorEnum>
  matchPath?: Maybe<FieldSelectorEnum>
  pageContext?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  path?: Maybe<FieldSelectorEnum>
  pluginCreator?: Maybe<SitePluginFieldSelector>
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  pageContext?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageSortInput = {
  children?: Maybe<NodeSortInput>
  component?: Maybe<SortOrderEnum>
  componentChunkName?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  internalComponentName?: Maybe<SortOrderEnum>
  matchPath?: Maybe<SortOrderEnum>
  pageContext?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  path?: Maybe<SortOrderEnum>
  pluginCreator?: Maybe<SitePluginSortInput>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<Scalars['JSON']>
  resolve?: Maybe<Scalars['String']>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  version?: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldSelector = {
  browserAPIs?: Maybe<FieldSelectorEnum>
  children?: Maybe<NodeFieldSelector>
  id?: Maybe<FieldSelectorEnum>
  internal?: Maybe<InternalFieldSelector>
  name?: Maybe<FieldSelectorEnum>
  nodeAPIs?: Maybe<FieldSelectorEnum>
  packageJson?: Maybe<FieldSelectorEnum>
  parent?: Maybe<NodeFieldSelector>
  pluginFilepath?: Maybe<FieldSelectorEnum>
  pluginOptions?: Maybe<FieldSelectorEnum>
  resolve?: Maybe<FieldSelectorEnum>
  ssrAPIs?: Maybe<FieldSelectorEnum>
  version?: Maybe<FieldSelectorEnum>
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<JsonQueryOperatorInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginSortInput = {
  browserAPIs?: Maybe<SortOrderEnum>
  children?: Maybe<NodeSortInput>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  name?: Maybe<SortOrderEnum>
  nodeAPIs?: Maybe<SortOrderEnum>
  packageJson?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  pluginFilepath?: Maybe<SortOrderEnum>
  pluginOptions?: Maybe<SortOrderEnum>
  resolve?: Maybe<SortOrderEnum>
  ssrAPIs?: Maybe<SortOrderEnum>
  version?: Maybe<SortOrderEnum>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFieldSelector = {
  description?: Maybe<FieldSelectorEnum>
  image?: Maybe<FieldSelectorEnum>
  siteUrl?: Maybe<FieldSelectorEnum>
  title?: Maybe<FieldSelectorEnum>
}

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSortInput = {
  description?: Maybe<SortOrderEnum>
  image?: Maybe<SortOrderEnum>
  siteUrl?: Maybe<SortOrderEnum>
  title?: Maybe<SortOrderEnum>
}

export type SiteSortInput = {
  buildTime?: Maybe<SortOrderEnum>
  children?: Maybe<NodeSortInput>
  graphqlTypegen?: Maybe<SortOrderEnum>
  host?: Maybe<SortOrderEnum>
  id?: Maybe<SortOrderEnum>
  internal?: Maybe<InternalSortInput>
  jsxRuntime?: Maybe<SortOrderEnum>
  parent?: Maybe<NodeSortInput>
  pathPrefix?: Maybe<SortOrderEnum>
  polyfill?: Maybe<SortOrderEnum>
  port?: Maybe<SortOrderEnum>
  siteMetadata?: Maybe<SiteSiteMetadataSortInput>
  trailingSlash?: Maybe<SortOrderEnum>
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  ne?: Maybe<Scalars['String']>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
}

export type TransformOptions = {
  cropFocus?: Maybe<ImageCropFocus>
  duotone?: Maybe<DuotoneGradient>
  fit?: Maybe<ImageFit>
  grayscale?: Maybe<Scalars['Boolean']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type ResumeSsrQueryVariables = Exact<{ [key: string]: never }>

export type ResumeSsrQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    bios: Array<{
      __typename?: 'GraphCMS_Bio'
      fullName: string
      headline: string
      about: string
      location: string
      phoneNumber: string
      email: string
    }>
    educations: Array<{
      __typename?: 'GraphCMS_Education'
      id: string
      school: string
      degree?: string | null | undefined
      areaOfStudy: string
      startDate: any
      endDate?: any | null | undefined
    }>
    skills: Array<{
      __typename?: 'GraphCMS_Skill'
      id: string
      title: string
      yearsOfExperience: number
    }>
    experiences: Array<{
      __typename?: 'GraphCMS_Experience'
      id: string
      company: string
      position: string
      startDate: any
      endDate?: any | null | undefined
      description: { __typename?: 'GraphCMS_RichText'; html: string }
    }>
    publications: Array<{
      __typename?: 'GraphCMS_Publication'
      id: string
      title: string
      link: string
      date: any
      opengraph: {
        __typename?: 'Opengraph'
        description?: string | null | undefined
        image?: string | null | undefined
        ogImage?: string | null | undefined
        ogDescription?: string | null | undefined
        ogTitle?: string | null | undefined
        ogType?: string | null | undefined
        ogUrl?: string | null | undefined
        twitterCard?: string | null | undefined
        twitterDescription?: string | null | undefined
        twitterImageSrc?: string | null | undefined
        twitterTitle?: string | null | undefined
        url?: string | null | undefined
      }
    }>
    conferences: Array<{
      __typename?: 'GraphCMS_Conference'
      id: string
      title: string
      topic: string
      link: string
      date: any
    }>
  }
}

export type SeoQueryVariables = Exact<{ [key: string]: never }>

export type SeoQuery = {
  __typename?: 'Query'
  site?:
    | {
        __typename?: 'Site'
        siteMetadata?:
          | {
              __typename?: 'SiteSiteMetadata'
              siteUrl?: string | null | undefined
              image?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
  gcms: {
    __typename?: 'GraphCMS'
    bios: Array<{
      __typename?: 'GraphCMS_Bio'
      fullName: string
      headline: string
    }>
  }
}

export type EducationQueryVariables = Exact<{ [key: string]: never }>

export type EducationQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    educations: Array<{
      __typename?: 'GraphCMS_Education'
      id: string
      school: string
      degree?: string | null | undefined
      areaOfStudy: string
      startDate: any
      endDate?: any | null | undefined
      description: { __typename?: 'GraphCMS_RichText'; html: string }
    }>
  }
}

export type ExperienceHistoryQueryVariables = Exact<{ [key: string]: never }>

export type ExperienceHistoryQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    experiences: Array<{
      __typename?: 'GraphCMS_Experience'
      id: string
      company: string
      position: string
      startDate: any
      endDate?: any | null | undefined
      location?: string | null | undefined
      locationIcon: string
      logo: { __typename?: 'GraphCMS_Asset'; url: string }
      description: { __typename?: 'GraphCMS_RichText'; html: string }
    }>
  }
}

export type IndexBannerQueryVariables = Exact<{ [key: string]: never }>

export type IndexBannerQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    bios: Array<{
      __typename?: 'GraphCMS_Bio'
      fullName: string
      headline: string
      about: string
      location: string
      phoneNumber: string
      email: string
    }>
    educations: Array<{
      __typename?: 'GraphCMS_Education'
      id: string
      school: string
      degree?: string | null | undefined
      areaOfStudy: string
      startDate: any
      endDate?: any | null | undefined
    }>
    skills: Array<{
      __typename?: 'GraphCMS_Skill'
      id: string
      title: string
      yearsOfExperience: number
    }>
    experiences: Array<{
      __typename?: 'GraphCMS_Experience'
      id: string
      company: string
      position: string
      startDate: any
      endDate?: any | null | undefined
      description: { __typename?: 'GraphCMS_RichText'; html: string }
    }>
    publications: Array<{
      __typename?: 'GraphCMS_Publication'
      id: string
      title: string
      link: string
      date: any
    }>
    conferences: Array<{
      __typename?: 'GraphCMS_Conference'
      id: string
      title: string
      topic: string
      link: string
      date: any
    }>
  }
}

export type MediaQueryVariables = Exact<{ [key: string]: never }>

export type MediaQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    publications: Array<{
      __typename: 'GraphCMS_Publication'
      id: string
      title: string
      link: string
      date: any
      opengraph: {
        __typename?: 'Opengraph'
        description?: string | null | undefined
        image?: string | null | undefined
        ogImage?: string | null | undefined
        ogDescription?: string | null | undefined
        ogTitle?: string | null | undefined
        ogType?: string | null | undefined
        ogUrl?: string | null | undefined
        twitterCard?: string | null | undefined
        twitterDescription?: string | null | undefined
        twitterImageSrc?: string | null | undefined
        twitterTitle?: string | null | undefined
        url?: string | null | undefined
      }
    }>
    conferences: Array<{
      __typename: 'GraphCMS_Conference'
      id: string
      title: string
      topic: string
      link: string
      date: any
      image?: { __typename?: 'GraphCMS_Asset'; url: string } | null | undefined
      videoEmbed?:
        | {
            __typename?: 'GraphCMS_VideoEmbed'
            link: string
            iframeOptions?: any | null | undefined
          }
        | null
        | undefined
    }>
    interviews: Array<{
      __typename: 'GraphCMS_Interview'
      id: string
      title: string
      date: any
      videoEmbed?:
        | {
            __typename?: 'GraphCMS_VideoEmbed'
            link: string
            iframeOptions?: any | null | undefined
          }
        | null
        | undefined
    }>
  }
}

export type SkillsQueryVariables = Exact<{ [key: string]: never }>

export type SkillsQuery = {
  __typename?: 'Query'
  gcms: {
    __typename?: 'GraphCMS'
    skills: Array<{
      __typename?: 'GraphCMS_Skill'
      id: string
      title: string
      yearsOfExperience: number
      logo: { __typename?: 'GraphCMS_Asset'; url: string }
    }>
  }
}
