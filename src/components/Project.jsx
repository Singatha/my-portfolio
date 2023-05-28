import { useSelector } from "react-redux";
import { ToolsIcon } from "./ToolsIcon";
import { Link } from "react-router-dom";

const Project = () => {
    const project = useSelector((state) => state.project.project)

    return (
        <div className="project">
            <h1 className="project__header">{project.projectName}</h1>
            <img className="project__image" src={project.imageURL} alt="Project Image" />
            <p className="project__text">{project.projectDescription}</p>
            <div className="project__grid">
                <div className="project__grid-item">
                    <h4 className="project__header-secondary">Tools</h4>
                    {project.projectTools.map((tool, index) => {
                        return <ToolsIcon key={index} tool={tool}/>
                    })}
                </div>
                <div className="project__grid-item">
                    <h4 className="project__header-secondary">Links</h4>
                    <div className="project__buttons">
                        <a className="project__button" href={project.websiteLink} target="_blank">website</a>
                        <a className="project__button" href={project.codeLink} target="_blank">code</a>
                    </div>
                </div>
            </div>
            <Link className="project__link" to="/">Go to Homepage</Link>
        </div>
    )
}

export default Project;
