'use client'

import { Project } from '@/types';
import {workingPeriod} from '@/lib/dateHelper';
import styles from '@/styles/modules/projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectCard = ({ project }: { project: Project }) => {
  const {start, end} = workingPeriod(project.start_date, project.end_date)
    return (
      <AnimatePresence mode="wait">
        <motion.div className={styles.projectContainer}
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={styles.projectName}>{project.project_name}</h3>

          <p className={styles.projectParagraph}>{project.general_information}</p>

          <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Working period: </span> <span>{start}</span> - <span>{end}</span></p>

          <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Role: </span><span>{project.role}</span></p>

          <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Team size: </span><span>{project.team_size}</span></p>

          {project.technologiesUsed && project.technologiesUsed.length > 0 && (
              <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Technologies: </span><span>{project.technologiesUsed.join(', ')}</span></p>
          )}

          {project.technicalStack && project.technicalStack.length > 0 && (
            <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Technical Stack: </span><span>{project.technicalStack.join(', ')}</span></p>
          )}
          
          {project.responsibilities && project.responsibilities.length > 0 && (
            <>
              <p className={styles.projectParagraph}><span className={styles.projectParagraphTitle}>Responsibilities:</span></p>
              {project.responsibilities.map((responsibility: string, index: number) => (
                <li key={index} className={styles.projectParagraph}>{responsibility}</li>
              ))}
            </>
          )}

          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project
          </a>
        </motion.div>
      </AnimatePresence>
        
    );
}
