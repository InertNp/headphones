import styled from "styled-components"
import { Navbar } from "../Navbar/Navbar"
const Img = styled.img`
    width:100%;
    position:absoulte;
`
export const Component1 = () => {
    return <header>
        <Img src={require("../../shared/img/image-hero.jpg")} alt="img" />
        <Navbar />
        
    </header>
}

