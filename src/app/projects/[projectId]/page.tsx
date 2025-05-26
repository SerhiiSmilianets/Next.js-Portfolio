import { getProject } from '@/lib/serverData';
import { ProjectCard } from '@/components/projects/projectCard/ProjectCard';
import { Project } from '@/types';

export default async function ProjectDetailsPage({
    params,
  }: {
    params: Promise<{ projectId: string }>
  }) {
    const { projectId } = await params;
    const project = (await getProject(projectId)) as Project | null;

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            {project && <ProjectCard project={project} key={project.id} />}
        </div>
    );
}
