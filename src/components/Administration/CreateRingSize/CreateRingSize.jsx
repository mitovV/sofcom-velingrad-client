import { useNavigate } from 'react-router-dom'
import BaseForm from '../../Shared/BaseForm/BaseForm'

import Path from '../../../paths'

import * as ringSizesService from '../../../services/ringSizesService'

export default function CreateRingSize() {
    const navigate = useNavigate()
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Размер', 'Въведи рамера', 'size', 'primary', 'Запази']

    const onCreateSizeFormHandler = (e) => {
        e.preventDefault()

        const size = e.target.size.value

        ringSizesService.create(size)
            .then(res => {
                if (res.status === 201) {
                    navigate(Path.AdministrationRingSizes)
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <BaseForm
            label={label}
            placeholderData={placeholderData}
            nameData={nameData}
            onFromSubmitHandler={onCreateSizeFormHandler}
            btnVariant={btnVariant}
            btnValue={btnValue}
        />
    )
}