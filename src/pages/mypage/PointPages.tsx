import styled from "styled-components";
import Navigation from "../../components/Navigation";
import { Layout } from "../../styles/styles";
import PointItem from "../../components/PointItem";

type PointItemType = {
  imageSrc: string;
  name: string;
  description: string;
  price: number;
};

const dummyItems: PointItemType[] = [
  {
    imageSrc: "src/assets/point_img_1.png",
    name: "투썸플레이스",
    description: "떠먹는 스트로베리 초콜릿 생크림 + 아메리카노 (R) 2잔",
    price: 15700,
  },
  {
    imageSrc: "src/assets/point_img_2.png",
    name: "스타벅스",
    description: "카페 아메리카노T 2잔+부드러운 생크림 카스테라",
    price: 13500,
  },
  {
    imageSrc: "src/assets/point_img_3.png",
    name: "던킨도너츠",
    description: "해피버스데이 도넛 2ea+아메리카노(S) 2잔",
    price: 12800,
  },
  {
    imageSrc: "src/assets/point_img_4.png",
    name: "이디야 커피",
    description: "초코티라미수 케이크+아메리카노 (L) 2잔",
    price: 10900,
  },
];

const PointPage = () => {
  return (
    <Layout>
      <Container>
        <PageName>포인트샵</PageName>
        <Grid>
          {dummyItems.map((item) => (
            <PointItem
              key={item.name}
              imageSrc={item.imageSrc}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </Grid>
        <Navigation />
      </Container>
    </Layout>
  );
};

export default PointPage;

const PageName = styled.div`
  color: #464646;
  text-align: center;
  font-family: Inter;
  margin-top: 17px;
  margin-bottom: 23px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 8px;
  justify-content: center;
  justify-items: center;
  align-items: start;
  max-width: 1200px;
  padding: 0 16px;
  height: 232px;
  width: 100%;

  box-sizing: border-box;
`;
