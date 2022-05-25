import styled from "styled-components";
import { BorderButton } from "../../Style/Button";
import { grey } from "../../Style/Style";

const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Div2 = styled.div`
  width: 80%;
  background-color: beige;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ImgContainer = styled.div`
  width: 49.5%;
  height: 400px;
`;
const TextContainer = styled.div`
  width: 49.5%;
  background-color: ${grey};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const P1 = styled.p`
  font-size: 30px;
  color: black;
`;
export const Component5 = () => {
  return (
    <Div1>
      <Div2>
        <ImgContainer>
          <Img src={require(`../../Shared/img/image-earphones-yx1.jpg`)} />
        </ImgContainer>
        <TextContainer>
          <P1>YX1 earphones</P1>
          <BorderButton>See Product</BorderButton>
        </TextContainer>
      </Div2>
    </Div1>
  );
};
