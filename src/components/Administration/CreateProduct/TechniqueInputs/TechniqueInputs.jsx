import { Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap"

export default function TechniqueInputs() {
    return (
        <Form.Group className='mb-3'>
            <Form.Label>Вещ</Form.Label>
            <Form.Control type="text" name="title" />
        </Form.Group>
    )
}