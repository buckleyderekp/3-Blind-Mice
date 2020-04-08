
let departments = []


export const getDepartments = () => {
    return fetch ('http://localhost:3000/departments')
    //taking what was recieved(promise) and turning it into javascript
        .then(response => response.json())
        //taking that javascript and storing it then putting it in parks
        .then(parsedDepartments => {
            departments = parsedDepartments
        })
}

export const useDepartments = () => {
    return departments.slice()
}