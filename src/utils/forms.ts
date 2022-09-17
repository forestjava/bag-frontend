import React from 'react';

type FieldValues = Record<string, any>;

type UseXFormProps<TFieldValues> = {
  defaultValues?: Partial<TFieldValues> | null;
  disabled?: boolean;
};

export const useXForm = <TFieldValues extends FieldValues = FieldValues>(options?: UseXFormProps<TFieldValues>) => {
  const [changes, change] = React.useState<Partial<TFieldValues>>({});

  const reset = (resetValues: Partial<TFieldValues>) => {
    resetValues && change(resetValues);
  };

  const input = (key: keyof TFieldValues) => {
    return {
      disabled: options?.disabled, // TODO skeleton onLoading?
      initialValue: options?.defaultValues?.[key] as any,
      onChangeValue: (value: any) => change({ ...changes, [key]: value }),
    };
  };

  const handleSubmit = (callback: (data: Partial<TFieldValues>) => void) => (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    callback(changes);
  };

  const button = (type?: 'reset' | 'button' | 'submit') => ({
    type,
    disabled: options?.disabled, // TODO spinner icon onLoading?
  });

  React.useEffect(() => {
    if (!options?.defaultValues) reset({});
  }, [options?.defaultValues]);

  return {
    changes,
    reset,
    input,
    button,
    handleSubmit,
  };
};
