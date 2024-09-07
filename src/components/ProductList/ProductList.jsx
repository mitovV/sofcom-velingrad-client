import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import ProductCategoryTitle from "./ProductCategoryTitle/ProductCategoryTitle"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'


export default function ProductList() {
    const { '*': data } = useParams()
    const ids = data.split('/')
    const id = ids[ids.length - 1]
    const [products, setProducts] = useState([])
    let [categories, setCategories] = useState([])

    useEffect(() => {

        setCategories([]);

        Promise.all(ids.map(element => categoriesService.getById(element)))
            .then(responses => setCategories(responses))
            .catch(err => console.error(err));

        if (categories.length > 0) {
            let material

            if (categories[0].name === 'Злато') {
                material = 'Злато'
            }
            else if (categories[0].name === 'Сребро') {
                material = 'Сребро'
            }

            productsService.getAllByCategoryId(id, material)
                .then(setProducts)
                .catch(err => console.error(err))
        }

    }, [id, data])

    if (products?.length > 0) {
        if (categories[0] === 'Злато') {
            return (
                //TODO: List products
                <h4>There is some products</h4>
            )
        }
        else if (categories[0] === 'Сребро') {

        }
        else if (categories[0] === 'Техника') {

        }
        else if (categories[0] === 'GSM') {

        }
        else if (categories[0] === 'Часовници') {

        }
        else if (categories[0] === 'Аудио и видео') {

        }
        else if (categories[0] === 'Компютри и периферия') {

        }
        else if (categories[0] === 'Автомобили и аксесоари') {

        }
        else if (categories[0] === 'Други') {

        }
    }
    else {
        return (
            <ProductCategoryTitle categories={categories}/>
        )
    }
}
