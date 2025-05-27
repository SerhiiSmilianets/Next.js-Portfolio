import fs from 'fs';
import path from 'path';
import { getData } from '@/lib/serverData';
import { workingPeriod } from '@/lib/dateHelper';
import { Company, AllData } from '@/types';
import { hashCVData } from '@/utils/hashData';

// Use AI to generate a summary for the CV
const generateCVSummary = async (data : AllData) => {
    return data.personalInfo.summary;
}

// Use AI to generate experience data for the CV based on the companies and projects
const getCVExperience = async (data: AllData) => {

    return data.companies.map((company: Company) => {
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
                    role: project.role,
                    teamSize: project.team_size,
                    technicalStack: project.technicalStack,
                    responsibilities: project.responsibilities
                } : null;
            }).filter(Boolean)
        };

        return experienceData;
    });
}

// Generate the final CV JSON data structure
const generateCVJsonData = async (data : AllData) => {
    return {
        name: data.personalInfo.name,
        mainTitle: data.personalInfo.mainTitle,
        email: data.contactInfo.Email,
        phone: data.contactInfo.Phone,
        linkedIn: data.contactInfo.LinkedIn,
        education: data.personalInfo.education,
        educationPlace: data.personalInfo.educationPlace,
        summary: await generateCVSummary(data),
        skills: data.skills.skillStack,
        languages: data.skills.languages,
        certificates: data.certificates,
        experience: await getCVExperience(data)
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
