import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../styles/styles";

interface ImageData {
  src: string;
  caption: string;
  alt: string;
}

interface apiData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const GridPage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchImages = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=50`
    );

    const newImages = response.data.map((img: apiData) => ({
      src: img.download_url,
      caption: img.author,
      alt: `Photograph by ${img.author}`,
    }));

    setImages([...images, ...newImages]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchImages();
    }
  };

  return (
    <Layout>
      <ScrollableDiv onScroll={handleScroll}>
        <MasonryLayout>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "auto" }}
              />
            </ImageContainer>
          ))}
        </MasonryLayout>
      </ScrollableDiv>
    </Layout>
  );
};

const ScrollableDiv = styled.div`
  height: 100vh;
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

const MasonryLayout = styled.div`
  column-count: 2;
  column-gap: 15px;
  width: 100%;
`;

const ImageContainer = styled.div`
  break-inside: avoid;
  display: inline-block;

  img {
    border-radius: 10px;
  }

  width: 100%;
`;

export default GridPage;
