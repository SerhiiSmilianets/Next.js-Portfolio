
import { getProjects } from '@/lib/serverData';
import { ProjectsCarousel } from "@/components/projects/projectsCarousel/projectsCarousel";

export default async function ProjectsListDefault() {
    const projects = await getProjects(); // Fetch data before rendering
    console.log("default")
    
    return (
        <>
            {!projects || !projects.length ? (
            <p>No projects</p>
            ) : (
                <ProjectsCarousel projects={projects}/>
            )}
        </>
    );
}
