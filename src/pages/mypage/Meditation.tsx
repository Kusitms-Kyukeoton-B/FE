import styled from "styled-components";
import { Layout } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import Backarrow from "../../assets/back_arrow.svg";
import Navigation from "../../components/Navigation";
import line from "../../assets/templine.png";

const MeditationPage = () => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Header>
        <BackIcon src={Backarrow} onClick={goToBack} />
        5분 명상
      </Header>
      <Container>
        <img src={line} />
      </Container>
      <Navigation />
    </Layout>
  );
};

export default MeditationPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.div`
  position: absolute;
  display: flex;
  padding-left: 58px;
  align-items: center;
  width: 390px;
  height: 70px;
  color: var(--black, #1f1e1e);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
const BackIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
`;
