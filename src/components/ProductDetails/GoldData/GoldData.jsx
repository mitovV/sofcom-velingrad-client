import { Col } from "react-bootstrap"

import './GoldData.css'

export default function GoldData({ product }) {
    return (
        <Col md={6} className="product-info-wrapper">
            <div className="product-heading-wrapper">
                <h2>💵 Цена: {product.goldCalcPrice.toFixed(2)}лв.</h2>
                <h2>💎 Карат: {product.goldCarat.carat}</h2>
                <h2>⚖️ Грамаж: {product.weight.toFixed(2)}/гр.</h2>
                {['Дамски', 'Мъжки', 'Детски']
                    .includes(product.categoryName) ?
                    <h2>💍 Размер: {product.size.size}</h2>
                    : ''
                }
            </div>
        </Col>
    )
}
