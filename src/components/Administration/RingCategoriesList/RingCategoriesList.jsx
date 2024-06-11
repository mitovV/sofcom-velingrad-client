import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import BaseListing from "../../Shared/BaseListing/BaseListing"

import * as categoriesService from '../../../services/categoriesService'

export default function RingCategoriesList() {
    const [categories, setCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        categoriesService.getAllRing()
            .then(setCategorise)
            .catch(err => console.error(err))
    }, [])

    const onDeleteHandler = (_id) => {

    }

    return (
        <div className="categories-wrapper">
            <h2>Списък с категории пръстени</h2>
            <Nav.Link as={Link} className="add-new-category" to="/administration/categories/ring/create"><strong>Добави нова категория за пръстен</strong></Nav.Link>
            {categories.length > 0 ?
                <BaseListing
                    data={categories}
                    name='name'
                    path='/administration/categories/ring/edit/'
                    message={modalMessage}
                    setRerender={setRerender}
                    onDeleteHandler={onDeleteHandler}
                >
                </BaseListing>
                : <h4>Все още няма категории</h4>}
        </div>
    )
}
