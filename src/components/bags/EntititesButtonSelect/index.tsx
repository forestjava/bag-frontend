import { ButtonSelect } from '@components/molecules/ButtonSelect';
import React from 'react';
import { EntitiesQuery, SortOrder, useEntitiesQuery } from '../../../generated/graphql';

type Props = {
  className?: string;
  initialValue?: Partial<EntitiesQuery['entities']>;
  onChangeValue?: (value: Partial<EntitiesQuery['entities']>) => void;
  disabled?: boolean;
  required?: boolean;
};
export const EntititesButtonSelect: React.FC<Props> = ({ className, initialValue, onChangeValue, disabled }) => {
  const { data } = useEntitiesQuery({ orderBy: { id: SortOrder.Asc } });
  return data ? (
    <ButtonSelect
      className={className}
      placeholder='Select type'
      options={data.entities}
      present={(entity) => entity.name}
      initialValue={initialValue}
      onChangeValue={onChangeValue}
      disabled={disabled}
    />
  ) : null;
};
