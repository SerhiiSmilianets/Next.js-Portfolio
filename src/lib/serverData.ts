import { CachedData } from '@/interfaces'
import data from '@/data/data.json';

let cachedData: CachedData | null = null;
let cacheTimestamp: number = 0;
const CACHE_EXPIRATION_TIME = 86400 * 1000; // Cache expires in 24 hours (86400 seconds)
// const CACHE_EXPIRATION_TIME = 1000 // 1 second for testing

export async function getData() {
  const currentTime = Date.now();

  if (cachedData && currentTime - cacheTimestamp < CACHE_EXPIRATION_TIME) {
    console.log("server cached data is used");
    return cachedData;
  }

  // Return imported data instead of fetching from /api
  cachedData = data;
  cacheTimestamp = currentTime;
  
  console.log("server non-cached data is used");
  return cachedData;
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

export async function getContactInfo() {
  const data = await getData();

  return data.contactInfo;
}
