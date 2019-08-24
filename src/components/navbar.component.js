import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { UsernameConsumer, UsernameContext } from '../context';

export default class Navbar extends Component {

    handleLogoutAccount = _ => {
        this.context.handleChangeUsername('')
        window.location = '/';
    }

    render() {
        return (
            <UsernameConsumer>
                {({ username }) => {
                    {
                        return (
                            <NavbarWrapper>
                                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                                    <Link to="/" className="navbar-brand">ExcerTracker</Link>
                                    <div className="collpase navbar-collapse">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="navbar-item">
                                                <Link to="/" className="nav-link">Exercises</Link>
                                            </li>
                                            <li className="navbar-item">
                                                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                                            </li>
                                            <li className="navbar-item">
                                                <Link to="/user" className="nav-link">Create User</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        username
                                            ? <div className="text-info username">
                                                {username},
                                            <div className="text-warning font-italic logout" onClick={this.handleLogoutAccount}>Logout</div>
                                            </div>
                                            : <div>
                                                <Link to="/login">
                                                    <button type="button" className="btn btn-success">Login</button>
                                                </Link>
                                                <Link to="/register" >
                                                    <button type="button" className="btn btn-warning">Register</button>
                                                </Link>
                                            </div>
                                    }
                                </nav >
                            </NavbarWrapper>
                        )
                    }
                }}

            </UsernameConsumer>
        );
    }
}
Navbar.contextType = UsernameContext

const NavbarWrapper = styled.div`
.btn {
    margin-left: 3px;
}

.logout {
    padding: 0 0 0 3px;
    cursor: pointer;

}
.logout:hover {
    color: #ff0000 !important;
}

.username {
    display: flex;
    align-items: center;
}
`