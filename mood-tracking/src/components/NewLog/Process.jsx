import styles from "./Process.module.css"

function Process({processLevel}) {
    return (
        <div className={styles.process}>
            <div className={processLevel>=1
                ?`${styles.process_stage} ${styles.active}`
                : `${styles.process_stage}`}></div>
            <div className={processLevel>=2
                ?`${styles.process_stage} ${styles.active}`
                : `${styles.process_stage}`}></div>
            <div className={processLevel>=3
                ?`${styles.process_stage} ${styles.active}`
                : `${styles.process_stage}`}></div>
            <div className={processLevel>=4
                ?`${styles.process_stage} ${styles.active}`
                : `${styles.process_stage}`}></div>
        </div>)
}
export default Process;