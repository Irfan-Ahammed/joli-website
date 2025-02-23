import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/job/Jobs";
import ErrorPage from "./components/ErrorPage";
import Profile from "./pages/Profile";
import JobsDescription from "./components/JobsDescription";
import Search from "./pages/Search";
import Applicants from "./components/applicants/Applicants";
import UpdateJob from "./components/jobs/UpdateJob";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/jobs",
      element: <Jobs />
    },
    {
      path: "/discription/:id",
      element: <JobsDescription />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/profile/:id/applicants",
      element: <Applicants /> 
    },
    {
      path: "/profile/update/:id",
      element: <UpdateJob />
    },
    {
      path: "/search",
      element: <Search />
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ],
  { basename: "/joli-website" }
);


function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
