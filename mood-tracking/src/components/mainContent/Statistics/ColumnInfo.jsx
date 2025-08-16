import styles from "./ColumnInfo.module.css"

function ColumnInfo({
                        description = "unknow",
                        mood = "unknow",
                        feels = ["a",],
                        sleepTime = "unknow"
                    }) {

    const moodSwitch = () => {
        switch (mood) {
            case -2:
                return <p className={styles.column_info_body_big}>Very Sad</p>
            case -1:
                return <p className={styles.column_info_body_big}>Sad</p>
            case 0:
                return <p className={styles.column_info_body_big}>Neutral</p>
            case 1:
                return <p className={styles.column_info_body_big}>Happy</p>
            case 2:
                return <p className={styles.column_info_body_big}>Very Happy</p>
        }
    }

    const timeSwitch = () => {
        switch (sleepTime) {
            case 0:
                return <p className={styles.column_info_body_big}>0-2 hours</p>
            case 1:
                return <p className={styles.column_info_body_big}>3-4 hours</p>
            case 2:
                return <p className={styles.column_info_body_big}>5-6 hours</p>
            case 3:
                return <p className={styles.column_info_body_big}>7-8 hours</p>
            case 4:
                return <p className={styles.column_info_body_big}>9+ hours</p>
        }
    }

    return (
        <div className={styles.column_info}>
            <div className={styles.column_info_container}>
                <div className={styles.column_info_header}>Mood</div>
                <div className={styles.column_info_mood_content}>
                    <div className={styles.column_info_body_big}>{moodSwitch()}</div>
                </div>
            </div>
            <div className={styles.column_info_container}>
                <p className={styles.column_info_header}>Sleep</p>
                <div className={styles.column_info_body_big}>{timeSwitch()}</div>
            </div>
            <div className={styles.column_info_container}>
                <p className={styles.column_info_header}>Reflection</p>
                <div className={styles.column_info_body_small}>{description}</div>
            </div>
            <div className={styles.column_info_container}>
                <p className={styles.column_info_header}>Tags</p>
                <div className={styles.column_info_feels_content}>
                    {feels.map((feel, index) => <div key={feel + index}
                                                     className={styles.column_info_body_small}>{feel.feel_name}</div>)}
                </div>
            </div>
        </div>
    )
}

export default ColumnInfo;