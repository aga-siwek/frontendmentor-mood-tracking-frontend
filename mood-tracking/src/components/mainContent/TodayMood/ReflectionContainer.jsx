import styles from "./ReflectionContainer.module.css"
import Reflections from "../../../reflections.json"
import {ReactSVG} from "react-svg";
import refIcon from "../../../assets/icon-reflection.svg"

function ReflectionContainer({mood, feels}) {
    const randomReflections = [
        "Every feeling is valid, even the quiet ones.",
        "You made it through today — and that matters.",
        "Not every day needs to be productive to be meaningful.",
        "Your mood is a message, not your identity.",
        "It’s okay to pause — rest is part of progress.",
        "Emotions change, and so will this moment.",
        "You don’t have to feel good to be doing good.",
        "Some days surviving is enough.",
        "You can grow even in uncertainty.",
        "Name it, feel it, let it pass."
    ]
    const randomNumber = Math.floor(Math.random() * 11);
    let selectReflection
    const reflectionSwitch = Reflections.map(reflection => {
        if (reflection.mood_scale === mood) {
            if ([...reflection.feels].sort((a, b) => a - b).join(",") ===
                [...feels].sort((a, b) => a - b).join(",")) {
                selectReflection = reflection.reflection
                return (
                    <div className={styles.reflection_container}>
                        <div>
                            <div className={styles.reflection_header}>
                                <ReactSVG src={refIcon} className={styles.reflection_icon}/>
                                <p className={styles.reflection_header_text}>Reflection of the day</p>
                            </div>
                            <div className={styles.reflection_text}><p> {selectReflection}</p></div>
                        </div>
                        <div className={styles.reflection_hash}></div>
                    </div>
                );
            }
        }
    });
    if (selectReflection) {
        return (reflectionSwitch)
    } else {
        return (
            <div className={styles.reflection_container}>
                <div className={styles.reflection_top}>
                    <div className={styles.reflection_header}>
                        <ReactSVG src={refIcon} className={styles.reflection_icon}/>
                        <p className={styles.reflection_header_text}>Reflection of the day</p>
                    </div>
                    <div className={styles.reflection_text}><p> {randomReflections[randomNumber]}</p></div>
                </div>
                <div className={styles.reflection_hashes}>{feels.map(feel =>
                    <p className={styles.reflection_hash} key={feel}>#{feel}</p>)}</div>
            </div>
        )
    }
}

export default ReflectionContainer;