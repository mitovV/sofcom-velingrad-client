import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import Path from "../../../../paths"

import './DetailsButton.css'

export default function DetailsButton({id}) {
    return(
        <Link to={Path.ProductsDetails + id}><Button className="details-btn">Детайли</Button></Link>
    )
}