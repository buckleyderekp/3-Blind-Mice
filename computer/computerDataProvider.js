
let computers = []


export const getComputers = () => {
    return fetch ('http://localhost:3000/computers')
    //taking what was recieved(promise) and turning it into javascript
        .then(response => response.json())
        //taking that javascript and storing it then putting it in parks
        .then(parsedComputers => {
            computers = parsedComputers
        })
}

export const useComputers = () => {
    return computers.slice()
}

