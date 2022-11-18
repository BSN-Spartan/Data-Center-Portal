import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: unknown) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log({ error, errorInfo });
  }
  render() {
    if ((this.state as { hasError: boolean }).hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error
    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
