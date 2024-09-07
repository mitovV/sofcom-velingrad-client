import './ProductCategoryTitle.css'

export default function ProductCategoryTitle({categories, message}) {
    return (
        <div className="product-category-wrapper">
            <h2>{categories.map(n => n.name + ' ')}</h2>
            <h3>{message}</h3>
        </div>
    )
}