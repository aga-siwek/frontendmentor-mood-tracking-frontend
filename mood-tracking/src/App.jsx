import './App.css'
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import SignUp from "./components/SignIn/SignUp.jsx";
import Title from "./components/Title/Title.jsx";
import TodayMood from "./components/TodayMood/TodayMood.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import {useState} from "react";


function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleDataChange = ({email, password }) => {
        setEmail(email)
        setPassword(password)
        console.log("login form app")
        console.log(email);
        console.log(password);
        console.log("local storage from app");
        console.log(localStorage.getItem("token"));
    }

    return (
        <>
            <AuthProvider>
            <div className="container">
                <Header/>
                <Login email={email} password={password} handleDataChange={handleDataChange} />
                {/*<Signup/>*/}
                {/*<Title />*/}
                {/*<TodayMood />*/}
                {/*<Statistics />*/}
            </div>
            </AuthProvider>

        </>
    )
}

export default App
