import * as React from "react";
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("@/pages/About"));
import Home from "@/pages/Home";
const NotFound = React.lazy(() => import("@/pages/NotFound"));

function Router() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export { Router };
