import { Component1 } from "./Section1/Component1";
import styled from "styled-components";

const Container = styled.div`
   display:flex;
    flex-direction: column;
`
export const HomeScreen = () =>{
    return <Container>
        <Component1 />
        <Component1 />
    </Container>;
}