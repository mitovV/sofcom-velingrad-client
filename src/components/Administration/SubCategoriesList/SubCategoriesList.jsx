import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

export default function SubCategoriesList() {
    const [categories, setCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        categoriesService.getAllSub()
            .then(setCategorise)
            .catch(err => console.error(err))

            setRerender(false)
    }, [rerender])

    const onDeleteHandler = (_id) => {
        categoriesService.deleteSubCategoryById(_id)
            .then()
            .catch(err => console.error(err))
    }

    return (
        <div className="categories-wrapper">
            <h2>Списък с под категории</h2>
            <Nav.Link as={Link} className="add-new-category" to={Path.AdministrationCategoriesSubCreate}><strong>Добави нова под категория</strong></Nav.Link>
            {categories.length > 0 ?
                <BaseListing
                    data={categories}
                    name='name'
                    path={Path.AdministrationCategoriesSubEdit}
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}