import { useState, useEffect } from "react"
import { Nav, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import CustomPagination from "../CustomPagination/CustomPagination"

import * as ringSizesService from '../../services/ringSizesService'

import './RingSizeList.css'

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(13)
    const [count, setCount] = useState(0)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        console.log(ringSizes);
        ringSizesService.count()
            .then(setCount)

        ringSizesService.all(currentPage, itemsPerPage)
            .then(setRingSizes)
    }, [currentPage, itemsPerPage])

    return (
        <div className="ring-size-wrapper">
            <h2>Списък с рамери</h2>
            <Nav.Link as={Link} to="/administration/ring-size/create"><strong>Добави нов</strong></Nav.Link>
            {ringSizes.length > 0 ?
                <>
                    <ListGroup>
                        {ringSizes.map((item, index) => (
                            <ListGroupItem key={index}>
                                {item.size}
                                <Button className="ring-size-edit-btn" variant="info"><i className="bi bi-pencil-fill"></i></Button>
                                <Button className="ring-size-delete-btn" variant="danger"><i className="bi bi-x-circle"></i></Button>
                            </ListGroupItem>)
                        )}
                    </ListGroup>
                    <div className="pagination-wrapper">
                    <CustomPagination itemsPerPage={itemsPerPage} totalItems={count} paginate={paginate} />
                    </div>
                </>
                : <h4>Все още няма размери</h4>}
        </div>
    )
}