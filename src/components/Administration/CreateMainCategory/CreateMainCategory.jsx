import { useNavigate } from 'react-router-dom'
import BaseForm from '../../Shared/BaseForm/BaseForm'

import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'

export default function CreateMainCategory() {
    const navidate = useNavigate()
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Име на главната категория', 'Въведи името', 'name', 'primary', 'Запази']

    const onCreateMainCategoryFormHandler = (e) => {
        e.preventDefault()

        let name = e.target.name.value

        categoriesService.createMain(name)
            .then(res => {
                if (res.status === 201) {
                    navidate(Path.AdministrationCategoriesMain)
                }
            }).catch(err => console.error(err))
    }

    return (
        <BaseForm
            label={label}
            placeholderData={placeholderData}
            nameData={nameData}
            onFromSubmitHandler={onCreateMainCategoryFormHandler}
            btnVariant={btnVariant}
            btnValue={btnValue}
        />
    )
}