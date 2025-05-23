import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'

import * as goldConditionsService from '../../../../../services/goldConditionsService'

export default function GoldCondition() {
    const [goldConditions, setGoldConditions] = useState([])

    useEffect(() => {
        goldConditionsService.getAll()
            .then(setGoldConditions)
            .catch(err => console.error(err))
    }, [])

    return (
        <Form.Select name='condition'>
            <option value=''>Изберете вид на златото</option>
            {goldConditions.map(gC => <option key={gC._id} value={gC._id}>{gC.name}</option>)}
        </Form.Select>
    )
}
