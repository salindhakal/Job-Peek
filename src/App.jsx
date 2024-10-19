import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Homecards from "./Components/Homecards";
import JobListings from "./Components/JobListings";
import ViewAllJobs from "./Components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Homecards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
