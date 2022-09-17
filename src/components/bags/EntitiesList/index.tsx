import React from 'react';

import { Box } from '@components/atoms/Box';
import { SortOrder, useEntitiesQuery } from '../../../generated/graphql';
import { Heading } from '@components/atoms/Heading';

import { ReactComponent as Plus } from '@assets/plus.svg';
import { NavLink } from 'react-router-dom';

// styles
import cn from '@utils/classnames'; // classnames
import ds from '../links.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

export const EntitiesList: React.FC = () => {
  const { data } = useEntitiesQuery({ orderBy: { id: SortOrder.Asc } });
  const entities = data?.entities ?? [];

  const styles = useStyles(ds);

  return (
    <Box className='flex flex-col gap-4 py-4'>
      <Heading variant='top'>Entities</Heading>
      <Box className='flex flex-col gap-1'>
        {entities.map((entity) => (
          <NavLink
            key={entity.id}
            to={`edit/${entity.id}`}
            className={({ isActive }) => cn(styles.link, isActive && styles.active)}
          >
            {entity.name}
          </NavLink>
        ))}
      </Box>
      <NavLink to={`add`} className={({ isActive }) => cn(styles.link, styles.add, isActive && styles.active)}>
        <Plus />
      </NavLink>
    </Box>
  );
};
