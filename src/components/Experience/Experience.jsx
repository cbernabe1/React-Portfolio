import React from 'react'
import styles from "./Experience.module.css";
import histories from "../../data/history.json";
import skills from "../../data/skills.json";
import { getImageUrl } from '../../fetchImage';
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.cardContainer}>
            <div className={styles.skills}>
              {skills.map((skill) =>{
                return <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skill}/>
              })}
            </div>
            <div className={styles.experience}>
                <ul>
                    {histories.map((history) =>{
                      return (
                        <li className={styles.listItem}>
                          <div className={styles.image}>Image</div>
                          <div className="details">
                          <h3 className={styles.role}>{history.role}</h3>
                          <p className={styles.organisation}>{history.organisation}</p>
                          <p className={styles.date}>{history.startDate} - {history.endDate}</p>
                          <div className={styles.experiences}>
                          {history.experiences.map((experience) =>{
                            return <li>{experience}</li>
                          })}
                          </div>
                          </div>
                          </li>
                      );
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}
