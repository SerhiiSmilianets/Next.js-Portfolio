import { getProject } from '@/lib/serverData';
import { ProjectCard } from '@/components/projects/projectCard/ProjectCard';

export default async function ProjectDetailsPage({
    params,
  }: {
    params: Promise<{ projectId: string }>
  }) {
    const { projectId } = await params;
    const project = await getProject(projectId)

    return (
        <div>
            <ProjectCard project={project} key={project.id} />
        </div>
    )
}
