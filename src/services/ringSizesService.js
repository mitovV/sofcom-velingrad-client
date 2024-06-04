import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'ring-size/'

export const all = async () => {

    try {
        const response = await fetch(categoryUrl)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const create = async (size) => {
   
    try {
        return await fetch(categoryUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({size})
        })

    } catch (error) {
        return console.error(error)
    }
}