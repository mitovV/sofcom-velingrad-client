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
import CreateMainCategory from './components/Administration/CreateMainCategory/CreateMainCategory'
import MainCategoriesList from './components/Administration/MainCategoriesList/MainCategoriesList'
import EditMainCategory from './components/Administration/EditMainCategory/EditMainCategory'
import RingSizeList from './components/Administration/RingSizeList/RingSizeList'
import EditRingSize from './components/Administration/EditRingSize/EditRingSize'
import CreateRingSize from './components/Administration/CreateRingSize/CreateRingSize'
import RingCategoriesList from './components/Administration/RingCategoriesList/RingCategoriesList'
import EditRingCategory from './components/Administration/EditRingCategory/EditRingCategory'
import SubCategoriesList from './components/Administration/SubCategoriesList/SubCategoriesList'
import EditSubCategory from './components/Administration/EditSubCategory/EditSubCategory'
import CreateSubCategory from './components/Administration/CreateSubCategory/CreateSubCategory'
import GoldPricesList from './components/Administration/GoldPricesList/GoldPricesList'
import CreateGoldPrice from './components/Administration/CreateGoldPrice/CreateGoldPrice'

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
                <Route path={Path.AdministrationCategoriesMain} element={<MainCategoriesList />} />
                <Route path={Path.AdministrationCategoriesMainEdit} element={<EditMainCategory />} />
                <Route path={Path.AdministrationCategoriesMainCreate} element={<CreateMainCategory />} />
                <Route path={Path.AdministrationCategoriesSub} element={<SubCategoriesList />} />
                <Route path={Path.AdministrationCategoriesSubEdit} element={<EditSubCategory />} />
                <Route path={Path.AdministrationCategoriesSubCreate} element={<CreateSubCategory />} />
                <Route path={Path.AdministrationCategoriesRing} element={<RingCategoriesList />} />
                <Route path={Path.AdministrationCategoriesRingEdit} element={<EditRingCategory />} />
                <Route path={Path.AdministrationRingSizes} element={<RingSizeList />} />
                <Route path={Path.AdministrationRingSizesCreate} element={<CreateRingSize />} />
                <Route path={Path.AdministrationRingSizesEdit} element={<EditRingSize />} />
                <Route path={Path.AdministrationGoldPrices} element={<GoldPricesList />} />
                <Route path={Path.AdministrationGoldPricesCreate} element={<CreateGoldPrice />} />
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
