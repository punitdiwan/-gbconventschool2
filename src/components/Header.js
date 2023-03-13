import React, { useState,useLayoutEffect,useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

// import Carousel from "../components/Carousel";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [down, setDown] = useState(false);
  const [close,setClose]=useState(false);

  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const navbar= document.getElementById("navbar");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        navbar.classList.add("fixedTop");
      } else {
        navbar.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);


  return (
    <>
      <div className="top">
        <div className="topleft">
          <a href="/">Home</a>
        </div>
        <div className="right">
          <div className="first">
            <a href="mailto:school@example.com  ">
            school@example.com  
            </a>
            <br />
            <a href="tel:07552738113, 8435612319">07552738113, 8435612319</a>
          </div>
          <div className="second">
            <a href="" target="_blank">
               LOGIN
            </a>
          </div>
        </div>
      </div>

      <div className="navbar" id="navbar" ref={stickyHeader}>
        <div className="navleft">
        <img src="./img1/logo.png" alt="" />
        </div>
        <div className="navright">
          <ul>
            <li>
              <NavLink to="/" className="new">
                HOME
              </NavLink>
            </li>
            <li className="new">
              <NavLink>ABOUT US</NavLink>
              <ul className="abouts">
                {/* <li>
                  <NavLink to="/about" className="abouts1">
                    ABOUT US
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/director" className="abouts1">
                    DIRECTOR DESK
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/management" className="abouts1">
                    CHAIRMAN DESK
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/principal" className="abouts1">
                    PRINCIPAL DESK
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="new">
              <NavLink>FACILITIES</NavLink>
              <ul className="abouts">
                <li>
                  <NavLink to="/infra" className="abouts1">
                    INFRASTRUCTURE
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/digital" className="abouts1">
                    DIGITAL CLASSROOMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/library" className="abouts1">
                    LIBRARY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dispensary" className="abouts1">
                    DISPENSARY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/transport" className="abouts1">
                    TRANSPORT
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="new">
              <NavLink>ACADEMICS</NavLink>
              <ul className="abouts">
                <li>
                  <NavLink to="/admission" className="abouts1">
                    ADMISSION PROCESSURE
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/updates" className="abouts1">
                    LATEST UPDATES
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/blog" className="new">
               BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="new">
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="new">
                CONTACT US
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="https://cms.schoolscoop.co.in/admin/#/login"
                target="_blank"
                className="new"
              >
                LOGIN
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="new">HALL OF FAME</NavLink>
            </li> */}
          </ul>
        </div>
      </div>

      {/* <div className="nav_scrolled">
        <div className="nav_left">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="nav_right">
          <ul>
            <li>
              <NavLink className="new">HOME</NavLink>
            </li>
            <li>
              <NavLink className="new">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink className="new">ACADEMICS</NavLink>
            </li>
            <li>
              <NavLink className="new">GALLERY</NavLink>
            </li>
            <li>
              <NavLink className="new">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink className="new">LOGIN</NavLink>
            </li>
            <li>
              <NavLink className="new">HALL OF FAME</NavLink>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="mobile">
        <div className="mobile_top">
          <ul>
            <li>
              <a href="mailto:school@example.com  ">
              school@example.com  
              </a>
            </li>

            <li>
              <a href="tel:07552738113, 8435612319">
              07552738113, 8435612319
              </a>
            </li>
          </ul>
          <a href="" target="_blank">
             LOGIN
          </a>
        </div>

        <div className="mobile_top2">
          <img src="./img1/logo.png" alt="" />
          <div className="mobile_right">
            <FaBars
              style={{ color: "#ffff", fontSize: "2rem" }}
              onClick={() => setOpen(!open)}
            />

            {open ? (
              <div className="mob">
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li className="new-1">
                    <NavLink>
                      ABOUT US{" "}
                      <IoMdArrowDropdown onClick={() => setShow(!show)} />
                    </NavLink>
                    {show ? (
                      <ul className="new1" onClick={() => setShow(!show)}>
                        {/* <li onClick={() => setShow(!show)}>
                          <NavLink to="/about">ABOUT US</NavLink>
                        </li> */}
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/director">DIRECTOR DESK</NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/management">CHAIRMAN DESK</NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/principal">PRINCIPAL DESK</NavLink>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="new-1">
                    <NavLink>
                      FACILITIES
                      <IoMdArrowDropdown onClick={() => setDown(!down)} />
                    </NavLink>
                    {down ? (
                      <ul className="new1" onClick={() => setDown(!down)}>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/infra">
                            INFRASTRUCTURE
                          </NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/digital">DIGITAL CLASSROOMS</NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/library">LIBRARY</NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/dispensary">DISPENSARY</NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/transport">TRANSPORT</NavLink>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="new-1">
                    <NavLink>
                      ACADEMICS{" "}
                      <IoMdArrowDropdown onClick={() => setClose(!close)} />
                    </NavLink>
                    {close ? (
                      <ul className="new1" onClick={() => setClose(!close)}>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/admission">
                            ADMISSION PROCESSURE
                          </NavLink>
                        </li>
                        <li onClick={() => setShow(!show)}>
                          <NavLink to="/updates">LATEST UPDATES</NavLink>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <NavLink to="/blog">BLOGS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery">GALLERY</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/">LOGIN</NavLink>
                  </li> */}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
