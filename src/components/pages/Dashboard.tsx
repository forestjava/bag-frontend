import React from 'react';

import { Box } from '@components/atoms/Box';
import { Toolbar } from '@components/bags/Toolbar';
import { EntitiesList } from '@components/bags/EntitiesList';
import { Routes, Route } from 'react-router-dom';
import { Entity } from '@components/bags/Entity';
import { Attribute } from '@components/bags/Attribute';
import { Hint } from '@components/molecules/Hint';

export const Dashboard: React.FC = () => {
  return (
    <Box className='grid grid-cols-[2rem,10rem,1fr,1fr] gap-4' as='main'>
      <Toolbar />
      <EntitiesList />
      <Routes>
        <Route path='/' element={<Hint>Select an entity</Hint>} />
        <Route path='/edit/:id/*' element={<Entity />} />
        <Route path='/add/*' element={<Entity />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Hint />} />
        <Route path='/edit/:id' element={<Hint>Select an attribute</Hint>} />
        <Route path='/add' element={<Hint>Save to define attributes</Hint>} />
        <Route path='/edit/:id/:attribute' element={<Attribute />} />
        <Route path='/edit/:id/new' element={<Attribute />} />
      </Routes>
    </Box>
  );
};
