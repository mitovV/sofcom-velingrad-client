import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'

import './ProductList.css'

export default function ProductList() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [category, setCategoryName] = useState({})

    useEffect(() => {
        productsService.getAllByCategoryId(id)
            .then(res => {
                setProducts(res)
            }
            )
    }, id)

    useEffect(() => {
        categoriesService.getById(id)
            .then(setCategoryName)

    }, id)

    if (products.length > 0) {
        return (
            //TODO: List products
            <h4>There is some products</h4>
        )
    }
    else {
        return (
            <div className="product-category-wrapper">
                <h2 className="product-category">{category.name}</h2>
                <h3>Все още няма продукти в тази категория</h3>
            </div>
        )
    }
}