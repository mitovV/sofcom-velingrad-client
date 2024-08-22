import { Form } from "react-bootstrap"

export default function WatchesInputs() {
    return (
        <Form.Group className='mb-3'>
            <Form.Label>Марка</Form.Label>
            <Form.Control type="text" name='brand'></Form.Control>
            <Form.Label>Модел</Form.Label>
            <Form.Control type="text" name='model'></Form.Control>
            <Form.Label>Описание</Form.Label>
            <Form.Control name="description" as="textarea" rows={3} />
        </Form.Group>
    )
}
