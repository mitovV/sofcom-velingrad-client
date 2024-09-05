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

export const getAllByCategoryId = async (id, material) => {
    let url = categoryUrl + id + (material ? '/' + material : '')

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data
    } catch (message) {
        return console.error(message)
    }
}

export const getLatest = async () => {
    let url = categoryUrl + 'latest'
    try {
        const response = await fetch(url)
        let data = await response.json()
        return data
    } catch (message) {
        return console.error(message)
    }
}

export const create = async (formData) => {
    try {
        return await fetch(categoryUrl, {
            method: 'POST',
            body: formData
        })

    } catch (error) {
        return console.error(error)
    }
}
