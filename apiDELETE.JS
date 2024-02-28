let Emp_id = 'e90';
let apiURL = `http://13.233.97.238:4000/deleteemployee/${Emp_id}`;
let option = {
    method: "DELETE",
}
let DeleteData = async () => {
    let respose = await fetch(apiURL, option)
    let result = await respose.json();
    console.log(result)
    if (result.affectedRows < 1) {
        console.log(`${Emp_id} not found`)
    }
    else {
        console.log(`${result.affectedRows}found`)
    }
}
DeleteData()