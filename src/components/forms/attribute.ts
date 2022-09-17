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
const ITEM_QUERY_KEY = 'Entity';

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
    const data = form.changes;
    const input: AttributeCreateInput = {
      entity: { connect: { id: entityId } },
      name: data.name!,
      query: data.query!,
      title: data.title!,
      type: data.type ?? Type.String,
    };
    data.typeReference && (input.typeReference = { connect: { id: data.typeReference.id } });
    data.typeReferenceList && (input.typeReferenceList = { connect: { id: data.typeReferenceList.id } });
    data.required && (input.required = data.required);
    data.list && (input.list = data.list);

    const { createOneAttribute } = await create({ data: input });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${entityId}/${createOneAttribute.id}`);

    await invalidate(ITEM_QUERY_KEY);
  };

  const updateElement = async () => {
    const data = form.changes;
    if (Object.keys(data).length) {
      const input: AttributeUpdateInput = {};
      data.name && (input.name = { set: data.name });
      data.query && (input.query = { set: data.query });
      data.title && (input.title = { set: data.title });
      data.type && (input.type = { set: data.type });
      data.typeReference && (input.typeReference = { connect: { id: data.typeReference.id } });
      data.typeReferenceList && (input.typeReferenceList = { connect: { id: data.typeReferenceList.id } });
      data.required && (input.required = { set: data.required });
      data.list && (input.list = { set: data.list });
      await update({ where: key, data: input });
      await invalidate(LIST_QUERY_KEY);
      await invalidate(ITEM_QUERY_KEY);
    }
  };

  const removeElement = async () => {
    await remove({ where: key });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${entityId}`);

    await invalidate(ITEM_QUERY_KEY);
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
    values: { ...data?.attribute, ...form.changes },
  };
};
