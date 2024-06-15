import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

import './MainCategoriesList.css'

export default function CategoriesList() {
    const [categories, setCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        categoriesService.getAllMain()
            .then(setCategorise)
            .catch(err => console.error(err))

        setRerender(false)
    }, [rerender])

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
                to={Path.AdministrationCategoriesMainCreate}>
                <strong>Добави нова категория</strong>
            </Nav.Link>
            {categories.length > 0 ?
                <BaseListing
                    data={categories}
                    name='name'
                    path={Path.AdministrationCategoriesMainEdit}
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}