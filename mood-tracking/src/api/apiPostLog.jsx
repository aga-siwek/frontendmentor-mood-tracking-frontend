export async function apiPostLog (logData)  {
    const URL = "http://127.0.0.1:5000/logs/"
    let token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Token not found in localStorage")}
    try {
        const response = await fetch(URL,
            {method: "POST", headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }, body: JSON.stringify(logData),});
        if (response.status === 401) {
            throw new Error("Unauthorized from apiPostLog");
        }
        const logsData = await response.json();
        console.log("logsdata from apiPostLog", logData)
        return logsData;

    }
    catch (error) {
        console.log("error from apiPostLog");
        console.error(error);
    }
}