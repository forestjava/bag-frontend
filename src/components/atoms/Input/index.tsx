import React from 'react';
import { Box } from '../Box';

import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

type InputGhostProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  value?: string | null;
  onChangeValue?: (value: string) => void;
};

export const InputGhost = React.forwardRef<HTMLInputElement, InputGhostProps>(
  ({ className, value, onChange, onChangeValue, ...props }, ref) => {
    const styles = useStyles(ds);
    return (
      <input
        ref={ref}
        className={cn(styles.ghost, className)}
        value={value || ''} // controlled components
        onChange={(evt) => {
          onChange && onChange(evt);
          onChangeValue && onChangeValue(evt.target.value);
        }}
        {...props}
      />
    );
  },
);

export type InputProps = InputGhostProps & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ iconLeft, iconRight, className, ...props }, ref) => {
    const styles = useStyles(ds);
    return (
      <Box variant='input' className={cn(styles.wrapper, className)}>
        {iconLeft}
        <InputGhost ref={ref} {...props} />
        {iconRight}
      </Box>
    );
  },
);

export type InputLabelProps = InputProps & {
  label: string;
  isLoading?: boolean; // TODO? show skeleton instead
};

export const InputLabel = React.forwardRef<HTMLInputElement, InputLabelProps>(({ label, className, ...props }, ref) => {
  return (
    <Box variant='label-input-group' className={className}>
      <label htmlFor={props.id}>{label}</label>
      <Input ref={ref} {...props} />
    </Box>
  );
});
