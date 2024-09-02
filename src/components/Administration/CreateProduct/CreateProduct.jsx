import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"

import RingInputs from "./RingInputs/RingInputs"
import GoldCarat from "./SharedInputs/GoldCarat/GoldCarat"
import SilverCarat from "./SharedInputs/SilverCarat/SilverCarat"
import Weight from "./SharedInputs/Weight/Weight"
import GSMInputs from "./GSMInputs/GSMInputs"
import ChainInputs from "./ChainInputs/ChainInputs"
import ImageInput from "./SharedInputs/ImageInput/ImageInput"
import TechniqueInputs from "./TechniqueInputs/TechniqueInputs"
import WatchesInputs from "./WatchesInputs/WatchesInputs"
import Description from "./SharedInputs/Description/Description"
import Price from "./SharedInputs/Price/Price"
import Title from "./SharedInputs/Title/Title"
import Path from '../../../paths'

import * as categoriesService from '../../../services/categoriesService'
import * as productService from '../../../services/productsService'

import './CreateProduct.css'
import GoldCondition from "./SharedInputs/GoldCondition/GoldCondition"

export default function CreateProduct() {
    const navigate = useNavigate()
    const [mainCategories, setMainCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({})
    const [mainCategory, setMainCategory] = useState('')
    

    const fields = {
        'Дамски': <RingInputs />,
        'Мъжки': <RingInputs />,
        'Детски': <RingInputs />,
        'Обеци': '',
        'Висулки': '',
        'Колиета': '',
        'Гривни': '',
        'Монети': '',
        'Синджири': <ChainInputs />,
        'Халки': <RingInputs />,
        'Техника': <TechniqueInputs />,
        'GSM': <GSMInputs />,
        'Часовници': <WatchesInputs />,
        'Аудио и видео': <Title />,
        'Компютри и периферия': <Title />,
        'Автомобили и аксесоари': <Title />,
        'Други': <Title />
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
        let res = fields[category.name] || fields[mainCategory]

        if (mainCategory === 'Злато') {
            return (
                <Form.Group>
                    <Weight />
                    <GoldCarat />
                    <GoldCondition/>
                    {res}
                </Form.Group>
            )
        }
        else if (mainCategory === 'Сребро') {
            return (
                <Form.Group>
                    <Weight />
                    <SilverCarat />
                    {res}
                </Form.Group>
            )
        }

        return (
            <Form.Group>
                {res}
                <Description />
                <Price />
            </Form.Group>
        )
    }

    const handleCategoryChange = (e) => {
        let data = e.target.value.split(' ')
        const selectedCategoryId = data[0]
        let mainCategory = data[1]


        if (selectedCategoryId) {
            let res = categories.find(c => c._id === selectedCategoryId)
            res._id = e.target.value
            setCategory(res)
            setMainCategory(mainCategory)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let categoryId, categoryName, material, weight, size, goldCarat, condition,silverCarat, title, model, brand, ram, rom, price, description

        categoryId = category._id.split(' ')[0]
        categoryName = category.name

        const formData = new FormData()
        formData.append('categoryId', categoryId)
        formData.append('categoryName', categoryName)
        formData.append('mainCategory', mainCategory)


        if (['Мъжки', 'Дамски', 'Детски'].includes(category.name)) {
            weight = e.target.weight.value
            size = e.target.size.value
            formData.append('weight', weight)
            formData.append('size', size)
        }
        if (mainCategory === 'Злато') {
            weight = e.target.weight.value
            goldCarat = e.target.carat.value
            material = mainCategory
            condition = e.target.condition.value
            formData.append('weight', weight)
            formData.append('goldCarat', goldCarat)
            formData.append('material', material)
            formData.append('condition', condition)
        }
        else if (mainCategory === 'Сребро') {
            weight = e.target.weight.value
            silverCarat = e.target.carat.value
            material = mainCategory
            formData.append('weight', weight)
            formData.append('silverCarat', silverCarat)
            formData.append('material', material)
        }
        else if (mainCategory === 'GSM') {
            model = e.target.model.value
            ram = e.target.ram.value
            rom = e.target.rom.value
            price = e.target.price.value
            description = e.target.description.value

            formData.append('model', model)
            formData.append('ram', ram)
            formData.append('rom', rom)
            formData.append('price', price)
            formData.append('description', description)
        }
        else if (mainCategory === 'Часовници') {
            brand = e.target.brand.value
            model = e.target.model.value
            description = e.target.description.value
            price = e.target.price.value

            formData.append('brand', brand)
            formData.append('model', model)
            formData.append('description', description)
            formData.append('price', price)
        }
        else if (mainCategory === 'Аудио'
            || mainCategory === 'Компютри'
            || mainCategory === 'Автомобили'
            || mainCategory === 'Други') {
            title = e.target.title.value
            description = e.target.description.value
            price = e.target.price.value

            formData.append('title', title)
            formData.append('description', description)
            formData.append('price', price)
        }

        let firstImage = e.target.firstImage.files[0]
        let secondImage = e.target.secondImage.files[0]
        let thirdImage = e.target.thirdImage.files[0]

        formData.append('firstImage', firstImage)
        formData.append('secondImage', secondImage)
        formData.append('thirdImage', thirdImage)

        productService.create(formData)
            .then(res => {
                if (res.status === 201) {
                    navigate(Path.AdministrationProducts)
                }
            })
            .catch(err => console.error(err))
    }

    const CategoryOptions = ({ categoriesData, categoryPath, level = 0 }) => {
        return categoriesData.map((c) => (
            <React.Fragment key={c._id}>
                {c.subCategories.length > 0
                    ? <option value={c._id} disabled>{[...categoryPath, c.name].join('—')}</option>
                    : <option value={c._id + ' ' + [...categoryPath, c.name].join(' ')}>{[...categoryPath, c.name].join('—')}</option>}

                {c.subCategories.length > 0 && (
                    <CategoryOptions categoriesData={c.subCategories} categoryPath={[...categoryPath, c.name]} level={level + 1} />
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
                        <CategoryOptions categoriesData={mainCategories} categoryPath={[]} />
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
                                    <ImageInput imageId='firstImage' />
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
