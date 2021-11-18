import { Link } from "react-router-dom";

import NotFoundCard from "@/components/NotFound/Card";

function NotFound() {
    return (
        <Link to="/">
            <NotFoundCard />
        </Link>
    );
}

export default NotFound;
