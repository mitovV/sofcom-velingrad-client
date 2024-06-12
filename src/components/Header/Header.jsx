import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Path from '../../paths'

import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <Nav.Link as={Link} to={Path.Home}>
            <h1>Софком Велинград</h1>
            </Nav.Link>
            </header>
    )
}