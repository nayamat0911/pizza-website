import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom' ;
import {FaPizzaSlice} from 'react-icons/fa'


export const Nav = styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:center;
font-weight:700;

`;
export const NavLink = styled(Link)`
color:#fff;
font-size:3.5rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;
padding-top:50px;

@media screen and (max-width:400){
    position:absolute;
    top:10px;
    left:25px;

}
`;

export const NavIcon = styled.div`
    display:block;
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    color:#fff;
    font-size:2rem;

    @media screen and (max-width:600){
        font-size:1.5rem;
        position:absolute;
    }

    @media screen and (max-width:400){
        font-size:1rem;
        position:absolute;
    }
    p{
        transfrom:translate(-175%, 100%);
        font-weight:bold;
    }
`;




export const Bars = styled(FaPizzaSlice)`
transform:translate(-50%, -15%);
    font-zise:2rem;
`;
