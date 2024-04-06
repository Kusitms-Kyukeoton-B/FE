import styled from "styled-components";

interface ImageData {
  src: string;
  caption: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageData[];
  onImageClick: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <MasonryLayout>
      {images.map((image, index) => (
        <ImageContainer key={index} onClick={() => onImageClick(index)}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", height: "auto" }}
          />
        </ImageContainer>
      ))}
    </MasonryLayout>
  );
};

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

export default ImageGrid;
