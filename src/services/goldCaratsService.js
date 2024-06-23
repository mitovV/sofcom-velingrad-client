import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'gold-carats/'

export const all = async () => {
    let url = categoryUrl + 'all'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}
