import { useRef } from "react";
import "./App.css";
import Globalstyles from "./globalStyles";
import { Footer, MainContent, NavBar } from ".";

function App() {
  const menuBar = useRef(null);
  const header = useRef(null);
  const menu = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const testimonials = useRef(null);
  const blog = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);
  // const [isInView, setIsInView] = useState(false);

  // const callBackFunc = (entries) => {
  //   const [entry] = entries;
  //   setIsInView(entry.isIntersecting);
  // };

  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.3,
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("rerunning check");
  //   const observer = new IntersectionObserver(callBackFunc, options);
  //   const currentTarget = header.current;
  //   if (home.current) observer.observe(home.current);
  //   if (!isInView) {
  //     currentTarget.classList.add("header");
  //   } else {
  //     setIsInView(true);
  //     currentTarget.classList.remove("header");
  //   }

  //   return () => {
  //     if (home.current) observer.unobserve(home.current);
  //   };
  // }, [home, isInView, options]);

  const toggleMenu = () => {
    const isMenu = menu?.current;
    const isMenuBar = menuBar?.current;
    isMenu?.classList.toggle("open");
    isMenuBar?.classList.toggle("animate");
  };

  const scrollToPage = (page) => {
    window.scrollTo({
      top: page.current.offsetTop,
    });
  };

  return (
    <>
      <Globalstyles />
      <NavBar
        header={header}
        scrollToPage={scrollToPage}
        home={home}
        contact={contact}
        about={about}
        testimonials={testimonials}
        blog={blog}
        // isInView={isInView}
        services={services}
        toggleMenu={toggleMenu}
        menuBar={menuBar}
        menu={menu}
      />
      <MainContent
        about={about}
        testimonials={testimonials}
        blog={blog}
        contact={contact}
        home={home}
        scrollToPage={scrollToPage}
        services={services}
      />
      <Footer />
    </>
  );
}

export default App;
