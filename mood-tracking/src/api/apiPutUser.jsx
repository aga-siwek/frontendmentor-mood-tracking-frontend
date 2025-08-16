export async function apiPutUser (userData)  {
    const URL = "http://127.0.0.1:5000/users/me"
    let token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Token not found in localStorage")}
    try {
        const response = await fetch(URL,
            {method: "PUT", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`},
                    body: JSON.stringify(userData),});
        if (response.status === 401) {
            throw new Error("Unauthorized from ApiPutUser");
        }
        const logsUserData = await response.json();
        console.log("logsUserData", logsUserData);
        return logsUserData;
    }
    catch (error) {
        console.log("error from apiPutUser");
        console.error(error);
    }
}