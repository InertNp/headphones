import styled from "styled-components"
import { Navbar } from "../Navbar/Navbar"
import { NavHeader } from "./NavHeader"
const Header = styled.header`
    display: flex;
`
const Img = styled.img`
    width:100%;
    position:absoulte;
`
export const Component1 = () => {
    return <Header>
        <Img src={require("../../Shared/img/image-hero.jpg")} alt="img" />
        <Navbar />
        <NavHeader/>
     </Header>
}

