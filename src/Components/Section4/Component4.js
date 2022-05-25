import styled from "styled-components";
import { BorderButton } from "../../Style/Button";
import { grey } from "../../Style/Style";

const Div1 = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const Div2 = styled.div`
  width: 80%;
  background-color: ${grey};
  height: 400px;
`;
const Img = styled.img`
  width: 80%;
  position: absolute;
  height: 400px;
`;
const TextContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P1 = styled.p`
  font-size: 30px;
  color: black;
`;
export const Component4 = () => {
  return (
    <Div1>
      <Div2>
        <Img
          src={require(`../../Shared/img/image-speaker-zx7.jpg`)}
          alt="img"
        />
        <TextContainer>
          <P1>ZX7 SPEAKER</P1>
          <BorderButton >See Product</BorderButton>
        </TextContainer>
      </Div2>
    </Div1>
  );
};
