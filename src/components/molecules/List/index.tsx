import React from 'react';

// components
import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

import { ReactComponent as IconRemove } from './remove.svg';
import { ReactComponent as IconAppend } from './append.svg';

import { usePopover } from '@components/providers/PopoversProvider';

type Props<DataType = any> = {
  disabled?: boolean;
  // ... other properties of Button

  className?: string;
  options: DataType[];
  compare: (value1: DataType, value2: DataType) => boolean; // should compare passed values using `DataType` keys
  present: (value: DataType) => string; // should return text representation of value
  value?: DataType[];
  onChangeValue?: (value: DataType[]) => void;
};

export const List: React.FC<Props> = ({ className, options, present, compare, value, onChangeValue, ...props }) => {
  const styles = useStyles(ds);

  const [innerValue, setInnerValue] = React.useState(value ?? []);

  const remove = (removing: any) => {
    const nextValue = innerValue.filter((item) => !compare(item, removing));
    setInnerValue(nextValue);
    onChangeValue && onChangeValue(nextValue);
  };

  const append = (item: any) => {
    const nextValue = [...innerValue, item];
    setInnerValue(nextValue);
    onChangeValue && onChangeValue(nextValue);
  };

  const unselected = (item: any) => !innerValue.find((valueItem) => compare(valueItem, item));

  const trigger = React.useRef(null);
  const content = React.useRef(null);
  const popover = usePopover();

  const togglePopover = () => {
    popover.toggle(trigger, content, { placement: 'bottom' });
  };

  return (
    <>
      <Box variant='input' className={cn(styles.selectedList, className)}>
        {innerValue.map((item, i) => (
          <Box key={i} className={styles.selectedListItem}>
            <span>{present(item)}</span>
            <Button
              variant='ghost'
              icon={<IconRemove />}
              className={styles.buttonRemove}
              onClick={() => remove(item)}
            />
          </Box>
        ))}
        <Button
          ref={trigger}
          variant='ghost'
          icon={<IconAppend />}
          className={styles.buttonAppend}
          onClick={() => togglePopover()}
          {...props}
        />
      </Box>
      {popover.isOpen && (
        <ul ref={content} className={styles.optionsList}>
          {options &&
            options.filter(unselected).map((item, i) => (
              <li key={i}>
                <Button
                  variant='select-item'
                  onClick={() => {
                    append(item);
                    popover.close();
                  }}
                >
                  {present(item)}
                </Button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
