import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"

import * as categoriesService from '../../../services/categoriesService'

export default function SubCategoriesList () {
    const [categories, setCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        categoriesService.getAllSub()
            .then(setCategorise)
            .catch(err => console.error(err))
    }, [])

    const onDeleteHandler = (_id) => {

    }
    
    return(
        <div className="categories-wrapper">
            <h2>Списък с под категории</h2>
            <Nav.Link as={Link} className="add-new-category" to="/administration/categories/sub/create"><strong>Добави нова под категория</strong></Nav.Link>
            {categories.length > 0 ?
                <BaseListing
                    data={categories}
                    name='name'
                    path='/administration/categories/sub/edit/'
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}