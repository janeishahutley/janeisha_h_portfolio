import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import classes from './ProjectDisplay.module.css'

const ProjectDisplay = () => {
  const { id } = useParams()
  const project = ProjectList[id]

  return (
    <section className={classes.container}>
      <div className={classes.project}>
        <h1 className={classes.title}>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <p className={classes.description}>{project.description}</p>
        <p className={classes.skills}>
          <strong>Skills: </strong>
          {project.skills}
        </p>
        <div className={classes.showcase}>
          <a href={project.path} className={classes.btn}>Demo</a>
          <a href={project.url}>
            <FontAwesomeIcon className={classes.link} icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectDisplay
