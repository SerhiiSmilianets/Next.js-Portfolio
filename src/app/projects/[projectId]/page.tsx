import { getProject } from '../../lib/data';
import { ProjectCard } from '@/ui/projects/projectCard/projectCard';

export default async function ProjectDetailsPage({
    params,
    // searchParams
  }: {
    // searchParams: { [key: string]: string },
    params: Promise<{ projectId: string }>
  }) {
    // const queryParams = await searchParams;
    // console.log(queryParams);
    // const { projectId } = sparams ;
    const { projectId } = await params;
    const project = await getProject(projectId)

    return (
        <div>
            <ProjectCard project={project} key={project.id} />
        </div>
    )
}
