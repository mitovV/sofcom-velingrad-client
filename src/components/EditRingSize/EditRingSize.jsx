import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import * as ringSizesService from '../../services/ringSizesService'

export default function EditRingSize() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams()

    const onEditSizeFormHandler = (e) => {
        e.preventDefault()
        let id = data._id
        let size = e.target.size.value

        ringSizesService.update(id, size)
            .then(res => {
                navigate('/administration/ring-sizes')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        ringSizesService.getById(id)
            .then(setData)
            .catch(err => console.error(err))
    }, [id])

    return (
        <div className='create-ring-form'>
            <Form onSubmit={onEditSizeFormHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Размер</Form.Label>
                    <Form.Control type="text" placeholder="Въведи рамера" name='size' defaultValue={data.size} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Промени
                </Button>
            </Form>
        </div>
    )
}