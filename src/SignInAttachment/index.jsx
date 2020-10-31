import React from 'react';
import { Formik, Form } from 'formik';
import logo from './logo.png';
import InputComponent from './InputComponent';
import JoinComponent from './JoinComponent';
import SignUpComponent from './SignUpComponent';
import HeaderComponent from './HeaderComponent';
import styles from './SignInAttachment.module.css';
import * as Yup from 'yup';

const SignInAttachment = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passConfirm: '',
  };

  const handlerSubmit = (values, actions) => {
    actions.resetForm();
  };

  const SignupSchema = Yup.object().shape({});
  const image = <img src={logo} />;
  const submit = <submit className={styles.sbm}>Login</submit>;
  const iconFacebook = (
    <i className='fa fa-facebook-official' aria-hidden='true'></i>
  );
  const iconGoogle = <i className='fa fa-google' aria-hidden='true'></i>;

  return (
    <div className={styles.divRoot}>
      <div className={styles.nav}>
        {' '}
        <HeaderComponent logo={image} /> <HeaderComponent logo={submit} />{' '}
      </div>


            <p>CREATE AN ACCOUNT</p>
            <p>We always keep your name and email address private.</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={SignupSchema}
      >


        <Form className={styles.formContainer}>
          <div className={styles.divInput}>
            {' '}
            <InputComponent
              name='firstName'
              type='text'
              placeholder='firstName'
              className={styles.input}
            />
            <InputComponent
              name='lastName'
              type='text'
              placeholder='lastName'
              className={styles.input}
            />
          </div>
          <div className={styles.divInput}>
            <InputComponent
              name='login'
              type='text'
              placeholder='displayName'
              className={styles.input}
            />
            <InputComponent
              name='email'
              type='text'
              placeholder='email'
              className={styles.input}
            />
          </div>
          <div className={styles.divInput}>
            <InputComponent
              name='password'
              type='text'
              placeholder='password'
              className={styles.input}
            />
            <InputComponent
              name='password'
              type='text'
              placeholder='passConfirm'
              className={styles.input}
            />
          </div>

          <JoinComponent
            paragraph='Join As a Buyer
I am looking for a Name, Logo or Tagline for my business, brand or product.'
          />
          <JoinComponent
            paragraph='Join As a Creative or Marketplace Seller
I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
          />
          <JoinComponent paragraph=' Allow Squadhelp to send marketing/promotional offers from time to time' />

          <submit className={styles.sbmButton}>Create account</submit>
        </Form>
      </Formik>

      <p>By clicking this button, you agree to our <a className={styles.linkColor} href="#"> Terms of Service.</a></p>

      <SignUpComponent className={styles.signUpFace} logo={iconFacebook} parag='Sign up with Facebook' />
      <SignUpComponent className={styles.signUpGoog} logo={iconGoogle} parag='Sign up with Google' />
    </div>
  );
};

export default SignInAttachment;
