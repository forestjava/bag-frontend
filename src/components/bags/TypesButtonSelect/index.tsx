import { ButtonSelect } from '@components/molecules/ButtonSelect';
import React from 'react';
import { EntitiesQuery, SortOrder, Type, useAttributesQuery, useEntitiesQuery } from '../../../generated/graphql';

type Props = {
  className?: string;
  value?: Type;
  onChangeValue?: (value: Type) => void;
  onChange?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  required?: boolean;
};
export const TypesButtonSelect: React.FC<Props> = ({ className, value, onChangeValue, onChange, disabled }) => {
  const options = [Type.String, Type.Number, Type.Boolean, Type.Datetime, Type.Reference, Type.ReferenceList];

  return (
    <ButtonSelect
      className={className}
      placeholder='Select type'
      options={options}
      present={(item) => item}
      value={value}
      onChangeValue={onChangeValue}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
