import { useEffect, useState } from "react"
import React from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"

import RingInputs from "./RingInputs/RingInputs"

import * as categoriesService from '../../../services/categoriesService'
import ImageInput from "./SharedInputs/ImageInput/ImageInput"

import './CreateProduct.css'

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

    useEffect(() => {
        categoriesService.getAllMain()
            .then(setMainCategories)
            .catch(err => console.error(err))

        categoriesService.getAll()
            .then(setCategories)
            .catch(err => console.error(err))

    }, [])

    const generateFields = () => {
        return fields[category.name]
    }

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value

        if (selectedCategoryId) {
            let res = categories.find(c => c._id === selectedCategoryId)
            setCategory(res)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (['Мъжки', 'Дамски', 'Детски'].includes(category.name)) {
            let material = e.target.category.value
            let test = document.getElementById(material).previousSibling.previousSibling.textContent
            console.log(test);
            let weight = e.target.weight.value
            let size = e.target.size.value
        }

        let firstImage = e.target.firstImage.files[0]
        let secondImage = e.target.secondImage.files[0]
        let thirdImage = e.target.thirdImage.files[0]
     
        //productService.create()
    }

    const CategoryOptions = ({ categories, level = 0 }) => {
        return categories.map((c) => (
            <React.Fragment key={c._id}>
                {c.subCategories.length > 0
                    ? <option id={c._id} value={c._id} disabled>{'—'.repeat(level) + c.name}</option>
                    : <option id={c._id} value={c._id}>{'—'.repeat(level) + c.name}</option>}

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
                <Form.Select name='category' value={category._id} onChange={handleCategoryChange}>
                    <option value=''>Изберете категория</option>
                    {mainCategories.length > 0 ? (
                        <CategoryOptions categories={mainCategories} />
                    ) : (
                        <option disabled>Loading categories...</option>
                    )}
                </Form.Select>
            </div>
            {Object.keys(category).length > 0 ?
                (
                    <>
                        {generateFields()}
                        <Container fluid='sm'>
                            <Row>
                                <Col>
                                    <ImageInput imageId='firstImage'/>
                                </Col>
                                <Col>
                                    <ImageInput imageId='secondImage' />
                                </Col>
                                <Col>
                                    <ImageInput imageId='thirdImage' />
                                </Col>
                            </Row>
                        </Container>
                        <div className="add-btn-wrapper">
                            <Button variant="info" type="submit">Добави</Button>
                        </div>
                    </>)
                : <h3>Изберете категория</h3>}
        </Form>
    )
}
