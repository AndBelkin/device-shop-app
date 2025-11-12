import { useEffect, useRef, useState, type FC } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import "./Header.css";

const Header: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (headerRef.current) {
        setIsScrolled(window.scrollY > headerRef.current.clientHeight);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);
  return (
    <header className={`header ${isScrolled ? "header-opacity" : ""}`} ref={headerRef}>
      <div className="container">
        <FaApple className="header-logo" />
        <nav className="header-nav">
          <NavLink to="/store" className="header-nav-item">
            Store
          </NavLink>
          <NavLink to="/categories/1" className="header-nav-item">
            Category-1
          </NavLink>
          <NavLink to="/categories/2" className="header-nav-item">
            Category-2
          </NavLink>
          <NavLink to="/categories/3" className="header-nav-item">
            Category-3
          </NavLink>
          <NavLink to="/categories/4" className="header-nav-item">
            Category-4
          </NavLink>
          <NavLink to="/categories/5" className="header-nav-item">
            Category-5
          </NavLink>
          <NavLink to="/support" className="header-nav-item">
            Support
          </NavLink>
        </nav>
        <MdSearch className="header-icon search-icon" />
        <MdOutlineShoppingBag className="header-icon order-icon" />
      </div>
    </header>
  );
};

export default Header;
