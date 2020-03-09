import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context/Context';

class Header extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { attributs,list } = value;
                    return (
                        <div>
                            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                                <Link className="navbar-brand" to="/">Kasaar</Link>
                                <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/defineAttributes">add attributs </Link>
                                        </li>
                                        {
                                            attributs.length > 0 &&
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/addElements">add elements </Link>
                                            </li>
                                        }

                                        {
                                            list.length > 0 &&
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/list">list </Link>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    )
                }
                }
            </Consumer>
        )
    }
}
export default Header;