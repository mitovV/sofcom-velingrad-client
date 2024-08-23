import { Form } from "react-bootstrap"

export default function Title() {
    return (
        <>
            <Form.Label>Заглавие</Form.Label>
            <Form.Control name="title" />
        </>
    )
}