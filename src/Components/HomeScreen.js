import { Component1 } from "./Section1/Component1";
import styled from "styled-components";
import { Component2 } from "./Section2/Component2";
import { Component3 } from "./Section3/Component3";
import { Component4 } from "./Section4/Component4";
import { Component5 } from "./Section5/Component5";
import { Component6 } from "./Section6/Component6";
import { Footer } from "./Footer/Footer";
const Container = styled.div`
   display:flex;
    flex-direction: column;
`
export const HomeScreen = () =>{
    return <Container>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Footer />
    </Container>;
}