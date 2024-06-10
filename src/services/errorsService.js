import config from "../config/config"

const errorsUrl = config.BASE_SERVER_URL + 'errors'

export const log = async (error) => {
    try {
        return await fetch(errorsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error })
        })

    } catch (error) {
        return console.error(error)
    }
}