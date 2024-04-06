import styled from "styled-components";
import f_img from "../assets/com_img_1.jpeg";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 354px;
  margin-top: 0;
  overflow: hidden;
`;

const Card = styled.div`
  width: 89px;
  height: 118px;
  transition: transform 0.5s;
  position: relative;

  &:nth-child(2) {
    transform: scale(1.2);
    margin: 20px;
    z-index: 2;
  }

  &:nth-child(1),
  &:nth-child(3) {
    transform: scale(0.9);
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: var(--Light-Grey, #efeff1);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Description = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 7px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 400% */
`;

const ImageGallery = () => (
  <GalleryContainer>
    <Card>
      <Image src={f_img} alt="First Image" />
      <Info>Dream pools around the world</Info>
      <Description>12,465명이 좋아해요</Description>
    </Card>

    <Card>
      <Image src={f_img} alt="First Image" />
      <Info>Beautiful beach inspiration</Info>
      <Description>27,358명이 좋아해요</Description>
    </Card>
    <Card>
      <Image src={f_img} alt="First Image" />
      <Info>Dream pools around the world</Info>
      <Description>7,321명이 좋아해요</Description>
    </Card>
  </GalleryContainer>
);

export default ImageGallery;
