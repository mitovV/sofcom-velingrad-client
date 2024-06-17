import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

import * as categoriesService from '../../../services/categoriesService'

export default function CreateProduct() {
    const [mainCategories, setMainCategories] = useState([])
    const [mainCategory, setMainCategory] = useState({})
    const [subCategories, setSubCategories] = useState([])
    const [ringCategory, setRingCategory] = useState({})
    const [subCategory, setSubCategory] = useState({})

    const fields = {
        'Пръстени': '',
        'Обеци': '',
        'Висулки': '',
        'Колиета':'' ,
        'Гривни': '',
        'Монети': '',
        'Синджири': '',
        'Халки': ''
    }

    const generateFields = () => {

           return fields[ringCategory.name || subCategory.name || mainCategory.name]

    }

    useEffect(() => {
        categoriesService.getAllMain()
            .then(setMainCategories)
            .catch(err => console.error(err))

    }, [])

    useEffect(() => {
        if (mainCategory._id) {
            setSubCategories(mainCategory.subCategories)
        }

    }, [mainCategory])

    const handleMainCategoryChange = (e) => {
        const selectedCategoryId = e.target.value

        if (selectedCategoryId) {
            let res = mainCategories.find(c => c._id === selectedCategoryId)
            setMainCategory(res)
            setSubCategory('')
        }
    }

    const handleSubCategoryChange = (e) => {
        const selectedSubCategoryId = e.target.value
        if (selectedSubCategoryId) {
            let subCat = subCategories.find(c => c._id === selectedSubCategoryId)
            setSubCategory(subCat)
        }
    }

    const handleRingCategoryChange = (e) => {
        const selectedRingCategoryId = e.target.value
        if (selectedRingCategoryId) {
            let ringCat = subCategory.subCategories.find(c => c._id === selectedRingCategoryId)
            setRingCategory(ringCat)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProduct = {
            name: productName,
            description: productDescription,
            price: productPrice,
            mainCategoryId: mainCategory,
            subCategoryId: subCategory,
            ...dynamicFields
        }

        try {
            await axios.post('http://localhost:3001/products', newProduct)
            alert('Product created successfully!')
        } catch (error) {
            console.error('Error creating product:', error)
        }
    }

    return (
        <Form className="create-product-form" onSubmit={handleSubmit}>
            <div>
                <Form.Label>Главна категория</Form.Label>
                <Form.Select onChange={handleMainCategoryChange}>
                    <option value=''>Изберете главна категория</option>
                    {mainCategories.map(cat => (
                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                </Form.Select>
            </div>
            {mainCategory && subCategories.length > 0 ?
                <div>
                    <Form.Label>Под категория</Form.Label>
                    <Form.Select onChange={handleSubCategoryChange}>
                        <option value=''>Изберте под категория</option>
                        {subCategories.map(cat => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                        ))}
                    </Form.Select>
                </div>
                : null}
            {(Object.keys(subCategory).length > 0) && subCategory.subCategories.length > 0 ?
                <div>
                    <Form.Label>Категория пръстен</Form.Label>
                    <Form.Select onChange={handleRingCategoryChange}>
                        <option value=''>Изберте категория за пръстен</option>
                        {subCategory.subCategories.map(cat => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                        ))}
                    </Form.Select>
                </div>
                : null}
                {generateFields()}
        </Form>
    )
}
