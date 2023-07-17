/* eslint-disable react/prop-types */
// import Contact from "../pages/contact/Contact";
import About from "../pages/about/About copy";
import Home from "../pages/home/Home";
// import Services from "../pages/services/Services";

const MainContent = ({
  /* services ,*/ about,
  home,
  scrollToPage /* contact */,
}) => {
  return (
    <main>
      <Home home={home} about={about} scrollToPage={scrollToPage} />
      <About about={about} />
      {/* <Services services={services} /> */}
      {/* <Contact contact={contact} /> */}

      {/* 
      <Testimonial /> */}
    </main>
  );
};

export default MainContent;
