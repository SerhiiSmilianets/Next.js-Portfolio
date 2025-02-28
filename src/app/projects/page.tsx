import { headers } from 'next/headers';

interface Project {
  id: string;
  project_name: string;
  start_date: string;
  end_date: string;
  link: string;
  logo: string;
  general_information: string;
  responsibilities: string;
}

async function getProjects() {
    const host = headers().get('host');
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
        <h1>Projects</h1>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
            <ul>
            {projects.map((project: Project) => (
              <li key={project.id}>
              <h3>{project.project_name}</h3>
              <p>{project.general_information}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              </li>
            ))}
            </ul>
        )}
      </div>
    );
  }