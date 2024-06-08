import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"

import * as categoriesService from '../../../services/categoriesService'

import './CategoriesList.css'

export default function CategoriesList() {
    const [categories, setCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        categoriesService.getAll()
            .then(setCategorise)
            .catch(err => console.error(err))
    }, [])

    const onDeleteHandler = (_id) => {

        categories.deleteBySize(_id)
            .then()
            .catch(err => console.error(err))
    }

    //TODO: Create logic for delete and edit
    return (
        <div className="categories-wrapper">
            <h2>Списък с категории</h2>
            <Nav.Link as={Link} className="add-new-category" to="/administration/categories/create"><strong>Добави нова категория</strong></Nav.Link>
            {categories.length > 0 ?
                <BaseListing
                    data={categories}
                    name='name'
                    path='/administration/categories/edit/'
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}