import React from 'react';
import { v4 as uuid } from 'uuid';

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
    const input: AttributeCreateInput = {
      entity: { connect: { id: entityId } },
      name: form.values.name!,
      title: form.values.title!,
      type: form.values.type!,
    };
    form.values.typeReference?.id && (input.typeReference = { connect: { id: form.values.typeReference.id } });
    form.values.typeReferencePresent &&
      (input.typeReferencePresent = { connect: { id: form.values.typeReferencePresent.id } });
    input.required = form.values.required;
    input.list = form.values.list;
    // provide relation if not yet
    if (form.values.type === Type.Reference || form.values.type === Type.ReferenceList) {
      if (form.values.typeReferenceRelation) input.typeReferenceRelation = form.values.typeReferenceRelation;
      else input.typeReferenceRelation = uuid();
    }
    //
    const { createOneAttribute } = await create({ data: input });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${entityId}/${createOneAttribute.id}`);

    await invalidate(OWNER_QUERY_KEY);
  };

  const updateElement = async () => {
    const input: AttributeUpdateInput = {};
    input.name = { set: form.values.name };
    input.title = { set: form.values.title };
    input.type = { set: form.values.type };
    if (form.values.type === Type.Reference || form.values.type === Type.ReferenceList) {
      input.typeReference = { connect: { id: form.values.typeReference?.id } };
      input.typeReferencePresent = { connect: { id: form.values.typeReferencePresent?.id } };
    } else {
      input.typeReference = { disconnect: true };
      input.typeReferencePresent = { disconnect: true };
    }
    input.required = { set: form.values.required };
    input.list = { set: form.values.list };
    // update relation if relation's type changed
    if (
      data &&
      data.attribute &&
      data.attribute.type !== form.values.type &&
      data.attribute.typeReference !== form.values.typeReference
    ) {
      input.typeReferenceRelation = { set: uuid() };
    }
    //
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
