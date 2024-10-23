import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayouts from "./layouts/MainLayouts";
import Jobspage from "./pages/Jobspage";
import AddJobs from "./pages/AddJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "jobs",
        element: <Jobspage />,
      },
      {
        path: "add-jobs",
        element: <AddJobs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
