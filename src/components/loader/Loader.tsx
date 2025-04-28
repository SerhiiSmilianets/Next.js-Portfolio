import styles from '@/styles/modules/loader.module.css'

export const LoaderComponent = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader} role="status">
                <span className={styles.loaderIcon}/>
            </div>
        </div>
    )
}
