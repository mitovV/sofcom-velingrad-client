import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL +'categories/'

export const getAllMain = async () => {
    let url = categoryUrl + 'main/all'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const getAllSub = async () => {
    let url = categoryUrl + 'sub/all'

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const getAllRing = async () => {
    let url = categoryUrl + 'ring/all'

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

    try{    
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch(message) {
        return console.error(message)
    }
}

export const update = async(id, name) => {
    let url = categoryUrl + id

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