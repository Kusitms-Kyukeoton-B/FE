import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import ImageGrid from "../components/GridImages";

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
  const nav = useNavigate();
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleImageClick = (index: number) => {
    nav(`/detail/${encodeURIComponent(index)}`);
  };

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
        <ImageGrid images={images} onImageClick={handleImageClick} />
      </ScrollableDiv>
    </Layout>
  );
};

const ScrollableDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 10px;
  padding-right: 10px;
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

export default GridPage;
