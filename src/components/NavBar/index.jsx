import React from "react";
import CardWidget from "../CardWidget";
import Title from "../Title";
import ItemListContainer from "../ItemListContainer";
export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav" class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="nav_brand">
                    <a className="nav_link" href="#"> </a>
                </div>
                <ul className="nav_list" class="navbar-nav">
                    <li class="nav-item">
                        
                        <a className="nav_link"  class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav_link" class="nav-link" href="#">Categoria 2</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav_link"  class="nav-link" href="#">Categoria 3</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav_link" class="nav-link" href="#">Categoria </a>
                    </li>
                    <li className="nav_link" class="nav-item" href="#">
                        
                         <CardWidget></CardWidget> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;