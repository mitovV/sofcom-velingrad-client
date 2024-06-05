import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'ring-sizes/'

export const all = async (page, limit) => {
    const url = categoryUrl + `?page=${page}&limit=${limit}`

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
    const url = categoryUrl + 'count'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (error) {
        return console.error(error)

    }
}

export const deleteBySize = async (id) => {
    const url = categoryUrl + id

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}

export const getById = async (id) => {
    const url = categoryUrl + id

    try {
        const response = await fetch(url)
        let data = response.json()
        return data

    } catch (error) {
        return console.error(error)
    }
}

export const update = async (id, input) => {
    const url = categoryUrl + id

    let newData = {
        size: input
    }
    
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })

        let data = response.json()
        return data

    } catch (error) {
        return console.error(error)
    }
}