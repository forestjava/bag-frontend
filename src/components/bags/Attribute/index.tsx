import React from 'react';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';
import { Heading } from '@components/atoms/Heading';
import { InputLabel } from '@components/atoms/Input';
import { useAttributeForm } from '@components/forms/attribute';
import { InputBoolean } from '@components/molecules/InputBoolean';
import { useParams, useSearchParams } from 'react-router-dom';
import { Type, useAttributeQuery } from '../../../generated/graphql';
import { TypesButtonSelect } from '../TypesButtonSelect';
import { EntititesButtonSelect } from '../EntititesButtonSelect';
import { AttributesButtonSelect } from '../AttributesButtonSelect';

export const Attribute = () => {
  const { id: parameterEntityId, preset, relation, connect } = useParams();
  const entityId = parameterEntityId ? parseInt(parameterEntityId) : undefined;
  const connectId = connect ? parseInt(connect) : undefined;
  if (!entityId) throw new Error('Entity ID is not defined');

  const { attribute: parameterAttributeId } = useParams();
  const id = parameterAttributeId ? parseInt(parameterAttributeId) : undefined;

  const form = useAttributeForm(entityId, id);

  const { data: relationAttributeResponse } = useAttributeQuery(
    { where: { id: connectId } },
    { enabled: form.isCreate && !!relation && !!connectId },
  );
  const relationAttribute = relationAttributeResponse?.attribute;

  // auto fill preset
  React.useEffect(() => {
    if (preset === 'name') {
      form.reset({ name: 'name', title: 'Name', type: Type.String, required: true, list: true });
    }
  }, [preset]);

  // auto fill relation
  React.useEffect(() => {
    if (relationAttribute) {
      if (relation === '1') {
        form.reset({
          typeReferenceRelation: relationAttribute.typeReferenceRelation,
          name: relationAttribute.entity.itemName,
          type: Type.Reference,
          typeReference: relationAttribute.entity,
          list: true,
        });
      }
      if (relation === 'n') {
        form.reset({
          typeReferenceRelation: relationAttribute.typeReferenceRelation,
          name: relationAttribute.entity.listName,
          type: Type.ReferenceList,
          typeReference: relationAttribute.entity,
        });
      }
    }
  }, [relationAttribute]);

  // clean dependings when editing
  React.useEffect(() => {
    if (form.modified) {
      form.reset({ ...form.values, typeReference: undefined });
    }
  }, [form.values.type]);
  React.useEffect(() => {
    if (form.modified) {
      form.reset({ ...form.values, typeReferencePresent: undefined });
    }
  }, [form.values.typeReference]);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Attribute</Heading>
      <Form onSubmit={form.submit}>
        <InputLabel label='Name*' {...form.input('name')} />
        <InputLabel label='Title*' {...form.input('title')} />

        <Box variant='label-input-group'>
          <label>Type*</label>
          <Box className='grid grid-cols-[repeat(3,1fr)] gap-2'>
            <TypesButtonSelect {...form.input('type')} className='pr-10' />
            {(form.values.type === Type.Reference || form.values.type === Type.ReferenceList) && (
              <>
                <EntititesButtonSelect {...form.input('typeReference')} />
                <AttributesButtonSelect
                  entityId={form.values.typeReference?.id}
                  {...form.input('typeReferencePresent')}
                  className='w-full'
                />
              </>
            )}
          </Box>
          {form.values.typeReferenceRelation && (
            <span className='text-xs text-silver-300'>{form.values.typeReferenceRelation}</span>
          )}
        </Box>
        {form.values.type !== Type.ReferenceList && (
          <>
            <InputLabel label='Placeholder' {...form.input('placeholder')} />
            <InputBoolean label='Required' {...form.input('required')} />
            <InputBoolean label='Show in list' {...form.input('list')} />
          </>
        )}

        <Box variant='buttons-row'>
          {!form.isCreate && (
            <Button variant='dangerous' onClick={form.remove} {...form.button()}>
              Remove
            </Button>
          )}
          <Box className='w-full' />
          <Button variant='primary' {...form.button('submit')}>
            {form.isCreate ? 'Add' : 'Save'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
