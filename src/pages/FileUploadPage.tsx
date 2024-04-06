import styled from "styled-components";
import Navigation from "../components/Navigation";
import { Layout } from "../styles/styles";
import { useState } from "react";

const FileUploadPage = () => {
  const [imageSrc, setImageSrc] = useState("");

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
    <Layout>
      <Container>
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

        <label htmlFor="file-upload">
          <Button>파일을 업로드해주세요</Button>
        </label>
        <FileUpload
          type="file"
          name="file"
          id="file-upload"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              encodeFileToBase64(e.target.files[0]);
            }
          }}
        />
      </Container>
      <Navigation />
    </Layout>
  );
};

export default FileUploadPage;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;
const FileUpload = styled.input`
  //display: none;
`;
const Button = styled.div`
  margin: 20px;
  background-color: pink;
`;
const PreviewImage = styled.img`
  width: auto;
  height: 200px;
`;
const PreviewVideo = styled.video`
  width: auto;
  height: 200px;
`;
const Preview = styled.div`
  width: 200px;
  height: 200px;
  background-color: beige;
`;
