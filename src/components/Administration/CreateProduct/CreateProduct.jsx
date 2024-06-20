import { useEffect, useState } from "react"
import React from "react"
import { Button, Form } from "react-bootstrap"

import RingInputs from "./RingInputs/RingInputs"

import * as categoriesService from '../../../services/categoriesService'

export default function CreateProduct() {
    const [mainCategories, setMainCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})

    const fields = {
        'Дамски': <RingInputs />,
        'Мъжки': <RingInputs />,
        'Детски': <RingInputs />,
        'Обеци': '',
        'Висулки': '',
        'Колиета': '',
        'Гривни': '',
        'Монети': '',
        'Синджири': '',
        'Халки': ''
    }

    const generateFields = () => {

        return fields[category.name]

    }

    useEffect(() => {
        categoriesService.getAllMain()
            .then(setMainCategories)
            .catch(err => console.error(err))

        categoriesService.getAll()
            .then(setCategories)
            .catch(err => console.error(err))

    }, [])

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value

        if (selectedCategoryId) {
            let res = categories.find(c => c._id === selectedCategoryId)
            setCategory(res)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(category);
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

    const CategoryOptions = ({ categories, level = 0 }) => {
        return categories.map((c) => (
            <React.Fragment key={c._id}>
                {c.subCategories.length > 0
                    ? <option value={c._id} disabled>{'—'.repeat(level) + c.name}</option>
                    : <option value={c._id}>{'—'.repeat(level) + c.name}</option>}

                {c.subCategories.length > 0 && (
                    <CategoryOptions categories={c.subCategories} level={level + 1} />
                )}
            </React.Fragment>
        ));
    };

    return (
        <Form className="create-product-form" onSubmit={handleSubmit}>
            <div>
                <Form.Label>Категория</Form.Label>
                <Form.Select value={category._id} onChange={handleCategoryChange}>
                    <option value=''>Изберете категория</option>
                    {mainCategories.length > 0 ? (
                        <CategoryOptions categories={mainCategories} />
                    ) : (
                        <option disabled>Loading categories...</option>
                    )}
                </Form.Select>
            </div>
            {generateFields()}
            <Button variant="info" type="submit">Добави</Button>
        </Form>
    )
}
