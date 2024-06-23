import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

import * as goldCaratsService from '../../../../../services/goldCaratsService'

export default function GoldCarat() {
    const [goldCarats, setGoldCarats] = useState([])
    const [carat, setCarat] = useState({})

    useEffect(() => {
        goldCaratsService.all()
            .then(setGoldCarats)
            .catch(err => console.error(err))
    }, [])

    const handleCaratChange = (e) => {
        const selectedCaratId = e.target.value
        if (selectedCaratId) {
            let res = goldCarats.find(c => c._id === selectedCaratId)
            setCarat(res)
        }
    }

    return (
        <Form.Select name='carat' value={carat._id} onChange={handleCaratChange}>
            <option value=''>Изберете карат</option>
            {goldCarats.map(c => (
                <option key={c._id} value={c._id}>{c.carat}</option>
            ))}
        </Form.Select>
    )
}