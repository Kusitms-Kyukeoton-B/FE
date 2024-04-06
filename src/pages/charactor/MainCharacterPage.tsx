import Lottie from "lottie-react";
import dophami30 from "../../assets/lottie/dophami30.json";
import dophami50 from "../../assets/lottie/dophami50.json";
import { Layout } from "../../styles/styles";
import Navigation from "../../components/Navigation";
import { useRecoilValue } from "recoil";
import { dophamingState } from "../../context/recoilContext";
import { useEffect, useState } from "react";
import styled from "styled-components";

const data = [
  {
    subTitle: "도파민이 부족해요",
    Title: "도파민을 수혈해주세요!",
    animateData: dophami30,
    color: "#2947A9",
    deepColor: "#102B81",
    shadow: "#112B81",
    comment: "“잠시 도파밍을 추천해요”",
    num: 30,
  },
  {
    subTitle: "적절한 균형을 이루고 있네요",
    Title: "지금처럼만 하면 돼요!",
    animateData: dophami50,
    color: "#88C97D",
    comment: "“노파밍도 추천해요”",
    deepColor: "#5D9853",
    shadow: "#69A060",
    num: 50,
  },
  {
    subTitle: "도파민 충천 중",
    Title: "우리와 함께 도파민을 채워요!",
    animateData: dophami30,
    color: "#FBC25C",
    deepColor: "#BD8828",
    shadow: "#BD8828",
    comment: "“충분히 도파밍 하세요”",
    num: 75,
  },
  {
    subTitle: "도파민이 충분한 당신",
    Title: "나도파밍과 함께 휴식을...",
    animateData: dophami30,
    color: "#E15D5D",
    deepColor: "#AA3232",
    shadow: "#AA3232",
    comment: "“이제 도파밍 그만”",
    num: 100,
  },
];

const MainCharacterPage = () => {
  const dophaming = useRecoilValue(dophamingState);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    dophaming > 30
      ? dophaming > 50
        ? dophaming > 70
          ? setLevel(3)
          : setLevel(2)
        : setLevel(1)
      : setLevel(0);
  }, []);

  return (
    <Layout>
      <Container>
        <SubTitle>{data[level].subTitle}</SubTitle>
        <Title>{data[level].Title}</Title>
        <Background color={data[level].color} shadow={data[level].shadow}>
          <CardTitle>{data[level].comment}</CardTitle>
          <TextWrapper>
            <CardText>도파민 지수</CardText>
            <CardNum>{dophaming}</CardNum>
          </TextWrapper>
          <BarWrapper>
            <Bar color={data[level].deepColor} />
            <StateBar num={dophaming} />
          </BarWrapper>
        </Background>
        <Lottie
          style={{ position: "absolute", height: 630, width: 630 }}
          animationData={data[level].animateData}
        />
      </Container>
      <Navigation />
    </Layout>
  );
};

export default MainCharacterPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const SubTitle = styled.div`
  margin-top: 60px;
  color: #515151;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
const Title = styled.div`
  color: #515151;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 90px;
`;
const Background = styled.div<{ color: string; shadow: string }>`
  position: relative;
  background-color: ${(props) => props.color};
  width: 320px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 31px;
  box-shadow: 10px 10px 10px 3px ${(props) => props.shadow};
  padding-top: 267px;
`;
const CardTitle = styled.div`
  color: var(--grey-100, #fff);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;
const CardText = styled.div`
  color: var(--grey-100, #fff);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
const CardNum = styled.div`
  color: var(--grey-100, #fff);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 18px;
`;
const BarWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Bar = styled.div<{ color: string }>`
  width: 271px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 23px;
`;
const StateBar = styled.div<{ num: number }>`
  position: absolute;
  left: 24px;
  height: 16px;
  border-radius: 23px;
  width: ${(props) => (props.num / 100) * 271}px;
  background-color: white;
  z-index: 1;
`;
