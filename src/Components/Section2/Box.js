import styled from "styled-components";
import { grey } from "../../Style/Style";
const Div1 = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: ${grey}; */
`;
const Div2 = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${grey};
`;
const Img =  styled.img`
    background-color: aliceblue;
`
export const Box = ({ data }) => {
  return (
    <Div1>
        <Img src={require("../../Shared/img/image-headphones.jpg")} alt="img1" />
      <Div2></Div2>
    </Div1>
  );
};
