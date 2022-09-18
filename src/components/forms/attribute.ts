import React from 'react';

import {
  useAttributeQuery,
  useCreateOneAttributeMutation,
  useDeleteOneAttributeMutation,
  useUpdateOneAttributeMutation,
  AttributeCreateInput,
  AttributeUpdateInput,
  Type,
} from '../../generated/graphql';

import { invalidate } from '@components/providers/DataAccessProvider';
import { useXForm } from '@utils/forms';
import { useNavigate } from 'react-router-dom';

const LIST_QUERY_KEY = 'Attributes';
const ITEM_QUERY_KEY = 'Attribute';
const OWNER_QUERY_KEY = 'Entity';

export const useAttributeForm = (entityId: number, id?: number) => {
  const isCreate = !id;

  const key = { id };

  const { data, isLoading } = useAttributeQuery({ where: key }, { enabled: !isCreate });

  const form = useXForm({ defaultValues: data?.attribute, disabled: isLoading && !isCreate });

  const create = useCreateOneAttributeMutation().mutateAsync;
  const update = useUpdateOneAttributeMutation().mutateAsync;
  const remove = useDeleteOneAttributeMutation().mutateAsync;

  const navigate = useNavigate();

  const createElement = async () => {
    const data = form.values;
    const input: AttributeCreateInput = {
      entity: { connect: { id: entityId } },
      name: data.name!,
      query: data.query!,
      title: data.title!,
      type: data.type!,
    };
    if (data.type === Type.Reference) {
      input.typeReference = { connect: { id: data.typeReference?.id } };
    } else if (data.type === Type.ReferenceList) {
      input.typeReferenceList = { connect: { id: data.typeReferenceList?.id } };
    }
    data.typeReferencePresent && (input.typeReferencePresent = { connect: { id: data.typeReferencePresent.id } });
    input.required = data.required;
    input.list = data.list;
    //
    const { createOneAttribute } = await create({ data: input });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${entityId}/${createOneAttribute.id}`);

    await invalidate(OWNER_QUERY_KEY);
  };

  const updateElement = async () => {
    const data = form.values;
    const input: AttributeUpdateInput = {};
    input.name = { set: data.name };
    input.query = { set: data.query };
    input.title = { set: data.title };
    input.type = { set: data.type };
    if (data.type === Type.Reference) {
      input.typeReference = { connect: { id: data.typeReference?.id } };
      input.typeReferenceList = { disconnect: true };
      input.typeReferencePresent = { connect: { id: data.typeReferencePresent?.id } };
    } else if (data.type === Type.ReferenceList) {
      input.typeReferenceList = { connect: { id: data.typeReferenceList?.id } };
      input.typeReference = { disconnect: true };
      input.typeReferencePresent = { connect: { id: data.typeReferencePresent?.id } };
    } else {
      input.typeReferenceList = { disconnect: true };
      input.typeReference = { disconnect: true };
      input.typeReferencePresent = { disconnect: true };
    }
    input.required = { set: data.required };
    input.list = { set: data.list };

    await update({ where: key, data: input });
    await invalidate(LIST_QUERY_KEY);
    await invalidate(ITEM_QUERY_KEY);
    await invalidate(OWNER_QUERY_KEY);
  };

  const removeElement = async () => {
    await remove({ where: key });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${entityId}`);

    await invalidate(OWNER_QUERY_KEY);
  };

  const submit = () => {
    if (isCreate) createElement();
    else updateElement();
  };

  return {
    isCreate,
    input: form.input,
    button: form.button,
    create: createElement,
    remove: removeElement,
    update: updateElement,
    submit: form.handleSubmit(submit),
    values: form.values,
    reset: form.reset,
    modified: form.modified,
  };
};
