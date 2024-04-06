import styled from "styled-components";
import Navigation from "../../components/Navigation";
import { Layout } from "../../styles/styles";
import logo from "../../assets/main_logo.png";
import searchicon from "../../assets/search_icon.svg";
import Question from "../../components/Question";
import ImageGallery from "../../components/ImageGallery";
import { useNavigate } from "react-router-dom";

interface BalanceDataItem {
  id: number;
  content: string;
  choice1: string;
  choice2: string;
}

const BalanceData: BalanceDataItem[] = [
  {
    id: 1,
    content: "Q. 내 안의 도파민을 싸--악 돌게 하는 것은 ?!",
    choice1: "남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 1억 꽂히기",
    choice2: "외제차까지 협찬받는 50만 팔로워 인플루언서 되기",
  },
  {
    id: 2,
    content: "Q. 내 안의 도파민을 싸--악 돌게 하는 것은 ?!",
    choice1: "남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 1억 꽂히기",
    choice2: "외제차까지 협찬받는 50만 팔로워 인플루언서 되기",
  },
  {
    id: 3,
    content: "Q. 내 안의 도파민을 싸--악 돌게 하는 것은 ?!",
    choice1: "남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 1억 꽂히기",
    choice2: "외제차까지 협찬받는 50만 팔로워 인플루언서 되기",
  },
  {
    id: 4,
    content: "Q. 내 안의 도파민을 싸--악 돌게 하는 것은 ?!",
    choice1: "남몰래 쓴 소설이 대박 나 아무도 모르게 통장에 1억 꽂히기",
    choice2: "외제차까지 협찬받는 50만 팔로워 인플루언서 되기",
  },
];

const CommuintyPage = () => {
  const nav = useNavigate();
  const goToDetail = () => {
    nav("/question/detail");
  };

  return (
    <Layout>
      <Container>
        <TopContainer>
          <LogoImage src={logo} />
          <SearchBarContainer>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon src={searchicon} alt="Search" />
          </SearchBarContainer>
        </TopContainer>
        <TitleContainer>
          <Today>오늘의</Today>
          <JJal>도친짤</JJal>
        </TitleContainer>
        <SubContainer>
          <ImageGallery />
        </SubContainer>
        <Dopaming>도파밍 토크</Dopaming>
        <DopamingContainer onClick={goToDetail}>
          {BalanceData.map((item) => (
            <Question
              key={item.id}
              content={item.content}
              choice1={item.choice1}
              choice2={item.choice2}
            />
          ))}
        </DopamingContainer>
      </Container>
      <Navigation />
    </Layout>
  );
};

// Question 컴포넌트 사용 예시 (다른 컴포넌트나 페이지에서 사용할 때)
// BalanceData.map(item => (
//   <Question key={item.id} content={item.content} choice1={item.choice1} choice2={item.choice2} />
// ));

export default CommuintyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-align: left;
  margin-bottom: 12px;
  margin-top: 10px;
  margin-left: 16px;
`;

const Today = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  margin-right: 5px;
  font-weight: 700;
  line-height: 21px; /* 87.5% */
`;

const JJal = styled.div`
  color: #e60022;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  letter-spacing: -0.32px;
`;

const SubContainer = styled.div`
  border-radius: 10px;
  background: #dbdbe4;
  height: 206px;
  display: flex;
  margin-left: 19px;
  margin-right: 19px;
  width: 90%;
  flex-shrink: 0;
`;

const DopamingContainer = styled.div`
  display: flex;
  width: 90%;
  margin-left: 19px;
  margin-right: 19px;
  border-radius: 10px;
  flex-direction: column;
  background: #dbdbe4;
  overflow: auto;
  // 웹킷 기반 브라우저용 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }

  // 파이어폭스용 스크롤바 숨기기
  scrollbar-width: none;

  // IE 및 Edge용 스크롤바 숨기기
  -ms-overflow-style: none;
`;

const Dopaming = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  margin-top: 12px;
  margin-left: 18px;
  margin-bottom: 12px;
  text-align: left;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const LogoImage = styled.img`
  flex: 1;
  width: 85px;
  margin-left: 5px;
  margin-right: 5px;
  height: 34px;
`;

const SearchBarContainer = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  height: 46px;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  background: #d9d9d9;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding-left: 20px;
  padding-right: 36px; // Make room for the icon inside the search bar
  border-radius: 30px;
  border: none;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #a8a8a8;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;
