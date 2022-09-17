import React from 'react';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

// properties
type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form: React.FC<Props> = ({ className, children, ...props }) => {
  const styles = useStyles(ds);
  return (
    <form className={cn(styles.form, className)} {...props}>
      {children}
    </form>
  );
};
