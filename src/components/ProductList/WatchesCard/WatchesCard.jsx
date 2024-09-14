import { Row, Col, Card, CardGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import config from "../../../config/config"
import DetailsButton from "../Shared/DetailsButton/DetailsButton"

export default function WatchesCard({ products }) {
    return (
        <CardGroup>
            <Row>
                {products?.map(p =>
                    <Col key={p._id}>
                        <Card className="product-card" style={{ width: '15rem' }}>
                            <Card.Img className="product-photo" src={config.BASE_PICTURE_URL + p.images[0]} />
                            <Card.Body>
                                <Card.Title>💵 Цена: {p?.price?.toFixed(2)}лв.</Card.Title>
                                <Card.Title>🏷️ Марка: {p?.brand}</Card.Title>
                                <Card.Title>⌚️ Модел: {p?.model}</Card.Title>
                                <DetailsButton id={p._id}/>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Добавен на {new Date(p?.createdOn).toLocaleString('bg-BG', {
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
