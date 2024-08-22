import { Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap"

export default function TechniqueInputs() {
    return (
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Вещ</Form.Label>
                <Form.Control type="text" name="title" />
                <Form.Label>Описание</Form.Label>
                <Form.Control name="description" as="textarea" rows={3} />
                <Form.Label>Цена</Form.Label>
                <Form.Control name="price" type="number" min={0} step={0.1} />
            </Form.Group>
        </Form>
    )
}