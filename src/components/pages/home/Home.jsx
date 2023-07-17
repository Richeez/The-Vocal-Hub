/* eslint-disable react/prop-types */
import { ImageBox } from "../../features";
import { Animate } from "../../features/imageBox/styledImgBox";
import { Container } from "../../styled";
import { Button } from "../../styledButtons";
import { StyledHome } from "./styledHome";

const Home = ({ home, about, scrollToPage }) => {
  return (
    <Container>
      <StyledHome ref={home}>
        <div className="clip-path">
          <div className="main-header">
            <p>welcome to</p>
            <h1>the vocal hub</h1>
            <h3>
              Unleash Your Inner Songbird: Uncover the True Beauty of Your Voice
              through Personalized Vocal Coaching.
            </h3>
            {/* <button>get started</button> */}
            <Button onClick={() => scrollToPage(about)}>get started</Button>
          </div>
          <Animate>
            <ImageBox src={"./assets/IMG-20230708-WA0013.jpg"} />
          </Animate>
        </div>
        <p>
          Good vocals possess the captivating ability to transcend boundaries,
          stir emotions, and create an intimate connection with listeners,
          leaving an indelible imprint on their hearts and souls
        </p>
      </StyledHome>
    </Container>
  );
};

export default Home;
