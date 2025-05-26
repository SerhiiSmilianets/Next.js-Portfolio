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
  name: string;
  startDate: number;
  endDate: number | 'Present';
  link: string;
  logo: string;
  description: string;
  responsibilities: string[];
  technologiesUsed: string[];
  teamSize: number;
  role: string;
  technicalStack: string[];
};

export type ProjectSummary = {
  id: string;
  name: string;
};

export type Company = {
  id: string;
  name: string;
  startDate: number;
  endDate: number | 'Present';
  position: string;
  projects: ProjectSummary[];
};

export type PersonalInfo = {
  fullName: string;
  mainTitle: string;
  secondaryTitles: string[];
  email: string;
  phone: string;
  education: string;
  educationInstitution: string;
  summary: string;
};

export type Skills = {
  stack: string[];
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
  email: string;
  phone: string;
  telegram: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  github: string;
  viber: string;
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
