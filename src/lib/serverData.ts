import { headers as nextHeaders } from 'next/headers';
let cachedData: any = null;
let cacheTimestamp: number = 0;
const CACHE_EXPIRATION_TIME = 86400 * 1000; // Cache expires in 24 hours (86400 seconds)
// const CACHE_EXPIRATION_TIME = 1000

export async function getData() {
  const currentTime = Date.now();

  if (cachedData && currentTime - cacheTimestamp < CACHE_EXPIRATION_TIME) {
    // Return cached data if it hasn't expired
    console.log("server cached data is used");
    return cachedData;
  }

  const headers = new Headers(await nextHeaders());
  const host = headers.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'; // Handle HTTPS in production
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/data`, {
    cache: 'no-store', // Ensures fresh data on every request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();

  cachedData = data;
  cacheTimestamp = currentTime;
  
  console.log("server non-cached data is used");
  return data;
}

export async function getProjects() {
  const data = await getData();

  return data.projects;
}

export async function getProject(projectId: string) {
    const projects = await getProjects();

    if (!projects) {
        return [];
    }

    return projects.find((project: { id: string }) => project.id === projectId);
}

export async function getCompanies() {
  const data = await getData();

  return data.companies;
}
