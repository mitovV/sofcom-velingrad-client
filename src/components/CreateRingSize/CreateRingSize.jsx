import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import './CreateRingSize.css'

export default function CreateRingSize() {
    return (
        <div className='create-ring-form'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Размер</Form.Label>
                <Form.Control type="text" placeholder="Въведи рамера" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}