import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

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
        <Button>업로드</Button>
      </label>
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
    </>
  );
};

export default FileUpload;

const FileUploader = styled.input`
  display: none;
`;
const Button = styled.div`
  margin: 20px;
  background-color: ${colors.main};
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
  width: 100%;
  height: 200px;
  background-color: beige;
`;
