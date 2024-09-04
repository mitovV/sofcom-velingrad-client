import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import ListingProductsByCategory from "../ListingProductsByCategory/ListingProductsByCategory"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'


export default function ProductList() {
    const { '*': data } = useParams()
    const ids = data.split('/')
    const id = ids[ids.length-1]
    const [products, setProducts] = useState([])
    let [categories, setCategories] = useState([])

    useEffect(() => {        
        productsService.getAllByCategoryId(id)
            .then(setProducts)
            .catch(err => console.error(err))

            setCategories([]);
        
            Promise.all(ids.map(element => categoriesService.getById(element)))
                .then(responses => setCategories(responses))
                .catch(err => console.error(err));

    }, [id, data])

    if (products.length > 0) {
        return (
            //TODO: List products
            <h4>There is some products</h4>
        )
    }
    else {
        return (
          <ListingProductsByCategory categories={categories}/>
        )
    }
}
