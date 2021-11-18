import * as React from "react";

import ErrorCard from "@/components/Shared/ErrorCard";
import { deriveMessageFromError } from "@/utils/errors";

interface Props {
    children: React.ReactNode;
}

interface State {
    error?: number | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    state = { error: null };

    static getDerivedStateFromError(error: number) {
        return { error };
    }

    render() {
        if (this.state.error) {
            const { message, detail } = deriveMessageFromError(this.state.error);
            return (
                <ErrorCard
                    message={message}
                    detail={detail}
                />
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
