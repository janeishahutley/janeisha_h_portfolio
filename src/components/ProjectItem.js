import {useNavigate} from 'react-router-dom'
import classes from './ProjectItem.module.css'

const ProjectItem = ({ image, title, id }) => {
const navigate = useNavigate()

const nextPageHandler = () => {
    navigate('/project/' + id)
}

  return (
    <div className={classes.content} >
        <div className={classes.info} onClick={nextPageHandler}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={classes.image}
        ></div>
        <h1 className={classes.title}>{title}</h1>
        </div>
    </div>
  )
}

export default ProjectItem
