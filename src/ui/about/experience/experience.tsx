import styles from "./experience.module.css"

interface Company {
    companyName: string;
    startTime: number;
    endTime: number|string;
    period: string;
    projects: string[];
}

export const WorkingExperience = ()  => {

    return (
        <ul>
            {companies && companies.length && (
                {companies.map((company : Company) => (
                    <p><span className={styles.companyName}>{company.companyName}:</span></p>
                ))}
            )}
        </ul>
    )
}
