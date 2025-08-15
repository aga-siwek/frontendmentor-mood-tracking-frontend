import styles from "./Chart.module.css"
import ChartColumn from "./ChartColumn.jsx";
import {ReactSVG} from "react-svg";
import sleepIcon from "../../../assets/icon-sleep.svg"
import { useEffect, useRef } from "react";


function Chart({logs}) {

    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.scrollLeft = chartRef.current.scrollWidth;
        }
    }, [logs]);

    const showLog = () => {
        let shownLogs
        if (logs) {
            const logsNumber = logs.length
            if (logsNumber >= 11) {
                shownLogs = logs.slice(-11)
            } else {
                shownLogs = logs
            }
            return shownLogs.map(log => {
                const createdAt = log.created_at
                const createdAtYear = log.created_at_year
                const createdAtMonth = log.created_at_month
                const createdAtDay = log.created_at_day
                const description = log.description.description
                const mood = log.mood.mood_scale
                const feels = log.feels
                const sleepTime = log.sleep.sleep_time_scale

                return <ChartColumn
                    key={createdAt}
                    createdAtYear={createdAtYear}
                    createdAtMonth={createdAtMonth}
                    createdAtDay={createdAtDay}
                    description={description}
                    mood={mood}
                    feels={feels}
                    sleepTime={sleepTime}/>
            })

        }
    }

    return (
        <div className={styles.chart_box}>
            <div className={styles.chart_container}>
                <div className={styles.chart_label_y}>
                    <div className={styles.chart_label_y_content}>
                        <ReactSVG src={sleepIcon} alt="Sleep icon" className={styles.chart_label_y_icon}/>
                        <p className={styles.chart_label_y_text}>9+ hours</p>
                    </div>
                    <div className={styles.chart_label_y_content}>
                        <ReactSVG src={sleepIcon} alt="Sleep icon" className={styles.chart_label_y_icon}/>
                        <p className={styles.chart_label_y_text}>7-8 hours</p>
                    </div>
                    <div className={styles.chart_label_y_content}>
                        <ReactSVG src={sleepIcon} alt="Sleep icon" className={styles.chart_label_y_icon}/>
                        <p className={styles.chart_label_y_text}>5-6 hours</p>
                    </div>
                    <div className={styles.chart_label_y_content}>
                        <ReactSVG src={sleepIcon} alt="Sleep icon" className={styles.chart_label_y_icon}/>
                        <p className={styles.chart_label_y_text}>3-4 hours</p>
                    </div>
                    <div className={styles.chart_label_y_content}>
                        <ReactSVG src={sleepIcon} alt="Sleep icon" className={styles.chart_label_y_icon}/>
                        <p className={styles.chart_label_y_text}>0-2 hours</p>
                    </div>

                </div>
                <div className={styles.chart_statistic}  ref={chartRef}>
                    <div className={styles.chart}>
                        {showLog()}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart;