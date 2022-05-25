import styled from "styled-components";
import { grey, orange } from "./Style";
export const PrimaryButton = styled.button`
  color: black;
  background-color: ${orange};
  width: 227px;
  height: 54px;
  border: none;
  font-size: 20px;
  &:hover,
  :focus {
    color: black;
    background-color: ${grey};
    transition: all 0.2s ease-in;
  }
`;
export const BlackButton = styled.button`
  color: white;
  background-color: black;
  width: 227px;
  height: 54px;
  border: none;
  font-size: 20px;
  &:hover,
  :focus {
    color: black;
    background-color: ${grey};
    transition: all 0.2s ease-in;
  }
`;
export const BorderButton = styled.button`
  color: black;
  background-color: transparent;
  width: 227px;
  height: 54px;
  border: 2px solid black;
  font-size: 20px;
  &:hover,
  :focus {
    border: none;
    color: white;
    background-color: black;
    transition: all 0.2s ease-in;
  }
`;
