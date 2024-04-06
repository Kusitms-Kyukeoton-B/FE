import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../../styles/styles";
import { useState } from "react";
import sampleimg from "../../assets/sample_1.png";
import likeicon from "../../assets/heart.svg";
import bookmark from "../../assets/bookmark.svg";
import shareicon from "../../assets/share.svg";
import blankicon from "../../assets/blank_icon.png";
import CommentList from "../../components/Comments";

const ImageDetailPage = () => {
  //const { index } = useParams();
  const [follow, setFollow] = useState(false);
  const [likeCount, setLikeCount] = useState(456);
  const [bookmarkCount, setBookmarkCount] = useState(123);
  const [shareCount, setShareCount] = useState(789);

  const changeFollow = () => {
    setFollow(!follow);
  };

  return (
    <Layout>
      <DetailContainer>
        <TopContainer>
          <TopImage>
            <img src={blankicon} />
          </TopImage>
          <TopTextContainer>
            <TopRow>
              <TopName>도파밍</TopName>
              <FollowButton onClick={changeFollow}>
                {follow ? "팔로우" : "팔로잉"}
              </FollowButton>
            </TopRow>
            <TopSub>환승연애 미친자</TopSub>
          </TopTextContainer>
        </TopContainer>
        <ImageWrapper>
          <StyledImage src={sampleimg} alt="Sample" />
          <Overlay>
            <IconWithCount>
              <img src={bookmark} alt="Bookmark" />
              <Count>{bookmarkCount}</Count>
            </IconWithCount>
            <IconWithCount>
              <img src={likeicon} alt="Like" />
              <Count>{likeCount}</Count>
            </IconWithCount>
            <IconWithCount>
              <img src={shareicon} alt="Share" />
              <Count>{shareCount}</Count>
            </IconWithCount>
          </Overlay>
          <ImageTitle>현실 탈출 짤</ImageTitle>
        </ImageWrapper>
        <CommentList />
        <CommentInputContainer>
          <CommentInput placeholder="댓글을 입력하세요..." />
          <SubmitButton>등록</SubmitButton>
        </CommentInputContainer>
      </DetailContainer>
    </Layout>
  );
};

export default ImageDetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const TopImage = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #dbdbe4;
  img {
    width: 30px;
    height: 34px;
  }
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 10px;
  margin-top: 30px;
`;

const TopTextContainer = styled.div`
  display: flex;
  width: 211px;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-left: 22px;
  gap: 10px 71px;
  flex-wrap: wrap;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  line-height: normal;
`;
const FollowButton = styled.div`
  color: #3769cb;
  text-align: right;
  display: flex;
  font-family: Pretendard;
  font-size: 14px;
  margin-left: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const TopSub = styled.div`
  color: #7f8c99;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  margin-right: 90px;
  line-height: normal;
`;

const ImageContainer = styled.img`
  /* display: flex;
  width: 290px;
  height: 457px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  margin-top: 17px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 28.7px 0px rgba(0, 0, 0, 0.25); */

  display: flex;
  width: 290px;
  height: 457px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  border-radius: 8px;
  margin-top: 17px;
  background: url(<path-to-image>) center lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 28.7px 0px rgba(0, 0, 0, 0.25);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 290px;
  height: 457px;
  margin-top: 17px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const IconWithCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Count = styled.span`
  font-size: 12px;
  color: white;
`;

const ImageTitle = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 20px;
  border: 1px solid #ccc;
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
