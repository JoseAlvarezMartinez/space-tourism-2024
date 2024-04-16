import LogoIcon from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect } from "react"
import useBodyFlow from "../../hooks/useBodyFlow"
import "./NavBar.css"

const NavBar = () => {

    const { isOpen, handleBodyFlow, setOpen } = useBodyFlow()

    useEffect(() => {
        handleBodyFlow()
    }, [isOpen])

    return (
        <>
            <div className={`nav-container ${isOpen && "background-navbar-active"}`}>
                <Link to="/">
                    <img className="logo" src={LogoIcon} alt="Logo" />
                </Link>
                <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen &&
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li className="navbar-li"><Link to={"/"} className="navbar-a">00. <span>Home</span> </Link></li>
                        <li className="navbar-li"><Link to={"/destination"} className="navbar-a">01. <span>Destination</span></Link></li>
                        <li className="navbar-li"><Link to={"/crew"} className="navbar-a">02. <span>Crew</span></Link></li>
                        <li className="navbar-li"><Link to={"/technology"} className="navbar-a">03. <span>Technology</span></Link></li>
                    </ul>
                </nav>
            }
        </>
    )
}

export default NavBar