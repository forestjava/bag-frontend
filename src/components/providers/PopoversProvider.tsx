import { createPopper, Placement } from '@popperjs/core';
import { createContext, FC, ReactNode, RefObject, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Reference = RefObject<HTMLElement> | null;

type PopoversCarrier = {
  isOpen: boolean;
  open: (trigger: Reference, content: Reference, options?: PopoverOptions) => void;
  close: () => void;
  toggle: (trigger: Reference, content: Reference, options?: PopoverOptions) => void;
};

const PopoversContext = createContext<PopoversCarrier | null>(null);

type PopoverOptions = {
  placement?: Placement;
  sameWidth?: boolean;
  sameHeight?: boolean;
};

type State = {
  isOpen: boolean;
  trigger: Reference;
  content: Reference;
  options?: PopoverOptions;
};

type Props = {
  children: ReactNode | React.ReactNode[];
};

export const PopoversProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({ isOpen: false, trigger: null, content: null, options: undefined });

  useLayoutEffect(() => {
    if (state.isOpen && state.trigger?.current && state.content?.current) {
      if (state.options?.sameWidth) {
        state.content.current.style.width = `${state.trigger.current.offsetWidth}px`;
      }
      if (state.options?.sameHeight) {
        state.content.current.style.height = `${state.trigger.current.offsetHeight}px`;
      }
      createPopper(state.trigger.current, state.content.current, {
        placement: state.options?.placement || 'bottom',
      });
    }
  }, [state]);

  const open = (trigger: Reference, content: Reference, options?: PopoverOptions) => {
    setState({ isOpen: true, trigger, content, options });
  };

  const close = () => {
    setState({ isOpen: false, trigger: null, content: null, options: undefined });
  };

  const toggle = (trigger: Reference, content: Reference, options?: PopoverOptions) => {
    if (state.isOpen) close();
    else open(trigger, content, options);
  };

  const location = useLocation();
  useEffect(() => close(), [location]);

  return (
    <PopoversContext.Provider value={{ isOpen: state.isOpen, open, close, toggle }}>
      {children}
    </PopoversContext.Provider>
  );
};

export const usePopover = (): PopoversCarrier => {
  const context = useContext(PopoversContext);
  if (context === null) throw new Error('Using popovers with no PopoversProvider');
  return context;
};
