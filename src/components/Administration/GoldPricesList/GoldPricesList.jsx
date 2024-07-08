import { useEffect, useState } from "react"
import { Nav, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import Path from "../../../paths"

import * as goldPricesService from '../../../services/goldPricesService'

import './GoldPricesList.css'

export default function GoldPricesList() {
    const [goldPrices, setGoldPrices] = useState([])

    useEffect(() => {
        goldPricesService.getAll()
            .then(setGoldPrices)
            .catch(err => console.error(err))
    }, [])

    const onDeleteHandler = (e) => {
        let _id = e.target.id
        goldPricesService.deleteById(_id)
            .then(res => {
                goldPricesService.getAll()
                .then(setGoldPrices)
                .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="gold-prices-wrapper">
            <h2>Цени на златото</h2>
            <Nav.Link
                as={Link}
                className="add-new-gold-price"
                to={Path.AdministrationGoldPricesCreate}>
                <strong>Добави нова цена</strong>
            </Nav.Link>
            {goldPrices.length > 0 ?
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
                        {goldPrices.map(goldPrice => 
                        <tr key={goldPrice._id}>
                            <td>{goldPrice.condition.name}</td>
                            <td>{goldPrice.price}</td>
                            <td>
                            <Button as={Link} to={`${Path.AdministrationGoldPricesEdit.split(':id')[0]}${goldPrice._id}`} variant="primary">Промени</Button>
                            </td>
                            <td>
                            <Button id={goldPrice._id} variant="danger" onClick={onDeleteHandler}>Изтрии</Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                : <h4>Все още няма цени</h4>}
        </div>
    )
}