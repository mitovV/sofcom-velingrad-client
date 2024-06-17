import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'products/'

export const all = async () => {
    try {
        const response = await fetch(categoryUrl)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const getAllByCategoryId = async (id) => {
    let arr = []
    return arr
}

export const getLatest = async (id) => {
    let arr = []
    return arr
}