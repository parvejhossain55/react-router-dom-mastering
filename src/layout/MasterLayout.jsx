import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function MasterLayout() {
    return (
        <div>
            <div className="container bg-info">
                <div className="row">
                    <div className="col-4">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/home"></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout