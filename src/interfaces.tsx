export interface Project {
    id: string;
    project_name: string;
    start_date: number;
    end_date: number|string;
    link: string;
    logo: string;
    general_information: string;
    responsibilities: string[];
    technologies: string[];
    team_size: number;
    working_position: string;
    technicalStack: string[];
    projectType: string;
}

export interface NavLinkProps {
    href: string;
    icon?: string;
    name: string;
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
