import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'

import BaseListing from "../../Shared/BaseListing/BaseListing"
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

export default function SubCategoriesList() {
    const [id, setId] = useState('')
    const [mainCategories, setMainCategories] = useState([])
    const [subCategories, setSubCategorise] = useState([])
    const modalMessage = 'Сигурни ли сте, че искате да изтриете тази категория?'
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        categoriesService.getMainWhichHaveSub()
            .then(setMainCategories)
            .catch(err => console.error(err))

        setRerender(false)
    }, [rerender])

    useEffect(() => {
        if (id) {
            categoriesService.getAllSubByParendId(id)
                .then(setSubCategorise)
                .catch(err => console.error(err))
        }
        setRerender(false)
    }, [rerender, id])

    const onDeleteHandler = (_id) => {
        categoriesService.deleteSubCategoryById(_id)
            .then()
            .catch(err => console.error(err))
    }

    const onChangeMainCategoryHandler = (e) => {
        let id = e.target.value

        setId(id)
    }

    return (
        <div className="categories-wrapper">
            <h2>Списък с под категории</h2>
            <Nav.Link
                as={Link}
                className="add-new-category"
                to={Path.AdministrationCategoriesSubCreate}>
                <strong>Добави нова под категория</strong>
            </Nav.Link>
            <Form.Group className='mb-3' controlId='category'>
                <Form.Label>Категория</Form.Label>
                <Form.Select aria-label='category' onChange={onChangeMainCategoryHandler}>
                    <option>Избетете главна категория</option>
                    {mainCategories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </Form.Select>
            </Form.Group>
            {subCategories.length > 0 ?
                <BaseListing
                    data={subCategories}
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