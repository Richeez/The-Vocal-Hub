/* eslint-disable react/prop-types */
import { ImageBox } from "../../features";
import { Animate } from "../../features/imageBox/styledImgBox";
import { Container } from "../../styled";
import { Button } from "../../styledButtons";
import { StyledHome } from "./styledHome";

const Home = ({ home }) => {
  return (
    <Container>
      <StyledHome ref={home}>
        <div className="main-header">
          <p>welcome to</p>
          <h1>the vocal hub</h1>
          {/* <button>get started</button> */}
          <Button>get started</Button>
        </div>
        <Animate>
          <ImageBox src={"src/assets/IMG-20230708-WA0014.jpg"} />
        </Animate>
      </StyledHome>
    </Container>
  );
};

export default Home;
