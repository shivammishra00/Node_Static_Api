const data = {
    user: "V",
    city: "Bhopal"
}
const apiURL = "http://localhost:5000/api/employee?id=5";

let option = {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
async function add() {
    let response = await fetch(apiURL, option)
    let finaldata = await response.json()
    console.log(finaldata)
}
add()