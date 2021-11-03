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
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
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
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
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
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
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
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
  shadow: Scalars['String']
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
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  children = 'children',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  publicURL = 'publicURL',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
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
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
export type GraphCms_AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<GraphCms_Locale>
}

/** Asset system model */
export type GraphCms_AssetLogoExperienceArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

/** Asset system model */
export type GraphCms_AssetUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation
}

/** Asset system model */
export type GraphCms_AssetUpdatedByArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  fileName?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
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
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
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
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
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
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  size?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  width?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
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
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_BioCreatedByArgs = {
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_BioUpdatedByArgs = {
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
  about_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  about_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  email?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>
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
  fullName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  fullName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fullName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fullName_not_in?: Maybe<Array<Scalars['String']>>
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
  headline_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>
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
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  location_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>
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
  phoneNumber_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  phoneNumber_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  phoneNumber_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  about_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  about_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  email?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>
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
  fullName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  fullName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fullName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fullName_not_in?: Maybe<Array<Scalars['String']>>
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
  headline_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  headline_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  headline_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  headline_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  headline_not_in?: Maybe<Array<Scalars['String']>>
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
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  location_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars['String']>>
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
  phoneNumber_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  phoneNumber_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  phoneNumber_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
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
  link: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
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

export type GraphCms_ConferencePublishedByArgs = {
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceUpdatedByArgs = {
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ConferenceVideoEmbedArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  topic_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  topic_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  topic_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  topic_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  topic_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  topic_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  topic_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  topic_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  topic_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  topic_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_EducationUpdatedByArgs = {
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
  areaOfStudy_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  areaOfStudy_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  degree?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  degree_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  school?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  school_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  school_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  school_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  school_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  school_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  school_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  school_not_in?: Maybe<Array<Scalars['String']>>
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
  startDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  areaOfStudy_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  areaOfStudy_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  areaOfStudy_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  areaOfStudy_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  areaOfStudy_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  degree?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  degree_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  degree_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  degree_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  degree_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  degree_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  degree_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  degree_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  degree_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  degree_starts_with?: Maybe<Scalars['String']>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  school?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  school_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  school_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  school_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  school_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  school_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  school_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  school_not_in?: Maybe<Array<Scalars['String']>>
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
  startDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
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
  logo: GraphCms_Asset
  position: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  /** System stage field */
  stage: GraphCms_Stage
  startDate: Scalars['GraphCMS_Date']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_ExperienceCreatedByArgs = {
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperiencePublishedByArgs = {
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_ExperienceUpdatedByArgs = {
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
  company_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  company_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  position?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  position_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  company_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  company_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Scalars['String']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  endDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  logo?: Maybe<GraphCms_AssetWhereInput>
  position?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  position_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  position_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  position_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  position_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  position_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  position_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  position_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  startDate?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewUpdatedByArgs = {
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_InterviewVideoEmbedArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  videoEmbed?: Maybe<GraphCms_VideoEmbedWhereInput>
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
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<GraphCms_User>
  /** System stage field */
  stage: GraphCms_Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_PublicationCreatedByArgs = {
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_PublicationUpdatedByArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  date?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['GraphCMS_Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['GraphCMS_Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['GraphCMS_Date']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillPublishedByArgs = {
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_SkillUpdatedByArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  yearsOfExperience?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  yearsOfExperience_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  yearsOfExperience_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  yearsOfExperience_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  yearsOfExperience_not?: Maybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: Maybe<Array<Scalars['Int']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
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
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
  yearsOfExperience?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  yearsOfExperience_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  yearsOfExperience_gte?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  yearsOfExperience_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  yearsOfExperience_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  yearsOfExperience_lte?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  yearsOfExperience_not?: Maybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  yearsOfExperience_not_in?: Maybe<Array<Scalars['Int']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  kind?: Maybe<GraphCms_UserKind>
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<GraphCms_UserKind>>
  /** All values that are not equal to given value. */
  kind_not?: Maybe<GraphCms_UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<GraphCms_UserKind>>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
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
  picture_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  isActive?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>
  kind?: Maybe<GraphCms_UserKind>
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<GraphCms_UserKind>>
  /** All values that are not equal to given value. */
  kind_not?: Maybe<GraphCms_UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<GraphCms_UserKind>>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
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
  picture_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  /** System stage field */
  stage: GraphCms_Stage
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<GraphCms_User>
}

export type GraphCms_VideoEmbedCreatedByArgs = {
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
  locales?: Maybe<Array<GraphCms_Locale>>
}

export type GraphCms_VideoEmbedUpdatedByArgs = {
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
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
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  createdBy?: Maybe<GraphCms_UserWhereInput>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
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
  link_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>
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
  publishedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  publishedBy?: Maybe<GraphCms_UserWhereInput>
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>
  updatedBy?: Maybe<GraphCms_UserWhereInput>
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
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceConnectionGroupArgs = {
  field: GraphQlSourceFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type GraphQlSourceConnectionMaxArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceConnectionMinArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceConnectionSumArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge'
  next?: Maybe<GraphQlSource>
  node: GraphQlSource
  previous?: Maybe<GraphQlSource>
}

export enum GraphQlSourceFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fieldName = 'fieldName',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  typeName = 'typeName',
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
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceGroupConnectionGroupArgs = {
  field: GraphQlSourceFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type GraphQlSourceGroupConnectionMaxArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceGroupConnectionMinArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceGroupConnectionSumArgs = {
  field: GraphQlSourceFieldsEnum
}

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
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
  gatsbyImageData: Scalars['JSON']
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
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
}

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
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
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
}

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
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

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
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
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge'
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export enum MarkdownRemarkFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  excerpt = 'excerpt',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___depth = 'headings___depth',
  headings___id = 'headings___id',
  headings___value = 'headings___value',
  html = 'html',
  htmlAst = 'htmlAst',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
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
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

export type Mdx = Node & {
  __typename?: 'Mdx'
  body: Scalars['String']
  children: Array<Node>
  excerpt: Scalars['String']
  fileAbsolutePath: Scalars['String']
  frontmatter?: Maybe<MdxFrontmatter>
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
  html?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  mdxAST?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  rawBody: Scalars['String']
  slug?: Maybe<Scalars['String']>
  tableOfContents?: Maybe<Scalars['JSON']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MdxWordCount>
}

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
}

export type MdxConnection = {
  __typename?: 'MdxConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MdxEdge>
  group: Array<MdxGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum
}

export type MdxEdge = {
  __typename?: 'MdxEdge'
  next?: Maybe<Mdx>
  node: Mdx
  previous?: Maybe<Mdx>
}

export enum MdxFieldsEnum {
  body = 'body',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  excerpt = 'excerpt',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  headings = 'headings',
  headings___depth = 'headings___depth',
  headings___value = 'headings___value',
  html = 'html',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mdxAST = 'mdxAST',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  rawBody = 'rawBody',
  slug = 'slug',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export type MdxFilterInput = {
  body?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  rawBody?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
}

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter'
  title: Scalars['String']
}

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
}

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MdxEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<MdxGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum
}

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx'
  depth?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['String']>
}

export type MdxHeadingMdxFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MdxWordCount = {
  __typename?: 'MdxWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
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
  allMdx: MdxConnection
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
  mdx?: Maybe<Mdx>
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
  sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<FileSortInput>
}

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<GraphQlSourceSortInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<ImageSharpSortInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<MarkdownRemarkSortInput>
}

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<MdxSortInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SitePluginSortInput>
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
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
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
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
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

export type QueryMdxArgs = {
  body?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  rawBody?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
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
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  host?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  port?: Maybe<Scalars['Int']>
  siteMetadata?: Maybe<SiteSiteMetadata>
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
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
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
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___image = 'siteMetadata___image',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___title = 'siteMetadata___title',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
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
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge'
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
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
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  matchPath?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  path: Scalars['String']
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
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
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  matchPath = 'matchPath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreatorId = 'pluginCreatorId',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___autoLabel = 'pluginCreator___pluginOptions___autoLabel',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  pluginCreator___pluginOptions___cssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___enableWebVitalsTracking = 'pluginCreator___pluginOptions___enableWebVitalsTracking',
  pluginCreator___pluginOptions___entryLimit = 'pluginCreator___pluginOptions___entryLimit',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___fieldName = 'pluginCreator___pluginOptions___fieldName',
  pluginCreator___pluginOptions___fonts = 'pluginCreator___pluginOptions___fonts',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___labelFormat = 'pluginCreator___pluginOptions___labelFormat',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___lessBabel = 'pluginCreator___pluginOptions___lessBabel',
  pluginCreator___pluginOptions___mediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator___pluginOptions___pageTransitionDelay',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___root = 'pluginCreator___pluginOptions___root',
  pluginCreator___pluginOptions___sourceMap = 'pluginCreator___pluginOptions___sourceMap',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___typeName = 'pluginCreator___pluginOptions___typeName',
  pluginCreator___pluginOptions___url = 'pluginCreator___pluginOptions___url',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
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
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson?: Maybe<SitePluginPackageJson>
  parent?: Maybe<Node>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
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
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson___author = 'packageJson___author',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___description = 'packageJson___description',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
  packageJson___license = 'packageJson___license',
  packageJson___main = 'packageJson___main',
  packageJson___name = 'packageJson___name',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___version = 'packageJson___version',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___autoLabel = 'pluginOptions___autoLabel',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___cacheDigest = 'pluginOptions___cacheDigest',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___crossOrigin = 'pluginOptions___crossOrigin',
  pluginOptions___cssPropOptimization = 'pluginOptions___cssPropOptimization',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___enableWebVitalsTracking = 'pluginOptions___enableWebVitalsTracking',
  pluginOptions___entryLimit = 'pluginOptions___entryLimit',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___fieldName = 'pluginOptions___fieldName',
  pluginOptions___fonts = 'pluginOptions___fonts',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___labelFormat = 'pluginOptions___labelFormat',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___lessBabel = 'pluginOptions___lessBabel',
  pluginOptions___mediaTypes = 'pluginOptions___mediaTypes',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___pageTransitionDelay = 'pluginOptions___pageTransitionDelay',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___root = 'pluginOptions___root',
  pluginOptions___sourceMap = 'pluginOptions___sourceMap',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___typeName = 'pluginOptions___typeName',
  pluginOptions___url = 'pluginOptions___url',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
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
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  author?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  description?: Maybe<Scalars['String']>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  license?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  author?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  description?: Maybe<StringQueryOperatorInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  allExtensions?: Maybe<Scalars['Boolean']>
  anonymize?: Maybe<Scalars['Boolean']>
  autoLabel?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  cacheDigest?: Maybe<Scalars['String']>
  cache_busting_mode?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  crossOrigin?: Maybe<Scalars['String']>
  cssPropOptimization?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  display?: Maybe<Scalars['String']>
  enableWebVitalsTracking?: Maybe<Scalars['Boolean']>
  entryLimit?: Maybe<Scalars['Int']>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  failOnError?: Maybe<Scalars['Boolean']>
  fieldName?: Maybe<Scalars['String']>
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>
  head?: Maybe<Scalars['Boolean']>
  icon?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  labelFormat?: Maybe<Scalars['String']>
  legacy?: Maybe<Scalars['Boolean']>
  lessBabel?: Maybe<Scalars['Boolean']>
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  name?: Maybe<Scalars['String']>
  output?: Maybe<Scalars['String']>
  pageTransitionDelay?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
  respectDNT?: Maybe<Scalars['Boolean']>
  root?: Maybe<Scalars['String']>
  sourceMap?: Maybe<Scalars['Boolean']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  trackingId?: Maybe<Scalars['String']>
  typeName?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFilterInput = {
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  anonymize?: Maybe<BooleanQueryOperatorInput>
  autoLabel?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  enableWebVitalsTracking?: Maybe<BooleanQueryOperatorInput>
  entryLimit?: Maybe<IntQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  fieldName?: Maybe<StringQueryOperatorInput>
  fonts?: Maybe<StringQueryOperatorInput>
  head?: Maybe<BooleanQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  labelFormat?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  lessBabel?: Maybe<BooleanQueryOperatorInput>
  mediaTypes?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  respectDNT?: Maybe<BooleanQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  sourceMap?: Maybe<BooleanQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  trackingId?: Maybe<StringQueryOperatorInput>
  typeName?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  description?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
    }>
    conferences: Array<{
      __typename: 'GraphCMS_Conference'
      id: string
      title: string
      topic: string
      link: string
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
