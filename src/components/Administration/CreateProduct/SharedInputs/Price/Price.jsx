import { Form } from "react-bootstrap"

export default function Price(){
    return(
        <>
        <Form.Label>Цена</Form.Label>
        <Form.Control placeholder="Цена" name="price" type="number" min={0} step={0.1} />
        </>
    )
}