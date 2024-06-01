import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import * as productsService from '../../services/productService'

export default function ProductList() {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        productsService.getAllByCategoryId(id)
            .then(res => {
                console.log(res);
                setProducts(res)
            }
            )
    }, [])

    if (products.length > 0) {
        return (
            <h4>There is some products</h4>
        )
    }
    else {
        return (
            <h3>There are no products yet</h3>
        )
    }
}