import styled from "styled-components";

interface PointItemProps {
  imageSrc: string;
  name: string;
  description: string;
  price: number;
}

const PointItem: React.FC<PointItemProps> = ({
  imageSrc,
  name,
  description,
  price,
}) => {
  return (
    <ItemContainer>
      <ItemImage src={imageSrc}></ItemImage>
      <SubContainer>
        <ItemName>{name}</ItemName>
        <ItemSub>{description}</ItemSub>
        <ItemPrice>{price}</ItemPrice>
      </SubContainer>
    </ItemContainer>
  );
};

export default PointItem;

const ItemContainer = styled.div`
  width: 150px;
  height: 249px;
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

const ItemName = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ItemSub = styled.div`
  font-size: 10px;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  line-height: normal;
`;

const ItemPrice = styled.div`
  color: #4045ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: start;
  margin: 0;
  flex-direction: column;
  padding: 0;
`;
