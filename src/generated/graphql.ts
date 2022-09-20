import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { fetcher } from './service';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAttribute = {
  __typename?: 'AggregateAttribute';
  _avg?: Maybe<AttributeAvgAggregate>;
  _count?: Maybe<AttributeCountAggregate>;
  _max?: Maybe<AttributeMaxAggregate>;
  _min?: Maybe<AttributeMinAggregate>;
  _sum?: Maybe<AttributeSumAggregate>;
};

export type AggregateEntity = {
  __typename?: 'AggregateEntity';
  _avg?: Maybe<EntityAvgAggregate>;
  _count?: Maybe<EntityCountAggregate>;
  _max?: Maybe<EntityMaxAggregate>;
  _min?: Maybe<EntityMinAggregate>;
  _sum?: Maybe<EntitySumAggregate>;
};

export type Attribute = {
  __typename?: 'Attribute';
  entity: Entity;
  entityId: Scalars['Int'];
  id: Scalars['Int'];
  list?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReference?: Maybe<Entity>;
  typeReferenceId?: Maybe<Scalars['Int']>;
  typeReferenceRelation?: Maybe<Scalars['String']>;
};

export type AttributeAvgAggregate = {
  __typename?: 'AttributeAvgAggregate';
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeReferenceId?: Maybe<Scalars['Float']>;
};

export type AttributeAvgOrderByAggregateInput = {
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
};

export type AttributeCountAggregate = {
  __typename?: 'AttributeCountAggregate';
  _all: Scalars['Int'];
  entityId: Scalars['Int'];
  id: Scalars['Int'];
  list: Scalars['Int'];
  name: Scalars['Int'];
  placeholder: Scalars['Int'];
  present: Scalars['Int'];
  required: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
  typeReferenceId: Scalars['Int'];
  typeReferenceRelation: Scalars['Int'];
};

export type AttributeCountOrderByAggregateInput = {
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  list?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  present?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
  typeReferenceRelation?: InputMaybe<SortOrder>;
};

