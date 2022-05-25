import styled from "styled-components";
import { BlackButton } from "../../Style/Button";
import { orange } from "../../Style/Style";

const Div1 = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
`;
const Div2 = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${orange};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Img = styled.img`
  height: 500px;
  width: 400px;
`;
const ImgDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;
const P1 = styled.p`
  font-size: 30px;
  inline-size: 0;
  color: white;
`;
const P2 = styled.p`
  color: white;
  width: 400px;
  font-size: 20px;
`;
const TextContainer = styled.div``;
export const Component3 = () => {
  return (
    <Div1>
      <Div2>
        <ImgDiv>
          <Img src={require(`../../Shared/img/image-speaker-zx9.png`)} />
        </ImgDiv>
        <TextContainer>
          <P1>ZX9 SPEAKER</P1>
          <P2>
            Upgrade to premium speakers hat are phenomenally built to deliver
            truly remarkable sound.
          </P2>
          <BlackButton>See Product</BlackButton>
        </TextContainer>
      </Div2>
    </Div1>
  );
};
