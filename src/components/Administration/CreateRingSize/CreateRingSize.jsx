import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import * as ringSizesService from '../../../services/ringSizesService'

export default function CreateRingSize() {
    const navidate = useNavigate()

    const onCreateSizeFormHandler = (e) => {
        e.preventDefault()

        const size = e.target.size.value

        ringSizesService.create(size)
            .then(res => {
                if (res.status === 201) {
                    navidate('/administration/ring-sizes')
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='create-ring-form'>
            <Form onSubmit={onCreateSizeFormHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Размер</Form.Label>
                    <Form.Control type="text" placeholder="Въведи рамера" name='size' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}