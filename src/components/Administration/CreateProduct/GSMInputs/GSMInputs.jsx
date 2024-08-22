import { Form } from "react-bootstrap"

export default function GSMInputs() {
    return (
        <Form.Group className='mb-3'>
            <Form.Label>Модел</Form.Label>
            <Form.Control type="text" name='model'></Form.Control>
            <Form.Label>RAM памет</Form.Label>
            <Form.Control type="number" name='ram'></Form.Control>
            <Form.Label>Вътрешна памет</Form.Label>
            <Form.Control type="number" name='rom'></Form.Control>
            <Form.Label>Описание</Form.Label>
            <Form.Control name="description" as="textarea" rows={3}/>
            <Form.Label>Цена</Form.Label>
            <Form.Control placeholder="Цена" name="price" type="number" min={0} step={0.1}/>
        </Form.Group>
    )
}