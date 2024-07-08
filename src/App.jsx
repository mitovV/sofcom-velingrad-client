import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import Path from './paths'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Dashboard from './components/Administration/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ProductList from './components/ProductList/ProductList'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import CreateCategory from './components/Administration/CreateCategory/CreateCategory'
import CategoriesList from './components/Administration/CategoriesList/CategoriesList'
import EditCategory from './components/Administration/EditCategory/EditCategory'
import RingSizeList from './components/Administration/RingSizeList/RingSizeList'
import EditRingSize from './components/Administration/EditRingSize/EditRingSize'
import CreateRingSize from './components/Administration/CreateRingSize/CreateRingSize'
import GoldPricesList from './components/Administration/GoldPricesList/GoldPricesList'
import CreateGoldPrice from './components/Administration/CreateGoldPrice/CreateGoldPrice'
import AdminProductList from './components/Administration/AdminProductList/AdminProductList'
import CreateProduct from './components/Administration/CreateProduct/CreateProduct'
import GoldConditionsList from './components/Administration/GoldConditionsList/GoldConditionsList'
import CreateGoldCondition from './components/Administration/CreateGoldCondition/CreateGoldCondition'
import EditGoldPrice from './components/Administration/EditGoldPrice/EditGoldPrice'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <ErrorBoundary>
              <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.CategoriesProducts} element={<ProductList />} />
                <Route path={Path.AdministrationHome} element={<Dashboard />} />
                <Route path={Path.AdministrationCategoriesAll} element={<CategoriesList />} />
                <Route path={Path.AdministrationCategoriesEdit} element={<EditCategory />} />
                <Route path={Path.AdministrationCategoriesCreate} element={<CreateCategory />} />
                <Route path={Path.AdministrationRingSizes} element={<RingSizeList />} />
                <Route path={Path.AdministrationRingSizesCreate} element={<CreateRingSize />} />
                <Route path={Path.AdministrationRingSizesEdit} element={<EditRingSize />} />
                <Route path={Path.AdministrationGoldPrices} element={<GoldPricesList />} />
                <Route path={Path.AdministrationGoldPricesCreate} element={<CreateGoldPrice />} />
                <Route path={Path.AdministrationGoldPricesEdit} element={<EditGoldPrice />} />
                <Route path={Path.AdministrationProducts} element={<AdminProductList />} />
                <Route path={Path.AdministrationProductsCreate} element={<CreateProduct />} />
                <Route path={Path.AdministrationGoldConditions} element={<GoldConditionsList />} />
                <Route path={Path.AdministrationGoldConditionsCreate} element={<CreateGoldCondition />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
