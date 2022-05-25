import styled from "styled-components";
import { orange } from "../../Style/Style";

const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Div2 = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ImgContainer = styled.div`
  width: 50%;
  height: 700px;
`;
const TextContainer = styled.div`
  width: 40%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const P1 = styled.p`
  font-size: 40px;
  color: black;
  text-transform: uppercase;
`;
const P2 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: normal;
`;
const Link = styled.a`
  line-height: 0;
  font-size: 40px;
  color: ${orange};

`;
export const Component6 = () => {
  return (
    <Div1>
      <Div2>
        <TextContainer>
          <P1>Bringing you the <br/><Link>Best</Link> Audio gear</P1>
          <P2>
            Located at the heart of New York City. Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration a
            wide range of our products. Stop by our store to meet some fantastic
            people who make Audiophile the best place to buy your portable audio
            equipment.
          </P2>
        </TextContainer>
        <ImgContainer>
          <Img src={require(`../../Shared/img/image-best-gear.jpg`)} />
        </ImgContainer>
      </Div2>
    </Div1>
  );
};
