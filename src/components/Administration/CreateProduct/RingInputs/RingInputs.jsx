import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

import * as ringSizesService from '../../../../services/ringSizesService'

export default function RingInputs() {
    const [sizes, setSizes] = useState([])
    const [size, setSize] = useState({})

    useEffect(() => {
        ringSizesService.all()
            .then(setSizes)
            .catch(err => console.error(err))

    }, [])

    const handleSizeChange = (e) => {
        const selectedSizeId = e.target.value
        if (selectedSizeId) {
            let res = sizes.find(c => c._id === selectedSizeId)
            setSize(res)
        }
    }

    return (
        <Form.Group className='mb-3'>
            <Form.Select name='size' value={size._id} onChange={handleSizeChange}>
                <option value=''>Изберете размер</option>
                {sizes.map(s => (
                    <option key={s._id} value={s._id}>{s.size}</option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}
