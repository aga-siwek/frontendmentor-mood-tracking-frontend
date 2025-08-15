import styles from "./Statistics.module.css"
import Chart from "./Chart.jsx";
function Statistics ({logs}) {
    return (
        <div className={styles.statistics_container}>
            <p className={styles.header_text}>Mood and sleep trends</p>
            <Chart logs={logs} />
        </div>
    )
}
export default Statistics;