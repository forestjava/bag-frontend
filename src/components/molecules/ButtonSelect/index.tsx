import React from 'react';

// components
import { Button } from '@components/atoms/Button';

// styles
import cn from '@utils/classnames'; // classnames
import ds from './styles.module.css'; // default styles
import { useStyles } from '@components/providers/StylesProvider';

import { ReactComponent as Down } from './chevron-down.svg';
import { ReactComponent as Up } from './chevron-up.svg';

import { usePopover } from '@components/providers/PopoversProvider';

export type ButtonSelectProps<DataType = any> = {
  className?: string;
  disabled?: boolean;
  // ... other properties of Button
  placeholder: string;

  options: DataType[];
  present: (value: DataType) => string; // should return text representation of passed `value` using `DataType` props

  value?: DataType;
  onChangeValue?: (value: DataType) => void;
};

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  className,
  placeholder,
  // TODO required?: boolean checking
  options,
  present,
  value,
  onChangeValue,
  ...props
}) => {
  const styles = useStyles(ds);

  // copy value to inner state
  const [innerValue, setInnerValue] = React.useState(value);
  React.useEffect(() => setInnerValue(value), [value]);

  const button = innerValue ? present(innerValue) : placeholder;

  const trigger = React.useRef(null);
  const content = React.useRef(null);
  const popover = usePopover();

  const togglePopover = () => {
    popover.toggle(trigger, content, { placement: 'bottom', sameWidth: true });
  };

  return (
    <>
      <Button
        ref={trigger}
        variant='select'
        className={cn(styles.button, className)}
        iconRight={popover.isOpen ? <Up /> : <Down />}
        onClick={togglePopover}
        {...props}
      >
        {button}
      </Button>
      {popover.isOpen && (
        <ul ref={content} className={styles.list}>
          {options &&
            options.map((value, i) => (
              <li key={i}>
                <Button
                  variant='select-item'
                  onClick={() => {
                    setInnerValue(value);
                    onChangeValue && onChangeValue(value);
                    popover.close();
                  }}
                >
                  {present(value)}
                </Button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
