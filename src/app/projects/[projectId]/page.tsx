import { getProject } from '../../utils/projectsUtils';
import { ProjectCard } from '@/components/ProjectCard';

export default async function ProjectDetailsPage({
    params,
    // searchParams
  }: {
    // searchParams: { [key: string]: string },
    params: Promise<{ projectId: string }>
  }) {
    // const sparams = await searchParams;
    // const { projectId } = sparams ;
    const { projectId } = await params;
    const project = await getProject(projectId)

    return (
        <div>
            <ProjectCard project={project} key={project.id} />
        </div>
    )
}
