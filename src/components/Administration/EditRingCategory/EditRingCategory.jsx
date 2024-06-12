import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import BaseForm from '../../Shared/BaseForm/BaseForm'
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

export default function EditRingCategory() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ring, setRing] = useState({})
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Категория пръстени', 'Въведи категорията', 'name', 'success', 'Промени']


    useEffect(() => {
        categoriesService.getById(id)
            .then(setRing)
            .catch(err => console.error(err))
    }, [id])

    const onEditCategoryFormHandler = (e) => {
        e.preventDefault()

        if (ring) {
            let id = ring._id
            let name = e.target.name.value

            categoriesService.updateRingCategory(id, name)
                .then(res => {
                    navigate(Path.AdministrationCategoriesRing)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <BaseForm
            label={label}
            placeholderData={placeholderData}
            nameData={nameData}
            onFromSubmitHandler={onEditCategoryFormHandler}
            defaultValue={ring?.name}
            btnVariant={btnVariant}
            btnValue={btnValue}
        />
    )
}