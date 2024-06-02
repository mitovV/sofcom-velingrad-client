import { useState, useEffect } from "react"
import * as ringSizesService from '../../services/ringSizesService'

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])

    useEffect(() => {
        ringSizesService.all()
            .then(setRingSizes)
    }, [])

    if (ringSizes.length > 0) {
        return (
            <>
                <h2>Списък с рамери</h2>
                <h3>Theres is some sizes</h3>
            </>
        )

    } else {
        return (
            <h4>Все още няма размери</h4>
        )
    }
}