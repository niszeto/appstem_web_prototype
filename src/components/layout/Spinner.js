import React, { Fragment } from "react";
import spinner from "../../assets/images/spinner.gif";
import styles from "./Spinner.module.css";

const Spinner = props => {
  return (
    <Fragment>
      <img src={spinner} alt="loading..." className={styles.spinner} />
    </Fragment>
  );
};

export default Spinner;
