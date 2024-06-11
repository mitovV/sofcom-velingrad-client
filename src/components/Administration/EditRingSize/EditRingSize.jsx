import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BaseForm from '../../Shared/BaseForm/BaseForm'

import * as ringSizesService from '../../../services/ringSizesService'

export default function EditRingSize() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams()
    const [label, placeholderData, nameData, btnVariant, btnValue] = ['Размер', 'Въведи рамера', 'size', 'success', 'Промени']
    
    useEffect(() => {
        ringSizesService.getById(id)
            .then(setData)
            .catch(err => console.error(err))
    }, [id])

    const onEditSizeFormHandler = (e) => {
        e.preventDefault()

        let id = data._id
        let size = e.target.size.value
        
        ringSizesService.update(id, size)
            .then(res => {
                navigate('/administration/ring-sizes')
            })
            .catch(err => console.error(err))
    }

    return (
        <BaseForm 
        label={label} 
        placeholderData={placeholderData} 
        nameData={nameData} 
        onFromSubmitHandler={onEditSizeFormHandler}
        defaultValue={data.size}
        btnVariant={btnVariant}
        btnValue={btnValue}
        />
    )
}