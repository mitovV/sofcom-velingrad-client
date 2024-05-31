import Sidebar from './components/Sidebar/Sidebar'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <h1>Съдържание</h1>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default App
