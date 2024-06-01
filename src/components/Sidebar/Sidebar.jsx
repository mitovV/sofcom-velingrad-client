
import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import * as categoriesService from '../../services/categoriesService'

export default function Sidebar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        categoriesService.getAll()
            .then(setCategories)
    }, [])

    const renderCategory = (category, parentId) => {
        const uniqueId = parentId ? `${parentId}-${category._id}` : `${category._id}`
        console.log(uniqueId);
        if (category.subCategories && category.subCategories.length > 0) {
            return (
                <NavDropdown key={uniqueId} title={category.name} id={`nav-dropdown-${uniqueId}`}>
                    {category.subCategories.map(subcategory => renderCategory(subcategory, category._id))}
                </NavDropdown>
            )
        }
        else {
            return (<Nav.Link as={Link} key={uniqueId} to={`/category/${category._id}`}>
                {category.name}
            </Nav.Link>)
        }
    }

    const renderCategories = (categories) => {
        return categories.map(category => renderCategory(category))
    }

    return (
        <Navbar expand="lg" className="flex-column">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                    {renderCategories(categories)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}