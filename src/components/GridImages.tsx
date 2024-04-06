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
  const mediaType = "image";
  return (
    <MasonryLayout>
      {images.map((image, index) => (
        <ImageContainer key={index} onClick={() => onImageClick(index)}>
          {mediaType === "image" ? (
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
            />
          ) : (
            <video
            //   src={media.src}
            //   style={{ width: "100%", height: "auto" }}
            //   loop
            //   autoPlay
            //   muted
            >
              Your browser does not support the video tag.
            </video>
          )}
        </ImageContainer>
      ))}
    </MasonryLayout>
  );
};

const MasonryLayout = styled.div`
  column-count: 2;
  column-gap: 16px;
  width: 100%;
`;

const ImageContainer = styled.div`
  break-inside: avoid;
  display: inline-block;

  img {
    border-radius: 10px;
  }
  margin-bottom: 16px;
  width: 100%;
`;

export default ImageGrid;
