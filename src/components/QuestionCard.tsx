import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const QuestionContainer = styled.div`
  border-radius: 20px;
  margin: 16px 0;
  padding: 16px;
  font-size: 18px;
  border-radius: 20px;
  border: 1.5px solid var(--main, #836fff);
  background: rgba(131, 111, 255, 0.1);
  text-align: center;
  color: var(--main, #836fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
`;

const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Fchoice = styled.div`
  border-radius: 20px;
  flex-grow: 1;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  transition: all 0.3s ease;
  border-radius: 20px 0px 0px 20px;
  background: #dedede;
  color: var(--black, #1f1e1e);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  letter-spacing: 0.16px;
`;

const Schoice = styled.div`
  border-radius: 20px;
  flex-grow: 1;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  transition: all 0.3s ease;
  border-radius: 0px 20px 20px 0px;
  background: var(--main, #836fff);
  color: var(--black, #1f1e1e);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  letter-spacing: 0.16px;
`;

const Likes = styled.div`
  font-size: 14px;
  color: #303f9f;
  text-align: center;
  margin-top: 20px;
`;

// Usage of styled components in a React component
const QuestionCard = () => (
  <CardContainer>
    <QuestionContainer>
      Q. 내 안의 도파민을 싸--악 돌게 하는 것은?!
    </QuestionContainer>
    <ChoicesContainer>
      <Fchoice>
        남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 1억 꽂히기
      </Fchoice>
      <Schoice>외제차까지 협찬받는 50만 팔로워 인플루언서 되기</Schoice>
    </ChoicesContainer>
    <Likes>참여자 수 : 1,341명</Likes>
  </CardContainer>
);

export default QuestionCard;
