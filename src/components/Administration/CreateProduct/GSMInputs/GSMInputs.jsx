import { Form } from "react-bootstrap"

export default function GSMInputs() {
    return (
        <Form.Group className='mb-3'>
            <Form.Label>Име</Form.Label>
            <Form.Control name='title'></Form.Control>
        </Form.Group>
    )
}