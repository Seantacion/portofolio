import styles from './WorkExperience.module.css';
import { Experience } from '@/types/experience.types';

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.card}>
              <span className={styles.date}>{exp.date}</span>
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <p>{exp.description}</p>
              <div className={styles.skills}>
                {exp.skills.map((skill, i) => (
                  <span key={i} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.dot}></div>
          </div>
        ))}
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default WorkExperience;