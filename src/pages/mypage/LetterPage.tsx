import styled from "styled-components";
import { Layout } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import Backarrow from "../../assets/back_arrow.svg";
import Navigation from "../../components/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const LetterPage = () => {
  const navigate = useNavigate();

  const [summary, setSummary] = useState<string>("");

  const goToBack = () => {
    navigate(-1);
  };

  const createCopy = async () => {
    const content =
      "이번 추석에는 어떤 영화를 볼까?\n7080 시절에는 '추석특집 영화'를 보기 위해 길거리의 영화 포스터를 찾거나 신문의 TV 일정표에 밑줄을 그으며 상영일시를 기다리는 설렘이 있었다.\n알파세대는 이 기다림을 이해하지 못할 것이다. 한 통의 전화통화를 위해 공중전화에서 줄을 서서 기다리거나, 사랑하는 사람에게 긴 손편지를 쓰고 우체국에 가서 우표를 붙이고 매일 우편함을 바라보는 등의 기다림을 경험하지 못했기 때문이다. 스마트폰과 카톡, 유튜브가 있는데 그것이 무슨 의미가 있느냐라고 반문할지도 모른다.";
    const response = await axios.post(
      `https://www.kyukeoton.store/clovatest?content=${content}`,
      {
        params: content,
      }
    );
    console.log(response.data.data.summary);
    setSummary(response.data.data.summary);
  };

  useEffect(() => {
    createCopy();
  }, []);

  return (
    <Layout>
      <Header>
        <BackIcon src={Backarrow} onClick={goToBack} />
        세줄 요약 레터 읽기
      </Header>
      <Container>
        <Contents>{summary}</Contents>
        <Wrapper>
          <SubTitle>숏폼도, 요약도 좋지만</SubTitle>
          <Title>자세한 내용이 궁금하지 않으신가요?</Title>
          <OriginContents>
            {
              "이번 추석에는 어떤 영화를 볼까?\n\n7080 시절에는 '추석특집 영화'를 보기 위해 길거리의 영화 포스터를 찾거나 신문의 TV 일정표에 밑줄을 그으며 상영일시를 기다리는 설렘이 있었다.\n알파세대는 이 기다림을 이해하지 못할 것이다. 한 통의 전화통화를 위해 공중전화에서 줄을 서서 기다리거나, 사랑하는 사람에게 긴 손편지를 쓰고 우체국에 가서 우표를 붙이고 매일 우편함을 바라보는 등의 기다림을 경험하지 못했기 때문이다. '스마트폰과 카톡, 유튜브가 있는데 그것이 무슨 의미가 있느냐'라고 반문할지도 모른다.\n 낭만을 넘어 인간적 성숙에 도달한다는 의미를 포함하고 있다.\n\n문제는 즉각적인 만족에 익숙해진 현대인들이 사소한 불편을 견디기 힘들어하고, 스마트폰에 몰입하느라 적지 않은 시간을 허비하고 있다는 현실이다.\n\n뇌신경과학자들은 그 원인을 도파민에서 찾는다. 도파민(Dopamine)은 뇌에서 활성화되는 동기부여나 보상, 쾌감 등 인간의 기본 욕구에 해당하는 신경전달물질이다.\n\n이것이 사라지면 인간의 욕구를 행하지 못하는 파킨스병 등에 빠질 수 있다.\n\n도파민이 나쁜 것은 아니다. 문제는 과도한 도파민 환경이다.\n\n우리의 도파민 환경이란 채팅, 폭력물, 성인물, 게임 등의 자극적 중독에 빠지기 쉬운 미디어 환경이 일반적이다. 미디어 중독은 나와 가족의 미래에 신체적, 정신적 질병을 유발한다는 심각성을 안고 있다.\n\n또한 '집중력 저하'라는 위험성이 있다. 학업과 능률 저하는 물론, 보행이나 운전 시에 사고 위험 확률이 증가한다.\n\n스마트폰을 볼 때 시야가 좁아지고 주의가 산만해지기 때문이다.\n\n미국 스탠퍼드대 정신의학 전공의 애나 렘키 교수는 '도파민네이션'이라는 책을 통해 도파민이 쾌락과 고통의 작용과 반작용으로 양분된다는 '균형 이론'을 펼쳤다. 모든 쾌락에는 그만큼의 고통이 따른다는 것. 이것을 전문적으로 '신경적응(Neuroadaptation)'이라고 한다.\n\n예컨대 넷플릭스의 폭력물에서 쾌감을 느낄 경우, 더 많은 시리즈를 보게 되고 점점 더 강한 폭력물을 찾게 된다는 악순환이다.\n\n이 책의 부제는 '쾌락의 과잉 시대에서 균형 찾기'이다. 렘키 교수는 균형을 찾기 위한 방법으로 세 가지의 '자기 구속'을 제안한다.\n\n첫 번째 자기 구속은 '물리적 구속'이다. 예를 들어 스마트폰을 내 눈에서 보이지 않도록 공간적으로 이동함으로써 삶의 균형을 찾는 것이다. 두 번째는 '시간적 구속'이다. 특정 시간에는 스마트폰을 만지지 않겠다는 시간적인 한계를 정해서 균형을 찾는 방안이다.\n세 번째는 '범주의 구속'이다. 어떤 상황에는 사용하지만, 어떤 상황에는 절대 사용하지 않겠다는 자신과의 다짐이다. 이를 요약하면 '내 주변의 환경을 바꾸는 것'이다.\n그러나 실천은 말처럼 간단치 않다. 무언가 현실적이고 창의적인 보상이 필요하다.창의적인 보상의 예는 '스마트폰 타임'을 '운동 시간'이나 '영화 시간' 등으로 대체하는 것이다.\n혼자보다 가족·동료들과 함께 할수록, 대충 하는 것보다 몰입할수록 효과적이다. 이것의 결과는 시원한 물을 마실 때, 식사할 때, 또는 대화 중에도 느낄 수 있다.\n작은 행복들이 모여 큰 행복을 이룰 수 있다.가장 위험한 것은 아무런 계획 없이 습관적으로 스마트폰을 만지는 것이다. 이것은 나쁜 것이 아니라 어리석음이다.\n일상의 소중한 행복들을 놓치고 엉뚱한 데서 행복을 찾고 있기 때문이다. 그것은 행복을 좇는 게 아니라 불행을 자초하는 일이다.\n쾌락의 과잉 시대에서 균형을 찾는 방법은 절제하고 멈추는 일이다. 멈춤을 한 자로 표현하면 '그칠 지(止)'이다. 멈추어야 비로소 보이고, 기다림으로써 평화를 얻게 된다.\n기다림은 인간적인 성숙의 표현이다. 이번 추석에는 넉넉하게 기다려주면서 가족과 함께 어떤 행복을 찾을지 고민해보면 어떨까. 김경수 전남대 문화전문대학원 교수"
            }
          </OriginContents>
        </Wrapper>
      </Container>
      <Navigation />
    </Layout>
  );
};

export default LetterPage;

const Container = styled.div`
  display: flex;
  height: 700px;
  width: 100%;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  // 파이어폭스용 스크롤바 숨기기
  scrollbar-width: none;

  // IE 및 Edge용 스크롤바 숨기기
  -ms-overflow-style: none;
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
const OriginContents = styled.div`
  display: flex;
  width: 354px;
  white-space: pre-wrap;
  color: var(--gray-gray3, #a0a0a0);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
const Contents = styled.div`
  margin: 70px 18px 0 18px;
  padding: 20px;
  border-radius: 8px;
  background-color: #d9d9d9;
`;
const SubTitle = styled.div`
  color: var(--gray-gray1, #515151);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
const Title = styled.div`
  color: var(--gray-gray1, #515151);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  margin-top: 48px;
  padding-left: 18px;
  gap: 16px;
`;
