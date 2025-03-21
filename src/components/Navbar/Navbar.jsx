import React from "react";
import Button from "../CommonComponents/Button";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "About Us",
    },
    {
      id: 4,
      name: "Blog",
    },
    {
      id: 5,
      name: "Cases",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];
  return (
    <nav className="bg-white h-16">
      {/* Navbar Element Start */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <img src={Logo} alt={Logo} />
        {/* logo */}
        {/* navbar-items */}
        <div className="flex items-center gap-x-12.5">
          <ul className="flex items-center justify-between gap-11 mr-12.5 text-lg font-bold font-nunito cursor-pointer">
            {navItems?.map((item) => (
              <li
                key={item.id}
                className="font-nunito text-[18px] font-bold text-black rounded customNavItem "
              >
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
          {/* navbar-items */}
          {/* button */}
          <Button content={"Get In Touch"} style={" bg-yellow "} />

          {/* button */}
        </div>
      </div>
      {/* Navbar Element */}
    </nav>
  );
};

export default Navbar;
