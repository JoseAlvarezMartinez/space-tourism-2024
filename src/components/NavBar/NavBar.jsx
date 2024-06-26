import LogoIcon from "../../assets/logo.svg"
import { Link, useLocation } from "react-router-dom"
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect } from "react"
import useBodyFlow from "../../hooks/useBodyFlow"
import "./NavBar.css"

const NavBar = () => {

    const { isOpen, handleBodyFlow, setOpen } = useBodyFlow()
    const { pathname } = useLocation()
    
    useEffect(() => {
        handleBodyFlow()
    }, [isOpen])

    return (
        <>
            <div className="navbar-responsive">
                <div className={`nav-container ${isOpen && "background-navbar-active"}`}>
                    <Link to="/">
                        <img className="logo" src={LogoIcon} alt="Logo" />
                    </Link>
                    <div className="hamburguer-tablet">
                        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>



                <nav className={`navbar ${isOpen ? "navbar-active" : "navbar-inactive"}`}>
                    <ul className="navbar-ul">
                        <li className="navbar-li"><Link to={"/"} className={`navbar-a ${pathname === "/" && "active-navbar-link"}`}> <span>00.</span>Home</Link></li>
                        <li className="navbar-li"><Link to={"/destination"} className={`navbar-a ${pathname.includes("/destination") && "active-navbar-link"}`}><span>01.</span>Destination</Link></li>
                        <li className="navbar-li"><Link to={"/crew"}  className={`navbar-a ${pathname.includes("/crew") && "active-navbar-link"}`}><span>02.</span>Crew</Link></li>
                        <li className="navbar-li"><Link to={"/technology"} className={`navbar-a ${pathname.includes("/technology") && "active-navbar-link"}`}> <span>03</span>Technology</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar