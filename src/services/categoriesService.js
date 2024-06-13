import config from "../config/config"

const categoryUrl = config.BASE_SERVER_URL + 'categories/'

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

    try {
        const response = await fetch(url)
        let data = await response.json()
        return data

    } catch (message) {
        return console.error(message)
    }
}

export const createMain = async (name) => {
    let url = categoryUrl + 'main'

    let dataObj = {
        name
    }

    try {
        return await fetch(url, {
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

export const updateMain = async (id, name) => {
    let url = categoryUrl + `main/${id}`

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

export const createSub = async (categoryId, name) => {
    let url = categoryUrl + 'sub'

    let dataObj = {
        categoryId,
        name
    }

    try {
        return await fetch(url, {
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
export const updateSub = async (id, name) => {
    let url = categoryUrl + `sub/${id}`

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

export const updateRingCategory = async (id, name) => {
    let url = categoryUrl + `ring/${id}`

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

export const deleteRingById = async (_id) => {
    let url = categoryUrl + `ring/${_id}`

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}

export const deleteMainCategoryById = async (_id) => {
    let url = categoryUrl + `main/${_id}`

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}

export const deleteSubCategoryById = async (_id) => {
    let url = categoryUrl + `sub/${_id}`

    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch (error) {
        return console.error(error)
    }
}