export type AttributeCreateInput = {
  entity: EntityCreateNestedOneWithoutAttributesInput;
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReference?: InputMaybe<EntityCreateNestedOneWithoutReferencesInput>;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeCreateManyEntityInput = {
  id?: InputMaybe<Scalars['Int']>;
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReferenceId?: InputMaybe<Scalars['Int']>;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeCreateManyEntityInputEnvelope = {
  data: Array<AttributeCreateManyEntityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeCreateManyInput = {
  entityId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReferenceId?: InputMaybe<Scalars['Int']>;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeCreateManyTypeReferenceInput = {
  entityId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeCreateManyTypeReferenceInputEnvelope = {
  data: Array<AttributeCreateManyTypeReferenceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeCreateNestedManyWithoutEntityInput = {
  connect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttributeCreateOrConnectWithoutEntityInput>>;
  create?: InputMaybe<Array<AttributeCreateWithoutEntityInput>>;
  createMany?: InputMaybe<AttributeCreateManyEntityInputEnvelope>;
};

export type AttributeCreateNestedManyWithoutTypeReferenceInput = {
  connect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttributeCreateOrConnectWithoutTypeReferenceInput>>;
  create?: InputMaybe<Array<AttributeCreateWithoutTypeReferenceInput>>;
  createMany?: InputMaybe<AttributeCreateManyTypeReferenceInputEnvelope>;
};

export type AttributeCreateOrConnectWithoutEntityInput = {
  create: AttributeCreateWithoutEntityInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeCreateOrConnectWithoutTypeReferenceInput = {
  create: AttributeCreateWithoutTypeReferenceInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeCreateWithoutEntityInput = {
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReference?: InputMaybe<EntityCreateNestedOneWithoutReferencesInput>;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeCreateWithoutTypeReferenceInput = {
  entity: EntityCreateNestedOneWithoutAttributesInput;
  list?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: InputMaybe<Scalars['String']>;
  present?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReferenceRelation?: InputMaybe<Scalars['String']>;
};

export type AttributeGroupBy = {
  __typename?: 'AttributeGroupBy';
  _avg?: Maybe<AttributeAvgAggregate>;
  _count?: Maybe<AttributeCountAggregate>;
  _max?: Maybe<AttributeMaxAggregate>;
  _min?: Maybe<AttributeMinAggregate>;
  _sum?: Maybe<AttributeSumAggregate>;
  entityId: Scalars['Int'];
  id: Scalars['Int'];
  list?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  placeholder?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: Type;
  typeReferenceId?: Maybe<Scalars['Int']>;
  typeReferenceRelation?: Maybe<Scalars['String']>;
};

export type AttributeListRelationFilter = {
  every?: InputMaybe<AttributeWhereInput>;
  none?: InputMaybe<AttributeWhereInput>;
  some?: InputMaybe<AttributeWhereInput>;
};

export type AttributeMaxAggregate = {
  __typename?: 'AttributeMaxAggregate';
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
  typeReferenceId?: Maybe<Scalars['Int']>;
  typeReferenceRelation?: Maybe<Scalars['String']>;
};

export type AttributeMaxOrderByAggregateInput = {
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  list?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  present?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
  typeReferenceRelation?: InputMaybe<SortOrder>;
};

export type AttributeMinAggregate = {
  __typename?: 'AttributeMinAggregate';
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  present?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
  typeReferenceId?: Maybe<Scalars['Int']>;
  typeReferenceRelation?: Maybe<Scalars['String']>;
};

export type AttributeMinOrderByAggregateInput = {
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  list?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  present?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
  typeReferenceRelation?: InputMaybe<SortOrder>;
};

export type AttributeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AttributeOrderByWithAggregationInput = {
  _avg?: InputMaybe<AttributeAvgOrderByAggregateInput>;
  _count?: InputMaybe<AttributeCountOrderByAggregateInput>;
  _max?: InputMaybe<AttributeMaxOrderByAggregateInput>;
  _min?: InputMaybe<AttributeMinOrderByAggregateInput>;
  _sum?: InputMaybe<AttributeSumOrderByAggregateInput>;
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  list?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  present?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
  typeReferenceRelation?: InputMaybe<SortOrder>;
};

export type AttributeOrderByWithRelationInput = {
  entity?: InputMaybe<EntityOrderByWithRelationInput>;
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  list?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeholder?: InputMaybe<SortOrder>;
  present?: InputMaybe<SortOrder>;
  required?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  typeReference?: InputMaybe<EntityOrderByWithRelationInput>;
  typeReferenceId?: InputMaybe<SortOrder>;
  typeReferenceRelation?: InputMaybe<SortOrder>;
};

export enum AttributeScalarFieldEnum {
  EntityId = 'entityId',
  Id = 'id',
  List = 'list',
  Name = 'name',
  Placeholder = 'placeholder',
  Present = 'present',
  Required = 'required',
  Title = 'title',
  Type = 'type',
  TypeReferenceId = 'typeReferenceId',
  TypeReferenceRelation = 'typeReferenceRelation'
}

export type AttributeScalarWhereInput = {
  AND?: InputMaybe<Array<AttributeScalarWhereInput>>;
  NOT?: InputMaybe<Array<AttributeScalarWhereInput>>;
  OR?: InputMaybe<Array<AttributeScalarWhereInput>>;
  entityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  list?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringFilter>;
  placeholder?: InputMaybe<StringNullableFilter>;
  present?: InputMaybe<BoolNullableFilter>;
  required?: InputMaybe<BoolNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTypeFilter>;
  typeReferenceId?: InputMaybe<IntNullableFilter>;
  typeReferenceRelation?: InputMaybe<StringNullableFilter>;
};

export type AttributeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AttributeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AttributeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AttributeScalarWhereWithAggregatesInput>>;
  entityId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  list?: InputMaybe<BoolNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  placeholder?: InputMaybe<StringNullableWithAggregatesFilter>;
  present?: InputMaybe<BoolNullableWithAggregatesFilter>;
  required?: InputMaybe<BoolNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumTypeWithAggregatesFilter>;
  typeReferenceId?: InputMaybe<IntNullableWithAggregatesFilter>;
  typeReferenceRelation?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type AttributeSumAggregate = {
  __typename?: 'AttributeSumAggregate';
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  typeReferenceId?: Maybe<Scalars['Int']>;
};

export type AttributeSumOrderByAggregateInput = {
  entityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  typeReferenceId?: InputMaybe<SortOrder>;
};

export type AttributeUpdateInput = {
  entity?: InputMaybe<EntityUpdateOneRequiredWithoutAttributesNestedInput>;
  list?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  placeholder?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  present?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTypeFieldUpdateOperationsInput>;
  typeReference?: InputMaybe<EntityUpdateOneWithoutReferencesNestedInput>;
  typeReferenceRelation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AttributeUpdateManyMutationInput = {
  list?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  placeholder?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  present?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTypeFieldUpdateOperationsInput>;
  typeReferenceRelation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AttributeUpdateManyWithWhereWithoutEntityInput = {
  data: AttributeUpdateManyMutationInput;
  where: AttributeScalarWhereInput;
};

export type AttributeUpdateManyWithWhereWithoutTypeReferenceInput = {
  data: AttributeUpdateManyMutationInput;
  where: AttributeScalarWhereInput;
};

export type AttributeUpdateManyWithoutEntityNestedInput = {
  connect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttributeCreateOrConnectWithoutEntityInput>>;
  create?: InputMaybe<Array<AttributeCreateWithoutEntityInput>>;
  createMany?: InputMaybe<AttributeCreateManyEntityInputEnvelope>;
  delete?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttributeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  set?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  update?: InputMaybe<Array<AttributeUpdateWithWhereUniqueWithoutEntityInput>>;
  updateMany?: InputMaybe<Array<AttributeUpdateManyWithWhereWithoutEntityInput>>;
  upsert?: InputMaybe<Array<AttributeUpsertWithWhereUniqueWithoutEntityInput>>;
};

export type AttributeUpdateManyWithoutTypeReferenceNestedInput = {
  connect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttributeCreateOrConnectWithoutTypeReferenceInput>>;
  create?: InputMaybe<Array<AttributeCreateWithoutTypeReferenceInput>>;
  createMany?: InputMaybe<AttributeCreateManyTypeReferenceInputEnvelope>;
  delete?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttributeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  set?: InputMaybe<Array<AttributeWhereUniqueInput>>;
  update?: InputMaybe<Array<AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput>>;
  updateMany?: InputMaybe<Array<AttributeUpdateManyWithWhereWithoutTypeReferenceInput>>;
  upsert?: InputMaybe<Array<AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput>>;
};

export type AttributeUpdateWithWhereUniqueWithoutEntityInput = {
  data: AttributeUpdateWithoutEntityInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeUpdateWithWhereUniqueWithoutTypeReferenceInput = {
  data: AttributeUpdateWithoutTypeReferenceInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeUpdateWithoutEntityInput = {
  list?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  placeholder?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  present?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTypeFieldUpdateOperationsInput>;
  typeReference?: InputMaybe<EntityUpdateOneWithoutReferencesNestedInput>;
  typeReferenceRelation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AttributeUpdateWithoutTypeReferenceInput = {
  entity?: InputMaybe<EntityUpdateOneRequiredWithoutAttributesNestedInput>;
  list?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  placeholder?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  present?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTypeFieldUpdateOperationsInput>;
  typeReferenceRelation?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AttributeUpsertWithWhereUniqueWithoutEntityInput = {
  create: AttributeCreateWithoutEntityInput;
  update: AttributeUpdateWithoutEntityInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeUpsertWithWhereUniqueWithoutTypeReferenceInput = {
  create: AttributeCreateWithoutTypeReferenceInput;
  update: AttributeUpdateWithoutTypeReferenceInput;
  where: AttributeWhereUniqueInput;
};

export type AttributeWhereInput = {
  AND?: InputMaybe<Array<AttributeWhereInput>>;
  NOT?: InputMaybe<Array<AttributeWhereInput>>;
  OR?: InputMaybe<Array<AttributeWhereInput>>;
  entity?: InputMaybe<EntityRelationFilter>;
  entityId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  list?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringFilter>;
  placeholder?: InputMaybe<StringNullableFilter>;
  present?: InputMaybe<BoolNullableFilter>;
  required?: InputMaybe<BoolNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTypeFilter>;
  typeReference?: InputMaybe<EntityRelationFilter>;
  typeReferenceId?: InputMaybe<IntNullableFilter>;
  typeReferenceRelation?: InputMaybe<StringNullableFilter>;
};

export type AttributeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type Entity = {
  __typename?: 'Entity';
  _count?: Maybe<EntityCount>;
  attributes: Array<Attribute>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
  references: Array<Attribute>;
};


export type EntityAttributesArgs = {
  cursor?: InputMaybe<AttributeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttributeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type EntityReferencesArgs = {
  cursor?: InputMaybe<AttributeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttributeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};

export type EntityAvgAggregate = {
  __typename?: 'EntityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type EntityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type EntityCount = {
  __typename?: 'EntityCount';
  attributes: Scalars['Int'];
  references: Scalars['Int'];
};

export type EntityCountAggregate = {
  __typename?: 'EntityCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  itemName: Scalars['Int'];
  listName: Scalars['Int'];
  name: Scalars['Int'];
};

export type EntityCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  listName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type EntityCreateInput = {
  attributes?: InputMaybe<AttributeCreateNestedManyWithoutEntityInput>;
  description?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
  references?: InputMaybe<AttributeCreateNestedManyWithoutTypeReferenceInput>;
};

export type EntityCreateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
};

export type EntityCreateNestedOneWithoutAttributesInput = {
  connect?: InputMaybe<EntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntityCreateOrConnectWithoutAttributesInput>;
  create?: InputMaybe<EntityCreateWithoutAttributesInput>;
};

export type EntityCreateNestedOneWithoutReferencesInput = {
  connect?: InputMaybe<EntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntityCreateOrConnectWithoutReferencesInput>;
  create?: InputMaybe<EntityCreateWithoutReferencesInput>;
};

export type EntityCreateOrConnectWithoutAttributesInput = {
  create: EntityCreateWithoutAttributesInput;
  where: EntityWhereUniqueInput;
};

export type EntityCreateOrConnectWithoutReferencesInput = {
  create: EntityCreateWithoutReferencesInput;
  where: EntityWhereUniqueInput;
};

export type EntityCreateWithoutAttributesInput = {
  description?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
  references?: InputMaybe<AttributeCreateNestedManyWithoutTypeReferenceInput>;
};

export type EntityCreateWithoutReferencesInput = {
  attributes?: InputMaybe<AttributeCreateNestedManyWithoutEntityInput>;
  description?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
};

export type EntityGroupBy = {
  __typename?: 'EntityGroupBy';
  _avg?: Maybe<EntityAvgAggregate>;
  _count?: Maybe<EntityCountAggregate>;
  _max?: Maybe<EntityMaxAggregate>;
  _min?: Maybe<EntityMinAggregate>;
  _sum?: Maybe<EntitySumAggregate>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  itemName: Scalars['String'];
  listName: Scalars['String'];
  name: Scalars['String'];
};

export type EntityMaxAggregate = {
  __typename?: 'EntityMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemName?: Maybe<Scalars['String']>;
  listName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type EntityMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  listName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type EntityMinAggregate = {
  __typename?: 'EntityMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  itemName?: Maybe<Scalars['String']>;
  listName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type EntityMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  listName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type EntityOrderByWithAggregationInput = {
  _avg?: InputMaybe<EntityAvgOrderByAggregateInput>;
  _count?: InputMaybe<EntityCountOrderByAggregateInput>;
  _max?: InputMaybe<EntityMaxOrderByAggregateInput>;
  _min?: InputMaybe<EntityMinOrderByAggregateInput>;
  _sum?: InputMaybe<EntitySumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  listName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type EntityOrderByWithRelationInput = {
  attributes?: InputMaybe<AttributeOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  listName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  references?: InputMaybe<AttributeOrderByRelationAggregateInput>;
};

export type EntityRelationFilter = {
  is?: InputMaybe<EntityWhereInput>;
  isNot?: InputMaybe<EntityWhereInput>;
};

export enum EntityScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  ItemName = 'itemName',
  ListName = 'listName',
  Name = 'name'
}

export type EntityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EntityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EntityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EntityScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  itemName?: InputMaybe<StringWithAggregatesFilter>;
  listName?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type EntitySumAggregate = {
  __typename?: 'EntitySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type EntitySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type EntityUpdateInput = {
  attributes?: InputMaybe<AttributeUpdateManyWithoutEntityNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  listName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  references?: InputMaybe<AttributeUpdateManyWithoutTypeReferenceNestedInput>;
};

export type EntityUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  listName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EntityUpdateOneRequiredWithoutAttributesNestedInput = {
  connect?: InputMaybe<EntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntityCreateOrConnectWithoutAttributesInput>;
  create?: InputMaybe<EntityCreateWithoutAttributesInput>;
  update?: InputMaybe<EntityUpdateWithoutAttributesInput>;
  upsert?: InputMaybe<EntityUpsertWithoutAttributesInput>;
};

export type EntityUpdateOneWithoutReferencesNestedInput = {
  connect?: InputMaybe<EntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EntityCreateOrConnectWithoutReferencesInput>;
  create?: InputMaybe<EntityCreateWithoutReferencesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EntityUpdateWithoutReferencesInput>;
  upsert?: InputMaybe<EntityUpsertWithoutReferencesInput>;
};

export type EntityUpdateWithoutAttributesInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  listName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  references?: InputMaybe<AttributeUpdateManyWithoutTypeReferenceNestedInput>;
};

export type EntityUpdateWithoutReferencesInput = {
  attributes?: InputMaybe<AttributeUpdateManyWithoutEntityNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  listName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EntityUpsertWithoutAttributesInput = {
  create: EntityCreateWithoutAttributesInput;
  update: EntityUpdateWithoutAttributesInput;
};

export type EntityUpsertWithoutReferencesInput = {
  create: EntityCreateWithoutReferencesInput;
  update: EntityUpdateWithoutReferencesInput;
};

export type EntityWhereInput = {
  AND?: InputMaybe<Array<EntityWhereInput>>;
  NOT?: InputMaybe<Array<EntityWhereInput>>;
  OR?: InputMaybe<Array<EntityWhereInput>>;
  attributes?: InputMaybe<AttributeListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  itemName?: InputMaybe<StringFilter>;
  listName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  references?: InputMaybe<AttributeListRelationFilter>;
};

export type EntityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<Type>;
};

export type EnumTypeFilter = {
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type EnumTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypeFilter>;
  _min?: InputMaybe<NestedEnumTypeFilter>;
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAttribute: AffectedRowsOutput;
  createManyEntity: AffectedRowsOutput;
  createOneAttribute: Attribute;
  createOneEntity: Entity;
  deleteManyAttribute: AffectedRowsOutput;
  deleteManyEntity: AffectedRowsOutput;
  deleteOneAttribute?: Maybe<Attribute>;
  deleteOneEntity?: Maybe<Entity>;
  updateManyAttribute: AffectedRowsOutput;
  updateManyEntity: AffectedRowsOutput;
  updateOneAttribute?: Maybe<Attribute>;
  updateOneEntity?: Maybe<Entity>;
  upsertOneAttribute: Attribute;
  upsertOneEntity: Entity;
};


export type MutationCreateManyAttributeArgs = {
  data: Array<AttributeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyEntityArgs = {
  data: Array<EntityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneAttributeArgs = {
  data: AttributeCreateInput;
};


export type MutationCreateOneEntityArgs = {
  data: EntityCreateInput;
};


export type MutationDeleteManyAttributeArgs = {
  where?: InputMaybe<AttributeWhereInput>;
};


export type MutationDeleteManyEntityArgs = {
  where?: InputMaybe<EntityWhereInput>;
};


export type MutationDeleteOneAttributeArgs = {
  where: AttributeWhereUniqueInput;
};


export type MutationDeleteOneEntityArgs = {
  where: EntityWhereUniqueInput;
};


export type MutationUpdateManyAttributeArgs = {
  data: AttributeUpdateManyMutationInput;
  where?: InputMaybe<AttributeWhereInput>;
};


export type MutationUpdateManyEntityArgs = {
  data: EntityUpdateManyMutationInput;
  where?: InputMaybe<EntityWhereInput>;
};


export type MutationUpdateOneAttributeArgs = {
  data: AttributeUpdateInput;
  where: AttributeWhereUniqueInput;
};


export type MutationUpdateOneEntityArgs = {
  data: EntityUpdateInput;
  where: EntityWhereUniqueInput;
};


export type MutationUpsertOneAttributeArgs = {
  create: AttributeCreateInput;
  update: AttributeUpdateInput;
  where: AttributeWhereUniqueInput;
};


export type MutationUpsertOneEntityArgs = {
  create: EntityCreateInput;
  update: EntityUpdateInput;
  where: EntityWhereUniqueInput;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedEnumTypeFilter = {
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type NestedEnumTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTypeFilter>;
  _min?: InputMaybe<NestedEnumTypeFilter>;
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<NestedEnumTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAttribute: AggregateAttribute;
  aggregateEntity: AggregateEntity;
  attribute?: Maybe<Attribute>;
  attributes: Array<Attribute>;
  entities: Array<Entity>;
  entity?: Maybe<Entity>;
  findFirstAttribute?: Maybe<Attribute>;
  findFirstEntity?: Maybe<Entity>;
  groupByAttribute: Array<AttributeGroupBy>;
  groupByEntity: Array<EntityGroupBy>;
};


export type QueryAggregateAttributeArgs = {
  cursor?: InputMaybe<AttributeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryAggregateEntityArgs = {
  cursor?: InputMaybe<EntityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EntityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntityWhereInput>;
};


export type QueryAttributeArgs = {
  where: AttributeWhereUniqueInput;
};


export type QueryAttributesArgs = {
  cursor?: InputMaybe<AttributeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttributeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryEntitiesArgs = {
  cursor?: InputMaybe<EntityWhereUniqueInput>;
  distinct?: InputMaybe<Array<EntityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EntityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntityWhereInput>;
};


export type QueryEntityArgs = {
  where: EntityWhereUniqueInput;
};


export type QueryFindFirstAttributeArgs = {
  cursor?: InputMaybe<AttributeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttributeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryFindFirstEntityArgs = {
  cursor?: InputMaybe<EntityWhereUniqueInput>;
  distinct?: InputMaybe<Array<EntityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EntityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntityWhereInput>;
};


export type QueryGroupByAttributeArgs = {
  by: Array<AttributeScalarFieldEnum>;
  having?: InputMaybe<AttributeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AttributeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryGroupByEntityArgs = {
  by: Array<EntityScalarFieldEnum>;
  having?: InputMaybe<EntityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EntityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntityWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum Type {
  Boolean = 'Boolean',
  Moment = 'Moment',
  Number = 'Number',
  Reference = 'Reference',
  ReferenceList = 'ReferenceList',
  String = 'String'
}

export type AttributesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<AttributeOrderByWithRelationInput> | AttributeOrderByWithRelationInput>;
  where?: InputMaybe<AttributeWhereInput>;
}>;


export type AttributesQuery = { __typename?: 'Query', attributes: Array<{ __typename?: 'Attribute', id: number, name: string, type: Type }> };

export type AttributeQueryVariables = Exact<{
  where: AttributeWhereUniqueInput;
}>;


export type AttributeQuery = { __typename?: 'Query', attribute?: { __typename?: 'Attribute', id: number, name: string, title: string, type: Type, typeReferenceRelation?: string | null, present?: boolean | null, placeholder?: string | null, required?: boolean | null, list?: boolean | null, typeReference?: { __typename?: 'Entity', id: number, name: string } | null, entity: { __typename?: 'Entity', id: number, name: string, itemName: string, listName: string } } | null };

export type CreateOneAttributeMutationVariables = Exact<{
  data: AttributeCreateInput;
}>;


export type CreateOneAttributeMutation = { __typename?: 'Mutation', createOneAttribute: { __typename?: 'Attribute', id: number } };

export type UpdateOneAttributeMutationVariables = Exact<{
  data: AttributeUpdateInput;
  where: AttributeWhereUniqueInput;
}>;


export type UpdateOneAttributeMutation = { __typename?: 'Mutation', updateOneAttribute?: { __typename?: 'Attribute', id: number } | null };

export type DeleteOneAttributeMutationVariables = Exact<{
  where: AttributeWhereUniqueInput;
}>;


export type DeleteOneAttributeMutation = { __typename?: 'Mutation', deleteOneAttribute?: { __typename?: 'Attribute', id: number } | null };

export type EntitiesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<EntityOrderByWithRelationInput> | EntityOrderByWithRelationInput>;
}>;


export type EntitiesQuery = { __typename?: 'Query', entities: Array<{ __typename?: 'Entity', id: number, name: string }> };

export type EntityQueryVariables = Exact<{
  where: EntityWhereUniqueInput;
  orderAttributesBy?: InputMaybe<Array<AttributeOrderByWithRelationInput> | AttributeOrderByWithRelationInput>;
  orderReferencesBy?: InputMaybe<Array<AttributeOrderByWithRelationInput> | AttributeOrderByWithRelationInput>;
}>;


export type EntityQuery = { __typename?: 'Query', entity?: { __typename?: 'Entity', id: number, name: string, description?: string | null, itemName: string, listName: string, attributes: Array<{ __typename?: 'Attribute', id: number, name: string, typeReferenceRelation?: string | null }>, references: Array<{ __typename?: 'Attribute', id: number, name: string, type: Type, typeReferenceRelation?: string | null, entity: { __typename?: 'Entity', id: number, itemName: string, listName: string } }> } | null };

export type CreateOneEntityMutationVariables = Exact<{
  data: EntityCreateInput;
}>;


export type CreateOneEntityMutation = { __typename?: 'Mutation', createOneEntity: { __typename?: 'Entity', id: number } };

export type UpdateOneEntityMutationVariables = Exact<{
  data: EntityUpdateInput;
  where: EntityWhereUniqueInput;
}>;


export type UpdateOneEntityMutation = { __typename?: 'Mutation', updateOneEntity?: { __typename?: 'Entity', id: number } | null };

export type DeleteOneEntityMutationVariables = Exact<{
  where: EntityWhereUniqueInput;
}>;


export type DeleteOneEntityMutation = { __typename?: 'Mutation', deleteOneEntity?: { __typename?: 'Entity', id: number } | null };


export const AttributesDocument = `
    query Attributes($orderBy: [AttributeOrderByWithRelationInput!], $where: AttributeWhereInput) {
  attributes(orderBy: $orderBy, where: $where) {
    id
    name
    type
  }
}
    `;
export const useAttributesQuery = <
      TData = AttributesQuery,
      TError = unknown
    >(
      variables?: AttributesQueryVariables,
      options?: UseQueryOptions<AttributesQuery, TError, TData>
    ) =>
    useQuery<AttributesQuery, TError, TData>(
      variables === undefined ? ['Attributes'] : ['Attributes', variables],
      fetcher<AttributesQuery, AttributesQueryVariables>(AttributesDocument, variables),
      options
    );
export const AttributeDocument = `
    query Attribute($where: AttributeWhereUniqueInput!) {
  attribute(where: $where) {
    id
    name
    title
    type
    typeReference {
      id
      name
    }
    typeReferenceRelation
    present
    placeholder
    required
    list
    entity {
      id
      name
      itemName
      listName
    }
  }
}
    `;
export const useAttributeQuery = <
      TData = AttributeQuery,
      TError = unknown
    >(
      variables: AttributeQueryVariables,
      options?: UseQueryOptions<AttributeQuery, TError, TData>
    ) =>
    useQuery<AttributeQuery, TError, TData>(
      ['Attribute', variables],
      fetcher<AttributeQuery, AttributeQueryVariables>(AttributeDocument, variables),
      options
    );
export const CreateOneAttributeDocument = `
    mutation CreateOneAttribute($data: AttributeCreateInput!) {
  createOneAttribute(data: $data) {
    id
  }
}
    `;
export const useCreateOneAttributeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateOneAttributeMutation, TError, CreateOneAttributeMutationVariables, TContext>) =>
    useMutation<CreateOneAttributeMutation, TError, CreateOneAttributeMutationVariables, TContext>(
      ['CreateOneAttribute'],
      (variables?: CreateOneAttributeMutationVariables) => fetcher<CreateOneAttributeMutation, CreateOneAttributeMutationVariables>(CreateOneAttributeDocument, variables)(),
      options
    );
export const UpdateOneAttributeDocument = `
    mutation UpdateOneAttribute($data: AttributeUpdateInput!, $where: AttributeWhereUniqueInput!) {
  updateOneAttribute(data: $data, where: $where) {
    id
  }
}
    `;
export const useUpdateOneAttributeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateOneAttributeMutation, TError, UpdateOneAttributeMutationVariables, TContext>) =>
    useMutation<UpdateOneAttributeMutation, TError, UpdateOneAttributeMutationVariables, TContext>(
      ['UpdateOneAttribute'],
      (variables?: UpdateOneAttributeMutationVariables) => fetcher<UpdateOneAttributeMutation, UpdateOneAttributeMutationVariables>(UpdateOneAttributeDocument, variables)(),
      options
    );
export const DeleteOneAttributeDocument = `
    mutation DeleteOneAttribute($where: AttributeWhereUniqueInput!) {
  deleteOneAttribute(where: $where) {
    id
  }
}
    `;
export const useDeleteOneAttributeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteOneAttributeMutation, TError, DeleteOneAttributeMutationVariables, TContext>) =>
    useMutation<DeleteOneAttributeMutation, TError, DeleteOneAttributeMutationVariables, TContext>(
      ['DeleteOneAttribute'],
      (variables?: DeleteOneAttributeMutationVariables) => fetcher<DeleteOneAttributeMutation, DeleteOneAttributeMutationVariables>(DeleteOneAttributeDocument, variables)(),
      options
    );
export const EntitiesDocument = `
    query Entities($orderBy: [EntityOrderByWithRelationInput!]) {
  entities(orderBy: $orderBy) {
    id
    name
  }
}
    `;
export const useEntitiesQuery = <
      TData = EntitiesQuery,
      TError = unknown
    >(
      variables?: EntitiesQueryVariables,
      options?: UseQueryOptions<EntitiesQuery, TError, TData>
    ) =>
    useQuery<EntitiesQuery, TError, TData>(
      variables === undefined ? ['Entities'] : ['Entities', variables],
      fetcher<EntitiesQuery, EntitiesQueryVariables>(EntitiesDocument, variables),
      options
    );
export const EntityDocument = `
    query Entity($where: EntityWhereUniqueInput!, $orderAttributesBy: [AttributeOrderByWithRelationInput!], $orderReferencesBy: [AttributeOrderByWithRelationInput!]) {
  entity(where: $where) {
    id
    name
    description
    itemName
    listName
    attributes(orderBy: $orderAttributesBy) {
      id
      name
      typeReferenceRelation
    }
    references(orderBy: $orderReferencesBy) {
      id
      name
      type
      typeReferenceRelation
      entity {
        id
        itemName
        listName
      }
    }
  }
}
    `;
export const useEntityQuery = <
      TData = EntityQuery,
      TError = unknown
    >(
      variables: EntityQueryVariables,
      options?: UseQueryOptions<EntityQuery, TError, TData>
    ) =>
    useQuery<EntityQuery, TError, TData>(
      ['Entity', variables],
      fetcher<EntityQuery, EntityQueryVariables>(EntityDocument, variables),
      options
    );
export const CreateOneEntityDocument = `
    mutation CreateOneEntity($data: EntityCreateInput!) {
  createOneEntity(data: $data) {
    id
  }
}
    `;
export const useCreateOneEntityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateOneEntityMutation, TError, CreateOneEntityMutationVariables, TContext>) =>
    useMutation<CreateOneEntityMutation, TError, CreateOneEntityMutationVariables, TContext>(
      ['CreateOneEntity'],
      (variables?: CreateOneEntityMutationVariables) => fetcher<CreateOneEntityMutation, CreateOneEntityMutationVariables>(CreateOneEntityDocument, variables)(),
      options
    );
export const UpdateOneEntityDocument = `
    mutation UpdateOneEntity($data: EntityUpdateInput!, $where: EntityWhereUniqueInput!) {
  updateOneEntity(data: $data, where: $where) {
    id
  }
}
    `;
export const useUpdateOneEntityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateOneEntityMutation, TError, UpdateOneEntityMutationVariables, TContext>) =>
    useMutation<UpdateOneEntityMutation, TError, UpdateOneEntityMutationVariables, TContext>(
      ['UpdateOneEntity'],
      (variables?: UpdateOneEntityMutationVariables) => fetcher<UpdateOneEntityMutation, UpdateOneEntityMutationVariables>(UpdateOneEntityDocument, variables)(),
      options
    );
export const DeleteOneEntityDocument = `
    mutation DeleteOneEntity($where: EntityWhereUniqueInput!) {
  deleteOneEntity(where: $where) {
    id
  }
}
    `;
export const useDeleteOneEntityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteOneEntityMutation, TError, DeleteOneEntityMutationVariables, TContext>) =>
    useMutation<DeleteOneEntityMutation, TError, DeleteOneEntityMutationVariables, TContext>(
      ['DeleteOneEntity'],
      (variables?: DeleteOneEntityMutationVariables) => fetcher<DeleteOneEntityMutation, DeleteOneEntityMutationVariables>(DeleteOneEntityDocument, variables)(),
      options
    );