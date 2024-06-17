import { useEffect, useState } from "react"
import Path from "../../../paths"
import { Nav, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import * as productsService from '../../../services/productsService'

import './AdminProductList.css'

export default function AdminProductList() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        productsService.all()
            .then(setProducts)
            .catch(err => console.error(err))
    },[])

    return(
        <div className="admin-product-list-wrapper">
        <h2>Списък с продукти</h2>
        <Nav.Link
            as={Link}
            className="add-new-product"
            to={Path.AdministrationProductsCreate}>
            <strong>Добави нов продукт</strong>
        </Nav.Link>
        {products.length > 0 ?
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Състояние</th>
                        <th>Цена</th>
                        <th>Промени</th>
                        <th>Изтрии</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => 
                    <tr key={product._id}>
                        <td>{product.condition}</td>
                        <td>{product.price}</td>
                        <td>
                        <Button variant="primary">Промени</Button>
                        </td>
                        <td>
                        <Button variant="danger">Изтрии</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
            : <h4>Все още няма продукти</h4>}
    </div>
    )
}
