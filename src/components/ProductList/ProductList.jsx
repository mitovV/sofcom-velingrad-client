import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import config from "../../config/config"
import ProductCategoryTitle from "./ProductCategoryTitle/ProductCategoryTitle"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'

import './Product.css'

export default function ProductList() {
    const { '*': data } = useParams()
    const ids = data.split('/')
    const id = ids[ids.length - 1]
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {

        setCategories([]);

        Promise.all(ids.map(element => categoriesService.getById(element)))
            .then(responses => setCategories(responses))
            .catch(err => console.error(err));

        if (categories.length > 0) {
            let material

            if (categories[0].name === 'Злато') {
                material = 'Злато'
            }
            else if (categories[0].name === 'Сребро') {
                material = 'Сребро'
            }

            productsService.getAllByCategoryId(id, material)
                .then(setProducts)
                .catch(err => console.error(err))
        }

    }, [id, data])

    if (products?.length > 0) {
        if (categories[0]?.name === 'Злато') {
            console.log(products);
            
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <CardGroup>
                        {products.map(p =>
                            <Card>
                                <Card.Img className="product-photo" variant="top" src={config.BASE_PICTURE_URL + p.images[0]} />
                                <Card.Body>
                                    <Card.Title>{p.goldCalcPrice.toFixed(2)}/лв.</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        Добавен на {new Date(p.createdOn).toLocaleString('bg-BG', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                        })}
                                    </small>
                                </Card.Footer>
                            </Card>
                        )}
                    </CardGroup>
                </>
            )
        }
        else if (categories[0]?.name === 'Сребро') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Техника') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'GSM') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Часовници') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Аудио и видео') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Компютри и периферия') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Автомобили и аксесоари') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
        else if (categories[0]?.name === 'Други') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                </>
            )
        }
    }
    else {
        return (
            <>
                <ProductCategoryTitle categories={categories}
                    message={'Все още няма продукти в тази категория!'} />
            </>
        )
    }
}
