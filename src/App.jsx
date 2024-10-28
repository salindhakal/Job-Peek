import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayouts from "./layouts/MainLayouts";
import Jobspage from "./pages/Jobspage";
import AddJobs from "./pages/AddJobs";
import NotFoundPage from "./pages/NotFoundPage";
import Jobpage, { jobLoader } from "./pages/Jobpage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete new job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

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
          element: <AddJobs addJobSubmit={addJob} />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "jobs/:id",
          element: <Jobpage deleteJob={deleteJob} />,
          loader: jobLoader,
        },
        {
          path: "edit-jobs/:id",
          element: <EditJobPage updateJobSubmit={updateJob} />,
          loader: jobLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
