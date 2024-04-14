import React from 'react'
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h1 className={styles.title}>About</h1>
            <ul className={styles.aboutList}>
                <li className={styles.listItem}>
                    <div className={styles.div}>About 1</div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.div}>About 2</div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.div}>About 3</div>
                </li>
            </ul>
    </section>
  )
}
