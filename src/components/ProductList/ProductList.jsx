import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import ListingProductsByCategory from "../ListingProductsByCategory/ListingProductsByCategory"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'


export default function ProductList() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
        productsService.getAllByCategoryId(id)
            .then(setProducts)

        categoriesService.getById(id)
            .then(setCategory)
    }, [id])

    if (products.length > 0) {
        return (
            //TODO: List products
            <h4>There is some products</h4>
        )
    }
    else {
        return (
          <ListingProductsByCategory name={category.name}/>
        )
    }
}