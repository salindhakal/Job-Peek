import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinners from "../Components/Spinners";

const Jobpage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return loading ? <Spinners /> : <h1>{job.title}</h1>;
};

export default Jobpage;
