import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <Nav.Link as={Link} to='/'>
            <h1>Софком Велинград</h1>
            </Nav.Link>
            </header>
    )
}