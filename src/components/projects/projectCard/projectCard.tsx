// import Image from "next/image";
import { Project } from '@/interfaces';
import {workingPeriod} from '@/lib/dateHelper';
import styles from '@/styles/modules/projects.module.css';

export const ProjectCard = ({ project }: { project: Project }) => {
  const {start, end} = workingPeriod(project.start_date, project.end_date)
    return (
        <div className={styles.projectContainer}>
          <h3 className={styles.projectName}>{project.project_name}</h3>
          <p className={styles.list}>Working period: <span>{start}</span> - <span>{end}</span></p>
          <p className="text-lg mt-4">{project.general_information}</p>

          {project.responsibilities && project.responsibilities.length > 0 && (
            <>
              <h4 className="text-lg mt-4">Responsibilities:</h4>
              {project.responsibilities.map((responsibility: string, index: number) => (
                <li key={index} className="text-lg mt-4">{responsibility}</li>
              ))}
            </>
          )}


            {/* <img 
              src={`https://skillicons.dev/icons?i=${project.technicalStack.join(",")}`} 
              alt="Tech Stack"
            /> */}


          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4">
            View Project
          </a>
        </div>
    );
}
