import React from 'react';

import { Box } from '@components/atoms/Box';
import { Form } from '@components/atoms/Form';
import { Heading } from '@components/atoms/Heading';
import { InputLabel } from '@components/atoms/Input';

import { NavLink, useParams } from 'react-router-dom';
import { Button } from '@components/atoms/Button';

import { useEntityForm } from '@components/forms/entity';

// styles
import cn from '@utils/classnames'; // classnames
import ds from '../links.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';
import { ReactComponent as Plus } from '@assets/plus.svg';
import { EntitiesQuery, Type } from '../../../generated/graphql';

export const Entity = () => {
  const { id: parameter } = useParams();
  const id = parameter ? parseInt(parameter) : undefined;

  const form = useEntityForm(id);

  const styles = useStyles(ds);

  const notName = !form.values.attributes?.find((attribute) => attribute.name === 'name');
  const notConnected = (attr: { typeReferenceRelation?: string | null }) =>
    !form.values.attributes?.find((attribute) => attribute.typeReferenceRelation === attr.typeReferenceRelation);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Entity</Heading>
      <Form onSubmit={form.submit}>
        <InputLabel label='Name*' {...form.input('name')} />
        <InputLabel label='Description' {...form.input('description')} />
        <InputLabel label='Item Name (singular)*' {...form.input('itemName')} />
        <InputLabel label='List Name (plural)*' {...form.input('listName')} />

        {!form.isCreate && (
          <>
            <Heading variant='top'>Attributes</Heading>
            <Box className='flex flex-col gap-0.5'>
              {form.values.attributes?.map((attribute) => (
                <NavLink
                  key={attribute.id}
                  to={`${attribute.id}`}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  {attribute.name}
                </NavLink>
              ))}
            </Box>
            <Box className='flex flex-col gap-0.5'>
              <NavLink to={`new`} className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}>
                <Plus />
              </NavLink>
              {notName && (
                <NavLink
                  to={`new/name`}
                  className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}
                >
                  <Plus />
                  name
                </NavLink>
              )}
              {form.values.references?.filter(notConnected).map((attribute) => (
                <Box key={attribute.typeReferenceRelation} className='flex flex-row gap-0.5'>
                  <NavLink
                    to={`new/connect/1/${attribute.id}`}
                    className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}
                  >
                    <Plus />
                    {attribute.entity.itemName} {attribute.type === Type.Reference ? '1' : '∞'}:1
                  </NavLink>
                  <NavLink
                    to={`new/connect/n/${attribute.id}`}
                    className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}
                  >
                    <Plus />
                    {attribute.entity.listName} {attribute.type === Type.Reference ? '1' : '∞'}:∞
                  </NavLink>
                </Box>
              ))}
            </Box>
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
