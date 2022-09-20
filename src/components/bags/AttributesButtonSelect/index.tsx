import { ButtonSelect } from '@components/molecules/ButtonSelect';
import React from 'react';
import { EntitiesQuery, SortOrder, Type, useAttributesQuery, useEntitiesQuery } from '../../../generated/graphql';

type Props = {
  entityId?: number;

  className?: string;
  value?: Partial<EntitiesQuery['entities']>;
  onChangeValue?: (value: Partial<EntitiesQuery['entities']>) => void;
  disabled?: boolean;
  required?: boolean;
};
export const AttributesButtonSelect: React.FC<Props> = ({ entityId, className, value, onChangeValue, disabled }) => {
  const { data } = useAttributesQuery(
    { where: { entityId: { equals: entityId } }, orderBy: { id: SortOrder.Asc } },
    {
      enabled: !!entityId,
    },
  );

  const only = [Type.String, Type.Number, Type.Boolean, Type.Moment];

  return data ? (
    <ButtonSelect
      className={className}
      placeholder='Select present attribute'
      options={data.attributes.filter((attr) => only.includes(attr.type))}
      present={(item) => item.name}
      value={value}
      onChangeValue={onChangeValue}
      disabled={disabled}
    />
  ) : null;
};
