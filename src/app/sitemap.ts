import type { MetadataRoute } from 'next'
import { getProjects } from '@/lib/serverData';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const projects = await getProjects();
    const projectsEntries = projects.map((project) => {
        return {
            url: `${baseUrl}/projects/${project.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }
    });
            
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        ...projectsEntries
    ]
}
