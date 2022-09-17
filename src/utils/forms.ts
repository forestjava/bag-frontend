import React from 'react';

type FieldValues = Record<string, any>;

type UseXFormProps<TFieldValues> = {
  defaultValues?: Partial<TFieldValues> | null;
  disabled?: boolean;
};

export const useXForm = <TFieldValues extends FieldValues = FieldValues>(options?: UseXFormProps<TFieldValues>) => {
  // copy values to inner state
  const [values, setValues] = React.useState<Partial<TFieldValues>>(options?.defaultValues ?? {});
  React.useEffect(() => setValues(options?.defaultValues ?? {}), [options?.defaultValues]);

  // const reset = (key: keyof TFieldValues) => {
  //   setValues({ ...values, [key]: undefined });
  // };

  const input = (key: keyof TFieldValues) => {
    return {
      disabled: options?.disabled, // TODO skeleton onLoading?
      value: values?.[key] as any,
      onChangeValue: (value: any) => setValues({ ...values, [key]: value }),
    };
  };

  const handleSubmit = (callback: (data: Partial<TFieldValues>) => void) => (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    callback(values);
  };

  const button = (type?: 'reset' | 'button' | 'submit') => ({
    type,
    disabled: options?.disabled, // TODO spinner icon onLoading?
  });

  return {
    values,
    //reset,
    input,
    button,
    handleSubmit,
  };
};
