import { connect } from "react-redux";

const Project = ({ project }) => {
    // have a go back link
    return (
        <div className="project">
            {console.log(project)}
            <h1 className="project__header">{project.projectName}</h1>
            {/* image slideshow */}
            <p className="project__text">{project.projectDescription}</p>
            <h4 className="project__header-secondary">Tools</h4>
            {/* tools icons */}
            <h4 className="project__header-secondary">Links</h4>
            {/* link icon */}
            <button className="project__button">webite</button>
            {/* github icon */}
            <button className="project__button">code</button>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Project);
