import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Path from '../../../paths'

import * as goldConditionsService from '../../../services/goldConditionsService'

export default function CreateGoldCondition() {
    const navigate = useNavigate()

    const onCreateGoldConditionFormSubmit = (e) => {
        e.preventDefault()

        let name = e.target.name.value
        goldConditionsService.create(name)
            .then(res => {
                if (res.status === 201) {
                    navigate(Path.AdministrationGoldConditions)
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <Form className='create-gold-price-form' onSubmit={onCreateGoldConditionFormSubmit}>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>Вид на златото</Form.Label>
                <Form.Control type='text' placeholder='Въведи вида на златото' name='name' />
            </Form.Group>
            <Button variant='info' type='submit'>
                Запази
            </Button>
        </Form>
    )
}