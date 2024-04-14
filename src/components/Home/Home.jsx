import React from 'react'
import {getImageUrl} from "../../fetchImage";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <section className={styles.container}>
        <div className={styles.details}>
            <h1 className={styles.name}>Hey! I'm Chester</h1>
            <h3 className={styles.position}>A Web Developer</h3>
            <p className={styles.description}>I'm a full-stack developer with experience using React and Node.js.</p>
            <button className={styles.button}>Resume</button>
        </div>
        <div className={styles.image}></div>
    </section>
  )
}
