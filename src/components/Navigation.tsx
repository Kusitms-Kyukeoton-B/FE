import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../context/recoilContext";

const Navigation = () => {
  const navigate = useNavigate();
  const [navId, setNavId] = useRecoilState(navState);

  return (
    <>
      <Container>
        <IconContainer
          onClick={() => {
            setNavId(0);
            navigate("/");
          }}
        >
          <Icon onFocus={navId == 0} />
          <NavName onFocus={navId == 0}>홈</NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(1);
            navigate("/file");
          }}
        >
          <Icon onFocus={navId == 1} />
          <NavName onFocus={navId == 1}>커뮤니티</NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(2);
            navigate("/");
          }}
        >
          <Icon onFocus={navId == 2} />
          <NavName onFocus={navId == 2}>캐릭터</NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(3);
            navigate("/profile");
          }}
        >
          <Icon onFocus={navId == 3} />
          <NavName onFocus={navId == 3}>마이페이지</NavName>
        </IconContainer>
      </Container>
    </>
  );
};

export default Navigation;

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  margin-left: 8px;
  display: flex;
  width: 374px;
  height: 82px;
  border-radius: 30px;
  justify-content: center;
  background-color: #d9d9d9;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90px;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;
const Icon = styled.div<{ onFocus: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.onFocus ? "pink" : "#a0a0a0")};
`;
const NavName = styled.div<{ onFocus: boolean }>`
  color: ${(props) => (props.onFocus ? "pink" : "#a0a0a0")};
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;
