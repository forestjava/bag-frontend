import { ButtonSelect } from '@components/molecules/ButtonSelect';
import React from 'react';
import { EntitiesQuery, SortOrder, useEntitiesQuery } from '../../../generated/graphql';

type Props = {
  className?: string;
  value?: Partial<EntitiesQuery['entities']>;
  onChangeValue?: (value: Partial<EntitiesQuery['entities']>) => void;
  disabled?: boolean;
  required?: boolean;
};
export const EntititesButtonSelect: React.FC<Props> = ({ className, value, onChangeValue, disabled }) => {
  const { data } = useEntitiesQuery({ orderBy: { id: SortOrder.Asc } });
  return data ? (
    <ButtonSelect
      className={className}
      placeholder='Select type'
      options={data.entities}
      present={(entity) => entity.name}
      value={value}
      onChangeValue={onChangeValue}
      disabled={disabled}
    />
  ) : null;
};
