import { useState, useEffect } from "react";

import * as productService from '../../services/productsService'

import './Home.css'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getLatest()
            .then(setProducts)
    }, [])

    if (products.length > 0) {
        return (
            <h4>Some products here.....</h4>
        )
    }
    else {
        return (
            <div className="lates-product-wrapper">
                <h3>Последно добавени продукти</h3>
                <h4>Все още няма продукти</h4>
            </div>
        )
    }
}