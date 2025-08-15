export async function apiData ()  {
    const URL = "http://127.0.0.1:5000/logs/users/me"
    let token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Token not found in localStorage")}
try {
    const response = await fetch(URL,
        {method: "GET", headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },});
    if (response.status === 401) {
        throw new Error("Unauthorized from ApiData");
    }
    const logsData = await response.json();
    console.log("logsdata from apidata", logsData)
    return logsData;

}
catch (error) {
    console.log("error from apiData");
        console.error(error);
}
}