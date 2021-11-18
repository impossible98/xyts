import * as React from "react";

import { deriveMessageFromError } from "@/utils/errors";
import ErrorCard from "@/components/Shared/ErrorCard";

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
