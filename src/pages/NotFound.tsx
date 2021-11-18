import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <main>
                <h2>404 NotFound</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default NotFound;
