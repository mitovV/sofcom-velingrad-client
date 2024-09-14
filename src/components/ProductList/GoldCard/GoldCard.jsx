import { Row, Col, Card, CardGroup } from "react-bootstrap"
import DetailsButton from "../Shared/DetailsButton/DetailsButton"

import config from "../../../config/config"

import './GoldCard.css'

export default function GoldCard({ products, categories }) {
    return (
        <CardGroup>
            <Row>
                {products?.map(p =>
                    <Col key={p._id}>
                        <Card className="product-card" style={{ width: '15rem' }}>
                            <Card.Img className="product-photo" src={config.BASE_PICTURE_URL + p.images[0]} />
                            <Card.Body>
                                <Card.Title>💵 Цена: {p?.goldCalcPrice?.toFixed(2)}лв.</Card.Title>
                                <Card.Title>⚖️ Грамаж: {p?.weight?.toFixed(2)}/гр.</Card.Title>
                                <Card.Title>💎 Карати: {p?.goldCarat?.carat}</Card.Title>
                                {['Дамски', 'Мъжки', 'Детски']
                                    .includes(categories[categories.length - 1].name) ?
                                    <Card.Title>💍Размер: {p?.size?.size}</Card.Title> : ''}
                                <DetailsButton id={p._id}/>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Добавен на {new Date(p.createdOn).toLocaleString('bg-BG', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                    })}
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row>
        </CardGroup>
    )
}
