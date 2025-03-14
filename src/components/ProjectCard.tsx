import Image from "next/image";
import { Project } from '@/interfaces';

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
      <div className="flex flex-row items-center justify-items-start p-4">
        {project.logo && 
          <Image src={`/projectsLogos/${project.logo}`} 
                alt={project.project_name} 
                className="bg-gray-200 project-logo" 
                width={150}
                height={150}
          />
        }
        <div className="flex flex-col justify-center pl-6 p-6">
          <h3 className="text-2xl font-bold mt-4">{project.project_name}</h3>
          <p className="text-lg mt-4">{project.general_information}</p>
          <p className="text-lg mt-4">{project.responsibilities}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4">
            View Project
          </a>
        </div>
      </div>
    );
}
