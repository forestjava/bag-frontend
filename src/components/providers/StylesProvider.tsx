import { createContext, FC, ReactNode, useContext } from 'react';

const StylesContext = createContext<CSSModuleClasses | null>(null);

type Props = {
  styles: CSSModuleClasses | null;
  children: ReactNode | React.ReactNode[];
};

export const StylesProvider: FC<Props> = ({ styles, children }) => (
  <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
);

export const useStyles = (defaultStyles: CSSModuleClasses): CSSModuleClasses => {
  const styles = useContext(StylesContext);
  return styles || defaultStyles;
};
