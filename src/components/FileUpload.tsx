import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import InfoUpload from "./InfoUpload";

const FileUpload = () => {
  const [imageSrc, setImageSrc] = useState<string>("");

  const encodeFileToBase64 = (fileBlob: Blob): Promise<void> => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const result = reader.result as string;
        setImageSrc(result);
        resolve();
      };
    });
  };

  return (
    <>
      <Header>글쓰기</Header>
      {imageSrc != "" ? (
        imageSrc.startsWith("data:image") ? (
          <PreviewImage src={imageSrc} alt="preview-img" />
        ) : imageSrc.startsWith("data:video") ? (
          <PreviewVideo controls>
            <source src={imageSrc} type="PreviewVideo/mp4" />
            Your browser does not support the video tag.
          </PreviewVideo>
        ) : (
          <Preview />
        )
      ) : (
        <Preview />
      )}
      <FileUploader
        type="file"
        name="file"
        id="file-upload"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            encodeFileToBase64(e.target.files[0]);
          }
        }}
      />
      <InfoUpload />
      <label htmlFor="file-upload">
        <Button>업로드하기</Button>
      </label>
    </>
  );
};

export default FileUpload;

const FileUploader = styled.input`
  display: none;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 108px;
  height: 40px;
  font-size: 14px;
  border-radius: 20px;
  background-color: ${colors.main};
  color: white;
  font-weight: 700;
  margin-left: 145px;
`;
const PreviewImage = styled.img`
  width: auto;
  height: 200px;
  margin-top: 70px;
  margin-bottom: 20px;
`;
const PreviewVideo = styled.video`
  width: auto;
  height: 200px;
  margin-top: 70px;
  margin-bottom: 20px;
`;
const Preview = styled.div`
  width: 100%;
  height: 200px;
  background-color: beige;
  margin-top: 70px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 70px;
  color: var(--black, #1f1e1e);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
