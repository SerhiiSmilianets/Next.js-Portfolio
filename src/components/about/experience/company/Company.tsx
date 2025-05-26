import {Company} from '@/types';
import {workingPeriod} from '@/lib/dateHelper';
import styles from "@/styles/modules/company.module.css"
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const CompanyComponent = ({companyData} : {companyData: Company}) => {
    const {start, end} = workingPeriod(companyData.start_date, companyData.end_date)
    return (
        <div className={styles.companyContainer}>
            <div className={styles.detailsContent}>
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={companyData.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
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
                        
                    </motion.div>
                </AnimatePresence>   
            </div>
        </div>
    )
}
