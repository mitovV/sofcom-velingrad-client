import { Row, Col, Card, CardGroup } from "react-bootstrap"

import CardFooter from "../Shared/CardFooter/CardFooter"
import DetailsButton from "../Shared/DetailsButton/DetailsButton"

import config from "../../../config/config"

export default function OthersCard({ products }) {
    return (
        <CardGroup>
            <Row>
                {products?.map(p =>
                    <Col key={p._id}>
                        <Card className="product-card" style={{ width: '15rem' }}>
                            <Card.Img className="product-photo" src={config.BASE_PICTURE_URL + p.images[0]} />
                            <Card.Body>
                                <Card.Title>💵 Цена: {p?.price?.toFixed(2)}лв.</Card.Title>
                                <Card.Title>🛒 Вещ: {p?.title.length > 8
                                    ? p.title.substring(0, 8) + '..'
                                    : p.title}
                                </Card.Title>
                                <Card.Title>📜 Описание: {p?.description.length > 20
                                    ? (p?.description.substring(0, 15) + '...')
                                    : p.description}
                                </Card.Title>
                                <DetailsButton id={p._id} />
                            </Card.Body>
                            <CardFooter data={p?.createdOn} />
                        </Card>
                    </Col>
                )}
            </Row>
        </CardGroup>
    )
}
