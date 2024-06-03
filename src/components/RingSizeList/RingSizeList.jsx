import { useState, useEffect } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import * as ringSizesService from '../../services/ringSizesService'

import './RingSizeList.css'

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])

    useEffect(() => {
        ringSizesService.all()
            .then(setRingSizes)
    }, [])

    return (
            <div className="ring-size-wrapper">
            <h2>Списък с рамери</h2>
            <Nav.Link as={Link} to="/administration/ring-size/create"><strong>Добави нов</strong></Nav.Link>
            {ringSizes.length > 0 ? <h3>Theres is some sizes</h3> : <h4>Все още няма размери</h4>}
        </div> 
    )
}