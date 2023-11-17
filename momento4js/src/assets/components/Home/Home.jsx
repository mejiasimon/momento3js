import "./Home.css"
import { Form } from "../Form/Form"
import { Habitaciones } from "../Habitaciones/Habitaciones"
export function Home(){
    return (
      <>
        <div className="wallpaper">
          <div className="container-nav">
            <ul>
              <li>
                <a href="">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/renting-63833.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview.png?alt=media&token=c0c7dda9-2ea6-4456-afe5-39a2859b82fd"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#reservas">reservas</a>
              </li>
              <li>
                <a href="#">habitaciones</a>
              </li>
            </ul>
          </div>
          <Form></Form>
          <Habitaciones></Habitaciones>
          <footer>
            <div className="container-footer2">
              <div className="custom-shape-divider-bottom-1691090866">
                <div className="container-footer">
                  <div>
                    <center>
                      <ul className="menu-bar2">
                        <li>
                          <a
                            className="nav-link2"
                            href="https://twitter.com/Marvel"
                          >
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link2"
                            href="https://codepen.io/mejiasimon"
                          >
                            Codepen
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link2"
                            href="mailto:simonmejiammm@gmail.com"
                          >
                            Email
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link2"
                            href="https://github.com/mejiasimon/marvel"
                          >
                            Github
                          </a>
                        </li>
                        <li>
                          <p>👋</p>
                        </li>
                      </ul>
                    </center>
                  </div>

                  <img
                    className="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/renting-63833.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview.png?alt=media&token=c0c7dda9-2ea6-4456-afe5-39a2859b82fd"
                    alt=""
                  />
                </div>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
}