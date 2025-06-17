import styles from "./Average.module.css"
import AverageMood from "./AverageMood.jsx";
import AverageTime from "./AverageTime.jsx";

function Average ({
                      averageMood,
                      averageSleepTime,
                      prevAverageMood,
                      prevAverageSleepTime}) {
    return (
        <div className={styles.average}>
            <AverageMood
                averageMood={averageMood}
                prevAverageMood={prevAverageMood} />
            <AverageTime
                averageSleepTime={averageSleepTime}
                prevAverageSleepTime={prevAverageSleepTime}/>
        </div>
    )

}
export default Average;