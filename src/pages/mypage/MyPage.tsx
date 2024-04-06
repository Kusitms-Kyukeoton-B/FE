import styled from "styled-components";
import { Layout } from "../../styles/styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";

const MyPage = () => {
  const [username, setusername] = useState<string>("username");
  const [timeDifference, setTimeDifference] = useState<number>(0);
  const targetTime = new Date("2024-04-06T20:00:00").getTime();
  const nav = useNavigate();

  const goToProfileEdit = () => {
    nav(`/profile/edit`);
  };

  useEffect(() => {
    const currentTime = new Date().getTime();

    const difference = targetTime - currentTime;
    setTimeDifference(difference);

    const timer = setInterval(() => {
      setTimeDifference((prevDifference) => prevDifference - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds) => {
    if (milliseconds < 0) {
      const elapsedMilliseconds = Math.abs(milliseconds); // 음수를 양수로 변환
      const elapsedSeconds = Math.floor((elapsedMilliseconds / 1000) % 60);
      const elapsedMinutes = Math.floor(
        (elapsedMilliseconds / (1000 * 60)) % 60
      );
      const elapsedHours = Math.floor(
        (elapsedMilliseconds / (1000 * 60 * 60)) % 24
      );

      return `${elapsedHours.toString().padStart(2, "0")}:${elapsedMinutes
        .toString()
        .padStart(2, "0")}:${elapsedSeconds.toString().padStart(2, "0")}`;
    }

    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <Layout>
      <PageContainer>
        <ProfileArea onClick={goToProfileEdit}>
          <Avatar />
          <UserName>{username}</UserName>
        </ProfileArea>
        <PointsTimeContainer>
          <Card>
            <div>10,000 P</div>
          </Card>
          <Card>
            <div>⏰</div>
            <div>{formatTime(timeDifference)}</div>
          </Card>
        </PointsTimeContainer>
        <StatusList>
          <ListItem>내가 올린 사진</ListItem>
          <ListItem>댓글단 사진</ListItem>
        </StatusList>
        <StatusList>
          <ListItem>내가 올린 글</ListItem>
          <ListItem>댓글단 글</ListItem>
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
  background-color: #fff;
`;

const ProfileArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const Avatar = styled.div`
  background-color: #ccc;
  border-radius: 50%;
  width: 77px;
  height: 77px;
`;

const UserName = styled.div`
  margin-top: 10px;
  margin-left: 17px;
`;

const PointsTimeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const Card = styled.div`
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StatusList = styled.div`
  margin: 20px 0;
  background-color: #f0f0f0;
`;

const ListItem = styled.div`
  padding: 10px;
  text-align: center;
`;
