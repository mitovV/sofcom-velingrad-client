import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'gold-conditions/'

export const getAll = async () => {
    let url = categoryUrl + 'all'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const getById = async (id) => {
    let url = categoryUrl + id

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const create = async (name) => {

    try {
        return await fetch(categoryUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })

    } catch (error) {
        return console.error(error)
    }
}