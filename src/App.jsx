import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route, matchPath } from 'react-router-dom'
import { Suspense } from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
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
              <Suspense fallback={ <h1>Loading...</h1>}>
              <Sidebar />
              </Suspense>
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Routes>
                <Route path='categories/:id' element={<h1>Main category</h1>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      <Footer />
    </>
  )
}

export default App
