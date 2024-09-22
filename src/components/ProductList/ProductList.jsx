import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'

import ProductCategoryTitle from "./ProductCategoryTitle/ProductCategoryTitle"
import GoldCard from "./GoldCard/GoldCard"
import WatchesCard from "./WatchesCard/WatchesCard"
import TechniqueCard from "./TechniqueCard/TechniqueCard"
import GSMCard from "./GSMCard/GSMCard"
import AudioAndVideoCard from "./AudioAndVideoCard/AudioAndVideoCard"
import ComputersAndPeripheralsCard from "./ComputersAndPeripheralsCard/ComputersAndPeripheralsCard"
import CarsAndAccessoriesCard from "./CarsAndAccessoriesCard/CarsAndAccessoriesCard"
import OthersCard from "./OthersCard/OthersCard"

import * as productsService from '../../services/productsService'
import * as categoriesService from '../../services/categoriesService'

import './ProductList.css'

export default function ProductList() {
    const { '*': data } = useParams()
    const ids = data.split('/')
    const id = ids[ids.length - 1]
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setCategories([])
        setLoading(true)

        Promise.all(ids.map(element => categoriesService.getById(element)))
            .then(responses => {
                setCategories(responses)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [id, data])

    useEffect(() => {
        if (categories.length > 0) {
            let material

            if (categories[0]?.name === 'Злато') {
                material = 'Злато'
            } else if (categories[0]?.name === 'Сребро') {
                material = 'Сребро'
            }

            productsService.getAllByCategoryId(id, material)
                .then(setProducts)
                .catch(err => console.error(err))
        }
    }, [categories, id])

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if (products?.length > 0) {
        if (categories[0]?.name === 'Злато') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <GoldCard products={products} categories={categories} />
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
                    <TechniqueCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'GSM') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <GSMCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'Часовници') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <WatchesCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'Аудио и видео') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <AudioAndVideoCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'Компютри и периферия') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <ComputersAndPeripheralsCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'Автомобили и аксесоари') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <CarsAndAccessoriesCard products={products} />
                </>
            )
        }
        else if (categories[0]?.name === 'Други') {
            return (
                <>
                    <ProductCategoryTitle categories={categories}
                        message={`В тази категория има ${products.length} ${products.length > 1 ? 'продукта' : 'продукт'}!`} />
                    <OthersCard products={products} />
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
