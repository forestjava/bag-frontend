import React from 'react';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';

import { ReactComponent as Load } from './load.svg';
import { ReactComponent as Save } from './save.svg';
import { ReactComponent as Generate } from './generate.svg';

export const Toolbar: React.FC = () => {
  return (
    <Box className='flex flex-col p-2 gap-2'>
      <Button variant='ghost' icon={<Load />} />
      <Button variant='ghost' icon={<Save />} />
      <Button variant='ghost' icon={<Generate />} />
    </Box>
  );
};
