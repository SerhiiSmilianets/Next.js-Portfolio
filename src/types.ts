export type NavLinkProps = {
  href: string;
  icon?: string;
  name: string;
  handleClick?: () => void;
};

export type CVButtonProps = {
  showOnMobile: boolean;
  cvBtnStyles?: React.CSSProperties;
  handleClick?: () => void;
};

export type Project = {
    id: string;
    project_name: string;
    start_date: number;
    end_date: number|'Present';
    link: string;
    logo: string;
    general_information: string;
    responsibilities: string[];
    technologiesUsed: string[];
    team_size: number|string;
    role: string;
    technicalStack: string[];
};

export type ProjectSummary = {
    id: string;
    name: string;
};

export type Company = {
    id: string;
    companyName: string;
    start_date: number;
    end_date: number|string;
    position: string;
    projects: ProjectSummary[];
};

export type PersonalInfo = {
  name: string;
    mainTitle: string;
    secondaryTitles: string[];
    email: string;
    phone: string;
    education: string;
    educationPlace: string;
    summary: string;
};

export type Skills = {
  skillStack: string[];
    tools: string[];
    databases: string[];
    other: string[];
};

export type Certification = {
    id: string;
    name: string;
    link?: string;
    icon?: string;
}

export type ContactInfo = {
  Email: string;
    Phone: string;
    Telegram: string;
    LinkedIn: string;
    Facebook: string;
    Instagram: string;
    WhatsApp: string;
    GitHub: string;
    Viber: string;
};

export type CVData = {
  personalInfo: PersonalInfo;
  skills: Skills;
  contactInfo: ContactInfo;
  companies: Company[];
  projects: Project[];
  certifications: Certification[];
};

// Alias for cached data — identical to CVData
export type CachedData = CVData;
