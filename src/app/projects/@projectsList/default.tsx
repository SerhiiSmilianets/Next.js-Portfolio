
import { getProjects } from '@/lib/serverData';
import { ProjectsCarousel } from "@/components/projects/projectsCarousel/projectsCarousel";

export default async function ProjectsListDefault() {
    const projects = await getProjects(); // Fetch data before rendering

    if (!projects || projects.length === 0) {
        return <p>No projects</p>;
    }

    return <ProjectsCarousel projects={projects}/>
}
