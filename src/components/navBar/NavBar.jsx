/* eslint-disable react/prop-types */
import Menu from "./menu/Menu";
import {
  Header,
  LinkCont,
  NavLink,
  Nav,
  Brand,
  BrandLogo,
  Link,
} from "./styledNav";

const NavBar = ({
  menuBar,
  toggleMenu,
  menu,
  scrollToPage,
  home,
  about,
  testimonials,
  blog,
  services,
  header,
  contact,
}) => {
  return (
    <Header>
      <Menu toggleMenu={toggleMenu} menuBar={menuBar} />
      <Nav ref={header}>
        <Brand>
          <BrandLogo src="./assets/IMG-20230708-WA0010.jpg" alt="" />
        </Brand>
        <LinkCont ref={menu}>
          <NavLink>
            <Link onClick={() => scrollToPage(home)}>home</Link>
          </NavLink>
          {/* <NavLink>feature</NavLink> */}
          <NavLink>
            <Link onClick={() => scrollToPage(about)}>about</Link>
          </NavLink>
          <NavLink>
            <Link onClick={() => scrollToPage(services)}>services</Link>
          </NavLink>
          <NavLink>
            <Link onClick={() => scrollToPage(testimonials)}>testimonials</Link>
          </NavLink>
          <NavLink>
            <Link onClick={() => scrollToPage(blog)}>blog</Link>
          </NavLink>
          <NavLink>
            <Link onClick={() => scrollToPage(contact)}>contact us</Link>
          </NavLink>
        </LinkCont>
      </Nav>
    </Header>
  );
};

export default NavBar;
