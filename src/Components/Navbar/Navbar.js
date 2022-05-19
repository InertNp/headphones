import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import styled from "styled-components";
import { grey, white } from "../../Style/Style";
const Nav = styled.nav`
    font-family: 'Overpass', sans-serif;
    color:black;
    position:absolute;
    top:5%;
    width:100%;
    justify-content:center;
    display:flex;
`
const Div1 = styled.div`
    width:80%;
    display:flex;
    flex-basis:row;
    border-bottom: 1px solid ${grey};
    justify-content:space-between;
    align-items:center;
`
const Div2 = styled.div`
    display:flex;
    flex-basis:row;
    justify-content:space-between;
    align-items:center;
`
const H1 = styled.h1`
    color:${grey};
    font-family: Overpass;
    
    `
const H2 = styled.h2`
    text-transform: uppercase;
    color:${white};
    padding:20px;
    font-size:13px;
`
export const Navbar = () => {
    return <Nav>
        <Div1>
            <Div2>
                <H1>
                    audiophile
                </H1>
            </Div2>
            <Div2>
                <H2>
                    home
                </H2>
                <H2>
                    Headphones
                </H2>
                <H2>
                    Speaker
                </H2>
                <H2>
                    earphones
                </H2>

            </Div2>
            <Div2>
                <H1><FontAwesomeIcon icon={faCartShopping} /></H1>
            </Div2>
        </Div1>
    </Nav>
}