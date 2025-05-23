const AdministrationHome = '/administration/'

const Path = {
    Home: '/',
    CategoriesProducts: 'categories/products/*',
    ProductsDetails: '/products/details/:id',
    AdministrationHome: AdministrationHome,
    AdministrationCategoriesAll: AdministrationHome +'categories/all',
    AdministrationCategoriesCreate: AdministrationHome + 'categories/create',
    AdministrationCategoriesEdit: AdministrationHome + 'categories/edit/:id',
    AdministrationRingSizes:  AdministrationHome + 'ring-sizes',
    AdministrationRingSizesCreate: AdministrationHome + 'ring-sizes/create',
    AdministrationRingSizesEdit: AdministrationHome + 'ring-sizes/edit/:id',
    AdministrationGoldPrices: AdministrationHome + 'gold-prices',
    AdministrationGoldPricesCreate: AdministrationHome + 'gold-prices/create',
    AdministrationGoldPricesEdit: AdministrationHome + 'gold-prices/edit/:id',
    AdministrationProducts: AdministrationHome + 'products',
    AdministrationProductsCreate: AdministrationHome + 'products/create',
    AdministrationGoldConditions: AdministrationHome + 'gold-conditions',
    AdministrationGoldConditionsCreate: AdministrationHome + 'gold-conditions/create'
}

export default Path