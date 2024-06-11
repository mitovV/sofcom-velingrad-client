import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'

import './Dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <h2 className="dashboard-header">Dashboard</h2>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <div sm={4}>
                    <ListGroup>
                        <ListGroup.Item as={Link} to="/administration/categories/main">
                            Главни категории
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to="/administration/categories/sub">
                            Под категории
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to="/administration/categories/ring">
                            Категории пръстени
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to="/administration/ring-sizes">
                            Списък с размери на пръстени
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to="/administration/products">
                            Списък с продукти
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab.Container>
        </>
    )
}