import Image from "next/image";
import Link from 'next/link';
import { Project } from '@/interfaces';
import { getProjects } from '../../utils/projectsUtils';
import { Row } from "@/components/Row";

export default async function ProjectsCarouselDefault() {
    const projects = await getProjects(); // Fetch data before rendering
    
    return (
        <>
            {!projects || !projects.length ? (
            <p>No projects</p>
            ) : (
                <Row>
                {projects.map((project: Project) => (
                    <Link 
                        href={{
                            pathname: `/projects/${project.id}`,
                            // query: { projectId: project.id }
                        }}
                        prefetch={true}
                        key={project.id + "-logo"} 
                        className="project-logo-container">

                        <Image src={`/projectsLogos/${project.logo}`} 
                                alt={project.project_name} 
                                className="bg-gray-200 project-logo" 
                                width={150}
                                height={150}
                                
                        />
                    </Link>
                    
                ))}
                </Row>
            )}
        </>
    );
}
