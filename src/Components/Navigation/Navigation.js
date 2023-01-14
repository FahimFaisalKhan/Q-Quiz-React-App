import React, { useEffect, useState } from "react";
import { Navbar, Dropdown, Button, Menu, Input, Toggle } from "react-daisyui";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import quiz from "../../Static/Icon/quiz.svg";
const Navigation = () => {
  const [searchField, setSearchField] = useState(false);
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    const subscription = () => {
      if (theme === false) {
        document
          .getElementsByTagName("html")[0]
          .setAttribute("data-theme", "dark");
      } else {
        document
          .getElementsByTagName("html")[0]
          .setAttribute("data-theme", "light");
      }
    };
    subscription();
    return () => subscription();
  }, [theme]);
  return (
    <div className="pb-20 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="container mx-auto border-b-4 border-slate-400 text-accent-content  grid grid-rows-1 sm:flex">
        <Navbar.Start className="w-full justify-between sm:justify-start sm:w-auto">
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>
                <Link to={"/"}>Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/about"}>About</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/profile"}>Profile</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={"/statistics"}>Statistics</Link>
              </Dropdown.Item>

              <li tabIndex={0}>
                <Link className="justify-between">
                  Mode
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>
                      <Toggle value={theme} onClick={changeTheme} />
                    </a>
                  </li>
                </ul>
              </li>
            </Dropdown.Menu>
          </Dropdown>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={quiz} className="w-8 mr-2 " alt="" />
            Q-Quiz
          </Link>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item className="hover:bg-accent-focus rounded-lg ">
              <Link className="active:bg-accent-focus" to={"/"}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item className="hover:bg-accent-focus rounded-lg">
              <Link className="active:bg-accent-focus" to={"/about"}>
                About
              </Link>
            </Menu.Item>
            <Menu.Item className="hover:bg-accent-focus rounded-lg">
              <Link className="active:bg-accent-focus" to={"/profile"}>
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item className="hover:bg-accent-focus rounded-lg">
              <Link className="active:bg-accent-focus" to={"/statistics"}>
                Statistics
              </Link>
            </Menu.Item>

            <Menu.Item
              className="hover:bg-accent-focus rounded-lg"
              tabIndex={0}
            >
              <Link className="active:bg-accent-focus">
                Mode
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>
                    <Toggle value={theme} onClick={changeTheme} />
                  </a>
                </Menu.Item>
              </Menu>
            </Menu.Item>
          </Menu>
        </Navbar.Center>
        <Navbar.End className="w-full">
          <Input
            placeholder="Search"
            className={`${
              searchField ? "inline-block" : "hidden"
            } mr-2 search-field`}
          />
          <FontAwesomeIcon
            className="text-xl hover:bg-slate-300 hover:text-base-100 p-4 rounded-full duration-500 cursor-pointer"
            icon={faMagnifyingGlass}
            onClick={() => setSearchField(!searchField)}
          ></FontAwesomeIcon>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Navigation;
