import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-secondary py-4 '>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-7 align-content-center'>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar