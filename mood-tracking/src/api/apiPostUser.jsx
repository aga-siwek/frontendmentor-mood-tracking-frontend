export async function apiPostUser (userData)  {
    const URL = "http://127.0.0.1:5000/register/"
    try {
        const response = await fetch(URL,
            {method: "POST", headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(userData),});
        if (response.status === 401) {
            throw new Error("Unauthorized from apiPostUser");
        }
        const userInfo = await response.json();
        console.log("usersdata from apiPostUser", userInfo)
        return userInfo;
    }
    catch (error) {
        console.log("error from apiPostUser");
        console.error(error);
    }
}