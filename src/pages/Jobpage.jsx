import { useParams, useLoaderData } from "react-router-dom";

const Jobpage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return <div>{job.title}</div>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { Jobpage as default, jobLoader };

// import { useParams, useLoaderData } from "react-router-dom";

// const Jobpage = () => {
//   const job = useLoaderData();
//   const { id } = useParams();
//   return <h1>{job.title}</h1>;
// };

// const jobLoader = async (params) => {
//   const res = await fetch(`/api/jobs/${params.id}`);
//   const data = await res.json();
//   return data;
// };

// export { Jobpage as default, jobLoader };

//   ! yo chai useEffect use garera fetch garya, yo chai component bhitra basthyo
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (error) {
//         console.error("Error fetching", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);
