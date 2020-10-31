import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const InputComponent = (props) => {
  const { name, ...rest } = props;
  return (
    <>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} component='span' />
    </>
  );
};

export default InputComponent;
