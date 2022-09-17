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

  const { isCreate, input, button, remove, submit, values } = useAttributeForm(entityId, id);
  // React.useEffect(() => {
  //   reset('typeReference');
  //   reset('typeReferenceList');
  // }, [values.type]);
  // React.useEffect(() => {
  //   reset('typeReferencePresent');
  // }, [values.typeReference, values.typeReferenceList]);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Attribute</Heading>
      <Form onSubmit={submit}>
        <InputLabel label='Name' {...input('name')} />
        <InputLabel label='Query' {...input('query')} />
        <InputLabel label='Title' {...input('title')} />

        <Box variant='label-input-group'>
          <label>Type</label>
          <Box className='grid grid-cols-[repeat(3,1fr)] gap-2'>
            <TypesButtonSelect {...input('type')} className='pr-10' />
            {values.type === Type.Reference && (
              <>
                <EntititesButtonSelect {...input('typeReference')} />
                <AttributesButtonSelect
                  entityId={values.typeReference?.id!}
                  {...input('typeReferencePresent')}
                  className='w-full'
                />
              </>
            )}
            {values.type === Type.ReferenceList && (
              <>
                <EntititesButtonSelect {...input('typeReferenceList')} />
                <AttributesButtonSelect
                  entityId={values.typeReferenceList?.id!}
                  {...input('typeReferencePresent')}
                  className='w-full'
                />
              </>
            )}
          </Box>
        </Box>
        <InputBoolean label='Required' {...input('required')} />
        <InputBoolean label='Show in list' {...input('list')} />

        <Box variant='buttons-row'>
          {!isCreate && (
            <Button variant='dangerous' onClick={remove} {...button()}>
              Remove
            </Button>
          )}
          <Box className='w-full' />
          <Button variant='primary' {...button('submit')}>
            {isCreate ? 'Add' : 'Save'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
