
export async function apiFetch(url, options = {}) {
    try{
        const token = localStorage.getItem("token");
        const headers = {
            ...(options.headers || {}),
            Authorization: token? `Bearer ${token}` : undefined,
            "Content-Type": "application/json",};
        const response = await fetch(url, {
            ...options, headers
        });
        if (!response.ok) {
            throw new Error("Could not find a response from API");
        }
        const data = await response.json();
        console.log("fetch data")
        console.log(data);
        return data
    }
    catch(error){
        console.error(error);
    }
}