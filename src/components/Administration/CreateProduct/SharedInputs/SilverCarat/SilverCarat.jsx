import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

import * as silverCaratsService from '../../../../../services/silverCaratsService'

export default function SilverCarat(){
    const [silverCarats, setSilverCarats] = useState([])
    const [carat, setCarat] = useState({})

    useEffect(()=>{
        silverCaratsService.all()
        .then(setSilverCarats)
        .catch(err => console.error(err))
    }, [])

    const handleCaratChange = (e) => {
        const selectedCaratId = e.target.value
        if (selectedCaratId) {
            let res = silverCarats.find(c => c._id === selectedCaratId)
            setCarat(res)
        }
    }

    return(
        <Form.Select name='carat' value={carat._id} onChange={handleCaratChange}>
            <option value=''>Изберете карат</option>
            {silverCarats.map(c => (
                <option key={c._id} value={c._id}>{c.carat}</option>
            ))}
        </Form.Select>
    )
}