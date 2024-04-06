import styled from "styled-components";
import { Layout } from "../../styles/styles";
import Navigation from "../../components/Navigation";
import Backarrow from "../../assets/back_arrow.svg";
import { useNavigate } from "react-router-dom";
import NoPharmingBanner from "../../components/NoPharmingBanner";
import NoPharmingContents from "../../components/NoPharmingContents";
import NoPharmingContents2 from "../../components/NoPharmingContents2";

const NoPharmingPage = () => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Header>
        <BackIcon src={Backarrow} onClick={goToBack} />
        잠시 노파밍
      </Header>
      <Container>
        <NoPharmingBanner />
        <NoPharmingContents />
        <NoPharmingContents2 />
        <Navigation />
      </Container>
    </Layout>
  );
};

export default NoPharmingPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 70px;
  background-color: aliceblue;
`;

const BackIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
`;
