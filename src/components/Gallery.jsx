import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { PROJECTS } from '../ProjectsData';
import { connect } from "react-redux";
import { setProject } from "../actions/setProjectAction";

const Gallery = ({ dispatch }) => {
    const handleClick = (project) => {
        dispatch(setProject(project));
    }

    return (
        <Carousel className="projects__carousel" >
            {
                PROJECTS.map((project, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={project.imageURL}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <Link className="projects__link" to={`/projects/${project.urlName}`} onClick={() => handleClick(project)}>View More</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default connect()(Gallery);
