import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <Container className='container'>
                <Row>
                    <Col className='contacts'>
                        <div>Контакти</div>
                        <div><i className="bi bi-envelope"> sofcomvelingrad@gmail.com</i></div>
                        <div><i className='bi bi-phone'>0897099098</i></div>
                    </Col>
                    <Col className="date-wrapper">
                        &copy; {new Date().getFullYear()} - Софком Велинград
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}