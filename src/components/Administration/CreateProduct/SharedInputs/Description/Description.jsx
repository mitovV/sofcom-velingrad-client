import { Form } from "react-bootstrap"

export default function Description() {
    return (
        <>
            <Form.Label>Описание</Form.Label>
            <Form.Control name="description" as="textarea" rows={3} />
        </>
    )
}
