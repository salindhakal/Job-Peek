import Hero from "../Components/Hero";
import Homecards from "../Components/Homecards";
import Joblistings from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Homecards />
      <Joblistings />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
