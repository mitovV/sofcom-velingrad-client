import config from "../config/config"

export const getAll = async () => {
    let url = config.BASE_SERVER_URL + 'categories/all'

    try {
        const response = await fetch(url)
        let data = await response.json()
        
        return data
    } catch (message) {
        return console.error(message)
    }
}
