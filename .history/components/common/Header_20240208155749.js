import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Define activeLink state
  const router = useRouter(); // Get the router object

  useEffect(() => {
    // Update activeLink state when route changes
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const handleLinkClick = (sectionId) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking on a link
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="Vertix" caption="Code " className="logomin" />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <a
              href="#home"
              className={activeLink == "/" ? "activeLink" : "none"}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </a>
            <a
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
              onClick={() => handleLinkClick("#contact")}
            >
              Agency
            </a>
            {/* Add similar onClick handlers for other links */}
            <button className="button-primary">book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
