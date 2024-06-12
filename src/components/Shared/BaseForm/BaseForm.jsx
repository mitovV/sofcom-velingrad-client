import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import './BaseForm.css'

export default function BaseEditForm({ label, placeholderData, nameData, onFromSubmitHandler, defaultValue, btnVariant, btnValue }) {
    return (
        <div className='base-form'>
            <Form onSubmit={onFromSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type="text" placeholder={placeholderData} name={nameData} defaultValue={defaultValue}/>
                </Form.Group>
                <Button variant={btnVariant} type="submit">
                    {btnValue}
                </Button>
            </Form>
        </div>
    )
}