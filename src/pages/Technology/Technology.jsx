import "./Technology.css"
import NavBar from "../../components/NavBar/NavBar"
import { projects } from "../../db/data"
import { useState } from "react"
const Technology = () => {

    const [projectState, setProjectState] = useState(projects[0])

    const { image, name, description } = projectState
    return (
        <main className="technology-container">
            <NavBar />
            <p className="destination-p">03. <span>space launch 101</span></p>

            <div className="technology-desktop-flex">
                <img className="project-image" src={image} alt="" />

                <div className="technology-desktop-container">
                    <div className="project-buttons-container">
                        {
                            projects.map((project, i) => (
                                <div
                                    onClick={() => setProjectState(project)}
                                    key={project.id}
                                    className={`project-button ${project.id === projectState.id && "active-button"}`}>
                                    <button
                                        className={`project-button-i ${project.id === projectState.id && "project-active-link"}`}>{++i}</button>
                                </div>
                            ))
                        }
                    </div>

                    <section>
                        <h2 className="technology-terminology">The terminology...</h2>
                        <h3 className="technology-name">{name}</h3>
                        <p className="technology-description">{description}</p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Technology