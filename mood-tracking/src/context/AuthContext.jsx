import {createContext, useState, useEffect} from "react";
import {apiFetch} from "../api/apiFetch.jsx";


export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [myToken, setMyToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        if (myToken) {
            localStorage.setItem("token", myToken);
        }
        else {
            localStorage.removeItem("token");
        }
    }, [myToken])

    async function addToken (loginInput){
        try {
            const response = await apiFetch("http://127.0.0.1:5000/login/", {
                method: 'POST',
                body: JSON.stringify(loginInput),
                }
                );
            if (response.message !== "Login Success") {
                throw new Error("Response error");
            }
            console.log("After response")
            console.log(response);
            console.log("i am in response in authcontext")
            console.log(response);
            setMyToken(response.access_token);
            return true
        }
        catch (error) {
            console.error("Login error", error);
            return false
        }
    }
    const removeToken = () => {
        setMyToken(null)
    };
    return (
        <AuthContext.Provider value={{myToken, addToken, removeToken}}> {children}</AuthContext.Provider>
    )
}
