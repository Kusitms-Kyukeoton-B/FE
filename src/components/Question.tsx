import styled from "styled-components";

interface QuestionProps {
  content: string;
  choice1: string;
  choice2: string;
}

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Choice = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const VS = styled.span`
  font-size: 24px;
  font-weight: bold;
  padding: 0 20px;
`;

// Question 컴포넌트
const Question: React.FC<QuestionProps> = ({ content, choice1, choice2 }) => (
  <QuestionContainer>
    <Content>{content}</Content>
    <ChoicesContainer>
      <Choice>{choice1}</Choice>
      <VS>vs</VS>
      <Choice>{choice2}</Choice>
    </ChoicesContainer>
  </QuestionContainer>
);
export default Question;
