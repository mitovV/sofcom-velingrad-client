import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"
import CustomPagination from "../../CustomPagination/CustomPagination"
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

import './CategoriesList.css'

export default function CategoriesList() {
    const [categories, setCategorise] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)
    const [count, setCount] = useState(0)
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        categoriesService.getAll(currentPage, itemsPerPage)
            .then(setCategorise)
            .catch(err => console.error(err))

        categoriesService.count()
            .then(setCount)
            .catch(err => console.error(err))

        setRerender(false)
    }, [currentPage, itemsPerPage, rerender])

    const onDeleteHandler = (_id) => {
        categoriesService.deleteMainCategoryById(_id)
            .then()
            .catch(err => console.error(err))
    }

    return (
        <div className="categories-wrapper">
            <h2>Списък с категории</h2>
            <Nav.Link
                as={Link}
                className="add-new-category"
                to={Path.AdministrationCategoriesCreate}>
                <strong>Добави нова категория</strong>
            </Nav.Link>
            {categories.length > 0 ?
                <>
                    <BaseListing
                        data={categories}
                        name='name'
                        path={Path.AdministrationCategoriesEdit}
                        message={modalMessage}
                        setRerender={setRerender}
                        onDeleteHandler={onDeleteHandler}
                    >
                    </BaseListing>
                    <div className="pagination-wrapper">
                        <CustomPagination itemsPerPage={itemsPerPage} totalItems={count} paginate={paginate} />
                    </div>
                </>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}