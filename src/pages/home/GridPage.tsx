import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Layout } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import ImageGrid from "../../components/GridImages";
import Navigation from "../../components/Navigation";
import FilterButtonComponent from "../../components/FilteringButton";
import searchicon from "../../assets/search_icon.svg";
import logo from "../../assets/main_logo.png";

interface ImageData {
  src: string;
  caption: string;
  alt: string;
}

interface apiData {
  postId: number;
  title: string;
  image: string;
}

const GridPage = () => {
  const nav = useNavigate();
  const [images, setImages] = useState<ImageData[]>([]);
  const loader = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleImageClick = (index: string) => {
    nav(`/detail/${encodeURIComponent(index)}`);
  };

  const fetchImages = async () => {
    const response = await axios.get(`https://www.kyukeoton.store/post/file`);
    console.log(response);
    const newImages = response.data.data.postList.map((img: apiData) => ({
      src: img.image,
      caption: img.postId,
      alt: img.title,
    }));

    setImages([...newImages]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchImages();
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchImages();
    }
  };

  return (
    <Layout>
      <Container>
        <TopContainer>
          <LogoImage src={logo} />
          <SearchBarContainer>
            <SearchInput
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIcon src={searchicon} alt="Search" />
          </SearchBarContainer>
        </TopContainer>
        <FilterButtonComponent />
        <ScrollableDiv onScroll={handleScroll}>
          <ImageGrid images={images} onImageClick={handleImageClick} />
          <div ref={loader} />
        </ScrollableDiv>
      </Container>
      <Navigation />
    </Layout>
  );
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const LogoImage = styled.img`
  flex: 1;
  width: 85px;
  margin-left: 5px;
  margin-right: 5px;
  height: 34px;
`;

const SearchBarContainer = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  height: 46px;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  background: #d9d9d9;
`;

const ScrollableDiv = styled.div`
  height: 100vh;
  width: 90%;
  padding-left: 18px;
  padding-right: 18px;
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

const SearchInput = styled.input`
  flex-grow: 1;
  height: 100%;
  padding-left: 20px;
  padding-right: 36px; // Make room for the icon inside the search bar
  border-radius: 30px;
  border: none;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #a8a8a8;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default GridPage;
