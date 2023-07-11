import styled from "styled-components";

export const Header = styled.header`
/* padding: 1%; */
position: fixed;
height: 4.4rem;
z-index: 90;
left: 0;
right: 0;
top: 0;
background: linear-gradient(var(--secondary-color), var(--light-pink)) ;
  transition: all 1s ease-in-out;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  color: var(--text-color);
  /* background: yellow; */
  /* padding-top: 5rem ; */

`;

export const Nav = styled.nav`
width: 100%;
position: relative;
display: flex;
padding: 1%;
align-items: center;
font-size: 1.2rem;
justify-content: space-between;

`;
export const LinkCont = styled.ul`
width: 0;
opacity: 0;
pointer-events: none;
user-select: none;
transition: all 1s ease-in-out;
background: linear-gradient( to top, var(--secondary-color), var(--light-pink)) ;
top: -60%;
margin-top: 8rem;
color: var(--white-color);
border-radius: 1rem 0 0 1rem ;
padding: 1rem;
right: -2%;
flex-direction: column;
min-height: 10vh;
position: absolute;
align-items: center;
justify-content: flex-start;
gap: 2rem;




@media screen and (min-width: 45rem) {
        display: flex;
        width: fit-content;
        flex-direction: row;
        height: 4.4rem;
        opacity: 1;
        position: relative;
        pointer-events: all;
        padding-right: 3rem;
        /* padding-top: 4.5rem; */
user-select: all;
transition: all 1s ease-in;
        margin: 0;
        background-color: unset;

        
        
    }
    
    @media screen and (min-width: 64rem) {
display: flex; 
flex-direction: row;
height: 4.4rem;
opacity: 1;
        position: relative;
        pointer-events: all;
transition: all 1s ease-in;



    }



`;
export const NavLink = styled.li`
list-style: none;
    cursor: pointer;
    position: relative;
    outline: none;
    width: 100%;
    display: block;
    padding: .5rem 0;
    white-space: nowrap;
    user-select: none;

    &:hover::after,:focus::after{ 
    width: 100%;
    opacity: 1;
    transition: all 1s ease-in-out;
    }


    &::after,:focus::after {
    content: '';
    position: absolute;
    width:0;
    opacity: 0;
    transition: all 1s ease-in-out;
    background-color: var(--white-color);
    height: .19rem;
    bottom: 0;
    left: 0;
    /* transform: translateX(-50%); */
    }


`;
export const Link = styled.a`
text-decoration: none;
outline: none;
color: var(--white-color);
text-transform: capitalize;

`;
export const Brand = styled.div`
width: 12.5rem;
height: 5rem;
display: flex;
align-items: center;
justify-content: flex-start;
@media screen and (max-width: 40rem) {
}

`;
export const BrandLogo = styled.img`
width: calc(80px * 0.8);
margin-top : auto 0;
/* max-width:fit-content; */
height: calc(80px * 0.8);
margin-left: 1rem;
border-radius: 50%;
object-fit: contain;

`;