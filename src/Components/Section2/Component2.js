import styled from "styled-components";
import { Box } from "./Box";
const Div1 = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 400px;
  
  display: flex;
  justify-content: center;
`;
const Div2 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const data = [
  {
    id: 1,
    name: "headphones",
    img: "../../Shared/img/image-headphones.jpg",
  },
  {
    id: 2,
    name: "speaker",
    img: "../../Shared/img/image-speakers.png",
  },
  {
    id: 3,
    name: "earphones",
    img: "../../Shared/img/image-earphones.png",
  },
];
export const Component2 = () => {
  return (
    <Div1>
      <Div2>
        {data.map((e) => {
          return <Box data={e} key={e.id} />;
        })}
      </Div2>
    </Div1>
  );
};
