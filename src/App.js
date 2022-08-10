import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import ProjectDisplay from './pages/ProjectDisplay'
import Contact from './pages/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faReorder, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faReorder, faCircle )

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path='/' element={<Intro />}></Route>
          <Route path='/projects' element={<Projects />}></Route>

          <Route path='/project/:id' element={<ProjectDisplay />}></Route>

          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  )
}

export default App
