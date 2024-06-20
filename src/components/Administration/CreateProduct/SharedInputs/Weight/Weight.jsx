import { FloatingLabel, Form } from "react-bootstrap"

export default function Weight() {
    return (
        <FloatingLabel
            controlId='floatingNumber'
            label='Въведете грамаж'
            className='mb-3'>
            <Form.Control type='number' name='weight' step='0.01' />
        </FloatingLabel>
    )
}