import React from 'react'
// import '../styles/bootstrap-reboot.min.css';
// import "../styles/bootstrap-grid.min.css";
import "../sass/style.scss";
import logo from "../icons/Logo.svg";

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <img className="logo" src={logo} alt="logo"/>
                <ul className="menu">
                    <li className="menu_button"><a href="#" className="menu_link">Users</a></li>
                    <li className="menu_button"><a href="#" className="menu_link">Sign Up</a></li>
                </ul>
            </nav>
            <div className="subheader">
                <h1 className="subheader_description">Test assignment for front-end developer</h1>
                <div className="subheader_additional">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</div>
                <div className="subheader_button">Sign up</div>
            </div>
        </div>
    </header>

  )
}


export default Header