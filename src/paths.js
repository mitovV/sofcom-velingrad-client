const AdministrationHome = '/administration/'

const Path = {
    Home: '/',
    CategoriesProducts: 'categories/:id/products',
    AdministrationHome: AdministrationHome,
    AdministrationCategoriesMain: AdministrationHome +'categories/main',
    AdministrationCategoriesMainCreate: AdministrationHome + 'categories/main/create',
    AdministrationCategoriesMainEdit: AdministrationHome + 'categories/main/edit/:id',
    AdministrationCategoriesSub: AdministrationHome + 'categories/sub',
    AdministrationCategoriesSubCreate: AdministrationHome + 'categories/sub/create',
    AdministrationCategoriesSubEdit: AdministrationHome + 'categories/sub/edit/:id',
    AdministrationCategoriesRing: AdministrationHome + 'categories/ring',
    AdministrationCategoriesRingCreate: AdministrationHome + 'categories/ring/create',
    AdministrationCategoriesRingEdit: AdministrationHome + 'categories/ring/edit/:id',
    AdministrationRingSizes:  AdministrationHome + 'ring-sizes',
    AdministrationRingSizesCreate: AdministrationHome + 'ring-sizes/create',
    AdministrationRingSizesEdit: AdministrationHome + 'ring-sizes/edit/:id',
}

export default Path