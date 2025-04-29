import { getProject, getProjects } from '@/lib/serverData';
import { ProjectCard } from '@/components/projects/projectCard/ProjectCard';
import { Project } from '@/interfaces';

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((item : Project) => ({
        projectId: item.id,
    }));
}

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
