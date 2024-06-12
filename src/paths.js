const AdministrationHome = '/administration/'

const Path = {
    Home: '/',
    CategoriesProducts: 'categories/:id/products',
    AdministrationHome: AdministrationHome,
    AdministrationRingSizes:  AdministrationHome + 'ring-sizes',
    AdministrationCategoriesMain: AdministrationHome +'categories/main',
    AdministrationCategoriesSub: AdministrationHome + 'categories/sub',
    AdministrationCategoriesRing: AdministrationHome + 'categories/ring',
    AdministrationCategoriesEdit: AdministrationHome + 'categories/edit/:id',
    AdministrationRingSizesCreate: AdministrationHome + 'ring-sizes/create',
    AdministrationRingSizesEdit: AdministrationHome + 'ring-sizes/edit/:id',
    AdministrationEditSubCategory: AdministrationHome + 'categories/sub/edit/:id'
}

export default Path