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

export const Entity = () => {
  const { id: parameter } = useParams();
  const id = parameter ? parseInt(parameter) : undefined;

  const { isCreate, input, button, remove, submit, entity, reset } = useEntityForm(id);

  const styles = useStyles(ds);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Entity</Heading>
      <Form onSubmit={submit}>
        <InputLabel label='Name' {...input('name')} />
        <InputLabel label='Item Name' {...input('itemName')} />
        <InputLabel label='List Name' {...input('listName')} />

        {!isCreate && (
          <>
            <Heading variant='top'>Attributes</Heading>
            <Box className='flex flex-col gap-1'>
              {entity?.attributes?.map((attribute) => (
                <NavLink
                  key={attribute.id}
                  to={`${attribute.id}`}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  {attribute.name}
                </NavLink>
              ))}
              {entity?.references?.map((attribute) => (
                <NavLink
                  key={attribute.id}
                  to={`/edit/${attribute.entity.id}/${attribute.id}`}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  {attribute.entity.listName}
                </NavLink>
              ))}
              {entity?.referenceLists?.map((attribute) => (
                <NavLink
                  key={attribute.id}
                  to={`/edit/${attribute.entity.id}/${attribute.id}`}
                  className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                >
                  {attribute.entity.itemName}
                </NavLink>
              ))}
            </Box>
            <NavLink to={`new`} className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}>
              <Plus />
            </NavLink>
          </>
        )}

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
