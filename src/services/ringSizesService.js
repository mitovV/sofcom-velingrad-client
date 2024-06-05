import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'ring-sizes/'

export const all = async (page, limit) => {
    let url = categoryUrl + `?page=${page}&limit=${limit}`

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const create = async (size) => {

    try {
        return await fetch(categoryUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ size })
        })

    } catch (error) {
        return console.error(error)
    }
}

export const count = async () => {
    let url = categoryUrl + 'count'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data
    } catch (error) {
        return console.error(error)

    }
}

export const deleteBySize = async (id) => {

    try {
        return await fetch(categoryUrl + `${id}`, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}