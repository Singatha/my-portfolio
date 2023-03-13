import { connect } from "react-redux";
import { ToolsIcon } from "./ToolsIcon";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    // have a go back lin
    return (
        <div className="project">
            <h1 className="project__header">{project.projectName}</h1>
            {/* image slideshow */}
            <img src={project.imageURL} alt="Project Image" />
            <p className="project__text">{project.projectDescription}</p>
            <h4 className="project__header-secondary">Tools</h4>
            {project.projectTools.map((tool, index) => {
                return <ToolsIcon key={index} tool={tool} width="100" height="100"/>
            })}
            <h4 className="project__header-secondary">Links</h4>
            {/* link icon */}
            <a href={project.websiteLink} target="_blank">website</a>
            <button className="project__button">webite</button>
            {/* github icon */}
            <a href={project.codeLink} target="_blank">code</a>
            <button className="project__button">code</button>
            <Link to="/">go back</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Project);
