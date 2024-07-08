import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'gold-prices/'

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

export const deleteById = async (id) => {
    const url = categoryUrl + id

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}

export const create = async (condition, price) => {
    let dataObj = {
        condition,
        price
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

export const update = async (id, condition, price) => {
    let url = categoryUrl + `${id}`

    let newData = {
        condition,
        price
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
