import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import BaseForm from '../../Shared/BaseForm/BaseForm'

import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

export default function CreateCategory() {
    const [categories, setCategorise] = useState([])
    const [mainCategory, setCategory] = useState({})
    const [subCategory, setSubCategory] = useState({})
    const navidate = useNavigate()
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Име на главната категория', 'Въведи името', 'name', 'primary', 'Запази']

    useEffect(() => {
        categoriesService.getAll()
            .then(setCategorise)
            .catch(err => console.error(err))
    }, [])

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value

        if (selectedCategoryId) {
            let res = categories.find(c => c._id === selectedCategoryId)
            setCategory(res)
        }
    }

    const handleSecondCategoryChange = (e) => {
          const selectedCategoryId = e.target.value

        if (selectedCategoryId) {
            let res = categories.find(c => c._id === selectedCategoryId)
            setSubCategory(res)
        }
    }

    const onCreateCategoryFormHandler = (e) => {
        e.preventDefault()

        let name = e.target.name.value

        categoriesService.create(name, mainCategory._id, subCategory._id)
            .then(res => {
                if (res.status === 201) {
                    navidate(Path.AdministrationCategoriesAll)
                }
            }).catch(err => console.error(err))
    }

    return (
        <>
            <Form.Label>Списък с категории</Form.Label>
            <Form.Select onChange={handleCategoryChange}>
                <option value=''>Изберете категория</option>
                {categories.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
            </Form.Select>
            <Form.Label>Списък с категории</Form.Label>
            <Form.Select onChange={handleSecondCategoryChange}>
                <option value=''>Изберете категория</option>
                {categories.filter(x => x._id !== mainCategory._id).map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
            </Form.Select>
            <BaseForm
                label={label}
                placeholderData={placeholderData}
                nameData={nameData}
                onFromSubmitHandler={onCreateCategoryFormHandler}
                btnVariant={btnVariant}
                btnValue={btnValue}
            />
        </>
    )
}
