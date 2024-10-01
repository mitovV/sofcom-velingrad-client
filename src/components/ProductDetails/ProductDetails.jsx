import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import config from "../../config/config"
import GoldData from "./GoldData/GoldData"

import * as productService from '../../services/productsService'

import './ProductDetails.css'

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        productService
            .getById(id)
            .then(res => {
                setProduct(res)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [id])

    const generateData = () => {
        let category = product.material || product.categoryName

        if (category === 'Злато') {
            return (
                <GoldData product={product}/>
            )
        }

    }

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <Row className="d-none d-md-flex">
                {generateData()}
                <Col md={6} className="carousel-wrapper">
                    <Carousel pause="hover">
                        {product.images.map((image, index) => (
                            <Carousel.Item key={index} interval={3000}>
                                <a href={config.BASE_PICTURE_URL + image} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="d-block w-100 product-details-img"
                                        src={config.BASE_PICTURE_URL + image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <div className="d-md-none">
                {generateData()}
            </div>
            <div className="d-md-none carousel-wrapper">
                <Carousel pause="hover">
                    {product.images.map((image, index) => (
                        <Carousel.Item key={index} interval={3000}>
                            <a href={config.BASE_PICTURE_URL + image} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="d-block w-100 product-details-img"
                                    src={config.BASE_PICTURE_URL + image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    )
}
