import { Link } from "react-router-dom";
import imageURL from "../assets/images/lost-zoro-1.jpeg";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__header">Zoro is lost again</h1>
            <img className="not-found__image" src={imageURL} alt="Project Image" />
            <Link className="not-found__link" to="/">Go to Homepage</Link>
        </div>
    )
}

export default NotFoundPage;
