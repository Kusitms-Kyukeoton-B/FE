//QuestionDetail

import styled from "styled-components";
import QuestionCard from "../../components/QuestionCard";
import { Layout } from "../../styles/styles";
import CommentList from "../../components/Comments";
import backicon from "../../assets/back_arrow.svg";
import searchicon from "../../assets/search_icon.svg";
import { useNavigate } from "react-router-dom";

const QuestionDetailPage = () => {
  const nav = useNavigate();
  const goToBack = () => {
    nav(-1);
  };
  return (
    <Layout>
      <Container>
        <NavBar>
          <img src={backicon} onClick={goToBack}></img>
          <img src={searchicon}></img>
        </NavBar>
        <QuestionCard />
        <CommentList />
        <CommentInputContainer>
          <CommentInput placeholder="댓글 추가..." />
          <SubmitButton>등록</SubmitButton>
        </CommentInputContainer>
      </Container>
    </Layout>
  );
};

export default QuestionDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin: 10px;
  }
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #0056b3;
  }
`;
