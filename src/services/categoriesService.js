const baseUrl = 'http://localhost:5000/api/categories/'

export const getAll = async () => {
    let url = baseUrl + '/all'
    try {
        const response = await fetch(url)
        let data = await response.json()
        return data
    } catch (message) {
        return console.error(message)
    }
}