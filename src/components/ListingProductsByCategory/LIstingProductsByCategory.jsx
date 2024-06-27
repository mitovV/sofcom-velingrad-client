import './ListingProductsByCategory.css'

export default function ListingProductsByCategory({name}) {
    return (
        <div className="product-category-wrapper">
            <h2>{name}</h2>
            <h3>Все още няма продукти в тази категория!</h3>
        </div>
    )
}