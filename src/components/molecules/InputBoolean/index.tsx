import { Box } from '@components/atoms/Box';
import { InputLabel } from '@components/atoms/Input';
import React from 'react';

type Props = {
  label: string;
  className?: string;
  initialValue?: boolean;
  onChangeValue?: (value: boolean) => void;
  disabled?: boolean;
  required?: boolean;
};

export const InputBoolean: React.FC<Props> = ({
  label,
  className,
  initialValue,
  onChangeValue,
  disabled,
  required,
}) => {
  return (
    <Box className='flex flex-row gap-4 items-center text-silver-400'>
      <label>{label}</label>
      <input
        type='checkbox'
        className={className}
        disabled={disabled}
        required={required}
        defaultChecked={initialValue}
        onChange={(evt) => onChangeValue && onChangeValue(evt.target.checked)}
      />
    </Box>
  );
};
