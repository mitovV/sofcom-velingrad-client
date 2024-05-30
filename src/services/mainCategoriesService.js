const baseUrl = 'http://localhost:5000/api/categories/main'

export const getAll = async () => {
    let url = baseUrl + '/all'
    try {
        const response = await fetch(url)
        let data = await response.json()
        console.log(data);
        return data
    } catch (message) {
        return console.error(message)
    }
}