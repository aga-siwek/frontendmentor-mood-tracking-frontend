import styles from "./TodayDate.module.css"
function TodayDate () {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const today = new Date()
    const year =  today.getFullYear()
    let day
    const month = months[today.getMonth()]
    const dayOfWeek = daysOfWeek[today.getDay()-1]
    switch (today.getDate()) {
        case 1:
            day = `${today.getDate()}st`;
            break;
        case 2:
            day = `${today.getDate()}nd`;
            break;
        case 3:
            day = `${today.getDate()}rd`;
            break;
        default:
            day = `${today.getDate()}th`;
    }

    const formatedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
    return (<div className={styles.today_date}>{formatedDate}</div>)
}
export default TodayDate