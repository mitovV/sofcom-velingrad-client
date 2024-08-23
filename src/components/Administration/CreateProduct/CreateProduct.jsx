import { useEffect, useState } from "react"
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

import * as categoriesService from '../../../services/categoriesService'

import './CreateProduct.css'

export default function CreateProduct() {
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
        'Аудио и видео': <Title/>,
        'Компютри и периферия': <Title/>,
        'Автомобили и аксесоари': <Title/>,
        'Други': <Title/>
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
                    {res}
                </Form.Group>
            )
        }
        else if (mainCategory === 'Сребро') {
            return (
                <Form.Group>
                    <Weight />
                    <SilverCarat/>
                    {res}
                </Form.Group>
            )
        }

        return (
            <Form.Group>
                {res}
                <Description/>
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

        let weight, size, goldCarat, silverCarat, title, model, brand, ram, rom
  
        if (['Мъжки', 'Дамски', 'Детски'].includes(category.name)) {
            weight = e.target.weight.value
            size = e.target.size.value
        }
        if (mainCategory === 'Злато') {
            carat = e.target.carat.value
        }



        let firstImage = e.target.firstImage.files[0]
        let secondImage = e.target.secondImage.files[0]
        let thirdImage = e.target.thirdImage.files[0]

        //productService.create()
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
