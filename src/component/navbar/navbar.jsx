import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

   

const Navbar = () => {
    const selector = useSelector(state => state.Fav);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/details">Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/favourite">favourite</Link>
                            </li>
                        </ul>
                        <ul ul className="navbar-nav ms-4 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;