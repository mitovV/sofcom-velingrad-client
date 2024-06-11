import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BaseForm from '../../Shared/BaseForm/BaseForm'

import * as categoriesService from '../../../services/categoriesService'

export default function EditMainCategory() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams()
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Категория', 'Въведи категорията', 'name', 'success', 'Промени']

    useEffect(() => {
        categoriesService.getById(id)
            .then(setData)
            .catch(err => console.error(err))
    }, [id])

    const onEditCategoryFormHandler = (e) => {
        e.preventDefault()

        let id = data._id
        let name = e.target.name.value
        
        categoriesService.update(id, name)
            .then(res => {
                navigate('/administration/categories/main')
            })
            .catch(err => console.error(err))
    }

    return (
        <BaseForm
            label={label}
            placeholderData={placeholderData}
            nameData={nameData}
            onFromSubmitHandler={onEditCategoryFormHandler}
            defaultValue={data.name}
            btnVariant={btnVariant}
            btnValue={btnValue}
        />
    )
}