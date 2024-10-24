import { ClipLoader } from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const dd = (loading) => {
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default dd;
