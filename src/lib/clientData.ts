import { CachedData } from '@/interfaces'
import { getExpYears } from '@/lib/dateHelper'

let cachedData: CachedData | null = null;
let cacheTimestamp: number = 0;
const CACHE_EXPIRATION_TIME = 86400 * 1000; // Cache expires in 24 hours (86400 seconds)
// const CACHE_EXPIRATION_TIME = 1000

export async function getData() {
  const currentTime = Date.now();

  if (cachedData && currentTime - cacheTimestamp < CACHE_EXPIRATION_TIME) {
    // Return cached data if it hasn't expired
    console.log("client cached data is used");
    return cachedData;
  }

  const response = await fetch("/api/data", {
    cache: 'no-store', // Ensures fresh data on every request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();

  cachedData = data;
  cacheTimestamp = currentTime;
  
  console.log("client non-cached data is used");
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

export async function getSummaryInfo() {
  const data = await getData();
  const summary = data.personalInfo.summary;
  const experienceYears = getExpYears();
  
  return summary.replace('{{experienceYears}}', experienceYears.toString());
}
