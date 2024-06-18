import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'categories/'

export const getAllMain = async () => {
    let url = categoryUrl + 'all/main'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
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

export const getAll = async (page, limit) => {
    let url = categoryUrl + `all?page=${page}&limit=${limit}`

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
    let dataObj = {
        name
    }

    try {
        return await fetch(categoryUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        
    } catch (error) {
        return console.error(error)
    }
}

export const update = async (id, name) => {
    let url = categoryUrl + `${id}`

    let newData = {
        name
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

export const deleteMainCategoryById = async (_id) => {
    let url = categoryUrl + `${_id}`

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}
