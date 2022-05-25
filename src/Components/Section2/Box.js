import styled from "styled-components";
import { grey, orange } from "../../Style/Style";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Div1 = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;
const Div2 = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  background-color: ${grey};
`;
const Div3 = styled.div`
  width: 100%;
  /* margin-top: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  flex-direction: column;
`;
const Img = styled.img`
  height: 400px;
  width: 400px;
  position: absolute;
`;
const P1 = styled.p`
text-transform: capitalize;
`;
const P2 = styled.p`
  color: ${orange};
  
  &:hover{
    text-decoration:underline;
  }
`;
export const Box = ({ data }) => {
  console.log(data.img);
  return (
    <Div1>
      <Img alt={data.name} src={require(`../../Shared/img/${data.img}`)} />
      <Div2>
        <Div3>
          <P1>{data.name}</P1>
          <P2>
            Shop <FontAwesomeIcon  icon={faChevronRight }/>
          </P2>
        </Div3>
      </Div2>
    </Div1>
  );
};

Box.propTypes = {
  data: PropTypes.object,
};
