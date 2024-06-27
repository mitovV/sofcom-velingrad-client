import { useEffect, useState } from "react"
import { Nav, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import Path from "../../../paths"

import * as goldConditionsService from '../../../services/goldConditionsService'

export default function GoldConditionsList() {
    const [goldConditions, setGoldConditions] = useState([])

    useEffect(() => {
        goldConditionsService.getAll()
            .then(setGoldConditions)
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="gold-prices-wrapper">
            <h2>Състояние на златото</h2>
            <Nav.Link
                as={Link}
                className="add-new-gold-price"
                to={Path.AdministrationGoldConditionsCreate}>
                <strong>Добави нов вид</strong>
            </Nav.Link>
            {goldConditions.length > 0 ?
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Вид</th>
                            <th>Промени</th>
                            <th>Изтрии</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goldConditions.map(goldCondition =>
                            <tr key={goldCondition._id}>
                                <td>{goldCondition.name}</td>
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
                : <h4>Все още няма данни</h4>}
        </div>
    )
}
