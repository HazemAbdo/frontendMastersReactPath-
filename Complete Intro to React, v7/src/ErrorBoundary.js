import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
//Error boundaries are React components that catch JavaScript errors anywhere in their //* child component
//tree, log those errors, and display a fallbackUI //! instead of the component tree that crashed.
//* Error boundaries catch errors during rendering
export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  //*------------------------- from React Docs---------------------------------
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  //   componentDidCatch(error, errorInfo) {
  //     console.error("ErrorBoundary caught an error", error, errorInfo);
  //     // You can also log the error to an error reporting service
  //     // logErrorToMyService(error, errorInfo);
  //   }
  //   componentDidUpdate() {
  //     if (this.state.hasError) {
  //       setTimeout(() => this.setState({ redirect: true }), 5000);
  //     }
  //   }
  //*------------------------- from React Docs---------------------------------

  render() {
    // if (redirect) {
    //   return <Navigate to="/" />;
    // }
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }
    //no error just render the children
    return this.props.children;
  }
}
