import React from 'react';
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import {getImageUrl} from "../../fetchImage";
export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.listCard}>
      {projects.map((project) =>{
        return (
          <div className={styles.card}>
            <img src={getImageUrl(project.imageSrc)} alt={project.title} className={styles.image}/>
            <div className={styles.details}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.listSkills}>
                <ul>
                  {project.skills.map((skill) =>{
                    return(
                      <li>{skill}</li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.links}>
                <a href={project.demo}>Demo</a>
                <a href={project.source}>Source</a>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  )
}
