import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Log error for debugging

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>
          {error?.statusText || error?.message || "An unknown error occurred."}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
