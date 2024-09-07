import './ProductCategoryTitle.css'

export default function ProductCategoryTitle({categories}) {
    return (
        <div className="product-category-wrapper">
            <h2>{categories.map(n => n.name + ' ')}</h2>
            <h3>Все още няма продукти в тази категория!</h3>
        </div>
    )
}