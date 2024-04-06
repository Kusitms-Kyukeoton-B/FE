import styled from "styled-components";
import { Layout } from "../styles/styles";
import Navigation from "../components/Navigation";
import CameraIcon from "../assets/camera_icon.svg";

const MyPageEditPage = () => {
  return (
    <Layout>
      <Container>
        <PageName>마이페이지</PageName>
        <ProfileContainer>
          <ProfileImage>
            <img src={CameraIcon} />
          </ProfileImage>
          <Username>닉네임</Username>
          <Line />
          <Info>
            <InfoLabel>계정 정보</InfoLabel>
            <InfoContent>아이디 dophamineB</InfoContent>
            <InfoContent>비밀번호 변경</InfoContent>
          </Info>
        </ProfileContainer>
        <Navigation />
      </Container>
    </Layout>
  );
};

export default MyPageEditPage;

const PageName = styled.div`
  color: #464646;
  text-align: center;
  font-family: Inter;
  margin-top: 17px;
  margin-bottom: 23px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

// Styled components for the layout
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.div`
  width: 120px; // Adjust the size as necessary
  height: 120px;
  border-radius: 50%;
  background-color: #cccccc; // Placeholder color
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Username = styled.h1`
  font-size: 24px; // Adjust the size as necessary
  color: #333333; // Adjust the color as necessary
  margin-bottom: 10px;
`;

const Line = styled.hr`
  width: 100%;
  border: 0.5px solid #cccccc;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  font-size: 16px; // Adjust the size as necessary
  color: #777777; // Adjust the color as necessary
  margin-bottom: 5px;
`;

const InfoContent = styled.div`
  font-size: 18px; // Adjust the size as necessary
  color: #333333; // Adjust the color as necessary
  background-color: #f0f0f0; // Adjust the background color as necessary
  padding: 10px;
  border-radius: 8px;
`;
