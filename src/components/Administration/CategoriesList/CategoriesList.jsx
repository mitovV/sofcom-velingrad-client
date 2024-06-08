import { useEffect, useState } from "react"

import BaseListing from "../../Shared/BaseListing/BaseListing"

import * as categoriesService from '../../../services/categoriesService'

export default function CategoriesList() {
    const [categories, setCategorise] = useState([])

    useEffect(() => {
        categoriesService.getAll()
            .then(setCategorise)
            .catch(err => console.error(err))
    }, [])

    return (
        categories.length > 0 ? 
        <BaseListing data={categories} value='name' path='' classes=''></BaseListing> 
        : <h3>LoADING...</h3>
    )
}