import { useState, useEffect } from "react"
import { Nav, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import CustomPagination from '../../CustomPagination/CustomPagination'
import DeleteModal from "./DeleteModal/DeleteModal"

import * as ringSizesService from '../../../services/ringSizesService'

import './RingSizeList.css'

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(13)
    const [count, setCount] = useState(0)
    const [rerender, setRerender] = useState(false)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        ringSizesService.count()
            .then(setCount)

        ringSizesService.all(currentPage, itemsPerPage)
            .then(setRingSizes)

        setRerender(false)
    }, [currentPage, itemsPerPage, rerender])

    return (
        <div className="ring-size-wrapper">
            <h2>Списък с рамери</h2>
            <Nav.Link as={Link} className="add-new-size" to="/administration/ring-sizes/create"><strong>Добави нов</strong></Nav.Link>
            {ringSizes.length > 0 ?
                <>
                    <ListGroup>
                        {ringSizes.map((item, index) => (
                            <ListGroupItem key={index}>
                                {item.size}
                                <Button as={Link} to={`/administration/ring-sizes/edit/${item._id}`} className="ring-size-edit-btn" variant="info" ><i className="bi bi-pencil-fill"></i></Button>
                                <DeleteModal _id={item._id} size={item.size} setRerender={setRerender}/>
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