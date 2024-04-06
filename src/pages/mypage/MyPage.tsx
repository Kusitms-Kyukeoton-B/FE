import styled from "styled-components";
import { Layout } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import blankicon from "../../assets/blank_icon.png";

const MyPage = () => {
  const username = "도파밍B";
  const nav = useNavigate();

  const goToProfileEdit = () => {
    nav(`/profile/edit`);
  };

  return (
    <Layout>
      <PageContainer>
        <ProfileArea onClick={goToProfileEdit}>
          <Avatar>
            <img src={blankicon} />
          </Avatar>
          <UserName>{username}</UserName>
        </ProfileArea>
        <StatusList>
          <ListItem>노파밍 챌린지</ListItem>
          <ListItem2>나의 기록</ListItem2>
          <ListItem>나의 친구</ListItem>
          <ListItem2>포인트샵</ListItem2>
        </StatusList>
      </PageContainer>
      <Navigation />
    </Layout>
  );
};

export default MyPage;

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const Avatar = styled.div`
  background-color: #d9d9d9;
  border-radius: 50%;
  width: 66px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
  }
`;

const UserName = styled.div`
  color: var(--black, #1f1e1e);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin-left: 24px;
  line-height: 16px; /* 88.889% */
  letter-spacing: -0.18px;
`;

const StatusList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  justify-content: center;
`;

const ListItem = styled.div`
  width: 354px;
  height: 70px;

  border-radius: 10px;
  border: 2px solid var(--main, #836fff);
  color: var(--main, #836fff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 88.889% */

  display: flex;
  text-align: left;
`;

const ListItem2 = styled.div`
  width: 354px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--main, #836fff);
  color: white;
  margin: 10px 0px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  display: flex;
  text-align: left;
`;
