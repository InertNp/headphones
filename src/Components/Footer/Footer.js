import styled from "styled-components";
import { grey, white } from "../../Style/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const FooterDiv = styled.footer`
  background-color: black;
  color: white;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Div2 = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Div3 = styled.div`
  width: 40%;
`;
const Div4 = styled.div`
  width: 40%;
`;
const H1 = styled.h1`
  font-family: "Square Peg", cursive;
  color: ${grey};
  font-size: 60px;
  line-height: 0;
`;
const P1 = styled.p`
  margin-top: 70px;
  font-weight: lighter;
`;
const P2 = styled.p`
  margin-top: 70px;
`;
const Div5 = styled.div`
  display: flex;
  flex-basis: row;
  justify-content: space-between;
  align-items: center;
`;
const H2 = styled.h2`
  text-transform: uppercase;
  color: ${white};
  padding: 20px;
  font-size: 17px;
  font-weight: lighter;
`;
const Icons = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;
const Div6 = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Footer = () => {
  return (
    <FooterDiv>
      <Div2>
        <Div3>
          <H1>audiophile</H1>
          <P1>
            Audiophile is an all in one stop to fullfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come visit our
            demo facality we’re open 7 days a week.
          </P1>
          <P2>Copyright 2021. All Rights Reserved</P2>
        </Div3>
        <Div4>
          <Div5>
            <H2>home</H2>
            <H2>Headphones</H2>
            <H2>Speaker</H2>
            <H2>earphones</H2>
          </Div5>
          <Div6>
            <Icons>
              <FontAwesomeIcon icon={faFacebookSquare} size="3x"/>
            </Icons>
            <Icons>
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </Icons>
            <Icons>
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </Icons>
          </Div6>
        </Div4>
      </Div2>
    </FooterDiv>
  );
};
