
import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import * as mainCategoriesService from '../../services/mainCategoriesService'

export default function Sidebar() {
    const [mainCategories, setMainCategories] = useState([])

    useEffect(() => {
        mainCategoriesService.getAll()
            .then(setMainCategories)
    }, [])

    return (
        <Navbar expand="lg" className="flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                    {/* <Nav.Link href="#category1">Категория 1</Nav.Link>
                    <NavDropdown title="Категория 2" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#subcategory1">Подкатегория 1</NavDropdown.Item>
                        <NavDropdown.Item href="#subcategory2">Подкатегория 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#subcategory3">Подкатегория 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#category3">Категория 3</Nav.Link> */}
                    {mainCategories.map(x => <Nav.Link key={x._id} to={x._id}>{x.name}</Nav.Link> )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}