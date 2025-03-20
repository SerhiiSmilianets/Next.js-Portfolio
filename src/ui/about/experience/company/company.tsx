import {Company} from '@/interfaces';
import {workingPeriod} from '@/app/lib/dateHelper';
import styles from "./company.module.css"
import Link from 'next/link';

export const CompanyComponent = ({companyData} : {companyData: Company}) => {
    const {start, end} = workingPeriod(companyData.start_date, companyData.end_date)
    return (
        <li>
            <ul>
                <p className={styles.paragraph}>{companyData.companyName}:</p>
                <li className={styles.list}>Working period: <span>{start}</span> - <span>{end}</span></li>
                <li className={styles.list}>Position: <span>{companyData.position}</span></li>
                <li className={styles.list}>Projects I was involved: 
                    <ul>
                        {companyData.projects && companyData.projects.length > 0 && (
                            companyData.projects.map((project: { id: string; project_name: string }) => (
                                <li key={project.id}>
                                    <Link href={`/projects/${project.id}`}>{project.project_name}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                </li>
            </ul>
            
        </li>
    )
}