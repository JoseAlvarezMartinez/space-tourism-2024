import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import { useState } from "react"
import { planets } from "../../db/data"
import "./Destination.css"
const Destination = () => {

    const [actualPlanet, setActualPlanet] = useState(planets[0])

    const { name, image, description, distance, travelTime } = actualPlanet
    return (
        <main className="destination-container">
            <NavBar />

            <p className="destination-p">01. <span>pick your destination</span></p>
            <div className="destination-flex-desktop">
                <img className="destination-image" src={image} alt={`${name} Image`} />

                <div className="destination-desktop-container">
                    <div className="destination-planet-link">
                        {planets.map(planet =>
                            <Link
                                key={planet.id}
                                to={`/destination/${planet.id}`}
                                onClick={() => setActualPlanet(planet)}
                                className={`planet-link ${actualPlanet.id === planet.id && "active-link"} `}>{planet.name}</Link>
                        )}

                    </div>
                    <h2 className="destination-planet-name">{name}</h2>
                    <p className="destination-planet-description">{description}</p>

                    <div className="destination-planet-data">
                        <section>
                            <h3 className="destination-planet-distance-h3">avg. distance</h3>
                            <p className="destination-planet-distance-p">{distance}</p>
                        </section>
                        <section>
                            <h3 className="destination-planet-distance-h3">est. travel time</h3>
                            <p className="destination-planet-distance-p">{travelTime}</p>
                        </section>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Destination
