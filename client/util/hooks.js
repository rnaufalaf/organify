import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (nativeEvent) => {
    setValues({ ...values, [nativeEvent.text]: nativeEvent.text });
  };

  const onSubmit = (nativeEvent) => {
    // event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
