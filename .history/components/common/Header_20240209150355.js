import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#" onClick={() => scrollToSection("top")}>
            {/* Assuming "top" is the ID of the section you want to scroll to */}
            <TitleLogo title="Vertix" caption="Code " className="logomin" />
          </a>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"}>
          <a
            href="#"
            onClick={() => scrollToSection("top")}
            className={activeLink == "/" ? "activeLink" : "none"}
          >
            Home
          </a>
          <a
            href="#agency"
            onClick={() => scrollToSection("agency")}
            className={activeLink == "/agency" ? "activeLink" : "none"}
          >
            Agency
          </a>
          <a
            href="#team"
            onClick={() => scrollToSection("team")}
            className={activeLink == "/team" ? "activeLink" : "none"}
          >
            Team
          </a>
          <a
            href="#services"
            onClick={() => scrollToSection("services")}
            className={activeLink == "/services" ? "activeLink" : "none"}
          >
            Services
          </a>
          <a
            href="#showcase"
            onClick={() => scrollToSection("showcase")}
            className={activeLink == "/showcase" ? "activeLink" : "none"}
          >
            Showcase
          </a>
          <a
            href="#blogs"
            onClick={() => scrollToSection("blogs")}
            className={activeLink == "/blogs" ? "activeLink" : "none"}
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className={activeLink == "/contact" ? "activeLink" : "none"}
          >
            Contact
          </a>
          <button className="button-primary">book a consultation</button>
        </nav>
        <button onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
