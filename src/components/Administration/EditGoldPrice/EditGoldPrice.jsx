import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

import * as goldConditionsService from '../../../services/goldConditionsService'
import * as goldPricesService from '../../../services/goldPricesService'
import Path from '../../../paths'

export default function EditGoldPrice() {
    const navigate = useNavigate()
    const [goldConditions, setGoldConditions] = useState([])
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        goldConditionsService.getAll()
            .then(setGoldConditions)
            .catch(err => console.error(err))

        goldPricesService
            .getById(id)
            .then(setData)
            .catch(err => console.error(err))
    }, [id])

    const onEditPriceFormSubmit = (e) => {
        e.preventDefault()

        let condition = e.target.condition.value
        let price = e.target.price.value

        goldPricesService.update(id, condition, price)
            .then(navigate(Path.AdministrationGoldPrices))
            .catch(err => console.log(err))
    }

    return (
        data ?
            <Form className='create-gold-price-form' onSubmit={onEditPriceFormSubmit}>
                <Form.Group className='mb-3' controlId='condition'>
                    <Form.Label>Състояние на златото</Form.Label>
                    <Form.Select name='gold-condition' defaultValue={data.condition}>
                        <option value=''>Изберете категория</option>
                        {goldConditions.map(gC => <option key={gC._id} value={gC._id}>{gC.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='price'>
                    <Form.Label>Цена за грам</Form.Label>
                    <Form.Control type='number' placeholder='Въведи цената' name='price' defaultValue={data.price} />
                </Form.Group>
                <Button variant='info' type='submit'>
                    Запази
                </Button>
            </Form> : <h3>Loading...</h3>
    )
}
