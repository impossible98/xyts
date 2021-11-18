import { Router } from "@/routers/index";
import * as React from "react";

import ErrorBoundary from "@/components/Shared/ErrorBoundary";
import Loading from "@/components/Shared/Loading";

function App() {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<Loading />}>
                <Router />
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default App;
