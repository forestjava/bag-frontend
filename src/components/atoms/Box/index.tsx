import React from 'react';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

// properties
export type BoxProps = {
  as?: keyof JSX.IntrinsicElements | React.FunctionComponent;
  variant?: 'input' | 'label-input-group' | 'view' | 'card' | 'drawer' | 'buttons-row';
  className?: string;
  children?: React.ReactNode;
};

export const Box: React.FC<BoxProps> = ({ as, variant, className, children }) => {
  const styles = useStyles(ds);
  const Tag = as || 'div';
  return <Tag className={cn(variant && styles[variant], className)}>{children}</Tag>;
};
