import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  clientPC: ClientPc;
  clientPCs: Array<ClientPc>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryClientPcArgs = {
  id: Scalars['Float'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type ClientPc = {
  __typename?: 'ClientPC';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  socketID?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  macAddresses: Array<Scalars['String']>;
  isOnline: Scalars['Boolean'];
  isOccupied: Scalars['Boolean'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['ID'];
  password: Scalars['String'];
  roles: Array<Role>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  accessLevel: Scalars['Float'];
  users: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['Boolean'];
  signup: User;
  createClientPC: ClientPc;
  deleteClientPC: Scalars['Boolean'];
  updateClientPC: ClientPc;
  activateClientPC: Scalars['Boolean'];
  createUser: User;
  deleteUser: Scalars['Boolean'];
  updateUser: User;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSignupArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateClientPcArgs = {
  macAddresses: Array<Scalars['String']>;
};


export type MutationDeleteClientPcArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateClientPcArgs = {
  isOccupied?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  macAddresses?: Maybe<Array<Scalars['String']>>;
  socketID?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationActivateClientPcArgs = {
  id: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  id: Scalars['Float'];
};

export type ClientPCsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientPCsQuery = (
  { __typename?: 'Query' }
  & { clientPCs: Array<(
    { __typename?: 'ClientPC' }
    & Pick<ClientPc, 'id' | 'name' | 'isOnline' | 'isOccupied'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);


export const ClientPCsDocument: DocumentNode<ClientPCsQuery, ClientPCsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"clientPCs"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientPCs"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isOnline"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isOccupied"},"arguments":[],"directives":[]}]}}]}}]};
export const UserDocument: DocumentNode<UserQuery, UserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]}]}}]}}]};
export const LoginDocument: DocumentNode<LoginMutation, LoginMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[]}]}}]};