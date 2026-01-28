import { Component, type ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Unhandled error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-gray-600">An unexpected error occurred.</p>
            <Link to="/products" className="text-blue-600 hover:underline">
              Go back to products
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
