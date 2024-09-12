import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/harshgupta024/Upscale-Your-Images" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/harshgupta024/Upscale-Your-Images" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Upscale Your Images</h3>
              <p> An image upscaling application built using machine learning models to enhance image resolution while maintaining quality.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenCV</li>
                <li>TensorFlow</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/harshgupta024/plant-diseases" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/harshgupta024/plant-diseases" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Plant Disease Prediction</h3>
              <p> A machine learning project that identifies plant diseases from images, using advanced deep learning models.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Keras</li>
                <li>TensorFlow</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/harshgupta024/Olympics_Data_Analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/harshgupta024/Olympics_Data_Analysis" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Olympics Data Analysis</h3>
              <p> A data analysis project visualizing the trends and performances in the Olympics over the years using data science techniques.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/minute-mentor/MinuteMentor" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/minute-mentor/MinuteMentor" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Employee Time Tracking System</h3>
              <p> Developed a web-based employee time tracking system to monitor working hours, task completion, and productivity.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/harshgupta024/Weather_App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/harshgupta024/Weather_App" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p> A weather application built with React that provides real-time weather data for various locations around the world.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>OpenWeather API</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/harshgupta024/Amazon_Clone" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" style={{ marginRight: "auto" }} />
                </a>
                <a href="https://github.com/harshgupta024/Amazon_Clone" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" style={{ marginLeft: "auto" }} />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Amazon Clone</h3>
              <p> A full-stack e-commerce application mimicking the functionality of Amazon, including user authentication, product listing, and cart features.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Firebase</li>
                <li>Stripe API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
