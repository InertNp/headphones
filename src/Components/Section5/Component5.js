import styled from "styled-components";

const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Div2 = styled.div`
  width: 80%;
  background-color: beige;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;
const ImgContainer = styled.div`
  width: 49.5%;
  background-color: aliceblue;
  height: 500px;
`;
const TextContainer = styled.div`
  width: 49.5%;
  background-color: red;
  height: 500px;
`;
const Img = styled.img`
  
`
export const Component5 = () => {
  return (
    <Div1>
      <Div2>
        <ImgContainer>
          <Img  />
        </ImgContainer>
        <TextContainer></TextContainer>
      </Div2>
    </Div1>
  );
};
