import { useState, useEffect } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import CustomPagination from '../../CustomPagination/CustomPagination'

import * as ringSizesService from '../../../services/ringSizesService'

import './RingSizeList.css'
import BaseListing from "../../Shared/BaseListing/BaseListing"

export default function RingSizeList() {
    const [ringSizes, setRingSizes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(13)
    const [count, setCount] = useState(0)
    const [rerender, setRerender] = useState(false)
    const modalMessage = 'Сигурни ли сте, че искате да изтриете този размер?'

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        ringSizesService.count()
            .then(setCount)

        ringSizesService.all(currentPage, itemsPerPage)
            .then(setRingSizes)

        setRerender(false)
    }, [currentPage, itemsPerPage, rerender])

    const onDeleteHandler = (_id) => {

        ringSizesService.deleteBySize(_id)
            .then()
            .catch(err => console.error(err))
    }

    return (
        <div className="ring-size-wrapper">
            <h2>Списък с рамери</h2>
            <Nav.Link as={Link} className="add-new-size" to="/administration/ring-sizes/create"><strong>Добави нов</strong></Nav.Link>
            {ringSizes.length > 0 ?
                <>
                    <BaseListing
                        data={ringSizes}
                        name='size'
                        path='/administration/ring-sizes/edit/'
                        message={modalMessage}
                        setRerender={setRerender}
                        onDeleteHandler={onDeleteHandler}
                    >
                    </BaseListing>
                    <div className="pagination-wrapper">
                        <CustomPagination itemsPerPage={itemsPerPage} totalItems={count} paginate={paginate} />
                    </div>
                </>
                : <h4>Все още няма размери</h4>}
        </div>
    )
}