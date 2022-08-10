import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

import classes from './Projects.module.css'

const Projects = () => {
  return (
    <div className={classes.content}>
    <div className={classes.list}>
      {ProjectList.map((project, idx) => (
        <ProjectItem key={idx} id={idx} title={project.title} image={project.image} />
      ))}

      {/* <ProjectItem title='Rock Paper Scissors' image={image1} />
      <ProjectItem title='Rock Paper Scissors' image={image1} />
      <ProjectItem title='Rock Paper Scissors' image={image1} /> */}
    </div>
    </div>
  )
}

export default Projects
