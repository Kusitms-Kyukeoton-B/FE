import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <IconContainer onClick={() => navigate("/")}>
          <Icon />
          <div>route</div>
        </IconContainer>
        <IconContainer onClick={() => navigate("/file")}>
          <Icon />
          <div>file</div>
        </IconContainer>
        <IconContainer>
          <Icon />
          <div>안녕</div>
        </IconContainer>
        <IconContainer>
          <Icon />
          <div>안녕</div>
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
  width: 370px;
  padding: 10px;
  justify-content: space-between;
  background-color: aliceblue;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 90px;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: pink;
`;
