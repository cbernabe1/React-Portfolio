import React from 'react'
import {getImageUrl} from "../../fetchImage";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.details}>
        <div className={styles.leftPane}>
          <p>Feel free to contact me through any of these platforms.</p>
        </div>
        <div className={styles.rightPane}>
          <ul className={styles.list}>
            <li className={styles.listItem}><img src={getImageUrl("contact/email.png")} alt="" /><a href="">myemail@email.com</a></li>
            <li className={styles.listItem}><img src={getImageUrl("contact/github.png")} alt="" /><a href="">myemail@email.com</a></li>
            <li className={styles.listItem}><img src={getImageUrl("contact/linkedin.png")} alt="" /><a href="">myemail@email.com</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
