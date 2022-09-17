import { ButtonSelect } from '@components/molecules/ButtonSelect';
import React from 'react';
import { EntitiesQuery, SortOrder, useAttributesQuery, useEntitiesQuery } from '../../../generated/graphql';

type Props = {
  entityId: number;

  className?: string;
  value?: Partial<EntitiesQuery['entities']>;
  onChangeValue?: (value: Partial<EntitiesQuery['entities']>) => void;
  disabled?: boolean;
  required?: boolean;
};
export const AttributesButtonSelect: React.FC<Props> = ({ entityId, className, value, onChangeValue, disabled }) => {
  const { data } = useAttributesQuery({ where: { entityId: { equals: entityId } }, orderBy: { id: SortOrder.Asc } });

  return data ? (
    <ButtonSelect
      className={className}
      placeholder='Select present attribute'
      options={data.attributes}
      present={(item) => item.name}
      value={value}
      onChangeValue={onChangeValue}
      disabled={disabled}
    />
  ) : null;
};
