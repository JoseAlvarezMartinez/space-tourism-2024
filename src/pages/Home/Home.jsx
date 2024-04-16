import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
    return (
        <header className="header-home">
            <NavBar />
            <div className="desktop-responsive-container">
                <section className="header-home-container">
                    <h2 className="header-h2">So, you want to travel to <span>space</span></h2>
                    <p className="header-p">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </section>

                <div className="explore-circle">
                    <Link className="explore-circle-a">Explore</Link>
                </div>
            </div>
        </header>
    )
}

export default Home