import { headers as nextHeaders } from 'next/headers';
import { Project } from '@/interfaces';
import { ProjectCard } from '@/components/ProjectCard';
import "./projects.css";

async function getProjects() {
    const headers = new Headers(await nextHeaders());
    const host = headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'; // Handle HTTPS in production
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/projects`, {
      cache: 'no-store', // Ensures fresh data on every request
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
  
    return response.json();
  }
  
  export default async function ProjectsPage() {
    const projects = await getProjects(); // Fetch data before rendering
  
    return (
      <div>
        <h1 className='page-title'>Projects</h1>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
            <ul>
            {projects.map((project: Project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
            </ul>
        )}
      </div>
    );
  }