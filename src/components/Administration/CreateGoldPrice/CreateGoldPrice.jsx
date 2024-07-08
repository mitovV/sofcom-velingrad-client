import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Path from '../../../paths'

import * as goldPricesService from '../../../services/goldPricesService'
import * as goldConditionsService from '../../../services/goldConditionsService'

import './CreateGoldPrice.css'

export default function CreateGoldPrice() {
    const navigate = useNavigate()
    const [goldConditions, setGoldConditions] = useState([])

    useEffect(() => {
        goldConditionsService.getAll()
            .then(setGoldConditions)
            .catch(err => console.error(err))
    }, [])

    const onCreateGoldPriceFormSubmit = (e) => {
        e.preventDefault()

        let condition = e.target.condition.value
        let price = e.target.price.value

        goldPricesService
            .create(condition, price)
            .then(res => {
                if (res.status === 201) {
                    navigate(Path.AdministrationGoldPrices)
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <Form className='create-gold-price-form' onSubmit={onCreateGoldPriceFormSubmit}>
            <Form.Group className='mb-3' controlId='condition'>
                <Form.Label>Състояние на златото</Form.Label>
               <Form.Select name='gold-condition'>
                    <option value=''>Изберете категория</option>
                    {goldConditions.map(gC => <option key={gC._id} value={gC._id}>{gC.name}</option>)}
               </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>Цена за грам</Form.Label>
                <Form.Control type='number' placeholder='Въведи цената' name='price' />
            </Form.Group>
            <Button variant='info' type='submit'>
                Запази
            </Button>
        </Form>
    )
}