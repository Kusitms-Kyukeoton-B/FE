import Lottie from "lottie-react";
import dophami from "../../assets/lottie/dophami.json";
import { Layout } from "../../styles/styles";
import Navigation from "../../components/Navigation";

const MainCharacterPage = () => {
  return (
    <Layout>
      <Lottie animationData={dophami} />
      <Navigation />
    </Layout>
  );
};

export default MainCharacterPage;
