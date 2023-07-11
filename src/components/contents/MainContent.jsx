/* eslint-disable react/prop-types */
// import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
// import Services from "../pages/services/Services";

const MainContent = ({ /* services ,*/ home /* contact */ }) => {
  return (
    <main>
      <Home home={home} />
      {/* <Services services={services} /> */}
      {/* <Contact contact={contact} /> */}

      {/* <About />
      <Testimonial /> */}
    </main>
  );
};

export default MainContent;
