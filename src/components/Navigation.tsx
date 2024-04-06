import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../context/recoilContext";
import { colors } from "../styles/colors";
import home from "@assets/nav/Home.svg";
import homeGray from "@assets/nav/HomeGray.svg";
import comment from "@assets/nav/Comment.svg";
import commentGray from "@assets/nav/CommentGray.svg";
import character from "@assets/nav/Character.svg";
import characterGray from "@assets/nav/CharacterGray.svg";
import plus from "@assets/nav/Plus.svg";
import user from "@assets/nav/User.svg";
import userGray from "@assets/nav/UserGray.svg";

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
          <Icon src={navId == 0 ? home : homeGray} />
          <NavName on={navId} id={0}>
            홈
          </NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(1);
            navigate("/file");
          }}
        >
          <Icon src={navId == 1 ? comment : commentGray} />
          <NavName on={navId} id={1}>
            커뮤니티
          </NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(4);
            navigate("/file");
          }}
        >
          <Circle>
            <Plus src={plus} />
          </Circle>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(2);
            navigate("/dophami");
          }}
        >
          <Icon src={navId == 2 ? character : characterGray} />
          <NavName on={navId} id={2}>
            캐릭터
          </NavName>
        </IconContainer>
        <IconContainer
          onClick={() => {
            setNavId(3);
            navigate("/profile");
          }}
        >
          <Icon src={navId == 3 ? user : userGray} />
          <NavName on={navId} id={3}>
            마이페이지
          </NavName>
        </IconContainer>
      </Container>
    </>
  );
};

export default Navigation;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 390px;
  height: 82px;
  justify-content: center;
  background-color: #d9d9d9;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const NavName = styled.div<{ on: number; id: number }>`
  color: ${(props) => (props.on == props.id ? colors.main : "#a0a0a0")};
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: ${colors.main};
`;
const Plus = styled.img`
  width: 32.84px;
  height: 32.84px;
`;
