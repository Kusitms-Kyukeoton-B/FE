import { Layout } from "../styles/styles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageGallery } from "react-image-grid-gallery";

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

const GridImagePage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);

  // 이미지 데이터를 불러오는 함수
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
      <div
        onScroll={handleScroll}
        style={{ height: "100vh", overflow: "auto" }}
      >
        <ImageGallery imagesInfoArray={images} columnWidth={150} gapSize={24} />
      </div>
    </Layout>
  );
};

export default GridImagePage;
