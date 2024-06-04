import { useState, useEffect } from "react"
import { Nav, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import * as ringSizesService from '../../services/ringSizesService'

import './RingSizeList.css'

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])

    useEffect(() => {
        ringSizesService.all()
            .then(setRingSizes)
    }, [])

    return (
        <div className="ring-size-wrapper">
            <h2>Списък с рамери</h2>
            <Nav.Link as={Link} to="/administration/ring-size/create"><strong>Добави нов</strong></Nav.Link>
            {ringSizes.length > 0 ?
                <ListGroup>
                    {ringSizes.map(r =>
                        <ListGroupItem key={r._id}>
                            {r.size}
                            <Button className="ring-size-edit-btn" variant="info"><i class="bi bi-pencil-fill"></i></Button>
                            <Button className="ring-size-delete-btn" variant="danger"><i class="bi bi-x-circle"></i></Button>
                        </ListGroupItem>)}
                </ListGroup>
                : <h4>Все още няма размери</h4>}
        </div>
    )
}