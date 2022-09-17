import React from 'react';

// components
import { Box } from '../Box';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  variant: 'ghost' | 'primary' | 'secondary' | 'dangerous' | 'select' | 'select-item';
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant, className, children, icon, iconLeft, iconRight, ...props }, ref) => {
    const styles = useStyles(ds);
    return (
      <button
        ref={ref}
        type={type}
        className={cn(styles.button, variant !== 'ghost' && styles.prominent, styles[variant], className)}
        {...props}
      >
        {iconLeft}
        {icon}
        {children && <span className={styles.content}>{children}</span>}
        {iconRight}
      </button>
    );
  }
);
