import React from 'react';

import { Box } from '@components/atoms/Box';

import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';
import { Type } from '../../../generated/graphql';

type Props = {
  label: string;
  className?: string;
  initialValue?: Type;
  onChangeValue?: (value: Type) => void;
  disabled?: boolean;
  required?: boolean;
};

export const InputType: React.FC<Props> = ({ label, className, initialValue, onChangeValue, disabled, required }) => {
  const styles = useStyles(ds);
  return (
    <Box variant='label-input-group'>
      <label>{label}</label>
      <select
        className={cn(styles.input, className)}
        defaultValue={initialValue}
        onChange={(event) => {
          const value = event.target.value as Type;
          onChangeValue && onChangeValue(value);
        }}
        disabled={disabled}
        required={required}
      >
        <option value={Type.String}>String</option>
        <option value={Type.Number}>Number</option>
        <option value={Type.Boolean}>Boolean</option>
        <option value={Type.Datetime}>Datetime</option>
        <option value={Type.Reference}>Reference</option>
        <option value={Type.ReferenceList}>List</option>
      </select>
    </Box>
  );
};
