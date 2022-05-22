import styled from "styled-components";
import { grey, orange } from "./Style";
export const PrimaryButton = styled.button`
    color: black;
    background-color: ${orange};
    width: 227px;
    height: 54px;
    border: none;
    &:hover ,
    :focus {
        color: black;
        background-color: ${grey}; 
        transition:all .2s ease-in;
    }
    
`