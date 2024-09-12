import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href=" " className="logo">
        <span style={{ color: 'While', fontWeight: 'bold' }}>Harsh Gupta</span>

      </a>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/harsh-gupta-430550151/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/harshgupta024"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/harsh__gupta_._/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}