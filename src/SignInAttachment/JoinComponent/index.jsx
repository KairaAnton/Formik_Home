import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../SignInAttachment.module.css';

const JoinComponent = (props) => {
  const {paragraph} = props;

  return (
    <div className={styles.divCheckbox}>
      <Field type='checkbox'  checked="" />
     {paragraph}
    </div>
  );
};

export default JoinComponent;
