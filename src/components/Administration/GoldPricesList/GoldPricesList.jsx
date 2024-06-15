import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import Path from "../../../paths"

import * as goldPricesService from '../../../services/goldPricesService'

import './GoldPricesList.css'

export default function GoldPrices() {
    const [goldPrices, setGoldPrices] = useState([])
    const [rerender, setRerender] = useState(false)
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази цена?'

    useEffect(() => {
        goldPricesService.getAll()
            .then(setGoldPrices)
            .catch(err => console.error(err))

        setRerender(false)
    }, [rerender])

    const onDeleteHandler = (_id) => {
        goldPricesService.deleteById(_id)
            .then()
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
                <BaseListing
                    data={goldPrices}
                    name='name'
                    path={Path.AdministrationGoldPricesEdit}
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма цени</h4>}
        </div>
    )
}