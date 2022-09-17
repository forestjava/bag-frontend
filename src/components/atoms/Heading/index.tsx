import React from 'react';

import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

// properties
type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  variant?: 'top';
  children: React.ReactNode | React.ReactNode[];
};

export const Heading: React.FC<Props> = ({ as = 'h2', className, variant: preset, children }) => {
  const styles = useStyles(ds);
  const Tag: keyof JSX.IntrinsicElements = as;
  return <Tag className={cn(preset && styles[preset], className)}>{children}</Tag>;
};
