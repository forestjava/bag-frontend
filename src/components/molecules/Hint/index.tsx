import React from 'react';

import { Heading } from '../../atoms/Heading';

type Props = {
  children?: React.ReactNode;
};

export const Hint: React.FC<Props> = ({ children }) => {
  return (
    <Heading variant='top' className='pt-4'>
      {children}
    </Heading>
  );
};
