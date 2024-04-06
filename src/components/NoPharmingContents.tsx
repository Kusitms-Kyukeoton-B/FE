import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoPharmingContents = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>디지털 세상에 중독된 당신을 위해</Title>
      <SubTitle>잠시 눈을 쉬어줘요!</SubTitle>
      <ScrollContents>
        <Card onClick={() => navigate("/mypage/nopharming/meditation")}>
          <CardTitle>5분 명상</CardTitle>
          <CardDescription>도파민 중독자 10명이 했어요 !</CardDescription>
        </Card>
        <Card>
          <CardTitle>하루 일기 쓰기</CardTitle>
          <CardDescription>도파민 중독자 27명이 했어요 !</CardDescription>
        </Card>
        <Card>
          <CardTitle>하늘 보기</CardTitle>
          <CardDescription>도파민 중독자 35명이 했어요 !</CardDescription>
        </Card>
      </ScrollContents>
    </Container>
  );
};

export default NoPharmingContents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px;
  align-items: flex-start;
  margin-top: 20px;
`;
const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
const SubTitle = styled.div`
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 12px;
`;
const ScrollContents = styled.div`
  display: flex;
  gap: 10px;
  width: 370px;
  flex-direction: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 139px;
  height: 120px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #dbdbe4;
  cursor: pointer;
`;
const CardTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
const CardDescription = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  color: #636363;
`;
