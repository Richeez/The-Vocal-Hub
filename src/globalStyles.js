import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 10rem;
  /* scroll-margin-top: 15rem; */
}

:root{
  --bg-color:#c0c0c0;
  --secondary-color: #FF19D9FF;
  --light-pink: #c76586;
  --nav-color:#b60d45;
  --white-color:#ffff;
  --font-family:  "Poppins", sans-serif;
  --light-white-color: rgba(255, 255, 255, 0.211);
  --lighter-white-color: rgba(255, 255, 255, 0.111);
  --transparent-black: rgba(0, 0, 0, 0.638);
  --transition: all .5s ease-in-out;
  --black-color:#000000;
}

.header{
  background: linear-gradient(var(--secondary-color), var(--light-pink)) ;
  transition: all 1s ease-in-out;
  height: 70px;
  display: flex;
  align-items: flex-end;
  color: var(--text-color);
  /* justify-content: flex-start; */
  padding-top: 5rem ;

  & > {
    margin-top: 4rem;
  }
}
.open{
  @media screen and (max-width: 40rem) {
    width: 50% !important;
    opacity: 1 !important;
    pointer-events: all !important;
  transition: all 1s ease-in;
    
  }
} 

.imageBox{
    width: 100%;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}


.animate{
  /* position: relative; */
        &::after,::before{
            background-color: var(--secondary-color);
            border-top-left-radius: 30%;
            transition: all 1s ease-in-out;
            /* height: .25rem; */
        border-bottom-left-radius: 30%;
        }
        
    &::before{
    content: '';
    top: -300%;
    width: 80%;
    position: absolute;
    transform: rotate(110deg);
    /* transform-origin: top left; */
    }

    &::after{
    content: '';
    top: 300%;
    position: absolute;
    /* transform: rotate(40deg); */
    width: 80% !important;

    }

    .center{
    width: 40% !important;
    height: .25rem;
    /* opacity: 0; */
    /* display: none; */
    transition: all 1s ease-in-out;
    border-top-left-radius: 30%;
     border-bottom-left-radius: 30%;
    background-color: var(--secondary-color);
    transition: transform .5s ease-in-out;
    }

    }
.animator{
    width: 50px;
    height: 50px;
    border-radius: .5rem;
    background-color: var(--secondary-color);
    color: var(--white-color);
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    transition: transform .5s ease-in-out;

    .bugger{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .5s ease-in-out;

    &::before{
    content: '';
    top: 15%;
    width: 2rem;
    height: .2rem;
    position: absolute;
    transform: rotate(45deg);
    transition: transform .5s ease-in-out;
    background-color: var(--white-color);
    }

    &::after{
    content: '';
    width: 2rem;
    height: .2rem;
    top: 300%;
    position: absolute;
    transition: transform .5s ease-in-out;
    transform: rotate(125deg);
    background-color: var(--white-color-01);
    }

    .center{
    width: 2rem;
    height: .2rem;
    background-color: var(--white-color);
    display:none;
    transition: transform .5s ease-in;
    }

    }

    }

body{
  font-size: 1.1rem;
  font-family: var(--font-family);
}

.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  text-transform: capitalize;

  h2{
    font-size: 2rem;
    font-family: 'Tangerine', cursive;
    color: var(--darker-chocolate) ;
    box-shadow: 0 4px 5px var(--darker-chocolate);
    padding: 0 2rem;
    margin-bottom: 1rem;
    border: 0;
    border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;


  }
  p{
    font-size: 1.5rem;
    line-height: 1.6;
 
  }
}

.span-col-2{
    grid-column: span 1;
    
    @media screen and (min-width: 45rem) {
      
      grid-column: span 2;
    }

}
.span-col-3{
    grid-column: span 2 ;
    
    @media screen and (min-width: 45rem) {
      
      grid-column: span 2 / 3;
    }

}
.span-col-full{
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
  background-color:var(--white-color); 
  
}

::-webkit-scrollbar-track {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: inset 0 0 6px var(--white-color);
}


::-webkit-scrollbar-thumb {
  background-color:var(--dark-chocolate);
  border-radius: 1rem;
  border: 2px inset var(--dark-chocolate);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}  

`;

export default Globalstyles
