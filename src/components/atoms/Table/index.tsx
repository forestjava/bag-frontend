import React from 'react';

// components
import { Box } from '../Box';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

// properties
type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
} & React.TableHTMLAttributes<HTMLTableElement>;

export const Table: React.FC<Props> = ({ className, children, ...props }) => {
  const styles = useStyles(ds);
  return (
    <Box className={cn(styles.table, className)} {...props}>
      <table>{children}</table>
    </Box>
  );
};
