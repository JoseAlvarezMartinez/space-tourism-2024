import NavBar from "../../components/NavBar/NavBar"
import { crew } from "../../db/data"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Crew.css"

const Crew = () => {

    const [crewMemberState, setCrewMemberState] = useState(crew[0])

    const { image, name, rol, description } = crewMemberState

    return (
        <main className="crew-container">
            <NavBar />
            <p className="destination-p">02 <span>meet your crew</span></p>

            <img className="crew-image" src={image} alt="" />
            <div className="circle-member-container">
                {crew.map(crewMember => (
                    <Link
                        onClick={() => setCrewMemberState(crewMember)}
                        to={`/crew/${crewMember.id}`}>
                        <div className={`circle-member ${crewMember.id === crewMemberState.id && "active-circle"}`}>
                        </div>
                    </Link>
                ))}
            </div>
            <p className="crew-rol">{rol}</p>
            <h2 className="crew-name">{name}</h2>
            <p className="crew-description">{description}</p>

        </main>
    )
}

export default Crew