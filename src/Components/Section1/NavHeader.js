import styled from "styled-components";
import { PrimaryButton } from "../../Style/Button";
import { white } from "../../Style/Style";
const Div1 = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 20%;
    color: ${white};
`
const Div2 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left:10%;
`
const Text1 = styled.p`
    font-weight: lighter;
    font-size: 20px;
    margin-bottom: 10px;
`
const Text2 =  styled.p`
    font-size: 30px;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 10px;
`
const Text3 =  styled.p`
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const NavHeader = () => {
    return <Div1>
        <Div2>
        <Text1>NEW PRODUCT</Text1>
        <Text2>XX99 MARK II <br/>HEADPHONES</Text2>
        <Text3>Experience natural, lifelike audio and exceptional 
build quality made for the passionate music
enthusiast.</Text3>
        <PrimaryButton>See Product</PrimaryButton>
        </Div2>
    </Div1>
}

/*
 NEW PRODUCT
        XX99 MARK II HEADPHONES

Experience natural, lifelike audio and exceptional 
build quality made for the passionate music
enthusiast.

<button>
See Product
</button>
*/