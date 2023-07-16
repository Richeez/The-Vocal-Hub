import styled from "styled-components";

export const StyledHome = styled.div`
/* background: url(images/bg-img.jpeg), no-repeat; */
width: 100%;
/* min-height: 50vh; */
/* display: grid; */
/* grid-template-columns: 1fr; */
/* gap: 1rem; */
/* overflow: hidden; */
/* background-color: orange; */
/* place-items:center ; */
background: var(--bg-color); 
/* padding-block: 8.5rem; */
/* position: relative; */
/* flex-direction: column; */
/* background-color: var(--transparent-black); */
/* background-blend-mode:multiply; */

/* @media screen and (min-width: 45rem) {
    /* min-height: 100vh; 
    padding-block: 2rem;

    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
/* max-width: 90rem; 

        
        
    } */

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


    margin-top: -8rem;

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