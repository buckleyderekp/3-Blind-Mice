let locations = []


export const getLocations = () => {
    return fetch ('http://localhost:3000/locations')
    //taking what was recieved(promise) and turning it into javascript
        .then(response => response.json())
        //taking that javascript and storing it then putting it in parks
        .then(parsedLocations => {
            locations = parsedLocations
        })
}

export const useLocations = () => {
    return locations.slice()
}