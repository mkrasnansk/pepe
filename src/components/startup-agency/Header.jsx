import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";
import ScrollspyNav from "react-scrollspy-nav";

const Header = () => {
   const [navbar, setNavbar] = useState(false);

   const changeBackground = () => {
      if (window.scrollY >= 95) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };

   window.addEventListener("scroll", changeBackground);

   const menuContent = [
      { itemName: "Kadernictvo", hrefId: "#about" },
      { itemName: "Cennik", hrefId: "#join-us" },
      { itemName: "Obchod", hrefId: "#team" },
      { itemName: "Kontakt", hrefId: "#news" },
   ];

   return (
      <header className={`theme-main-menu sticky-menu theme-menu-five ${navbar ? "fixed" : ""} `}>
         <div className="inner-content">
            <div className="d-flex align-items-center justify-content-lg-center justify-content-between">
               <div className="logo">
                  <Link to="/">
                     <img src={require("../../assets/images/logo/pepeWhite.svg").default} alt="brand" />
                  </Link>
               </div>
               {/* End .logo */}

               <nav className="navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span></span>
                  </button>
                  <div className="collapse navbar-collapse dark-style" id="navbarNav">
                     <ScrollspyNav scrollTargetIds={["about", "join-us", "team", "news"]} offset={0} activeNavClass="active" scrollDuration="100" headerBackground="true">
                        <ul className="navbar-nav">
                           {menuContent.map((list, i) => (
                              <li className="nav-item" key={i}>
                                 <a className="nav-link" href={list.hrefId}>
                                    {list.itemName}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </ScrollspyNav>

                     {/* End .navbar-nav */}

                     <div className="mobile-content d-block d-lg-none  h-100">
                        <MobileMenuContent />
                        <div className="logo d-flex justify-content-center align-items-end w-100  h-25">
                           <Link to="/">
                              <img className="image-fluid" src={require("../../assets/images/logo/pepeW.svg").default} alt="brand" />
                           </Link>
                        </div>
                     </div>
                     {/* <!-- /.mobile-content --> */}
                  </div>
               </nav>
            </div>
         </div>
         {/* <!-- /.inner-content --> */}
      </header>
   );
};

export default Header;
