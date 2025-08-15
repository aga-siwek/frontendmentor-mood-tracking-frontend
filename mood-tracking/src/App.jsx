import './App.css'
import HeaderLogin from "./components/Header/HeaderLogin.jsx";
import HeaderLogout from "./components/Header/HeaderLogout.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Personalize from "./components/Personalize/Personalize.jsx";
import Update from "./components/Update/Update.jsx";
import {useState, useCallback, memo} from "react";
import {useNavigate} from 'react-router-dom';
import {AuthProvider} from "./context/AuthContext.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {apiData} from "./api/apiData.jsx";
import {apiUser} from "./api/apiUser.jsx";
import {apiPostLog} from "./api/apiPostLog.jsx";
import {apiPutUser} from "./api/apiPutUser.jsx";
import {useEffect} from "react";
import NewLog from "./components/NewLog/NewLog.jsx";
import headerLogin from "./components/Header/HeaderLogin.jsx";
import headerLogout from "./components/Header/HeaderLogout.jsx";
import signUp from "./components/SignUp/SignUp.jsx";
import {apiPostUser} from "./api/apiPostUser.jsx";


function App() {

    const feelsList = [
        "Joyful",
        "Down",
        "Anxious",
        "Calm",
        "Excited",
        "Lonely",
        "Grateful",
        "Overwhelmed",
        "Motivated",
        "Irritable",
        "Peaceful",
        "Tired",
        "Hopeful",
        "Confident",
        "Stressed",
        "Content",
        "Disappointed",
        "Optimistic",
        "Restless"
    ]
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [mood, setMood] = useState();
    const [feels, setFeels] = useState([]);
    const [description, setDescription] = useState("");
    const [sleepTime, setSleepTime] = useState();
    const [averageMood, setAverageMood] = useState();
    const [prevAverageMood, setPrevAverageMood] = useState();
    const [averageSleepTime, setAverageSleepTime] = useState();
    const [prevAverageSleepTime, setPrevAverageSleepTime] = useState(2);
    const [logs, setLogs] = useState([]);
    const [addedToday, setAddedToday] = useState();
    const [logAddIsOpen, setLogAddIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    let myUserName = "unknow"

    const MemoHeaderLogin = memo(headerLogin)
    const MemoHeaderLogout = memo(headerLogout)
    const MemoLogin = memo(Login)
    const MemoSignUp = memo(SignUp)
    const MemoUpdate = memo(Update)
    const MemoMainContent = memo(MainContent)


    const handleSignUp = useCallback(({email, password}) => {
        setEmail(email)
        setPassword(password)
        console.log("start handleSignup")
        console.log(email)
        console.log(password)
        const userData =
            {
                "user_email": email,
                "user_password": password,
            }
        apiPostUser(userData)
        navigate("/login")

    })

    const handleLogin = useCallback(async ({email, password}) => {
        setEmail(email)
        setPassword(password)
        const loggedUser = await apiUser()
        console.log("logged user from handle Login")
        console.log(loggedUser)
        if (loggedUser) {
            if (!loggedUser.user_name) {
                navigate("/personalize");
                return
            }
            localStorage.setItem("userName", loggedUser.user_name);
            localStorage.setItem("userEmail", loggedUser.user_email);
        }
        navigate("/main")
        return
    })

    const handleLogout = () => {
        setLogs([])
        navigate("/login")
        localStorage.removeItem("token");
        localStorage.removeItem("userName");

    }

    const handleSettingNavigate = () => {
        navigate("/update");
    }

    const checkTodayLog = useCallback((value) => {
        setAddedToday(value)
    })

    const handleUserNameChange = useCallback(({name}) => {
        setUserName(name);
        const userData = {
            "user_name": name
        }
        apiPutUser(userData)
        navigate("/main")
    })

    const handleAverageMoodChange = useCallback(() => {
        console.log("start handle average mood change")
        let average = 0
        let prevAverage = 0

        if (logs) {
            console.log("handleAverageMoodChange logs", logs.length)
            if (logs.length <= 5) {
                console.log("start logs <= 5")
                // logs.map(log => {
                //     average += log.mood.mood_scale

                // })
                setAverageMood("unknow")
                setPrevAverageMood("unknow")
                return
            }

            if (logs.length >= 10) {
                console.log("start logs > 10")
                const lastLogs = logs.slice(-5)
                const prevLogs = logs.slice(-10, -5)
                lastLogs.map(log => {
                    average += log.mood.mood_scale
                })
                setAverageMood(Math.round(average / lastLogs.length))
                prevLogs.map(log => {
                    prevAverage += log.mood.mood_scale
                })
                setPrevAverageMood(Math.round(prevAverage / prevLogs.length))
                console.log("start lastlogs")
                console.log(lastLogs)
                console.log(average)
                console.log("start prevLogs")
                console.log(prevLogs)
                console.log(prevAverage)
                return;
            }
            console.log("start handleAverageMoodChange else")
            const lastLogs = logs.slice(-5)
            lastLogs.map(log => {
                average += log.mood.mood_scale
            })
            setAverageMood(Math.round(average / lastLogs.length))
            setPrevAverageMood("unknow")

        }
    })
    const handleAverageSleepChange = useCallback(() => {
        let average = 0
        let prevAverage = 0

        if (logs) {
            console.log("logs lenght from handle average sleep change", logs.length)
            if (logs.length <= 5) {
                setAverageSleepTime("unknow")
                setPrevAverageSleepTime("unknow")
                return
            }
            if (logs.length >= 10) {
                const lastLogs = logs.slice(-5)
                const prevLogs = logs.slice(-10, -5)
                lastLogs.map(log => {
                    average += log.sleep.sleep_time_scale
                })
                setAverageSleepTime(Math.round(average / lastLogs.length))
                prevLogs.map(log => {
                    prevAverage += log.sleep.sleep_time_scale
                })
                setPrevAverageSleepTime(Math.round(prevAverage / prevLogs.length))
                return;
            }

            const lastLogs = logs.slice(-5)
            lastLogs.map(log => {
                average += log.sleep.sleep_time_scale
            })
            setAverageSleepTime(Math.round(average / lastLogs.length))
            setPrevAverageSleepTime("unknow")

        }
    })

    const handleMoodAdd = (mood) => {
        setMood(mood)
    }
    const handleFeelsAdd = (feels) => {
        setFeels(feels)
    }
    const handleDescriptionAdd = (description) => {
        setDescription(description)
    }
    const handleSleepAdd = (sleep) => {
        setSleepTime(sleep)
        const logData = {
            feel: feels,
            mood_scale: mood,
            sleep_time_scale: sleep,
            description: description
        }
        apiPostLog(logData)
        setLogAddIsOpen(false)
        navigate(0)
    }

    const handleLogAdd = useCallback((log) => {
        return ("add logs")
    })

    const showLogAdd = useCallback(() => {
        setLogAddIsOpen(true)
    })

    const hideLogAdd = () => {
        setLogAddIsOpen(false)
    }


    useEffect(() => {
        const downloadData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log("token not found");
                return;
            }
            const data = await apiData();
            setLogs(data);
        };

        downloadData();
    }, []);


    console.log("logs from app")
    console.log(logs);
    console.log("token from app")
    console.log(token)

    useEffect(() => {
        if (logs) {
            if (logs.length >= 1) {
                const lastLog = logs[logs.length - 1];
                setMood(lastLog.mood.mood_scale)
                setSleepTime(lastLog.sleep.sleep_time_scale)
                setDescription(lastLog.description.description)
                const lastLogsFullInfo = lastLog.feels
                let lastFeels = []
                lastLogsFullInfo.map(feel => lastFeels.push(feel.feel_name
                ))
                setFeels(lastFeels)
                console.log("lastfeels from use effect")
                console.log(lastFeels)
                console.log("feels from use effect")
                console.log(feels)
                console.log("mood from use effect")
                console.log(mood)
                console.log("description from use effect")
                console.log(description)
                console.log("sleep time from use effect")
                console.log(sleepTime)

            }
        }
    }, [logs])

    return (
        <>
            <AuthProvider>
                <div className="container">
                    {/*<HeaderLogout/>*/}
                    <Routes>
                        <Route path="/login" element={
                            <div className="container_site">
                                <MemoHeaderLogout/>
                                <MemoLogin
                                    email={email}
                                    password={password}
                                    handleDataChange={handleLogin}/>
                            </div>}/>
                        <Route path="/sign-up" element={
                            <div className="container_site">
                                <MemoHeaderLogout/>

                                <MemoSignUp
                                    email={email}
                                    password={password}
                                    handleDataChange={handleSignUp}/>
                            </div>}/>
                        <Route path="/main" element={
                            <div className="container_site">
                                <MemoHeaderLogin
                                    handleLogout={handleLogout}
                                    handleSettingNavigate={handleSettingNavigate} />
                                <MemoMainContent
                                    userName={userName}
                                    mood={mood}
                                    feels={feels}
                                    sleepTime={sleepTime}
                                    averageMood={averageMood}
                                    averageSleepTime={averageSleepTime}
                                    prevAverageMood={prevAverageMood}
                                    prevAverageSleepTime={prevAverageSleepTime}
                                    handleAverageMoodChange={handleAverageMoodChange}
                                    handleAverageSleepChange={handleAverageSleepChange}
                                    logs={logs}
                                    addedToday={addedToday}
                                    checkTodayLog={checkTodayLog}
                                    showLogAdd={showLogAdd}

                                />
                            </div>}/>
                        <Route path="/personalize"
                               element={
                                   <div className="container_site">
                                       <MemoHeaderLogout/>
                                       <Personalize
                                           name={userName}
                                           handleUserNameChange={handleUserNameChange}/>
                                   </div>}/>
                        <Route path="/update"
                               element={
                                   <div className="container_site">
                                       <MemoHeaderLogout/>
                                       <Personalize
                                           name={userName}
                                           handleUserNameChange={handleUserNameChange}/>
                                   </div>
                               }/>
                    </Routes>
                    <div className={logAddIsOpen ? "new_log" : "new_log hide"}>
                        <NewLog
                            mood={mood}
                            feels={feels}
                            sleepTime={sleepTime}
                            description={description}
                            handleMoodAdd={handleMoodAdd}
                            handleFeelsAdd={handleFeelsAdd}
                            handleDescriptionAdd={handleDescriptionAdd}
                            handleSleepAdd={handleSleepAdd}
                            handleLogAdd={handleLogAdd}
                            feelsList={feelsList}
                            logAddIsOpen={logAddIsOpen}
                        />
                    </div>
                </div>
            </AuthProvider>

        </>
    )
}

export default App
