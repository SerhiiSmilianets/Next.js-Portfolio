import Image from "next/image";
import Link from 'next/link';
import { Project } from '@/interfaces';
import { getProjects } from '@/lib/serverData';
import styles from "@/styles/modules/projects.module.css";
import { ProjectsCarousel } from "@/components/projects/projectsCarousel/projectsCarousel";

export default async function ProjectsListDefault() {
    const projects = await getProjects(); // Fetch data before rendering
    console.log("default")
    
    return (
        <>
            {!projects || !projects.length ? (
            <p>No projects</p>
            ) : (
                // <div className={styles.projectsCarousel}>
                //     {projects.map((project: Project) => (
                //         <Link 
                //             href={{
                //                 pathname: `/projects/${project.id}`,
                //             }}
                //             prefetch={true}
                //             key={project.id + "-logo"} 
                //             className={styles.projectLogoContainer} >

                //             <Image src={`/projectsLogos/${project.logo}`} 
                //                 alt={project.project_name} 
                //                 className={styles.projectLogo} 
                //                 width={150}
                //                 height={150}  
                //             />
                //         </Link>
                //     ))}
                // </div>
                <ProjectsCarousel projects={projects}/>
            )}

            
        </>
    );
}
