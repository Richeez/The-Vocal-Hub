/* eslint-disable react/prop-types */
import { TextBox, VideoBox } from "../../features";
import { StyledAbout } from "./styledAbout copy";

const About = ({ about }) => {
  return (
    <StyledAbout>
      <div ref={about} id="about_us" className="lNS grid">
        <VideoBox src="https://www.youtube.com/embed/VJ23xfOCnXQ" />
        <TextBox
          alignPText=""
          heading2="About Us"
          text1="Unleash Your Voice, Ignite Your Passion: Discover the Art of Singing with The Vocal Hub


          "
          text2="          Welcome to The Vocal Hub, where every voice holds immense power and potential. Our experienced instructors are passionate about helping you find your unique voice, nurture its brilliance, and share it with the world.
          
          At The Vocal Hub, we go beyond technicalities. We embrace artistry and soulfulness, offering personalized guidance to boost your confidence and transform you into an exceptional performer.
          
          Join our vibrant community of singers who have achieved remarkable breakthroughs under our expert guidance. From conquering stage fright to landing coveted roles, our programs are designed to unleash your true vocal potential.
          
          Embark on an unforgettable vocal journey with The Vocal Hub. Let your voice become an instrument of boundless beauty, leaving an indelible mark on the hearts of listeners. Unleash your voice. Ignite your passion. Discover the art of singing with us."
          display="none"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
