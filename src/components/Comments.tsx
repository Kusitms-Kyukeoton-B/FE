import styled from "styled-components";
import blankicon from "../assets/blank_icon.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface Comment {
  id: number;
  content: string;
}

// const comments = [
//   { id: 1, user: "User1", content: "첫 번째 댓글입니다!" },
//   { id: 2, user: "User2", content: "두 번째 댓글이네요!" },
//   { id: 3, user: "User3", content: "댓글을 남겨봅니다." },
//   { id: 4, user: "User3", content: "댓글을 남겨봅니다." },
//   { id: 5, user: "User3", content: "댓글을 남겨봅니다." },
// ];

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const response = await axios.get(
      `https://www.kyukeoton.store/post/file/1/comments`
    );
    console.log(response);
    const newComments = response.data.data.commentResponseList;

    setComments(newComments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentListContainer>
      <CommentTitle>댓글</CommentTitle>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <CommentCircle>
            <img src={blankicon} />
          </CommentCircle>
          <CommentColumn>
            <Username>익명</Username>
            <Content>{comment.content}</Content>
          </CommentColumn>
        </Comment>
      ))}
    </CommentListContainer>
  );
};

export default CommentList;

const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: #dedede;
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

const Comment = styled.div`
  padding: 10px;
  display: flex;

  flex-direction: row;
`;

const CommentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #a0a0a0;
  margin-right: 14px;
  margin-left: 18px;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;
const Username = styled.div`
  align-items: start;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  line-height: 16px;
`;

const Content = styled.div`
  margin-top: 5px;
  color: var(--gray-gray1, #515151);
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

const CommentTitle = styled.div`
  color: var(--black, #1f1e1e);
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin-top: 23px;
  margin-left: 19px;
  margin-: 20px;
  letter-spacing: -0.16px;
`;
