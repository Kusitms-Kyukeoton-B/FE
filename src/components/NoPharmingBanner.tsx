import styled from "styled-components";
import { colors } from "../styles/colors";

const NoPharmingBanner = () => {
  const score = 87;
  const averageScore = 60;

  const scoreGap = score - averageScore;
  const completeGap = 100 - score;

  return (
    <Container>
      {`00님의 도파민 점수는 ${score}점으로\n평균보다 ${scoreGap}점 높아요`}
      <ScoreContainer>
        <BarContainer>
          <Bar count={score} color={colors.main} />
          <Score color={colors.main}>{score}점</Score>
        </BarContainer>
        <WhoScore>나</WhoScore>
      </ScoreContainer>
      <ScoreContainer>
        <BarContainer>
          <Bar count={averageScore} color={"#C4C4C4"} />
          <Score color={"#464646"}>{averageScore}점</Score>
        </BarContainer>
        <WhoScore>평균</WhoScore>
      </ScoreContainer>
      {`노파밍 완료까지 ${completeGap}점 남았어요`}
    </Container>
  );
};

export default NoPharmingBanner;

const Container = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dbdbe4;
  white-space: pre-wrap;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #464646;
`;
const ScoreContainer = styled.div`
  display: flex;
  width: 85%;
  //height: 27px;
  justify-content: space-between;
  align-items: center;
`;
const Bar = styled.div<{ count: number; color: string }>`
  width: ${(props) => (props.count / 100) * 280}px;
  height: 27px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
`;
const Score = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;
const WhoScore = styled.div`
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
`;
const BarContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
