import { headers as nextHeaders } from 'next/headers';

export async function getProjects() {
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

export async function getProject(projectId: string) {
    const projects = await getProjects();
    if (!projects) {
        return null;
    }
    return projects.find((project: { id: string }) => project.id === projectId);
}
