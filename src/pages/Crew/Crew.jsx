import NavBar from "../../components/NavBar/NavBar"
import { crew } from "../../db/data"
import { useState } from "react"
import "./Crew.css"

const Crew = () => {

    const [crewMemberState, setCrewMemberState] = useState(crew[0])

    const { image, name, rol, description } = crewMemberState

    return (
        <main className="crew-container">
            <NavBar />
            <p className="destination-p">02 <span>meet your crew</span></p>
            <div className="crew-desktop-flex">
                <img className="crew-image" src={image} alt="" />

                <div className="crew-desktop-container">
                    <div className="circle-member-container">
                        {crew.map(crewMember => (
                            <button
                                key={crewMember.id}
                                onClick={() => setCrewMemberState(crewMember)}
                                className={`circle-member ${crewMember.id === crewMemberState.id ? "active-circle" : ""}`}>

                            </button>
                        ))}
                    </div>
                    <p className="crew-rol">{rol}</p>
                    <h2 className="crew-name">{name}</h2>
                    <p className="crew-description">{description}</p>
                </div>
            </div>
        </main >
    )
}

export default Crew