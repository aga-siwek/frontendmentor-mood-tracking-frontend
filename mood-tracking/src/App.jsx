import './App.css'
import HeaderLogin from "./components/Header/HeaderLogin.jsx";
import HeaderLogout from "./components/Header/HeaderLogout.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Personalize from "./components/Personalize/Personalize.jsx";
import Update from "./components/Update/Update.jsx";
import {useState} from "react";
import {AuthProvider} from "./context/AuthContext.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [mood, setMood] = useState(-2);
    const [feels, setFeels] = useState([
        "Excited",
        "Overwhelmaed"
    ]);
    const [description, setDescription] = useState("");
    const [sleepTime, setSleepTime] = useState(0);
    const [averageMood, setAverageMood] = useState(0);
    const [prevAverageMood, setPrevAverageMood] = useState(0);
    const [averageSleepTime, setAverageSleepTime] = useState(1);
    const [prevAverageSleepTime, setPrevAverageSleepTime] = useState(2);
    const [logsData, setLogsData] = useState([]);

    const handleDataChange = ({email, password}) => {
        setEmail(email)
        setPassword(password)
    }

    const handleUserNameChange = ({name}) => {
        setUserName(name);
    }

    console.log("from app");

    console.log(userName)


    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <div className="container">
                        <HeaderLogin/>
                        {/*<HeaderLogout/>*/}
                        <main>
                            <Routes>
                                <Route path="/login" element={<Login email={email} password={password}
                                                                     handleDataChange={handleDataChange}/>}/>
                                <Route path="/sign-up" element={<SignUp email={email} password={password}
                                                                        handleDataChange={handleDataChange}/>}/>
                                <Route path="/main" element={<MainContent
                                    userName={userName}
                                    mood={mood}
                                    feels={feels}
                                    sleepTime={sleepTime}
                                    averageMood={averageMood}
                                    averageSleepTime={averageSleepTime}
                                    prevAverageMood = {prevAverageMood}
                                    prevAverageSleepTime = {prevAverageSleepTime}
                                />}/>
                                <Route path="/personalize" element={<Personalize name={userName}
                                                                                 handleUserNameChange={handleUserNameChange}/>}/>
                                <Route path="/update"
                                       element={<Update name={userName} handleUserNameChange={handleUserNameChange}/>}/>
                            </Routes>
                        </main>
                    </div>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App
