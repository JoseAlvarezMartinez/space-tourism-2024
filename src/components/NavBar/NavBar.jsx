import LogoIcon from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react"
import "./NavBar.css"
const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="nav-container">
                <img className="logo" src={LogoIcon} alt="Logo" />

                <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen &&
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li className="navbar-li"><Link className="navbar-a">Home</Link></li>
                        <li className="navbar-li"><Link className="navbar-a">Destination</Link></li>
                        <li className="navbar-li"><Link className="navbar-a">Crew</Link></li>
                        <li className="navbar-li"><Link className="navbar-a">Technology</Link></li>
                    </ul>
                </nav>
            }


        </>
    )
}

export default NavBar