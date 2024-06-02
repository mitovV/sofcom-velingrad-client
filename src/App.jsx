import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import ProductList from './components/ProductList/ProductList'
import RingSizeList from './components/RingSizeList/RingSizeList'
import Footer from './components/Footer/Footer'

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
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='administration/ring-size' element= {<RingSizeList/>}/>
                <Route path='categories/:id/products' element={<ProductList/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      <Footer />
    </>
  )
}

export default App
