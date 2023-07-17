import styled from "styled-components";

export const StyledHome = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: var(--bg-color); 

> p{
    width: 100%;
    padding: .5rem;
    font-size: 1.5rem;
    margin-top: -12rem;
    /* border-top: 1px solid; */
    text-align: center;
    @media screen and (min-width: 45rem) {
        width: 60%;
    }
}

.main-header{
    display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
  color: var(--white-color);
backdrop-filter:blur(.2rem);
position: relative;
flex-direction: column;
padding: 1rem;
/* border-radius: 1rem; */
width: 100%;
align-self: center;

@media screen and (min-width: 45rem) {
     margin-top: -8rem;
}


/* width: clamp( 200px, 45rem, 80vw); */

background: linear-gradient(to bottom right, var(--lighter-white-color), var(--lighter-white-color), var(--light-white-color));
p{
    text-align: left;
    font-size: 2.5rem;
    font-weight: bold;
    width: 100%;
    font-family: 'Tangerine', cursive;
    text-transform: capitalize;
    word-wrap: normal;

}

h1{
    font-size: 3.5rem;
    text-align: center;
    text-transform: capitalize;
}

}

.imageBox{
    /* border-radius: 1rem; */
overflow: hidden;
height: 50%;
}
`;