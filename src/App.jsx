import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/job/Jobs";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  { basename: "/joli-website" }
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
