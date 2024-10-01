import { Row, Col, Card, CardGroup } from "react-bootstrap"

import DetailsButton from "../Shared/DetailsButton/DetailsButton"
import CardFooter from "../Shared/CardFooter/CardFooter"

import config from "../../../config/config"

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
                                    <Card.Title>💍 Размер: {p?.size?.size}</Card.Title> : ''}
                                <DetailsButton id={p._id}/>
                            </Card.Body>
                           <CardFooter data={p.createdOn}/>
                        </Card>
                    </Col>
                )}
            </Row>
        </CardGroup>
    )
}
