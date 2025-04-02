import {Company} from '@/interfaces';
import {workingPeriod} from '@/app/lib/dateHelper';
import styles from "./company.module.css"
import Link from 'next/link';


export const CompanyComponent = ({companyData} : {companyData: Company}) => {
    const {start, end} = workingPeriod(companyData.start_date, companyData.end_date)
    return (
        <div className={styles.companyContainer}> 
            <details className={styles.details}>
                <summary className={styles.summary}>{companyData.companyName}</summary>
                <article className={styles.detailsContent}>
                    <p className={styles.list}>Working period: <span>{start}</span> - <span>{end}</span></p>
                    <p className={styles.list}>Position: <span>{companyData.position}</span></p>
                    <p className={styles.list}>Projects I was involved in: </p>

                
                    {companyData.projects && companyData.projects.length > 0 && (
                        <div className={styles.projectList}>
                            {companyData.projects.map((project: { id: string; project_name: string }) => (
                                <Link className={styles.projectLink} key={project.id} href={`/projects/${project.id}`}>{project.project_name}</Link>
                            ))}
                        </div>
                    )}
                </article>
            </details>
        </div>
    )
}
