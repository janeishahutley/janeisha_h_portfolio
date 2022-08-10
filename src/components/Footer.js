import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <a href='https://www.linkedin.com/in/janeishahutley/'>
          <FontAwesomeIcon
            className={classes.link}
            icon={['fab', 'linkedin']}
          />
        </a>
        <a href='https://www.github.com/janeishahutley'> <FontAwesomeIcon
            className={classes.link}
            icon={faGithub}
          /></a>
        <a href='https://www.twitter.com/forensicrose'>
          <FontAwesomeIcon className={classes.link} icon={['fab', 'twitter']} />
        </a>
      </div>
      <small className={classes.text}>&copy; 2022 hutcodes.com</small>
    </div>
  )
}

export default Footer
