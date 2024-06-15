import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

import './CreateSubCategory.css'

export default function () {
    const [mainCategories, setMainCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        categoriesService
            .getAllMain()
            .then(setMainCategories)
            .catch(err => console.error(err))
    }, [mainCategories])

    const onCrateSubCategoryFormHandler = (e) => {
        e.preventDefault()

        let categoryId = e.target.category.value
        let name = e.target.name.value

        categoriesService
            .createSub(categoryId, name)
            .then(res => {
                if (res.status === 201) {
                    navigate(Path.AdministrationCategoriesSub)
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <Form className='create-sub-category-form' onSubmit={onCrateSubCategoryFormHandler}>
            <Form.Group className='mb-3' controlId='category'>
                <Form.Label>Категория</Form.Label>
                <Form.Select aria-label='category'>
                    <option>Избетете главна категория</option>
                    {mainCategories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Име на под категорията</Form.Label>
                <Form.Control type='text' placeholder='Въведи името' name='name' />
            </Form.Group>
            <Button variant='info' type='submit'>
                Запази
            </Button>
        </Form>
    )
}