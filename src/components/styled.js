import styled from "styled-components";

export const Container = styled.section`

width: 100%;
padding-bottom: 2rem;
min-height: 50vh;
position: relative;
overflow: hidden;
&:nth-of-type(1){
    min-height: 100vh;
    
}
&:last-of-type{
    padding-bottom: 0;

}

@media screen and (min-width: 45rem) {
    &:nth-of-type(1){
    min-height: 100vh;
    
}
    min-height: 50vh;

        background-color: var(--white-color);
        
    }
    
    @media screen and (min-width: 64rem) {
    }

`;

export const Button = styled.button`
width: 100px;
padding: .7rem 1rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: .5rem;
font-size: .9rem;
background-color:var(--white-color);
transition: var(--transition);
cursor: pointer;
border: none;
outline: none;
color: var(--secondary-color);

&:hover{
    filter: brightness(2);
    transition: var(--transition);


}

`;
