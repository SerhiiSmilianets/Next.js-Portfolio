export interface NavLinkProps {
    href: string;
    icon?: string;
    name: string;
    handleClick?: () => void;
}

export interface CVButtonProps {
    showOnMobile: boolean;
    cvBtnStyles?: React.CSSProperties;
    handleClick?: () => void;
}

export interface Project {
    id: string;
    project_name: string;
    start_date: number;
    end_date: number|string;
    link: string;
    logo: string;
    general_information: string;
    responsibilities: string[];
    technologiesUsed: string[];
    team_size: number|string;
    role: string;
    technicalStack: string[];
}

export interface Company {
    id: string;
    companyName: string;
    start_date: number;
    end_date: number|string;
    position: string;
    projects: {
        id: string;
        project_name: string;
    }[];
}

export interface PersonalInfo {
    name: string;
    mainTitle: string;
    secondaryTitles: string[];
    email: string;
    phone: string;
    education: string;
    educationPlace: string;
    summary: string;
}

export interface Skills {
    skillStack: string[];
    tools: string[];
    databases: string[];
    other: string[];
}

export interface ContactInfo {
    Email: string;
    Phone: string;
    Telegram: string;
    LinkedIn: string;
    Facebook: string;
    Instagram: string;
    WhatsApp: string;
    GitHub: string;
    Viber: string;
}

export interface CachedData {
    personalInfo: PersonalInfo;
    skills: Skills;
    contactInfo: ContactInfo;
    companies: Company[];
    projects: Project[];
}

export interface CVData {
    personalInfo: PersonalInfo;
    skills: Skills;
    contactInfo: ContactInfo;
    companies: Company[];
    projects: Project[];
}
