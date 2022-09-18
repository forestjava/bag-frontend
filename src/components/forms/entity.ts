import React from 'react';

import {
  useEntityQuery,
  useCreateOneEntityMutation,
  useDeleteOneEntityMutation,
  useUpdateOneEntityMutation,
  EntityCreateInput,
  EntityUpdateInput,
} from '../../generated/graphql';

import { invalidate } from '@components/providers/DataAccessProvider';
import { useXForm } from '@utils/forms';
import { useNavigate } from 'react-router-dom';

const LIST_QUERY_KEY = 'Entities';
const ITEM_QUERY_KEY = 'Entity';

export const useEntityForm = (id?: number) => {
  const isCreate = !id;

  const key = { id };

  const { data, isLoading } = useEntityQuery({ where: key }, { enabled: !isCreate });

  const form = useXForm({ defaultValues: data?.entity, disabled: isLoading && !isCreate });

  const create = useCreateOneEntityMutation().mutateAsync;
  const update = useUpdateOneEntityMutation().mutateAsync;
  const remove = useDeleteOneEntityMutation().mutateAsync;

  const navigate = useNavigate();

  const createElement = async () => {
    const data = form.values;
    const input: EntityCreateInput = {
      name: data.name!,
      itemName: data.itemName!,
      listName: data.listName!,
    };
    const { createOneEntity } = await create({ data: input });
    await invalidate(LIST_QUERY_KEY);
    navigate(`/edit/${createOneEntity.id}`);
  };

  const updateElement = async () => {
    const data = form.values;
    const input: EntityUpdateInput = {};
    input.name = { set: data.name };
    input.itemName = { set: data.itemName };
    input.listName = { set: data.listName };
    //
    await update({ where: key, data: input });
    await invalidate(LIST_QUERY_KEY);
    await invalidate(ITEM_QUERY_KEY);
  };

  const removeElement = async () => {
    await remove({ where: key });
    await invalidate(LIST_QUERY_KEY);
    navigate('/');
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

export const invalidateEntity = async () => await invalidate(ITEM_QUERY_KEY);
