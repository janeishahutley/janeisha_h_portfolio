import { Fragment } from 'react'
import classes from './Intro.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  return (
    <Fragment>
      <section className={classes.intro}>
        <div className={classes.content}>
          <div className={classes.circle}>
            <FontAwesomeIcon icon='circle' />
          </div>
          <div className={classes.circle3}>
                <FontAwesomeIcon icon='circle' />
              </div>
          <h1 className={classes.title}>Janeisha Hutley</h1>
          <h3 className={classes.subtitle}>Frontend Developer</h3>
          <div className={classes.socials}>
            <a href='https://www.linkedin.com/in/janeishahutley/'>
              <FontAwesomeIcon
                className={classes.link}
                icon={['fab', 'linkedin']}
              />
            </a>
            <a href='https://www.github.com/janeishahutley'>
              <FontAwesomeIcon className={classes.link} icon={faGithub} />
            </a>
            <a href='https://www.twitter.com/forensicrose'>
              <FontAwesomeIcon
                className={classes.link}
                icon={['fab', 'twitter']}
              />
            </a>
          </div>
        </div>
      </section>

      <section className={classes.summary}>
        <div className={classes['summary-content']}>
          <div className={classes.about}>
            <div>
              <div className={classes.circle1}>
                <FontAwesomeIcon icon='circle' />
              </div>
              <div className={classes.circle2}>
                <FontAwesomeIcon icon='circle' />
              </div>
              <h2>A little about me...</h2>
              <p className={classes.text}>
                I am a highly motivated individual aspiring to become a frontend
                developer. After I completed bootcamp, where I learned the
                in-demand technologies and tools to become a successful web
                developer, I continue to progress on my coding journey. As a
                lover of learning, I find the tech industry to be a perfect fit
                for me. There is so much to consume, which is exciting and I am
                ready to jump in and expand my knowlegde!
              </p>
            </div>
            <div className={classes['stack-items']}>
              <h2>Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Intro
