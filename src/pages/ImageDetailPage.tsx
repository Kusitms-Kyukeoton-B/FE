import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../styles/styles";

const ImageDetailPage = () => {
  const { index } = useParams();

  return (
    <Layout>
      <DetailContainer>
        <div>{index}</div>
      </DetailContainer>
    </Layout>
  );
};

export default ImageDetailPage;

const DetailContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const DetailImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 5px;
// `;
