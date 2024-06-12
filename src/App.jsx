import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import Path from './paths'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import RingSizeList from './components/Administration/RingSizeList/RingSizeList'
import CreateRingSize from './components/Administration/CreateRingSize/CreateRingSize'
import Dashboard from './components/Administration/Dashboard/Dashboard'
import EditRingSize from './components/Administration/EditRingSize/EditRingSize'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import MainCategoriesList from './components/Administration/MainCategoriesList/MainCategoriesList'
import SubCategoriesList from './components/Administration/SubCategoriesList/SubCategoriesList'
import RingCategoriesList from './components/Administration/RingCategoriesList/RingCategoriesList'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import EditMainCategory from './components/Administration/EditMainCategory/EditMainCategory'
import EditSubCategory from './components/Administration/EditSubCategory/EditSubCategory'

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
                <Route path={Path.AdministrationRingSizes} element={<RingSizeList />} />
                <Route path={Path.AdministrationCategoriesMain} element={<MainCategoriesList />} />
                <Route path={Path.AdministrationCategoriesSub} element={<SubCategoriesList />} />
                <Route path={Path.AdministrationCategoriesRing} element={<RingCategoriesList />} />
                <Route path={Path.AdministrationCategoriesEdit} element={<EditMainCategory />} />
                <Route path={Path.AdministrationRingSizesCreate} element={<CreateRingSize />} />
                <Route path={Path.AdministrationRingSizesEdit} element={<EditRingSize />} />
                <Route path={Path.AdministrationEditSubCategory} element={<EditSubCategory />} />
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
