// import { headers as nextHeaders } from 'next/headers';
import fs from 'fs';
import path from 'path';
let cachedData: any = null;
let cacheTimestamp: number = 0;
const CACHE_EXPIRATION_TIME = 86400 * 1000; // Cache expires in 24 hours (86400 seconds)

export async function getData() {
  const currentTime = Date.now();

  if (cachedData && currentTime - cacheTimestamp < CACHE_EXPIRATION_TIME) {
    // Return cached data if it hasn't expired
    return cachedData;
  }

  const filePath = path.join(process.cwd(), '/src/data/data.json');
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const fileData = await fs.promises.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileData)
  // const data = fs.readFileSync(filePath, 'utf-8');

  // Cache the data and set the timestamp
  cachedData = data;
  cacheTimestamp = currentTime;

  return data;
}

export async function getProjects() {
  const data = await getData();

  // console.log(data)

  return data.projects;
}

// export async function getProjects() {
//   const headers = new Headers(await nextHeaders());
//   const host = headers.get('host');
//   const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'; // Handle HTTPS in production
//   const baseUrl = `${protocol}://${host}`;

//   const response = await fetch(`${baseUrl}/api/projects`, {
//     cache: 'no-store', // Ensures fresh data on every request
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }

//   const data = await response.json();
  
//   return data.projects;
// }

export async function getProject(projectId: string) {
    const projects = await getProjects();

    if (!projects) {
        return [];
    }

    return projects.find((project: { id: string }) => project.id === projectId);
}
