import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import BaseForm from '../../Shared/BaseForm/BaseForm'
import Path from "../../../paths"

import * as categoriesService from '../../../services/categoriesService'

export default function EditSubCategory() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [subCategory, setSubCategory] = useState({})
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Под категория', 'Промени под категорията', 'name', 'success', 'Промени']

    useEffect(() => {
        categoriesService.getById(id)
            .then(setSubCategory)
            .catch(err => console.log(err))
    }, [id])


    const onEditSubCategorySubmitHandler = (e) => {
        e.preventDefault()

        if (subCategory) {
            let id = subCategory._id
            let name = e.target.name.value

            categoriesService.updateSub(id, name)
                .then(res => {
                    navigate(Path.AdministrationCategoriesSub)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <BaseForm
        label={label}
        placeholderData={placeholderData}
        nameData={nameData}
        onFromSubmitHandler={onEditSubCategorySubmitHandler}
        defaultValue={subCategory.name}
        btnVariant={btnVariant}
        btnValue={btnValue}
    />
    )
}