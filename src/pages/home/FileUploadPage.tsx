import styled from "styled-components";
import Navigation from "../../components/Navigation";
import { Layout } from "../../styles/styles";
import FileUpload from "../../components/FileUpload";
import InfoUpload from "../../components/InfoUpload";

const FileUploadPage = () => {
  return (
    <Layout>
      <Container>
        <FileUpload />
        <InfoUpload />
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
