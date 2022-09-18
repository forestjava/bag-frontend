import React from 'react';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Form } from '@components/atoms/Form';
import { Heading } from '@components/atoms/Heading';
import { InputLabel } from '@components/atoms/Input';
import { useAttributeForm } from '@components/forms/attribute';
import { InputBoolean } from '@components/molecules/InputBoolean';
import { useParams } from 'react-router-dom';
import { Type } from '../../../generated/graphql';
import { TypesButtonSelect } from '../TypesButtonSelect';
import { EntititesButtonSelect } from '../EntititesButtonSelect';
import { AttributesButtonSelect } from '../AttributesButtonSelect';

export const Attribute = () => {
  const { id: parameterEntityId } = useParams();
  const entityId = parameterEntityId ? parseInt(parameterEntityId) : undefined;
  if (!entityId) throw new Error('Entity ID is not defined');

  const { attribute: parameterAttributeId } = useParams();
  const id = parameterAttributeId ? parseInt(parameterAttributeId) : undefined;

  const form = useAttributeForm(entityId, id);
  React.useEffect(() => {
    if (form.modified) {
      form.reset({ ...form.values, typeReference: undefined, typeReferenceList: undefined });
    }
  }, [form.modified, form.values.type]);
  React.useEffect(() => {
    if (form.modified) {
      form.reset({ ...form.values, typeReferencePresent: undefined });
    }
  }, [form.modified, form.values.typeReference, form.values.typeReferenceList]);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Attribute</Heading>
      <Form onSubmit={form.submit}>
        <InputLabel label='Name' {...form.input('name')} />
        <InputLabel label='Query' {...form.input('query')} />
        <InputLabel label='Title' {...form.input('title')} />

        <Box variant='label-input-group'>
          <label>Type</label>
          <Box className='grid grid-cols-[repeat(3,1fr)] gap-2'>
            <TypesButtonSelect {...form.input('type')} className='pr-10' />
            {form.values.type === Type.Reference && (
              <>
                <EntititesButtonSelect {...form.input('typeReference')} />
                <AttributesButtonSelect
                  entityId={form.values.typeReference?.id}
                  {...form.input('typeReferencePresent')}
                  className='w-full'
                />
              </>
            )}
            {form.values.type === Type.ReferenceList && (
              <>
                <EntititesButtonSelect {...form.input('typeReferenceList')} />
                <AttributesButtonSelect
                  entityId={form.values.typeReferenceList?.id}
                  {...form.input('typeReferencePresent')}
                  className='w-full'
                />
              </>
            )}
          </Box>
        </Box>
        <InputBoolean label='Required' {...form.input('required')} />
        <InputBoolean label='Show in list' {...form.input('list')} />

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
