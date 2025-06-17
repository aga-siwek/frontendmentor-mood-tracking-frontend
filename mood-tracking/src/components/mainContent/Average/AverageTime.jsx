import styles from "./AverageTime.module.css"
function AverageTime ({averageSleepTime, prevAverageSleepTime}) {

    return (
        <div className={styles.average_time}>
            <div className={styles.header_text}>
                <p className={styles.header_text_main}>Average Time</p>
                <p className={styles.header_text_ext}>(Last 5 check-ins)</p>
            </div>
            <div className={styles.card}>
                <div>
                    <div className={styles.card_header}>
                        <div className={styles.card_header_icon}></div>
                        <div className={styles.card_header_text}>
                        </div>
                        <div className={styles.card_body}>
                            <div className={styles.card_body_icon}></div>
                            <div className={styles.card_body_text}></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AverageTime