import { Link } from "react-router-dom";

const NotFoundPage = () => {
    // have a go back link
    return (
        <div>
            <h1>Zoro is lost again</h1>
            <Link to="/">go back</Link>
        </div>
        
    )
}

export default NotFoundPage;
