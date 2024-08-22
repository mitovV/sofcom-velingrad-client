import { Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap"

export default function TechniqueInputs(){
    return (
        <Form>
            <FormGroup>
                <FormLabel>Вещ</FormLabel>
                <FormControl type="text" name="title"/>
                <FormLabel>Описание</FormLabel>
                <FormControl name="description" as="textarea" rows={3}/>
                <FormLabel>Цена</FormLabel>
                <FormControl name="price" type="number" min={0} step={0.1}/>
            </FormGroup>
        </Form>
    )
}