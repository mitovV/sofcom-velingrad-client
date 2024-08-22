import { Form } from "react-bootstrap"

export default function ChainInputs() {
    return (
        <Form.Group className='mb-3'>
            <Form.Control type='number' name='length' step='0.01' min='0' placeholder="Дължина"></Form.Control>
        </Form.Group>
    )
}