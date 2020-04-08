
let employees = []


export const getEmployees = () => {
    return fetch ('http://localhost:3000/employees')
    //taking what was recieved(promise) and turning it into javascript
        .then(response => response.json())
        //taking that javascript and storing it then putting it in parks
        .then(parsedEmployees => {
            employees = parsedEmployees
        })
}

export const useEmployees = () => {
    return employees.slice()
}