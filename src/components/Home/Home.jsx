import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Row, Col } from "react-bootstrap"

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
            <>
                <div className="lates-product-wrapper">
                    <h3 className="home-title">Последно добавени продукти</h3>
                </div>
                <Row>
                    {products.map(p =>
                        <Col key={p._id}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img className="photo" src={`http://localhost:5000/${p.images[0]}`} />
                                <Card.Body>
                                    <Button className="home-details-btn">Детайли</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </>
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