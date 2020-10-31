import React from 'react';
import styles from '../SignInAttachment.module.css';

const index = (props) => {
  const { logo } = props;

  return <a href='#' className={styles.link}> {logo} </a>;
};


export default index;
