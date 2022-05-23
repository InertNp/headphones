import { Component1 } from "./Section1/Component1";
import styled from "styled-components";
import { Component2 } from "./Section2/Component2";
const Container = styled.div`
   display:flex;
    flex-direction: column;
`
export const HomeScreen = () =>{
    return <Container>
        <Component1 />
        <Component2 />
    </Container>;
}