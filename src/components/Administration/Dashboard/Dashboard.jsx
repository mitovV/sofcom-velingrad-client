import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import { Link } from 'react-router-dom'

import Path from '../../../paths'

import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <h2 className="dashboard-header">Dashboard</h2>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <div sm={4}>
                    <ListGroup>
                        <ListGroup.Item as={Link} to={Path.AdministrationCategoriesAll}>
                            Категории
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to={Path.AdministrationRingSizes}>
                            Списък с размери на пръстени
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to={Path.AdministrationProducts}>
                            Списък с продукти
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                        <ListGroup.Item as={Link} to={Path.AdministrationGoldPrices}>
                            Цени на златото
                            <i className="bi bi-arrow-up-circle"></i>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Tab.Container>
        </>
    )
}