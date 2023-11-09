import React from 'react';
import styles from "./style.module.scss";
import {FaArrowRight} from "react-icons/fa";

export default function EmailBtn(){

  const handleButtonClick = () => {
    const email = 'avisionmarketing2@gmail.com';
    const subject = 'Website Visitor';

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Open Gmail with the mailto link in a new window or tab
    window.open(mailtoLink, '_blank');
  };

  return (
    <button className={styles.EBtn} onClick={handleButtonClick}>
      <FaArrowRight/>
    </button>
  );
};
