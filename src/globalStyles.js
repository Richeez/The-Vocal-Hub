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
  --bg-color:#f8f3f3;
  --secondary-color: #FF19D9FF;
  --secondary-color-dk: #e70bc3;
  --light-pink: #fd40de;
  --lighter-pink: #f85bde;
  --nav-color:#FF19D9FF;
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

.clip-path {
  background: linear-gradient(to bottom left, var(--light-pink), var(--secondary-color) 80%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);
          clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  position: absolute;

  display: grid;
grid-template-columns: 1fr;
/* gap: 1rem; */
overflow: hidden;
/* background-color: orange; */
place-items:center ;
/* background: var(--light-pink); */
padding-block: 8.5rem;
position: relative;
/* flex-direction: column; */
/* background-color: var(--transparent-black); */
/* background-blend-mode:multiply; */

@media screen and (min-width: 45rem) {
    /* min-height: 100vh; */
    padding-block: 2rem;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
max-width: 90rem;

        
        
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

//? REUSEABLE STYLES

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  width: 100%;
  align-items: start;
  place-items: center;
  @media screen and (min-width: 45rem) {
      place-items:start;
  }
}

.lists{
width: 100%;
    .list{
        width: 100%;
        gap: 1rem;
        li{
        font-size: 1rem;
        line-height: 1.9rem;
        //text-align: center !important;
        width: 100%;
        word-wrap: normal;
        @media screen and (min-width: 45rem) {
         //   text-align: left !important;
        }
    }


       } 
     h2{
    letter-spacing: -1.296px;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    /* width: 548px; */
    word-wrap: normal;
    @media screen and (min-width: 45rem) {
        line-height: 3.5rem;
    font-size: 2.8rem;
    text-align: left;
    
}
       }
       button{
    background: var(--color-white);
    color: var( --primary-color);
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem;
    font-size: inherit;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
&:hover{
    color: var(--color-white) !important;
    background-color: var(--primary-color) !important;

}

}
}

.videoBox{
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
    
}

.textBox{
    gap: 1.3rem;
    width: 100%;
    font-family: inherit;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 45rem) {
        align-items: flex-start;
            justify-content: flex-start;
    }
    

h1, h2, h3{
    letter-spacing: -1.296px;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    /* width: 548px; */
    word-wrap: normal;
    @media screen and (min-width: 45rem) {
        line-height: 3.5rem;
    font-size: 2.8rem;
    text-align: left;
    
}

}
p{
    font-size: 1.1rem;
    line-height: 1.9rem;
    text-align: center;
    width: 100%;
    word-wrap: normal;
    /* font-weight: 500; */
    @media screen and (min-width: 45rem) {
        text-align: left;
    }
}

button{
    background: var(--primary-color);
    color: var(--color-white);
    text-transform: capitalize;
    width: max-content;
    border-radius: 2rem;
    font-size: inherit;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    font-weight: bold;

}
}

.df{
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 45rem) {
        justify-content: space-between;
    }

}





 .fdirc{
    flex-direction: column;
} 
 .jsb{
     flex-direction: column;
     @media screen and (min-width: 45rem) {
    justify-content: space-between;
    flex-direction: row;

    }

} 
.jcc{
justify-content: center;
} 

 .aic{
    align-items: center;

}
 .tac{
text-align: center;
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
