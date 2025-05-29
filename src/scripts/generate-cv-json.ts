import fs from 'fs';
import path from 'path';
import { getData } from '@/lib/serverData';
import { workingPeriod } from '@/lib/dateHelper';
import { Company, AllData, CVExperience, AIResult, AIExperience } from '@/types';
import { hashCVData } from '@/utils/hashData';
import { generateSummaryAndHighlights } from '@/lib/ai';

// Use AI to generate a summary for the CV
const generateCVSummary = async (data : AllData, aiGeneratedData:AIResult) => {
    if (!aiGeneratedData || !aiGeneratedData.summary) {
        console.error('AI did not return a valid summary.');
        return data.personalInfo.summary
    }
    // If AI generated summary is available, use it
    return aiGeneratedData.summary;
}

const adjustAiGeneratedExperience = (experienceObject: CVExperience[], aiExperience: AIExperience[]) => {
    return experienceObject.map((company: CVExperience) => {
        const aiCompany = aiExperience && Array.isArray(aiExperience)
            ? aiExperience.find(exp => exp && exp.id === company.id)
            : undefined;
        if (!aiCompany || !aiCompany.projects || !Array.isArray(aiCompany.projects)) {
            console.warn(`No AI data found for company ${company.companyName}`);
            return company; // Return original if no AI data
        }

        // Adjust projects with AI highlights
        const adjustedProjects = company.projects.map((project) => {
            if (!project) {
                return project; // If project is null, return as is
            }
            const aiProject = aiCompany.projects.find(p => p && p.id === project.id);
            if (aiProject && aiProject.highlights && Array.isArray(aiProject.highlights)) {
                return {
                    ...project,
                    highlights: aiProject.highlights
                };
            }
            return project; // Return original project if no AI data
        });

        return {
            ...company,
            projects: adjustedProjects
        };
    })
}

// Use AI to generate experience data for the CV based on the companies and projects
const getCVExperience = async (data: AllData, aiGeneratedData:AIResult) => {
    const experienceObj = data.companies.map((company: Company) => {
            const { start, end } = workingPeriod(company.start_date, company.end_date);
            const experienceData = {
                id: company.id,
                companyName: company.companyName,
                position: company.position,
                startDate: start,
                endDate: end,
                projects: company.projects.map(proj => {
                    const project = data.projects.find(p => p.id === proj.id);
                    return project ? {
                        id: project.id,
                        projectName: project.project_name,
                        highlights: project.responsibilities
                    } : null;
                }).filter(Boolean)
            };

            return experienceData;
        });

    if (!aiGeneratedData || !aiGeneratedData.experience || !Array.isArray(aiGeneratedData.experience)) {
        console.error('AI did not return valid experience data.');
        return experienceObj;
    }

    return adjustAiGeneratedExperience(experienceObj, aiGeneratedData.experience);
}

// Generate the final CV JSON data structure
const generateCVJsonData = async (data : AllData) => {
    const aiGeneratedData = await generateSummaryAndHighlights(data);
    
    return {
        name: data.personalInfo.name,
        mainTitle: data.personalInfo.mainTitle,
        email: data.contactInfo.Email,
        phone: data.contactInfo.Phone,
        linkedIn: data.contactInfo.LinkedIn,
        portfolioLink: process.env.BASE_URL,
        education: data.personalInfo.education,
        educationPlace: data.personalInfo.educationPlace,
        educationStartYear: data.personalInfo.educationStartYear,
        educationEndYear: data.personalInfo.educationEndYear,
        summary: await generateCVSummary(data, aiGeneratedData),
        skills: data.skills.skillStack,
        languages: data.skills.languages,
        certificates: data.certificates,
        experience: await getCVExperience(data, aiGeneratedData)
    }
}

// Function to generate CV JSON and save it to a file
const generateCVJson = async (data: AllData, filePath:string) => {
    const cvData = await generateCVJsonData(data);
    fs.writeFileSync(filePath, JSON.stringify(cvData, null, 2));
}

(async () => {
    const CV_DIR = path.join(process.cwd(), 'public', 'cv');
    const HASH_DIR = path.join(process.cwd(), 'src/data/hash');
    const CV_JSON_PATH = path.join(process.cwd(), 'src/data', 'cv.json');
    
    if (!fs.existsSync(CV_DIR)) {
        fs.mkdirSync(CV_DIR, { recursive: true });
    }

    if (!fs.existsSync(HASH_DIR)) {
        fs.mkdirSync(HASH_DIR, { recursive: true });
    }

    const data = await getData();
    
    if (!data) {
        console.error('No data found to generate cv.json.');
        return;
    }

    const HASH_PATH = path.join(HASH_DIR, 'cv-json.hash');

    const currentHash = hashCVData(data);
    let previousHash = '';

    if (fs.existsSync(HASH_PATH)) {
        previousHash = fs.readFileSync(HASH_PATH, 'utf-8');
    }

    const needsRegeneration = !fs.existsSync(CV_JSON_PATH) || previousHash !== currentHash;
    
    if (needsRegeneration) {
        try {
            await generateCVJson(data, CV_JSON_PATH);
            fs.writeFileSync(HASH_PATH, currentHash);
        } catch (error) {
            console.error('Error generating CV JSON:', error);
            return;
        }
        console.log(`✅ CV JSON saved to ${CV_JSON_PATH}`);
    }
    
})();
